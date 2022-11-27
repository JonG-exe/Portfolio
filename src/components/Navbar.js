import React, {useState} from "react"
import facebook_icon from "../images/facebook_icon.png"
import linkedin_icon from "../images/linkedin_icon.png"
import menu_icon from "../images/menu_icon.png"
import youtube_icon from "../images/youtube_icon.png"
import home_icon from "../images/home_icon.png"
import {Link} from "react-router-dom"

function Navbar() {

    const [menuActive, setMenuActive] = useState(false);
    let body = document.getElementsByTagName("body")[0];
    let element = document.createElement("div");
    element.classList.add("menu_modal")
    element.textContent = "Coming Soon Boyo!"

    function menuClick() {

        setMenuActive(preMenuActive => !preMenuActive);

        if(menuActive === false) {
            body.appendChild(element);

            setMenuActive(false)

            /* IMPORTANT: Remove this setTimeout once ready to commit
            to a full Menu. The only purpose of this timeout is to ensure
            the menu's message of "Coming Soon" does not stay on the page,
            or require the user to click the menu again to exit*/

            setTimeout(()=> {
                const menu_modal = body.getElementsByClassName("menu_modal")[0]
                body.removeChild(menu_modal)
            }, 3000);

        }
        else {
            const menu_modal = body.getElementsByClassName("menu_modal")[0]
            body.removeChild(menu_modal);
        }
    }

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <button onClick={menuClick} className="menu_icon">
                        <div className="menu_rect"></div>
                        <div className="menu_rect"></div>
                        <div className="menu_rect"></div>
                    </button>
                </li>

                <li className="social_li">
                    <a href="https://www.facebook.com/profile.php?id=100084129372438" target="_blank" className="menu_link">
                        <img src={facebook_icon} className="facebook_icon" alt="extruded neumorphic facebook icon"/>
                    </a>
                </li>

                <li className="social_li">
                    <a href="https://www.linkedin.com/in/jonathan-gray-4a03ab210/" target="_blank" className="menu_link">
                        <img src={linkedin_icon} className="linkedin_icon" alt="extruded neumorphic linked-in icon"/>
                    </a>
                </li>

                <li className="social_li">
                    <a href="https://www.youtube.com/@devjon" target="_blank" className="menu_link">
                        <img src={youtube_icon} className="youtube_icon" alt="extruded neumorphic youtube icon"/>
                    </a>
                </li>

                <li className="home_icon">
                    <Link to="/">
                        <div href="" className="menu_link">
                            <img src={home_icon} className="home_icon_img" alt="extruded neumorphic home icon"/>
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;