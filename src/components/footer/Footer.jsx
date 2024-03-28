import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer container-fluid" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="row justify-content-center">
                <div className="col-md-6 text-center">
                    <p>Oleksandr Khomych &copy; {new Date().getFullYear()}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;