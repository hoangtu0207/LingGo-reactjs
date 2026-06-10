import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import QuestionCard from "./QuestionCard";
import ResultPage from "./ResultPage";
import { listenAndChooseQuestions, listenAndChooseTopics } from "../../data/listenandchoose";

export default function ListenAndChoosePage() {
    const { topicId } = useParams();
    const navigate = useNavigate();

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [showResult, setShowResult] = useState(false);

    const topic = useMemo(
        () => listenAndChooseTopics.find((t) => t.id === parseInt(topicId)),
        [topicId]
    );
    const questions = useMemo(
        () => listenAndChooseQuestions[topicId] || [],
        [topicId]
    );

    useEffect(() => {
        if (!topic || questions.length === 0) {
            setTimeout(() => navigate("/chonchude"), 2000);
        }
    }, [topic, questions, navigate]);

    const currentQuestion = questions[currentQuestionIndex];

    const handleAnswer = (optionId) => {
        const correct = optionId === currentQuestion.correctAnswer;
        setSelectedAnswer(optionId);
        setIsAnswered(true);
        setIsCorrect(correct);
        if (correct) {
            setScore(score + 1);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(null);
            setIsAnswered(false);
            setIsCorrect(false);
        } else {
            setShowResult(true);
        }
    };

    if (!topic || questions.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center">
                    <p className="text-red-600 text-xl font-semibold mb-4">
                        Chủ đề không tìm thấy
                    </p>
                    <button
                        onClick={() => navigate("/chonchude")}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                    >
                        Quay về danh sách
                    </button>
                </div>
            </div>
        );
    }

    if (showResult) {
        return (
            <ResultPage
                score={score}
                totalQuestions={questions.length}
                topicId={topicId}
            />
        );
    }

    return (
        <div className="min-h-screen bg-white py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Điểm số */}
                {/* <div className="mb-8 flex justify-between items-center px-8 py-4 bg-gray-50 rounded-lg">
                    <div>
                        <p className="text-gray-600 text-sm">Điểm</p>
                        <p className="text-2xl font-bold text-blue-600">
                            {score}/{questions.length}
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="text-gray-600 text-sm">Câu hỏi</p>
                        <p className="text-2xl font-bold text-blue-600">
                            {currentQuestionIndex + 1}/{questions.length}
                        </p>
                    </div>
                </div> */}

                {/* Câu hỏi */}
                <QuestionCard
                    question={currentQuestion}
                    onAnswer={handleAnswer}
                    isAnswered={isAnswered}
                    isCorrect={isCorrect}
                    selectedAnswer={selectedAnswer}
                />

                {/* Nút hành động */}
                {isAnswered && (
                    <div className="mt-8 text-center">
                        <button
                            onClick={handleNextQuestion}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
                        >
                            {currentQuestionIndex < questions.length - 1 ? "Câu tiếp theo" : "Xem kết quả"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
