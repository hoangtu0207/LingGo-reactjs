import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function AdminLayout({ children }) {
	const location = useLocation();
	const navigate = useNavigate();
	const [sidebarOpen, setSidebarOpen] = useState(true);

	const menuItems = [
		{ path: "/admin/dashboard", label: "Dashboard" },
		{ path: "/admin/exams", label: "Quản lý Đề thi" },
		{ path: "/admin/questions", label: "Quản lý Câu hỏi" },
		{ path: "/admin/flashcards", label: "Quản lý Flashcards" },
		{ path: "/admin/users", label: "Quản lý Người dùng" },
	];

	const isActive = (path) => {
		return location.pathname === path;
	};

	const handleLogout = () => {
		navigate("/");
	};

	return (
		<div className="flex min-h-screen">
			{/* Sidebar */}
			<div
				className={`bg-blue-300 text-black transition-all flex flex-col ${
					sidebarOpen ? "w-64" : "w-20"
				}`}
			>
				<div className="p-4 flex items-center justify-between">
					{sidebarOpen && (
						<h2 className="text-xl font-bold">Quản trị</h2>
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
							className={`flex items-center px-4 py-3 hover:bg-blue-400 transition ${
								isActive(item.path)
									? "bg-blue-600 border-l-4 border-blue-500"
									: ""
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

				{/* Content */}
				<main className="flex-1 p-6 overflow-auto">{children}</main>
			</div>
		</div>
	);
}
