import Book from "./Book.jsx";

export default function BooksList({books}) {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 items-stretch">
        {books?.content?.map((item) => (
            <div key={item.id} className="flex justify-center">
                <Book book={item} />
            </div>
        ))}
    </div>
}