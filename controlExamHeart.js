function loadStoredAnswers() {
    const stored = sessionStorage.getItem('examAnswers');
    return stored ? JSON.parse(stored) : {};
}

function saveAnswer(questionId, value) {
    const answers = loadStoredAnswers();
    answers[questionId] = value;
    sessionStorage.setItem('examAnswers', JSON.stringify(answers));
}

function calculateScore(answers) {
    let score = 0;
    questions.forEach(q => {
        const userAnswer = answers[q.id];
        if (!userAnswer) return; // Unanswered
        if (userAnswer === q.answer) {
            score += 0.75;
        } else {
            score -= 0.25;
        }
    });
    return score;
}

function markIncorrectAnswers(answers) {
    const wrongQuestions = [];
    questions.forEach(q => {
        const userAnswer = answers[q.id];
        if (!userAnswer) return; // Skipped
        const questionDiv = $(`#question-${q.id}`);
        if (userAnswer === q.answer) {
            questionDiv.addClass('correct-answer');
        } else {
            questionDiv.addClass('wrong-answer');
            wrongQuestions.push(q.id);
        }
    });
    // Store result info
    sessionStorage.setItem('wrongQuestions', JSON.stringify(wrongQuestions));
}

function startTimer() {
    const timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert('Time is up! Submitting your exam.');
            $('#examForm').submit();
        } else {
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;
            $('#examTimerDisplay').text(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
            timeLeft--;
        }
        sessionStorage.setItem('examTimeLeft', $('#examTimerDisplay').text());
    }, 1000);
}

$(document).on('click', '#startExam', function () {
    const studentGivenName = $('#studentName').val();
    const studentGivenEmail = $('#studentEmail').val();
    const selectedPaperSet = $('input[type="radio"][name="selectedPaperSet"]:checked').val();
    if (!studentGivenName) {
        alert('Please enter your name to start the exam.');
        return;
    }
    if (!selectedPaperSet) {
        alert('Please select a paper set to start the exam.');
        return;
    }
    sessionStorage.setItem('studentName', studentGivenName);
    sessionStorage.setItem('studentEmail', studentGivenEmail);
    sessionStorage.setItem('selectedPaperSet', selectedPaperSet);
    sessionStorage.setItem('examStarted', 'true');
    window.location.href = window.location.href.split('?')[0] + '?paperSet=' + selectedPaperSet;
});

$('.clearStorage').on('click', function () {
    const studentStoredName = sessionStorage.getItem("studentName");
    const studentStoredEmail = sessionStorage.getItem("studentEmail");

    sessionStorage.clear();

    if (studentStoredName !== null) {
        sessionStorage.setItem("studentName", studentStoredName);
    }
    if (studentStoredEmail !== null) {
        sessionStorage.setItem("studentEmail", studentStoredEmail);
    }
    window.location.href = window.location.href.split('?')[0];
});

const container = $('#questionsContainer');
const storedAnswers = loadStoredAnswers();
const submitted = sessionStorage.getItem('examSubmitted') === 'true';
const wrongQuestions = JSON.parse(sessionStorage.getItem('wrongQuestions') || '[]');
const studentName = sessionStorage.getItem('studentName') || '';
const studentEmail = sessionStorage.getItem('studentEmail') || '';
const examStarted = sessionStorage.getItem('examStarted') === 'true';

