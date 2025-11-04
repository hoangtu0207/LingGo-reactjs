// Helper functions để lưu/đọc users từ localStorage

const STORAGE_KEY = 'linggo_users';

// Lấy tất cả users từ localStorage
export const getUsersFromStorage = () => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            return JSON.parse(stored);
        }
        return null;
    } catch (error) {
        console.error('Error reading users from storage:', error);
        return null;
    }
};

// Lưu users vào localStorage
export const saveUsersToStorage = (users) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
        return true;
    } catch (error) {
        console.error('Error saving users to storage:', error);
        return false;
    }
};

// Lấy tất cả users (từ storage hoặc data mặc định)
export const getAllUsers = (defaultData) => {
    const stored = getUsersFromStorage();
    return stored || defaultData;
};

// Lấy user theo ID
export const getUserById = (id, defaultData) => {
    const users = getAllUsers(defaultData);
    return users.find(user => user.id === id);
};

// Thêm user mới
export const addUser = (user, defaultData) => {
    const users = getAllUsers(defaultData);
    const newUser = {
        ...user,
        id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
        createdAt: new Date().toISOString().split("T")[0]
    };
    const updatedUsers = [...users, newUser];
    saveUsersToStorage(updatedUsers);
    return updatedUsers;
};

// Cập nhật user
export const updateUser = (userId, updatedUser, defaultData) => {
    const users = getAllUsers(defaultData);
    const updatedUsers = users.map(user =>
        user.id === userId ? { ...user, ...updatedUser, id: userId } : user
    );
    saveUsersToStorage(updatedUsers);
    return updatedUsers;
};

// Xóa user
export const deleteUser = (userId, defaultData) => {
    const users = getAllUsers(defaultData);
    const updatedUsers = users.filter(user => user.id !== userId);
    saveUsersToStorage(updatedUsers);
    return updatedUsers;
};

