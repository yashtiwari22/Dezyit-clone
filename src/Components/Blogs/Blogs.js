import React,{useEffect} from 'react'
import "./Blogs.css"
import Paper from '@mui/material/Paper';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import $ from "jquery";
function Blogs() {
        $(".for").on("click", function () {
            $(".show1").hide();
            console.log("hide");
    
        })
        $(".back").on("click", function () {
            $(".show2").hide();
            console.log("hide");
        
    
    })
    return (
        <div className="main4">
            <h1 style={{ color: "white", fontSize: "3rem", fontWeight: "bold", margin: "10px", padding: "10px", marginTop: "50px", letterSpacing: "0.05rem" }}>Our Blog</h1>
            <div className="show">
            <div className="show1">
                <Paper style={{ Height: "200px", width: "300px" }}>

                    <img className="cardimg" src="https://static.wixstatic.com/media/f5b934_924cbebc3cb74b5ca74e89753870cb7e~mv2.jpg/v1/fill/w_365,h_205,fp_0.50_0.50,q_90/f5b934_924cbebc3cb74b5ca74e89753870cb7e~mv2.webp" />
                    <p style={{fontSize:"0.8rem",padding:"10px"}}>
                    Oct 5{" . "}3 min
                    </p>
                    <h1>
                    5 Ways To Improve Design Research
                    </h1>
                    <p>
                    In the design industry, you have to deal with several clients, companies, and organisations with versatile ideas,...
                    </p>
                </Paper>
                <Paper style={{ Height: "200px", width: "300px" }}>

                    <img className="cardimg" src="https://static.wixstatic.com/media/f5b934_924cbebc3cb74b5ca74e89753870cb7e~mv2.jpg/v1/fill/w_365,h_205,fp_0.50_0.50,q_90/f5b934_924cbebc3cb74b5ca74e89753870cb7e~mv2.webp" />
                    <p style={{fontSize:"0.8rem",padding:"10px"}}>
                    Sep 30{" . "}3 min
                    </p>
                    <h1>
                    How UX design can help your app
                    </h1>
                    <p>
                    An app, these days, is a crucial technology for any product or service company to connect with their clients...
                    </p>
                </Paper>
                <Paper style={{ Height: "200px", width: "300px" }}>

                    <img className="cardimg" src="https://static.wixstatic.com/media/f5b934_924cbebc3cb74b5ca74e89753870cb7e~mv2.jpg/v1/fill/w_365,h_205,fp_0.50_0.50,q_90/f5b934_924cbebc3cb74b5ca74e89753870cb7e~mv2.webp" />
                    <p style={{fontSize:"0.8rem",padding:"10px"}}>
                    Sep 25{" . "}3 min
                    </p>
                    <h1>
                    Ways you can promote yourself on social media
                    </h1>
                    <p>
                    Nowadays, social media has become one of the topmost platforms to promote and market your artwork, design, creativity and grow your...
                    </p>
                </Paper>
            </div>
            <div className="show2">
                <Paper style={{ Height: "200px", width: "300px" }}>

                    <img className="cardimg" src="https://static.wixstatic.com/media/f5b934_924cbebc3cb74b5ca74e89753870cb7e~mv2.jpg/v1/fill/w_365,h_205,fp_0.50_0.50,q_90/f5b934_924cbebc3cb74b5ca74e89753870cb7e~mv2.webp" />
                    <p style={{fontSize:"0.8rem",padding:"10px"}}>
                        Sep 14{" . "} 3 min
                    </p>
                    <h1>
                        Soft skills required in a UX designer
                    </h1>
                    <p>
                        UI/UX is all about design thinking and the smooth functionality of a product, be it a web page, an application, or a...
                    </p>
                </Paper>
                <Paper style={{ Height: "200px", width: "300px" }}>

                    <img className="cardimg" src="https://static.wixstatic.com/media/f5b934_924cbebc3cb74b5ca74e89753870cb7e~mv2.jpg/v1/fill/w_365,h_205,fp_0.50_0.50,q_90/f5b934_924cbebc3cb74b5ca74e89753870cb7e~mv2.webp" />
                    <p style={{fontSize:"0.8rem",padding:"10px"}}>
                        Sep 7{" . "} 3 min
                    </p>
                    <h1>
                    Design Thinking as a way to Solve a Problem
                    </h1>
                    <p>
                    Design Thinking is how designers solve a problem. Design thinking is all about ideating the different ways a...                    </p>
                </Paper>
                <Paper style={{ Height: "200px", width: "300px" }}>

                    <img className="cardimg" src="https://static.wixstatic.com/media/f5b934_924cbebc3cb74b5ca74e89753870cb7e~mv2.jpg/v1/fill/w_365,h_205,fp_0.50_0.50,q_90/f5b934_924cbebc3cb74b5ca74e89753870cb7e~mv2.webp" />
                    <p style={{fontSize:"0.8rem",padding:"10px"}}>
                        Sep 2{" . "} 3 min
                    </p>
                    <h1>
                    How to overcome Creator's Block
                    </h1>
                    <p>
                    It is frustrating when you are trying so hard to come up with ideas but can't come up with a single good one...                    </p>
                </Paper>
            </div>
            </div>
            <div className="arrow">
            <ArrowBackIosNewIcon className="back" />
            <h3 style={{padding:"10px"}}>1</h3>
            <h3 style={{padding:"10px"}}>2</h3>
            <h3 style={{padding:"10px"}}>3</h3>
            <h3 style={{padding:"10px"}}>4</h3>

            <ArrowForwardIosIcon className="for" />
            <DoubleArrowIcon/>
            </div>

        </div>
    )
}

export default Blogs
