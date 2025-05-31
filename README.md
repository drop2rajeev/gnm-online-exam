# 📝 GNM Online Exam Portal

This is a web-based **General Nursing and Midwifery (GNM) Online Exam** application built using **HTML**, **Bootstrap 5**, **JavaScript**, and **jQuery**. It allows nursing students to take practice exams, receive scores, and optionally get results via email.

---

## 🚀 Features

- Responsive and clean UI using **Bootstrap 5**
- Multiple question sets categorized by topics
- Timed exam functionality
- Scoring system:
  - ✅ +0.75 for correct answers
  - ❌ -0.25 for incorrect answers
- Score is displayed after submission
- Optionally send results to user email using **EmailJS**
- Re-attempt functionality with "Re-Exam"

---

## 📁 Project Structure

```bash
GNM-Online-Exam/
│
├── index.html                # Main Exam Page
├── controlExamHeart.js       # Logic for timer, scoring, evaluation, etc.
├── questionSet/
│   ├── musculoskeletal-system.js
│   ├── endocrine-system.js
│   ├── ...
│
├── assets/                   # Optional: For images, CSS, etc.
│
└── README.md                 # This file
