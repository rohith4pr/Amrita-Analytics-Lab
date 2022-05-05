import '../service.css';
import { useState } from "react";

const ServicesPage = () => {

    const[toggleState, setToggleState]=useState(1)
    
    const optionClick = (index) =>{
        setToggleState(index)
    }

    return(
        <div className="hero">
            <h1>Services</h1>
            <div className="service-nav-container">
                <div><button className={toggleState === 1? "sevice-nav-ele-mod" : "service-nav-ele"} onClick={() => optionClick(1)} >Consulting</button></div>
                <div><button className={toggleState === 2? "sevice-nav-ele-mod" : "service-nav-ele"} onClick={() => optionClick(2)} >Learning</button></div>
                <div><button className={toggleState === 3? "sevice-nav-ele-mod" : "service-nav-ele"} onClick={() => optionClick(3)} >Courses</button></div>
                <div><button className={toggleState === 4? "sevice-nav-ele-mod" : "service-nav-ele"} onClick={() => optionClick(4)} >Internship</button></div>
            </div>    
        </div>
    )
}



export default ServicesPage;