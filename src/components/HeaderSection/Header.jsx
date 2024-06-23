import React, { useEffect } from "react";
import "./Header.css";

function Header() {
    
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(".header");
            const scrollPosition = window.scrollY;

            if (scrollPosition > 100) { 
                header.style.backgroundColor = "#355592";
            } else {
                header.style.backgroundColor = "";
            }
        };

        window.addEventListener("scroll", handleScroll);

        // cleaup function (to remove the event listener)
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="header">
            {/* logo */}
            <img src="images/logo.png" alt="logo" />
            {/* navbar 576px view - hamburger menu */}
            <label htmlFor="menu-btn" className="menu-icon"><i className="fa-solid fa-bars"></i></label>
            <input type="checkbox" className="menu-btn" id="menu-btn"></input>
            {/* navbar web view */}
            <nav className="navbar-web">
                <a href="#section-home">Home</a>
                <a href="#section-classes">Classes</a>
                <a href="#section-trainer">Trainer</a>
                <a href="#section-review">Review</a>
                <a href="#section-contact">Contact</a>
                <a className="join" href="#join-us">JOIN US</a>
            </nav>
        </header>    
    );
}

export default Header;