import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import BooksList from "../../components/book/BooksList.jsx";
import PageNavigator from "../../components/navigation/PageNavigator.jsx";
import { useParams } from "react-router-dom";
import fetchBooksByCategory from "../../features/book/actions/fetchBooksByCategory.js";

export default function BookByCategories() {
    const { category } = useParams();
    const dispatch = useDispatch();
    const { BookByCategories, loadingBooksByCategory, errorBooksByCategory } = useSelector((state) => state.books);

    useEffect(() => {
        dispatch(fetchBooksByCategory({ category })); 
    }, [dispatch, category]);
    console.log("Books by Category:", BookByCategories);
    
    return (
        <div className="container mx-auto px-4 py-10">
            <PageNavigator title={`Books in ${category}`} path={-1} />
            {!loadingBooksByCategory && BookByCategories.length === 0 ? (
    <div className="flex justify-center items-center h-64">
        <span className="text-xl text-gray-600">No books found in this category.</span>
    </div>
) : (
    <BooksList books={BookByCategories} />
)}
        </div>
    );
}
