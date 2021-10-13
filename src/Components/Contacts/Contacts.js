import React from 'react'
import "./Contacts.css";
import TextField from '@mui/material/TextField';
import { Link, animateScroll as scroll } from 'react-scroll';
import Button from '@mui/material/Button';
import play from "../Images/google-play-badge.png"
import app from "../Images/app-store.png"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {NavLink} from "react-router-dom";

function Contacts() {
    return (
        <div className="contacts" id="contact">

            <div className="textfield">
                <h1 style={{ color: "#ffffff", fontSize: "2rem", fontWeight: "bold", margin: "10px", padding: "10px", marginTop: "70px", letterSpacing: "0.05rem", marginBottom: "30px" ,marginLeft:"0px",paddingLeft:"0px"}}>
                    Reach out to us
                </h1>
                <TextField id="standard-basic" label="Name" variant="standard"  />
                <TextField id="standard-basic" label="Email" variant="standard"  />
                <TextField id="standard-basic" label="Field" variant="standard"  />
                <TextField
                    id="standard-textarea"
                    label="Type your message here..."
                    minRows="4"
                    placeholder="Placeholder"
                    multiline
                    variant="standard"
                    style={{ color: "white" }}
                />
                <Button variant="outlined" style={{ color: "white" ,marginTop:"15px" ,width:"100px",marginLeft:"200px"}}>Submit</Button>
            </div>

            <div className="a-d">
                <div className="about">
                    <h1 style={{ color: "#ffffff", fontSize: "2rem", fontWeight: "bold", margin: "10px", padding: "10px", marginTop: "70px", letterSpacing: "0.05rem", marginBottom: "20px",marginLeft:"0px" }}>
                        About
                    </h1>
                    <NavLink
                        to="/"
                        style={{ textDecoration: "none", cursor: "pointer" }}><Button variant="outlined" style={{ color: "white" ,margin:"10px",width:"200px",height:"30px"}}>Home</Button></NavLink>
                    <Link
                        activeClass="active"
                        to="product"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                        style={{ textDecoration: "none", cursor: "pointer" }}><Button variant="outlined" style={{ color: "white" ,margin:"10px",width:"200px",height:"30px"}}>Our Product</Button></Link>
                    <Link
                        activeClass="active"
                        to="whyUs"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                        style={{ textDecoration: "none", cursor: "pointer" }}><Button variant="outlined" style={{ color: "white",margin:"10px" ,width:"200px",height:"30px"}}>Why Us?</Button></Link>

                </div>
                <div className="download2">
                    <h1 style={{ color: "#ffffff", fontSize: "1.5rem", fontWeight: "bold", margin: "10px", padding: "10px", marginTop: "70px", letterSpacing: "0.05rem" }}>
                        Download Dezy It
                    </h1>
                    <div className="Buttons">
                    <a href="https://play.google.com/store/apps/details?id=com.dezy.it.design.sprint.design_sprint"><img src={play} style={{ height: "50px", width: "125px",marginLeft: "10px", marginRight: "0px",marginTop:"0px", cursor: "pointer" }}></img></a>
                    <a href="https://apps.apple.com/in/app/dezy-it/id1549871606"><img src={app} style={{ height: "35px", width: "100px", marginLeft: "0px",marginTop:"0px", cursor: "pointer" }}></img></a>
                    </div>
                </div>
            </div>
            <div className="contactarea">
                <h1 style={{ color: "#ffffff", fontSize: "2rem", fontWeight: "bold", margin: "10px", padding: "10px", marginTop: "70px", letterSpacing: "0.05rem", marginBottom: "30px" }}>
                    Contact
                </h1>
                <p className="p">Email - support@dezyit.com</p>
                <div className="icons">
                    <a href="https://www.instagram.com/dezy_it/"><InstagramIcon style={{height:"18px" ,color: "white", margin: "5px" }} /></a>
                    <a href="https://www.facebook.com/DezyIt/"><FacebookIcon style={{ height:"18px" ,color: "white", margin: "5px" }} /></a>
                    <a href="https://www.linkedin.com/company/dezy-it/"><LinkedInIcon style={{ height:"18px" ,color: "white", margin: "5px" }} /></a>
                </div>
                <p className="p">© 2020 by Dezy It</p>
            </div>
        </div>
    )
}

export default Contacts;
