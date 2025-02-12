import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo_ALMS.png";
import {useEffect, useState } from "react";
import CategoriesService from "../services/CategoriesService";
function Footer() {
    const [categoriesList,setcategoriesList]=useState([])

  useEffect(()=>{
    CategoriesService.getCategories()
    .then((response)=>setcategoriesList(response.data))
  },[])
  return (
    // <footer className="bg-gray-900 text-gray-300 py-12">
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Services */}
          <aside>
          <div>
            <Link to={"/home"} className="font-bold text-2xl text-white sm:text-3xl flex gap-2">
              <img src={logo} className="w-10" alt="logo" />
              B-Library
            </Link>
          </div>
   
    <p className="my-5">
    The Advanced Library Management System is a web application that       <br />
    provides functionalities for both library users and librarians.    </p>
  </aside>
          <nav>
            <h6 className="text-lg font-semibold text-white mb-4">Services</h6>
            <ul className="space-y-3">
              
              <li><a className="link link-hover  cursor-pointer text-gray-400 hover:text-white transition duration-200">Home</a></li>
              <li><a className="link link-hover  cursor-pointer text-gray-400 hover:text-white transition duration-200">Books</a></li>
              <li><a className="link link-hover  cursor-pointer text-gray-400 hover:text-white transition duration-200">Contact</a></li>
              <li><a className="link link-hover  cursor-pointer text-gray-400 hover:text-white transition duration-200">Profile</a></li>
            </ul>
          </nav>

          {/* Company */}
          <nav>
            <h6 className="text-lg font-semibold text-white mb-4">Categories</h6>
            <ul className="space-y-3">
              {categoriesList.map((e)=>(
              <li key={e.id}><Link className="link link-hover  cursor-pointer
               text-gray-400 hover:text-white transition duration-200">{e.name}</Link></li>

              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav>
            <h6 className="text-lg font-semibold text-white mb-4">Follow US
            </h6>
            <ul className="space-y-3">
              <li><a className="link link-hover  cursor-pointer text-gray-400 hover:text-white transition duration-200">Terms of use</a></li>
              <li><a className="link link-hover  cursor-pointer text-gray-400 hover:text-white transition duration-200">Privacy policy</a></li>
              <li><a className="link link-hover  cursor-pointer text-gray-400 hover:text-white transition duration-200">Cookie policy</a></li>
            </ul>
          </nav>

          {/* Newsletter */}
        
        </div>
        <div className="mt-12 text-center text-gray-400">
          <p>&copy; 2025 Reda Ganoutre & Mohamed Lafrouh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
