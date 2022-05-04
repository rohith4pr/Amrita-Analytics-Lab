import man from '../man.svg';

const HomeMain = () => (
    <div className='sidebyside'>
        <div style={{flexBasis: '50%',marginLeft:'60px', paddingLeft:'50px',paddingRight:'20px',paddingTop:'100px',margin:'10px'}}>
            <div style={{textAlign: 'right'}} className="header">
                Are You Looking for Analytical Solutions for Your Business?
            </div>
            <div style={{paddingTop:'25px',textAlign: 'right'}} className="headerright">
                We are a group of proactive analytics enthusiasts, who work tirelessly to solve data problems and exchange ideas of how to improve business using analytics.
            </div>
        </div>
        <div style={{flexBasis: '50%', paddingLeft:'50px', paddingTop:'50px'}}>
            <img style={{
                        width: '300px',
                        height: '400px'
                    }} alt='some value' src={man}/>
        </div>
    </div>
);

export default HomeMain;