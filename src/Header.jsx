export default function Header() {
    return (
        <header class="flex items-center justify-between px-6 py-2 border-b bg-white">
            <div class="flex items-center space-x-2">
                <div class="flex items-center justify-center bg-white">
                    <img src="../public/logoLingGo.png" alt="LingGo Logo" class="w-14 h-14 object-contain" />
                </div>
            </div>

            <nav class="flex items-center space-x-6">
                <a href="Chọn đề thi" class="hover:text-blue-600">Đề thi online</a>
                <a href="Chọn Flashcards" class="hover:text-blue-600">Flashcards</a>
                <a href="Frofile" class="hover:text-blue-600">Trang cá nhân</a>
            </nav>
        </header>
    )
}
