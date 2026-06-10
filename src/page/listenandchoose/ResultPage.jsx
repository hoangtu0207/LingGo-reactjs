import { useNavigate } from "react-router-dom";
import { RotateCcw, ChevronLeft } from "lucide-react";

export default function ResultPage({ score, totalQuestions, topicId }) {
    const navigate = useNavigate();
    const percentage = Math.round((score / totalQuestions) * 100);

    return (
        <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4">
            <div className="bg-gray-50 rounded-3xl shadow-lg p-8 md:p-12 max-w-md w-full text-center">
                {/* Tiêu đề */}
                <h1 className="text-4xl font-bold text-gray-800 mb-2">
                    KẾT QUẢ
                </h1>

                {/* Điểm */}
                <div className="bg-white rounded-2xl p-8 mb-8">
                    <div className="text-5xl font-bold text-blue-600 mb-2">
                        {score}/{totalQuestions}
                    </div>
                    <p className="text-gray-600 text-lg mb-4">Điểm đạt được</p>
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                        {percentage}%
                    </div>
                    <p className="text-lg font-semibold text-gray-700">
                        Tỷ lệ đúng
                    </p>
                </div>

                {/* Nút */}
                <div className="flex flex-col gap-4">
                    <button
                        onClick={() => navigate(`/listen-and-choose/${topicId}`)}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        <RotateCcw className="w-5 h-5" />
                        Làm lại
                    </button>
                    <button
                        onClick={() => navigate("/chonchude")}
                        className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        <ChevronLeft className="w-5 h-5" />
                        Quay về danh sách
                    </button>
                </div>
            </div>
        </div>
    );
}
