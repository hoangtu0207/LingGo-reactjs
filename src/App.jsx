import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Footer from "./Footer";
import Header from "./Header";
import Flashcard from "./Flashcard";
import Profile from "./Profile";
import Login from "./Login";
import Lienhe from "./Lienhe";
import Gioithieu from "./Gioithieu";



export default function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                {/* Header */}
                <Header />

                {/* Router */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login.index" element={<Login />} />
                    <Route path="/flashcard" element={<Flashcard />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/Lienhe" element={<Lienhe />} />
                    <Route path="/Gioithieu" element={<Gioithieu />} />

                </Routes>

                {/* Footer */}
                <Footer />
            </div>
        </Router>
    );
}
