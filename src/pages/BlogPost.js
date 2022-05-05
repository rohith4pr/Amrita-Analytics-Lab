import Footer from "../Footer";
import NavBar from "../NavBar"
import propic from "../propic.svg";
import twitter from '../Twitter Squared.svg';
import instagram from "../Instagram.svg";
import facebook from "../Facebook.svg";
import linkedin from "../LinkedIn.svg";
import pinterest from "../Pinterest.svg";

const BlogPost = () => {
    return(
        <div className="App">
            <div>
                <NavBar/>
            </div>
            <div className="BlogPost">
                <div className='blogpostleft' style={{flexBasis: '30%'}}>
                    <div className='header' style={{fontSize:'20px', marginTop:'20px', textAlign:'left', marginLeft:'50px'}}>
                        Author Information
                    </div>
                    <div style={{display:'flex', marginLeft:'50px'}}>
                        <div>
                            <img src={propic} style={{width:'55px', marginRight:'10px'}} alt='pic'/>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', marginLeft:'10px'}}>
                            <div>
                                Raed Majeed
                            </div>
                            <div>
                                23 blogs
                            </div>
                        </div>
                    </div>
                    <div className='header' style={{fontSize:'20px', marginTop:'10px', textAlign:'left', marginLeft:'50px'}}>
                        About Me
                    </div>
                    <div className='headerright' style={{fontSize:'15px', marginBottom:'1px', marginTop:'1px', marginLeft:'50px', marginRight:'50px', textAlign:'left'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <div className='header' style={{fontSize:'20px', textAlign:'left', marginLeft:'50px'}}>
                        Contact Me
                    </div>
                    <div style={{display:'flex', textAlign:'left', marginLeft:'50px'}}>
                        <div>
                            <img src={twitter} style={{width:'40px', marginRight:'10px'}} alt='pic'/>
                        </div>
                        <div className='headerright' style={{fontSize:'15px', marginTop:'14px'}}>
                            /RaedMajeed
                        </div>
                    </div>
                    <div style={{display:'flex', textAlign:'left', marginLeft:'50px' }}>
                        <div>
                            <img src={instagram} style={{width:'40px', marginRight:'10px'}} alt='pic'/>
                        </div>
                        <div className='headerright' style={{fontSize:'15px', marginTop:'14px'}}>
                            /RaedMajeed
                        </div>
                    </div>
                    <div style={{display:'flex', textAlign:'left', marginLeft:'50px'}}>
                        <div>
                            <img src={facebook} style={{width:'38px', marginRight:'10px'}} alt='pic'/>
                        </div>
                        <div className='headerright' style={{fontSize:'15px', marginTop:'14px'}}>
                            /RaedMajeed
                        </div>
                    </div>
                    <div style={{display:'flex', textAlign:'left', marginLeft:'50px'}}>
                        <div>
                            <img src={linkedin} style={{width:'40px', marginRight:'10px'}} alt='pic'/>
                        </div>
                        <div className='headerright' style={{fontSize:'15px', marginTop:'14px'}}>
                            /RaedMajeed
                        </div>
                    </div>
                    <div style={{display:'flex', textAlign:'left', marginLeft:'50px'}}>
                        <div>
                            <img src={pinterest} style={{width:'40px', marginRight:'10px'}} alt='pic'/>
                        </div>
                        <div className='headerright' style={{fontSize:'15px', marginTop:'14px'}}>
                            /RaedMajeed
                        </div>
                    </div>
                </div>
                <div className='homeunderright' style={{flexBasis: '70%', margin:'20px'}}>
                        hs
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default BlogPost;