import Book from "./Book.jsx";

export default function BooksList({ books }) {
    const bookList = books?.content || books; // Handle both cases: books.content or books

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 items-stretch">
            {bookList?.map((item) => (
                <div key={item.id} className="flex justify-center">
                    <Book book={item} />
                </div>
            ))}
        </div>
    );
}