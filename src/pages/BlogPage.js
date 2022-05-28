import Footer from "../Footer";
import NavBar from "../NavBar";
import Readmore from "../Readmore.svg";
import { useEffect,useState } from "react";
import { NavLink } from 'react-router-dom';

const BlogPage = ({user,setUser,currentBlog,setCurrentBlog}) => {

    const [blogContent,setBlogContent] = useState("");
    const [blogContentContributers,setBlogContentContributers] = useState("");
    const fetchData = async () => {
       
        const res = await fetch(`/api/get-all-blogs`, {
            method: 'get',
            body: JSON.stringify(),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const body = await res.json();
        var propertyNames = Object.keys(body);
        if (propertyNames.length !== 0){
            setBlogContent(body);
        }
        
        
      
    }

    const fetchContributers = async () => {
       
        const res = await fetch(`/api/get-all-contributers`, {
            method: 'get',
            body: JSON.stringify(),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const body = await res.json();
        var propertyNames = Object.keys(body);
        if (propertyNames.length !== 0){
            setBlogContentContributers(body);
        }
        
        
      
    }
    

    useEffect( () => {
        document.title = "Blogs"
        fetchData()
        fetchContributers()
     }, []);

    // const blogContents = [
    //         {"blog-title":"Blog 1", "blog-content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    //         {"blog-title":"Blog 2", "blog-content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    //         {"blog-title":"Blog 3", "blog-content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
    //     ]
    
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

    const RecentPostInfo = ({content,title,id}) =>{

        return(
            <div className="RecentBlogs">
                <div style={{fontSize: '25px'}} className="BlogRecentHeader">
                    {title}:
                </div>
                <div style={{marginRight: '60px'}}>
                    {content.substring(0,50)}
                </div>BlogPost
                <NavLink onClick={() => setCurrentBlog(id)}  style={{textDecoration: '18px'}}  to={`/blogs/blogpost/${title}/blogid${id}`}> 
                <div style={{fontSize: '18px',alignItems:'center'}} className="BlogRecentHeader" >
                    Read more 
                    <img alt="read more" src={Readmore}></img>
                </div>
                </NavLink>
            </div>
        )
    }

    const RecentPostExpandInfo = ({content,title,imgsrc,id}) =>{

        return(
            <div className="BlogContentinside">
                <div className="picturesBlogs">
                    <img src={imgsrc} alt="pic"></img>
                </div>
                <div style={{marginTop : '30px'}} className="BlogRecentHeader">
                    {title}:
                </div>
                <div >
                    {content.substring(0,100)}
                </div>
                <NavLink onClick={() => setCurrentBlog(id)}  style={{textDecoration: '18px'}}  to={`/blogs/blogpost/${title}/blogid${id}`}> 
                <div style={{fontSize: '18px',alignItems:'center',paddingBottom:'100px'}} className="BlogRecentHeader" >
                    Read more 
                    <img alt="read more" src={Readmore}></img>
                </div>
                </NavLink>
            </div>
        )
    }

    const ContributorsInfo = ({Author_id,count,time,Firstname,Secondname}) =>{
        const month = parseInt(time.substring(5,7));
        const date = new Date(time.substring(0,4),month-1,time.substring(8,10));
        const dateCurrent  = new Date();
        const diffTime = Math.abs(dateCurrent - date);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
        const fullName = Firstname+ " "+Secondname;

        return(
            <div  >
                <div style={{fontSize: '18px',marginBottom:'0px',lineHeight:'20px'}} className="BlogRecentHeader">
                    · {fullName}
                </div>
                <div style={{marginLeft:'10px',marginTop:'0px',fontSize: '15px',fontFamily: 'Poppins',fontStyle: 'normal'}}>
                    {(diffDays === 0) ? `Today` : `${diffDays}d ago`} · {count} blogs
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
                        {(blogContent !=="") && blogContent.map((blog) => <RecentPostInfo key={blog["id"]} id={blog["id"]} content={blog["Blog_content"]} title={blog["Blog_title"]}/>)}
                        
                    </div>
                    <div className="blogSection2" >
                        {(user !=="") ? (
                            <AddBlog/>
                        ) :(null)}
                        
                        { (blogContent !=="") && blogContent.map((blog) => <RecentPostExpandInfo key={blog["id"]} id={blog["id"]} content={blog["Blog_content"]} title={blog["Blog_title"]}  imgsrc={ "/api/blog-images/"+blog["Blog_img"]}/>)}
                    </div>
                    <div className="blogSection3" >
                        <div className="Contributors">
                            <div  className="BlogRecentHeader">
                                Contributors
                                
                            </div>
                            { (blogContentContributers !=="") && blogContentContributers.map((blog) => <ContributorsInfo key={blog["id"]} Author_id={blog["Author_id"]} Firstname={blog["First_name"]} Secondname={blog["Second_name"]} count={blog["count"]}  time={blog["time"]}/>)}
                            

                        </div>
                        
                    </div>
                    
                </div>
            </div>
            <Footer style={{background: '#FFFFFF'}}/>
        </div>
       
    );
}
    
export default BlogPage;