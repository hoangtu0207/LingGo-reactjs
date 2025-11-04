import { useState } from "react";
import { getAllExams } from "../../data";

export default function AdminExams() {
    const [exams, setExams] = useState(getAllExams());
    const [showModal, setShowModal] = useState(false);
    const [editingExam, setEditingExam] = useState(null);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        timeLimit: 30,
    });

    const handleAdd = () => {
        setEditingExam(null);
        setFormData({ title: "", description: "", timeLimit: 30 });
        setShowModal(true);
    };

    const handleEdit = (exam) => {
        setEditingExam(exam);
        setFormData({
            title: exam.title,
            description: exam.description,
            timeLimit: exam.timeLimit,
        });
        setShowModal(true);
    };

    const handleSave = () => {
        if (editingExam) {
            // Update exam
            setExams(exams.map(exam =>
                exam.id === editingExam.id
                    ? { ...exam, ...formData }
                    : exam
            ));
        } else {
            // Add new exam
            const newExam = {
                id: exams.length + 1,
                ...formData,
                questions: [],
            };
            setExams([...exams, newExam]);
        }
        setShowModal(false);
        setEditingExam(null);
    };

    const handleDelete = (examId) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa đề thi này?")) {
            setExams(exams.filter(exam => exam.id !== examId));
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">Quản lý Đề thi</h2>
                <button
                    onClick={handleAdd}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    + Thêm đề thi
                </button>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tiêu đề</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Mô tả</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Thời gian</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Số câu hỏi</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {exams.map((exam) => (
                            <tr key={exam.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{exam.id}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{exam.title}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{exam.description}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{exam.timeLimit} phút</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{exam.questions?.length || 0}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button
                                        onClick={() => handleEdit(exam)}
                                        className="text-blue-600 hover:text-blue-900 mr-3"
                                    >
                                        Sửa
                                    </button>
                                    <button
                                        onClick={() => handleDelete(exam.id)}
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
                    <div className="bg-white rounded-lg p-6 w-96">
                        <h3 className="text-xl font-semibold mb-4">
                            {editingExam ? "Sửa đề thi" : "Thêm đề thi mới"}
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Tiêu đề
                                </label>
                                <input
                                    type="text"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Mô tả
                                </label>
                                <textarea
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                    rows="3"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Thời gian (phút)
                                </label>
                                <input
                                    type="number"
                                    value={formData.timeLimit}
                                    onChange={(e) => setFormData({ ...formData, timeLimit: parseInt(e.target.value) })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                />
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

