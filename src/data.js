// Mock data cho các đề thi
export const examData = [
    {
        id: 1,
        title: "Đề thi IELTS - Part 1",
        description: "Đề thi IELTS cơ bản về từ vựng và ngữ pháp",
        timeLimit: 30, // phút
        questions: [
            {
                id: 1,
                question: "What is the meaning of 'abundant'?",
                options: [
                    { id: 'A', text: "Scarce" },
                    { id: 'B', text: "Plentiful" },
                    { id: 'C', text: "Empty" },
                    { id: 'D', text: "Limited" }
                ],
                correctAnswer: 'B',
                explanation: "'Abundant' means existing in large quantities; plentiful."
            },
            {
                id: 2,
                question: "Choose the correct form: She _____ to London last year.",
                options: [
                    { id: 'A', text: "go" },
                    { id: 'B', text: "goes" },
                    { id: 'C', text: "went" },
                    { id: 'D', text: "going" }
                ],
                correctAnswer: 'C',
                explanation: "Past simple tense is used for completed actions in the past."
            },
            {
                id: 3,
                question: "What is the synonym of 'beautiful'?",
                options: [
                    { id: 'A', text: "Ugly" },
                    { id: 'B', text: "Attractive" },
                    { id: 'C', text: "Plain" },
                    { id: 'D', text: "Boring" }
                ],
                correctAnswer: 'B',
                explanation: "'Beautiful' and 'attractive' are synonyms meaning pleasing to the eye."
            },
            {
                id: 4,
                question: "Fill in the blank: I haven't seen him _____ Monday.",
                options: [
                    { id: 'A', text: "for" },
                    { id: 'B', text: "since" },
                    { id: 'C', text: "from" },
                    { id: 'D', text: "during" }
                ],
                correctAnswer: 'B',
                explanation: "'Since' is used with a specific point in time (Monday)."
            },
            {
                id: 5,
                question: "What does 'procrastinate' mean?",
                options: [
                    { id: 'A', text: "To work quickly" },
                    { id: 'B', text: "To delay or postpone" },
                    { id: 'C', text: "To hurry" },
                    { id: 'D', text: "To finish early" }
                ],
                correctAnswer: 'B',
                explanation: "'Procrastinate' means to delay or postpone action."
            }
        ]
    },
    {
        id: 2,
        title: "Đề thi TOEIC - Part 1",
        description: "Đề thi TOEIC về từ vựng thương mại",
        timeLimit: 25,
        questions: [
            {
                id: 1,
                question: "What is the meaning of 'invoice'?",
                options: [
                    { id: 'A', text: "A letter" },
                    { id: 'B', text: "A bill for goods" },
                    { id: 'C', text: "A receipt" },
                    { id: 'D', text: "A contract" }
                ],
                correctAnswer: 'B',
                explanation: "An invoice is a bill listing goods or services provided."
            },
            {
                id: 2,
                question: "Choose the correct word: We need to _____ the meeting to next week.",
                options: [
                    { id: 'A', text: "postpone" },
                    { id: 'B', text: "promote" },
                    { id: 'C', text: "propose" },
                    { id: 'D', text: "proceed" }
                ],
                correctAnswer: 'A',
                explanation: "'Postpone' means to delay or reschedule an event."
            },
            {
                id: 3,
                question: "What is a 'deadline'?",
                options: [
                    { id: 'A', text: "A finish line" },
                    { id: 'B', text: "The latest time for completion" },
                    { id: 'C', text: "A starting point" },
                    { id: 'D', text: "A break time" }
                ],
                correctAnswer: 'B',
                explanation: "A deadline is the latest time by which something must be completed."
            },
            {
                id: 4,
                question: "Fill in the blank: The company _____ its profits this quarter.",
                options: [
                    { id: 'A', text: "increased" },
                    { id: 'B', text: "increase" },
                    { id: 'C', text: "increasing" },
                    { id: 'D', text: "increases" }
                ],
                correctAnswer: 'A',
                explanation: "Past tense is needed for completed action in the past."
            },
            {
                id: 5,
                question: "What does 'negotiate' mean?",
                options: [
                    { id: 'A', text: "To argue" },
                    { id: 'B', text: "To discuss terms" },
                    { id: 'C', text: "To refuse" },
                    { id: 'D', text: "To agree immediately" }
                ],
                correctAnswer: 'B',
                explanation: "'Negotiate' means to discuss terms to reach an agreement."
            }
        ]
    },
    {
        id: 3,
        title: "Đề thi Ngữ pháp - Cơ bản",
        description: "Đề thi về ngữ pháp tiếng Anh cơ bản",
        timeLimit: 20,
        questions: [
            {
                id: 1,
                question: "Choose the correct form: They _____ playing football now.",
                options: [
                    { id: 'A', text: "is" },
                    { id: 'B', text: "are" },
                    { id: 'C', text: "was" },
                    { id: 'D', text: "were" }
                ],
                correctAnswer: 'B',
                explanation: "Present continuous tense: They are + verb-ing."
            },
            {
                id: 2,
                question: "What is the past tense of 'go'?",
                options: [
                    { id: 'A', text: "goed" },
                    { id: 'B', text: "went" },
                    { id: 'C', text: "gone" },
                    { id: 'D', text: "going" }
                ],
                correctAnswer: 'B',
                explanation: "The past tense of 'go' is 'went'."
            },
            {
                id: 3,
                question: "Fill in the blank: I _____ never been to Paris.",
                options: [
                    { id: 'A', text: "has" },
                    { id: 'B', text: "have" },
                    { id: 'C', text: "had" },
                    { id: 'D', text: "having" }
                ],
                correctAnswer: 'B',
                explanation: "Present perfect: I have + past participle."
            },
            {
                id: 4,
                question: "Choose the correct article: _____ apple a day keeps the doctor away.",
                options: [
                    { id: 'A', text: "A" },
                    { id: 'B', text: "An" },
                    { id: 'C', text: "The" },
                    { id: 'D', text: "No article" }
                ],
                correctAnswer: 'B',
                explanation: "'An' is used before words starting with a vowel sound (apple)."
            },
            {
                id: 5,
                question: "What is the plural of 'child'?",
                options: [
                    { id: 'A', text: "childs" },
                    { id: 'B', text: "children" },
                    { id: 'C', text: "childes" },
                    { id: 'D', text: "childrens" }
                ],
                correctAnswer: 'B',
                explanation: "The plural of 'child' is 'children' (irregular plural)."
            }
        ]
    },
    {
        id: 4,
        title: "Đề thi Từ vựng - Nâng cao",
        description: "Đề thi từ vựng tiếng Anh nâng cao",
        timeLimit: 35,
        questions: [
            {
                id: 1,
                question: "What is the meaning of 'meticulous'?",
                options: [
                    { id: 'A', text: "Careless" },
                    { id: 'B', text: "Very careful and precise" },
                    { id: 'C', text: "Quick" },
                    { id: 'D', text: "Lazy" }
                ],
                correctAnswer: 'B',
                explanation: "'Meticulous' means showing great attention to detail; very careful and precise."
            },
            {
                id: 2,
                question: "What is the antonym of 'generous'?",
                options: [
                    { id: 'A', text: "Kind" },
                    { id: 'B', text: "Stingy" },
                    { id: 'C', text: "Friendly" },
                    { id: 'D', text: "Helpful" }
                ],
                correctAnswer: 'B',
                explanation: "'Generous' means giving freely, while 'stingy' means unwilling to give or spend."
            },
            {
                id: 3,
                question: "What does 'ephemeral' mean?",
                options: [
                    { id: 'A', text: "Lasting forever" },
                    { id: 'B', text: "Lasting for a very short time" },
                    { id: 'C', text: "Very long" },
                    { id: 'D', text: "Permanent" }
                ],
                correctAnswer: 'B',
                explanation: "'Ephemeral' means lasting for a very short time."
            },
            {
                id: 4,
                question: "What is the synonym of 'eloquent'?",
                options: [
                    { id: 'A', text: "Quiet" },
                    { id: 'B', text: "Fluent and persuasive" },
                    { id: 'C', text: "Shy" },
                    { id: 'D', text: "Rude" }
                ],
                correctAnswer: 'B',
                explanation: "'Eloquent' means fluent and persuasive in speaking or writing."
            },
            {
                id: 5,
                question: "What does 'ubiquitous' mean?",
                options: [
                    { id: 'A', text: "Rare" },
                    { id: 'B', text: "Present everywhere" },
                    { id: 'C', text: "Hidden" },
                    { id: 'D', text: "Uncommon" }
                ],
                correctAnswer: 'B',
                explanation: "'Ubiquitous' means present, appearing, or found everywhere."
            }
        ]
    }
];

