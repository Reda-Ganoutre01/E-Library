import { useEffect, useState } from 'react';
import Book1 from "../../assets/images/books/book1.jpg"
import Vector from "../../assets/images/website/blue-pattern.png";

import { getImgUrl } from '../../utils/getImgUrl';
import bookService from '../../services/bookService';
import { Link } from 'react-router-dom';



export default function Hero (){
    const [bookslist, setBookslist] = useState([]);
    const [imageid, setImageId] = useState(Book1);
    const [author, setAuthor] = useState("Anonymous");
    const [title, setTitle] = useState("Effective Java");
    const [idBook, setBookID] = useState();
    const [description, setDescription] = useState("A comprehensive guide to Java programming.");
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(()=>{
      bookService.getThreeNewBooks()
      .then((response)=>
        setBookslist(response.data)
        )
      
    },[])
    useEffect(() => {
        if (bookslist.length > 0) {
            setImageId(bookslist[0].cover);
            setTitle(bookslist[0].title);
            setDescription(bookslist[0].description);
            setBookID(bookslist[0].id)
        }



        // Set an interval to change the book every 3 seconds
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % bookslist.length;
                setImageId(bookslist[nextIndex].cover);
                setTitle(bookslist[nextIndex].title);
                setDescription(bookslist[nextIndex].description);
                return nextIndex;
            });
        }, 2500);

        // Clear the interval on component unmount
        return () => clearInterval(interval);
    }, [bookslist]);

    const bgImage = {
        backgroundImage: `url(${Vector})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
    };

    return (
        <>
            <div
                className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
                style={bgImage} data-aos="zoom-out-up"
            >
                <div className="container pb-8 sm:pb-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        {/* Text content section */}
                        <div
                            data-aos="fade-down-right"
                            className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
                        >
                            <h1
                                data-aos="zoom-out"
                                data-aos-duration="500"
                                data-aos-once="true"
                                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                            >
                                {title}
                                <p className="bg-clip-text text-transparent bg-gradient-to-b  from-primary text-right text-sm to-secondary">
                                    <span className='text-gray-950'> by </span>
                                    <span className='font-medium underline decoration-primary'>
                                        {author}
                                    </span>

                                </p>
                            </h1>
                            <p
                                data-aos="slide-up"
                                data-aos-duration="500"
                                data-aos-delay="100"
                                className="text-sm"
                            >
                                {description}
                            </p>
                            <div>
                                <Link
                                    to={`/books/${idBook}`}
                                    className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                                >
                                    Show Details
                                </Link>
                            </div>
                        </div>
                        {/* Image section */}
                        <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2"
                            data-aos="fade-down-left"
                        >
                            <div className="h-[300px] sm:h-[450px]  flex justify-center items-center">
                                <img

                                    src={`${getImgUrl(imageid)}`}
                                    alt={title}
                                    className="w-[200px] h-[200px] sm:h-[350px] sm:w-[350px] sm:scale-125 object-contain mx-auto"
                                />
                            </div>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
