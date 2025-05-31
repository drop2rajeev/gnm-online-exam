let timeLeft = 7200; // 2 hours in seconds
const questions = [
    {
    id: 1,
    question: "At what age does the anterior fontanelle usually close in infants?",
    options: ["2 months", "6 months", "12-18 months", "24 months"],
    answer: "12-18 months"
  },
  {
    id: 2,
    question: "Which vaccine is given at birth according to the National Immunization Schedule?",
    options: ["BCG, OPV-0, Hepatitis B", "DPT, OPV-1, Hepatitis B", "MMR, BCG, DPT", "Typhoid, OPV-0, Hepatitis B"],
    answer: "BCG, OPV-0, Hepatitis B"
  },
  {
    id: 3,
    question: "What is the normal birth weight of a full-term newborn?",
    options: ["1.5 to 2.0 kg", "2.5 to 4.0 kg", "4.5 to 5.5 kg", "1.0 to 1.5 kg"],
    answer: "2.5 to 4.0 kg"
  },
  {
    id: 4,
    question: "Which of the following reflexes appears first in a newborn?",
    options: ["Moro reflex", "Rooting reflex", "Palmar grasp", "Tonic neck reflex"],
    answer: "Rooting reflex"
  },
  {
    id: 5,
    question: "Most common cause of diarrhea in children under 5 years is:",
    options: ["Cholera", "E. coli", "Rotavirus", "Amoebiasis"],
    answer: "Rotavirus"
  },
  {
    id: 6,
    question: "Recommended exclusive breastfeeding period is:",
    options: ["1 month", "3 months", "6 months", "9 months"],
    answer: "6 months"
  },
  {
    id: 7,
    question: "Which is the best indicator of a child’s nutritional status?",
    options: ["Height", "Weight", "Mid-upper arm circumference", "Head circumference"],
    answer: "Weight"
  },
  {
    id: 8,
    question: "Weaning should be started at what age?",
    options: ["2 months", "4 months", "6 months", "9 months"],
    answer: "6 months"
  },
  {
    id: 9,
    question: "Which sign indicates dehydration in infants?",
    options: ["Bulging fontanelle", "Increased urination", "Sunken eyes", "Excessive salivation"],
    answer: "Sunken eyes"
  },
  {
    id: 10,
    question: "Vitamin D deficiency in children causes:",
    options: ["Scurvy", "Rickets", "Pellagra", "Beriberi"],
    answer: "Rickets"
  },
  {
    id: 11,
    question: "Which condition is screened using the Guthrie test in neonates?",
    options: ["Thalassemia", "Phenylketonuria", "Down syndrome", "Hypoglycemia"],
    answer: "Phenylketonuria"
  },
  {
    id: 12,
    question: "A newborn should take its first bath after how many hours?",
    options: ["Immediately", "After 6 hours", "After 24 hours", "After 48 hours"],
    answer: "After 24 hours"
  },
  {
    id: 13,
    question: "The APGAR score is assessed at:",
    options: ["Immediately after birth", "1 and 5 minutes", "1 and 10 minutes", "5 and 10 minutes"],
    answer: "1 and 5 minutes"
  },
  {
    id: 14,
    question: "Which of the following is the most accurate method to measure body temperature in infants?",
    options: ["Oral", "Rectal", "Axillary", "Tympanic"],
    answer: "Rectal"
  },
  {
    id: 15,
    question: "Delayed growth and mental retardation in children may result from:",
    options: ["Congenital hypothyroidism", "Diabetes mellitus", "Cushing syndrome", "Hyperthyroidism"],
    answer: "Congenital hypothyroidism"
  },
  {
    id: 16,
    question: "Koplik spots are seen in which condition?",
    options: ["Measles", "Mumps", "Rubella", "Chickenpox"],
    answer: "Measles"
  },
  {
    id: 17,
    question: "Which ORS component helps in water absorption?",
    options: ["Potassium chloride", "Sodium chloride", "Sodium bicarbonate", "Glucose"],
    answer: "Glucose"
  },
  {
    id: 18,
    question: "The first milk produced after childbirth is called:",
    options: ["Transitional milk", "Mature milk", "Colostrum", "Foremilk"],
    answer: "Colostrum"
  },
  {
    id: 19,
    question: "A child with vitamin A deficiency may show:",
    options: ["Rashes", "Night blindness", "Edema", "Muscle weakness"],
    answer: "Night blindness"
  },
  {
    id: 20,
    question: "Which pulse site is best for checking the pulse in infants?",
    options: ["Radial", "Carotid", "Apical", "Femoral"],
    answer: "Apical"
  },
  {
    id: 21,
    question: "Which is the most common congenital heart defect in children?",
    options: ["Tetralogy of Fallot", "Patent ductus arteriosus", "Ventricular septal defect", "Atrial septal defect"],
    answer: "Ventricular septal defect"
  },
  {
    id: 22,
    question: "Which is the causative agent of whooping cough?",
    options: ["Haemophilus influenzae", "Bordetella pertussis", "Corynebacterium diphtheriae", "Streptococcus pneumoniae"],
    answer: "Bordetella pertussis"
  },
  {
    id: 23,
    question: "The primary cause of neonatal mortality in India is:",
    options: ["Infections", "Congenital anomalies", "Low birth weight and prematurity", "Birth trauma"],
    answer: "Low birth weight and prematurity"
  },
  {
    id: 24,
    question: "Which of the following is used to prevent neonatal ophthalmia?",
    options: ["Silver nitrate", "Gentamicin", "Betadine", "Chloramphenicol"],
    answer: "Silver nitrate"
  },
  {
    id: 25,
    question: "When does the first deciduous tooth typically erupt?",
    options: ["At birth", "3 months", "6 months", "9 months"],
    answer: "6 months"
  },
  {
    id: 26,
    question: "Which is the most common site for intramuscular injection in infants?",
    options: ["Deltoid", "Gluteus maximus", "Vastus lateralis", "Rectus femoris"],
    answer: "Vastus lateralis"
  },
  {
    id: 27,
    question: "Which condition is characterized by a 'barking cough' in children?",
    options: ["Asthma", "Bronchiolitis", "Croup", "Pneumonia"],
    answer: "Croup"
  },
  {
    id: 28,
    question: "Which component is essential in preventing neural tube defects?",
    options: ["Calcium", "Iron", "Folic acid", "Zinc"],
    answer: "Folic acid"
  },
  {
    id: 29,
    question: "The normal respiratory rate of a newborn is:",
    options: ["10–20 breaths/min", "20–30 breaths/min", "30–60 breaths/min", "60–90 breaths/min"],
    answer: "30–60 breaths/min"
  },
  {
    id: 30,
    question: "Pica is associated with the deficiency of:",
    options: ["Calcium", "Iron", "Iodine", "Vitamin C"],
    answer: "Iron"
  },
  {
    id: 31,
    question: "Which of the following is a sign of hypoglycemia in a newborn?",
    options: ["Hypotonia", "Hyperthermia", "Bradycardia", "Increased appetite"],
    answer: "Hypotonia"
  },
  {
    id: 32,
    question: "The red reflex test is used to detect:",
    options: ["Strabismus", "Cataract", "Myopia", "Glaucoma"],
    answer: "Cataract"
  },
  {
    id: 33,
    question: "Which vitamin is given to newborns to prevent bleeding disorders?",
    options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin K"],
    answer: "Vitamin K"
  },
  {
    id: 34,
    question: "Which is the commonest site of intussusception in children?",
    options: ["Ileocecal junction", "Duodenojejunal junction", "Sigmoid colon", "Rectum"],
    answer: "Ileocecal junction"
  },
  {
    id: 35,
    question: "Which condition presents with a 'cherry red spot' in the retina?",
    options: ["Glaucoma", "Retinoblastoma", "Keratitis", "Tay-Sachs disease"],
    answer: "Tay-Sachs disease"
  },
  {
    id: 36,
    question: "What is the color of healthy breastfed baby stool?",
    options: ["Greenish-black", "Golden yellow", "Pale white", "Reddish-brown"],
    answer: "Golden yellow"
  },
  {
    id: 37,
    question: "Which of the following is a live attenuated vaccine?",
    options: ["DPT", "Hepatitis B", "Polio (OPV)", "Tetanus toxoid"],
    answer: "Polio (OPV)"
  },
  {
    id: 38,
    question: "The condition of undescended testis is called:",
    options: ["Hydrocele", "Varicocele", "Cryptorchidism", "Phimosis"],
    answer: "Cryptorchidism"
  },
  {
    id: 39,
    question: "Which reflex disappears first in infants?",
    options: ["Moro reflex", "Rooting reflex", "Palmar grasp", "Tonic neck reflex"],
    answer: "Rooting reflex"
  },
  {
    id: 40,
    question: "Which is the most important nursing intervention in neonatal sepsis?",
    options: ["Maintain nutrition", "Give tepid sponging", "Administer antibiotics", "Monitor head circumference"],
    answer: "Administer antibiotics"
  },
  {
    id: 41,
    question: "What is the main symptom of pyloric stenosis in infants?",
    options: ["Watery diarrhea", "Projectile vomiting", "Constipation", "Abdominal distension"],
    answer: "Projectile vomiting"
  },
  {
    id: 42,
    question: "Which condition involves a softening of the occipital bone in infants?",
    options: ["Rickets", "Scurvy", "Kwashiorkor", "Marasmus"],
    answer: "Rickets"
  },
  {
    id: 43,
    question: "What is the causative organism of measles?",
    options: ["Rubella virus", "Paramyxovirus", "Varicella virus", "Rubeola virus"],
    answer: "Rubeola virus"
  },
  {
    id: 44,
    question: "Which childhood disease has Koplik spots as a feature?",
    options: ["Chickenpox", "Measles", "Rubella", "Mumps"],
    answer: "Measles"
  },
  {
    id: 45,
    question: "The best method to prevent hypothermia in a newborn is:",
    options: ["Tepid sponging", "Incubator care", "Covering with blankets", "Skin-to-skin contact"],
    answer: "Skin-to-skin contact"
  },
  {
    id: 46,
    question: "Which of the following vaccines is contraindicated in pregnancy?",
    options: ["Tetanus toxoid", "Influenza", "MMR", "Hepatitis B"],
    answer: "MMR"
  },
  {
    id: 47,
    question: "What is the cause of Kwashiorkor?",
    options: ["Protein deficiency", "Carbohydrate deficiency", "Fat deficiency", "Vitamin C deficiency"],
    answer: "Protein deficiency"
  },
  {
    id: 48,
    question: "Which of the following indicates severe dehydration in a child?",
    options: ["Restlessness", "Sunken eyes", "Lethargy and unconsciousness", "Dry mouth"],
    answer: "Lethargy and unconsciousness"
  },
  {
    id: 49,
    question: "At what age is the first dose of Vitamin A given in India?",
    options: ["At birth", "6 months", "9 months", "1 year"],
    answer: "9 months"
  },
  {
    id: 50,
    question: "What is the normal heart rate of a newborn?",
    options: ["60–100 bpm", "100–160 bpm", "70–120 bpm", "80–140 bpm"],
    answer: "100–160 bpm"
  },
  {
    id: 51,
    question: "Which condition is characterized by drooling, stridor, and difficulty swallowing in children?",
    options: ["Bronchiolitis", "Epiglottitis", "Tonsillitis", "Laryngitis"],
    answer: "Epiglottitis"
  },
  {
    id: 52,
    question: "Which hormone is responsible for milk production?",
    options: ["Estrogen", "Progesterone", "Prolactin", "Oxytocin"],
    answer: "Prolactin"
  },
  {
    id: 53,
    question: "Delayed closure of fontanelles may be due to:",
    options: ["Hyperthyroidism", "Vitamin A deficiency", "Hydrocephalus", "Lead poisoning"],
    answer: "Hydrocephalus"
  },
  {
    id: 54,
    question: "A positive Babinski reflex is normal up to what age?",
    options: ["6 months", "1 year", "2 years", "3 years"],
    answer: "2 years"
  },
  {
    id: 55,
    question: "Which is the preferred method of feeding a premature baby who can't suck?",
    options: ["Breastfeeding", "Bottle feeding", "Spoon feeding", "Gavage feeding"],
    answer: "Gavage feeding"
  },
  {
    id: 56,
    question: "The triad of mental retardation, microcephaly, and congenital heart disease may indicate:",
    options: ["Down syndrome", "Rubella syndrome", "Turner syndrome", "Edward syndrome"],
    answer: "Rubella syndrome"
  },
  {
    id: 57,
    question: "Which condition shows a 'whoop' sound during inspiration?",
    options: ["Measles", "Pertussis", "Asthma", "Bronchiolitis"],
    answer: "Pertussis"
  },
  {
    id: 58,
    question: "What is the ideal position to place a child during a seizure?",
    options: ["Supine", "Prone", "Lateral", "Trendelenburg"],
    answer: "Lateral"
  },
  {
    id: 59,
    question: "Which nutrient deficiency leads to stunted growth?",
    options: ["Protein", "Vitamin D", "Calcium", "Vitamin A"],
    answer: "Protein"
  },
  {
    id: 60,
    question: "Which type of play is typical for preschool children?",
    options: ["Solitary play", "Parallel play", "Cooperative play", "Constructive play"],
    answer: "Cooperative play"
  },
  {
    id: 61,
    question: "What is the common symptom of iron deficiency anemia in children?",
    options: ["Pallor", "Jaundice", "Cyanosis", "Edema"],
    answer: "Pallor"
  },
  {
    id: 62,
    question: "Which organ is most affected in cystic fibrosis?",
    options: ["Liver", "Lungs", "Kidneys", "Heart"],
    answer: "Lungs"
  },
  {
    id: 63,
    question: "Which of the following is a sign of respiratory distress in infants?",
    options: ["Nasal flaring", "Bradycardia", "Cyanosis of hands only", "Excessive crying"],
    answer: "Nasal flaring"
  },
  {
    id: 64,
    question: "At what age is the measles vaccine usually given?",
    options: ["6 months", "9 months", "12 months", "18 months"],
    answer: "9 months"
  },
  {
    id: 65,
    question: "Which of the following is a symptom of dehydration in a child?",
    options: ["Increased tears", "Decreased skin turgor", "Increased urination", "Weight gain"],
    answer: "Decreased skin turgor"
  },
  {
    id: 66,
    question: "Which type of jaundice is common in newborns within the first week of life?",
    options: ["Physiological jaundice", "Pathological jaundice", "Hepatitis", "Hemolytic anemia"],
    answer: "Physiological jaundice"
  },
  {
    id: 67,
    question: "Which congenital infection causes cataracts, deafness, and heart defects?",
    options: ["Rubella", "Toxoplasmosis", "CMV", "Herpes simplex"],
    answer: "Rubella"
  },
  {
    id: 68,
    question: "Which vitamin deficiency causes scurvy?",
    options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
    answer: "Vitamin C"
  },
  {
    id: 69,
    question: "Which growth chart is used to assess nutritional status in children?",
    options: ["CDC growth chart", "WHO growth chart", "BMI chart", "Weight for age chart"],
    answer: "WHO growth chart"
  },
  {
    id: 70,
    question: "Which of these is a common symptom of asthma in children?",
    options: ["Wheezing", "Bradycardia", "Tachypnea", "Apnea"],
    answer: "Wheezing"
  },
  {
    id: 71,
    question: "Which vitamin is necessary for blood clotting?",
    options: ["Vitamin A", "Vitamin D", "Vitamin E", "Vitamin K"],
    answer: "Vitamin K"
  },
  {
    id: 72,
    question: "Which is the correct immunization schedule for DPT vaccine?",
    options: ["At birth, 6 weeks, and 14 weeks", "6 weeks, 10 weeks, and 14 weeks", "6 months, 9 months, and 12 months", "At birth only"],
    answer: "6 weeks, 10 weeks, and 14 weeks"
  },
  {
    id: 73,
    question: "Which is a sign of acute otitis media in children?",
    options: ["Ear discharge", "Nasal congestion", "Persistent cough", "Sore throat"],
    answer: "Ear discharge"
  },
  {
    id: 74,
    question: "Which is the commonest cause of severe acute malnutrition in children?",
    options: ["Protein deficiency", "Vitamin D deficiency", "Calorie deficiency", "Iron deficiency"],
    answer: "Calorie deficiency"
  },
  {
    id: 75,
    question: "Which developmental milestone occurs at 12 months?",
    options: ["Crawling", "Walking with support", "Walking alone", "Sitting without support"],
    answer: "Walking alone"
  },
  {
    id: 76,
    question: "Which bacteria causes diphtheria?",
    options: ["Corynebacterium diphtheriae", "Streptococcus pyogenes", "Staphylococcus aureus", "Haemophilus influenzae"],
    answer: "Corynebacterium diphtheriae"
  },
  {
    id: 77,
    question: "Which condition in children is characterized by a ‘slapped cheek’ rash?",
    options: ["Measles", "Rubella", "Fifth disease", "Scarlet fever"],
    answer: "Fifth disease"
  },
  {
    id: 78,
    question: "Which is the preferred site for intramuscular injections in children over 1 year?",
    options: ["Deltoid muscle", "Vastus lateralis", "Gluteus maximus", "Rectus femoris"],
    answer: "Deltoid muscle"
  },
  {
    id: 79,
    question: "Which of the following is a cause of neonatal jaundice?",
    options: ["Physiological immaturity of liver", "Viral infection", "Congenital heart disease", "Respiratory distress syndrome"],
    answer: "Physiological immaturity of liver"
  },
  {
    id: 80,
    question: "Which condition is an emergency characterized by respiratory distress and a barking cough?",
    options: ["Croup", "Asthma", "Bronchiolitis", "Pneumonia"],
    answer: "Croup"
  },
  {
    id: 81,
    question: "Which vitamin deficiency causes rickets in children?",
    options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
    answer: "Vitamin D"
  },
  {
    id: 82,
    question: "Which is the recommended treatment for neonatal hypoglycemia?",
    options: ["Intravenous glucose", "Oral antibiotics", "Oxygen therapy", "Phototherapy"],
    answer: "Intravenous glucose"
  },
  {
    id: 83,
    question: "Which vaccine prevents tuberculosis in newborns?",
    options: ["BCG", "OPV", "Hepatitis B", "DPT"],
    answer: "BCG"
  },
  {
    id: 84,
    question: "Which is the first tooth to erupt in infants?",
    options: ["Central incisors", "Lateral incisors", "Canines", "Molars"],
    answer: "Central incisors"
  },
  {
    id: 85,
    question: "What is the normal length of a newborn at birth?",
    options: ["45–50 cm", "50–55 cm", "55–60 cm", "60–65 cm"],
    answer: "45–50 cm"
  },
  {
    id: 86,
    question: "Which disease causes 'cauliflower ear' in children?",
    options: ["Otitis media", "Trauma", "Mumps", "Measles"],
    answer: "Trauma"
  },
  {
    id: 87,
    question: "What is the appropriate feeding for a newborn with cleft palate?",
    options: ["Breastfeeding", "Gavage feeding", "Cup feeding", "Bottle feeding"],
    answer: "Gavage feeding"
  },
  {
    id: 88,
    question: "Which of the following is a sign of dehydration in infants?",
    options: ["Tearless crying", "Increased urination", "Flushed skin", "Hyperactivity"],
    answer: "Tearless crying"
  },
  {
    id: 89,
    question: "Which disease is caused by deficiency of Vitamin B1?",
    options: ["Pellagra", "Beriberi", "Scurvy", "Rickets"],
    answer: "Beriberi"
  },
  {
    id: 90,
    question: "Which condition is characterized by a ‘pot belly’ and edema in children?",
    options: ["Kwashiorkor", "Marasmus", "Rickets", "Scurvy"],
    answer: "Kwashiorkor"
  },
  {
    id: 91,
    question: "Which test is used to screen for developmental dysplasia of the hip in newborns?",
    options: ["Ortolani test", "Babinski test", "Moro reflex", "Rooting reflex"],
    answer: "Ortolani test"
  },
  {
    id: 92,
    question: "Which is a sign of increased intracranial pressure in infants?",
    options: ["Bulging fontanelle", "Sunken eyes", "Bradycardia", "Limpness"],
    answer: "Bulging fontanelle"
  },
  {
    id: 93,
    question: "Which disease is prevented by the administration of Vitamin A?",
    options: ["Measles", "Polio", "Tetanus", "Diphtheria"],
    answer: "Measles"
  },
  {
    id: 94,
    question: "Which is the primary cause of otitis media in children?",
    options: ["Bacterial infection", "Viral infection", "Fungal infection", "Allergic reaction"],
    answer: "Bacterial infection"
  },
  {
    id: 95,
    question: "Which condition is characterized by failure to thrive, diarrhea, and dermatitis in infants?",
    options: ["Kwashiorkor", "Marasmus", "Celiac disease", "Vitamin D deficiency"],
    answer: "Celiac disease"
  },
  {
    id: 96,
    question: "Which vaccine is given orally to prevent poliomyelitis?",
    options: ["IPV", "OPV", "Hepatitis B", "BCG"],
    answer: "OPV"
  },
  {
    id: 97,
    question: "Which of the following is a common complication of untreated congenital hypothyroidism?",
    options: ["Mental retardation", "Asthma", "Diabetes", "Epilepsy"],
    answer: "Mental retardation"
  },
  {
    id: 98,
    question: "Which is the preferred site for venipuncture in infants?",
    options: ["Median cubital vein", "Dorsal hand vein", "Scalp vein", "Femoral vein"],
    answer: "Scalp vein"
  },
  {
    id: 99,
    question: "Which symptom is most common in childhood asthma?",
    options: ["Wheezing", "Fever", "Rash", "Headache"],
    answer: "Wheezing"
  },
  {
    id: 100,
    question: "What is the minimum duration of exclusive breastfeeding recommended by WHO?",
    options: ["3 months", "4 months", "6 months", "12 months"],
    answer: "6 months"
  }
];