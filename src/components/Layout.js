import React, { useState } from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => {
    console.log(isOpen)
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar}></Navbar>
      {children}
      <Footer />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </>
  )
}

export default Layout
