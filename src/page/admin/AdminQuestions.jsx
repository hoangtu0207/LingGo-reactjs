import { useState, useEffect } from "react";
import { examData } from "../../utils/data";
import { getAllExams } from "../../utils/examStorage";
import {
	addQuestionToExam,
	updateQuestionInExam,
	deleteQuestionFromExam,
} from "../../utils/questionStorage";

export default function AdminQuestions() {
	const [exams, setExams] = useState([]);
	const [selectedExamId, setSelectedExamId] = useState(null);

	useEffect(() => {
		const loadedExams = getAllExams(examData);
		setExams(loadedExams);
		if (loadedExams.length > 0 && !selectedExamId) {
			setSelectedExamId(loadedExams[0].id);
		}
	}, []);

	// Reload exams khi selectedExamId thay đổi để có data mới nhất
	useEffect(() => {
		if (selectedExamId) {
			const loadedExams = getAllExams(examData);
			setExams(loadedExams);
		}
	}, [selectedExamId]);
	const [showModal, setShowModal] = useState(false);
	const [editingQuestion, setEditingQuestion] = useState(null);
	const [formData, setFormData] = useState({
		question: "",
		options: [
			{ id: "A", text: "" },
			{ id: "B", text: "" },
			{ id: "C", text: "" },
			{ id: "D", text: "" },
		],
		correctAnswer: "A",
		explanation: "",
	});

	const selectedExam = exams.find((exam) => exam.id === selectedExamId);
	const questions = selectedExam?.questions || [];

	const handleAdd = () => {
		setEditingQuestion(null);
		setFormData({
			question: "",
			options: [
				{ id: "A", text: "" },
				{ id: "B", text: "" },
				{ id: "C", text: "" },
				{ id: "D", text: "" },
			],
			correctAnswer: "A",
			explanation: "",
		});
		setShowModal(true);
	};

	const handleEdit = (question) => {
		setEditingQuestion(question);
		setFormData({
			question: question.question,
			options: question.options,
			correctAnswer: question.correctAnswer,
			explanation: question.explanation,
		});
		setShowModal(true);
	};

	const handleSave = () => {
		if (!selectedExamId) return;

		// Validate form
		if (!formData.question.trim()) {
			alert("Vui lòng nhập câu hỏi!");
			return;
		}
		if (formData.options.some((opt) => !opt.text.trim())) {
			alert("Vui lòng nhập đầy đủ các lựa chọn!");
			return;
		}
		if (!formData.correctAnswer) {
			alert("Vui lòng chọn đáp án đúng!");
			return;
		}

		if (editingQuestion) {
			const updatedExams = updateQuestionInExam(
				selectedExamId,
				editingQuestion.id,
				formData,
				examData,
			);
			if (updatedExams) {
				setExams(updatedExams);
			}
		} else {
			const updatedExams = addQuestionToExam(
				selectedExamId,
				formData,
				examData,
			);
			if (updatedExams) {
				setExams(updatedExams);
			}
		}
		setShowModal(false);
		setEditingQuestion(null);
	};

	const handleDelete = (questionId) => {
		if (!selectedExamId) return;
		if (window.confirm("Bạn có chắc chắn muốn xóa câu hỏi này?")) {
			const updatedExams = deleteQuestionFromExam(
				selectedExamId,
				questionId,
				examData,
			);
			if (updatedExams) {
				setExams(updatedExams);
			}
		}
	};

	const updateOption = (optionId, text) => {
		setFormData({
			...formData,
			options: formData.options.map((opt) =>
				opt.id === optionId ? { ...opt, text } : opt,
			),
		});
	};

	return (
		<div className="space-y-6">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-semibold">Quản lý Câu hỏi</h2>
				<button
					onClick={handleAdd}
					className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
					disabled={!selectedExamId}
				>
					+ Thêm câu hỏi
				</button>
			</div>

			{/* Exam Selector */}
			<div className="bg-white rounded-lg shadow p-4">
				<label className="block text-sm font-medium text-gray-700 mb-2">
					Chọn đề thi:
				</label>
				<select
					value={selectedExamId || ""}
					onChange={(e) =>
						setSelectedExamId(parseInt(e.target.value))
					}
					className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md"
				>
					{exams.map((exam) => (
						<option
							key={exam.id}
							value={exam.id}
						>
							{exam.title}
						</option>
					))}
				</select>
			</div>

			{/* Questions List */}
			<div className="bg-white rounded-lg shadow overflow-hidden">
				<table className="min-w-full divide-y divide-gray-200">
					<thead className="bg-gray-50">
						<tr>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
								ID
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
								Câu hỏi
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
								Đáp án đúng
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
								Thao tác
							</th>
						</tr>
					</thead>
					<tbody className="bg-white divide-y divide-gray-200">
						{questions.map((question) => (
							<tr key={question.id}>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
									{question.id}
								</td>
								<td className="px-6 py-4 text-sm text-gray-900 max-w-md">
									{question.question &&
									question.question.length > 100
										? `${question.question.substring(0, 100)}...`
										: question.question || "N/A"}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">
									{question.correctAnswer || "N/A"}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
									<button
										onClick={() => handleEdit(question)}
										className="text-blue-600 hover:text-blue-900 mr-3"
									>
										Sửa
									</button>
									<button
										onClick={() =>
											handleDelete(question.id)
										}
										className="text-red-600 hover:text-red-900"
									>
										Xóa
									</button>
								</td>
							</tr>
						))}
						{questions.length === 0 && (
							<tr>
								<td
									colSpan="4"
									className="px-6 py-4 text-center text-gray-500"
								>
									Chưa có câu hỏi nào trong đề thi này
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>

			{/* Modal */}
			{showModal && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
						<h3 className="text-xl font-semibold mb-4">
							{editingQuestion
								? "Sửa câu hỏi"
								: "Thêm câu hỏi mới"}
						</h3>
						<div className="space-y-4">
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									Câu hỏi
								</label>
								<textarea
									value={formData.question}
									onChange={(e) =>
										setFormData({
											...formData,
											question: e.target.value,
										})
									}
									className="w-full px-3 py-2 border border-gray-300 rounded-md"
									rows="3"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Các lựa chọn
								</label>
								{formData.options.map((option) => (
									<div
										key={option.id}
										className="mb-2 flex items-center gap-3"
									>
										<span className="font-semibold w-8">
											{option.id}.
										</span>
										<input
											type="text"
											value={option.text}
											onChange={(e) =>
												updateOption(
													option.id,
													e.target.value,
												)
											}
											className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
											placeholder={`Nhập lựa chọn ${option.id}`}
										/>
										<input
											type="radio"
											name="correctAnswer"
											checked={
												formData.correctAnswer ===
												option.id
											}
											onChange={() =>
												setFormData({
													...formData,
													correctAnswer: option.id,
												})
											}
											className="w-5 h-5"
										/>
										<span className="text-sm text-gray-600">
											Đúng
										</span>
									</div>
								))}
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									Giải thích
								</label>
								<textarea
									value={formData.explanation}
									onChange={(e) =>
										setFormData({
											...formData,
											explanation: e.target.value,
										})
									}
									className="w-full px-3 py-2 border border-gray-300 rounded-md"
									rows="2"
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
