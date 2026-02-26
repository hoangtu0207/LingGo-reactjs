import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { examData } from "../../data/dethi";
import { getAllExams } from "../../utils/examStorage";

export default function Chondethi() {
	const navigate = useNavigate();
	const [exams, setExams] = useState([]);

	useEffect(() => {
		const loadedExams = getAllExams(examData);
		setExams(loadedExams);
	}, []);

	const handleStartExam = (examId) => {
		navigate(`/Lamde/${examId}`);
	};

	return (
		<div className="flex flex-col min-h-screen">
			<section className="bg-blue-200 text-center py-6">
				<h2 className="text-2xl font-semibold flex items-center justify-center gap-2">
					<span className="material-icons text-gray-700">
						Thư viện đề thi
					</span>
				</h2>
				<p className="text-gray-600">Lựa chọn đề thi để luyện tập</p>
			</section>

			<main className="flex-1 flex justify-center items-start mt-10">
				<div className="flex flex-wrap justify-center gap-10">
					{exams.map((exam) => (
						<div
							key={exam.id}
							className="w-64 h-64 bg-gray-100 rounded-2xl flex flex-col justify-between items-center p-6 shadow-sm hover:shadow-lg hover:bg-blue-100 hover:text-black transition transform hover:-translate-y-1"
						>
							<div className="text-center">
								<h3 className="font-semibold text-lg mb-2">
									{exam.title}
								</h3>
								<p className="text-sm text-gray-600 mb-2">
									{exam.description}
								</p>
								<p className="text-xs text-gray-500">
									Thời gian: {exam.timeLimit} phút
								</p>
							</div>
							<button
								onClick={() => handleStartExam(exam.id)}
								className="border rounded-full px-4 text-lg hover:bg-blue-400 hover:text-black cursor-pointer"
							>
								Bắt đầu thi
							</button>
						</div>
					))}
				</div>
			</main>
		</div>
	);
}
