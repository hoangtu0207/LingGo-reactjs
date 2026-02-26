import { useState, useEffect } from "react";
import { adminUsers } from "../../data/users";
import {
	getAllUsers,
	addUser,
	updateUser,
	deleteUser,
} from "../../utils/userStorage";

export default function AdminUsers() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const loadedUsers = getAllUsers(adminUsers);
		setUsers(loadedUsers);
		// Initialize localStorage với data mặc định nếu chưa có
		if (!localStorage.getItem("linggo_users")) {
			localStorage.setItem("linggo_users", JSON.stringify(adminUsers));
		}
	}, []);
	const [showModal, setShowModal] = useState(false);
	const [editingUser, setEditingUser] = useState(null);
	const [formData, setFormData] = useState({
		username: "",
		fullName: "",
		email: "",
		phone: "",
		role: "user",
		status: "active",
	});

	const handleAdd = () => {
		setEditingUser(null);
		setFormData({
			username: "",
			fullName: "",
			email: "",
			phone: "",
			role: "user",
			status: "active",
		});
		setShowModal(true);
	};

	const handleEdit = (user) => {
		setEditingUser(user);
		setFormData({
			username: user.username,
			fullName: user.fullName,
			email: user.email,
			phone: user.phone,
			role: user.role,
			status: user.status,
		});
		setShowModal(true);
	};

	const handleSave = () => {
		if (editingUser) {
			// Update user
			const updatedUsers = updateUser(
				editingUser.id,
				formData,
				adminUsers,
			);
			setUsers(updatedUsers);
		} else {
			// Add new user
			const updatedUsers = addUser(formData, adminUsers);
			setUsers(updatedUsers);
		}
		setShowModal(false);
		setEditingUser(null);
	};

	const handleDelete = (userId) => {
		if (window.confirm("Bạn có chắc chắn muốn xóa người dùng này?")) {
			const updatedUsers = deleteUser(userId, adminUsers);
			setUsers(updatedUsers);
		}
	};

	const toggleStatus = (userId) => {
		const user = users.find((u) => u.id === userId);
		if (user) {
			const updatedStatus =
				user.status === "active" ? "inactive" : "active";
			const updatedUsers = updateUser(
				userId,
				{ ...user, status: updatedStatus },
				adminUsers,
			);
			setUsers(updatedUsers);
		}
	};

	return (
		<div className="space-y-6">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-semibold">Quản lý Người dùng</h2>
				<button
					onClick={handleAdd}
					className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
				>
					+ Thêm người dùng
				</button>
			</div>

			<div className="bg-white rounded-lg shadow overflow-hidden">
				<table className="min-w-full divide-y divide-gray-200">
					<thead className="bg-gray-50">
						<tr>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
								ID
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
								Tên đăng nhập
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
								Họ và tên
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
								Email
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
								Vai trò
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
								Trạng thái
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
								Thao tác
							</th>
						</tr>
					</thead>
					<tbody className="bg-white divide-y divide-gray-200">
						{users.map((user) => (
							<tr key={user.id}>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
									{user.id}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
									{user.username}
								</td>
								<td className="px-6 py-4 text-sm text-gray-900">
									{user.fullName}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
									{user.email}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
									{user.role}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm">
									<span
										className={`px-2 py-1 rounded-full text-xs font-medium cursor-pointer ${
											user.status === "active"
												? "bg-green-100 text-green-800"
												: "bg-red-100 text-red-800"
										}`}
										onClick={() => toggleStatus(user.id)}
									>
										{user.status === "active"
											? "Hoạt động"
											: "Không hoạt động"}
									</span>
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
									<button
										onClick={() => handleEdit(user)}
										className="text-blue-600 hover:text-blue-900 mr-3"
									>
										Sửa
									</button>
									<button
										onClick={() => handleDelete(user.id)}
										className="text-red-600 hover:text-red-900"
									>
										Xóa
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Modal */}
			{showModal && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-white rounded-lg p-6 w-96 max-h-[90vh] overflow-y-auto">
						<h3 className="text-xl font-semibold mb-4">
							{editingUser
								? "Sửa người dùng"
								: "Thêm người dùng mới"}
						</h3>
						<div className="space-y-4">
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									Tên đăng nhập
								</label>
								<input
									type="text"
									value={formData.username}
									onChange={(e) =>
										setFormData({
											...formData,
											username: e.target.value,
										})
									}
									className="w-full px-3 py-2 border border-gray-300 rounded-md"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									Họ và tên
								</label>
								<input
									type="text"
									value={formData.fullName}
									onChange={(e) =>
										setFormData({
											...formData,
											fullName: e.target.value,
										})
									}
									className="w-full px-3 py-2 border border-gray-300 rounded-md"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									Email
								</label>
								<input
									type="email"
									value={formData.email}
									onChange={(e) =>
										setFormData({
											...formData,
											email: e.target.value,
										})
									}
									className="w-full px-3 py-2 border border-gray-300 rounded-md"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									Số điện thoại
								</label>
								<input
									type="tel"
									value={formData.phone}
									onChange={(e) =>
										setFormData({
											...formData,
											phone: e.target.value,
										})
									}
									className="w-full px-3 py-2 border border-gray-300 rounded-md"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									Vai trò
								</label>
								<select
									value={formData.role}
									onChange={(e) =>
										setFormData({
											...formData,
											role: e.target.value,
										})
									}
									className="w-full px-3 py-2 border border-gray-300 rounded-md"
								>
									<option value="user">User</option>
									<option value="admin">Admin</option>
								</select>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									Trạng thái
								</label>
								<select
									value={formData.status}
									onChange={(e) =>
										setFormData({
											...formData,
											status: e.target.value,
										})
									}
									className="w-full px-3 py-2 border border-gray-300 rounded-md"
								>
									<option value="active">Hoạt động</option>
									<option value="inactive">
										Không hoạt động
									</option>
								</select>
							</div>
						</div>
						<div className="flex justify-end gap-3 mt-6">
							<button
								onClick={() => setShowModal(false)}
								className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
							>
								Hủy
							</button>
							<button
								onClick={handleSave}
								className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
							>
								Lưu
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
