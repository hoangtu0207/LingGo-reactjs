import React from "react";

export default function ChonThe() {
    const topics = [
        { title: "Test1" },
        { title: "Test2" },
        { title: "Test3" },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-gray-100 text-center py-6 border-b">
                <h2 className="text-2xl font-semibold flex items-center justify-center gap-2">
                    <span className="material-icons text-gray-700">Thư viện đề thi</span>
                </h2>
                <p className="text-gray-600">
                    Lựa chọn đề thi để luyện tập
                </p>
            </section>

            <main className="flex-1 flex justify-center items-start mt-10">
                <div className="flex flex-wrap justify-center gap-10">
                    {topics.map((topic, index) => (
                        <div
                            key={index}
                            className="w-64 h-64 bg-gray-100 rounded-2xl flex flex-col justify-between items-center p-6 shadow-sm hover:shadow-lg hover:bg-blue-100 hover:text-white transition transform hover:-translate-y-1"
                        >
                            <h3 className="text-center font-semibold text-lg">
                                {topic.title}
                            </h3>
                            <button className="border rounded-full px-4 text-lg hover:bg-blue-400">
                                Bắt đầu thi
                            </button>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