$('#studentName').val(studentName);
$('#studentEmail').val(studentEmail);
const finalScoreExamStored = sessionStorage.getItem('finalScoreExam');
if (examStarted) {
    $('#examInstructions').hide();
    $('#examContent').show();
    $('#studentNameDisplay').text(`(${studentName})`);
    const timeLeftToDisplay = sessionStorage.getItem('examTimeLeft') || '02:00:00';
    const timeParts = timeLeftToDisplay.split(':');
    timeLeft = parseInt(timeParts[0]) * 3600 + parseInt(timeParts[1]) * 60 + parseInt(timeParts[2]);
    $('#examTimerDisplay').text(timeLeftToDisplay);
    $('#startExam').prop('disabled', true);
    if(submitted) {
        $('#examTimerDisplay').html(''); // Reset timer display
        $('.resultSection').show();
        $('.finalScoreResult').text(finalScoreExamStored);
        $('#submitExamBtn').hide();
    } else {
        startTimer();
    }   
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
questions.forEach(q => shuffleArray(q.options));
// shuffleArray(questions);

// Load questions dynamically
questions.forEach((q, index) => {
    const isWrong = submitted && wrongQuestions.includes(q.id);
    const isCorrect = submitted && storedAnswers[q.id] === q.answer;

    const optionsHTML = q.options.map((opt, i) => {
        const isChecked = storedAnswers[q.id] === opt ? 'checked' : '';
        return `
            <div class="form-check">
                <input class="form-check-input" type="radio" name="q${q.id}" id="q${q.id}_opt${i}" value="${opt}" ${isChecked} ${submitted ? 'disabled' : ''}>
                <label class="form-check-label" for="q${q.id}_opt${i}">
                    ${opt}
                </label>
            </div>
        `;
    }).join('');
    const questionBlock = `
        <div class="mb-4 p-3 border rounded ${isCorrect ? 'correct-answer' : ''} ${isWrong ? 'wrong-answer' : ''}" id="question-${q.id}">
            <h5>Q${index + 1}. ${q.question} <span class="correctAnswerIs" style="color:green"></span></h5>
            ${optionsHTML}
        </div>
    `;
    container.append(questionBlock);
    if(submitted && (isWrong || !isCorrect)) {
        $('#question-'+q.id).find('.correctAnswerIs').text("( "+q.answer+" )");
    }
});

// Save to sessionStorage on change
$('#questionsContainer').on('change', 'input[type="radio"]', function () {
    const questionId = parseInt($(this).attr('name').substring(1));
    const selectedValue = $(this).val();
    saveAnswer(questionId, selectedValue);
});

// On submit
$('#examForm').on('submit', function (e) {
    e.preventDefault();
    const answers = loadStoredAnswers();
    const finalScoreExam = calculateScore(answers);

    // Save data in session
    sessionStorage.setItem('finalScoreExam', finalScoreExam);
    sessionStorage.setItem('examSubmitted', 'true');
    // Show result
    // $('.resultSection').show();
    // $('.finalScoreResult').text(finalScoreExam);
    // $('.examTimerDisplay').html(''); // Reset timer display
    // // Highlight wrong answers
    // markIncorrectAnswers(answers);
    // Reload to re-render with styles
    window.location.href = window.location.href + '&emailSend=true';
});

const urlParamsForEmail = new URLSearchParams(window.location.search);
const sendEmailParams = urlParamsForEmail.get('emailSend');
if (sendEmailParams === 'true' && submitted) {
    let studentProvidedEmail = sessionStorage.getItem('studentEmail');
    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    if (!isValidEmail(studentProvidedEmail)) {
        studentProvidedEmail = 'drop2rajeev@gmail.com';
    }
    sendScoreEmail(studentName, questions.length, finalScoreExamStored, studentProvidedEmail, wrongQuestions);
}

// 3. Function to send the email with HTML formatting
function sendScoreEmail(name, totalQuestion, scoreGained, emailTo, wrongQuestions) {
    const currentTime = new Date().toLocaleString(); // format time
    const htmlMessage = `
        <p>Hi <strong>${name}</strong>,</p>
        <p>Here is your <strong>GNM Online Exam Result</strong>:</p>
        <ul>
            <li><strong>Total Questions:</strong> ${totalQuestion}</li>
            <li><strong>Correct Answers:</strong> ${Object.keys(storedAnswers).length - wrongQuestions.length}</li>
            <li><strong>Wrong Answers:</strong> ${wrongQuestions.length}</li>
            <li><strong>Score:</strong> ${scoreGained}</li>
            <li><strong>Percentage:</strong> ${((scoreGained / (totalQuestion * 0.75)) * 100).toFixed(2)}%</li>
        </ul>
        <p>Regards,<br><strong>Rajeev Gupta</strong></p>
    `;

    emailjs.send("GNM_EXAM_EMAIL_SERVICE", "GNM_ONLINE_EXAM_TEMPLATE", {
        name: name,
        to_email: emailTo,
        time: currentTime,
        message: htmlMessage
    }).then(function (response) {
        console.log("✅ Email sent successfully!", response);
    }, function (error) {
        console.error("❌ Email failed to send.", error);
    });
}