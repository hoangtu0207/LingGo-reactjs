export default function Footer() {
    return (
        <footer className="bg-white border-t text-center py-4 mt-10">
            <p className="text-sm text-gray-500 mb-2">
                &copy; Bản quyền thuộc về{" "}
                <a href="mailto:hoanganhtu147@gmail.com" className="text-blue-500 hover:underline">
                    hoanganhtu147@gmail.com
                </a>
            </p>
            <p className="text-sm text-gray-500">
                <a href="Gioithieu" className="text-blue-500 hover:underline">Giới thiệu</a> -{" "}
                <a href="lienhe" className="text-blue-500 hover:underline">Liên hệ</a>
            </p>
        </footer>
    )
}
