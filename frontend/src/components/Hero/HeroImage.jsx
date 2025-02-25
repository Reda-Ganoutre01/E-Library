import { Link } from "react-router-dom";
import { getImgUrl } from "../../utils/getImgUrl";

export default function HeroImage({ imageid, title ,idBook}) {
    return (
        <>
          <Link
                to={`/books/bookdetails/${idBook}`}>
                     <div className="h-[300px] sm:h-[450px]  flex justify-center items-center">
        <img

            src={`${getImgUrl(imageid)}`}
            alt={title}
            className="w-[200px] h-[200px] sm:h-[350px] sm:w-[350px] sm:scale-125 object-contain mx-auto"
        />
    </div>
                </Link>

        </>
       
    );
}
