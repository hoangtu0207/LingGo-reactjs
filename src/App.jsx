import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Indexlogin from "./Indexlogin";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Flashcard from "./components/study/Flashcard";
import Profile from "./components/auth/Profile";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Forgotpassword from "./components/auth/Forgotpassword";
import Lienhe from "./Lienhe";
import Gioithieu from "./Gioithieu";
import Chonthe from "./components/study/Chonthe";
import Chondethi from "./components/exams/Chondethi";
import Lamde from "./components/exams/Lamde";



export default function App() {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <Router>
            <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-100 to-white">
                {/* Header */}
                <Header isLogin={isLogin} setIsLogin={setIsLogin} />

                {/* Router */}
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Indexlogin />} />
                        <Route path="/Home" element={<Home />} />
                        <Route path="/Indexlogin" element={<Indexlogin />} />
                        <Route path="/flashcard" element={<Flashcard />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
                        <Route path="/Register" element={<Register />} />
                        <Route path="/Forgotpassword" element={<Forgotpassword />} />
                        <Route path="/Lienhe" element={<Lienhe />} />
                        <Route path="/Gioithieu" element={<Gioithieu />} />
                        <Route path="/Chonthe" element={<Chonthe />} />
                        <Route path="/Chondethi" element={<Chondethi />} />
                        <Route path="/Lamde/:examId" element={<Lamde />} />
                    </Routes>
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </Router>
    );
}
