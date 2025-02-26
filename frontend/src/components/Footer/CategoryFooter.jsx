import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import fetchCategories from "../../features/category/actions/fetchCategories";

export const CategoryFooter = () => {

  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(
    (state) => state.categories
  );


  useEffect(() => {
    dispatch(fetchCategories());
}, [dispatch]);





  return (
    <nav>
    <h6 className="text-lg font-semibold text-white mb-4">Categorys</h6>
    <ul className="space-y-3">
      {categories?.content?.map((e) => (
        <li key={e.id}>
          <Link
            className="link link-hover cursor-pointer text-gray-400 hover:text-white transition duration-200"
            to={`/books/category=${e.name}`}
          >
            {e.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
  );
};
