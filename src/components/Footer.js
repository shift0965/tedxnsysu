
import { faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {

    const clickfb = () => {
        window.open("https://www.facebook.com/TEDxNSYSU.tw/");
    }
    const clickEmail = () => {
        window.open("mailto:tedxnsysukaohsiung@gmail.com");
    }
    const clickIg = () => {
        window.open("https://www.instagram.com/tedxnsysu/");
    }
    return(
        <div className="main-container mt-10">
            <div className="main_container">
                <div className="icons flex justify-center">
                    <div className="icon" onClick={clickfb}>
                        <FontAwesomeIcon className=' w-full h-full text-blue-500' icon={faFacebook}/> 
                    </div>
                    <div className="icon" onClick={clickEmail}>
                        <FontAwesomeIcon className='w-full h-full text-rose-500' icon={faEnvelope}/>
                    </div>
                    <div className="icon" onClick={clickIg}>
                        <FontAwesomeIcon className='w-full h-full text-orange-400' icon={faInstagram}/></div>
                    </div>
                    
                <div className="icons flex justify-center text-white">© TEDxNSYSU ALL RIGHTS RESERVE</div>
                <div className="icons flex justify-center text-gray">Designed and developed by HungShengChen</div>
            </div>
        </div>
    )
}


export default Footer