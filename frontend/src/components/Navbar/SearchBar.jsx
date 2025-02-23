import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({handleSearch,search,setSearch}) {
  return (
    <div className="hidden md:flex flex-grow mx-4 lg:mx-20">
    <form onSubmit={handleSearch} className="relative flex items-center w-full max-w-md border border-gray-300 rounded-lg overflow-hidden shadow-sm">
      <SearchIcon className="absolute left-3 text-gray-500" />
      <input
        type="text"
        value={search}
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-3 py-2 pl-10 text-sm outline-none focus:ring-2 focus:ring-primary transition duration-200 rounded-lg"
      />
    </form>
  </div>
  );
}
