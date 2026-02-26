import { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { flashcardData } from "../../data/flashcards";
import { getFlashcardTopicById } from "../../utils/flashcardStorage";

export default function Flashcard() {
	const { topicId } = useParams();
	const navigate = useNavigate();
	const [topic, setTopic] = useState(null);

	useEffect(() => {
		const loadedTopic = getFlashcardTopicById(
			parseInt(topicId),
			flashcardData,
		);
		setTopic(loadedTopic);
	}, [topicId]);

	const [currentCardIndex, setCurrentCardIndex] = useState(0);
	const [isFlipped, setIsFlipped] = useState(false);
	const cardInnerRef = useRef(null);

	if (!topic) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-center">
					<h2 className="text-2xl font-bold text-red-600 mb-4">
						Chủ đề không tồn tại
					</h2>
					<button
						onClick={() => navigate("/Chonthe")}
						className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
					>
						Quay lại danh sách chủ đề
					</button>
				</div>
			</div>
		);
	}

	const currentCard = topic.cards[currentCardIndex];
	const totalCards = topic.cards.length;

	const handleFlip = () => {
		setIsFlipped(!isFlipped);
		if (cardInnerRef.current) {
			cardInnerRef.current.classList.toggle("is-flipped");
		}
	};

	const handleNext = () => {
		if (currentCardIndex < totalCards - 1) {
			setCurrentCardIndex(currentCardIndex + 1);
			setIsFlipped(false);
			if (cardInnerRef.current) {
				cardInnerRef.current.classList.remove("is-flipped");
			}
		}
	};

	const handlePrevious = () => {
		if (currentCardIndex > 0) {
			setCurrentCardIndex(currentCardIndex - 1);
			setIsFlipped(false);
			if (cardInnerRef.current) {
				cardInnerRef.current.classList.remove("is-flipped");
			}
		}
	};

	const handleGoToCard = (index) => {
		setCurrentCardIndex(index);
		setIsFlipped(false);
		if (cardInnerRef.current) {
			cardInnerRef.current.classList.remove("is-flipped");
		}
	};

	return (
		<main className="flex-1 px-6 py-10 flex flex-col items-center min-h-[80vh]">
			<h2 className="text-2xl font-semibold text-center mb-4">
				{topic.title}
			</h2>
			<p className="text-gray-600 text-center mb-8">
				Thẻ {currentCardIndex + 1} / {totalCards}
			</p>

			{/* Flashcard */}
			<div
				className="relative w-full max-w-xl h-80 mb-8 perspective cursor-pointer select-none"
				onClick={handleFlip}
			>
				<div
					ref={cardInnerRef}
					className="relative h-full w-full preserve-3d transition-transform duration-500"
				>
					{/* Mặt trước - Từ vựng */}
					<div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-8 shadow-lg flex flex-col justify-center items-center text-center backface-hidden">
						<div className="text-3xl font-bold mb-4 text-blue-800">
							{currentCard.word}
						</div>
						<div className="text-lg text-blue-600 italic mb-2">
							{currentCard.pronunciation}
						</div>
						<div className="text-sm text-gray-600">
							({currentCard.partOfSpeech})
						</div>
						<div className="mt-4 text-sm text-gray-500">
							👆 Click để xem nghĩa
						</div>
					</div>

					{/* Mặt sau - Định nghĩa */}
					<div
						className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-8 shadow-lg flex flex-col justify-center backface-hidden"
						style={{ transform: "rotateY(180deg)" }}
					>
						<div className="mb-4">
							<h3 className="text-xl font-semibold text-green-800 mb-2">
								Định nghĩa:
							</h3>
							<p className="text-lg text-green-700 font-medium">
								{currentCard.definition}
							</p>
						</div>
						<div className="mt-4">
							<h4 className="text-lg font-semibold text-green-800 mb-2">
								Ví dụ:
							</h4>
							<p className="text-base text-green-700 italic">
								"{currentCard.example}"
							</p>
						</div>
						<div className="mt-4 text-sm text-gray-500">
							👆 Click để quay lại
						</div>
					</div>
				</div>
			</div>

			{/* Navigation buttons */}
			<div className="flex justify-center gap-4 mb-6">
				<button
					onClick={(e) => {
						e.stopPropagation();
						handlePrevious();
					}}
					disabled={currentCardIndex === 0}
					className={`px-6 py-2 rounded ${
						currentCardIndex === 0
							? "bg-gray-300 cursor-not-allowed"
							: "bg-blue-500 text-white hover:bg-blue-600"
					}`}
				>
					← Thẻ trước
				</button>
				<button
					onClick={(e) => {
						e.stopPropagation();
						handleNext();
					}}
					disabled={currentCardIndex === totalCards - 1}
					className={`px-6 py-2 rounded ${
						currentCardIndex === totalCards - 1
							? "bg-gray-300 cursor-not-allowed"
							: "bg-blue-500 text-white hover:bg-blue-600"
					}`}
				>
					Thẻ tiếp →
				</button>
			</div>

			{/* Card indicators */}
			<div className="flex justify-center gap-2 mb-8 flex-wrap max-w-2xl">
				{topic.cards.map((_, index) => (
					<button
						key={index}
						onClick={(e) => {
							e.stopPropagation();
							handleGoToCard(index);
						}}
						className={`w-10 h-10 rounded ${
							index === currentCardIndex
								? "bg-blue-500 text-white"
								: "bg-gray-200 text-gray-700 hover:bg-blue-300"
						}`}
					>
						{index + 1}
					</button>
				))}
			</div>

			{/* Back button */}
			<button
				onClick={() => navigate("/Chonthe")}
				className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
			>
				Quay lại danh sách chủ đề
			</button>

			{/* CSS for card flip animation */}
			<style>{`
                .perspective {
                    perspective: 1000px;
                }
                .preserve-3d {
                    transform-style: preserve-3d;
                }
                .backface-hidden {
                    backface-visibility: hidden;
                }
                .is-flipped {
                    transform: rotateY(180deg);
                }
            `}</style>
		</main>
	);
}
