import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import Flashcard from "./Flashcard";
import Profile from "./Profile";

export default function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Header />
                <Routes>
                    <Route path="/" element={<Body />} />
                    <Route path="/flashcard" element={<Flashcard />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}
