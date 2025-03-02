import  {useEffect } from "react";
import CountUp from "react-countup";
import { FaBook, FaLayerGroup, FaUsers } from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import fetchBooks from "../../features/book/actions/fetchBooks";
import fetchCategories from "../../features/category/actions/fetchCategories";
import fetchUsers from "../../features/user/actions/fetchUsers";

const Main = () => {
  const dispatch = useDispatch();
  const { books,totalbooks } = useSelector((state) => state.books);
  const { categories,totalCategories } = useSelector((state) => state.categories);
  const { users, totalUsers } = useSelector((state) => state.users);

  useEffect(() => {
    if (!books.page || books.page === 0) {
      dispatch(fetchBooks({ page: 1, size: 3}));
    }
    if (!categories.page || categories.page === 0) {
      dispatch(fetchCategories());
    }
    if (!users.page || users.page === 0) {
      dispatch(fetchUsers({ page: 1, size: 3 }));
    }
  }, [dispatch, books.page, categories.page, users.page]);
  console.log(totalbooks)
  // const totalBooks = books?.page?.totalElements || 0;


  
  return (
    <div className="pt-6 px-6 bg-[#F8F9FC] min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-[#5a5c69] text-2xl font-semibold cursor-pointer">Dashboard</h1>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 pb-4">
        {/* Users */}

        <Link to={"/admin/users"}>
         <div className="h-[100px] flex items-center justify-between px-6 bg-white border-l-4 border-[#4E73DF] shadow-md rounded-lg cursor-pointer transform hover:scale-105 transition duration-300">
          <div>
            <h2 className="text-[#1cc88a] text-xs font-bold uppercase">Users</h2>
            <h1 className="text-xl font-bold text-[#5a5c69] mt-1">
            <CountUp start={0} end={totalUsers} delay={0}/>

            </h1>
          </div>
          <FaUsers className="text-[#4E73DF] text-3xl" />
        </div>
        </Link>
       

        {/* Books Monthly */}
        <Link to={"/admin/books"}>
         <div className="h-[100px] flex items-center justify-between px-6 bg-white border-l-4 border-[#4eaadf] shadow-md rounded-lg cursor-pointer transform hover:scale-105 transition duration-300">
          <div>
            <h2 className="text-[#1cc88a] text-xs font-bold uppercase">Books</h2>
            <h1 className="text-xl font-bold text-[#5a5c69] mt-1">
            <CountUp start={0} end={totalbooks} delay={0}/>

            </h1>
          </div>
          <MdOutlineLibraryBooks className="text-[#4E73DF] text-3xl" />
        </div>
        </Link>
       

        {/* Borrowed Records */}
        <Link to={"/admin/brrowrecord"}>

        <div className="h-[100px] flex items-center justify-between px-6 bg-white border-l-4 border-[#4edfcc] shadow-md rounded-lg cursor-pointer transform hover:scale-105 transition duration-300">
          <div>
            <h2 className="text-[#B589DF] text-xs font-bold uppercase">Borrowed Records</h2>
            <h1 className="text-xl font-bold text-[#5a5c69] mt-1">
            <CountUp start={0} end={10} delay={0}/>
            </h1>
          </div>
          <FaBook className="text-[#4E73DF] text-3xl" />
        </div>
        </Link>

        {/* Categories */}
        <Link to={"/admin/categorys"}>

        <div className="h-[100px] flex items-center justify-between px-6 bg-white border-l-4 border-[#4edf55] shadow-md rounded-lg cursor-pointer transform hover:scale-105 transition duration-300">
          <div>
            <h2 className="text-[#B589DF] text-xs font-bold uppercase">Categories</h2>
            <h1 className="text-xl font-bold text-[#5a5c69] mt-1">
                      <CountUp start={0} end={totalCategories}/>
                
                </h1>
          </div>
          <FaLayerGroup className="text-[#4E73DF] text-3xl" />
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Main;
