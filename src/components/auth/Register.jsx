import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-start justify-center pt-20 bg-gradient-to-r from-blue-100 to-white">
            <div className="bg-white rounded-2xl shadow-md p-8 flex gap-12 w-[800px] border border-gray-200">

                <div className="flex-1 flex items-center justify-center">
                    <img src="/logoLingGo.png" alt="logo" className="w-40 h-40 object-contain" />
                </div>

                <div className="flex-1 flex flex-col justify-center">
                    <h2 className="text-3xl font-semibold mb-8 text-gray-800 text-center">Đăng ký</h2>

                    <div className="space-y-4">
                        {/* Tài khoản */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Họ và tên</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 bg-gray-100"
                                placeholder="Nhập họ và tên"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Tên đăng nhập hoặc Email</label>
                            <input
                                type="email"
                                className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 bg-gray-100"
                                placeholder="Nhập email"
                            />
                        </div>

                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Mật khẩu</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 bg-gray-100 pr-10"
                                placeholder="Nhập mật khẩu"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(v => !v)}
                                className="absolute right-3 top-8 text-gray-500 hover:text-gray-700"
                            >
                                {showPassword ? <Eye /> : <EyeOff />}
                            </button>
                        </div>

                        {/* Xác nhận mật khẩu */}
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Xác nhận mật khẩu</label>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 bg-gray-100 pr-10"
                                placeholder="Nhập lại mật khẩu"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(v => !v)}
                                className="absolute right-3 top-8 text-gray-500 hover:text-gray-700"
                            >
                                {showConfirmPassword ? <Eye /> : <EyeOff />}
                            </button>
                        </div>

                        {/* Nút đăng ký */}
                        <button
                            type="button"
                            onClick={() => navigate("/login")}
                            className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors mx-auto block"
                        >
                            Đăng ký
                        </button>
                    </div>

                    <div className="mt-6 text-center text-sm text-gray-600">
                        Đã có tài khoản? <a href="/login" className="text-blue-600 hover:underline">Đăng nhập ngay</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
