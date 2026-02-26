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

// Hàm helper để lấy tất cả users
export const getAllUsers = () => {
    return adminUsers;
};

// Hàm helper để lấy user theo ID
export const getUserById = (id) => {
    return adminUsers.find(user => user.id === id);
};
