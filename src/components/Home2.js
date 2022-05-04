import leftimage from '../Home2Left.svg'
import rightimage from '../Home2Right.svg'

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
                Affordable & Accessible
            </div>
            <div style={{padding:'25px', paddingTop:'15px'}} className="headerright">
            Our mission is to provide customized effective and affordable analytical solutions which are easy to use. Our vision is to educate people about the benefits of using analytics in business and benefiting from it.
            </div>
        </div>
    </div>
);

export default Home2;