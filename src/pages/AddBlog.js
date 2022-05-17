import { useEffect, useState } from "react";
import NavBar from "../NavBar";
import {  useNavigate } from 'react-router-dom';

const AddBlog = ({user,setUser}) => {

    let navigate = useNavigate();
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    if(user === ""){
        navigate("/blogs");
    }

    const picLink= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj1cbtHrCxTGHJ4la-6fBeY670i0Drg92lUg&usqp=CAU";

    const submitBlog = async () =>{
        const result = await fetch(`/api/add-blog`, {
            method: 'post',
            body: JSON.stringify({ user, title, content, picLink}),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        navigate("/blogs");
        console.log(result.json());
        return;
    }
    useEffect(() => {
        document.title = "Add Blog"
     }, []);
     return(
        <div>
            <NavBar className="sidebyside" user={user} setUser={setUser}/>
            <div style={{display:'flex', flexDirection:'column',backgroundColor:'white', paddingTop:'100px',marginLeft:'250px'}}>
                <div className="addblogheading" style={{marginBottom:'50px', marginTop:"20px"}}>
                    NEW BLOG
                </div>
                <div style={{display:'flex'}}>
                    <div style={{display:'flex', marginBottom:'30px'}}>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="addblogtitle" placeholder="Title" name="title" id='title' required/>
                    </div>
                    <div style={{display:'flex', marginLeft:'210px'}}>
                        <div className="AttachFile" style={{display:'flex', flexDirection:'column', alignItems:'center', background:"#F2F2F2", borderRadius:'10px', width: "215px", justifyContent: 'center'}}>
                            Attach File
                        </div>
                        
                    </div>
                </div>
                <div>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} type="textarea" className="addblogcontent" placeholder="Write here.." name="content" id='content' required />
                </div>
                <div onClick={submitBlog} className="SubmitButton" style={{marginLeft:'810px', display:'flex', flexDirection:'column', alignItems:'center', background:"#F2F2F2", width: "215px", justifyContent: 'center', borderRadius:'10px'}}>
                    <div>
                        Submit
                    </div>
                </div>
            </div>
        </div>
     )
}

export default AddBlog;
   