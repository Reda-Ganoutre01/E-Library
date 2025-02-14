import { BrowserRouter } from "react-router-dom";
import { lazy } from "react";

const AppRoutes=lazy(()=>import("./routes/AppRoutes.jsx"))
function App() {
  return (
    <BrowserRouter>
     
      <AppRoutes/>
      {/* <Home/> */}
    </BrowserRouter>
  );
}

export default App;
