import { listenAndChooseTopics } from "../../data/listenandchoose";
import TopicCard from "./TopicCard";

export default function TopicList() {
    return (
        <div className="min-h-screen bg-white py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 border-b-2 border-gray-300 pb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">
                        Listen and Choose
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Lựa chọn bài để luyện tập
                    </p>
                </div>

                {/* Grid các chủ đề */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {listenAndChooseTopics.map((topic) => (
                        <TopicCard key={topic.id} topic={topic} />
                    ))}
                </div>
            </div>
        </div>
    );
}
