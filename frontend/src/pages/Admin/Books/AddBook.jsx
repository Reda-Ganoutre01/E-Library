import { useEffect, useState } from "react";
import Modal from "../../../components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import fetchCategories from "../../../features/category/actions/fetchCategories";
import addBook from "../../../features/book/actions/addBook";

export default function AddBook({ showModal, setShowModal }) {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(fetchCategories());
}, [dispatch]);

   const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbn: '',
    category: '',
    cover: null,
    copies: 0,
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      cover: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(addBook(formData));
    setShowModal(false)
  };

  return (
    <>
      {/* Modal */}
      {showModal && (
        <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
          <div className="p-3">
            <h2 className="text-lg font-semibold mb-3">Add New Book</h2>

            <label className="block mb-1 text-gray-700">Title:</label>
            <input
              type="text"
              className="w-full p-2 text-sm border rounded-lg mb-3"
              value={formData.title}
              onChange={handleChange}
              name="title"
            />

            <label className="block mb-1 text-gray-700">Author:</label>
            <input
              type="text"
              className="w-full p-2 text-sm border rounded-lg mb-3"
              value={formData.author}
              onChange={handleChange}
              name="author"
            />

            <label className="block mb-1 text-gray-700">ISBN:</label>
            <input
              type="text"
              className="w-full p-2 text-sm border rounded-lg mb-3"
              value={formData.isbn}
              onChange={handleChange}
              name="isbn"
            />

            <label className="block mb-1 text-gray-700">Category:</label>
            <select
              className="w-full p-2 text-sm border rounded-lg mb-3"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="" disabled>Select a Category</option>

              {categories?.content.map((e)=><option key={e.id} value={e.id}>{e.name}</option>)}
            
            </select>

            <label className="block mb-1 text-gray-700">Cover Image:</label>
            <input
              type="file"
              className="w-full p-2 text-sm border rounded-lg mb-3"
              onChange={handleFileChange}
              name="cover"
            />

            <label className="block mb-1 text-gray-700">Number of Copies:</label>
            <input
              type="number"
              className="w-full p-2 text-sm border rounded-lg mb-3"
              value={formData.copies}
              onChange={handleChange}
              name="copies"
            />

            <label className="block mb-1 text-gray-700">Description:</label>
            <textarea
              className="w-full p-2 text-sm border rounded-lg mb-3"
              value={formData.description}
              onChange={handleChange}
              name="description"
            ></textarea>

            <div className="flex justify-end mt-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-300 mr-2 text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 text-sm"
              >
                Save
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
