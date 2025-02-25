import { getImgUrl } from "../../utils/getImgUrl";

export default function BookThumbnailList({ bookslist, setImageId, setTitle, setDescription, setBookID }) {
    return (
        <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg-white rounded-full">
        {bookslist.map((e, index) => (
            <img
                src={`${getImgUrl(e.cover)}`}
                key={index}
                className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200"
                alt={e.title}
                onClick={() => {
                    setImageId(e.cover);
                    setTitle(e.title);
                    setDescription(e.description);
                    setBookID(e.id);
                }}
            />
        ))}
    </div>
    );
}
