const BookCard = ({ book }) => {
  const { cover, title, categories } = book ||{};

  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
      {/* Image Section */}
      <div className="h-56 w-full relative">
        <img
          className="w-100 h-full mx-auto object-cover transition duration-300 ease-in-out transform hover:scale-110"
          src={cover}
          alt={`Cover of ${title}`}
        />
      </div>

      {/* Card Content Section */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 transition duration-300 ease-in-out hover:text-blue-600">
          {title}
        </h3>
        <p className="text-sm text-gray-600 opacity-{0.5}">Categorie:{categories}</p>

        <div className="mt-4 text-center">
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-800 transition duration-300">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
