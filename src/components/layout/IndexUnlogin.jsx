export default function Indexlogin() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">LUYỆN ĐỀ THI KHÔNG GIỚI HẠN</h1>

        <ul className="text-lg space-y-4 mb-12">
          <li>Kho đề thi phong phú: IELTS, TOEIC, HKS, ...</li>
          <li>Giao diện đơn giản, dễ thao tác, phù hợp cho việc học từ vựng.</li>
          <li>Nội dung đa dạng, từ cơ bản đến nâng cao.</li>
        </ul>

        <a
          href="/Register"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-lg font-medium hover:bg-blue-600 transition-colors"
        >
          Tham gia ngay!!!
        </a>
      </div>
    </div>
  );
}
