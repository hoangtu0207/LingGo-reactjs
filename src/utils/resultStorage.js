// Helper functions để lưu/đọc exam results từ localStorage

const STORAGE_KEY = 'linggo_exam_results';

// Lấy tất cả exam results từ localStorage
export const getResultsFromStorage = () => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            return JSON.parse(stored);
        }
        return null;
    } catch (error) {
        console.error('Error reading results from storage:', error);
        return null;
    }
};

// Lưu exam results vào localStorage
export const saveResultsToStorage = (results) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(results));
        return true;
    } catch (error) {
        console.error('Error saving results to storage:', error);
        return false;
    }
};

// Lấy tất cả exam results (từ storage hoặc data mặc định)
export const getAllExamResults = (defaultData) => {
    const stored = getResultsFromStorage();
    return stored || defaultData;
};

// Lấy results theo userId
export const getExamResultsByUserId = (userId, defaultData) => {
    const results = getAllExamResults(defaultData);
    return results.filter(result => result.userId === userId);
};

// Lấy results theo examId
export const getExamResultsByExamId = (examId, defaultData) => {
    const results = getAllExamResults(defaultData);
    return results.filter(result => result.examId === examId);
};

// Thêm result mới
export const addExamResult = (result, defaultData) => {
    const results = getAllExamResults(defaultData);
    const newResult = {
        ...result,
        id: results.length > 0 ? Math.max(...results.map(r => r.id)) + 1 : 1,
        completedAt: result.completedAt || new Date().toISOString()
    };
    const updatedResults = [...results, newResult];
    saveResultsToStorage(updatedResults);
    return updatedResults;
};

// Xóa result
export const deleteExamResult = (resultId, defaultData) => {
    const results = getAllExamResults(defaultData);
    const updatedResults = results.filter(result => result.id !== resultId);
    saveResultsToStorage(updatedResults);
    return updatedResults;
};

