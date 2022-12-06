import React from "react"
import Navbar from "./components/Navbar"
import Content from "./components/Content"
import {Routes, Route, Link} from "react-router-dom"
import Contact from "./components/Contact"
import Tutorial from "./components/Tutorial"
import { BrowserRouter } from "react-router-dom"
import { inject } from "@vercel/analytics"

export default function App() {

    inject(); // allows for audience tracking on vercel

    return (
        <div className="app">
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Content />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/tutorial" element={<Tutorial/>} />
                    <Route path="/*" element={<Content />} />
                </Routes>
            </BrowserRouter>
        </div>
    )

}