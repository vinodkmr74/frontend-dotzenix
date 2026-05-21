import React from "react"
import ReactDOM from "react-dom/client"

import "./index.css"
import "../src/css/style.css"
import "../src/css/comany.css"
import "../src/css/blogs.css"
import "../src/css/service.css"
import "../src/css/product.css"
import "../src/css/industries.css"

import Router from "./routers"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router />
)
