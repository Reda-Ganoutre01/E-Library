import {IoMdAddCircle} from "react-icons/io";
import {Link} from "react-router-dom";

export default function BookDetails({ book }) {
    return <div className="card card-side bg-base-100 shadow-xl font-[poppins] border-[0.5px] border-[#ccc]">
        <figure className="w-1/4 flex-shrink-0">
            <img
                src={`/storage/${book.cover}`}
                alt={book.title}
                className="w-full h-full object-cover"
            />
        </figure>
        <div className="card-body flex-grow">
            <h2 className="card-title text-4xl">{book.title}</h2>
            <p className="text-justify font-medium font-[poppins]">
                {book.description}
            </p>

            <div className="card-actions justify-end">
                <p>
                    <span className={'badge badge-outline badge-primary'}>{book.category}</span> - <span className={'font-bold'}>{book.author}</span>
                </p>
                <Link to={`/borrow/${book.id}`} className="btn btn-success font-bold flex items-center"
                    id="btnborrow"
                >
                    <IoMdAddCircle className="size-6" />
                    Borrow
                </Link>
            </div>
        </div>
    </div>
}