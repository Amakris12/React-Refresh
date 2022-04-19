import React from 'react'
import {
  Link
} from "react-router-dom";
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';
import { FaSnapchatSquare } from 'react-icons/fa';

const footer = () => {
    return (
        <div>
             <div className='footer'>
            <div className="footerHolder">
                <div>
                    <ul className="contact">
                        <li className='FootCon1'><h1>Contact </h1></li>
                        <li className='FootCon'><p className="FooterLinksActive">623-806-9966</p></li>
                        <li className='FootCon'><p className="FooterLinksActive">amakris03@gmail.com</p></li>
                        <li className='FootCon'><a className="linky" href="https://github.com/Amakris12"><p className="FooterLinksActive">Github</p></a></li>
                        <li className='FootCon'><a className="linky" href="https://app.netlify.com/teams/amakris03/sites"><p className="FooterLinksActive">Netlify</p></a></li>
                    </ul>
                </div>
            <div>
                <ul className="Socials">
                <li className='FootSocial1'><h1>Social Medias</h1></li>
                <li className='FootSoc'><p className="FooterLinksActive"><BsInstagram/> Instagram</p></li>
                <li className='FootSoc'><p className="FooterLinksActive"><BsTwitter/> Twitter</p></li>
                <li className='FootSoc'><p className="FooterLinksActive"><FaTiktok/> TikTok</p></li>
                <li className='FootSoc'><p className="FooterLinksActive"><FaSnapchatSquare/> SnapChat</p></li>
            </ul>
            </div>
            <div>
                <ul className="Links">
                <li className='FootNav1'><h1>Navigation</h1></li>
                <li className='FootLinks'><Link className="linky" to="/"><p className="FooterLinksActive">Home</p></Link></li>
                <li className='FootLinks'><Link className="linky" to="/About"><p className="FooterLinksActive">About</p></Link></li>
                <li className='FootLinks'><Link className="linky" to="/Breakfast"><p className="FooterLinksActive">Breakfast</p></Link></li>
                <li className='FootLinks'><Link className="linky" to="/Lunch"><p className="FooterLinksActive">Lunch</p></Link></li>
                <li className='FootLinks'><Link className="linky" to="/Dinner"><p className="FooterLinksActive">Dinner</p></Link></li>
            </ul>
            </div>
            </div>
        </div>
        </div>
    )
}

export default footer
