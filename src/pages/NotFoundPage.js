import React from "react";
import Page404 from "../404.svg"

const NotFoundPage = () => (
    <div className="NotFound">
        <div className="Image404" style={{flexBasis: "50%"}}>
            <div>
  
                <img width="440" alt='none' style={{paddingRight: "60px", paddingTop: "100px"}} src = {Page404}/>
            </div>
        
        </div>
        
        <div className="MainText404" style={{flexBasis: "50%", paddingLeft: "80px"}}>
        Sorry,
            <div style={{marginTop: "-20px"}}>
            Page Not Found
            </div>
            <div className="Woops">
            Wooops! It looks like you are lost
            </div>
            <div className="BackHome">
            Back Home
            </div>
        </div>
    </div>
);

export default NotFoundPage;