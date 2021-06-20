import React from 'react';
import {Link} from 'react-router-dom';
const NavbBar = () =>{
    return(
        <>
        <div className="nav-bar">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                    <Link to="#" className="navbar-brand">MENU</Link>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto">
                             <Link to="/homepage" className="nav-item nav-link active">Home</Link> {/*-- home-- */}
                            <Link to="/price-card" className="nav-item nav-link">price Card</Link> {/*-- prices of scraps-- */}
                            <Link to="/scrap-calculator" className="nav-item nav-link">Scrap Calculator</Link>  {/*-- scrap calculator-- */}
                            {/* <Link to="portfolio.html" className="nav-item nav-link">Login/Signup</Link> */}
                            <div className="nav-item dropdown">
                                <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Learn More</Link>
                                <div className="dropdown-menu">
                                    <Link to="/blog" className="dropdown-item">Blog Page</Link>
                                    <Link to="/scrap-calculator" className="dropdown-item">Scrap Calculator</Link>
                                    <Link to="/scrap-calculator" className="dropdown-item">Scrap Calculator</Link>
                                    <Link to="/about" className="dropdown-item">About</Link>
                                    <Link to="/how-it-works" className="dropdown-item">How it works</Link>
                                    <Link to="/about" className="dropdown-item">About</Link>
                                </div>
                            </div>
                            <Link to="/about" className="nav-item nav-link">About</Link> {/*-- about page with team && company and scrap-- */}
                            <Link to="/contact" className="nav-item nav-link">Contact</Link> {/*-- contact popup with map-- */}
                        </div>
                        <div className="ml-auto">
                            <Link className="btn" to="/pick-up">Pickup Request</Link> {/*-- modal , step for pickup-- */}
                            <Link className="btn" to="/login">Login / Signup</Link> {/*-- Login signup popup-- */}
                        
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        
        </>
    )
}
export default NavbBar;