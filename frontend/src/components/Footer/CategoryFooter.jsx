import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryService from "../../services/CategoryService";

export const CategoryFooter = () => {
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    CategoryService.getAllCategories().then((res) =>
      setCategoriesList(res.data.content)
    );
  }, []);

  const isTwoColumns = categoriesList.length > 5;
  const splitIndex = Math.ceil(categoriesList.length / 2);
  const columns = isTwoColumns ? [categoriesList.slice(0, splitIndex), categoriesList.slice(splitIndex)] : [categoriesList];

  return (
    <nav>
      <h6 className="text-lg font-semibold text-white mb-4">Categories</h6>
      <div className={`grid ${isTwoColumns ? "grid-cols-2 gap-4" : "grid-cols-1"}`}>
        {columns.map((col, i) => (
          <ul key={i} className="space-y-3">
            {col.map((e) => (
              <li key={e.id}>
                <Link
                  to={`/books/categorie=${e.name}`}
                  className="link link-hover text-gray-400 hover:text-white transition duration-200"
                >
                  {e.name}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </nav>
  );
};
