import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import classNames from "classnames";


const Header = (props) => {

    const [isShrunk, setShrunk] = useState(false);
    console.log(props.textBlack);

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

    const navBarClass = classNames("flex justify-center w-full h-14 bg-transparent fixed top-0 z-40 duration-500",
                                    {"-translate-y-14":isShrunk});

    return(
        <nav className={navBarClass}>
            <div className="flex w-full max-w-5xl">
                <div className="logo cursor-pointer min-w-fit" onClick={OpenFacebook}>
                    <img className="h-full w-full p-1.5"
                        src="imgs/logo.png" alt="tedxnsysu logo" />
                </div>
                <div className={`btns flex ml-auto ${props.textBlack ? 'text-black' : 'text-white' }`}>
 
                    <Link to={'/'}><button className="navbar-btn">首頁</button></Link>
                    <Link to={'/conference'}><button className="navbar-btn">年會</button></Link>
                    <Link to={'/crew'}><button className="navbar-btn">團隊</button></Link>
                    <Link to={'/ticket'}><button className="navbar-btn">購票</button></Link>
                </div>
            </div>
        </nav>
    )
}


export default Header


