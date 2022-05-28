import man from '../man.svg';
import leftimage from '../Home2Left.svg'
import rightimage from '../Home2Right.svg'
import underimg from '../underimg.svg'
import Footer from '../Footer';
import NavBar from '../NavBar';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const HomeMain = ({user,setUser}) => {
    useEffect(() => {
        document.title = "Amrita Analytics Lab - Home"
     }, []);

    const HomeUnder = () => (
        <div className='sidebyside'>
            <div className='homeunderleft' style={{flexBasis: '45%'}}>
                <div style={{display: 'flex', justifyContent: 'right' }} >
                <img style={{
                            width: '300px',
                            height: '400px',
                        }} alt='some value' src={underimg}/>
                </div>
            </div>
            <div className='homeunderright' style={{flexBasis: '65%'}}>
                <div className="headerright headerrighttext">
                    When it comes to Consultation, Certificate Courses, or Training Programmes, We are to take those tasks with highest integrity and affordability.
                </div>
                <div style={{display: 'flex', justifyContent: 'left', paddingTop:'10px'}}>
                    <div className='buttonstuff'>
                        <Link to="/services" style={{color: 'inherit', textDecoration: 'inherit'}}> WHAT WE DO </Link>
                    </div>
                </div> 
            </div>
        </div>
    );

    const Home2 = () => (
        <div className='sidebyside'>
            <div className='home2left' style={{flexBasis: '50%'}}>
                <div>
                <img style={{
                            width: '300px',
                            height: '400px'
                        }} alt='some value' src={leftimage}/>
                </div>
                <div className="header" style={{padding:'25px', fontSize: '40px'}}>
                    Trusted Experience
                </div>
                <div style={{paddingLeft:'70px', paddingRight: '70px', paddingTop:'15px', paddingBottom: '100px'}} className="headerright">
                    AAL is venturing in to the forefront of technological innovation through both data processing strength and application development. AAL ensure that our applications help clients to grab insights from complex data sets with ease.
                </div>
            </div>
            <div className='home2right' style={{flexBasis: '50%'}}>
                <div>
                <img style={{
                            width: '300px',
                            height: '400px'
                        }} alt='some value' src={rightimage}/>
                </div>
                <div className="header" style={{padding:'25px', fontSize: '40px'}}>
                    Affordable and Accessible
                </div>
                <div style={{paddingLeft:'70px', paddingRight: '70px', paddingTop:'15px', paddingBottom: '100px'}} className="headerright">
                    Our mission is to provide customized effective and affordable analytical solutions which are easy to use. Our vision is to educate people about the benefits of using analytics in business and benefiting from it.
                </div>
            </div>
        </div>
    );
    return(
        <div>
            <div>
                <NavBar user={user} setUser={setUser}/>
            </div>
            <div className='sidebyside Home'>
                <div className='swapfalse firstimage'>
                    <img style={{
                                width: '300px',
                                height: '400px'
                                }} alt='nothing' src={man}/>
                </div>
                <div className="headerbeforeareyou">
                    <div className="headerareyoulooking">
                        Are You Looking for Analytical Solutions for Your Business?
                    </div>
                    <div className="headerrightfirst">
                        We are a group of proactive analytics enthusiasts, who work tirelessly to solve data problems and exchange ideas of how to improve business using analytics.
                    </div>
                </div>
                <div className='swaptrue' style={{flexBasis: '50%', paddingLeft:'50px', paddingTop:'50px'}}>
                    <img style={{
                                width: '300px',
                                height: '400px'
                            }} alt='nothing' src={man}/>
                </div>
            </div>
            <Home2/>
            <HomeUnder/>
            <Footer />
        </div>
    );
}

export default HomeMain;