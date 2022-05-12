import Footer from "../Footer";
import NavBar from "../NavBar"
import propic from "../propic.svg";
import twitter from '../Twitter Squared.svg';
import instagram from "../Instagram.svg";
import facebook from "../Facebook.svg";
import linkedin from "../LinkedIn.svg";
import pinterest from "../Pinterest.svg";
import computer from "../computer.svg";
import { useEffect } from "react";

const BlogPost = ({user,setUser}) => {
    useEffect(() => {
        document.title = "BlogPost"
     }, []);
    return(
        <div className="App">
            <div>
                <NavBar user={user} setUser={setUser}/>
            </div>
            <div className="BlogPost">
                <div className='blogpostleft' style={{flexBasis: '30%'}}>
                    <div className='header' style={{fontSize:'20px', marginTop:'20px', textAlign:'left', marginLeft:'60px'}}>
                        Author Information
                    </div>
                    <div style={{display:'flex', marginLeft:'60px'}}>
                        <div>
                            <img src={propic} style={{width:'55px', marginRight:'10px'}} alt='pic'/>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', marginLeft:'20px'}}>
                            <div>
                                Raed Majeed
                            </div>
                            <div>
                                23 blogs
                            </div>
                        </div>
                    </div>
                    <div className='header' style={{fontSize:'20px', marginTop:'10px', textAlign:'left', marginLeft:'60px'}}>
                        About Me
                    </div>
                    <div className='headerright' style={{fontSize:'15px', marginBottom:'1px', marginTop:'1px', marginLeft:'60px', marginRight:'50px', textAlign:'left'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <div className='header' style={{fontSize:'20px', textAlign:'left', marginLeft:'60px'}}>
                        Contact Me
                    </div>
                    <div style={{display: "flex", justifyContent: 'left', flexDirection: 'column'}}>
                        <div style={{display:'flex', textAlign:'left', marginLeft:'60px', alignItems: 'center'}}>
                            <div>
                                <img src={twitter} style={{width:'40px', marginRight:'10px'}} alt='pic'/>
                            </div>
                            <div className='headerright' style={{fontSize:'15px'}}>
                                /RaedMajeed
                            </div>
                        </div>
                        <div style={{display:'flex', textAlign:'left', marginLeft:'60px', alignItems: 'center'}}>
                            <div>
                                <img src={instagram} style={{width:'40px', marginRight:'10px'}} alt='pic'/>
                            </div>
                            <div className='headerright' style={{fontSize:'15px'}}>
                                /RaedMajeed
                            </div>
                        </div>
                        <div style={{display:'flex', textAlign:'left', marginLeft:'60px', alignItems: 'center'}}>
                            <div>
                                <img src={facebook} style={{width:'30px', marginRight:'10px', padding: '5px'}} alt='pic'/>
                            </div>
                            <div className='headerright' style={{fontSize:'15px'}}>
                                /RaedMajeed
                            </div>
                        </div>
                        <div style={{display:'flex', textAlign:'left', marginLeft:'60px', alignItems: 'center'}}>
                            <div>
                                <img src={linkedin} style={{width:'40px', marginRight:'10px'}} alt='pic'/>
                            </div>
                            <div className='headerright' style={{fontSize:'15px'}}>
                                /RaedMajeed
                            </div>
                        </div>
                        <div style={{display:'flex', textAlign:'left', marginLeft:'60px', alignItems: 'center'}}>
                            <div>
                                <img src={pinterest} style={{width:'40px', marginRight:'10px'}} alt='pic'/>
                            </div>
                            <div className='headerright' style={{fontSize:'15px'}}>
                                /RaedMajeed
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='blogpostright' style={{flexBasis: '70%', margin:'20px'}}>
                        <div className="blogResponsive" style={{marginTop:'30px'}}>
                            <div className="blogpostrightTopText" style={{display:'flex', flexDirection :'column', justifyContent: 'left', flexBasis: '40%', paddingLeft: '20px'}}>
                                <div>
                                    11 December 2021
                                </div>
                                <div className="header" style={{textAlign: 'left'}}>
                                    Blog Post 1
                                </div>
                            </div>
                            <div style={{display:'flex'}}>
                                <img src={computer} style={{width:'500px', marginRight:'10px'}} alt='pic'/>
                            </div>
                        </div>
                        <div style={{margin:'20px', marginTop:'40px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod quis viverra nibh cras pulvinar. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Ut eu sem integer vitae justo eget magna fermentum iaculis. Elementum pulvinar etiam non quam lacus suspendisse faucibus. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Proin libero nunc consequat interdum varius sit amet mattis vulputate. Nunc aliquet bibendum enim facilisis. Habitant morbi tristique senectus et netus et malesuada. Ut sem nulla pharetra diam. Malesuada fames ac turpis egestas integer. Amet dictum sit amet justo donec enim diam vulputate. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Risus quis varius quam quisque id diam vel quam. Lectus magna fringilla urna porttitor. Enim facilisis gravida neque convallis. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Imperdiet dui accumsan sit amet nulla facilisi morbi. Fames ac turpis egestas maecenas pharetra convallis. Aliquet bibendum enim facilisis gravida neque convallis.

In dictum non consectetur a. Sit amet justo donec enim diam vulputate ut pharetra. Non pulvinar neque laoreet suspendisse interdum consectetur. Tincidunt eget nullam non nisi est. Integer malesuada nunc vel risus commodo viverra maecenas. Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Morbi tempus iaculis urna id volutpat lacus laoreet. Lectus proin nibh nisl condimentum id venenatis a condimentum. At elementum eu facilisis sed odio. Risus viverra adipiscing at in tellus integer feugiat. Commodo quis imperdiet massa tincidunt. Facilisi etiam dignissim diam quis enim. Dolor purus non enim praesent elementum facilisis leo. Sed arcu non odio euismod. Lobortis feugiat vivamus at augue eget arcu dictum. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Sed odio morbi quis commodo odio aenean.

Fringilla ut morbi tincidunt augue. Lectus quam id leo in vitae turpis massa sed. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Euismod nisi porta lorem mollis aliquam. Et molestie ac feugiat sed. Erat nam at lectus urna duis convallis convallis. In pellentesque massa placerat duis ultricies lacus sed. In cursus turpis massa tincidunt dui ut. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Egestas congue quisque egestas diam in arcu. Interdum posuere lorem ipsum dolor sit. Posuere lorem ipsum dolor sit amet consectetur.

Nam aliquam sem et tortor consequat id porta. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. In mollis nunc sed id semper risus. Id leo in vitae turpis massa sed elementum tempus egestas. Sit amet cursus sit amet dictum sit amet. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Mus mauris vitae ultricies leo integer malesuada nunc vel. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Interdum velit laoreet id donec ultrices. Eu feugiat pretium nibh ipsum consequat nisl vel.

Odio euismod lacinia at quis risus sed vulputate. Ante in nibh mauris cursus mattis molestie. Nunc aliquet bibendum enim facilisis gravida neque convallis. Lacus sed viverra tellus in hac habitasse. Pulvinar etiam non quam lacus suspendisse faucibus. Tincidunt praesent semper feugiat nibh sed pulvinar. Id nibh tortor id aliquet lectus proin nibh. Morbi tristique senectus et netus et malesuada. Id diam maecenas ultricies mi eget mauris. Eu nisl nunc mi ipsum. Proin libero nunc consequat interdum varius. Imperdiet proin fermentum leo vel. Ac placerat vestibulum lectus mauris ultrices eros in. Nec ultrices dui sapien eget mi. Dignissim enim sit amet venenatis urna. Euismod quis viverra nibh cras pulvinar mattis. A condimentum vitae sapien pellentesque habitant. Diam maecenas sed enim ut sem viverra. Fringilla urna porttitor rhoncus dolor purus non enim. Donec enim diam vulputate ut pharetra sit amet aliquam.
                            </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default BlogPost;