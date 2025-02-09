import { FiShoppingCart } from 'react-icons/fi'
import { getImgUrl } from '../../utils/getImgUrl'
import { Link } from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const BookCard = ({book}) => {
  return (
    <div className=" rounded-lg transition-shadow duration-300">
  <div
    className="flex flex-col sm:flex-row sm:items-center sm:h-72  sm:justify-center gap-4"
  >
    <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
      <Link to={`/books/${book.id}`}>
        <img
          src={`${getImgUrl(book?.cover)}`}
          alt=""
          className="w-[200px] bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
          // className="w-[200px] h-[200px] sm:h-[350px] sm:w-[350px] sm:scale-125 object-contain mx-auto"

        />
      </Link>
    </div>

    <div>
      <Link to={`/books/${book.id}`}
        ><h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
         {book?.title}
        </h3></Link>
      <p className="text-gray-600 mb-5">{book?.description.length >80 ? `${book.description.slice(0,80)}...`:book.description}</p>
      <p className="font-medium mb-5">
      categories:<span className=" font-normal ml-2">{book?.categories[0]}</span>
      </p>
      <button className="bg-primary text-white py-2 px-4 rounded-full
      hover:scale-105 duration-200
      px-6 space-x-1 flex items-center gap-1 ">
        <ArrowForwardIosIcon className="" />
        <span>Show More</span>
      </button>
    </div>
  </div>
</div>
  )
}

