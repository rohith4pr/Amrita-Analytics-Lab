import '../service.css';
import NavBar from '../NavBar';
import Footer from '../Footer';
import { useState, useEffect } from "react";

const ServicesPage = ({user,setUser}) => {
  useEffect(() => {
    document.title = "Services"
 }, []);

    const[toggleState, setToggleState]=useState(1)
    
    const optionClick = (index) =>{
        setToggleState(index)
    }

    return(
      
        <div className="hero1">
            <div>
              <NavBar user={user} setUser={setUser}/>
            </div>
            <div className='spacer'>
              <h1>Services</h1>
              <div className="service-nav-container">
                  <div><button className={toggleState === 1? "sevice-nav-ele-mod" : "service-nav-ele"} onClick={() => optionClick(1)} >Consulting</button></div>
                  <div><button className={toggleState === 2? "sevice-nav-ele-mod" : "service-nav-ele"} onClick={() => optionClick(2)} style = {{marginRight: '10px', marginLeft: '10px'}}>Learning </button></div>
                  <div><button className={toggleState === 3? "sevice-nav-ele-mod" : "service-nav-ele"} onClick={() => optionClick(3)} style = {{marginRight: '10px', marginLeft: '10px'}}>Courses</button></div>
                  <div><button className={toggleState === 4? "sevice-nav-ele-mod" : "service-nav-ele"} onClick={() => optionClick(4)}>Internship</button></div>
              </div> 
              <div className={toggleState === 1? "service-nav-content-container-consulting":"service-nav-content-container"}> 
                  <div className="service-nav-container-container-consulting"><ul><li className="list">We take up projects in various business domains which needs analytical solutions.</li></ul></div>
                  <div className="service-nav-container-container-consulting"><ul><li className="list">We undertake tasks on data analysis, model building and forecasting as part of customized solutions.</li></ul></div>
                  <div className="service-nav-container-container-consulting"><ul><li className="list">We also provide evaluation and assessment on programs and processes.</li></ul></div>
              </div>
              <div className={toggleState === 2? "service-nav-content-container-mod":"service-nav-content-container"}> 
                  <div className="service-nav-container-container"><ul><li className="list">We offer Certificate Courses, Training Programmes, Dvelopment Programmes(MDP’s and FDP’s) and workshops on Business Analytics, Data Science, Research Methods and related technologies</li></ul></div>
                  
              </div>
              <div className={toggleState === 3? "service-nav-content-container-courses":"service-nav-content-container"}> 
                  <div className="service-nav-container-container-courses"><ul>
                    <li className="list">Data Analysis using R</li>
                    <li className="list">Data Analysis using Python</li>
                    <li className="list">Data Analysis using Julia</li>
                    </ul></div>
                  <div className="service-nav-container-container-courses"><ul>
                    <li className="list">Data visualization using R</li>
                    <li className="list">Data visualization using Python</li>
                    <li className="list">Data visualization using Tableau</li>
                    <li className="list">Data visualization using Power BI</li>
                    </ul></div>
                  <div className="service-nav-container-container-courses"><ul>
                    <li className="list">Advanced R</li>
                    <li className="list">Multivariate Data Analysis</li>
                    <li className="list">Time Series Analysis and Forecasting</li>
                    <li className="list">Machine Learning</li>
                    <li className="list">Deep Learning</li>
                    </ul></div>
                    <div className="service-nav-container-container-courses"><ul>
                    <li className="list">Natural Language Processing</li>
                    <li className="list">Supply Chain Analytics</li>
                    <li className="list">HR Analytics</li>
                    <li className="list">Marketing Analytics</li>
                    <li className="list">Financial Analytics</li>
                    </ul></div>
                </div>
                <div className={toggleState === 4? "service-nav-content-container-mod":"service-nav-content-container"}> 
                    <div className="service-nav-container-container"><ul><li className="list">We offer internship opportunities for graduate and post-graduate students</li></ul></div>
                </div>
            </div>

            <div>
              <Footer />
            </div>   
        </div>
    )
}

export default ServicesPage;