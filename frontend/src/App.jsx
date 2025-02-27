// App.js
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import AuthProvider from "./context/AuthProvider.jsx";

function App() {
  return (
    <AuthProvider>
        <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
