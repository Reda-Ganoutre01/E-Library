import { useEffect, useState } from 'react';
import Vector from "../../assets/images/blue-pattern.png";

import bookService from '../../services/bookService';
import BookThumbnailList from './BookThumbnailList';
import HeroImage from './HeroImage';
import HeroText from './HeroText';



export default function Hero() {
    const [bookslist, setBookslist] = useState([]);
    const [imageid, setImageId] = useState('');
    const [author, setAuthor] = useState("Anonymous");
    const [title, setTitle] = useState("Effective Java");
    const [idBook, setBookID] = useState();
    const [description, setDescription] = useState("A comprehensive guide to Java programming.");
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        bookService.getLatestBooks()
            .then((response) =>
                setBookslist(response.data)
            )}, [])
    useEffect(() => {
        if (bookslist.length > 0) {
            setImageId(bookslist[0].cover);
            setTitle(bookslist[0].title);
            setDescription(bookslist[0].description);
            setBookID(bookslist[0].id)
        }

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % bookslist.length;
                setImageId(bookslist[nextIndex].cover);
                setTitle(bookslist[nextIndex].title);
                setDescription(bookslist[nextIndex].description);
                return nextIndex;
            });
        }, 2500);
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
                        {/* Text Cover */}
                        <HeroText title={title} author={author} description={description} idBook={idBook} />
                        <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2"
                            data-aos="fade-down-left"
                        >
                            {/* Cover section */}
                            <HeroImage imageid={imageid} title={title} idBook={idBook} />
                            {/* BookThumbnail */}

                            <BookThumbnailList bookslist={bookslist} setImageId={setImageId}
                                setTitle={setTitle} setDescription={setDescription} setBookID={setBookID}
                            />
                            {/*  */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
