import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../Assests/img/logo/scrapikoLogoHomepage.png'

const TopNavBar = () =>{
    return (
        <>
        <div className="top-bar">
            <div className="container-fluid topBarContainerFluid">
                <div className="row topBarRow">
                    <div className="col-lg-3 topCol3">
                        <div className="logo">
                            <Link to="/homepage">
                                <img src={Logo} alt="Logo" />  
                            </Link>
                                <h4>ScrapiKo</h4>
                        </div>
                    </div>
                    <div className="col-lg-9 topCol9">
                        <div className="top-bar-right">
                            <div className="topDetail">
                                <h4>8:00 - 9:00</h4>
                                <p>Opening Hour Mon - Fri</p>
                            </div>
                            <div className="topDetail">
                                <h4>+143 456 7890</h4>
                                <p>Call Us For Free Consultation</p>
                            </div>
                            <div className="social">
                                <Link to="#"><i className="fab fa-twitter"></i></Link>
                                <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
                                <Link to="#"><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default TopNavBar