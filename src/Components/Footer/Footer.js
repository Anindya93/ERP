import React from 'react';
import { FiMapPin, FiPhoneCall, FiTwitter } from "react-icons/fi";
import { BiEnvelopeOpen } from "react-icons/bi";
import { FaHome, FaWhatsapp } from "react-icons/fa";
import { RiProductHuntLine, RiRegisteredLine } from "react-icons/ri"
import { IoIosPhonePortrait} from "react-icons/io"
import { AiOutlineFacebook } from "react-icons/ai"
import { GrLinkedin, GrAndroid } from "react-icons/gr"
import { BsApple } from "react-icons/bs"
import './Footer.css';

const Footer = () => {
    return (
        <div className='main-footer'>
            <div className='container'>
                <div className='row'>
                    {/* column1 */}
                    <div className='col'>
                        <h1>Links</h1>
                        <ul className='list-unstyled'>
                            <li>
                                <i className='icon'><FaHome /></i>
                                Home
                            </li>                           
                            <li>
                                <i className='icon'><IoIosPhonePortrait/></i>
                                Contact Us
                            </li>
                            <li>
                                <i className='icon'><RiProductHuntLine /></i>
                                Products
                            </li>
                            <li>
                                <i className='icon'><RiRegisteredLine /></i>
                                Registration
                            </li>
                        </ul>
                    </div>
                    {/* column2 */}
                    <div className='col'>
                        <h2>ERP Infosystems Ltd.</h2>
                        <ul className='list-unstyled'>

                            <li>
                                <p className='title'>
                                    <strong>
                                        <i className='icon'><FiMapPin /></i>
                                        Address :
                                    </strong>
                                    Anuj Chambers, 6th Floor,
                                    <br />
                                    24 Park Street, Kolkata - 700016, India
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>
                                        <i className='icon'> <BiEnvelopeOpen /> </i>
                                        Mail Us :
                                    </strong>
                                    sales@erpinfosystems.com
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>
                                        <i className='icon'> <FiPhoneCall /> </i>
                                        Phone :
                                    </strong>
                                    +91 33 6542 4521
                                </p>
                            </li>
                        </ul>
                    </div>
                    {/* column3 */}
                    <div className='col' style={{marginLeft: '13%'}} >
                        <h1>Certification</h1>
                        <ul className='list-unstyled'>
                            <li>
                            <img src="https://www.farvisionerp.com/images/iso-9001-bureau-veritas-logo.png" alt="certificate" width="30%" />
                            </li>                            
                            <li>
                            <img src="https://www.farvisionerp.com/images/credai-farvision2.png" alt="details" width="30%" /> 
                            </li>
                            <li>
                                <div className='icon1'>
                                <FaWhatsapp />
                                <AiOutlineFacebook/>
                                <FiTwitter/>
                                <GrLinkedin/>
                                <GrAndroid />
                                <BsApple />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className='row'>
                    <p className='col-sm'>
                        &copy;{new Date().getFullYear()} ERP Infosystems Ltd. / all rights reserved / Terms of service
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;