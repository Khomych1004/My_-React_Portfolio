import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <div class="container-fluid" style={{ textAlign: 'center', backgroundColor:'gray' }}>
            <p>Oleksandr Khomych &copy; {new Date().getFullYear()}</p>
        </div>
    )
}

export default Footer;