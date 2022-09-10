
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import event from './tools/imgs/event2_700.png'

import jiuzhennan from './tools/imgs/jiuzhennan.png'
import pinpaiyanjiu from './tools/imgs/pinpaiyanjiu.png'

import { motion } from "framer-motion";



const P = styled.p`
    color:rgb(180 180 184);
    opacity: 80;
    margin-bottom: 10px;
`

const Ticket = () => {
    return(
        
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity:0}}

            className="main-container">

            
            <Header/>
            <div className="content-container flex-col md:mt-14 h-fit">
                <div className="grid md:grid-cols-2 grid-cols-1 w-full 2xl:px-28 xl:px-20 mt-10">

                    <div className="pt-5 px-4 md:order-1 order-3">
                        <div className="title justify-left flex flex-col relative">
                            <h2 className="z-10">活動資訊</h2>
                            <div className="h-4 w-48 bg-red -mt-3 z-0"></div>
                        </div>

                        <div className=" mt-4 ml-3">
                            <P>日期：2021/06/06 (sun) 13:00~18:00</P>
                            <P>地點：高雄市立美術館 B1演講廳</P>
                        </div>

                        <div className="title justify-left flex flex-col relative mt-10">
                            <h2 className="z-10">購票資訊</h2>
                            <div className="h-4 w-48 bg-red -mt-3 z-0"></div>
                        </div>

                        <div className=" mt-4 ml-3">
                            <P>購票截止時間：5/16（額滿即關閉表單）</P>
                            <P>付款取票方式： </P>
                            <P>（學生）TED週至攤位取票</P>
                            <P>（社會人士）活動當天現場取票</P>
                        </div>

                        <div className="title justify-left flex flex-col relative mt-10">
                            <h2 className="z-10">票價</h2>
                            <div className="h-4 w-48 bg-red -mt-3 z-0"></div>
                        </div>

                        <div className=" mt-4 ml-3">
                            <P>全票：350$</P>
                        </div>
                    </div> 
                    <div className=" md:px-10 py-5 flex justify-center items-center order-2 md:w-full w-60 mx-auto">
                        <img loading="lazy" src={event} alt="poster" />
                    </div>
                </div>

                <div className="2xl:px-28 xl:px-24 px-4 mt-10">
                    <div className="title justify-left flex flex-col relative">
                        <h2 className="z-10">協辦廠商</h2>
                        <div className="h-4 w-48 bg-red -mt-3 z-0"></div>
                    </div>

                    <div className="flex md:flex-row flex-col">
                        <div className="flex h-24 mt-5">
                            <div className=" w-24 h-24 flex justify-center items-center">
                                <img src={jiuzhennan} alt="舊振南"/>
                            </div>
                            <div className="h-fit my-auto ml-3">
                                <h3>舊振南餅店</h3>
                                <p className="mt-1">Jiu Zhen Nan Bakery </p>
                            </div>
                        </div>

                        <div className="flex h-24 mt-5 md:ml-16">
                            <div className=" w-24 h-24 flex justify-center items-center">
                                <img src={pinpaiyanjiu} alt="舊振南"/>
                            </div>
                            
                            <div className="h-fit my-auto ml-3">
                                <h3>國立中山大學</h3>
                                <p className="mt-1">舊振南品牌研究中心 </p>
                            </div>
                        </div>
                    </div>

                    <div className=" w-full flex justify-center mt-12 h-24 items-center">
                        <a className=" py-1.5 px-12 rounded-2xl font-bold text-lg bg-red text-white cursor-pointer hover:bg-white hover:text-red duration-300" href='https://docs.google.com/forms/d/e/1FAIpQLSckV0EXorNxf1d3ju_k8Yl-TJS5QMXW9iUEZOCWXeOV1_qRcg/closedform'>購票 Let’s Go</a>
                    </div>
                    

                </div>
                
            </div>
            <Footer/>
        </motion.div>
    )
}


export default Ticket