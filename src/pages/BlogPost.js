import Footer from "../Footer";
import NavBar from "../NavBar"
import propic from "../propic.svg";
import twitter from '../Twitter Squared.svg';
import instagram from "../Instagram.svg";
import facebook from "../Facebook.svg";
import linkedin from "../LinkedIn.svg";
import pinterest from "../Pinterest.svg";
// import computer from "../computer.svg";
import { useEffect, useState } from "react";
import {  useNavigate } from 'react-router-dom';

const BlogPost = ({user,setUser,currentBlog}) => {
    const [blogContent,setBlogContent] = useState("");
    const [blogContentContributers,setBlogContentContributers] = useState("");
    let navigate = useNavigate();

    // const timeout = async(ms) =>{
    //     return new Promise((resolve) => setTimeout(resolve,ms));
    // }

    const fetchDataContributer = async (authorId) => {
       
        
        const res = await fetch(`/api/get-one-author`, {
            method: 'post',
            body: JSON.stringify({authorId}),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const body = await res.json();
        var propertyNames = Object.keys(body);
        if (propertyNames.length !== 0 && blogContentContributers === ""){
            const ssocial = JSON.parse(body[0]["Social"])
            body[0]["Social"] = ssocial;
            setBlogContentContributers(body[0]);
            //console.log(body[0]["Social"].twitter);
        }
        
        
      
    }
    const fetchData = async () => {

        const ssid = window.location.pathname.substring(16).search("/");
        const blogId = window.location.pathname.substring(23+ssid);
        //console.log(blogId);
       
        const res = await fetch(`/api/get-one-blog`, {
            method: 'post',
            body: JSON.stringify({"currentBlog":blogId}),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const body = await res.json();
        var propertyNames = Object.keys(body);
        
        if (propertyNames.length !== 0 && blogContent === ""){
            setBlogContent(body[0]);
            
            // eslint-disable-next-line
            fetchDataContributer(body[0]["Author_id"]);
        }
        //await timeout(1000);
        if (propertyNames.length === 0){
            navigate("/notfound");
        }
        
    }
    
    useEffect(() => {
        document.title = "BlogPost"
        fetchData()
     }, // eslint-disable-next-line
     []);

     const calculateDate = () =>{

        const time = blogContent["Blog_date"];
        const month = parseInt(time.substring(5,7));
        const date = new Date(time.substring(0,4),month-1,time.substring(8,10));
        const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        const currMonth = months[date.getMonth()]; 
        return(`${date.getDate()} ${currMonth} ${date.getFullYear()}`);
     }
     
    return(
        <div className="App">
            <style>
                {`#p-wrap {
                white-space: pre-line;
                }`}
            </style>
            <div>
                <NavBar user={user} setUser={setUser}/>
            </div>
            <div className="BlogPost">
                <div className='blogpostleft' style={{flexBasis: '30%'}}>
                    <div className='authorHeader1' >
                        Author Information
                    </div>
                    <div className="authorBlogPostInfo">
                        <div>
                            <img src={propic} style={{width:'55px', marginRight:'10px'}} alt='pic'/>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', marginLeft:'20px'}}>
                            <div>
                                {blogContentContributers["First_name"]+" "+blogContentContributers["Second_name"]}
                            </div>
                            <div>
                                {blogContentContributers["count"]} blogs
                            </div>
                        </div>
                    </div>
                    <div className='authorHeader1' style={{marginTop:'10px'}}>
                        About Me
                    </div>
                    <div className='headerright1'>
                    {(blogContentContributers === "") ? `No data available`: blogContentContributers["Personal_info"]}
                    </div>
                    <div className='authorHeader1'>
                        Contact Me
                    </div>
                    <div style={{display: "flex", justifyContent: 'left', flexDirection: 'column'}}>
                        <div className='authorHeader1' style={{display:'flex', textAlign:'left', alignItems: 'center'}}>
                            {(blogContentContributers === "") ? ``: (blogContentContributers["Social"].twitter === "")? ``:
                            (<>
                            <div>
                                <img src={twitter} style={{width:'40px', marginRight:'10px'}} alt='pic'/>
                            </div>
                            <div className='headerright' style={{fontSize:'15px'}}>
                                {blogContentContributers["Social"].twitter}
                            </div></>)}
                        </div>
                        <div style={{display:'flex', textAlign:'left', marginLeft:'60px', alignItems: 'center'}}>
                        {(blogContentContributers === "") ? ``: (blogContentContributers["Social"].instagram === "")? ``:
                            (<>
                            <div>
                                <img src={instagram} style={{width:'40px', marginRight:'10px'}} alt='pic'/>
                            </div>
                            <div className='headerright' style={{fontSize:'15px'}}>
                                {blogContentContributers["Social"].instagram}
                            </div></>)}
                            
                        </div>
                        <div style={{display:'flex', textAlign:'left', marginLeft:'60px', alignItems: 'center'}}>
                            {(blogContentContributers === "") ? ``: (blogContentContributers["Social"].facebook === "")? ``:
                            (<>
                            <div>
                                <img src={facebook} style={{width:'40px', marginRight:'10px'}} alt='pic'/>
                            </div>
                            <div className='headerright' style={{fontSize:'15px'}}>
                                {blogContentContributers["Social"].facebook}
                            </div></>)}
                        </div>
                        <div style={{display:'flex', textAlign:'left', marginLeft:'60px', alignItems: 'center'}}>
                        {(blogContentContributers === "") ? ``: (blogContentContributers["Social"].facebook === "")? ``:
                            (<>
                            <div>
                                <img src={linkedin} style={{width:'40px', marginRight:'10px'}} alt='pic'/>
                            </div>
                            <div className='headerright' style={{fontSize:'15px'}}>
                                {blogContentContributers["Social"].linkedin}
                            </div></>)}
                        </div>
                        <div style={{display:'flex', textAlign:'left', marginLeft:'60px', alignItems: 'center'}}>
                            {(blogContentContributers === "") ? ``: (blogContentContributers["Social"].facebook === "")? ``:
                            (<>
                            <div>
                                <img src={pinterest} style={{width:'40px', marginRight:'10px'}} alt='pic'/>
                            </div>
                            <div className='headerright' style={{fontSize:'15px'}}>
                                {blogContentContributers["Social"].pinterest}
                            </div></>)}
                        </div>
                    </div>
                    
                </div>
                <div className='blogpostright' style={{flexBasis: '70%', margin:'20px'}}>
                        <div className="blogResponsive" style={{marginTop:'30px'}}>
                            <div className="blogpostrightTopText" style={{display:'flex', flexDirection :'column',  flexBasis: '40%'}}>
                                <div>
                                {(blogContent === "") ? `No data available !`: calculateDate()}
                                </div>
                                <div className="blogPostHeadding" style={{textAlign: 'left'}}>
                                    {(blogContent === "") ? `No data available !`: blogContent["Blog_title"]}
                                </div>
                            </div>
                            <div className="imgBlogPost" style={{display:'flex',flexGrow : '1'}}>
                                <img   src={(blogContent === "") ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBU2RkcXhDDRZw4IFAWkFwiPu_FisnD7B5Hg&usqp=CAU' : "/api/blog-images/"+blogContent["Blog_img"]}  alt='pic'/>
                            </div>
                        </div>
                        <div style={{margin:'0px', marginTop:'40px'}}>
                            <pre style={{whiteSpace: "pre-wrap",fontFamily:"inherit"}}>
                                {(blogContent === "") ? `No data available !`: blogContent["Blog_content"]}
                            </pre>
                            
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