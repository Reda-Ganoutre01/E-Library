import {Link} from "react-router-dom";
import { FaEye } from "react-icons/fa";

export default function Book({ book }) {
    return (
        <div className="card w-full overflow-hidden shadow-xl bg-base-100 p-3 border-[0.6px] border-[#ccc]">
            <figure className="w-full overflow-hidden rounded-lg">
                <div className="w-full h-[380px] relative">
                    <img src={`/storage/${book.cover}`} alt="Book Cover" className="w-full h-full object-cover rounded-lg "/>
                </div>
            </figure>
            <div className="p-2 flex flex-col gap-2">
                <div className="card-title  text-xl leading-tight">
                    <h1 className="font-[poppins] font-bold">{book.title}</h1>
                </div>
                <h2 className="font-[poppins] font-bold">{book.author}</h2>
                <div className="card-actions flex flex-row">
                    <Link className="btn btn-sm btn-success text-white font-bold" to={`/books/${book.id}`}>
                        <FaEye className="size-6" />
                        <span className="text-md font-black">Show Details</span>
                    </Link>
                    
                </div>
                <h2 className="font-[poppins] font-bold badge badge-success text-white">{book.category}</h2>
            </div>
        </div>
    );
}