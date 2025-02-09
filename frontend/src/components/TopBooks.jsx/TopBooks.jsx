
import { booksList } from '../../constants/BooksConstant';
import { BookCard } from "../Book/BookCard";
export const TopBooks = () => {
  console.log(booksList)
  return (
    <div className="container">
      <div className="py-10">
        <h2 className='text-3xl font-semibold mb-6'>Top Book</h2>
        {booksList.map((book,index)=>(
          <BookCard key={index} book={book}/>
        ))}
    </div>
    </div>
  )
}
