import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Flashcard from "./components/study/Flashcard";
import Profile from "./components/auth/Profile";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Lienhe from "./Lienhe";
import Gioithieu from "./Gioithieu";
import Chonthe from "./components/study/Chonthe";



export default function App() {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                {/* Header */}
                <Header isLogin={isLogin} setIsLogin={setIsLogin} />

                {/* Router */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/flashcard" element={<Flashcard />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/Lienhe" element={<Lienhe />} />
                    <Route path="/Gioithieu" element={<Gioithieu />} />
                    <Route path="/Chonthe" element={<Chonthe />} />

                </Routes>

                {/* Footer */}
                <Footer />
            </div>
        </Router>
    );
}
