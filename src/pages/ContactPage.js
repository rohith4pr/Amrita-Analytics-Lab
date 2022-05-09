import NavBar from '../NavBar';
import Call from '../Call.svg';
import Email from '../Email.svg';
import Time from '../Time.svg';
import Place from '../Place.svg';
import { useEffect } from 'react';

const ContactPage = () => {
    useEffect(() => {
        document.title = "Contact"
     }, []);
    return(
        <div>
            <NavBar />
            <div className="ContactUsInfo">
                <div className='contactUsDiv' style={{flexBasis: "60%"}}>
                    <div className='contactUs'>
                        Contact Us
                    </div>
                    <div className='contactUsEle'>
                        NAME
                    </div>
                    <div className='contactUsEle'>
                        EMAIL
                    </div>
                    <div className='contactUsEle'>
                        MESSAGE
                    </div>
                    

                </div>
                
                <div style={{display: "flex",flexDirection: "column", flexBasis: "40%", background: "#0A0C70", padding:"100px"}}>
                    <div className='InfoInfo'>
                        Info
                    </div>
                    <div className='Info'>
                        <img className='InfoImg' src = {Call} alt='none'/>
                        +9538111135
                    </div>
                    <div className='Info'>
                        <img className='InfoImg' src = {Email} alt='none'/>
                        info@aalabc.com
                    </div>
                    <div className='Info'>
                        <img className='InfoImg' src = {Time} alt='none'/>
                        09:00am - 06:00pm
                    </div>
                    <div className='Info' style={{display: "flex"}}>
                        <img className='InfoImg' src = {Place} alt='none'/>
                        Amritanagar, Ettimadai, Tamil Nadu 641112
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
    


export default ContactPage;