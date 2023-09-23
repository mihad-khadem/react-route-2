import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Home = () => {
    return (
        <div>
            <Header/>
            <h2>This is Home</h2>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Home;