import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import "./Home.css";
import play from "../Images/google-play-badge.png"
import app from "../Images/app-store.png"
import Product from '../Product/Product';
import WhyUs from '../WhyUs/WhyUs';
import Contacts from '../Contacts/Contacts';
import Blogs from "../Blogs/Blogs";
function Home() {
    return (<>
        <div className="home" id="home">
            <div className="header" style={{position:"fixed"}}>
                <div className="header-int" >
                    <div className="header-img">
                        <Link to="/"><img src="https://static.wixstatic.com/media/ec9816_fac99786349f4b59aeaf8550dacdbc2d~mv2.gif" alt="dezyit logo" /></Link>
                    </div>
                    <div className="header-content">
                        <ul>
                            <a href="/" style={{ textDecoration: "none"}}><li>Home</li></a>
                            <Link
                                activeClass="active"
                                to="product"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}
                             style={{ textDecoration: "none" ,cursor:"pointer"}}><li>Our Product</li></Link>
                            <Link
                                activeClass="active"
                                to="whyUs"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}
                             style={{ textDecoration: "none" ,cursor:"pointer"}}><li>Why US?</li></Link>
                            <Link
                                activeClass="active"
                                to="blogs"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}
                             style={{ textDecoration: "none" ,cursor:"pointer"}}><li>Blogs</li></Link>
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}
                             style={{ textDecoration: "none" ,cursor:"pointer"}}><li>Contact</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div style={{height:"10vh"}}></div>
            <div className="main" >
                <div className="left">
                    <h1 style={{ color: "white", fontSize: "3rem", fontWeight: "bold", margin: "10px", padding: "10px", marginTop: "70px", letterSpacing: "0.05rem" }}>Your personal <br /> Design Sprint Master!</h1>
                    <p style={{ color: "white", margin: "10px", fontWeight: "bold", padding: "10px", letterSpacing: "0.05rem", marginBottom: "40px" }}>Time to innovate? let's Dezy it!</p>
                    <h3 style={{ color: "white", fontSize: "1rem", fontWeight: "bold", margin: "10px", padding: "10px", letterSpacing: "0.05rem" }}>Download Now!</h3>
                    <p style={{ fontWeight: "bold", margin: "10px", padding: "10px", letterSpacing: "0.05rem" }}>And enjoy our Beta Version for free!</p>
                    <div className="buttons">
                    <a href="https://play.google.com/store/apps/details?id=com.dezy.it.design.sprint.design_sprint"><img src={play} style={{ height: "60px", marginLeft: "10px", marginRight: "0px", cursor: "pointer" }}></img></a>
                        <a href="https://apps.apple.com/in/app/dezy-it/id1549871606"><img src={app} style={{ height: "40px", width: "140px", marginLeft: "0px", cursor: "pointer" }}></img></a>
                    </div>
                </div>
                <div className="right">
                    <div className="animate"></div>
                </div>
            </div>
            <div className="Design">
                <div className="img">
                    <img className="img2" src="https://static.wixstatic.com/media/ec9816_120f89a1570549e882031fbfb5ee5905~mv2.png/v1/fill/w_750,h_563,al_c,q_95/Design%20Sprint%20-%20Design%20Thinking%20-%20Graphi.webp" />
                </div>
                <div className="h-p">
                    <div className="h">
                        <h1 style={{ color: "#302b70", fontSize: "3rem", fontWeight: "bold", margin: "10px", padding: "10px", marginTop: "70px", letterSpacing: "0.05rem", marginBottom: "30px" }}>
                            What is a Design Sprint?
                        </h1>
                    </div>
                    <div className="p">
                        <p style={{ margin: "10px", padding: "10px", letterSpacing: "0.05rem" ,color:"black",fontSize:"0.8rem"}}>
                            The sprint is a five-day process for answering critical business questions through design, prototyping and testing ideas with customers. Developed at Google Ventures, it’s a “greatest hits” of business strategy, innovation, behaviour science, design thinking, and more—packaged into a battle-tested process that any team can use.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <Product />
            </div>
            <div>
                <WhyUs />
            </div>
            <div>
                <Blogs/>
            </div>
            <div>
                <Contacts/>
            </div>
        </div>

    </>
    )
}

export default Home
