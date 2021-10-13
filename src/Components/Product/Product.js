import React from 'react'
import "./Product.css";
import play from "../Images/google-play-badge.png";
import app from "../Images/app-store.png";
function Product() {
    return (
        <div className="main2" id="product">
            <div className="top">
                <h1 style={{ color: "white", fontSize: "3rem", fontWeight: "bold", margin: "10px", padding: "10px", marginTop: "50px", letterSpacing: "0.05rem" }}>Our Product</h1>
                <p style={{ color: "white", margin: "10px", padding: "10px", letterSpacing: "0.05rem", marginBottom: "40px" }}>Dezy It, is your personal design sprint master. It is your design thinking guide and companion to help you facilitate design sprints, to innovate, pivot and improve on the user experience of your product.</p>

            </div>
            <div className="between" style={{display:'flex'}}>
                <div className="animations1" ></div>
                <div className="animation2"></div>
                <div className="animations2"  ></div>
            </div>
            <div className="below">
            <h3 style={{ color: "white", fontSize: "1rem", fontWeight: "bold", margin: "5px", padding: "5px", letterSpacing: "0.05rem" }}>Download Now!</h3>
            <p style={{ color:"#787CD1" ,fontWeight: "bold", margin: "5px", padding: "5px", letterSpacing: "0.05rem" }}>And enjoy our Beta Version for free!</p>
            </div>
            <div className="buttons2">
                <img src={play} style={{ height: "60px", marginLeft: "10px", marginRight: "0px", cursor: "pointer" }}></img>
                <img src={app} style={{ height: "40px", width: "140px", marginLeft: "0px", cursor: "pointer" }}></img>
            </div>
        </div>
    )
}

export default Product
