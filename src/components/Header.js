import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import classNames from "classnames";
import logo from './tools/imgs/logo.png'


const Header = () => {

    const [barOpen, setBarOpen] = new useState(false);
    const switchBar = () => {
        setBarOpen(!barOpen);
    }

    const closeBar = () => {
        setBarOpen(false);
    }

    const [isShrunk, setShrunk] = useState(false);

    useEffect(() => {
        const handler = () =>{
            setShrunk((isShrunk) => {
                if(isShrunk){
                    if(document.body.scrollTop < 4 &&
                        document.documentElement.scrollTop < 4)
                    { return false; }
                } 
                else{ 
                    if(document.body.scrollTop > 20 || 
                        document.documentElement.scrollTop > 20)
                    { return true; }
                }             
                return isShrunk;
            });
            }

            window.addEventListener("scroll", handler);
            return () => window.removeEventListener("scroll", handler);
        }, []);


    const OpenFacebook =()=> {
        window.open("https://www.google.com")
    }

    const navBarClass = classNames("flex w-full max-w-5xl duration-500",
                                    {"md:-translate-y-14":isShrunk});

    return(
        <nav className='flex justify-center w-full h-14 bg-transparent fixed top-0 z-40'>

            <button className={`nav_toggle w-16 h-16 z-50  ${barOpen? "active" : ""} rounded-full`} onClick={switchBar}>               
                <div className="nav_toggle_bar top-6 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="nav_toggle_bar top-9 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>  
                
            </button> 

            <div className={navBarClass}>
                <div className="logo cursor-pointer md:w-48 w-0 md:mx-0 mx-auto" onClick={OpenFacebook}>
                    <img className="w-full p-1.5"
                        src={logo} alt="tedxnsysu logo" />
                </div> 

                <div className={`nav_menu ${barOpen? "" : "active"} flex ml-auto text-white`}>
                    <ul className="nav_list text-title">
                        <li>
                            <Link to={'/'} className="nav_link" onClick={closeBar}>首頁</Link>
                        </li> 
                        <li>
                            <Link to={'/conference'} className="nav_link" onClick={closeBar}>演講</Link>
                        </li> 
                        <li>
                            <Link to={'/crew'} className="nav_link" onClick={closeBar}>關於</Link>
                        </li> 
                        <li>
                            <Link to={'/ticket'} className="nav_link" onClick={closeBar}>購票</Link>
                        </li> 
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Header


