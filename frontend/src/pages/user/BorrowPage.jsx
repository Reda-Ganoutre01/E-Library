import PageNavigator from "../../components/navigation/PageNavigator.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import fetchBook from "../../features/book/actions/fetchBook.js";
import {useParams} from "react-router-dom";
import BorrowForm from "../../components/form/borrow/BorrowForm.jsx";

export default function BorrowPage() {
    const dispatch = useDispatch();
    const {book} = useSelector((state) => state.books);
    const {id} = useParams();
    useEffect(() => {
        dispatch(fetchBook({id : id}));
    } , [dispatch])

    return <section className={'container flex flex-col px-12 mt-12'}>
        <PageNavigator title={`Borrow Book #${book.id}`} path={-1} />
        <BorrowForm book={book} />
    </section>
}