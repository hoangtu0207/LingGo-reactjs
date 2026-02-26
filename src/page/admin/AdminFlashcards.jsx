import { useState, useEffect } from "react";
import { flashcardData } from "../../data/flashcards";
import {
	getAllFlashcardTopics,
	addFlashcardTopic,
	updateFlashcardTopic,
	deleteFlashcardTopic,
	addCardToTopic,
	updateCardInTopic,
	deleteCardFromTopic,
} from "../../utils/flashcardStorage";

export default function AdminFlashcards() {
	const [topics, setTopics] = useState([]);
	const [showTopicModal, setShowTopicModal] = useState(false);
	const [showCardModal, setShowCardModal] = useState(false);
	const [editingTopic, setEditingTopic] = useState(null);
	const [editingCard, setEditingCard] = useState(null);
	const [selectedTopicId, setSelectedTopicId] = useState(null);
	const [topicFormData, setTopicFormData] = useState({
		title: "",
		description: "",
	});
	const [cardFormData, setCardFormData] = useState({
		word: "",
		pronunciation: "",
		partOfSpeech: "noun",
		definition: "",
		example: "",
	});

	// Load data từ localStorage khi component mount
	useEffect(() => {
		const loadedTopics = getAllFlashcardTopics(flashcardData);
		setTopics(loadedTopics);
		// Initialize localStorage với data mặc định nếu chưa có
		if (!localStorage.getItem("linggo_flashcards")) {
			localStorage.setItem(
				"linggo_flashcards",
				JSON.stringify(flashcardData),
			);
		}
	}, []);

	const selectedTopic = topics.find((t) => t.id === selectedTopicId);

	// Topic CRUD
	const handleAddTopic = () => {
		setEditingTopic(null);
		setTopicFormData({ title: "", description: "" });
		setShowTopicModal(true);
	};

	const handleEditTopic = (topic) => {
		setEditingTopic(topic);
		setTopicFormData({
			title: topic.title,
			description: topic.description,
		});
		setShowTopicModal(true);
	};

	const handleSaveTopic = () => {
		if (editingTopic) {
			const updatedTopics = updateFlashcardTopic(
				editingTopic.id,
				{ ...editingTopic, ...topicFormData },
				flashcardData,
			);
			setTopics(updatedTopics);
		} else {
			const updatedTopics = addFlashcardTopic(
				{ ...topicFormData, cards: [] },
				flashcardData,
			);
			setTopics(updatedTopics);
		}
		setShowTopicModal(false);
		setEditingTopic(null);
	};

	const handleDeleteTopic = (topicId) => {
		if (
			window.confirm(
				"Bạn có chắc chắn muốn xóa chủ đề này? Tất cả các thẻ trong chủ đề sẽ bị xóa.",
			)
		) {
			const updatedTopics = deleteFlashcardTopic(topicId, flashcardData);
			setTopics(updatedTopics);
			if (selectedTopicId === topicId) {
				setSelectedTopicId(null);
			}
		}
	};

	// Card CRUD
	const handleAddCard = () => {
		if (!selectedTopicId) {
			alert("Vui lòng chọn chủ đề trước!");
			return;
		}
		setEditingCard(null);
		setCardFormData({
			word: "",
			pronunciation: "",
			partOfSpeech: "noun",
			definition: "",
			example: "",
		});
		setShowCardModal(true);
	};

	const handleEditCard = (card) => {
		setEditingCard(card);
		setCardFormData({
			word: card.word,
			pronunciation: card.pronunciation,
			partOfSpeech: card.partOfSpeech,
			definition: card.definition,
			example: card.example,
		});
		setShowCardModal(true);
	};

	const handleSaveCard = () => {
		if (!selectedTopicId) return;

		if (editingCard) {
			const updatedTopics = updateCardInTopic(
				selectedTopicId,
				editingCard.id,
				cardFormData,
				flashcardData,
			);
			setTopics(updatedTopics);
		} else {
			const updatedTopics = addCardToTopic(
				selectedTopicId,
				cardFormData,
				flashcardData,
			);
			setTopics(updatedTopics);
		}
		setShowCardModal(false);
		setEditingCard(null);
	};

	const handleDeleteCard = (cardId) => {
		if (!selectedTopicId) return;
		if (window.confirm("Bạn có chắc chắn muốn xóa thẻ này?")) {
			const updatedTopics = deleteCardFromTopic(
				selectedTopicId,
				cardId,
				flashcardData,
			);
			setTopics(updatedTopics);
		}
	};

	return (
		<div className="space-y-6">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-semibold">Quản lý Flashcards</h2>
				<button
					onClick={handleAddTopic}
					className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
				>
					+ Thêm chủ đề
				</button>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				{/* Topics List */}
				<div className="lg:col-span-1">
					<div className="bg-white rounded-lg shadow p-4">
						<h3 className="text-lg font-semibold mb-4">
							Danh sách chủ đề
						</h3>
						<div className="space-y-2 max-h-96 overflow-y-auto">
							{topics.map((topic) => (
								<div
									key={topic.id}
									className={`p-3 rounded cursor-pointer border-2 transition ${
										selectedTopicId === topic.id
											? "border-blue-500 bg-blue-50"
											: "border-gray-200 hover:border-blue-300"
									}`}
									onClick={() => setSelectedTopicId(topic.id)}
								>
									<div className="font-semibold">
										{topic.title}
									</div>
									<div className="text-sm text-gray-600">
										{topic.description}
									</div>
									<div className="text-xs text-gray-500 mt-1">
										{topic.cards?.length || 0} thẻ
									</div>
									<div className="flex gap-2 mt-2">
										<button
											onClick={(e) => {
												e.stopPropagation();
												handleEditTopic(topic);
											}}
											className="text-blue-600 hover:text-blue-800 text-sm"
										>
											Sửa
										</button>
										<button
											onClick={(e) => {
												e.stopPropagation();
												handleDeleteTopic(topic.id);
											}}
											className="text-red-600 hover:text-red-800 text-sm"
										>
											Xóa
										</button>
									</div>
								</div>
							))}
							{topics.length === 0 && (
								<div className="text-center text-gray-500 py-8">
									Chưa có chủ đề nào
								</div>
							)}
						</div>
					</div>
				</div>

				{/* Cards List */}
				<div className="lg:col-span-2">
					{selectedTopicId ? (
						<div className="bg-white rounded-lg shadow p-4">
							<div className="flex justify-between items-center mb-4">
								<div>
									<h3 className="text-lg font-semibold">
										{selectedTopic?.title}
									</h3>
									<p className="text-sm text-gray-600">
										{selectedTopic?.description}
									</p>
								</div>
								<button
									onClick={handleAddCard}
									className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
								>
									+ Thêm thẻ
								</button>
							</div>

							<div className="overflow-x-auto">
								<table className="min-w-full divide-y divide-gray-200">
									<thead className="bg-gray-50">
										<tr>
											<th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
												ID
											</th>
											<th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
												Từ vựng
											</th>
											<th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
												Phát âm
											</th>
											<th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
												Loại từ
											</th>
											<th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
												Định nghĩa
											</th>
											<th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
												Thao tác
											</th>
										</tr>
									</thead>
									<tbody className="bg-white divide-y divide-gray-200">
										{selectedTopic?.cards?.map((card) => (
											<tr key={card.id}>
												<td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
													{card.id}
												</td>
												<td className="px-4 py-3 text-sm font-medium text-gray-900">
													{card.word}
												</td>
												<td className="px-4 py-3 text-sm text-gray-600">
													{card.pronunciation}
												</td>
												<td className="px-4 py-3 text-sm text-gray-600">
													{card.partOfSpeech}
												</td>
												<td className="px-4 py-3 text-sm text-gray-600 max-w-xs truncate">
													{card.definition}
												</td>
												<td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
													<button
														onClick={() =>
															handleEditCard(card)
														}
														className="text-blue-600 hover:text-blue-900 mr-3"
													>
														Sửa
													</button>
													<button
														onClick={() =>
															handleDeleteCard(
																card.id,
															)
														}
														className="text-red-600 hover:text-red-900"
													>
														Xóa
													</button>
												</td>
											</tr>
										))}
										{(!selectedTopic?.cards ||
											selectedTopic.cards.length ===
												0) && (
											<tr>
												<td
													colSpan="6"
													className="px-4 py-8 text-center text-gray-500"
												>
													Chưa có thẻ nào trong chủ đề
													này
												</td>
											</tr>
										)}
									</tbody>
								</table>
							</div>
						</div>
					) : (
						<div className="bg-white rounded-lg shadow p-8 text-center">
							<p className="text-gray-500">
								Vui lòng chọn một chủ đề để quản lý thẻ
							</p>
						</div>
					)}
				</div>
			</div>

			{/* Topic Modal */}
			{showTopicModal && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-white rounded-lg p-6 w-96">
						<h3 className="text-xl font-semibold mb-4">
							{editingTopic ? "Sửa chủ đề" : "Thêm chủ đề mới"}
						</h3>
						<div className="space-y-4">
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									Tiêu đề
								</label>
								<input
									type="text"
									value={topicFormData.title}
									onChange={(e) =>
										setTopicFormData({
											...topicFormData,
											title: e.target.value,
										})
									}
									className="w-full px-3 py-2 border border-gray-300 rounded-md"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									Mô tả
								</label>
								<textarea
									value={topicFormData.description}
									onChange={(e) =>
										setTopicFormData({
											...topicFormData,
											description: e.target.value,
										})
									}
									className="w-full px-3 py-2 border border-gray-300 rounded-md"
									rows="3"
								/>
							</div>
						</div>
						<div className="flex justify-end gap-3 mt-6">
							<button
								onClick={() => {
									setShowTopicModal(false);
									setEditingTopic(null);
								}}
								className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
							>
								Hủy
							</button>
							<button
								onClick={handleSaveTopic}
								className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
							>
								Lưu
							</button>
						</div>
					</div>
				</div>
			)}

			{/* Card Modal */}
			{showCardModal && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
						<h3 className="text-xl font-semibold mb-4">
							{editingCard ? "Sửa thẻ" : "Thêm thẻ mới"}
						</h3>
						<div className="space-y-4">
							<div className="grid grid-cols-2 gap-4">
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">
										Từ vựng *
									</label>
									<input
										type="text"
										value={cardFormData.word}
										onChange={(e) =>
											setCardFormData({
												...cardFormData,
												word: e.target.value,
											})
										}
										className="w-full px-3 py-2 border border-gray-300 rounded-md"
										required
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">
										Phát âm
									</label>
									<input
										type="text"
										value={cardFormData.pronunciation}
										onChange={(e) =>
											setCardFormData({
												...cardFormData,
												pronunciation: e.target.value,
											})
										}
										className="w-full px-3 py-2 border border-gray-300 rounded-md"
										placeholder="/example/"
									/>
								</div>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									Loại từ
								</label>
								<select
									value={cardFormData.partOfSpeech}
									onChange={(e) =>
										setCardFormData({
											...cardFormData,
											partOfSpeech: e.target.value,
										})
									}
									className="w-full px-3 py-2 border border-gray-300 rounded-md"
								>
									<option value="noun">Danh từ (noun)</option>
									<option value="verb">Động từ (verb)</option>
									<option value="adjective">
										Tính từ (adjective)
									</option>
									<option value="adverb">
										Trạng từ (adverb)
									</option>
									<option value="preposition">
										Giới từ (preposition)
									</option>
									<option value="conjunction">
										Liên từ (conjunction)
									</option>
									<option value="pronoun">
										Đại từ (pronoun)
									</option>
								</select>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									Định nghĩa *
								</label>
								<input
									type="text"
									value={cardFormData.definition}
									onChange={(e) =>
										setCardFormData({
											...cardFormData,
											definition: e.target.value,
										})
									}
									className="w-full px-3 py-2 border border-gray-300 rounded-md"
									required
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									Ví dụ
								</label>
								<textarea
									value={cardFormData.example}
									onChange={(e) =>
										setCardFormData({
											...cardFormData,
											example: e.target.value,
										})
									}
									className="w-full px-3 py-2 border border-gray-300 rounded-md"
									rows="2"
									placeholder="Ví dụ câu sử dụng từ vựng này"
								/>
							</div>
						</div>
						<div className="flex justify-end gap-3 mt-6">
							<button
								onClick={() => {
									setShowCardModal(false);
									setEditingCard(null);
								}}
								className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
							>
								Hủy
							</button>
							<button
								onClick={handleSaveCard}
								className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
							>
								Lưu
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
