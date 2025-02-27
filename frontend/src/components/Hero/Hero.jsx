import { useEffect, useState } from 'react';
import Vector from "../../assets/images/blue-pattern.png";

import BookThumbnailList from './BookThumbnailList';
import HeroImage from './HeroImage';
import HeroText from './HeroText';
import { useDispatch, useSelector } from 'react-redux';
import fetchLatestBooks from '../../features/book/actions/fetchLatestBooks';



export default function Hero() {

    const {latestBooks}=useSelector((state)=>state.books)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchLatestBooks());
      }, [dispatch]);
    
    const [imageid, setImageId] = useState('');
    const [author, setAuthor] = useState("Anonymous");
    const [title, setTitle] = useState("Effective Java");
    const [idBook, setBookID] = useState();
    const [description, setDescription] = useState("A comprehensive guide to Java programming.");
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        if (latestBooks.length > 0) {
            setImageId(latestBooks[0].cover);
            setTitle(latestBooks[0].title);
            setDescription(latestBooks[0].description);
            setBookID(latestBooks[0].id)
        }

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % latestBooks.length;
                setImageId(latestBooks[nextIndex].cover);
                setTitle(latestBooks[nextIndex].title);
                setDescription(latestBooks[nextIndex].description);
                return nextIndex;
            });
        }, 2500);
        return () => clearInterval(interval);
    }, [latestBooks]);

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

                            <BookThumbnailList bookslist={latestBooks} setImageId={setImageId}
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
