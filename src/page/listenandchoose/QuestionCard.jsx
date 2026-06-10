import { useState, useEffect, useCallback } from "react";
import { Volume2 } from "lucide-react";

export default function QuestionCard({
    question,
    topic,
    onAnswer,
    isAnswered,
    isCorrect,
    selectedAnswer,
}) {
    const [imageError, setImageError] = useState({});
    const [hasPlayedAudio, setHasPlayedAudio] = useState(false);

    const playAudio = useCallback(() => {
        // Dừng âm thanh hiện tại nếu có
        window.speechSynthesis.cancel();

        // Tạo utterance mới với từ cần phát
        const utterance = new SpeechSynthesisUtterance(question.word);
        utterance.rate = 0.8; // Tốc độ phát chậm một chút
        utterance.pitch = 1;
        utterance.lang = "en-US"; // Tiếng Anh

        // Phát âm thanh
        window.speechSynthesis.speak(utterance);
    }, [question.word]);

    useEffect(() => {
        setImageError({});
        setHasPlayedAudio(false);
    }, [question]);

    // Tự động phát âm thanh câu hỏi khi câu hỏi thay đổi
    useEffect(() => {
        if (question && !hasPlayedAudio && !isAnswered) {
            const timer = setTimeout(() => {
                playAudio();
                setHasPlayedAudio(true);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [question, hasPlayedAudio, isAnswered, playAudio]);

    const handleImageError = (optionId) => {
        setImageError(prev => ({ ...prev, [optionId]: true }));
    };

    return (
        <div className="bg-gray-100 rounded-3xl shadow-lg p-8 max-w-2xl mx-auto">

            {/* Speaker Button */}
            <div className="flex justify-center mb-8">
                <button
                    onClick={playAudio}
                    className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 active:scale-95"
                >
                    <Volume2 className="w-5 h-5" />
                    <span>Click to listen</span>
                </button>
            </div>

            {/* Hình ảnh lựa chọn - 2 lựa chọn */}
            <div className="grid grid-cols-2 gap-6 mb-8">
                {question.options.map((option) => {
                    const isSelected = selectedAnswer === option.id;
                    const isCorrectOption = option.id === question.correctAnswer;
                    const hasImageError = imageError[option.id];

                    let borderColor = "border-2 border-gray-300";
                    let bgColor = "bg-cyan-100";

                    if (isAnswered) {
                        if (isCorrectOption) {
                            borderColor = "border-4 border-green-500";
                            bgColor = "bg-green-50";
                        } else if (isSelected && !isCorrect) {
                            borderColor = "border-4 border-red-500";
                            bgColor = "bg-red-50";
                        }
                    } else if (isSelected) {
                        borderColor = "border-4 border-blue-500";
                        bgColor = "bg-blue-50";
                    }

                    return (
                        <button
                            key={option.id}
                            onClick={() => !isAnswered && onAnswer(option.id)}
                            disabled={isAnswered}
                            className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${borderColor} ${bgColor} ${isAnswered ? "cursor-not-allowed" : "cursor-pointer hover:shadow-lg"
                                } group min-h-40 flex items-center justify-center`}
                        >
                            {/* Hình ảnh */}
                            {option.image && !hasImageError && (
                                <img
                                    src={option.image}
                                    alt="option"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    onError={() => handleImageError(option.id)}
                                />
                            )}

                            {/* Placeholder text - chỉ hiển thị khi hình ảnh lỗi */}
                            {hasImageError && (
                                <p className="font-semibold text-gray-600 text-center px-4">
                                    Hình ảnh
                                </p>
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Feedback message */}
            {isAnswered && (
                <div
                    className={`p-4 rounded-lg mb-8 text-center font-semibold text-lg ${isCorrect
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                        }`}
                >
                    {isCorrect ? "Chính xác!" : "Sai rồi!"}
                </div>
            )}
        </div>
    );
}
