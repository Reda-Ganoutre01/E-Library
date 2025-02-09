
import { booksList2 } from '../../constants/BooksConstant';
import { BookCard } from "../Book/BookCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';


export const TopBooks = () => {
  console.log(booksList2)
  return (
    <div className="container">
      <div className="py-10">
        <h2 className='text-3xl font-semibold mb-6'>Top Book</h2>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180:{
            slidesPerView: 3,
            spaceBetween: 50,
          }
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
       {
     booksList2.length>0 &&  booksList2.map((book,index)=>(
          <SwiperSlide  key={index}>
            <BookCard book={book}/>
            </SwiperSlide>

        
        ))}
      </Swiper>
        
    </div>
    </div>
  )
}
