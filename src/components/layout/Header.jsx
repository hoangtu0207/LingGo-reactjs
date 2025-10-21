import { Link } from "react-router-dom";

export default function Header({ isLogin, setIsLogin }) {
    return (
        <header className="flex items-center justify-between px-6 py-2  bg-white border-b">
            <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center bg-white">
                    <a href="/">
                        <img src="../public/logoLingGo.png" alt="LingGo Logo" className="w-14 h-14 object-contain" />
                    </a>
                </div>
            </div>

            <nav className="flex items-center space-x-6">
                <Link to="/" className="hover:text-blue-600">Đề thi online</Link>
                <Link to="/flashcard" className="hover:text-blue-600">Flashcards</Link>
                {isLogin ? (
                    <>
                        <Link to="/profile" className="hover:text-blue-600">Trang cá nhân</Link>
                        <button onClick={() => setIsLogin(false)} className="hover:text-blue-600">
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
