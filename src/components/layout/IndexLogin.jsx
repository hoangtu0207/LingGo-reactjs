export default function Home() {
	const courses = [
		"Khóa học Speaking and Writing",
		"Khóa học IELTS",
		"Khóa học TOEIC",
		"Khóa học Ngữ pháp",
		"Khóa học Từ vựng",
		"Khóa học Writing",
	];
	return (
		<div>
			<section className="bg-blue-200 text-center py-10 px-4">
				<h1 className="text-2xl md:text-3xl font-bold mb-2">
					Chào mừng bạn đến với LingGo
				</h1>
				<p className="text-gray-700 max-w-2xl mx-auto">
					Chúc bạn có trải nghiệm học tập hiệu quả với LingGo
					<br />
					Hãy bắt đầu học tập ngay hôm nay
				</p>
			</section>

			<main className="flex-1 px-6 py-10">
				<h2 className="text-xl font-semibold text-center mb-8">
					Khóa học Online nổi bật
				</h2>

				<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
					{courses.map((course, id) => (
						<a
							key={id}
							href="#"
							className="bg-gray-200 h-40 flex items-center justify-center rounded shadow p-4 hover:bg-blue-200 hover:text-white transition transform hover:-translate-y-1"
						>
							<span className="font-medium">{course}</span>
						</a>
					))}
				</div>
			</main>
		</div>
	);
}
