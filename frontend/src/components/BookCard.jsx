function BookCard({ book }) {

  console.log('/C:/Users/reda/Documents/Learning IT/My Repo/ALMS/backend/src/main/resources/static/BooksImgaes' )
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="relative">
        <img
          src={`../C:/Users/reda/Documents/Learning IT/My Repo/ALMS/backend/src/main/resources/static/BooksImgaes/${book.cover}`} 
          alt={`Cover of ${book.title}`} 
          className="w-full h-auto object-cover"
        />
      </div>
      
      <div className="p-4">
        <div className="text-center">
          <h4 className="text-xl font-semibold text-gray-800">{book.title}</h4>
          {/* Conditionally render category and library */}
          <p className="text-gray-600">
            Category: {book.category ? book.category.name : 'N/A'}
          </p>
          <p className="text-gray-600">
            Library: {book.library ? book.library.name : 'N/A'}
          </p>
        </div>

        <div className="mt-4 text-center">
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
            Emprunter
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
