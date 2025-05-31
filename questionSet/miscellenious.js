let timeLeft = 7200; // 2 hours in seconds
const questions = [
    {
        id: 1,
        question: "Which vitamin is necessary for blood clotting?",
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin K"],
        answer: "Vitamin K"
    },
    {
        id: 2,
        question: "What is the normal range of body temperature in Celsius?",
        options: ["36.5°C – 37.5°C", "35.0°C – 36.0°C", "37.5°C – 38.5°C", "34.0°C – 35.0°C"],
        answer: "36.5°C – 37.5°C"
    },
    {
        id: 3,
        question: "What is the universal blood donor group?",
        options: ["A", "B", "AB", "O"],
        answer: "O"
    },
    {
        id: 4,
        question: "Which organ produces insulin?",
        options: ["Liver", "Pancreas", "Kidney", "Heart"],
        answer: "Pancreas"
    },
    {
        id: 5,
        question: "What is the primary function of white blood cells?",
        options: ["Transport oxygen", "Fight infection", "Clot blood", "Store energy"],
        answer: "Fight infection"
    },
    {
        id: 6,
        question: "Which part of the brain controls balance and coordination?",
        options: ["Cerebrum", "Cerebellum", "Medulla", "Pons"],
        answer: "Cerebellum"
    },
    {
        id: 7,
        question: "What does the term 'tachycardia' refer to?",
        options: ["Slow heart rate", "Fast heart rate", "Irregular heart beat", "Normal heart rate"],
        answer: "Fast heart rate"
    },
    {
        id: 8,
        question: "What is the main source of energy for the human body?",
        options: ["Proteins", "Fats", "Carbohydrates", "Vitamins"],
        answer: "Carbohydrates"
    },
    {
        id: 9,
        question: "Which disease is caused by deficiency of Vitamin C?",
        options: ["Rickets", "Scurvy", "Beriberi", "Pellagra"],
        answer: "Scurvy"
    },
    {
        id: 10,
        question: "What is the normal respiratory rate for an adult?",
        options: ["12-20 breaths per minute", "6-10 breaths per minute", "20-30 breaths per minute", "30-40 breaths per minute"],
        answer: "12-20 breaths per minute"
    },
    {
        id: 11,
        question: "Which part of the cell contains genetic material?",
        options: ["Cytoplasm", "Nucleus", "Mitochondria", "Ribosome"],
        answer: "Nucleus"
    },
    {
        id: 12,
        question: "Which blood cells help in clotting?",
        options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
        answer: "Platelets"
    },
    {
        id: 13,
        question: "Which mineral is essential for oxygen transport in blood?",
        options: ["Calcium", "Iron", "Potassium", "Magnesium"],
        answer: "Iron"
    },
    {
        id: 14,
        question: "What is the medical term for low blood sugar?",
        options: ["Hypoglycemia", "Hyperglycemia", "Hypertension", "Hypotension"],
        answer: "Hypoglycemia"
    },
    {
        id: 15,
        question: "Which organ filters blood to produce urine?",
        options: ["Liver", "Kidneys", "Lungs", "Pancreas"],
        answer: "Kidneys"
    },
    {
        id: 16,
        question: "What is the normal pulse rate for a healthy adult?",
        options: ["40-60 beats per minute", "60-100 beats per minute", "100-120 beats per minute", "120-140 beats per minute"],
        answer: "60-100 beats per minute"
    },
    {
        id: 17,
        question: "Which vitamin deficiency causes night blindness?",
        options: ["Vitamin A", "Vitamin B12", "Vitamin D", "Vitamin E"],
        answer: "Vitamin A"
    },
    {
        id: 18,
        question: "What is the primary function of hemoglobin?",
        options: ["Transport oxygen", "Transport carbon dioxide", "Fight infections", "Clot blood"],
        answer: "Transport oxygen"
    },
    {
        id: 19,
        question: "Which condition is characterized by elevated blood pressure?",
        options: ["Hypotension", "Hypertension", "Anemia", "Leukemia"],
        answer: "Hypertension"
    },
    {
        id: 20,
        question: "What is the normal pH range of human blood?",
        options: ["6.8 - 7.0", "7.35 - 7.45", "7.8 - 8.0", "6.0 - 6.5"],
        answer: "7.35 - 7.45"
    },
    {
        id: 21,
        question: "Which vitamin is essential for calcium absorption?",
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        answer: "Vitamin D"
    },
    {
        id: 22,
        question: "Which blood group is called the universal recipient?",
        options: ["A", "B", "AB", "O"],
        answer: "AB"
    },
    {
        id: 23,
        question: "What is the medical term for difficulty in breathing?",
        options: ["Apnea", "Dyspnea", "Bradypnea", "Tachypnea"],
        answer: "Dyspnea"
    },
    {
        id: 24,
        question: "Which part of the body produces bile?",
        options: ["Stomach", "Liver", "Pancreas", "Gallbladder"],
        answer: "Liver"
    },
    {
        id: 25,
        question: "What is the primary function of the large intestine?",
        options: ["Absorb nutrients", "Absorb water", "Digest proteins", "Produce enzymes"],
        answer: "Absorb water"
    },
    {
        id: 26,
        question: "Which disease is caused by the deficiency of iodine?",
        options: ["Goiter", "Scurvy", "Rickets", "Beriberi"],
        answer: "Goiter"
    },
    {
        id: 27,
        question: "What is the average adult human blood volume?",
        options: ["2-3 liters", "4-5 liters", "5-6 liters", "7-8 liters"],
        answer: "5-6 liters"
    },
    {
        id: 28,
        question: "Which vitamin is important for vision?",
        options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
        answer: "Vitamin A"
    },
    {
        id: 29,
        question: "What does 'Bradycardia' mean?",
        options: ["Slow heart rate", "Fast heart rate", "Irregular heart rate", "Normal heart rate"],
        answer: "Slow heart rate"
    },
    {
        id: 30,
        question: "Which part of the nervous system controls voluntary movements?",
        options: ["Autonomic nervous system", "Central nervous system", "Somatic nervous system", "Sympathetic nervous system"],
        answer: "Somatic nervous system"
    },
    {
        id: 31,
        question: "Which blood component transports hormones?",
        options: ["Plasma", "Platelets", "Red blood cells", "White blood cells"],
        answer: "Plasma"
    },
    {
        id: 32,
        question: "What is the normal blood pressure range for adults?",
        options: ["90/60 mmHg", "120/80 mmHg", "140/90 mmHg", "160/100 mmHg"],
        answer: "120/80 mmHg"
    },
    {
        id: 33,
        question: "Which vitamin helps in wound healing?",
        options: ["Vitamin C", "Vitamin D", "Vitamin E", "Vitamin K"],
        answer: "Vitamin C"
    },
    {
        id: 34,
        question: "What is the common site for intramuscular injection?",
        options: ["Deltoid", "Biceps", "Forearm", "Calf"],
        answer: "Deltoid"
    },
    {
        id: 35,
        question: "Which blood cells increase during infection?",
        options: ["Red blood cells", "White blood cells", "Platelets", "Plasma cells"],
        answer: "White blood cells"
    },
    {
        id: 36,
        question: "What is the first stage of wound healing?",
        options: ["Proliferation", "Inflammation", "Maturation", "Remodeling"],
        answer: "Inflammation"
    },
    {
        id: 37,
        question: "Which nutrient is essential for muscle repair?",
        options: ["Carbohydrates", "Proteins", "Fats", "Vitamins"],
        answer: "Proteins"
    },
    {
        id: 38,
        question: "Which organ regulates metabolism?",
        options: ["Kidney", "Liver", "Thyroid gland", "Heart"],
        answer: "Thyroid gland"
    },
    {
        id: 39,
        question: "What is the medical term for low blood pressure?",
        options: ["Hypertension", "Hypotension", "Tachycardia", "Bradycardia"],
        answer: "Hypotension"
    },
    {
        id: 40,
        question: "Which vitamin deficiency causes rickets?",
        options: ["Vitamin A", "Vitamin B", "Vitamin D", "Vitamin C"],
        answer: "Vitamin D"
    },
    {
        id: 41,
        question: "What is the function of alveoli in lungs?",
        options: ["Filter dust", "Exchange gases", "Produce mucus", "Protect airway"],
        answer: "Exchange gases"
    },
    {
        id: 42,
        question: "Which organ stores bile?",
        options: ["Liver", "Pancreas", "Gallbladder", "Stomach"],
        answer: "Gallbladder"
    },
    {
        id: 43,
        question: "Which type of immunity is acquired by vaccination?",
        options: ["Natural active immunity", "Artificial active immunity", "Natural passive immunity", "Artificial passive immunity"],
        answer: "Artificial active immunity"
    },
    {
        id: 44,
        question: "Which hormone regulates blood sugar levels?",
        options: ["Thyroxine", "Insulin", "Adrenaline", "Estrogen"],
        answer: "Insulin"
    },
    {
        id: 45,
        question: "What is the medical term for excessive bleeding?",
        options: ["Hemophilia", "Leukemia", "Anemia", "Thrombocytopenia"],
        answer: "Hemophilia"
    },
    {
        id: 46,
        question: "What is the main function of the small intestine?",
        options: ["Absorb water", "Absorb nutrients", "Store food", "Produce enzymes"],
        answer: "Absorb nutrients"
    },
    {
        id: 47,
        question: "Which vitamin deficiency causes beriberi?",
        options: ["Vitamin B1", "Vitamin B12", "Vitamin C", "Vitamin D"],
        answer: "Vitamin B1"
    },
    {
        id: 48,
        question: "Which electrolyte is important for nerve transmission?",
        options: ["Sodium", "Calcium", "Potassium", "Chloride"],
        answer: "Sodium"
    },
    {
        id: 49,
        question: "What is the primary function of lymph nodes?",
        options: ["Filter lymph", "Produce hormones", "Store blood", "Digest food"],
        answer: "Filter lymph"
    },
    {
        id: 50,
        question: "Which vitamin helps in blood clotting?",
        options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
        answer: "Vitamin K"
    },
    {
        id: 51,
        question: "What is the normal range of body temperature in Celsius?",
        options: ["35.0 - 36.0", "36.1 - 37.2", "37.3 - 38.5", "38.6 - 39.9"],
        answer: "36.1 - 37.2"
    },
    {
        id: 52,
        question: "Which vitamin is important for blood clotting?",
        options: ["Vitamin A", "Vitamin D", "Vitamin K", "Vitamin E"],
        answer: "Vitamin K"
    },
    {
        id: 53,
        question: "What is the term for the inflammation of the liver?",
        options: ["Hepatitis", "Nephritis", "Gastritis", "Dermatitis"],
        answer: "Hepatitis"
    },
    {
        id: 54,
        question: "Which part of the brain controls balance and coordination?",
        options: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
        answer: "Cerebellum"
    },
    {
        id: 55,
        question: "What is the largest organ in the human body?",
        options: ["Liver", "Skin", "Lungs", "Heart"],
        answer: "Skin"
    },
    {
        id: 56,
        question: "What is the basic unit of structure and function in living organisms?",
        options: ["Tissue", "Cell", "Organ", "System"],
        answer: "Cell"
    },
    {
        id: 57,
        question: "Which vitamin deficiency causes scurvy?",
        options: ["Vitamin B12", "Vitamin C", "Vitamin D", "Vitamin A"],
        answer: "Vitamin C"
    },
    {
        id: 58,
        question: "Which organ is responsible for filtering blood?",
        options: ["Liver", "Kidneys", "Heart", "Lungs"],
        answer: "Kidneys"
    },
    {
        id: 59,
        question: "What is the normal respiratory rate for an adult at rest?",
        options: ["8-12 breaths per minute", "12-20 breaths per minute", "20-28 breaths per minute", "28-36 breaths per minute"],
        answer: "12-20 breaths per minute"
    },
    {
        id: 60,
        question: "Which vitamin is synthesized by the skin upon exposure to sunlight?",
        options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
        answer: "Vitamin D"
    },
    {
        id: 61,
        question: "Which blood type is known as the universal donor?",
        options: ["A", "B", "AB", "O"],
        answer: "O"
    },
    {
        id: 62,
        question: "What is the main function of hemoglobin?",
        options: ["Transport oxygen", "Fight infections", "Clot blood", "Carry nutrients"],
        answer: "Transport oxygen"
    },
    {
        id: 63,
        question: "What is the common symptom of dehydration?",
        options: ["Excessive sweating", "Dry mouth and skin", "Increased appetite", "Rapid hair growth"],
        answer: "Dry mouth and skin"
    },
    {
        id: 64,
        question: "Which gland produces adrenaline?",
        options: ["Pituitary gland", "Adrenal gland", "Thyroid gland", "Pancreas"],
        answer: "Adrenal gland"
    },
    {
        id: 65,
        question: "What is the term for the process of cell division?",
        options: ["Mitosis", "Meiosis", "Osmosis", "Diffusion"],
        answer: "Mitosis"
    },
    {
        id: 66,
        question: "Which vitamin is essential for calcium absorption?",
        options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
        answer: "Vitamin D"
    },
    {
        id: 67,
        question: "What is the common cause of anemia?",
        options: ["Iron deficiency", "Vitamin D deficiency", "Calcium deficiency", "Protein deficiency"],
        answer: "Iron deficiency"
    },
    {
        id: 68,
        question: "Which part of the eye controls the amount of light entering?",
        options: ["Retina", "Cornea", "Iris", "Lens"],
        answer: "Iris"
    },
    {
        id: 69,
        question: "What is the term for high blood sugar levels?",
        options: ["Hypoglycemia", "Hyperglycemia", "Hypotension", "Hypertension"],
        answer: "Hyperglycemia"
    },
    {
        id: 70,
        question: "Which vitamin deficiency causes pellagra?",
        options: ["Vitamin B3", "Vitamin B12", "Vitamin C", "Vitamin A"],
        answer: "Vitamin B3"
    },
    {
        id: 71,
        question: "Which organ produces insulin?",
        options: ["Liver", "Pancreas", "Adrenal gland", "Kidneys"],
        answer: "Pancreas"
    },
    {
        id: 72,
        question: "What is the term for the removal of a body part?",
        options: ["Amputation", "Transplantation", "Biopsy", "Incision"],
        answer: "Amputation"
    },
    {
        id: 73,
        question: "What is the average pulse rate for a healthy adult?",
        options: ["40-60 beats/min", "60-100 beats/min", "100-120 beats/min", "120-140 beats/min"],
        answer: "60-100 beats/min"
    },
    {
        id: 74,
        question: "Which mineral is important for oxygen transport in the blood?",
        options: ["Calcium", "Iron", "Potassium", "Sodium"],
        answer: "Iron"
    },
    {
        id: 75,
        question: "What is the function of platelets in blood?",
        options: ["Transport oxygen", "Fight infection", "Help in clotting", "Carry nutrients"],
        answer: "Help in clotting"
    },
    {
        id: 76,
        question: "Which part of the nervous system controls voluntary movements?",
        options: ["Autonomic nervous system", "Central nervous system", "Somatic nervous system", "Peripheral nervous system"],
        answer: "Somatic nervous system"
    },
    {
        id: 77,
        question: "Which disease is caused by deficiency of iodine?",
        options: ["Goiter", "Scurvy", "Rickets", "Beriberi"],
        answer: "Goiter"
    },
    {
        id: 78,
        question: "What is the normal pH range of human blood?",
        options: ["6.8-7.2", "7.35-7.45", "7.8-8.0", "6.0-6.5"],
        answer: "7.35-7.45"
    },
    {
        id: 79,
        question: "Which condition is characterized by the loss of bone density?",
        options: ["Osteoarthritis", "Osteoporosis", "Rheumatoid arthritis", "Scoliosis"],
        answer: "Osteoporosis"
    },
    {
        id: 80,
        question: "Which vitamin is essential for vision?",
        options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
        answer: "Vitamin A"
    },
    {
        id: 81,
        question: "What is the function of the large intestine?",
        options: ["Absorb nutrients", "Absorb water", "Produce enzymes", "Filter toxins"],
        answer: "Absorb water"
    },
    {
        id: 82,
        question: "Which blood cells help fight infection?",
        options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
        answer: "White blood cells"
    },
    {
        id: 83,
        question: "What is the name of the bone found in the upper arm?",
        options: ["Femur", "Tibia", "Humerus", "Radius"],
        answer: "Humerus"
    },
    {
        id: 84,
        question: "Which part of the heart pumps oxygenated blood to the body?",
        options: ["Right atrium", "Right ventricle", "Left atrium", "Left ventricle"],
        answer: "Left ventricle"
    },
    {
        id: 85,
        question: "What is the medical term for high blood pressure?",
        options: ["Hypotension", "Hypertension", "Hyperglycemia", "Hypoglycemia"],
        answer: "Hypertension"
    },
    {
        id: 86,
        question: "Which vitamin deficiency causes rickets?",
        options: ["Vitamin A", "Vitamin B12", "Vitamin D", "Vitamin C"],
        answer: "Vitamin D"
    },
    {
        id: 87,
        question: "Which organ is responsible for producing bile?",
        options: ["Pancreas", "Liver", "Gallbladder", "Stomach"],
        answer: "Liver"
    },
    {
        id: 88,
        question: "What is the main function of the lungs?",
        options: ["Digest food", "Filter blood", "Exchange gases", "Produce hormones"],
        answer: "Exchange gases"
    },
    {
        id: 89,
        question: "Which vitamin is important for wound healing?",
        options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
        answer: "Vitamin C"
    },
    {
        id: 90,
        question: "What is the term for difficulty in breathing?",
        options: ["Dyspnea", "Apnea", "Tachypnea", "Bradypnea"],
        answer: "Dyspnea"
    },
    {
        id: 91,
        question: "Which type of joint is the shoulder?",
        options: ["Hinge joint", "Ball and socket joint", "Pivot joint", "Gliding joint"],
        answer: "Ball and socket joint"
    },
    {
        id: 92,
        question: "What does ECG stand for?",
        options: ["Electrocardiogram", "Electroencephalogram", "Echocardiogram", "Electromyogram"],
        answer: "Electrocardiogram"
    },
    {
        id: 93,
        question: "What is the primary function of the pancreas?",
        options: ["Produce insulin", "Filter blood", "Store bile", "Pump blood"],
        answer: "Produce insulin"
    },
    {
        id: 94,
        question: "Which condition results from vitamin B12 deficiency?",
        options: ["Pernicious anemia", "Scurvy", "Rickets", "Goiter"],
        answer: "Pernicious anemia"
    },
    {
        id: 95,
        question: "Which part of the body is affected by arthritis?",
        options: ["Muscles", "Joints", "Bones", "Nerves"],
        answer: "Joints"
    },
    {
        id: 96,
        question: "What is the name of the fluid that cushions the brain and spinal cord?",
        options: ["Synovial fluid", "Cerebrospinal fluid", "Lymph", "Plasma"],
        answer: "Cerebrospinal fluid"
    },
    {
        id: 97,
        question: "Which vitamin deficiency causes beriberi?",
        options: ["Vitamin B1", "Vitamin B2", "Vitamin B3", "Vitamin B12"],
        answer: "Vitamin B1"
    },
    {
        id: 98,
        question: "What is the main function of the kidneys?",
        options: ["Filter blood", "Produce hormones", "Digest food", "Store energy"],
        answer: "Filter blood"
    },
    {
        id: 99,
        question: "Which part of the cell contains genetic material?",
        options: ["Cytoplasm", "Nucleus", "Mitochondria", "Cell membrane"],
        answer: "Nucleus"
    },
    {
        id: 100,
        question: "What is the normal range of adult blood pressure?",
        options: ["90/60 to 120/80 mmHg", "130/90 to 150/100 mmHg", "80/40 to 100/60 mmHg", "140/90 to 160/110 mmHg"],
        answer: "90/60 to 120/80 mmHg"
    }
];