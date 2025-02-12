import {useState} from 'react'
import {BrowserRouter, createBrowserRouter, Link, Outlet, Route, RouterProvider, Routes} from "react-router";
import {CategoryIndex} from "./pages/category/CategoryIndex.jsx";
import {CategoryAdd} from "./pages/category/CategoryAdd.jsx";
import {NavBar} from "./pages/NavBar.jsx";
import Loader from "./pages/Loader.jsx";
import useLoader from "./hooks/useLoader.js";
import {CategoryEdit} from "./pages/category/CategoryEdit.jsx";

function RootElement() {
    const {status} = useLoader()
    return (
        <>
            <NavBar></NavBar>
            {status && <Loader></Loader>}

            <div className="container">
                <Outlet></Outlet>
            </div>
        </>
    )
}

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootElement/>,
            children: [
                {
                    path: "category",
                    children: [
                        {
                            index:true,
                            element: <CategoryIndex/>
                        },
                        {
                            path: "add",
                            element: <CategoryAdd/>
                        },
                        {
                            path: "edit/:id",
                            element: <CategoryEdit/>
                        },
                        {
                            path: "remove",
                            element: <CategoryAdd/>
                        }
                    ]
                }
            ]
        },

    ]);
    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    )
}

export default App
