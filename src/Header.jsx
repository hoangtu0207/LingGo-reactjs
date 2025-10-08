import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="flex items-center justify-between px-6 py-2 border-b bg-white">
            <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center bg-white">
                    <img src="../public/logoLingGo.png" alt="LingGo Logo" className="w-14 h-14 object-contain" />
                </div>
            </div>

            <nav className="flex items-center space-x-6">
                <Link to="/" className="hover:text-blue-600">Đề thi online</Link>
                <Link to="/flashcard" className="hover:text-blue-600">Flashcards</Link>
                <Link to="/profile" className="hover:text-blue-600">Trang cá nhân</Link>
            </nav>
        </header>
    )
}
