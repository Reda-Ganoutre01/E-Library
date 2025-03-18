import { Link } from "react-router-dom";

export default function BookPreview({ book }) {
  return (
    <div className="card w-85 hover:scale-80 transition-all">
      <figure className="px-6 pt-8">
        <img src={`/storage/${book.cover}`} alt="Shoes" className={"rounded-md"} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-center flex justify-center text-1xl">
            <span className={'font-[poppins] text-xl font-bold'}>{book.title}</span>
        </h2>
      </div>
    </div>
  );
}
