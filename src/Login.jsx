import React, { useState } from "react";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#cce7ff]">
            <div className="bg-white rounded-xl shadow-md px-12 py-10 w-[430px] max-w-full border border-gray-400 flex flex-col items-center">
                <img src="/logoLingGo.png" alt="logo" className="w-40 h-40 object-contain mb-2" />
                <h2 className="text-3xl font-normal text-center mb-6 mt-2">Đăng nhập</h2>
                <form className="w-full flex flex-col gap-2">
                    <label className="text-[16px] text-black">
                        <div className="text-[15px] mb-0.5">Tài khoản</div>
                        <input type="text" className="w-full border-0 border-b border-black bg-transparent outline-none text-[15px] py-1" placeholder="" />
                    </label>
                    <label className="text-[16px] text-black relative">
                        <div className="text-[15px] mb-0.5">Mật khẩu</div>
                        <input type={showPassword ? "text" : "password"} className="w-full border-0 border-b border-black bg-transparent outline-none text-[15px] py-1 pr-8" placeholder="" />
                        <button type="button" tabIndex={-1} onClick={() => setShowPassword(v => !v)} className="absolute right-0 top-7 p-1 cursor-pointer" aria-label="Hiện mật khẩu">
                            {/* Eye icon SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-black">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12s-3.75 6.75-9.75 6.75S2.25 12 2.25 12z" />
                                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
                            </svg>
                        </button>
                    </label>
                    <button type="submit" className="mt-5 w-2/5 self-center bg-[#2998db] text-white rounded-full text-[18px] py-1.5 cursor-pointer font-medium shadow-sm transition-colors hover:bg-[#1877c9]">Đăng nhập</button>
                </form>
                <div className="flex w-full justify-between mt-6 text-[15px]">
                    <a href="#" className="hover:underline">Đăng ký tài khoản</a>
                    <a href="#" className="hover:underline">Quên mật khẩu?</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
