import { useNavigate } from "react-router-dom";

export default function TopicCard({ topic }) {
    const navigate = useNavigate();

    return (
        <div className="border-2 border-gray-400 rounded-3xl p-8 text-center hover:shadow-lg transition-all duration-300 cursor-pointer">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
                {topic.title}
            </h3>

            <button
                onClick={() => navigate(`/listen-and-choose/${topic.id}`)}
                className="border-2 border-gray-600 text-gray-700 font-semibold py-2 px-8 rounded-full hover:bg-gray-100 transition-all duration-300"
            >
                Chi tiết
            </button>
        </div>
    );
}
