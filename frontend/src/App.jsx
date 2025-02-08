import {Provider} from "react-redux";
import {Storage}  from "./storage/Storage.jsx";
import Loader from './components/Loader'; 
import {  lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

const Home=lazy(()=>import('./pages/Home.jsx'))

function App() {
  const [loading, setLoading] = useState(false);

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
         <Home/>
      
  
        </Suspense>
      )}
    </div>
      
      </BrowserRouter>
 
    </Provider>
    
    </>
   
  )
}

export default App
