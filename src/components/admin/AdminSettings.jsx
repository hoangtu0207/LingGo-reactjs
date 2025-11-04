import { useState } from "react";

export default function AdminSettings() {
    const [settings, setSettings] = useState({
        siteName: "LingGo",
        siteDescription: "Nền tảng học tiếng Anh trực tuyến",
        adminEmail: "admin@linggo.com",
        maxExamTime: 60,
        minPassScore: 60,
        allowRegistration: true,
        maintenanceMode: false,
    });

    const [adminAccount, setAdminAccount] = useState({
        username: "admin",
        email: "admin@linggo.com",
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const handleSettingsChange = (field, value) => {
        setSettings({ ...settings, [field]: value });
    };

    const handleSaveSettings = () => {
        alert("Cài đặt hệ thống đã được lưu!");
    };

    const handleSaveAdminAccount = () => {
        if (adminAccount.newPassword !== adminAccount.confirmPassword) {
            alert("Mật khẩu mới không khớp!");
            return;
        }
        alert("Thông tin tài khoản admin đã được cập nhật!");
        setAdminAccount({
            ...adminAccount,
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        });
    };

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Cấu hình Hệ thống</h2>

            {/* System Settings */}
            <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold mb-4">Cài đặt Hệ thống</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Tên trang web
                        </label>
                        <input
                            type="text"
                            value={settings.siteName}
                            onChange={(e) => handleSettingsChange("siteName", e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Mô tả trang web
                        </label>
                        <textarea
                            value={settings.siteDescription}
                            onChange={(e) => handleSettingsChange("siteDescription", e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            rows="2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email quản trị
                        </label>
                        <input
                            type="email"
                            value={settings.adminEmail}
                            onChange={(e) => handleSettingsChange("adminEmail", e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Thời gian làm bài tối đa (phút)
                            </label>
                            <input
                                type="number"
                                value={settings.maxExamTime}
                                onChange={(e) => handleSettingsChange("maxExamTime", parseInt(e.target.value))}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Điểm đạt tối thiểu (%)
                            </label>
                            <input
                                type="number"
                                value={settings.minPassScore}
                                onChange={(e) => handleSettingsChange("minPassScore", parseInt(e.target.value))}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={settings.allowRegistration}
                                onChange={(e) => handleSettingsChange("allowRegistration", e.target.checked)}
                                className="mr-2"
                            />
                            <span className="text-sm text-gray-700">Cho phép đăng ký tài khoản mới</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={settings.maintenanceMode}
                                onChange={(e) => handleSettingsChange("maintenanceMode", e.target.checked)}
                                className="mr-2"
                            />
                            <span className="text-sm text-gray-700">Chế độ bảo trì</span>
                        </label>
                    </div>
                    <button
                        onClick={handleSaveSettings}
                        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                    >
                        Lưu cài đặt
                    </button>
                </div>
            </div>

            {/* Admin Account */}
            <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold mb-4">Tài khoản Quản trị</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Tên đăng nhập
                        </label>
                        <input
                            type="text"
                            value={adminAccount.username}
                            onChange={(e) => setAdminAccount({ ...adminAccount, username: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            value={adminAccount.email}
                            onChange={(e) => setAdminAccount({ ...adminAccount, email: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Mật khẩu hiện tại
                        </label>
                        <input
                            type="password"
                            value={adminAccount.currentPassword}
                            onChange={(e) => setAdminAccount({ ...adminAccount, currentPassword: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Mật khẩu mới
                        </label>
                        <input
                            type="password"
                            value={adminAccount.newPassword}
                            onChange={(e) => setAdminAccount({ ...adminAccount, newPassword: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Xác nhận mật khẩu mới
                        </label>
                        <input
                            type="password"
                            value={adminAccount.confirmPassword}
                            onChange={(e) => setAdminAccount({ ...adminAccount, confirmPassword: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <button
                        onClick={handleSaveAdminAccount}
                        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                    >
                        Cập nhật tài khoản
                    </button>
                </div>
            </div>
        </div>
    );
}

