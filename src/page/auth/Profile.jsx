import React, { useState } from 'react';

const Profile = () => {
    const [profileImage, setProfileImage] = useState('/avatar.png');
    const [formData, setFormData] = useState({
        username: 'hoangtu0207',
        fullName: 'Hoang Tu',
        email: 'hoanganhtu147@gmail.com',
        phone: '0123456789'
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thông tin đã được cập nhật!');
    };

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Thông tin cá nhân</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex flex-col items-center space-y-4">
                        <div className="relative">
                            <img
                                src={profileImage}
                                alt="Profile"
                                className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
                            />
                            <label
                                htmlFor="profile-image"
                                className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-2 cursor-pointer hover:bg-blue-600 transition-colors"
                            >
                                ✏️
                            </label>
                            <input
                                type="file"
                                id="profile-image"
                                className="hidden"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </div>
                    </div>

                    {/* Form thông tin */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Tài khoản
                            </label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                readOnly
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Họ và tên
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Số điện thoại
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Nút lưu thay đổi */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                        >
                            Cập nhật
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;
