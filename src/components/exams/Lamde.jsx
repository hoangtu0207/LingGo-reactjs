import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { examData } from "../../data";
import { getExamById } from "../../utils/examStorage";

export default function Lamde() {
    const { examId } = useParams();
    const navigate = useNavigate();
    const [exam, setExam] = useState(null);

    useEffect(() => {
        const loadedExam = getExamById(parseInt(examId), examData);
        setExam(loadedExam);
        if (loadedExam) {
            setTimeRemaining(loadedExam.timeLimit * 60);
        }
    }, [examId]);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [timeRemaining, setTimeRemaining] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);

    // Hàm submit bài thi
    const handleSubmit = () => {
        if (isSubmitted || !exam) return;

        let correctCount = 0;
        exam.questions.forEach((question) => {
            if (selectedAnswers[question.id] === question.correctAnswer) {
                correctCount++;
            }
        });

        const finalScore = (correctCount / exam.questions.length) * 100;
        setScore(finalScore);
        setIsSubmitted(true);
        setShowResults(true);
    };

    // Timer countdown
    useEffect(() => {
        if (!exam || isSubmitted || showResults) return;

        const timer = setInterval(() => {
            setTimeRemaining((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    // Submit khi hết thời gian
                    let correctCount = 0;
                    exam.questions.forEach((question) => {
                        if (selectedAnswers[question.id] === question.correctAnswer) {
                            correctCount++;
                        }
                    });
                    const finalScore = (correctCount / exam.questions.length) * 100;
                    setScore(finalScore);
                    setIsSubmitted(true);
                    setShowResults(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [exam, isSubmitted, showResults, selectedAnswers]);

    if (!exam) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-red-600 mb-4">Đề thi không tồn tại</h2>
                    <button
                        onClick={() => navigate("/Chondethi")}
                        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
                    >
                        Quay lại danh sách đề thi
                    </button>
                </div>
            </div>
        );
    }

    const currentQuestion = exam.questions[currentQuestionIndex];
    const totalQuestions = exam.questions.length;

    const handleAnswerSelect = (answerId) => {
        if (isSubmitted || showResults) return;
        setSelectedAnswers({
            ...selectedAnswers,
            [currentQuestion.id]: answerId,
        });
    };

    const handleNext = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };

    const getQuestionResult = (question) => {
        const userAnswer = selectedAnswers[question.id];
        const isCorrect = userAnswer === question.correctAnswer;
        return {
            userAnswer,
            isCorrect,
            correctAnswer: question.correctAnswer,
        };
    };

    if (showResults) {
        return (
            <div className="min-h-screen py-10 px-4">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-3xl font-bold text-center mb-6">Kết quả bài thi</h2>
                    <div className="text-center mb-8">
                        <div className="text-4xl font-bold text-blue-600 mb-2">
                            {score.toFixed(1)}%
                        </div>
                        <p className="text-lg text-gray-600">
                            Bạn đã trả lời đúng{" "}
                            {exam.questions.filter(
                                (q) => selectedAnswers[q.id] === q.correctAnswer
                            ).length}{" "}
                            / {totalQuestions} câu
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold">Chi tiết từng câu:</h3>
                        {exam.questions.map((question, index) => {
                            const result = getQuestionResult(question);
                            return (
                                <div
                                    key={question.id}
                                    className={`border rounded-lg p-4 ${
                                        result.isCorrect
                                            ? "bg-green-50 border-green-200"
                                            : "bg-red-50 border-red-200"
                                    }`}
                                >
                                    <div className="flex items-start justify-between mb-2">
                                        <h4 className="font-semibold text-lg">
                                            Câu {index + 1}: {question.question}
                                        </h4>
                                        <span
                                            className={`px-3 py-1 rounded text-sm font-medium ${
                                                result.isCorrect
                                                    ? "bg-green-500 text-white"
                                                    : "bg-red-500 text-white"
                                            }`}
                                        >
                                            {result.isCorrect ? "Đúng" : "Sai"}
                                        </span>
                                    </div>

                                    <div className="space-y-2 mb-3">
                                        {question.options.map((option) => {
                                            let bgColor = "bg-gray-100";
                                            if (option.id === result.correctAnswer) {
                                                bgColor = "bg-green-200";
                                            } else if (
                                                option.id === result.userAnswer &&
                                                !result.isCorrect
                                            ) {
                                                bgColor = "bg-red-200";
                                            }

                                            return (
                                                <div
                                                    key={option.id}
                                                    className={`p-2 rounded ${bgColor}`}
                                                >
                                                    <span className="font-medium">
                                                        {option.id}. {option.text}
                                                    </span>
                                                    {option.id === result.correctAnswer && (
                                                        <span className="ml-2 text-green-700 font-semibold">
                                                            ✓ Đáp án đúng
                                                        </span>
                                                    )}
                                                    {option.id === result.userAnswer &&
                                                        !result.isCorrect && (
                                                            <span className="ml-2 text-red-700 font-semibold">
                                                                ✗ Đáp án của bạn
                                                            </span>
                                                        )}
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <div className="bg-blue-50 p-3 rounded mt-2">
                                        <p className="text-sm text-gray-700">
                                            <span className="font-semibold">Giải thích:</span>{" "}
                                            {question.explanation}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={() => navigate("/Chondethi")}
                            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
                        >
                            Quay lại danh sách đề thi
                        </button>
                        <button
                            onClick={() => {
                                setSelectedAnswers({});
                                setCurrentQuestionIndex(0);
                                setTimeRemaining(exam.timeLimit * 60);
                                setIsSubmitted(false);
                                setShowResults(false);
                                setScore(0);
                            }}
                            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
                        >
                            Làm lại
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-10 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header với thông tin đề thi và timer */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-2xl font-bold">{exam.title}</h2>
                            <p className="text-gray-600">{exam.description}</p>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">
                                {formatTime(timeRemaining)}
                            </div>
                            <p className="text-sm text-gray-500">Thời gian còn lại</p>
                        </div>
                    </div>
                </div>

                {/* Câu hỏi hiện tại */}
                <div className="bg-white rounded-lg shadow-md p-8 mb-6">
                    <div className="mb-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-semibold">
                                Câu {currentQuestionIndex + 1} / {totalQuestions}
                            </h3>
                            <div className="text-sm text-gray-500">
                                {Object.keys(selectedAnswers).length} / {totalQuestions} câu đã trả lời
                            </div>
                        </div>
                        <p className="text-lg font-medium mb-6">{currentQuestion.question}</p>
                    </div>

                    <div className="space-y-3">
                        {currentQuestion.options.map((option) => {
                            const isSelected = selectedAnswers[currentQuestion.id] === option.id;
                            return (
                                <button
                                    key={option.id}
                                    onClick={() => handleAnswerSelect(option.id)}
                                    disabled={isSubmitted}
                                    className={`w-full text-left p-4 rounded-lg border-2 transition ${
                                        isSelected
                                            ? "bg-blue-100 border-blue-500"
                                            : "bg-gray-50 border-gray-200 hover:border-blue-300"
                                    } ${isSubmitted ? "cursor-not-allowed" : "cursor-pointer"}`}
                                >
                                    <span className="font-medium">
                                        {option.id}. {option.text}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Navigation buttons */}
                <div className="bg-white rounded-lg shadow-md p-6 flex justify-between items-center">
                    <button
                        onClick={handlePrevious}
                        disabled={currentQuestionIndex === 0}
                        className={`px-6 py-2 rounded ${
                            currentQuestionIndex === 0
                                ? "bg-gray-300 cursor-not-allowed"
                                : "bg-gray-500 text-white hover:bg-gray-600"
                        }`}
                    >
                        Câu trước
                    </button>

                    <div className="flex gap-2">
                        {exam.questions.map((_, index) => {
                            const isAnswered = selectedAnswers[exam.questions[index].id];
                            return (
                                <button
                                    key={index}
                                    onClick={() => setCurrentQuestionIndex(index)}
                                    className={`w-10 h-10 rounded ${
                                        index === currentQuestionIndex
                                            ? "bg-blue-500 text-white"
                                            : isAnswered
                                            ? "bg-green-500 text-white"
                                            : "bg-gray-200 text-gray-700"
                                    } hover:bg-blue-400`}
                                >
                                    {index + 1}
                                </button>
                            );
                        })}
                    </div>

                    {currentQuestionIndex < totalQuestions - 1 ? (
                        <button
                            onClick={handleNext}
                            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Câu tiếp
                        </button>
                    ) : (
                        <button
                            onClick={handleSubmit}
                            disabled={isSubmitted}
                            className={`px-6 py-2 rounded ${
                                isSubmitted
                                    ? "bg-gray-300 cursor-not-allowed"
                                    : "bg-green-500 text-white hover:bg-green-600"
                            }`}
                        >
                            Nộp bài
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
