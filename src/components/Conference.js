import Footer from "./Footer";
import Header from "./Header";
import event1 from "./tools/imgs/event1_1200.png"
import { conference } from "./tools/Information";
import {AiOutlinePlayCircle} from 'react-icons/ai'

import { motion } from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const Conference = () => {


    return(
        
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity:0}}

            className="main-container">
            <Header/>
            <div className="content-container md:mt-14 h-fit">
                <LazyLoadImage effect='opacity' src={event1} alt="event" className="md:w-10/12 block mx-auto"/>
            </div>


            <div className="title items-center flex flex-col relative md:mt-16 mt-8">
                <h1 className="z-10">年會子主題</h1>
                <div className="h-3 w-52 bg-red -mt-2 z-0"></div>
            </div>
            <div className="content-container h-fit md:mt-10 mt-2">
                <div className="w-64 md:mx-6 mx-auto md:my-0 my-6">
                    <h1 className="mb-5 font-bold">千禧世代</h1>
                    <div>
                        <p className="my-2">
                        在這個資訊發展快速的時代，網路越來越發達，我們可以輕鬆地和世界接軌以及分享資訊。然而，當這些進步的科技讓世界緊密的連結，當大家彼此靠得更近的時候，等待我們的將是前所有未有的挑戰。
                        </p>
                        <p className="my-2">
                        團隊希望藉由此次年會能讓學生有一個機會去理解千禧世代與過去世代不同的價值觀、生活風格。
                        </p>
                    </div>
                </div>

                <div className="w-64 md:mx-6 mx-auto md:my-0 my-6">
                    <h1 className="mb-5 font-bold">孤獨感</h1>
                    <div>
                        <p className="my-2">
                        孤獨是生命的基調，它會以不同的姿態存在於生活中的各個角落，它是一種心情感覺、也是一種精神狀態，它存在於獨立個體、也存在於群體關係，它可以是曇花一現、也可以是歷日曠久。
                        </p>
                        <p className="my-2">
                        當今世代，許多人面臨著被「孤獨感」吞噬，而孤獨感對於一個人究竟是好是壞？我們應如何與孤獨自處？
                        </p>
                    </div>
                </div>

                <div className="w-64 md:mx-6 mx-auto md:my-0 my-6">
                    <h1 className="mb-5 font-bold">惡勢力</h1>
                    <div>
                        <p className="my-2">
                        當一段抗爭結束後，人們總看到被高高舉起的勝利旗幟，卻看不見它們背後陰影。
                        </p>
                        <p className="my-2">
                        在關乎你我的各式社會議題之中，總有一群被遺落下的群體，他們被迫著順應抗爭後的結果、接受體制下的不公平。在看似「成功」的戰役後，誰又為這些被忽略的聲量發聲，幫他們找到屬於他們的出路呢？
                        </p>
                    </div>
                </div>

                
            </div>

            <div className="title items-center flex flex-col relative md:mt-16 mt-8">
                <h1 className="z-10">來點演講</h1>
                <div className="h-3 w-52 bg-red -mt-2 z-0"></div>
            </div>

            <div className="content-container flex-col md:mt-5 mt-2 h-fit text-center">
                {conference.map((item, index) => {
                    return(
                        <div className="mt-5" key={index}>
                            <h1 className="font-bold">{item.title}</h1>
                            <div className="w-full grid md:grid-cols-2 grid-cols-1 justify-center xl:px-10">

                                {item.videos.map((item, index) => {
                                    return(
                                        <div className=" speakerContainer flex flex-col cursor-pointer mx-5 my-10 text-left" key={index} onClick={() => window.open(item.link)} >
                                            <div className="relative">
                                                <AiOutlinePlayCircle className="play text-6xl absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 opacity-60 duration-300"/>
                                                {item.image}
                                            </div>
                                            
                                            <div className=" text-white">
                                                <h3 className=" mt-1.5 opacity-80">{item.speaker}</h3>
                                                <h2 className=" mt-1">{item.title}</h2>                                            
                                            </div>
                                        </div>
                                    )
                                })}
                                
                            </div>
                        </div>
                    )
                })}
            </div>
            <Footer/>
        </motion.div>
    )
}


export default Conference