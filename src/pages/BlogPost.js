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

const BlogPost = ({user,setUser,currentBlog}) => {
    const [blogContent,setBlogContent] = useState("");
    const [blogContentContributers,setBlogContentContributers] = useState("");
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
            setBlogContentContributers(body[0]);
            
        }
        
        
      
    }
    const fetchData = async () => {
       
        const res = await fetch(`/api/get-one-blog`, {
            method: 'post',
            body: JSON.stringify({currentBlog}),
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
            <div>
                <NavBar user={user} setUser={setUser}/>
            </div>
            <div className="BlogPost">
                <div className='blogpostleft' style={{flexBasis: '30%'}}>
                    <div className='authorHeader' style={{marginTop:'20px', textAlign:'left', marginLeft:'60px'}}>
                        Author Information
                    </div>
                    <div style={{display:'flex', marginLeft:'60px'}}>
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
                    <div className='authorHeader' style={{fontSize:'20px', marginTop:'10px', textAlign:'left', marginLeft:'60px'}}>
                        About Me
                    </div>
                    <div className='headerright' style={{fontSize:'15px', marginBottom:'1px', marginTop:'1px', marginLeft:'60px', marginRight:'50px', textAlign:'left'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <div className='authorHeader' style={{fontSize:'20px', textAlign:'left', marginLeft:'60px'}}>
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
                                {(blogContent === "") ? `No data available !`: calculateDate()}
                                </div>
                                <div className="blogPostHeadding" style={{textAlign: 'left'}}>
                                    {(blogContent === "") ? `No data available !`: blogContent["Blog_title"]}
                                </div>
                            </div>
                            <div style={{display:'flex'}}>
                                <img src={(blogContent === "") ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBU2RkcXhDDRZw4IFAWkFwiPu_FisnD7B5Hg&usqp=CAU' : blogContent["Blog_img"]} style={{width:'500px', marginRight:'10px'}} alt='pic'/>
                            </div>
                        </div>
                        <div style={{margin:'20px', marginTop:'40px'}}>
                            {(blogContent === "") ? `No data available !`: blogContent["Blog_content"]}
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