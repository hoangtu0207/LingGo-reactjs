export default function Lienhe() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <main className="flex-grow px-6 md:px-16 py-10">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Liên hệ</h1>
                <p className="text-gray-700 mb-4">Hãy liên hệ với chúng tôi qua:</p>
                <div className="space-y-3 text-gray-700">
                    <p>
                        <span className="font-semibold">Hotline:</span> 0123456789
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
            </main>
        </div>
    );
}
