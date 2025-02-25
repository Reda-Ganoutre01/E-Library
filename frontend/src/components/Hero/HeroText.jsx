import { Link } from "react-router-dom";

export default function HeroText({ title, author, description, idBook }) {
    return (
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
                to={`/books/bookdetails/${idBook}`}
                className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
            >
                Show Details
            </Link>
        </div>
    </div>
    );
}
