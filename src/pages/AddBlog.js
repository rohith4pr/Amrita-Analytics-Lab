import { useEffect, useState } from "react";
import NavBar from "../NavBar";

const AddBlog = ({user,setUser}) => {

    const [title,setTitle] = useState();

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
                        <input type="text" className="addblogtitle" placeholder="Title" name="title" id='title' required/>
                    </div>
                    <div style={{display:'flex', marginLeft:'210px'}}>
                        <div className="AttachFile" style={{display:'flex', flexDirection:'column', alignItems:'center', background:"#F2F2F2", borderRadius:'10px', width: "215px", justifyContent: 'center'}}>
                            Attach File
                        </div>
                    </div>
                </div>
                <div>
                    <textarea type="text" className="addblogcontent" placeholder="Write here.." name="content" id='content' required />
                </div>
                <div className="SubmitButton" style={{marginLeft:'810px', display:'flex', flexDirection:'column', alignItems:'center', background:"#F2F2F2", width: "215px", justifyContent: 'center', borderRadius:'10px'}}>
                    <div>
                        Submit
                    </div>
                </div>
            </div>
        </div>
     )
}

export default AddBlog;
   