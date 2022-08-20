import { useEffect, useState } from "react"
import Footer from "./Footer";
import Header from "./Header";

const Ticket = () => {
    return(
        <div className="main-container">
            <Header/>
            <div className="content-container">
                <h1>Ticket</h1>
            </div>
            <Footer/>
        </div>
    )
}


export default Ticket