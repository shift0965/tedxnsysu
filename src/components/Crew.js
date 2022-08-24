import { conference_over_years} from "./tools/Information"
import { crew_member } from "./tools/Members";
import Footer from "./Footer";
import Header from "./Header";
import mostPop25 from './tools/imgs/25_Most_Popular.jpg'
import crew1 from './tools/imgs/crew.jpg'



const Crew = () => {
    return(
        <div className="main-container">
            <Header/>
            <div className=" w-full bg-fixed 2xl:h-xl_crew_h lg:h-l_crew_h md:h-52 h-36 2xl:bg-cover 2xl:bg-center bg-contain bg-no-repeat bg-crew0">
            </div>
            <div className=" md:mt-8 w-full main-container">
                <div className=" content-container lg:pl-20 lg:pr-20 p-7">
                    <div className="left lg:w-5/12 lg:order-1 order-2 mt-12 lg:mr-5">
                        <div className="img-container lg:pr-0 lg:pl-0 pr-5 pl-5">
                            <img className="image" src={mostPop25} alt="25 most popular speech" />
                        </div>
                    </div>
                    <div className="right lg:w-7/12 sm:order-1">
                        <div className="text text-white">
                            <h1 className="text-red font-extrabold mb-3">TED</h1>
                            <p className=" leading-8">TED，全名為<span className="font-bold">Technology Entertainment Design</span>，
                                                    為全球最受歡迎的點子分享平台，每年邀請講者到美國參與大型年會，在18分鐘內演講一段深入淺出的好點子演講。
                                                    透過分享內容、主張、創作、發現或實驗等方式，匯聚眾人致力、經驗及創意，冀望對外傳達
                                                    「<span className="font-bold">優秀的思想可以改變人們對這個世界的看法，人人都可以為實現某個偉大理念而共同努力</span>」
                                                    的核心理念。</p>
                        </div>
                    </div>
                </div>

                
                <div className="content-container lg:pl-20 lg:pr-20 p-7">
                    <div className="left lg:w-6/12 sm:order-1">
                        <div className="text text-white">
                            <h1 className="text-red font-extrabold mb-3">TEDx</h1>
                            <p className=" leading-8">TEDx為TED於2009年所推出的計劃，旨在鼓勵全球各地在經過TED官方的嚴格審核流程下，自行組織和舉辦具有TED風格和性質的活動。
                                                    TEDx打破了地域與語言的界線，讓一個閉門菁英大會能擴展到社會大眾層面。</p>
                        </div>
                    </div>
                    <div className="right lg:w-6/12 lg:order-1 order-2 mt-12 lg:ml-5">
                        <div className="img-container lg:pr-0 lg:pl-0 pr-5 pl-5">
                            <img className="image" src={crew1} alt="tedxnsysu crew" />
                        </div>
                    </div>
                </div>

                <div className="content-container lg:pl-12 lg:pr-12 p-7 items-center mt-10">
                    <div className="text text-white lg:w-10/12 text-center">
                        <h1 className="text-red font-extrabold mb-3">TEDx<span className="text-white">NSYSU</span></h1>
                        <p className=" leading-8">中山大學為國內最年輕之頂尖研究型大學，以人文科技、學風自由聞名，TEDxNSYSU帶有中山大學的名字是因我們以中山出發，將TED提倡之好點子散播、跨領域交流的精神植根於校園內，更進一步分享至高東屏地區。建立資訊、知識及經驗交流平台，必將結出豐碩的學術果實。</p>
                    </div>
                </div>

                <div className="content-container lg:p-10 p-3 text-center flex-col">
                    <div className=" text-white w-full">
                        <h1 className="text-red font-extrabold mb-0">關於<span className="text-white">我們</span></h1>
                    </div>
                    <div className=" flex justify-center flex-row flex-wrap">
                        {conference_over_years.map((item, index) =>  
                            <div key={index} className="flex flex-col w-full max-w-xs lg:ml-10 lg:mr-10 mt-8 items-center">
                                <div className="title flex flex-col items-center">
                                    <h2 className="font-bold">{item.title}</h2>
                                    <h2 className="font-bold">{item.name}</h2>
                                </div>
                                <div className=" w-24 border-2 border-red mt-3 mb-3"></div>
                                    <div className=" w-60">
                                        {item.image}
                                    </div>
                                    <div className=" w-64">
                                        {item.describe.map((text, index) => 
                                            <p key={index} className="text-left mt-5 text-sm">{text}</p>
                                        )}  
                                    </div>                      
                            </div>)}
                    </div>
                </div>


                <div className="content-container lg:p-10 p-3 items-center flex-col mt-5">
                    <div className="text text-white lg:w-10/12 text-center">
                        <h1 className="text-red font-extrabold mb-3">團隊<span className="text-white">成員</span></h1>
                    </div>
                    <div className=" flex w-full flex-wrap justify-center mt-5">
                            {crew_member.map((item, index) => 
                            <div className="  md:w-36 w-28 m-3 hover:scale-125 duration-300 relative" key={index}>
                                {item.image}
                                <div className=" flex flex-col text-center text-black justify-center 
                                                w-full h-full top-0 absolute bg-semi_transparent
                                                opacity-0 hover:opacity-100 duration-500">
                                    <h2 className=" font-bold">{item.title}</h2>
                                    <h3 className=" font-bold">{item.name}</h3>
                                </div>
                            </div>)}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}


export default Crew