// Hàm helper để lấy đề thi theo ID
export const getExamById = (id) => {
    return examData.find(exam => exam.id === id);
};

// Hàm helper để lấy tất cả đề thi
export const getAllExams = () => {
    return examData;
};

// Mock data cho flashcards
export const flashcardData = [
    {
        id: 1,
        title: "Từ vựng về văn phòng",
        description: "Học từ vựng tiếng Anh về các đồ vật và khái niệm trong văn phòng",
        cards: [
            {
                id: 1,
                word: "desk",
                pronunciation: "/desk/",
                partOfSpeech: "noun",
                definition: "bàn làm việc",
                example: "I have a large desk in my office."
            },
            {
                id: 2,
                word: "meeting",
                pronunciation: "/ˈmiːtɪŋ/",
                partOfSpeech: "noun",
                definition: "cuộc họp",
                example: "We have a meeting at 3 PM today."
            },
            {
                id: 3,
                word: "deadline",
                pronunciation: "/ˈdedlaɪn/",
                partOfSpeech: "noun",
                definition: "hạn chót",
                example: "The deadline for this project is Friday."
            },
            {
                id: 4,
                word: "colleague",
                pronunciation: "/ˈkɒliːɡ/",
                partOfSpeech: "noun",
                definition: "đồng nghiệp",
                example: "My colleague helped me with the presentation."
            },
            {
                id: 5,
                word: "schedule",
                pronunciation: "/ˈʃedjuːl/",
                partOfSpeech: "noun",
                definition: "lịch trình",
                example: "Please check your schedule before booking the meeting."
            }
        ]
    },
    {
        id: 2,
        title: "Từ vựng về đồ vật",
        description: "Học từ vựng tiếng Anh về các đồ vật hàng ngày",
        cards: [
            {
                id: 1,
                word: "tomato",
                pronunciation: "/təˈmɑːtəʊ/",
                partOfSpeech: "noun",
                definition: "(quả) cà chua",
                example: "I like to eat tomatoes with salad."
            },
            {
                id: 2,
                word: "umbrella",
                pronunciation: "/ʌmˈbrelə/",
                partOfSpeech: "noun",
                definition: "cái ô, dù",
                example: "Don't forget to bring your umbrella, it's raining."
            },
            {
                id: 3,
                word: "bottle",
                pronunciation: "/ˈbɒtl/",
                partOfSpeech: "noun",
                definition: "chai, lọ",
                example: "Can you pass me that water bottle?"
            },
            {
                id: 4,
                word: "keyboard",
                pronunciation: "/ˈkiːbɔːd/",
                partOfSpeech: "noun",
                definition: "bàn phím",
                example: "I need to buy a new keyboard for my computer."
            },
            {
                id: 5,
                word: "mirror",
                pronunciation: "/ˈmɪrə(r)/",
                partOfSpeech: "noun",
                definition: "gương",
                example: "She looked at herself in the mirror."
            }
        ]
    },
    {
        id: 3,
        title: "Từ vựng về con vật",
        description: "Học từ vựng tiếng Anh về các loài động vật",
        cards: [
            {
                id: 1,
                word: "elephant",
                pronunciation: "/ˈelɪfənt/",
                partOfSpeech: "noun",
                definition: "con voi",
                example: "The elephant is the largest land animal."
            },
            {
                id: 2,
                word: "butterfly",
                pronunciation: "/ˈbʌtəflaɪ/",
                partOfSpeech: "noun",
                definition: "con bướm",
                example: "A beautiful butterfly landed on the flower."
            },
            {
                id: 3,
                word: "dolphin",
                pronunciation: "/ˈdɒlfɪn/",
                partOfSpeech: "noun",
                definition: "cá heo",
                example: "Dolphins are very intelligent animals."
            },
            {
                id: 4,
                word: "penguin",
                pronunciation: "/ˈpeŋɡwɪn/",
                partOfSpeech: "noun",
                definition: "chim cánh cụt",
                example: "Penguins cannot fly but they are excellent swimmers."
            },
            {
                id: 5,
                word: "tiger",
                pronunciation: "/ˈtaɪɡə(r)/",
                partOfSpeech: "noun",
                definition: "con hổ",
                example: "The tiger is a fierce predator."
            }
        ]
    }
];

