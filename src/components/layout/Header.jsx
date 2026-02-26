import { Link, useNavigate } from "react-router-dom";

export default function Header({ isLogin, setIsLogin, currentUser, setCurrentUser }) {
    const navigate = useNavigate();
    return (
        <header className="flex items-center justify-between px-6 py-3 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">

            <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center bg-white">
                    <Link to="/Home">
                        <img src="../public/logoLingGo.png" alt="LingGo Logo" className="w-14 h-14 object-contain" />
                    </Link>
                </div>
            </div>

            <nav className="flex items-center space-x-6">
                <Link to="/Chondethi" className="hover:text-blue-600">Đề thi online</Link>
                <Link to="/Chonthe" className="hover:text-blue-600">Flashcards</Link>
                {isLogin ? (
                    <>
                        <Link to="/profile" className="hover:text-blue-600">Trang cá nhân</Link>
                        {currentUser?.isAdmin && (
                            <Link to="/admin/dashboard" className="hover:text-blue-600">Quản trị</Link>
                        )}
                        <button
                            onClick={() => {
                                setIsLogin(false);
                                setCurrentUser(null);
                                navigate('/');
                            }}
                            className="hover:text-blue-600"
                        >
                            Đăng xuất
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="hover:text-blue-600">Đăng nhập</Link>
                        <Link to="/register" className="hover:text-blue-600">Đăng ký</Link>
                    </>
                )}
            </nav>
        </header>
    )
}
