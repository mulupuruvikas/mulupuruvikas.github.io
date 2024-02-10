import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Portfolio = () => {



    return (
        <div className="container portfolio-page">
            <span className="tags top-tags"><b>Last login: Wed Feb 15 09:41:27 on console <br /> vikas@personal-website@work-history</b></span>
            <div className="text-zone">
                <div className="titles">
                    <div class="experience-heading">
                        <p>
                            <b>experience:</b>
                        </p>
                    </div>
                    <div class="project-heading">
                        <p>
                            <b>projects:</b>
                        </p>
                    </div>
                </div>
                <div className="bodies">
                    <div class="experience">
                        <h3><b>@ Microsoft / May-Aug 2024</b></h3>
                        <p> >>>&nbsp; &nbsp; &nbsp; Incoming software engineering intern for Microsoft
                        

                        </p>
                        <h3><b>@ Tech For Good Inc / Jun-Aug 2023</b></h3>
                        <p> >>>&nbsp; &nbsp; &nbsp; Managed 3 teams in building an open‑source tool that decreases <br></br>
                        ...&nbsp; &nbsp; &nbsp; the cost of cloud computing for individuals and small businesses <br></br>
                            ...&nbsp; &nbsp; &nbsp; by utilizing AWS, Azure and GCP spot/preemptive instances.
                            <br></br> <br></br>
                        >>>&nbsp; &nbsp; &nbsp; Personally led the backend team where we used the AWS, Azure and <br></br>
                            ...&nbsp; &nbsp; &nbsp; GCP SDK for Java to create spot requests and created a REST API <br></br>
                            ...&nbsp; &nbsp; &nbsp; to identify the possible instances available.
                        </p>

                        <h3>@ Microsoft / Jul-Aug 2022</h3>
                        <p>>>>&nbsp; &nbsp; &nbsp; Prototyped a mobile application using Figma, Python and PowerApps <br></br>
                        ...&nbsp; &nbsp; &nbsp; that incentivizes employees to monitor and reduce their carbon <br></br>
                        ...&nbsp; &nbsp; &nbsp; footprint on the Redmond/Bellevue campus, enabling Microsoft to <br></br>
                        ...&nbsp; &nbsp; &nbsp; be carbon neutral by 2030. <br></br><br /> >>>&nbsp; &nbsp; &nbsp; Employees are incentivized to progressively adapt to a more <br />...&nbsp; &nbsp; &nbsp; environmentally friendly lifestyle.</p>

                        <h3><b>@ Tech For Good Inc / Jun-Aug 2021</b></h3>
                        <p>>>>&nbsp; &nbsp; &nbsp; Delivered blockchain-based solutions using Flask and React.js to <br></br>
                        ...&nbsp; &nbsp; &nbsp; track user donations to communities in developing countries.</p> <br></br><br></br>
                    </div>
                    <div className="paper-trading-platform">
                        
                        <img src="/paper-trader-2.png" alt="paper-trader" className="project1-iamge"></img>

                        <div className="subtitle">
                            <h2><b>Paper Trader</b></h2>
                            <a href="https://github.com/mulupuruvikas/PaperTradingPlatform" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" className="github" />
                            </a>
                            
                        </div>
                        <h3>A web app designed for beginner and novice investors to practice long term trading strategies using end-of-day quotes.</h3>
                        <p>Django &nbsp; &nbsp; React.js &nbsp; &nbsp; MySQL</p>
                        
                        
                    </div>
                </div>
                
            </div>
        </div>
    );
}
export default Portfolio