import React, { useState, useEffect }  from "react";
import "./Nav.css";



//     https://i.ibb.co/HYVcJww/netflix.png       
//  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdavidblaine.com%2Fwp-content%2Fuploads%2F2017%2F04%2Fnetflix-logo.png&f=1&nofb=1"

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
            
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);
        
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
            className="nav__logo"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdavidblaine.com%2Fwp-content%2Fuploads%2F2017%2F04%2Fnetflix-logo.png&f=1&nofb=1"
            alt="Netflix logo"
            />

            <img
            className="nav__avatar"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmir-s3-cdn-cf.behance.net%2Fproject_modules%2Fdisp%2F366be133850498.56ba69ac36858.png&f=1&nofb=1"
            alt="Netflix Logo"
            />

        </div>
    )
}

export default Nav;
