import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function AdminLayout({ children }) {
    const location = useLocation();
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const menuItems = [
        { path: "/admin/dashboard", label: "Dashboard", icon: "📊" },
        { path: "/admin/exams", label: "Quản lý Đề thi", icon: "📝" },
        { path: "/admin/questions", label: "Quản lý Câu hỏi", icon: "❓" },
        { path: "/admin/users", label: "Quản lý Người dùng", icon: "👥" },
        { path: "/admin/results", label: "Quản lý Bài làm", icon: "📈" },
        { path: "/admin/settings", label: "Cài đặt", icon: "⚙️" },
    ];

    const isActive = (path) => {
        return location.pathname === path;
    };

    const handleLogout = () => {
        navigate("/");
    };

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
            <div
                className={`bg-gray-800 text-white transition-all duration-300 flex flex-col ${
                    sidebarOpen ? "w-64" : "w-20"
                }`}
            >
                <div className="p-4 flex items-center justify-between">
                    {sidebarOpen && (
                        <h2 className="text-xl font-bold">Admin Panel</h2>
                    )}
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="text-white hover:text-gray-300"
                    >
                        {sidebarOpen ? "←" : "→"}
                    </button>
                </div>

                <nav className="mt-8 flex-1">
                    {menuItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center px-4 py-3 hover:bg-gray-700 transition ${
                                isActive(item.path) ? "bg-gray-700 border-l-4 border-blue-500" : ""
                            }`}
                        >
                            <span className="text-2xl mr-3">{item.icon}</span>
                            {sidebarOpen && <span>{item.label}</span>}
                        </Link>
                    ))}
                </nav>

                <div className="p-4">
                    <button
                        onClick={handleLogout}
                        className="w-full bg-red-600 hover:bg-red-700 px-4 py-2 rounded flex items-center justify-center"
                    >
                        {sidebarOpen ? "Đăng xuất" : "🚪"}
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="bg-white shadow-sm px-6 py-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-semibold text-gray-800">
                            {menuItems.find(item => isActive(item.path))?.label || "Admin"}
                        </h1>
                        <div className="flex items-center gap-4">
                            <span className="text-gray-600">Admin User</span>
                            <Link
                                to="/Home"
                                className="text-blue-600 hover:text-blue-800"
                            >
                                Về trang chủ
                            </Link>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <main className="flex-1 p-6 overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}

