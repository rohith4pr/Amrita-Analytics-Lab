import NavBar from '../NavBar';
import Call from '../Call.svg';
import Email from '../Email.svg';
import Time from '../Time.svg';
import Place from '../Place.svg';
import { useEffect, useState } from 'react';

const ContactPage = ({user,setUser}) => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");

    useEffect(() => {
        document.title = "Contact"
     }, []);
    
    const sendCommunication = async () =>{
        const result = await fetch(`/api/send-contact`, {
            method: 'post',
            body: JSON.stringify({ name, email, message}),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        alert("Email sent to the Admin !");
        if(result === ""){
            console.log(result.json());
        }
        setName("");
        setEmail("");
        setMessage("");
        return;
    }

    return(
        <div>
            <NavBar className="sidebyside" user={user} setUser={setUser}/>
            <div className="ContactUsInfo">
                <div className='contactUsDiv'>
                    <div className='contactUs'>
                        Contact Us
                    </div>
                        <input value={name} onChange={(e) => setName(e.target.value)} style={{borderBottom: '1px solid #000000'}}type="email" className='contactUsEle' placeholder="NAME" name="name" id='name' required />
                        <input value={email} onChange={(e) => setEmail(e.target.value)} style={{borderBottom: '1px solid #000000'}}type="email" className='contactUsEle' placeholder="EMAIL" name="name" id='email' required />
                        <input value={message} onChange={(e) => setMessage(e.target.value)} style={{borderBottom: '1px solid #000000'}}type="email" className='contactUsEle' placeholder="MESSAGES" name="name" id='messages' required />
                    <div onClick={sendCommunication} className='buttonstuffSend'>
                        SEND
                    </div>

                </div>
                
                <div style={{display: "flex",flexDirection: "column", flexBasis: "40%", background: "#0A0C70", padding:"80px", paddingTop:"60px"}}>
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