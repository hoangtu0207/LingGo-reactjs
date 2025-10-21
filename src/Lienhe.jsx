export default function Lienhe() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-100 to-white flex items-start justify-center pt-24">
            <div className="bg-white rounded-2xl shadow-md p-10 w-full max-w-3xl mx-4">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Liên hệ</h1>

                <p className="text-gray-700 mb-4 text-lg text-center">
                    Hãy liên hệ với chúng tôi qua các thông tin dưới đây:
                </p>

                <div className="space-y-5 text-gray-700 text-lg">
                    <p>
                        <span className="font-semibold">Hotline:</span> 0123 456 789
                    </p>
                    <p>
                        <span className="font-semibold">Email:</span>{" "}
                        <a
                            href="mailto:hoanganhtu147@gmail.com"
                            className="text-blue-600 hover:underline"
                        >
                            hoanganhtu147@gmail.com
                        </a>
                    </p>
                    <p>
                        <span className="font-semibold">Địa chỉ:</span> Số 18 Phố Viên, Phường Đức Thắng, Quận Bắc Từ Liêm, TP. Hà Nội
                    </p>
                </div>

                <div className="mt-8 text-center text-gray-600 text-sm">
                    <p>Cảm ơn bạn đã quan tâm đến LingGo! Chúng tôi sẽ phản hồi sớm nhất có thể.</p>
                </div>
            </div>
        </div>
    );
}
