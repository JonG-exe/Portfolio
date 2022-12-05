import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App.js"
import { BrowserRouter } from "react-router-dom"
import "./contact.css"

const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)