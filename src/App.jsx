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
import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminExams from "./components/admin/AdminExams";
import AdminQuestions from "./components/admin/AdminQuestions";
import AdminFlashcards from "./components/admin/AdminFlashcards";
import AdminUsers from "./components/admin/AdminUsers";
import AdminResults from "./components/admin/AdminResults";
import AdminSettings from "./components/admin/AdminSettings";



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
                        <Route path="/flashcard/:topicId" element={<Flashcard />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
                        <Route path="/Register" element={<Register />} />
                        <Route path="/Forgotpassword" element={<Forgotpassword />} />
                        <Route path="/Lienhe" element={<Lienhe />} />
                        <Route path="/Gioithieu" element={<Gioithieu />} />
                        <Route path="/Chonthe" element={<Chonthe />} />
                        <Route path="/Chondethi" element={<Chondethi />} />
                        <Route path="/Lamde/:examId" element={<Lamde />} />
                        
                        {/* Admin Routes */}
                        <Route path="/admin/dashboard" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
                        <Route path="/admin/exams" element={<AdminLayout><AdminExams /></AdminLayout>} />
                        <Route path="/admin/questions" element={<AdminLayout><AdminQuestions /></AdminLayout>} />
                        <Route path="/admin/flashcards" element={<AdminLayout><AdminFlashcards /></AdminLayout>} />
                        <Route path="/admin/users" element={<AdminLayout><AdminUsers /></AdminLayout>} />
                        <Route path="/admin/results" element={<AdminLayout><AdminResults /></AdminLayout>} />
                        <Route path="/admin/settings" element={<AdminLayout><AdminSettings /></AdminLayout>} />
                    </Routes>
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </Router>
    );
}
