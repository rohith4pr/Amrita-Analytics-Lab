import NavBar from '../NavBar';
import { useEffect } from 'react';
import './account.css';
import man from '../man.svg';
// import BlogPage from './BlogPage';

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
                <div> 
                    {title_info}:
                </div>
                <div  style={{marginLeft:'150px'}}>
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
            <div style={{marginBottom:'30px'}}>
                {blog_content}
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
                    {content}
                </div>
                <div style={{fontSize: '18px',alignItems:'center'}} className="BlogRecentHeader">
                    Read more 
                </div>
                <div style={{fontSize: '18px',alignItems:'center'}} className="BlogRecentHeader">
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
                            <div> {/* profile pic */}
                                    <div> {/* photo */}
                                        <img alt="user" src={man} style={{width:'150px', borderRadius:'70px'}}></img>
                                    </div>
                                    <div>  {/* photo edit button */}

                                    </div>
                            </div>
                            <div style={{diplay:'flex'}}> {/* profile name */}
                                    <div> {/* name */}
                                        <p>Sanjay c</p>
                                    </div>
                                    <div>  {/* name edit button */}

                                    </div>
                            </div>
                    </div> 
                    <div style={{display:'flex',flexDirection:'column'}} className="about-container"> {/* the upper part with about me */}
                            <div> {/* about me */}
                                <h2>About me</h2>
                            </div>
                            {blog_Content.map((blog) => <BlogPage blog_content={blog["blog-content2"]} />)}
                            {titleContents.map((blog) => <InfoPage title_info={blog["title-content"]} details={blog["title-info"]}/>)}
                    </div> 
                </div>
                <div style={{display:'flex',flexDirection:'column'}} className="lower-body-container"> {/* the part with blogs */}
                    <div>
                            <h2 style={{paddingLeft:'75px',paddingTop:'40px'}}>Your Blogs</h2>
                    </div>
                    {blogContents.map((blog) => <RecentPostInfo content={blog["blog-content"]} title={blog["blog-title"]}/>)}
                </div>
            </div>
    </div>
    )
}

export default AccountPage;
   