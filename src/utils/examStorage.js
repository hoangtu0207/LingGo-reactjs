// Helper functions để lưu/đọc exams từ localStorage

const STORAGE_KEY = 'linggo_exams';

// Lấy tất cả exams từ localStorage
export const getExamsFromStorage = () => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            return JSON.parse(stored);
        }
        return null;
    } catch (error) {
        console.error('Error reading exams from storage:', error);
        return null;
    }
};

// Lưu exams vào localStorage
export const saveExamsToStorage = (exams) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(exams));
        return true;
    } catch (error) {
        console.error('Error saving exams to storage:', error);
        return false;
    }
};

// Lấy tất cả exams (từ storage hoặc data mặc định)
export const getAllExams = (defaultData) => {
    const stored = getExamsFromStorage();
    return stored || defaultData;
};

// Lấy exam theo ID
export const getExamById = (id, defaultData) => {
    const exams = getAllExams(defaultData);
    return exams.find(exam => exam.id === id);
};

// Thêm exam mới
export const addExam = (exam, defaultData) => {
    const exams = getAllExams(defaultData);
    const newExam = {
        ...exam,
        id: exams.length > 0 ? Math.max(...exams.map(e => e.id)) + 1 : 1,
        questions: exam.questions || []
    };
    const updatedExams = [...exams, newExam];
    saveExamsToStorage(updatedExams);
    return updatedExams;
};

// Cập nhật exam
export const updateExam = (examId, updatedExam, defaultData) => {
    const exams = getAllExams(defaultData);
    const updatedExams = exams.map(exam =>
        exam.id === examId ? { ...updatedExam, id: examId, questions: updatedExam.questions || exam.questions || [] } : exam
    );
    saveExamsToStorage(updatedExams);
    return updatedExams;
};

// Xóa exam
export const deleteExam = (examId, defaultData) => {
    const exams = getAllExams(defaultData);
    const updatedExams = exams.filter(exam => exam.id !== examId);
    saveExamsToStorage(updatedExams);
    return updatedExams;
};

