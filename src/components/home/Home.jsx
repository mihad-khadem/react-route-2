import { Outlet, useNavigation } from "react-router-dom";
import { InfinitySpin } from  'react-loader-spinner'
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header/>
            {
                navigation.state === "loading" ? <InfinitySpin 
                width='200'
                color="#4fa94d"
              />: <Outlet/>
            }
            
            <Footer/>
        </div>
    );
};

export default Home;