const BlogPage = () => {
    const RecentPostInfo = () =>{

        return(
            <div>
                
            </div>
        )
    }
    return(
        <div className="Blog">
            <div className="BlogHeader">
                Blog
            </div>
            <div className="BlogContent">
                <div style={{flexBasis : "30%"}}>
                    <div className="BlogRecentHeader">
                        Recents
                    </div>
                    <RecentPostInfo/>
                </div>
                <div style={{flexBasis : "40%",background:'white'}}>
                    Recents
                </div>
                <div style={{flexBasis : "30%"}}>
                    Recents
                </div>
                
            </div>
        </div>
    );
}
    



export default BlogPage;