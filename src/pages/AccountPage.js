import NavBar from '../NavBar';

const AccountPage = ({user,setUser}) => {

    useEffect(() => {
        document.title = "Blogs"
     }, []);

     const blogContents = [
        {"blog-title":"Blog 1", "blog-content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {"blog-title":"Blog 2", "blog-content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {"blog-title":"Blog 3", "blog-content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
    ]

    const titleContents = [
        {"blog-title":"Blog 1", "blog-content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {"blog-title":"Blog 2", "blog-content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {"blog-title":"Blog 3", "blog-content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
    ]

    const InfoPage = ({title_info,details}) =>{

        return(
            <div className="RecentBlogs">
                <div style={{fontSize: '18px'}} className="BlogRecentHeader">
                    {title_info}:
                </div>
                <div style={{marginRight: '60px'}}>
                    {details}
                </div>
                <div>
                    {/* Edit button here */}
                </div>
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


    <div style={{diplay:'flex',flexDirection:'column'}} > {/* div containing nav bar and the bottom body */}
        <div>
             <NavBar user={user} setUser={setUser}/>
        </div>
        <div style={{diplay:'flex',flexDirection:'column'}}> {/* dividing the body into two */}
            <div style={{diplay:'flex'}}> {/* the upper part  */}
                  <div> {/* the upper part with profile pic */}
                        <div> {/* profile pic */}
                                <div> {/* photo */}

                                </div>
                                <div>  {/* photo edit button */}

                                </div>
                        </div>
                        <div> {/* profile name */}
                                <div> {/* name */}

                                </div>
                                <div>  {/* name edit button */}

                                </div>
                        </div>
                  </div> 
                  <div style={{diplay:'flex',flexDirection:'column'}}> {/* the upper part with about me */}
                        <div> {/* about me */}
                            <p>About me</p>
                        </div>
                        <div> {/* about me content */}
                            
                        </div>
                        {titleContents.map((blog) => <RecentPostInfo content={blog["blog-content"]} title={blog["blog-title"]}/>)}
                  </div> 
            </div>
            <div style={{diplay:'flex',flexDirection:'column'}}> {/* the part with blogs */}
                  <div>
                        <p>Your Blogs</p>
                  </div>
                  {blogContents.map((blog) => <RecentPostInfo content={blog["blog-content"]} title={blog["blog-title"]}/>)}
            </div>
        </div>
    </div>
}

export default AccountPage;
   