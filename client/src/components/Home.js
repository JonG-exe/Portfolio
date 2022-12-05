import React, {useEffect} from "react"
import InfoTile from "./InfoTile";
import main_image from "../images/profile_pic.png"
import books from "../images/books.png"
import Contact from "./Contact"
import {Link} from "react-router-dom"
import new_pro_pic from "../images/new_pro_pic.png"
import profile_pic from "../images/jon-g-profile-picture.png"
import hello from "../images/hello.png"
import jonG from "../images/jon_g_intro.png"
import PageDesign from "../components/PageDesign"


let infoTile_info = {
    tile_one: {
        line_one: "First_name: 'Jonathan',",
        line_two: "Last_name: 'Gray',",
        line_three: "Alias: ['Jon.G', 'Gray']",
    },
    tile_two: {
        // line_one: "Services: ['Website Design', 'Website Development', 'SEO']"
        line_one: "Services: ['UI/UX Design', 'Web Development', 'SEO']"
    },
    tile_three: {
        line_one: "Web Languages: ['HTML', 'CSS', 'Javascript'],",
        line_two: "Proficient: ['Node.js', 'MongoDB', 'React', 'Express.js']"
    }
}

export default function Home () {

    // ----------- Set page title -------------
    document.title = "Dev | Lucid Atom"
    //-----------------------------------------

    /**
     * Make intro elements appear on the home page
     */

    setTimeout(() => {
        const helloElement = document.getElementsByClassName("hello_element")[0];
        const jonGElement = document.getElementsByClassName("jon_g_element")[0];

        helloElement.style.display = "block"
        jonGElement.style.display = "block"
    }, 50) // 50ms

    return (
        <>

        {/* <Link to="/tutorial">Tutorial</Link> */}
        
        <PageDesign />

        <section className="container">

            <div className="profile">
                <div className="profile-pic-area neu neu-circle embedded-neu">
                    
                    <div className="neu-circle-in-circle neu extruded-neu">
                        <img className="neu-profile-pic" src={profile_pic} />
                    </div>

                    <Link to="/contact">
                        <button className="CTA CTA_one">Get In Touch</button>
                    </Link>
                    
                    <a href="#section_two" className="CTA CTA_two">My Portfolio</a>
                    
                </div>
            </div>

            
            <div className="infoTiles">
                <InfoTile
                    key="1"
                    className={"infoTile infoTile_one"}
                    tile_info={infoTile_info.tile_one}
                    title="Who I Am"
                />

                <InfoTile
                    key="2"
                    className={"infoTile infoTile_two"}
                    tile_info={infoTile_info.tile_two}
                    title="What I Do"
                    title_right
                />

                <InfoTile
                    key="3"
                    className={"infoTile infoTile_three"}
                    tile_info={infoTile_info.tile_three}
                    title="Adept In"
                />
            </div>
        </section>
        </>

    )
}