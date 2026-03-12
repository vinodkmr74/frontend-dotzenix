import { Outlet } from "react-router-dom";
import Header from "./components/navbar/Header";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
      <div className="mt-26">
        <Header />
      </div>

      <div className="w-full">
        <Outlet />
        <div className="mt-6">
          <Footer />
        </div>
        
      </div>
    </>
  );
}
