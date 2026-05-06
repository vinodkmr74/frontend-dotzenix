import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../component/Logo";

export default function Media_contact() {
  return (<>
       <div className="media-contact-main">
          <div className="media-contact1">
            <div>
                <Logo />
            </div>
            <div className="media-contact2">
              <div className="instra"><FaInstagramSquare /></div>
              <div className="linkdin"><FaLinkedinIn /></div>
              <div className="facebook"><BsFacebook /></div>
              <div className="twitter"><FaXTwitter /></div>
       
            </div>
          </div>
        </div>
  
  
  </>
  )
}
