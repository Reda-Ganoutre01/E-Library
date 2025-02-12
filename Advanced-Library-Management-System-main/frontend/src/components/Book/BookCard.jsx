import { getImgUrl } from '../../utils/getImgUrl';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const BookCard = ({ book }) => {
  return (
    <div data-aos="zoom-in-up"
    className='rounded-lg shadow-lg p-4
    w-[200px]
    bg-white hover:shadow-xl transition-all duration-300'
    // className="rounded-lg shadow-lg p-4 bg-white hover:shadow-xl transition-all duration-300"
    >
      {/* Book Image */}
      <div className="w-full h-60 flex justify-center items-center rounded-lg overflow-hidden">
        <Link to={`/books/${book.id}`}>
          <img
            src={getImgUrl(book?.cover)}
            alt={book?.title}
            className="w-[200px] h-[200px] object-contain cursor-pointer"
          />
        </Link>
      </div>

      {/* Book Title */}
      <div className="mt-4 text-start">
        <Link to={`/books/${book.id}`}>
          <h3 className="text-sm font-semibold text-gray-800 hover:text-blue-600 transition duration-200">
            {book?.title.length>20?  `${book.title.slice(0,20)}...`:book.title}
          </h3>
        </Link>

        {/* Author */}
        <p className="text-xs text-center text-gray-600 mt-1">
          by <span className="font-medium underline">{book?.author.length>10 ? `${book.author.slice(0,10)}...`:book.author}</span>
        </p>

        {/* Button to Show Details */}
        <Link to={`/books/${book.id}`}>
          <button 
          
          // className='bg-primary
          // w-[150px]
          // mt-4
          // text-white
          // rounded-full text-xs
          // '
          className="mt-4 w-[150px] py-2 px-4 bg-blue-600 text-white rounded-full text-xs hover:bg-blue-700 transition-all
           duration-200 flex justify-center items-center gap-2
            hover:scale-105 duration-200
           "
           
           >
            <ArrowForwardIosIcon fontSize="small" />
            <span>Show Details</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
