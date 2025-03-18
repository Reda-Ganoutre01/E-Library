import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import fetchLatestBooks from "../../features/book/actions/fetchLatestBooks.js";
import BookPreview from "./BookPreview.jsx";
import {Link} from "react-router-dom";
import Loader from "../loader/Loader"

export default function LatestBooksList() {
    const dispatch = useDispatch();
    const {latestBooks, loadingTopBooks} = useSelector(state => state.books);
    useEffect(() => {
        dispatch(fetchLatestBooks());
    }, []);
    return <section className={"flex flex-col items-center justify-center mb-12 rounded-md mt-12 bg-base-100 w-[65%] p-4 shadow-xl border-[0.5px] border-[#ccc]"}>
        <h1 className={'text-5xl font-[poppins] font-bold mt-4'}>Latest Books</h1>
        <section className={'flex flex-row items-center justify-center'}>
            {!loadingTopBooks ? latestBooks.map(book => <Link key={book.id} to={`/books/${book.id}`}>
                <BookPreview key={book.id} book={book} />
            </Link>) : <Loader/>}
        </section>
    </section>
}