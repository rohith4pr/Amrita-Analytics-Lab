import '../service.css';

const ServicesPage = () => (
    <div className="Home">
        <div className="main">
      <h1>Services</h1>
      <div className="service-dev">
        <div><button onclick="animation()">Consulting</button></div>
        <div><button className="service-nav" data-for-tab="2">Learning</button></div>
        <div><button className="service-nav" data-for-tab="3">Courses</button></div>
        <div> <button className="service-nav" data-for-tab="4">Internship</button></div>
      </div>
    </div>
    <div className="container-content" data-tab="1">
      <div className="test">
        <ul>
        <li className="list">We offer internship opportunities for graduate and post-graduate students</li>
        </ul>
      </div>
    </div>
    <div className="container-content" data-tab="2">
      <div className="test"><ul>
        
        <li className="list">Data Analysis using</li>
        <li className="list" >Data Analysis using</li>
        <li className="list">Data Analysis using Julia</li>
      </ul></div>
      <div className="test"><ul>
        <li className="list">Data visualization using Python</li>
        <li className="list">Data visualization using R</li>
        <li className="list">Data visualization using Python</li>
        <li className="list">Data visualization using Tableau</li>
        <li className="list">Data visualization using Power BI</li>
      </ul></div>
      <div className="test"><ul>
        <li className="list">Data Analysis using</li>
        <li className="list" >Data Analysis using</li>
        <li className="list">Data Analysis using Julia</li>
      </ul></div>
      <div className="test"><ul>
        <li className="list">Data visualization using R</li>
        <li className="list">Data visualization using Python</li>
        <li className="list">Data visualization using Python</li>
        <li className="list">Data visualization using Tableau</li>
        <li className="list">Data visualization using Power BI</li>
      </ul></div>
      <div className="test">
        <ul>
          <li className="list">Advanced 
            Multivariate Data</li>
          <li className="list">Time Series Analysis and 
            Mac<div className="container-new">hine Learning</div></li>
          <li className="list">Deep 
            Natural Language Processing</li>
        </ul>
      </div>
    </div>
    </div>
)


export default ServicesPage;