import image from "../assets/images/BooksImgaes/b1.jpg";

const Header = () => {
  return (
    <div className="my-auto flex w-full h-80 p-10 justify-around bg-slate-300">
      <div className="flex-1 mx-40">
        <p className="text-3xl text-red-500 font-semibold " id="news">News!</p>
        <p className="text-2xl  text-gray-900 leading-relaxed" id="title">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit voluptatem
          dignissimos error earum corrupti eum at obcaecati nam eaque? 
          Quos, voluptates? Voluptas natus repudiandae assumenda hic nobis, excepturi minima voluptates.
        </p>
        <div className="text-center mt-4">
          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" id="header-btn">
            Show More
          </button>
        </div>
      </div>
      <div className="flex-1">
        <img src={image} alt="image" className="w-40 h-auto object-cover mx-80" id="logo" />
      </div>
    </div>
  );
};

export default Header;
