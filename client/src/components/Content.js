import React from "react";
import Home from "./Home"
import Portfolio from "./Portfolio";
import Contact from "./Contact";

export default function Content() {
    return (
        <div className="content">
            <Home />
            <Portfolio />
            {/* <Contact /> */}
        </div>

    )
}
