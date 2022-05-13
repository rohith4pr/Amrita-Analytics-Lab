import NavBar from '../NavBar';
import { useEffect } from 'react';
import './account.css';
import man from '../man.svg';
import BlogPage from './BlogPage';

const AccountPage = ({user,setUser}) => {

    useEffect(() => {
        document.title = "Account"
     }, []);

     const blogContents = [
        {"blog-title":"Blog 1", "blog-content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {"blog-title":"Blog 2", "blog-content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {"blog-title":"Blog 3", "blog-content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
    ]

    const titleContents = [
        {"title-content":"Phone",           "title-info":"7902498141"},
        {"title-content":"Email",           "title-info":"raedam786@gmail.com"},
        {"title-content":"Gender",          "title-info":"Male"},
        {"title-content":"Linkdin",         "title-info":"/raed_majeed"},
        {"title-content":"Facebook",         "title-info":"/raed_majeed"},
        {"title-content":"Instagram",       "title-info":"/raed_majeed"},
        {"title-content":"Twitter",       "title-info":"/raed_majeed"}
        
    ]

    const blog_Content=[
        {
            "blog-content2":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod quis viverra nibh cras pulvinar. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Ut eu sem integer vitae justo eget magna fermentum iaculis. Elementum pulvinar etiam non quam "
        }
    ]

    const InfoPage = ({title_info,details}) =>{

        return(
            <div style={{display:'flex'}}>
                <div style={{width:'18%'}} className="BlogRecentHeaderrr"> 
                    {title_info}
                </div>
                <div>
                    :
                </div>
                <div  style={{marginLeft:'50px'}} className="BlogRecentHeaderr">
                    {details}
                </div>
                <div>
                    {/* Edit button here */}
                </div>
            </div>
        )
    }

    const BlogPage = ({blog_content}) =>{
        return(
            <div style={{marginBottom:'30px'}} className="blog-text">
                {blog_content}
            </div>
        )
    }
    const RecentPostInfo = ({content,title}) =>{

        return(
            <div className="RecentBlogs">
                <div style={{fontSize: '18px', fontFamily:'montserrat'}}  >
                    <h3>{title}:</h3>
                </div>
                <div style={{marginRight: '60px'}}>
                    {content}
                </div>
                <div style={{fontSize: '18px',alignItems:'center',fontWeight:'bold'}} className="BlogRecentHeaderr">
                    Read more 
                </div>
                <div style={{fontSize: '18px',alignItems:'center',fontWeight:'bold'}} className="BlogRecentHeaderr">
                    Edit
                </div>
            </div>
        )
    }

    return(
        <div> {/* div containing nav bar and the bottom body */}
            <div>
                <NavBar user={user} setUser={setUser}/>
            </div>
            <div style={{display:'flex',flexDirection:'column'}} className="Home"> {/* dividing the body into two */}
                <div style={{display:'flex'}} className="upper-body-container"> {/* the upper part  */}
                    <div style={{dsiplay:'flex',flexDirection:'column'}} className="profile-pic-container"> {/* the upper part with profile pic */}
                            <div style={{display:'flex', justifyContent:'center'}} className="profile-pic"> {/* profile pic */}
                                    <div> {/* photo */}
                                        <img src={man} style={{width:'150px', borderRadius:'70px',borderColor:"red",borderWidth:'30px'}}></img>
                                    </div>
                                    <div>  {/* photo edit button */}

                                    </div>
                            </div>
                            <div> {/* profile name */}
                                    <div> {/* name */}
                                        <h3 style={{display:'flex',justifyContent:'center',fontFamily:'montserrat'}}>Sanjay cp</h3>
                                    </div>
                                    <div>  {/* name edit button */}

                                    </div>
                            </div>
                    </div> 
                    <div style={{display:'flex',flexDirection:'column'}} className="about-container"> {/* the upper part with about me */}
                            <div> {/* about me */}
                                <h2 style={{fontSiza:'30px'}}>About me</h2>
                            </div>
                            {blog_Content.map((blog) => <BlogPage blog_content={blog["blog-content2"]} />)}
                            {titleContents.map((blog) => <InfoPage title_info={blog["title-content"]} details={blog["title-info"]}/>)}
                    </div> 
                </div>
                <div style={{display:'flex',flexDirection:'column'}} className="lower-body-container"> {/* the part with blogs */}
                    <div>
                            <h2 style={{paddingLeft:'75px',paddingTop:'40px'}}  className='about-me'>Your Blogs</h2>
                    </div>
                    {blogContents.map((blog) => <RecentPostInfo content={blog["blog-content"]} title={blog["blog-title"]}/>)}
                </div>
            </div>
    </div>
    )
}

export default AccountPage;
   