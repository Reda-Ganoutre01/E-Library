import {Provider} from "react-redux";
import {Storage}  from "./storage/Storage.jsx";
import Loader from './components/Loader'; 
import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

const NavBar = lazy(() => import('.//components/Navbar/Navbar.jsx'));
// const Auth=lazy(()=> import('./components/Auth.jsx'));
// const Books=lazy(()=>import('.//components/Books.jsx'))
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer); 
  }, []);
  return (

    <>
     <Provider store={Storage}>
      <BrowserRouter>
      <div>
      {loading ? (
        <Loader /> 
      ) : (
        <Suspense fallback={<Loader />}>
          <NavBar/>
          {/* <Auth/> */}
          {/* <Books/> */}
        </Suspense>
      )}
    </div>
      
      </BrowserRouter>
 
    </Provider>
    
    </>
   
  )
}

export default App
