import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import QuestionCard from "./QuestionCard";
import ResultPage from "./Ketqua";
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

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setSelectedAnswer(null);
            setIsAnswered(false);
            setIsCorrect(false);
        }
    };

    const handleGoToQuestion = (index) => {
        setCurrentQuestionIndex(index);
        setSelectedAnswer(null);
        setIsAnswered(false);
        setIsCorrect(false);
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
        <div className="min-h-screen bg-gradient-to-r from-blue-200 to-blue-100 py-10 px-4">
            <main className="flex-1 px-6 flex flex-col items-center min-h-[80vh]">
                <h2 className="text-2xl font-semibold text-center mb-4">
                    {topic.title}
                </h2>
                <p className="text-gray-600 text-center mb-8">
                    Câu hỏi {currentQuestionIndex + 1} / {questions.length}
                </p>

                {/* Câu hỏi */}
                <div className="mb-8 w-full max-w-2xl">
                    <QuestionCard
                        question={currentQuestion}
                        topic={topic}
                        onAnswer={handleAnswer}
                        isAnswered={isAnswered}
                        isCorrect={isCorrect}
                        selectedAnswer={selectedAnswer}
                    />
                </div>

                {/* Navigation buttons */}
                <div className="flex justify-center gap-4 mb-6">
                    <button
                        onClick={handlePreviousQuestion}
                        disabled={currentQuestionIndex === 0}
                        className={`px-6 py-2 rounded ${currentQuestionIndex === 0
                                ? "bg-gray-300 cursor-not-allowed"
                                : "bg-blue-500 text-white hover:bg-blue-600"
                            }`}
                    >
                        ← Câu trước
                    </button>
                    <button
                        onClick={handleNextQuestion}
                        className={`px-6 py-2 rounded ${currentQuestionIndex === questions.length - 1
                                ? "bg-green-500 text-white hover:bg-green-600"
                                : "bg-blue-500 text-white hover:bg-blue-600"
                            }`}
                    >
                        {currentQuestionIndex === questions.length - 1 ? "Xem kết quả" : "Câu tiếp →"}
                    </button>
                </div>

                {/* Question indicators */}
                <div className="flex justify-center gap-2 mb-8 flex-wrap max-w-2xl">
                    {questions.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleGoToQuestion(index)}
                            className={`w-10 h-10 rounded ${index === currentQuestionIndex
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
                    onClick={() => navigate("/chonchude")}
                    className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-600"
                >
                    Quay lại danh sách chủ đề
                </button>
            </main>
        </div>
    );
}
