import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaYoutube, FaLinkedin , FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer>
      <Link to={"https://www.facebook.com/"}>
      <FaFacebook/>
      </Link>
      <Link to={"https://www.youtube.com"}>
      <FaYoutube/>
      </Link>
      <Link to={"https://www.linkedin.com"}>
      <FaLinkedin/>
      </Link>
      <Link to={"https://www.instagram.com"}>
      <FaInstagram/>
      </Link>
    </footer>
    </>
  )
}

export default Footer