// Hàm helper để lấy flashcard topic theo ID
export const getFlashcardTopicById = (id) => {
    return flashcardData.find(topic => topic.id === id);
};

// Hàm helper để lấy tất cả flashcard topics
export const getAllFlashcardTopics = () => {
    return flashcardData;
};

// Mock data cho admin - Users
export const adminUsers = [
    {
        id: 1,
        username: "admin",
        fullName: "Hoang Tu",
        email: "hoanganhtu147@gmail.com",
        phone: "0123456789",
        role: "admin",
        isAdmin: true,
        createdAt: "2024-01-15",
        status: "active"
    },
    {
        id: 2,
        username: "user123",
        fullName: "Nguyen Van A",
        email: "user123@gmail.com",
        phone: "0987654321",
        role: "user",
        isAdmin: false,
        createdAt: "2024-02-20",
        status: "active"
    },
    {
        id: 3,
        username: "student456",
        fullName: "Tran Thi B",
        email: "student456@gmail.com",
        phone: "0123456780",
        role: "user",
        isAdmin: false,
        createdAt: "2024-03-10",
        status: "active"
    },
    {
        id: 4,
        username: "learner789",
        fullName: "Le Van C",
        email: "learner789@gmail.com",
        phone: "0987654320",
        role: "user",
        isAdmin: false,
        createdAt: "2024-04-05",
        status: "inactive"
    }
];

