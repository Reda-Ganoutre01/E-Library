// import { lazy } from "react"

import image from "../styles/BooksImgaes/b1.jpg";
import "../styles/Header.css"
// const image=lazy(()=>import('../styles/BooksImgaes/b1.jpg'));
const Header = () => {
  return (
    <div className="header">
      <div className="header-text">
        <p id="news">News!</p>
        <p id="title">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit voluptatem 
            dignissimos error earum corrupti eum at obcaecati nam eaque? 
            Quos, voluptates? Voluptas natus repudiandae assumenda hic nobis, excepturi minima voluptates.
        </p>
        <center>
            <button id="header-btn">Show More</button>
        </center>
      </div>
      <div className="header-image">
        <img src={image} alt="image" id="logo" />
      </div>
    </div>
  )
}

export default Header
