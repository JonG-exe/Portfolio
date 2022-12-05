import React from "react"
import Navbar from "./components/Navbar"
import Content from "./components/Content"
// import PageDesign from "./components/PageDesign"
import {Routes, Route, Link} from "react-router-dom"
import Contact from "./components/Contact"
import Tutorial from "./components/Tutorial"

export default function App() {

    const [test, setTest] = React.useState("")

    return (
        <div className="hero">
            <Navbar />
            {/* <PageDesign /> */}

            <Routes>
                <Route path="/" element={<Content />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/tutorial" element={<Tutorial />} />
                <Route path="/*" element={<Content />} />
            </Routes>
        </div>
    )
}