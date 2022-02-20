import React from "react";
import Footer from "./Footer"
import { useState } from "react";

export const Layout: React.FC = ({children}) => {

    return (
        <div style={{height: "100vh"}}>
            {children}
            <Footer />
        </div>
    )
}