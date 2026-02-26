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
