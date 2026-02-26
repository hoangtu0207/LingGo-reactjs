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


export const getAllExamResults = () => {
  return adminExamResults;
};

export const getExamResultsByUserId = (userId) => {
  return adminExamResults.filter(result => result.userId === userId);
};

export const getExamResultsByExamId = (examId) => {
  return adminExamResults.filter(result => result.examId === examId);
};
