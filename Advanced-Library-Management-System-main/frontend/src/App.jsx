import { BrowserRouter } from "react-router-dom";


import AppRoutes from "./routes/AppRoutes copy";
function App() {
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 2000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
   <>
   <BrowserRouter>
      <AppRoutes/>

   </BrowserRouter>
   </>
    // <BrowserRouter>
    //   {loading ? (
    //     <Loader />
    //   ) : (
    //     <Suspense fallback={<Loader />}>
    //       <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/login" element={<Login/>}></Route>
    //       </Routes>
    //     </Suspense>
    //   )}
    // </BrowserRouter>
  );
}

export default App;
