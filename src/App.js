import React from "react"
import Navbar from "./components/Navbar"
import Content from "./components/Content"
import PageDesign from "./components/PageDesign"
import {Routes, Route, Link} from "react-router-dom"
import Contact from "./components/Contact"
import Tutorial from "./components/Tutorial"

export default function App() {

    const [test, setTest] = React.useState("")

    /*
    React.useEffect(() => {
        // fetch("/api")
        fetch("https://swapi.dev./api/people/1")
        .then(response => response.json())
        .then(data => console.log("The datai:", data))
        // .then(data => setTest(data.home))
    }, [])
    */

    return (
        <div className="hero">
            <Navbar />
            {/* <PageDesign /> */}

            <Routes>
                <Route path="/" element={<Content />} />
                <Route path="contact" element={<Contact />} />
                <Route path="tutorial" element={<Tutorial />} />
            </Routes>
        </div>
    )
}