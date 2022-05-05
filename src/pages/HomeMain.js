import man from '../man.svg';
import leftimage from '../Home2Left.svg'
import rightimage from '../Home2Right.svg'
import underimg from '../underimg.svg'
import Footer from '../Footer';

const HomeMain = () => {

    const HomeUnder = () => (
        <div className='sidebyside'>
            <div className='homeunderleft' style={{flexBasis: '45%'}}>
                <div>
                <img style={{
                            width: '300px',
                            height: '400px'
                        }} alt='some value' src={underimg}/>
                </div>
            </div>
            <div className='homeunderright' style={{flexBasis: '65%'}}>
                <div style={{paddingBottom:'20px', fontWeight: '500', textAlign:'left'}} className="headerright">
                    When it comes to Consultation, Certificate Courses, or Training Programmes, We are to take those tasks with highest integrity and affordability.
                </div>
                <div style={{display: 'flex', justifyContent: 'left', paddingTop:'10px'}}>
                    <div className='buttonstuff'>
                        WHAT WE DO
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
                <div style={{padding:'25px', paddingTop:'15px'}} className="headerright">
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
                <div style={{padding:'25px', paddingTop:'15px'}} className="headerright">
                Our mission is to provide customized effective and affordable analytical solutions which are easy to use. Our vision is to educate people about the benefits of using analytics in business and benefiting from it.
                </div>
            </div>
        </div>
    );
    return(
        <div>
            <div className='sidebyside Home'>
                <div className='swapfalse' style={{flexBasis: '50%', paddingLeft:'50px', paddingTop:'50px'}}>
                    <img style={{
                                width: '300px',
                                height: '400px'
                            }} alt='nothing' src={man}/>
                </div>
                <div style={{flexBasis: '50%',marginLeft:'60px', paddingLeft:'50px',paddingRight:'20px',paddingTop:'100px',margin:'10px'}}>
                    <div style={{textAlign: 'right'}} className="header">
            
                        Are You Looking for Analytical Solutions for Your Business?
                    </div>
                    <div style={{paddingTop:'25px',textAlign: 'right'}} className="headerright">
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
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default HomeMain;