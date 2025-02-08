import { useEffect, useState } from 'react';
import Book1 from "../../assets/images/books/book1.jpg";
import Vector from "../../assets/images/website/blue-pattern.png";
import { booksList } from '../../constants/BooksConstant';

export const Hero = () => {
    const [bookslist, setBookslist] = useState(booksList);
    const [imageid, setImageId] = useState(booksList[0]?.cover || Book1);
    const [title, setTitle] = useState(booksList[0]?.title || "Effective Java");
    const [description, setDescription] = useState(booksList[0]?.description || "A comprehensive guide to Java programming.");

    useEffect(() => {
        if (booksList.length > 0) {
            setImageId(booksList[0].cover);
            setTitle(booksList[0].title);
            setDescription(booksList[0].description);
        }
        setTimeout(() => {
            
        }, 2000);
    }, []);

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
                style={bgImage}
            >
                <div className="container pb-8 sm:pb-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        {/* Text content section */}
                        <div
                            data-aos-once="true"
                            className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
                        >
                            <h1
                                data-aos="zoom-out"
                                data-aos-duration="500"
                                data-aos-once="true"
                                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                            >
                                {title}
                                <p className="bg-clip-text text-transparent bg-gradient-to-b from-primary text-right text-sm to-secondary">
                                    by Anonymous
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
                                <button
                                    onClick={() => {}}
                                    className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                                >
                                    Show More
                                </button>
                            </div>
                        </div>
                        {/* Image section */}
                        <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
                            <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                                <img
        
                                    src={imageid}
                                    alt={title}
                                    className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                                />
                            </div>
                            <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg-white rounded-full">
                                {bookslist.map((e, index) => (
                                    <img
                                        src={e.cover}
                                        key={index}
                                        className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200"
                                        alt={e.title}
                                        onClick={() => {
                                            setImageId(e.cover);
                                            setTitle(e.title);
                                            setDescription(e.description);
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
