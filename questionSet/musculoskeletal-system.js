let timeLeft = 7200; // 2 hours in seconds
const questions = [
    {
    id: 1,
    question: "What is the primary function of the musculoskeletal system?",
    options: [
      "Support and movement",
      "Digestion",
      "Respiration",
      "Circulation"
    ],
    answer: "Support and movement",
  },
  {
    id: 2,
    question: "Which type of muscle is under voluntary control?",
    options: [
      "Skeletal muscle",
      "Cardiac muscle",
      "Smooth muscle",
      "Involuntary muscle"
    ],
    answer: "Skeletal muscle",
  },
  {
    id: 3,
    question: "What type of joint allows for the greatest range of motion?",
    options: [
      "Ball and socket joint",
      "Hinge joint",
      "Pivot joint",
      "Saddle joint"
    ],
    answer: "Ball and socket joint",
  },
  {
    id: 4,
    question: "Which bone is known as the collarbone?",
    options: [
      "Clavicle",
      "Scapula",
      "Humerus",
      "Sternum"
    ],
    answer: "Clavicle",
  },
  {
    id: 5,
    question: "What is the name of the connective tissue that connects muscles to bones?",
    options: [
      "Tendons",
      "Ligaments",
      "Cartilage",
      "Fascia"
    ],
    answer: "Tendons",
  },
  {
    id: 6,
    question: "Which mineral is most abundant in bone tissue?",
    options: [
      "Calcium",
      "Potassium",
      "Sodium",
      "Magnesium"
    ],
    answer: "Calcium",
  },
  {
    id: 7,
    question: "What type of bone cells are responsible for bone formation?",
    options: [
      "Osteoblasts",
      "Osteoclasts",
      "Osteocytes",
      "Chondrocytes"
    ],
    answer: "Osteoblasts",
  },
  {
    id: 8,
    question: "Which muscle type is found only in the heart?",
    options: [
      "Cardiac muscle",
      "Skeletal muscle",
      "Smooth muscle",
      "Voluntary muscle"
    ],
    answer: "Cardiac muscle",
  },
  {
    id: 9,
    question: "What is the functional unit of a muscle called?",
    options: [
      "Sarcomere",
      "Neuron",
      "Myofibril",
      "Fascicle"
    ],
    answer: "Sarcomere",
  },
  {
    id: 10,
    question: "Which joint connects the humerus to the scapula?",
    options: [
      "Shoulder joint",
      "Elbow joint",
      "Wrist joint",
      "Knee joint"
    ],
    answer: "Shoulder joint",
  },
  {
    id: 11,
    question: "What type of joint is the knee joint?",
    options: [
      "Hinge joint",
      "Ball and socket joint",
      "Pivot joint",
      "Gliding joint"
    ],
    answer: "Hinge joint",
  },
  {
    id: 12,
    question: "Which connective tissue connects bone to bone?",
    options: [
      "Ligaments",
      "Tendons",
      "Cartilage",
      "Fascia"
    ],
    answer: "Ligaments",
  },
  {
    id: 13,
    question: "What is the name of the fluid that lubricates synovial joints?",
    options: [
      "Synovial fluid",
      "Cerebrospinal fluid",
      "Plasma",
      "Lymph"
    ],
    answer: "Synovial fluid",
  },
  {
    id: 14,
    question: "Which part of the bone contains bone marrow?",
    options: [
      "Medullary cavity",
      "Periosteum",
      "Compact bone",
      "Epiphysis"
    ],
    answer: "Medullary cavity",
  },
  {
    id: 15,
    question: "What is the tough outer layer of bone called?",
    options: [
      "Periosteum",
      "Endosteum",
      "Compact bone",
      "Spongy bone"
    ],
    answer: "Periosteum",
  },
  {
    id: 16,
    question: "Which muscle is the strongest in the human body based on its size?",
    options: [
      "Masseter",
      "Biceps brachii",
      "Gluteus maximus",
      "Quadriceps"
    ],
    answer: "Masseter",
  },
  {
    id: 17,
    question: "Which condition involves inflammation of the joints?",
    options: [
      "Arthritis",
      "Osteoporosis",
      "Myositis",
      "Tendinitis"
    ],
    answer: "Arthritis",
  },
  {
    id: 18,
    question: "What is the term for the loss of bone density?",
    options: [
      "Osteoporosis",
      "Osteoarthritis",
      "Osteomyelitis",
      "Rickets"
    ],
    answer: "Osteoporosis",
  },
  {
    id: 19,
    question: "Which muscle is responsible for breathing?",
    options: [
      "Diaphragm",
      "Pectoralis major",
      "Deltoid",
      "Trapezius"
    ],
    answer: "Diaphragm",
  },
  {
    id: 20,
    question: "Which bone is the longest in the human body?",
    options: [
      "Femur",
      "Humerus",
      "Tibia",
      "Fibula"
    ],
    answer: "Femur",
  },
  {
    id: 21,
    question: "What type of muscle contraction involves shortening of the muscle?",
    options: [
      "Isotonic contraction",
      "Isometric contraction",
      "Twitch contraction",
      "Tetanic contraction"
    ],
    answer: "Isotonic contraction",
  },
  {
    id: 22,
    question: "Which part of the muscle is attached to the stationary bone?",
    options: [
      "Origin",
      "Insertion",
      "Belly",
      "Tendon"
    ],
    answer: "Origin",
  },
  {
    id: 23,
    question: "Which connective tissue surrounds individual muscle fibers?",
    options: [
      "Endomysium",
      "Perimysium",
      "Epimysium",
      "Fascia",
    ],
    answer: "Endomysium",
  },
  {
    id: 24,
    question: "Which bone forms the forehead?",
    options: [
      "Frontal bone",
      "Parietal bone",
      "Occipital bone",
      "Temporal bone"
    ],
    answer: "Frontal bone",
  },
  {
    id: 25,
    question: "What is the name of the process by which bones increase in length?",
    options: [
      "Endochondral ossification",
      "Intramembranous ossification",
      "Calcification",
      "Osteolysis"
    ],
    answer: "Endochondral ossification",
  },
  {
    id: 26,
    question: "Which cells break down bone tissue during growth and healing?",
    options: ["Osteoclasts", "Osteoblasts", "Chondrocytes", "Fibroblasts"],
    answer: "Osteoclasts",
  },
  {
    id: 27,
    question: "What type of bone tissue is dense and forms the outer layer of bones?",
    options: ["Compact bone", "Spongy bone", "Trabecular bone", "Cancellous bone"],
    answer: "Compact bone",
  },
  {
    id: 28,
    question: "Which part of the skeleton includes the skull, vertebral column, and rib cage?",
    options: ["Axial skeleton", "Appendicular skeleton", "Peripheral skeleton", "Central skeleton"],
    answer: "Axial skeleton",
  },
  {
    id: 29,
    question: "Which hormone primarily regulates calcium absorption in bones?",
    options: ["Parathyroid hormone", "Calcitonin", "Insulin", "Thyroxine"],
    answer: "Parathyroid hormone",
  },
  {
    id: 30,
    question: "Which part of the bone contains red bone marrow responsible for blood cell production?",
    options: ["Spongy bone", "Compact bone", "Periosteum", "Medullary cavity"],
    answer: "Spongy bone",
  },
  {
    id: 31,
    question: "What type of cartilage covers the ends of long bones in joints?",
    options: ["Articular cartilage", "Fibrocartilage", "Elastic cartilage", "Hyaline cartilage"],
    answer: "Articular cartilage",
  },
  {
    id: 32,
    question: "Which muscle assists in rotating the head and flexing the neck?",
    options: ["Sternocleidomastoid", "Trapezius", "Deltoid", "Pectoralis major"],
    answer: "Sternocleidomastoid",
  },
  {
    id: 33,
    question: "What is the name of the tough band of connective tissue that attaches muscles to bones?",
    options: ["Tendon", "Ligament", "Cartilage", "Fascia"],
    answer: "Tendon",
  },
  {
    id: 34,
    question: "Which vitamin is essential for calcium absorption and bone health?",
    options: ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin K"],
    answer: "Vitamin D",
  },
  {
    id: 35,
    question: "Which term describes inflammation of a tendon?",
    options: ["Tendinitis", "Arthritis", "Myositis", "Bursitis"],
    answer: "Tendinitis",
  },
  {
    id: 36,
    question: "What is the function of the rotator cuff muscles?",
    options: [
      "Stabilize the shoulder joint",
      "Flex the elbow",
      "Extend the wrist",
      "Move the fingers"
    ],
    answer: "Stabilize the shoulder joint",
  },
  {
    id: 37,
    question: "Which bone is also called the kneecap?",
    options: ["Patella", "Fibula", "Tibia", "Femur"],
    answer: "Patella",
  },
  {
    id: 38,
    question: "What is the term for a muscle shortening during contraction?",
    options: ["Concentric contraction", "Eccentric contraction", "Isometric contraction", "Isotonic contraction"],
    answer: "Concentric contraction",
  },
  {
    id: 39,
    question: "Which structure connects bone to bone within a joint?",
    options: ["Ligament", "Tendon", "Cartilage", "Fascia"],
    answer: "Ligament",
  },
  {
    id: 40,
    question: "Which muscle group is responsible for extending the knee?",
    options: ["Quadriceps", "Hamstrings", "Gastrocnemius", "Gluteus maximus"],
    answer: "Quadriceps",
  },
  {
    id: 41,
    question: "Which condition involves inflammation of the bursa sacs near joints?",
    options: ["Bursitis", "Tendinitis", "Arthritis", "Myositis"],
    answer: "Bursitis",
  },
  {
    id: 42,
    question: "Which part of the bone provides strength and flexibility?",
    options: ["Collagen fibers", "Calcium salts", "Osteocytes", "Marrow"],
    answer: "Collagen fibers",
  },
  {
    id: 43,
    question: "What is the role of synovial fluid in joints?",
    options: [
      "Lubricates and reduces friction",
      "Provides nutrients to muscles",
      "Connects muscles to bones",
      "Prevents bone growth"
    ],
    answer: "Lubricates and reduces friction",
  },
  {
    id: 44,
    question: "Which bone is located in the upper arm?",
    options: ["Humerus", "Radius", "Ulna", "Scapula"],
    answer: "Humerus",
  },
  {
    id: 45,
    question: "What is the primary energy source for muscle contraction?",
    options: ["ATP", "Glucose", "Fatty acids", "Oxygen"],
    answer: "ATP",
  },
  {
    id: 46,
    question: "Which muscle is responsible for plantar flexion of the foot?",
    options: ["Gastrocnemius", "Tibialis anterior", "Soleus", "Fibularis longus"],
    answer: "Gastrocnemius",
  },
  {
    id: 47,
    question: "Which connective tissue sheath surrounds a bundle of muscle fibers?",
    options: ["Perimysium", "Endomysium", "Epimysium", "Fascia"],
    answer: "Perimysium",
  },
  {
    id: 48,
    question: "What type of muscle fibers are best for endurance activities?",
    options: ["Slow-twitch fibers", "Fast-twitch fibers", "Intermediate fibers", "Cardiac fibers"],
    answer: "Slow-twitch fibers",
  },
  {
    id: 49,
    question: "Which muscle is the primary extensor of the forearm at the elbow?",
    options: ["Triceps brachii", "Biceps brachii", "Brachialis", "Deltoid"],
    answer: "Triceps brachii",
  },
  {
    id: 50,
    question: "Which disease is characterized by autoimmune destruction of acetylcholine receptors at the neuromuscular junction?",
    options: ["Myasthenia gravis", "Muscular dystrophy", "Multiple sclerosis", "Amyotrophic lateral sclerosis"],
    answer: "Myasthenia gravis",
  },
  {
    id: 51,
    question: "What is the term for the rounded end of a bone that forms part of a joint?",
    options: ["Epiphysis", "Diaphysis", "Metaphysis", "Periosteum"],
    answer: "Epiphysis",
  },
  {
    id: 52,
    question: "Which muscle is primarily responsible for hip extension?",
    options: ["Gluteus maximus", "Hamstrings", "Quadriceps", "Iliopsoas"],
    answer: "Gluteus maximus",
  },
  {
    id: 53,
    question: "What is the name of the cartilage that connects ribs to the sternum?",
    options: ["Costal cartilage", "Articular cartilage", "Elastic cartilage", "Fibrocartilage"],
    answer: "Costal cartilage",
  },
  {
    id: 54,
    question: "Which part of the bone is responsible for growth in length during childhood?",
    options: ["Epiphyseal plate", "Periosteum", "Medullary cavity", "Diaphysis"],
    answer: "Epiphyseal plate",
  },
  {
    id: 55,
    question: "Which muscle group is responsible for flexion of the elbow?",
    options: ["Biceps brachii", "Triceps brachii", "Deltoid", "Brachioradialis"],
    answer: "Biceps brachii",
  },
  {
    id: 56,
    question: "What is the tough fibrous membrane that surrounds the entire muscle called?",
    options: ["Epimysium", "Endomysium", "Perimysium", "Fascia"],
    answer: "Epimysium",
  },
  {
    id: 57,
    question: "Which bone is part of the lower leg?",
    options: ["Tibia", "Femur", "Humerus", "Radius"],
    answer: "Tibia",
  },
  {
    id: 58,
    question: "Which muscle is known as the calf muscle?",
    options: ["Gastrocnemius", "Soleus", "Tibialis anterior", "Fibularis longus"],
    answer: "Gastrocnemius",
  },
  {
    id: 59,
    question: "Which ligament connects the femur to the tibia at the knee joint?",
    options: ["Anterior cruciate ligament (ACL)", "Medial collateral ligament (MCL)", "Patellar ligament", "Lateral collateral ligament (LCL)"],
    answer: "Anterior cruciate ligament (ACL)",
  },
  {
    id: 60,
    question: "What is the name of the muscle that raises the eyebrows?",
    options: ["Frontalis", "Orbicularis oculi", "Temporalis", "Masseter"],
    answer: "Frontalis",
  },
  {
    id: 61,
    question: "Which bones form the wrist?",
    options: ["Carpals", "Metacarpals", "Phalanges", "Tarsals"],
    answer: "Carpals",
  },
  {
    id: 62,
    question: "Which muscle is the primary flexor of the thigh at the hip joint?",
    options: ["Iliopsoas", "Gluteus maximus", "Hamstrings", "Quadriceps"],
    answer: "Iliopsoas",
  },
  {
    id: 63,
    question: "What is the role of the sarcoplasmic reticulum in muscle cells?",
    options: ["Stores and releases calcium ions", "Synthesizes proteins", "Generates ATP", "Provides structural support"],
    answer: "Stores and releases calcium ions",
  },
  {
    id: 64,
    question: "Which condition results from vitamin D deficiency leading to softening of bones in adults?",
    options: ["Osteomalacia", "Rickets", "Osteoporosis", "Osteoarthritis"],
    answer: "Osteomalacia",
  },
  {
    id: 65,
    question: "What type of muscle fiber fatigues quickly but generates powerful contractions?",
    options: ["Fast-twitch fibers", "Slow-twitch fibers", "Intermediate fibers", "Cardiac fibers"],
    answer: "Fast-twitch fibers",
  },
  {
    id: 66,
    question: "Which part of the nervous system controls voluntary skeletal muscle movements?",
    options: ["Somatic nervous system", "Autonomic nervous system", "Sympathetic nervous system", "Parasympathetic nervous system"],
    answer: "Somatic nervous system",
  },
  {
    id: 67,
    question: "Which muscle covers the shoulder and is responsible for arm abduction?",
    options: ["Deltoid", "Trapezius", "Latissimus dorsi", "Pectoralis major"],
    answer: "Deltoid",
  },
  {
    id: 68,
    question: "Which bone protects the brain?",
    options: ["Cranium", "Mandible", "Clavicle", "Scapula"],
    answer: "Cranium",
  },
  {
    id: 69,
    question: "Which muscle allows for smiling by pulling the corners of the mouth upward?",
    options: ["Zygomaticus major", "Orbicularis oris", "Masseter", "Buccinator"],
    answer: "Zygomaticus major",
  },
  {
    id: 70,
    question: "Which bone is commonly known as the shin bone?",
    options: ["Tibia", "Fibula", "Femur", "Humerus"],
    answer: "Tibia",
  },
  {
    id: 71,
    question: "Which connective tissue surrounds the entire muscle and separates it from other tissues?",
    options: ["Fascia", "Endomysium", "Perimysium", "Epimysium"],
    answer: "Fascia",
  },
  {
    id: 72,
    question: "What is the name of the disease characterized by progressive muscle weakness and degeneration?",
    options: ["Muscular dystrophy", "Myasthenia gravis", "Arthritis", "Multiple sclerosis"],
    answer: "Muscular dystrophy",
  },
  {
    id: 73,
    question: "Which bone articulates with the scapula to form the shoulder joint?",
    options: ["Humerus", "Clavicle", "Radius", "Ulna"],
    answer: "Humerus",
  },
  {
    id: 74,
    question: "What is the name of the connective tissue that covers individual muscle fibers?",
    options: ["Endomysium", "Perimysium", "Epimysium", "Fascia"],
    answer: "Endomysium",
  },
  {
    id: 75,
    question: "Which muscle group is located at the back of the thigh?",
    options: ["Hamstrings", "Quadriceps", "Gluteals", "Adductors"],
    answer: "Hamstrings",
  },
  {
    id: 76,
    question: "Which part of the bone contains yellow marrow primarily composed of fat?",
    options: ["Medullary cavity", "Spongy bone", "Periosteum", "Epiphysis"],
    answer: "Medullary cavity",
  },
  {
    id: 77,
    question: "What type of joint is found in the shoulder and allows for a wide range of motion?",
    options: ["Ball and socket joint", "Hinge joint", "Pivot joint", "Saddle joint"],
    answer: "Ball and socket joint",
  },
  {
    id: 78,
    question: "Which muscle is responsible for closing the jaw?",
    options: ["Masseter", "Temporalis", "Buccinator", "Orbicularis oris"],
    answer: "Masseter",
  },
  {
    id: 79,
    question: "Which structure stores glycogen and provides energy for muscle contraction?",
    options: ["Sarcoplasm", "Sarcoplasmic reticulum", "Myofibrils", "Mitochondria"],
    answer: "Sarcoplasm",
  },
  {
    id: 80,
    question: "Which ligament connects the two pubic bones at the front of the pelvis?",
    options: ["Pubic symphysis", "Inguinal ligament", "Iliolumbar ligament", "Sacrotuberous ligament"],
    answer: "Pubic symphysis",
  },
  {
    id: 81,
    question: "Which muscle is involved in dorsiflexion of the foot?",
    options: ["Tibialis anterior", "Gastrocnemius", "Soleus", "Fibularis longus"],
    answer: "Tibialis anterior",
  },
  {
    id: 82,
    question: "What is the term for inflammation of a joint?",
    options: ["Arthritis", "Tendinitis", "Bursitis", "Myositis"],
    answer: "Arthritis",
  },
  {
    id: 83,
    question: "Which muscle group is primarily responsible for flexion of the knee?",
    options: ["Hamstrings", "Quadriceps", "Gluteals", "Adductors"],
    answer: "Hamstrings",
  },
  {
    id: 84,
    question: "What is the name of the fibrous connective tissue that covers bones?",
    options: ["Periosteum", "Endosteum", "Perimysium", "Epimysium"],
    answer: "Periosteum",
  },
  {
    id: 85,
    question: "Which type of bone cell is responsible for forming new bone?",
    options: ["Osteoblast", "Osteoclast", "Osteocyte", "Chondrocyte"],
    answer: "Osteoblast",
  },
  {
    id: 86,
    question: "Which muscle is known as the ‘kissing muscle’?",
    options: ["Orbicularis oris", "Buccinator", "Masseter", "Zygomaticus major"],
    answer: "Orbicularis oris",
  },
  {
    id: 87,
    question: "Which bones make up the pelvis?",
    options: ["Ilium, ischium, pubis", "Femur, tibia, fibula", "Sacrum, coccyx, lumbar vertebrae", "Scapula, clavicle, humerus"],
    answer: "Ilium, ischium, pubis",
  },
  {
    id: 88,
    question: "What is the main function of the axial skeleton?",
    options: ["Support and protection of vital organs", "Movement and locomotion", "Blood cell production", "Calcium storage"],
    answer: "Support and protection of vital organs",
  },
  {
    id: 89,
    question: "Which muscle is responsible for pronation of the forearm?",
    options: ["Pronator teres", "Supinator", "Biceps brachii", "Triceps brachii"],
    answer: "Pronator teres",
  },
  {
    id: 90,
    question: "Which disease is characterized by decreased bone density and increased fracture risk?",
    options: ["Osteoporosis", "Osteomalacia", "Rickets", "Arthritis"],
    answer: "Osteoporosis",
  },
  {
    id: 91,
    question: "What is the name of the smallest contractile unit of a muscle fiber?",
    options: ["Sarcomere", "Myofibril", "Sarcoplasm", "Myofilament"],
    answer: "Sarcomere",
  },
  {
    id: 92,
    question: "Which bone forms the forehead?",
    options: ["Frontal bone", "Parietal bone", "Temporal bone", "Occipital bone"],
    answer: "Frontal bone",
  },
  {
    id: 93,
    question: "Which muscle elevates the scapula?",
    options: ["Trapezius", "Deltoid", "Latissimus dorsi", "Rhomboid major"],
    answer: "Trapezius",
  },
  {
    id: 94,
    question: "What is the name of the tough connective tissue that surrounds a muscle fascicle?",
    options: ["Perimysium", "Endomysium", "Epimysium", "Fascia"],
    answer: "Perimysium",
  },
  {
    id: 95,
    question: "Which type of muscle tissue is involuntary and found in walls of internal organs?",
    options: ["Smooth muscle", "Skeletal muscle", "Cardiac muscle", "Striated muscle"],
    answer: "Smooth muscle",
  },
  {
    id: 96,
    question: "Which bones are found in the hand between the wrist and fingers?",
    options: ["Metacarpals", "Carpals", "Phalanges", "Tarsals"],
    answer: "Metacarpals",
  },
  {
    id: 97,
    question: "Which muscle is responsible for extending the wrist?",
    options: ["Extensor carpi radialis", "Flexor carpi radialis", "Flexor carpi ulnaris", "Pronator teres"],
    answer: "Extensor carpi radialis",
  },
  {
    id: 98,
    question: "Which structure transmits the nerve impulses that cause muscle contraction?",
    options: ["Neuromuscular junction", "Myelin sheath", "Sarcoplasmic reticulum", "Sarcolemma"],
    answer: "Neuromuscular junction",
  },
  {
    id: 99,
    question: "What is the name of the bone in the upper arm?",
    options: ["Humerus", "Radius", "Ulna", "Scapula"],
    answer: "Humerus",
  },
  {
    id: 100,
    question: "Which condition is caused by inflammation of the muscle?",
    options: ["Myositis", "Tendinitis", "Bursitis", "Arthritis"],
    answer: "Myositis",
  }
];