// Helper functions để lưu/đọc questions từ localStorage (thông qua exams)

import { getAllExams, getExamById, updateExam } from './examStorage';

// Thêm question vào exam
export const addQuestionToExam = (examId, question, defaultData) => {
    const exam = getExamById(examId, defaultData);
    if (!exam) return null;

    const newQuestion = {
        ...question,
        id: exam.questions.length > 0 ? Math.max(...exam.questions.map(q => q.id)) + 1 : 1
    };

    const updatedExam = {
        ...exam,
        questions: [...exam.questions, newQuestion]
    };

    const updatedExams = updateExam(examId, updatedExam, defaultData);
    return updatedExams;
};

// Cập nhật question trong exam
export const updateQuestionInExam = (examId, questionId, updatedQuestion, defaultData) => {
    const exam = getExamById(examId, defaultData);
    if (!exam) return null;

    const updatedExam = {
        ...exam,
        questions: exam.questions.map(q =>
            q.id === questionId ? { ...updatedQuestion, id: questionId } : q
        )
    };

    const updatedExams = updateExam(examId, updatedExam, defaultData);
    return updatedExams;
};

// Xóa question từ exam
export const deleteQuestionFromExam = (examId, questionId, defaultData) => {
    const exam = getExamById(examId, defaultData);
    if (!exam) return null;

    const updatedExam = {
        ...exam,
        questions: exam.questions.filter(q => q.id !== questionId)
    };

    const updatedExams = updateExam(examId, updatedExam, defaultData);
    return updatedExams;
};

