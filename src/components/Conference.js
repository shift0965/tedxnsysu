import FadeInText from "./tools/FadeInText"
import Footer from "./Footer";
import Header from "./Header";

const Conference = () => {
    return(
        
        <div className="main-container">
            <Header/>
            <div className="full-page bg-cover bg-no-repeat bg-event0">
                <div className="flex ml-auto mr-auto mt-40">
                    <FadeInText className="">
                        <span>你</span> 
                        <span>好</span> 
                        <span>, </span> 
                        <span>__</span>
                        <span>__</span>       
                    </FadeInText>
                </div>
            </div>
            <Footer/>
        </div>
    )
}


export default Conference