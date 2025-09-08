import {Header} from "./Header";
import {Footer} from "./Footer";
import { Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";4
import { Loading } from "./Loading";

export const Applayout = () => {
    const navigation =useNavigation();
    if(navigation.state==="loading"){
        return<>
        <Loading/>
    </>
    }
    return (
        <>          
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}