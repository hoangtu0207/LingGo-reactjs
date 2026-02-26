import { useEffect, useState } from "react";

import { getAllExams } from "../../utils/examStorage";
import { getAllUsers } from "../../utils/userStorage";
import { getAllExamResults } from "../../utils/resultStorage";

export default function AdminDashboard() {
	const [stats, setStats] = useState({
		totalUsers: 0,
		totalExams: 0,
		totalResults: 0,
		averageScore: 0,
	});
	const [recentResults, setRecentResults] = useState([]);

	useEffect(() => {
		const exams = getAllExams();
		const users = getAllUsers();
		const results = getAllExamResults();

		const totalScore = results.reduce(
			(sum, result) => sum + result.score,
			0,
		);

		const avgScore = results.length > 0 ? totalScore / results.length : 0;

		setStats({
			totalUsers: users.length,
			totalExams: exams.length,
			totalResults: results.length,
			averageScore: avgScore.toFixed(1),
		});

		// Lấy 5 bài mới nhất (sắp xếp theo ngày)
		const sortedResults = [...results].sort(
			(a, b) => new Date(b.completedAt) - new Date(a.completedAt),
		);

		setRecentResults(sortedResults.slice(0, 5));
	}, []);

	return (
		<div className="space-y-6">
			{/* Stats Cards */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				<div className="bg-white rounded-lg shadow p-6">
					<p className="text-gray-600 text-sm">Tổng người dùng</p>
					<p className="text-3xl font-bold text-gray-800">
						{stats.totalUsers}
					</p>
				</div>

				<div className="bg-white rounded-lg shadow p-6">
					<p className="text-gray-600 text-sm">Tổng đề thi</p>
					<p className="text-3xl font-bold text-gray-800">
						{stats.totalExams}
					</p>
				</div>

				<div className="bg-white rounded-lg shadow p-6">
					<p className="text-gray-600 text-sm">Tổng bài làm</p>
					<p className="text-3xl font-bold text-gray-800">
						{stats.totalResults}
					</p>
				</div>

				<div className="bg-white rounded-lg shadow p-6">
					<p className="text-gray-600 text-sm">Điểm trung bình</p>
					<p className="text-3xl font-bold text-gray-800">
						{stats.averageScore}%
					</p>
				</div>
			</div>

			{/* Recent Results */}
			<div className="bg-white rounded-lg shadow p-6">
				<h2 className="text-xl font-semibold mb-4">Bài làm gần đây</h2>

				<div className="overflow-x-auto">
					<table className="min-w-full divide-y divide-gray-200">
						<thead className="bg-gray-50">
							<tr>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
									Người dùng
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
									Đề thi
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
									Điểm
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
									Thời gian
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
									Ngày hoàn thành
								</th>
							</tr>
						</thead>

						<tbody className="bg-white divide-y divide-gray-200">
							{recentResults.map((result) => (
								<tr key={result.id}>
									<td className="px-6 py-4 text-sm">
										{result.username}
									</td>

									<td className="px-6 py-4 text-sm">
										{result.examTitle}
									</td>

									<td className="px-6 py-4 text-sm">
										<span
											className={`font-semibold ${
												result.score >= 80
													? "text-green-600"
													: result.score >= 60
														? "text-yellow-600"
														: "text-red-600"
											}`}
										>
											{result.score}%
										</span>
									</td>

									<td className="px-6 py-4 text-sm">
										{result.timeSpent} phút
									</td>

									<td className="px-6 py-4 text-sm">
										{new Date(
											result.completedAt,
										).toLocaleDateString("vi-VN")}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
