import { useState, useEffect } from "react";
import { adminExamResults, adminUsers, examData } from "../../data";
import { getAllExamResults, deleteExamResult } from "../../utils/resultStorage";
import { getAllUsers } from "../../utils/userStorage";
import { getAllExams } from "../../utils/examStorage";

export default function AdminResults() {
    const [results, setResults] = useState([]);
    const [users, setUsers] = useState([]);
    const [exams, setExams] = useState([]);

    useEffect(() => {
        const loadedResults = getAllExamResults(adminExamResults);
        const loadedUsers = getAllUsers(adminUsers);
        const loadedExams = getAllExams(examData);
        setResults(loadedResults);
        setUsers(loadedUsers);
        setExams(loadedExams);
        // Initialize localStorage với data mặc định nếu chưa có
        if (!localStorage.getItem('linggo_exam_results')) {
            localStorage.setItem('linggo_exam_results', JSON.stringify(adminExamResults));
        }
    }, []);
    const [filterUser, setFilterUser] = useState("");
    const [filterExam, setFilterExam] = useState("");

    const filteredResults = results.filter(result => {
        const matchUser = !filterUser || result.userId === parseInt(filterUser);
        const matchExam = !filterExam || result.examId === parseInt(filterExam);
        return matchUser && matchExam;
    });

    const getScoreColor = (score) => {
        if (score >= 80) return "text-green-600";
        if (score >= 60) return "text-yellow-600";
        return "text-red-600";
    };

    const handleDelete = (resultId) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa kết quả này?")) {
            const updatedResults = deleteExamResult(resultId, adminExamResults);
            setResults(updatedResults);
        }
    };

    // Statistics
    const totalResults = filteredResults.length;
    const averageScore = totalResults > 0
        ? (filteredResults.reduce((sum, r) => sum + r.score, 0) / totalResults).toFixed(1)
        : 0;
    const passCount = filteredResults.filter(r => r.score >= 60).length;
    const failCount = totalResults - passCount;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">Quản lý Bài làm và Điểm số</h2>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg shadow p-6">
                    <p className="text-gray-600 text-sm">Tổng bài làm</p>
                    <p className="text-3xl font-bold text-gray-800">{totalResults}</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                    <p className="text-gray-600 text-sm">Điểm trung bình</p>
                    <p className="text-3xl font-bold text-gray-800">{averageScore}%</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                    <p className="text-gray-600 text-sm">Đạt (≥60%)</p>
                    <p className="text-3xl font-bold text-green-600">{passCount}</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                    <p className="text-gray-600 text-sm">Không đạt</p>
                    <p className="text-3xl font-bold text-red-600">{failCount}</p>
                </div>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-lg shadow p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Lọc theo người dùng:
                        </label>
                        <select
                            value={filterUser}
                            onChange={(e) => setFilterUser(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        >
                            <option value="">Tất cả người dùng</option>
                            {users.map((user) => (
                                <option key={user.id} value={user.id}>
                                    {user.username} - {user.fullName}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Lọc theo đề thi:
                        </label>
                        <select
                            value={filterExam}
                            onChange={(e) => setFilterExam(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        >
                            <option value="">Tất cả đề thi</option>
                            {exams.map((exam) => (
                                <option key={exam.id} value={exam.id}>
                                    {exam.title}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Results Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Người dùng</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Đề thi</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Điểm</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Đúng/Sai</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Thời gian</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ngày hoàn thành</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredResults.map((result) => (
                            <tr key={result.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{result.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{result.username}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{result.examTitle}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    <span className={`font-semibold ${getScoreColor(result.score)}`}>
                                        {result.score}%
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {result.correctAnswers}/{result.totalQuestions}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {result.timeSpent} phút
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {new Date(result.completedAt).toLocaleString("vi-VN")}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button
                                        onClick={() => handleDelete(result.id)}
                                        className="text-red-600 hover:text-red-900"
                                    >
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {filteredResults.length === 0 && (
                            <tr>
                                <td colSpan="8" className="px-6 py-4 text-center text-gray-500">
                                    Không có kết quả nào
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

