import { useEffect } from "react";
import NavBar from "../NavBar";

const AddBlog = ({user,setUser}) => {
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
                        <input style={{fontFamily: 'Montserrat', padding:"5px", fontWeight:" 400", fontSize: "17px" }} type="text" className="addblogtitle" placeholder="Title" name="title" id='title' required />
                    </div>
                    <div style={{display:'flex', marginLeft:'200px'}}>
                        <div style={{display:'flex', flexDirection:'column',padding:"5px", alignItems:'center', background:"#F2F2F2", borderRadius:'10px', width: "215px", height: "40px"}}>
                            <div style={{paddingTop:"8px"}}>
                                Attach File
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <textarea style={{marginBottom:'30px', fontFamily: 'Montserrat', padding:"5px", fontWeight:" 400", fontSize: "17px" }} type="text" className="addblogcontent" placeholder="Write-Here.." name="content" id='content' required />
                </div>
                <div style={{marginLeft:'775px', display:'flex', flexDirection:'column',padding:"5px", alignItems:'center', background:"#F2F2F2", borderRadius:'10px', width: "215px", height: "40px"}}>
                         <div style={{paddingTop:"8px"}}>
                            Submit
                         </div>
                </div>
            </div>
        </div>
     )
}

export default AddBlog;
   