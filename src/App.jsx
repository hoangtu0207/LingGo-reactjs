import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/layout/IndexLogin";
import Indexlogin from "./components/layout/IndexUnlogin";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Flashcard from "./page/hocflashcards/Flashcard";
import Profile from "./page/auth/Profile";
import Login from "./page/auth/Dangnhap";
import Register from "./page/auth/Dangky";
import Forgotpassword from "./page/auth/Quenmk";
import Lienhe from "./Lienhe";
import Gioithieu from "./Gioithieu";
import Chonthe from "./page/hocflashcards/Chonthe";
import Chondethi from "./page/dethionline/Chondethi";
import Lamde from "./page/dethionline/Lamde";
import AdminLayout from "./page/admin/Sidebar";
import AdminDashboard from "./page/admin/Dashboard";
import AdminExams from "./page/admin/Qlydethi";
import AdminQuestions from "./page/admin/Qlycauhoi";
import AdminFlashcards from "./page/admin/Qlyflashcard";
import AdminUsers from "./page/admin/Qlynguoidung";

export default function App() {
	const [isLogin, setIsLogin] = useState(false);
	const [currentUser, setCurrentUser] = useState(null);

	return (
		<Router>
			<div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-100 to-white">
				{/* Header */}
				<Header
					isLogin={isLogin}
					setIsLogin={setIsLogin}
					currentUser={currentUser}
					setCurrentUser={setCurrentUser}
				/>

				{/* Router */}
				<main className="flex-grow">
					<Routes>
						<Route
							path="/"
							element={<Indexlogin />}
						/>
						<Route
							path="/Home"
							element={<Home />}
						/>
						<Route
							path="/flashcard/:topicId"
							element={<Flashcard />}
						/>
						<Route
							path="/profile"
							element={<Profile />}
						/>
						<Route
							path="/login"
							element={
								<Login
									setIsLogin={setIsLogin}
									setCurrentUser={setCurrentUser}
								/>
							}
						/>
						<Route
							path="/Register"
							element={<Register />}
						/>
						<Route
							path="/Forgotpassword"
							element={<Forgotpassword />}
						/>
						<Route
							path="/Lienhe"
							element={<Lienhe />}
						/>
						<Route
							path="/Gioithieu"
							element={<Gioithieu />}
						/>
						<Route
							path="/Chonthe"
							element={<Chonthe />}
						/>
						<Route
							path="/Chondethi"
							element={<Chondethi />}
						/>
						<Route
							path="/Lamde/:examId"
							element={<Lamde />}
						/>

						{/* Admin Routes */}
						<Route
							path="/admin/dashboard"
							element={
								<AdminLayout>
									<AdminDashboard />
								</AdminLayout>
							}
						/>
						<Route
							path="/admin/exams"
							element={
								<AdminLayout>
									<AdminExams />
								</AdminLayout>
							}
						/>
						<Route
							path="/admin/questions"
							element={
								<AdminLayout>
									<AdminQuestions />
								</AdminLayout>
							}
						/>
						<Route
							path="/admin/flashcards"
							element={
								<AdminLayout>
									<AdminFlashcards />
								</AdminLayout>
							}
						/>
						<Route
							path="/admin/users"
							element={
								<AdminLayout>
									<AdminUsers />
								</AdminLayout>
							}
						/>
					</Routes>
				</main>

				{/* Footer */}
				<Footer />
			</div>
		</Router>
	);
}
