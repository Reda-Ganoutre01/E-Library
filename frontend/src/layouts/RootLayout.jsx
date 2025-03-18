import { Outlet } from "react-router-dom";
import Navbar     from "../components/navbar/Navbar.jsx";
import Footer     from "../components/footer/Footer.jsx";

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex-grow bg-base-200">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
