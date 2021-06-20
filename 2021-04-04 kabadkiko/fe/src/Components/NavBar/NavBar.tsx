import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import { getCookie } from '../../services/cookie';
import { logout } from '../../Redux/usersType/userType.action';
const NavbBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    // let cookieToken = JSON.parse(getCookie('access_token'));
    // console.log('cookieToken----', cookieToken);
    const isLoggedIn = useSelector((state: any) => state.userType.isLoggedIn)
    const Usertoken = useSelector((state: any) => state.userType.token);
    let strict_loggedIn = isLoggedIn && Usertoken ? true : false;
    console.log('------strict_loggedIn-----', strict_loggedIn)
    let localToken = window.localStorage.getItem('access_token');

    const logoutButton = () => {
        console.log('---logout hioteed')
       dispatch(logout())
    console.log('isLoggedIn in logout------', isLoggedIn);
    if(isLoggedIn === false) {
        history.push('/login');
    }
    }

    return (
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
                                <Link to="/scrap-list" className="nav-item nav-link">price Card</Link> {/*-- prices of scraps-- */}
                                <Link to="/scrap-list" className="nav-item nav-link">Scrap Calculator</Link>  {/*-- scrap calculator-- */}
                                {/* <Link to="portfolio.html" className="nav-item nav-link">Login/Signup</Link> */}

                                <Dropdown className=" learnmore">
                                    <Dropdown.Toggle className=" learnmore" >
                                        Learn More
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>
                                            <Link to="/blog" className="dropdown-item">Blog Page</Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <Link to="/scrap-list" className="dropdown-item">Scrap Calculator</Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <Link to="/about" className="dropdown-item">About</Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <Link to="/how-it-works" className="dropdown-item">How it works</Link>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Link to="/about" className="nav-item nav-link">About</Link> {/*-- about page with team && company and scrap-- */}
                                <Link to="/contact" className="nav-item nav-link">Contact</Link> {/*-- contact popup with map-- */}
                            </div>
                            <div className="ml-auto">
                                <Link className="btn" to="/pick-up">Pickup Request</Link> {/*-- modal , step for pickup-- */}
                                {!localToken ?
                                    <Link className="btn" to="/login">Login / Signup</Link> /*-- Login signup popup-- */
                                    : <Link className="btn" to="/logout" onClick={logoutButton}>Logout</Link>
                                }
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

        </>
    )
}
export default NavbBar;