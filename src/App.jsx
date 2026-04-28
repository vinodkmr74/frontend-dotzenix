import { Outlet } from "react-router-dom";
import Header from "./components/navbar/Header";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
        <Header />

      <div className="">
        <Outlet />
        <div className="">
          <Footer />
        </div>
        
      </div>
    </>
  );
}
