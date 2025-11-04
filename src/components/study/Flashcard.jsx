import { useRef } from "react";

// TODO : Chondethi

export default function Flashcard() {
    const cardInnerRef = useRef(null);

    const handleFlip = () => {
        if (cardInnerRef.current) {
            cardInnerRef.current.classList.toggle("is-flipped");
        }
    };

    return (
        <main className="flex-1 px-6 py-10 flex flex-col items-center min-h-[80vh]">
            <h2 className="text-2xl font-semibold text-center mb-8">
                Từ vựng Tiếng Anh giao tiếp cơ bản
            </h2>
            <div
                id="card"
                className="relative w-full max-w-xl h-72 perspective cursor-pointer select-none"
                onClick={handleFlip}
            >
                <div
                    id="cardInner"
                    ref={cardInnerRef}
                    className="relative h-full w-full preserve-3d transition-transform duration-500"
                >
                    <div className="absolute inset-0 bg-gray-100 rounded-lg p-6 shadow-md flex flex-col justify-center items-center text-center backface-hidden">
                        <div className="text-lg font-medium mb-2 flex text-center">
                            <span>tomato</span>
                            <button
                                onClick={e => {
                                    document.getElementById("audio").play();
                                    e.stopPropagation();
                                }}
                                className="ml-2 text-gray-600 hover:text-blue-500 text-xl"
                            >
                                <i className="fas fa-volume-up"></i>
                            </button>
                        </div>
                        <p className="text-gray-600 italic">(noun) /təˈmɑːtəʊ/</p>
                        <audio id="audio" src="audio/tomato.mp3"></audio>
                    </div>
                    <div
                        className="absolute inset-0 bg-gray-100 rounded-lg p-6 shadow-md flex flex-col justify-center backface-hidden"
                        style={{ transform: "rotateY(180deg)" }}
                    >
                        <div className="mb-4 w-full">
                            <h3 className="text-lg font-medium pl-32">Định nghĩa:</h3>
                            <p className="text-gray-600 pl-44">(quả) cà chua</p>
                        </div>
                        <div className="mb-4 w-full">
                            <h4 className="text-lg font-medium pl-32">Ví dụ:</h4>
                            <p className="text-gray-600 pl-44">I like to eat tomatoes with salad.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center space-x-32 mt-24">
                <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
                    Quay lại
                </button>
                <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
                    Từ khác
                </button>
            </div>
        </main>
    );
}
