import Footer from "../Footer";
import NavBar from "../NavBar";
import Readmore from "../Readmore.svg";
import Blogpic from "../blogrecentpic.svg"

const BlogPage = () => {
    const RecentPostInfo = () =>{

        return(
            <div className="RecentBlogs">
                <div style={{fontSize: '18px'}} className="BlogRecentHeader">
                    Blog Post 1:
                </div>
                <div style={{marginRight: '60px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <div style={{fontSize: '18px',alignItems:'center'}} className="BlogRecentHeader">
                    Read more 
                    <img alt="read more" src={Readmore}></img>
                </div>
            </div>
        )
    }

    const RecentPostExpandInfo = () =>{

        return(
            <div className="RecentBlogs">
                <img alt="pic" src={Blogpic}></img>
                <div style={{marginTop : '40px'}} className="BlogRecentHeader">
                    Blog Post 1:
                </div>
                <div >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <div style={{fontSize: '18px',alignItems:'center'}} className="BlogRecentHeader">
                    Read more 
                    <img alt="read more" src={Readmore}></img>
                </div>
            </div>
        )
    }

    const ContributorsInfo = () =>{

        return(
            <div  >
                <div style={{fontSize: '18px',marginBottom:'0px',lineHeight:'20px'}} className="BlogRecentHeader">
                    · Raed Majeed
                </div>
                <div style={{marginLeft:'10px',marginTop:'0px',fontSize: '15px',fontFamily: 'Poppins',fontStyle: 'normal'}}>
                    1d ago · 34 blogs
                </div>
                
            </div>
        )
    }   
    return(
    
        <div>
            <NavBar />
             <div className="Blog">
                <div className="BlogHeader">
                    Blog
                </div>
                <div className="BlogContent">
                    <div style={{flexBasis : "30%",borderRight: '2px solid #4d4d4d'}}>
                        <div style={{marginLeft : '80px',marginTop : '40px'}} className="BlogRecentHeader">
                            Recents
                        </div>
                        <RecentPostInfo/>
                        <RecentPostInfo/>
                        <RecentPostInfo/>
                    </div>
                    <div style={{flexBasis : "40%",borderRight: '2px solid #4d4d4d'}}>
                        <RecentPostExpandInfo/>
                        <RecentPostExpandInfo/>
                    </div>
                    <div style={{flexBasis : "30%"}}>
                        <div className="Contributors">
                            <div  className="BlogRecentHeader">
                                Contributors
                                
                            </div>
                            <ContributorsInfo/>
                            <ContributorsInfo/>
                            <ContributorsInfo/>
                            <ContributorsInfo/>

                        </div>
                        
                    </div>
                    
                </div>
            </div>
            <Footer style={{background: '#FFFFFF'}}/>
        </div>
       
    );
}
    
export default BlogPage;