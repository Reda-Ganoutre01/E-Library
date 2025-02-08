// import React, { useEffect, useState } from 'react'
// import Book1 from "../../assets/images/books/book1.jpg";
// // import Book2 from "../../assets/images/BooksImgaes/b2.jpg";
// // import Book3 from "../../assets/images/BooksImgaes/b3.jpeg";
// import Vector from "../../assets/images/website/blue-pattern.png";

// import { booksList } from '../../constants/BooksConstant';
// export const Hero = () => {
//     const [books,setBooks]=useState([])
   
//     const [imageid, setImageId] = useState(Book1);
//     const [title, setTitle] = useState("Effective Java");
//     const [description, setDescription] = useState("A comprehensive guide to Java programming.");
//     useEffect(() => {
//         setBooks(booksList);
        
//         if (booksList.length > 0) {
//             setImageId(booksList[0].cover);
//             setTitle(booksList[0].title);
//             setDescription(booksList[0].description);
//         }
//     }, []);
//     console.log(books)
//     const bgImage={
//         backgroundImage:`url(${Vector})`,
//         backgroundPosition:"center",
//         backgroundRepeat:"no-repeat",
//         backgroundSize:"cover",
//         width:"100%",

//     }
//     return (
//         <>
//             <div className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center
//     items-center dark:bg-gray-950
//     dark:text-white duration-200
//     " style={bgImage}>
//                 <div className="container pb-8 sm:pb-0">
//                     <div className="grid grid-cols-1">
//                         {/* text content section */}
//                         <div className="flex flex-col justify-center gap-4 pt-12 
//                         sm:pt-0 text-center sm:text-left order-2 sm:order-1">
//                             <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
//                                 {title} <p className="bg-clip-text
//                     text-transparent bg-gradient-to-b from-primary 
//                     text-right text-sm to-secondary
//                     ">By Anonymous</p></h1>
//                             <p className='text-sm'>{description}
//                                </p>
//                             <div className="">
//                                 <button className='bg-gradient-to-r from-primary to-secondary
//                         text-white px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200'>Show More</button>
//                             </div>
//                         </div>
//                         <div className="min-h-[450px] flex justify-center 
//             items-center relative order-1 sm:order-2">
//                 {/* main image */}
//                             <div className="h-[300px] sm:h-[450px] 
//                 overflow-hidden flex justify-center items-center">
//                                 <img src={imageid} alt=""
//                                 className='w-[300px] h-[300px] sm:h[450px
//                                 sm:w-[450px] sm:scale-125 object-contain mx-auto
//                                 '
//                                 />
//                             </div>
//                                 {/* other image list */}
//                                 <div className="flex lg:flex-col lg:top-1/2 
//                                 lg:-translate-y-1/2 lg:py-2
//                                 justify-center gap-4 absolute -bottom-[40px]
//                                 lg:-right-1 bg-white rounded-full
//                                 ">
//                                     {books.map((e, index) => (
//     <img 
//         src={e.cover} 
//         key={index} 
//         className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200" 
//         alt={e.title} 
//         onClick={() => {
//             const newbook = books.find(book => book.id === e.id)|| books[0];
//             setImageId(newbook.cover);
//             setTitle(newbook.title);
//             setDescription(newbook.description);

//         }}
//     />
// ))}

//                                 </div>

//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
