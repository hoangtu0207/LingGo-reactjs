import React from "react";
import { useNavigate } from "react-router-dom";

const Forgotpassword = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-start justify-center pt-20 bg-gradient-to-r from-blue-100 to-white">
            <div className="bg-white rounded-2xl shadow-md p-8 flex gap-12 w-[800px] border border-gray-200">
                <div className="flex-1 flex items-center justify-center">
                    <img src="/logoLingGo.png" alt="logo" className="w-40 h-40 object-contain" />
                </div>

                <div className="flex-1 flex flex-col justify-center">
                    <h2 className="text-3xl font-semibold mb-8 text-gray-800 text-center">Quên mật khẩu</h2>
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 bg-gray-100"
                                placeholder="Nhập email của bạn"
                            />
                        </div>

                        <button
                            type="button"
                            onClick={() => {
                                alert("Mã xác nhận đã được gửi đến email của bạn!");
                                navigate("/login");
                            }}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors mx-auto block"
                        >
                            Gửi mã
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forgotpassword;
