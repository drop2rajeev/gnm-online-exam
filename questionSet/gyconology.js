let timeLeft = 7200; // 2 hours in seconds
const questions = [
{
    id: 1,
    question: "महिलाओं में STD के लिए सबसे सामान्य लक्षण क्या हैं?",
    options: ["पेट दर्द", "बुखार", "Genital discharge, दर्द", "सरदर्द"],
    answer: "Genital discharge, दर्द"
  },
  {
    id: 2,
    question: "महिलाओं में contraception के लिए सबसे सुरक्षित तरीका क्या है?",
    options: ["Pills", "Natural methods", "Copper-T", "Condom"],
    answer: "Condom"
  },
  {
    id: 3,
    question: "महिला में menopause की औसत उम्र कितनी होती है?",
    options: ["50-60 साल", "45-55 साल", "35-40 साल", "60-65 साल"],
    answer: "45-55 साल"
  },
  {
    id: 4,
    question: "Pregnancy के दौरान morning sickness के लिए कौन सा उपचार सबसे उपयुक्त है?",
    options: ["Painkillers", "Ginger", "Vitamins", "Antibiotics"],
    answer: "Ginger"
  },
  {
    id: 5,
    question: "महिलाओं में breast cancer की screening के लिए सबसे common test क्या है?",
    options: ["MRI", "CT Scan", "Mammography", "Ultrasound"],
    answer: "Mammography"
  },
  {
    id: 6,
    question: "महिला में सबसे आम menstruation का कारण क्या होता है?",
    options: ["Stress", "Hormonal imbalance", "Pregnancy", "Infection"],
    answer: "Hormonal imbalance"
  },
  {
    id: 7,
    question: "Pregnancy में morning sickness के सबसे सामान्य symptom क्या हैं?",
    options: ["चक्कर आना", "खांसी", "बुखार", "Nausea and vomiting"],
    answer: "Nausea and vomiting"
  },
  {
    id: 8,
    question: "PCOS का full form क्या है?",
    options: ["Polycystic Ovarian System", "Primary Cystic Ovarian System", "Polycystic Ovary Syndrome", "Primary Cystic Ovary Syndrome"],
    answer: "Polycystic Ovary Syndrome"
  },
  {
    id: 9,
    question: "महिलाओं में cervical cancer का सबसे बड़ा risk factor क्या है?",
    options: ["Smoking", "HPV infection", "Poor diet", "Lack of exercise"],
    answer: "HPV infection"
  },
  {
    id: 10,
    question: "महिलाओं में miscarriage के बाद conception कब तक avoid करना चाहिए?",
    options: ["कोई लिमिट नहीं", "6 महीने", "1 महीना", "कम से कम 3 महीने"],
    answer: "कम से कम 3 महीने"
  },
  {
    id: 11,
    question: "महिलाओं में menopause के symptoms क्या होते हैं?",
    options: ["सर्दी", "Hot flashes, mood changes", "वजन बढ़ना", "सरदर्द"],
    answer: "Hot flashes, mood changes"
  },
  {
    id: 12,
    question: "Pregnancy के दौरान blood pressure बढ़ने को क्या कहते हैं?",
    options: ["Hypotension", "Pre-eclampsia", "Hypertension", "Diabetes"],
    answer: "Pre-eclampsia"
  },
  {
    id: 13,
    question: "महिलाओं में ovarian cyst का diagnosis कैसे होता है?",
    options: ["Blood test", "X-ray", "Ultrasound", "MRI"],
    answer: "Ultrasound"
  },
  {
    id: 14,
    question: "महिला में infertility के लिए एक सामान्य कारण क्या है?",
    options: ["Flu", "PCOS", "Cold", "Diabetes"],
    answer: "PCOS"
  },
  {
    id: 15,
    question: "महिला में ovulation कब होता है?",
    options: ["महीने के अंत में", "महीने के बीच में", "महीने के शुरू में", "कभी नहीं"],
    answer: "महीने के बीच में"
  },
  {
    id: 16,
    question: "PMS (Premenstrual Syndrome) के symptoms क्या होते हैं?",
    options: ["Mood swings, cramps", "बुखार", "नींद न आना", "सरदर्द"],
    answer: "Mood swings, cramps"
  },
  {
    id: 17,
    question: "Normal delivery में baby का कौन सा हिस्सा सबसे पहले आता है?",
    options: ["Feet", "Shoulders", "Head", "Hands"],
    answer: "Head"
  },
  {
    id: 18,
    question: "Pregnancy में folic acid क्यों जरूरी होता है?",
    options: ["Neural tube defects से बचाव के लिए", "दर्द कम करने के लिए", "बुखार कम करने के लिए", "वज़न बढ़ाने के लिए"],
    answer: "Neural tube defects से बचाव के लिए"
  },
  {
    id: 19,
    question: "महिला में vaginitis का सबसे आम कारण क्या है?",
    options: ["Injury", "Allergy", "Hormonal changes", "Infection"],
    answer: "Infection"
  },
  {
    id: 20,
    question: "महिलाओं में pelvic inflammatory disease (PID) का मुख्य कारण क्या है?",
    options: ["Viral infection", "Fungal infection", "Allergy", "Bacterial infection"],
    answer: "Bacterial infection"
  },
  {
    id: 21,
    question: "Mahila में endometrial biopsy कब की जाती है?",
    options: ["Menopause के बाद", "Abnormal uterine bleeding में", "During pregnancy", "Normal periods में"],
    answer: "Abnormal uterine bleeding में"
  },
  {
    id: 22,
    question: "Mahila में fibroids किस जगह पाए जाते हैं?",
    options: ["Fallopian tube", "Vagina", "Ovary", "Uterus"],
    answer: "Uterus"
  },
  {
    id: 23,
    question: "Mahila में PCOS के common symptoms क्या होते हैं?",
    options: ["Vomiting", "Headache, nausea", "Irregular periods, acne, weight gain", "Fever, chills"],
    answer: "Irregular periods, acne, weight gain"
  },
  {
    id: 24,
    question: "Mahila में uterine prolapse क्या होता है?",
    options: ["Uterus का नीचे गिरना", "Fallopian tube का blockage", "Ovary का inflammation", "Cervix का infection"],
    answer: "Uterus का नीचे गिरना"
  },
  {
    id: 25,
    question: "Mahila में lactation failure का एक common कारण क्या हो सकता है?",
    options: ["Poor attachment", "Stress", "Hormonal imbalance", "Infection"],
    answer: "Poor attachment"
  },
  {
    id: 26,
    question: "Pap smear test का उपयोग किस disease के screening के लिए किया जाता है?",
    options: ["Ovarian cyst", "Endometriosis", "Cervical cancer", "Breast cancer"],
    answer: "Cervical cancer"
  },
  {
    id: 27,
    question: "Mahila में miscarriage के बाद bleeding कितने दिन तक रह सकती है?",
    options: ["3 दिन", "30 दिन", "1 दिन", "7-14 दिन"],
    answer: "7-14 दिन"
  },
  {
    id: 28,
    question: "Pregnancy में ultrasound किस trimester में सबसे ज़्यादा accurate होता है?",
    options: ["First trimester", "Third trimester", "After delivery", "Second trimester"],
    answer: "First trimester"
  },
  {
    id: 29,
    question: "Amenorrhea का मतलब क्या होता है?",
    options: ["दर्दनाक मासिक धर्म", "महीनों का बंद होना", "अनियमित मासिक धर्म", "अधिक रक्तस्राव"],
    answer: "महीनों का बंद होना"
  },
  {
    id: 30,
    question: "Mahila में Bartholin cyst किस area में develop होता है?",
    options: ["Cervix", "Ovary", "Uterus", "Vulva"],
    answer: "Vulva"
  },
  {
    id: 31,
    question: "Pregnancy में gestational diabetes का सबसे common symptom क्या होता है?",
    options: ["Blurred vision", "Nausea", "Headache", "Excessive thirst"],
    answer: "Excessive thirst"
  },
  {
    id: 32,
    question: "Emergency contraception कब use की जाती है?",
    options: ["Menopause के बाद", "During pregnancy", "Before pregnancy", "Unprotected sex के बाद"],
    answer: "Unprotected sex के बाद"
  },
  {
    id: 33,
    question: "Menorrhagia का मतलब क्या होता है?",
    options: ["Irregular periods", "Painful menstruation", "Heavy menstrual bleeding", "No menstruation"],
    answer: "Heavy menstrual bleeding"
  },
  {
    id: 34,
    question: "Mahila में HRT (Hormone Replacement Therapy) कब recommend की जाती है?",
    options: ["Before puberty", "During menstruation", "Menopause के symptoms के लिए", "During pregnancy"],
    answer: "Menopause के symptoms के लिए"
  },
  {
    id: 35,
    question: "Mahila में ovarian cancer का common symptom क्या हो सकता है?",
    options: ["Chest pain", "Abdominal bloating", "Back pain", "Headache"],
    answer: "Abdominal bloating"
  },
  {
    id: 36,
    question: "Endometriosis में endometrial tissue कहाँ grow करता है?",
    options: ["In fallopian tubes only", "In ovaries only", "Inside uterus only", "Outside uterus"],
    answer: "Outside uterus"
  },
  {
    id: 37,
    question: "Mahila में yeast infection के common symptoms क्या हैं?",
    options: ["Fever, chills", "Headache", "Nausea", "Itching, white discharge"],
    answer: "Itching, white discharge"
  },
  {
    id: 38,
    question: "Mahila में vaginitis के लिए कौन सा treatment उपयुक्त है?",
    options: ["Steroids", "Painkillers", "Antibiotics", "Antifungal creams"],
    answer: "Antifungal creams"
  },
  {
    id: 39,
    question: "Mahila में contraception के लिए Copper-T कितने समय तक काम करता है?",
    options: ["2 साल", "10 साल", "1 साल", "5 साल"],
    answer: "10 साल"
  },
  {
    id: 40,
    question: "Mahila में infertility के कारण tubal blockage होता है तो treatment क्या होता है?",
    options: ["Radiation therapy", "Chemotherapy", "Surgery", "Medication"],
    answer: "Surgery"
  },
  {
    id: 41,
    question: "Pregnancy में preterm labor का मतलब क्या है?",
    options: ["42 हफ्ते से बाद जन्म", "35 हफ्ते का पूरा होना", "40 हफ्ते का पूरा होना", "37 हफ्ते से पहले जन्म"],
    answer: "37 हफ्ते से पहले जन्म"
  },
  {
    id: 42,
    question: "Mahila में fibrocystic breast disease के लक्षण क्या हैं?",
    options: ["Nipple discharge", "Breast swelling", "Skin rash", "Breast pain और lumps"],
    answer: "Breast pain और lumps"
  },
  {
    id: 43,
    question: "Mahila में pelvic exam का मुख्य उद्देश्य क्या है?",
    options: ["Heart examination", "Reproductive organs का assessment", "Brain examination", "Lung examination"],
    answer: "Reproductive organs का assessment"
  },
  {
    id: 44,
    question: "Mahila में infertility के लिए hysterosalpingography (HSG) किसके लिए किया जाता है?",
    options: ["Fallopian tubes की जांच", "Cervix की जांच", "Ovary की जांच", "Uterus की जांच"],
    answer: "Fallopian tubes की जांच"
  },
  {
    id: 45,
    question: "Mahila में candidiasis infection किस प्रकार का infection है?",
    options: ["Parasitic infection", "Fungal infection", "Viral infection", "Bacterial infection"],
    answer: "Fungal infection"
  },
  {
    id: 46,
    question: "Mahila में gestational hypertension कब develop होती है?",
    options: ["Pregnancy के पहले 10 सप्ताह में", "Delivery के बाद", "Pregnancy के पहले trimester में", "Pregnancy के बाद 20 सप्ताह के बाद"],
    answer: "Pregnancy के बाद 20 सप्ताह के बाद"
  },
  {
    id: 47,
    question: "Mahila में miscarriage के बाद bleeding को किस तरह manage किया जाता है?",
    options: ["No treatment", "Radiation therapy", "Rest और medication", "Surgery"],
    answer: "Rest और medication"
  },
  {
    id: 48,
    question: "Mahila में breastfeeding के दौरान mastitis का क्या कारण होता है?",
    options: ["Hormonal imbalance", "Viral infection", "Bacterial infection", "Allergy"],
    answer: "Bacterial infection"
  },
  {
    id: 49,
    question: "Mahila में infertility के लिए laparoscopy का उपयोग कब किया जाता है?",
    options: ["Diagnosis और treatment दोनों के लिए", "कभी नहीं", "सिर्फ treatment के लिए", "सिर्फ diagnosis के लिए"],
    answer: "Diagnosis और treatment दोनों के लिए"
  },
  {
    id: 50,
    question: "Mahila में cervix की screening के लिए कौन सा test किया जाता है?",
    options: ["Ultrasound", "CT Scan", "Pap smear", "Mammography"],
    answer: "Pap smear"
  },
  {
    id: 51,
    question: "Mahila में postpartum hemorrhage का मुख्य कारण क्या है?",
    options: ["Infection", "Trauma", "Blood clotting disorder", "Uterine atony"],
    answer: "Uterine atony"
  },
  {
    id: 52,
    question: "Mahila में contraceptive pills किस तरह काम करती हैं?",
    options: ["Menstruation बढ़ाकर", "Pregnancy को बढ़ावा देकर", "Fertilization बढ़ाकर", "Ovulation रोककर"],
    answer: "Ovulation रोककर"
  },
  {
    id: 53,
    question: "Mahila में menopause के बाद osteoporosis का risk क्यों बढ़ जाता है?",
    options: ["Vitamin D की कमी के कारण", "Estrogen की कमी के कारण", "Magnesium की कमी के कारण", "Calcium की कमी के कारण"],
    answer: "Estrogen की कमी के कारण"
  },
  {
    id: 54,
    question: "Mahila में HPV vaccination कब recommend की जाती है?",
    options: ["Menstruation के दौरान", "Menopause के बाद", "Pregnancy के दौरान", "Sexual activity शुरू करने से पहले"],
    answer: "Sexual activity शुरू करने से पहले"
  },
  {
    id: 55,
    question: "Mahila में endometriosis के लिए कौन सा symptom सबसे सामान्य होता है?",
    options: ["Pelvic pain", "Headache", "Nausea", "Fever"],
    answer: "Pelvic pain"
  },
  {
    id: 56,
    question: "Mahila में ovarian torsion क्या होता है?",
    options: ["Uterus का prolapse", "Ovary का twisting होना", "Ovary का inflammation", "Cervix का infection"],
    answer: "Ovary का twisting होना"
  },
  {
    id: 57,
    question: "Mahila में gestational trophoblastic disease का मतलब क्या है?",
    options: ["Infection in uterus", "Abnormal growth of trophoblastic tissue", "Normal pregnancy", "Cancer of cervix"],
    answer: "Abnormal growth of trophoblastic tissue"
  },
  {
    id: 58,
    question: "Mahila में contraceptive method के रूप में IUD का full form क्या है?",
    options: ["Internal Uterus Disc", "Intrauterine Device", "Internal Uterus Device", "Intrauterine Disc"],
    answer: "Intrauterine Device"
  },
  {
    id: 59,
    question: "Mahila में abortion के बाद bleeding सामान्यत: कितने दिनों तक रहती है?",
    options: ["3 दिन", "7-14 दिन", "30 दिन", "1 दिन"],
    answer: "7-14 दिन"
  },
  {
    id: 60,
    question: "Mahila में vulvar cancer की सबसे common वजह क्या है?",
    options: ["HPV infection", "Hormonal imbalance", "Poor hygiene", "Smoking"],
    answer: "HPV infection"
  },
  {
    id: 61,
    question: "Mahila में polycystic ovary syndrome (PCOS) का मुख्य कारण क्या है?",
    options: ["Genetic mutation", "Hormonal imbalance", "Vitamin deficiency", "Infection"],
    answer: "Hormonal imbalance"
  },
  {
    id: 62,
    question: "Pregnancy में preeclampsia के मुख्य लक्षण क्या हैं?",
    options: ["Headache", "Fever और chills", "Low blood pressure", "High blood pressure और proteinuria"],
    answer: "High blood pressure और proteinuria"
  },
  {
    id: 63,
    question: "Mahila में contraceptive pills लेने का contraindication कौन सा है?",
    options: ["Cold infection", "History of thromboembolism", "Mild headache", "Low iron"],
    answer: "History of thromboembolism"
  },
  {
    id: 64,
    question: "Mahila में menopause के बाद hot flashes का treatment क्या होता है?",
    options: ["Painkillers", "Antifungal creams", "Hormone Replacement Therapy (HRT)", "Antibiotics"],
    answer: "Hormone Replacement Therapy (HRT)"
  },
  {
    id: 65,
    question: "Mahila में ectopic pregnancy के common symptoms क्या हैं?",
    options: ["Headache और dizziness", "Back pain", "Fever और chills", "Abdominal pain और vaginal bleeding"],
    answer: "Abdominal pain और vaginal bleeding"
  },
  {
    id: 66,
    question: "Mahila में cervical polyp क्या होता है?",
    options: ["Benign growth on cervix", "Infection", "Malignant tumor", "Cyst in ovary"],
    answer: "Benign growth on cervix"
  },
  {
    id: 67,
    question: "Mahila में infertility के लिए hormone test में LH और FSH का स्तर क्या दर्शाता है?",
    options: ["Thyroid function", "Ovarian function", "Liver function", "Kidney function"],
    answer: "Ovarian function"
  },
  {
    id: 68,
    question: "Mahila में mastalgia का मतलब क्या है?",
    options: ["Skin rash", "Breast pain", "Breast lump", "Nipple discharge"],
    answer: "Breast pain"
  },
  {
    id: 69,
    question: "Mahila में pregnancy के दौरान folic acid क्यों जरूरी होता है?",
    options: ["Blood pressure कम करने के लिए", "Vitamin D बढ़ाने के लिए", "Sugar control के लिए", "Neural tube defects से बचाने के लिए"],
    answer: "Neural tube defects से बचाने के लिए"
  },
  {
    id: 70,
    question: "Mahila में gestational diabetes के लिए कौन सा diagnostic test use होता है?",
    options: ["Urine test", "Complete blood count", "Oral Glucose Tolerance Test (OGTT)", "Ultrasound"],
    answer: "Oral Glucose Tolerance Test (OGTT)"
  },
  {
    id: 71,
    question: "Mahila में vulvovaginitis के लिए कौन सा common treatment है?",
    options: ["Steroids", "Antifungal creams", "Antibiotics", "Painkillers"],
    answer: "Antifungal creams"
  },
  {
    id: 72,
    question: "Mahila में oligomenorrhea का क्या मतलब है?",
    options: ["अधिक मासिक धर्म", "कम मासिक धर्म", "महीनों का बंद होना", "दर्दनाक मासिक धर्म"],
    answer: "कम मासिक धर्म"
  },
  {
    id: 73,
    question: "Mahila में uterine fibroids का treatment क्या हो सकता है?",
    options: ["Chemotherapy", "No treatment required", "Surgery, medication", "Radiation"],
    answer: "Surgery, medication"
  },
  {
    id: 74,
    question: "Mahila में postpartum depression के लिए सबसे अच्छा treatment क्या है?",
    options: ["Counseling और medication", "No treatment needed", "Radiation therapy", "Surgery"],
    answer: "Counseling और medication"
  },
  {
    id: 75,
    question: "Mahila में contraception के लिए hormonal IUD का काम कैसे होता है?",
    options: ["Prevents menstruation", "Destroys sperm", "Blocks fallopian tubes", "Local release of hormones"],
    answer: "Local release of hormones"
  },
  {
    id: 76,
    question: "Mahila में vaginal discharge का normal रंग और मात्रा क्या होती है?",
    options: ["Green और बदबूदार", "Red और thick", "Yellow और ज्यादा", "Clear और moderate"],
    answer: "Clear और moderate"
  },
  {
    id: 77,
    question: "Mahila में chlamydia infection किस प्रकार की infection है?",
    options: ["Parasitic infection", "Viral infection", "Bacterial infection", "Fungal infection"],
    answer: "Bacterial infection"
  },
  {
    id: 78,
    question: "Mahila में menopause के दौरान कौन सी hormone levels घट जाती हैं?",
    options: ["Thyroid hormone", "Insulin", "Estrogen और progesterone", "Testosterone"],
    answer: "Estrogen और progesterone"
  },
  {
    id: 79,
    question: "Mahila में cervical cancer का मुख्य कारण क्या माना जाता है?",
    options: ["Smoking", "Hormonal imbalance", "Poor hygiene", "Human Papilloma Virus (HPV)"],
    answer: "Human Papilloma Virus (HPV)"
  },
  {
    id: 80,
    question: "Mahila में pregnancy में folic acid deficiency से क्या समस्या हो सकती है?",
    options: ["Miscarriage", "Preterm labor", "Gestational hypertension", "Neural tube defects"],
    answer: "Neural tube defects"
  },
  {
    id: 81,
    question: "Mahila में amenorrhea का क्या मतलब होता है?",
    options: ["मासिक धर्म का बंद होना", "मासिक धर्म का असामान्य होना", "दर्दनाक मासिक धर्म", "अधिक मासिक धर्म"],
    answer: "मासिक धर्म का बंद होना"
  },
  {
    id: 82,
    question: "Mahila में vaginal candidiasis के common लक्षण क्या होते हैं?",
    options: ["Pain during intercourse", "Bleeding", "Fever", "Itching और white discharge"],
    answer: "Itching और white discharge"
  },
  {
    id: 83,
    question: "Mahila में Pap smear का उद्देश्य क्या है?",
    options: ["Uterine cancer screening", "Cervical cancer screening", "Breast cancer screening", "Ovarian cancer screening"],
    answer: "Cervical cancer screening"
  },
  {
    id: 84,
    question: "Mahila में menopause कब होता है?",
    options: ["अंतिम menstrual period के बाद 12 महीने", "50 साल की उम्र में", "60 साल की उम्र में", "अंतिम menstrual period के बाद 6 महीने"],
    answer: "अंतिम menstrual period के बाद 12 महीने"
  },
  {
    id: 85,
    question: "Mahila में gestational diabetes का management क्या होता है?",
    options: ["Surgery", "Antibiotics", "Diet control और insulin therapy", "Bed rest"],
    answer: "Diet control और insulin therapy"
  },
  {
    id: 86,
    question: "Mahila में uterine prolapse का मुख्य कारण क्या होता है?",
    options: ["Hormonal imbalance", "Pelvic floor muscles का कमजोर होना", "Genetic factors", "Infection"],
    answer: "Pelvic floor muscles का कमजोर होना"
  },
  {
    id: 87,
    question: "Mahila में contraceptive method के रूप में condom कैसे काम करता है?",
    options: ["Sperm को रोककर", "Ovulation रोककर", "Menstruation रोककर", "Fertilization बढ़ाकर"],
    answer: "Sperm को रोककर"
  },
  {
    id: 88,
    question: "Mahila में pelvic inflammatory disease (PID) के मुख्य लक्षण क्या हैं?",
    options: ["Headache", "Back pain", "Pelvic pain और fever", "Vomiting"],
    answer: "Pelvic pain और fever"
  },
  {
    id: 89,
    question: "Mahila में infertility के लिए hysteroscopy का उपयोग कब किया जाता है?",
    options: ["Uterus के अंदर की जांच के लिए", "Fallopian tubes की जांच के लिए", "Ovary की जांच के लिए", "Cervix की जांच के लिए"],
    answer: "Uterus के अंदर की जांच के लिए"
  },
  {
    id: 90,
    question: "Mahila में endometrial hyperplasia क्या होता है?",
    options: ["Fallopian tubes का blockage", "Ovary का swelling", "Cervix का infection", "Uterus lining का abnormal thickening"],
    answer: "Uterus lining का abnormal thickening"
  },
  {
    id: 91,
    question: "Mahila में pelvic exam करते समय speculum का उपयोग क्यों किया जाता है?",
    options: ["Ovary की जांच के लिए", "Vagina और cervix को देखने के लिए", "Bladder की जांच के लिए", "Rectum की जांच के लिए"],
    answer: "Vagina और cervix को देखने के लिए"
  },
  {
    id: 92,
    question: "Mahila में irregular menstrual cycle के लिए common कारण क्या हो सकते हैं?",
    options: ["Lack of exercise", "Poor diet", "Stress, hormonal imbalance", "Infection"],
    answer: "Stress, hormonal imbalance"
  },
  {
    id: 93,
    question: "Mahila में cervical dysplasia का treatment क्या हो सकता है?",
    options: ["Radiation", "LEEP procedure", "Chemotherapy", "No treatment"],
    answer: "LEEP procedure"
  },
  {
    id: 94,
    question: "Mahila में ovarian cysts के symptoms क्या हो सकते हैं?",
    options: ["Fever", "Pelvic pain, bloating", "Headache", "Back pain"],
    answer: "Pelvic pain, bloating"
  },
  {
    id: 95,
    question: "Mahila में pregnancy के दौरान Rh incompatibility का क्या मतलब होता है?",
    options: ["Hormonal imbalance", "Mother और fetus के Rh factor का mismatch", "Blood group का mismatch", "Infection"],
    answer: "Mother और fetus के Rh factor का mismatch"
  },
  {
    id: 96,
    question: "Mahila में contraceptive pills लेने के दौरान क्या सावधानियां बरतनी चाहिए?",
    options: ["Smoking नहीं करनी चाहिए", "सभी", "Medication सही समय पर लेना", "Doctor से सलाह लेना"],
    answer: "सभी"
  },
  {
    id: 97,
    question: "Mahila में prolapsed uterus के लिए कौन सा non-surgical treatment होता है?",
    options: ["Hormone therapy", "Radiation therapy", "Pessary use", "Antibiotics"],
    answer: "Pessary use"
  },
  {
    id: 98,
    question: "Mahila में breast self-examination कब करना चाहिए?",
    options: ["हर महीने menstruation के बाद", "हर दिन", "हर हफ्ते", "साल में एक बार"],
    answer: "हर महीने menstruation के बाद"
  },
  {
    id: 99,
    question: "Mahila में dysmenorrhea क्या होता है?",
    options: ["Painful menstruation", "Heavy bleeding", "No menstruation", "Irregular menstruation"],
    answer: "Painful menstruation"
  },
  {
    id: 100,
    question: "Mahila में menopause के बाद कौन सा रोग ज्यादा common होता है?",
    options: ["Hypertension", "Osteoporosis", "Diabetes", "Asthma"],
    answer: "Osteoporosis"
  }
];