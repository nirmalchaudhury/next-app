import React from "react";
import Footer from "./Footer"
import NavigationBar from "./NavigationBar";
import SideDrawer from "./NavigationSideDrawer";
import NavDrawerBackdrop from "./NavigationSideDrawerBackdrop";
import { useState } from "react";

export const Layout: React.FC = ({children}) => {

    const [menuDrawerOpen, setMenuDrawerOpen] = useState(false)

    const toggleMenuDrawer = () => {
        setMenuDrawerOpen(!menuDrawerOpen)
    }

    let sideDrawer
    let backdrop
    if (menuDrawerOpen)
    {
        sideDrawer = <SideDrawer />;
        backdrop = <NavDrawerBackdrop onDrawerButtonHandler={toggleMenuDrawer}/>
    }

    return (
        <div style={{height: "100vh"}}>    
            {/* <Header /> */}
            {/* <Menu /> */}
            {sideDrawer}
            <NavigationBar onDrawerButtonHandler={toggleMenuDrawer}/>
            {backdrop}
            {children}
            <Footer />
        </div>
    )
}