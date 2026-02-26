import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { flashcardData } from "../../utils/data";
import { getAllFlashcardTopics } from "../../utils/flashcardStorage";

export default function Chonthe() {
	const navigate = useNavigate();
	const [topics, setTopics] = useState([]);

	useEffect(() => {
		const loadedTopics = getAllFlashcardTopics(flashcardData);
		setTopics(loadedTopics);
	}, []);

	const handleStartFlashcard = (topicId) => {
		navigate(`/flashcard/${topicId}`);
	};

	return (
		<div className="flex flex-col min-h-screen">
			<section className="bg-blue-200 text-center py-6">
				<h2 className="text-2xl font-semibold flex items-center justify-center gap-2">
					<span className="material-icons text-gray-700">
						Flashcards
					</span>
				</h2>
				<p className="text-gray-600">
					Lựa chọn lĩnh vực từ vựng mà bạn cần
				</p>
			</section>

			<main className="flex-1 flex justify-center items-start mt-10">
				<div className="flex flex-wrap justify-center gap-10">
					{topics.map((topic) => (
						<div
							key={topic.id}
							className="w-64 h-64 bg-gray-100 rounded-2xl flex flex-col justify-between items-center p-6 shadow-sm hover:shadow-lg hover:bg-blue-100 hover:text-white transition transform hover:-translate-y-1"
						>
							<div className="text-center">
								<h3 className="font-semibold text-lg mb-2">
									{topic.title}
								</h3>
								<p className="text-sm text-gray-600 mb-2">
									{topic.description}
								</p>
								<p className="text-xs text-gray-500">
									{topic.cards.length} từ vựng
								</p>
							</div>
							<button
								onClick={() => handleStartFlashcard(topic.id)}
								className="border rounded-full px-4 text-lg hover:bg-blue-400"
							>
								Bắt đầu học
							</button>
						</div>
					))}
				</div>
			</main>
		</div>
	);
}
