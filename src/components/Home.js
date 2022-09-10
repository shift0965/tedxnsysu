import { DecorationBase, DecorationCircles, LinkCircles } from "./tools/LightBulb"
import { Link } from "react-router-dom"
import { useState,useEffect } from "react"
import logo from './tools/imgs/logo.png'
import { motion } from "framer-motion"


const Home = () => {

    const [lightOn, setLightOn] = useState(false);
    const [height, setHeight] = useState(window.innerHeight);


    const switchLight = () => {
        setLightOn(!lightOn);
    }

    const colors = ['#F20C00', '#FFFAFA', '#000000']



    const [sizeParam, setSizeParam] = useState(1.1);

    function handleResize() {
        console.log(window.innerHeight);
        
        setHeight(window.innerHeight);
        
        if(window.innerWidth < 768){
        setSizeParam(0.9);
        }
        else{
        setSizeParam(1.1);
        }
    }
    
    window.addEventListener('load', handleResize);
    

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);


    return(
        
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity:0}}
            
            style={{height:height}}

            className={`${lightOn ? 'bg-backgroundBright' : 'bg-background'} md:flex flex-row items-center justify-center duration-700 overflow-hidden relative`}>
            <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: lightOn? 0:1}}
                transition={{duration: 0.6}}
                
                className={`absolute md:w-72 w-56 top-1/2 -translate-y-full right-1/2 translate-x-1/2`}>
                <img src={logo} alt="logo"/>
            </motion.div>
        
            <div className="h-full mx-auto flex justify-center">
                <div className="flex justify-center md:w-96 w-72 relative items-center">
                    <div className='w-0 relative'>
                        
                        {LinkCircles.map((item, index) =>{
                            
                            const x = item.x * 15 * sizeParam + 'px';
                            const y = item.y * 25 * sizeParam + 'px';
                            const width = (item.size * 10 * sizeParam) + 'px';
                            return(
                                <Link className={` ${lightOn? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
                                        absolute rounded-full -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center shadow-md shadow-gray
                                      hover:scale-90 hover:duration-300 duration-700`}
                                      style={{width:width, height:width, top:y, left:x, backgroundColor:colors[item.color]}}
                                      to={item.to} key={index}>
                                    <span className=" text-xl font-bold mt-2" style={{color:colors[item.textColor1]}}>{item.title}</span>
                                    <span className=" text-md font-bold" style={{color:colors[item.textColor2]}}>{item.subTitle}</span>
                                </Link>
                            )
                        })}

                        {DecorationCircles.map((item, index) =>{
                            
                            const x = item.x * 15 * sizeParam + 'px';
                            const y = item.y * 25 * sizeParam + 'px';
                            const width = (item.size * 10 * sizeParam) + 'px';
                            return(
                                <div className={` ${lightOn? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
                                        absolute rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center shadow-md shadow-gray
                                        duration-700`}
                                     style={{width:width, height:width, top:y, left:x, backgroundColor:colors[item.color]}}
                                     key={index}>
                                    
                                </div>
                            )
                        })}

                        
                        <div className={`circle ${lightOn? ' border-background ' : '  border-whiteish '}
                                         absolute rounded-full -translate-x-1/2 -translate-y-1/2 duration-700 bg-transparent border-[12px]`} 
                                style={{width:100 * sizeParam + 'px',height:100 * sizeParam+'px', top:235 * sizeParam + 'px', left:0 * 15 * sizeParam + 'px'}}>
                        </div>

                        <div className={`mask1 ${lightOn? 'bg-backgroundBright' : ' bg-background'}
                                             absolute -translate-x-1/2 -translate-y-1/2 duration-700 `} 
                                style={{width:lightOn? 150*sizeParam+'px':30* sizeParam + 'px',height:30 * sizeParam+'px', top:200 * sizeParam + 'px'}}>
                        </div>

                        <div className={`mask2 ${lightOn? 'bg-backgroundBright' : 'bg-background'}
                                             absolute -translate-x-1/2 duration-700 `} 
                                style={{width:100 * sizeParam + 'px',height:lightOn? 80*sizeParam+'px' : 0 * sizeParam+'px', top:185 * sizeParam + 'px'}}>
                        </div>

                        <div className={`middle absolute -translate-x-1/2 -translate-y-1/2 duration-700 rounded-full
                                            ${lightOn? ' bg-red' : 'bg-whiteish'}`} 
                                style={{width:13*sizeParam + 'px', height:lightOn ?100 * sizeParam+'px' : 73 * sizeParam+'px', top:148 * sizeParam + 'px', left:-6.5 * sizeParam + 'px',
                                        transform:lightOn?'rotate(90deg)':'rotate(0deg) translateY(10px)'}}>
                        </div>

                        {DecorationBase.map((item, index) =>{
                            
                            const x = item.x * 15 * sizeParam + 'px';
                            const y = item.y * 25 * sizeParam + 'px';
                            
                            const width = (item.width * 10 * sizeParam) + 'px';
                            const height = (item.height * sizeParam) + 'px';
                            return(
                                <div className={`absolute rounded-full -translate-x-1/2 -translate-y-1/2 duration-700`} 
                                     style={{width:lightOn? width : 0, height:height, top:y, left:x, backgroundColor:lightOn? colors[item.color1] : 'transparent'}}
                                     key={index}>
                                </div>
                            )
                        }
                        )}

                        <div className={`border-transparent
                                        block absolute rounded-full -translate-x-1/2 -translate-y-1/2 duration-700 bg-transparent cursor-pointer`} 
                                style={{width:180 * sizeParam + 'px',height:180 * sizeParam+'px', top:225 * sizeParam + 'px', left:0 * 15 * sizeParam + 'px'}}
                                onClick={switchLight}>
                        </div>


                    </div>
                    
                </div>
            </div>
        </motion.div>
    )
}

//<span className="text-black">{item.index}</span>
export default Home




/*
buttom ${lightOn? ' border-transparent' : ' border-whiteish'}

<div className={`buttom ${lightOn? ' border-transparent' : ' border-whiteish'}
                block absolute rounded-full -translate-x-1/2 -translate-y-1/2 items-center justify-center duration-700 border-2 bg-transparent cursor-pointer`} 
        style={{width:180 * sizeParam + 'px',height:180 * sizeParam+'px', top:225 * sizeParam + 'px', left:0 * 15 * sizeParam + 'px'}}
        onClick={switchLight}>
</div>

*/