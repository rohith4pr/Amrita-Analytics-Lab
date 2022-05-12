import Footer from "../Footer";
import NavBar from "../NavBar";
import Readmore from "../Readmore.svg";
import Blogpic from "../blogrecentpic.svg"
import { useEffect,useState, useCallback } from "react";
import { NavLink } from 'react-router-dom';

const BlogPage = ({user,setUser}) => {

    const [blogContent,setBlogContent] = useState([]);
    const fetchData = async () => {
        const res = await fetch(`/api/get-all-blogs`, {
            method: 'get',
            body: JSON.stringify(),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const body = await res.json();
        setBlogContent(body);
      }
    

    useEffect( () => {
        document.title = "Blogs"
        fetchData()
     }, []);

    const blogContents = [
            {"blog-title":"Blog 1", "blog-content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
            {"blog-title":"Blog 2", "blog-content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
            {"blog-title":"Blog 3", "blog-content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        ]
    
    const AddBlog = () => {
        return(
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}} >
                    {/* <div style={{paddingLeft:"20px"}} className="BlogRecentHeader">
                        Create New Blog
                    </div>
                    <div>
                        <textarea 
                            style={{  
                                        width:" 85%",
                                        backgroundColor:" #fff",
                                        borderRadius:" 31px",
                                        marginBottom:" 16px",
                                        minHeight:" 169px",
                                        padding:" 20px",
                                        margin:"20px"
                                   }} 
                            name="blog" placeholder="Start Typing"></textarea>
                    </div> */}
                    <div className="createnewblog">
                        <div className="createnewblogtext">
                            <NavLink style={{ textDecoration:'inherit', color:'inherit' }}  to="/addblog"> Create New Blog </NavLink>
                        </div>
                    </div>

            </div>
        )
    }

    const RecentPostInfo = ({content,title}) =>{

        return(
            <div className="RecentBlogs">
                <div style={{fontSize: '18px'}} className="BlogRecentHeader">
                    {title}:
                </div>
                <div style={{marginRight: '60px'}}>
                    {content.substring(0,100)}
                </div>
                <div style={{fontSize: '18px',alignItems:'center'}} className="BlogRecentHeader">
                    Read more 
                    <img alt="read more" src={Readmore}></img>
                </div>
            </div>
        )
    }

    const RecentPostExpandInfo = ({content,title,imgsrc}) =>{

        return(
            <div className="RecentBlogs">
                <div className="picturesBlogs">
                    <img alt="pic"  src={imgsrc}></img>
                </div>
                <div style={{marginTop : '40px'}} className="BlogRecentHeader">
                    {title}:
                </div>
                <div >
                    {content.substring(0,100)}
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
            <NavBar user={user} setUser={setUser}/>
             <div className="Blog">
                <div className="BlogHeader">
                    Blog
                </div>
                <div className="BlogContent">
                    <div className="blogSection1" >
                        <div style={{marginTop : '40px'}} className="BlogRecentHeaderMain">
                            Recents
                        </div>
                        {blogContent && blogContent.map((blog) => <RecentPostInfo content={blog["Blog_content"]} title={blog["Blog_title"]}/>)}
                        
                    </div>
                    <div className="blogSection2" >
                        {(user !=="") ? (
                            <AddBlog/>
                        ) :(null)}
                        
                        {blogContent && blogContent.map((blog) => <RecentPostExpandInfo content={blog["Blog_content"]} title={blog["Blog_title"]}  imgsrc={blog["Blog_img"]}/>)}
                    </div>
                    <div className="blogSection3" >
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