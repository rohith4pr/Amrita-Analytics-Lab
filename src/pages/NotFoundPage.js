import React from "react";
import Page404 from "../404.svg"

const NotFoundPage = () => (
    <div className="NotFound">
        <img style={{flexBasis: "50%", width:'640px'}} src = {Page404}></img>
        <div className="MainText404">
        Sorry,
            <div>
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