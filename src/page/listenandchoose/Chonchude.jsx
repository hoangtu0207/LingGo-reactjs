import { useNavigate } from "react-router-dom";
import { listenAndChooseTopics } from "../../data/listenandchoose";

export default function Chonchude() {
    const navigate = useNavigate();

    const handleStartTopic = (topicId) => {
        navigate(`/listen-and-choose/${topicId}`);
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <section className="bg-blue-300 text-center py-6">
                <h2 className="text-2xl font-semibold">
                    Listen and Choose
                </h2>
                <p className="text-gray-700">
                    Lựa chọn chủ đề để luyện nghe và chọn tranh
                </p>
            </section>

            {/* Danh sách chủ đề */}
            <main className="flex-1 flex justify-center items-start mt-10">
                <div className="flex flex-wrap justify-center gap-10">
                    {listenAndChooseTopics.map((topic) => (
                        <div
                            key={topic.id}
                            className="w-64 h-64 bg-gray-300 rounded-2xl flex flex-col justify-between items-center p-6 shadow-sm hover:shadow-lg hover:bg-blue-300 hover:text-black transition transform hover:-translate-y-1"
                        >
                            <div className="text-center">
                                <h3 className="font-semibold text-lg mb-2">
                                    {topic.title}
                                </h3>

                                {topic.description && (
                                    <p className="text-sm text-gray-700 mb-2">
                                        {topic.description}
                                    </p>
                                )}

                                {topic.questions && (
                                    <p className="text-xs text-gray-700">
                                        {topic.questions.length} câu hỏi
                                    </p>
                                )}
                            </div>

                            <button
                                onClick={() => handleStartTopic(topic.id)}
                                className="border rounded-full px-4 text-lg hover:bg-blue-400 hover:text-black cursor-pointer"
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
