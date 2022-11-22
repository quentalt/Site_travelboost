import React,{ReactNode} from "react";
import Navbar from "./navbar";
interface ILayoutProps {
    children:ReactNode;
}

const Layout = ({children}:ILayoutProps) => {
    return (
        <>
        <Navbar/>
            {children}
        </>
    );
};
export default Layout;