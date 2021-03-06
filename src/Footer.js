import Twitter from './Twitter Squared.svg';
import Pinterest from './Pinterest.svg';
import Facebook from './Facebook.svg';
import Insta from './Instagram.svg';
import Linkedin from './LinkedIn.svg';


const Footer = () => {

    
    var date = new Date();

    return(
        <div className="Footer">
            <div className='footerleft' style={{flexBasis : '60%'}}>
                &#169; {date.getFullYear()} Proudly powered by Amrita Analytics Lab
            </div>
            <div className='footerright' style={{display: 'flex',flexBasis : '40%',justifyContent : 'space-evenly'}}>
                <img className='hovershit' width='30px'  alt="Social" src={Twitter}></img>
                <img className='hovershit' width='30px'  alt="Social" src={Insta}></img>
                <img className='hovershit' width='30px'  alt="Social" src={Linkedin}></img>
                <img className='hovershit' width='30px'  alt="Social" src={Pinterest}></img>
                <img className='hovershit' width='27px'  alt="Social" src={Facebook}></img>
            </div>
        </div>
    );
}

export default Footer;