// Mock data cho admin - Exam Results
export const adminExamResults = [
    {
        id: 1,
        userId: 1,
        username: "hoangtu0207",
        examId: 1,
        examTitle: "Đề thi IELTS - Part 1",
        score: 80,
        totalQuestions: 5,
        correctAnswers: 4,
        completedAt: "2024-05-15T10:30:00",
        timeSpent: 25 // phút
    },
    {
        id: 2,
        userId: 2,
        username: "user123",
        examId: 1,
        examTitle: "Đề thi IELTS - Part 1",
        score: 60,
        totalQuestions: 5,
        correctAnswers: 3,
        completedAt: "2024-05-14T14:20:00",
        timeSpent: 28
    },
    {
        id: 3,
        userId: 1,
        username: "hoangtu0207",
        examId: 2,
        examTitle: "Đề thi TOEIC - Part 1",
        score: 100,
        totalQuestions: 5,
        correctAnswers: 5,
        completedAt: "2024-05-16T09:15:00",
        timeSpent: 20
    },
    {
        id: 4,
        userId: 3,
        username: "student456",
        examId: 3,
        examTitle: "Đề thi Ngữ pháp - Cơ bản",
        score: 40,
        totalQuestions: 5,
        correctAnswers: 2,
        completedAt: "2024-05-13T16:45:00",
        timeSpent: 18
    },
    {
        id: 5,
        userId: 2,
        username: "user123",
        examId: 4,
        examTitle: "Đề thi Từ vựng - Nâng cao",
        score: 60,
        totalQuestions: 5,
        correctAnswers: 3,
        completedAt: "2024-05-12T11:30:00",
        timeSpent: 32
    }
];

// Hàm helper để lấy tất cả users
export const getAllUsers = () => {
    return adminUsers;
};

// Hàm helper để lấy user theo ID
export const getUserById = (id) => {
    return adminUsers.find(user => user.id === id);
};

// Hàm helper để lấy tất cả exam results
export const getAllExamResults = () => {
    return adminExamResults;
};

// Hàm helper để lấy exam results theo userId
export const getExamResultsByUserId = (userId) => {
    return adminExamResults.filter(result => result.userId === userId);
};

// Hàm helper để lấy exam results theo examId
export const getExamResultsByExamId = (examId) => {
    return adminExamResults.filter(result => result.examId === examId);
};

