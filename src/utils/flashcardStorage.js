// Helper functions để lưu/đọc flashcards từ localStorage

const STORAGE_KEY = 'linggo_flashcards';

// Lấy tất cả flashcard topics từ localStorage
export const getFlashcardsFromStorage = () => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            return JSON.parse(stored);
        }
        // Nếu chưa có data, trả về data mặc định từ data.js
        return null;
    } catch (error) {
        console.error('Error reading flashcards from storage:', error);
        return null;
    }
};

// Lưu flashcard topics vào localStorage
export const saveFlashcardsToStorage = (flashcards) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(flashcards));
        return true;
    } catch (error) {
        console.error('Error saving flashcards to storage:', error);
        return false;
    }
};

// Lấy tất cả flashcard topics (từ storage hoặc data mặc định)
export const getAllFlashcardTopics = (defaultData) => {
    const stored = getFlashcardsFromStorage();
    return stored || defaultData;
};

// Lấy flashcard topic theo ID
export const getFlashcardTopicById = (id, defaultData) => {
    const topics = getAllFlashcardTopics(defaultData);
    return topics.find(topic => topic.id === id);
};

// Thêm flashcard topic mới
export const addFlashcardTopic = (topic, defaultData) => {
    const topics = getAllFlashcardTopics(defaultData);
    const newTopic = {
        ...topic,
        id: topics.length > 0 ? Math.max(...topics.map(t => t.id)) + 1 : 1,
        cards: topic.cards || []
    };
    const updatedTopics = [...topics, newTopic];
    saveFlashcardsToStorage(updatedTopics);
    return updatedTopics;
};

// Cập nhật flashcard topic
export const updateFlashcardTopic = (topicId, updatedTopic, defaultData) => {
    const topics = getAllFlashcardTopics(defaultData);
    const updatedTopics = topics.map(topic =>
        topic.id === topicId ? { ...updatedTopic, id: topicId } : topic
    );
    saveFlashcardsToStorage(updatedTopics);
    return updatedTopics;
};

// Xóa flashcard topic
export const deleteFlashcardTopic = (topicId, defaultData) => {
    const topics = getAllFlashcardTopics(defaultData);
    const updatedTopics = topics.filter(topic => topic.id !== topicId);
    saveFlashcardsToStorage(updatedTopics);
    return updatedTopics;
};

// Thêm card vào topic
export const addCardToTopic = (topicId, card, defaultData) => {
    const topics = getAllFlashcardTopics(defaultData);
    const updatedTopics = topics.map(topic => {
        if (topic.id === topicId) {
            const newCard = {
                ...card,
                id: topic.cards.length > 0 ? Math.max(...topic.cards.map(c => c.id)) + 1 : 1
            };
            return {
                ...topic,
                cards: [...topic.cards, newCard]
            };
        }
        return topic;
    });
    saveFlashcardsToStorage(updatedTopics);
    return updatedTopics;
};

// Cập nhật card trong topic
export const updateCardInTopic = (topicId, cardId, updatedCard, defaultData) => {
    const topics = getAllFlashcardTopics(defaultData);
    const updatedTopics = topics.map(topic => {
        if (topic.id === topicId) {
            return {
                ...topic,
                cards: topic.cards.map(card =>
                    card.id === cardId ? { ...updatedCard, id: cardId } : card
                )
            };
        }
        return topic;
    });
    saveFlashcardsToStorage(updatedTopics);
    return updatedTopics;
};

// Xóa card từ topic
export const deleteCardFromTopic = (topicId, cardId, defaultData) => {
    const topics = getAllFlashcardTopics(defaultData);
    const updatedTopics = topics.map(topic => {
        if (topic.id === topicId) {
            return {
                ...topic,
                cards: topic.cards.filter(card => card.id !== cardId)
            };
        }
        return topic;
    });
    saveFlashcardsToStorage(updatedTopics);
    return updatedTopics;
};

