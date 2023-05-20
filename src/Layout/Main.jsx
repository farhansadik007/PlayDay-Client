import { Outlet } from "react-router-dom";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

const Main = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header></Header>
            <div className='flex-grow'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;