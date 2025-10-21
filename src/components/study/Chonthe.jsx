import React from "react";

export default function ChonThe() {
    const topics = [
        { title: "Từ vựng về văn phòng" },
        { title: "Từ vựng về đồ vật" },
        { title: "Từ vựng về con vật" },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Title section */}
            <section className="bg-gray-100 text-center py-6 border-b">
                <h2 className="text-2xl font-semibold flex items-center justify-center gap-2">
                    <span className="material-icons text-gray-700">Flashcards</span>
                </h2>
                <p className="text-gray-600">
                    Lựa chọn lĩnh vực từ vựng mà bạn cần
                </p>
            </section>

            {/* Flashcards list */}
            <main className="flex-1 flex justify-center items-start mt-10">
                <div className="flex flex-wrap justify-center gap-10">
                    {topics.map((topic, index) => (
                        <div
                            key={index}
                            className="w-64 h-64 border rounded-2xl flex flex-col justify-between items-center p-6 shadow-sm hover:shadow-lg transition-shadow"
                        >
                            <h3 className="text-center font-semibold text-lg">
                                {topic.title}
                            </h3>
                            <button className="border rounded-full px-6 py-2 text-lg hover:bg-gray-100">
                                Chi tiết
                            </button>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
