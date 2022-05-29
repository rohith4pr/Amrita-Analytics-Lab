import { useEffect, useState } from "react";
import NavBar from "../NavBar";
import {  useNavigate } from 'react-router-dom';

const AddBlog = ({user,setUser}) => {

    let navigate = useNavigate();
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    //const [picLink,setPicLink] = useState("");
    const [fileUpload,setFileUpload] = useState("");
    const[flag,setFlag] = useState(0);
    const[clicked,setClicked] = useState(false);
    if(user === ""){
        navigate("/blogs");
    }
    
    const submitBlog = async () =>{

        
            
        if(title === ""){
            setFlag(1);
            return;
        }

        if(fileUpload === ""  || fileUpload === undefined){
            setFlag(2);
            return;
        }
    
        if(content === ""){
            setFlag(3);
            return;
        }
    
        setClicked(true);

        const formData = new FormData();
        
		formData.append('file', fileUpload);
        const result = await fetch(`/api/add-blog-pic`, {
            method: 'post',
            body: formData,
            
        });
        const body = await result.json();
        var propertyNames = Object.keys(body);
        if (propertyNames.length !== 0){
            
            console.log(body["res"]);
            submitBlogFinal(body["res"]);
            
        }
        
    }
    
    const submitBlogFinal = async (picLink) =>{
        
        const newContent = content.replaceAll("'","\\'");
        const result = await fetch(`/api/add-blog`, {
            method: 'post',
            body: JSON.stringify({ user, title, "content" : newContent, picLink}),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        navigate("/blogs");
        console.log(result.json());
        setClicked(false);
        return;
    }
    useEffect(() => {
        document.title = "Add Blog"
     }, []);
     return(
        <div>
            <NavBar className="sidebyside" user={user} setUser={setUser}/>
            <div className="addBlogContainer" >
                <div className="addblogheading" style={{marginBottom:'50px', marginTop:"20px"}}>
                    NEW BLOG
                </div>
                <div className="blogTitleContainer" >
                    <div className="titleTag" >
                        <input value={title} onChange={(e) => setTitle(e.target.value) || setFlag(0)} type="text" className="addblogtitle" placeholder="Title" name="title" id='title' required/>
                        { flag === 1 && <p className="hintFont">Title is required !</p>}
                    </div>
                    <div className="AttachFile" >
                        <input  onChange={(e) => setFileUpload(e.target.files[0]) || setFlag(0)} type="file" className={(fileUpload === ""  || fileUpload === undefined)?"hideAttach":"custom-file-input"}  placeholder="Title" name="title" id='files' accept="image/*" required/>
                        <div className={(fileUpload === "" || fileUpload === undefined)?"attachLabel":"hideAttach"}>
                            < label  for="files">Select a file</label>
                        </div>
                        { flag === 2 && <p className="hintFont">Picture for the blog is required !</p>}
                        
                    </div>
                        
                </div>
                <div>
                    <textarea value={content} onChange={(e) => setContent(e.target.value) || setFlag(0)} type="textarea" className="addblogcontent" placeholder="Write here.." name="content" id='content' required />
                    { flag === 3 && <p className="hintFont">Content for the blog is required !</p>}
                </div>
                <div onClick={clicked?null:submitBlog} className="SubmitButton" >
                    <div>
                        Submit
                    </div>
                </div>
            </div>
        </div>
     )
}

export default AddBlog;
   