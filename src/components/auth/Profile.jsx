import Header from "../layout/Header";

export default function Profile() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex flex-col flex-grow justify-center items-center py-6 mt-[-70px]">
                <div className="bg-gray-100 border rounded-2xl shadow-sm p-10 w-[400px] text-center">
                    {/* Avatar */}
                    <div className="flex justify-center mb-3">
                        <img
                            src="avatar.png"
                            alt="Avatar"
                            className="w-20 h-20 rounded-full border"
                        />
                    </div>
                    <h2 className="text-lg font-medium mb-4">
                        Nguyễn Văn A
                    </h2>

                    <form className="space-y-3 text-left">
                        <div>
                            <label className="block text-gray-700 text-sm mb-1">
                                Tài khoản
                            </label>
                            <input
                                type="text"
                                className="w-full border-b border-gray-400 focus:outline-none bg-transparent"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm mb-1">
                                Họ và tên
                            </label>
                            <input
                                type="text"
                                className="w-full border-b border-gray-400 focus:outline-none bg-transparent"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                className="w-full border-b border-gray-400 focus:outline-none bg-transparent"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm mb-1">
                                Số điện thoại
                            </label>
                            <input
                                type="text"
                                className="w-full border-b border-gray-400 focus:outline-none bg-transparent"
                            />
                        </div>

                        <div className="text-center pt-3">
                            <button
                                type="submit"
                                className="bg-sky-600 hover:bg-blue-400 text-white font-medium px-6 py-2 rounded-3xl"
                            >
                                Cập nhật
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}
