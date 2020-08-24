import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import classnames from 'classnames';
import M from 'materialize-css';

import logo from '../../assets/img/logo.png';
  


const Header = (props) => {
    // eslint-disable-next-line
    const [scroll, setScroll] = useState(0);
    // eslint-disable-next-line
    const [top, setTop] = useState(0);
    // eslint-disable-next-line
    const [height, setHeight] = useState(0);
    const path = props.location.pathname;
   
   useEffect(() => {
        const elems = document.querySelectorAll('.sidenav');
        // eslint-disable-next-line
        const instances = M.Sidenav.init(elems, { });
        
        const mobileLinks = document.querySelectorAll('.mobile-link');

        mobileLinks.forEach((mobileLink) => {
            mobileLink.addEventListener('click', () => {
                setTimeout(() => instances[0].close(), 1000);
            });
        });
   }, []); 

   useEffect(() => {
        const navbar = document.querySelector('#nav');
        setTop(navbar.offsetTop);
        setHeight(navbar.offsetHeight);
        window.addEventListener('scroll', handleScroll);
   }, []);

    /*useEffect(() => {
        props.admin.authenticated ? setAdmin(props.admin.admin) : setAdmin({});
        const navbar = document.querySelector('#nav');
        setTop(navbar.offsetTop);
        setHeight(navbar.offsetHeight);
        window.addEventListener('scroll', handleScroll);
    }, [props.admin, props.history]);
    */

    const handleScroll = () => {
        setScroll(window.scrollY);
    }


    return (
        <header className="hide-from-printer">
            <div className="header-top">
                <div>
                    <span>Have any questions? Contact us via &nbsp;</span>
                    <p><span className="mdi mdi-phone"></span><a href="tel:+2348035802249">&nbsp;+2348035802249</a></p>
                    <a href="mailto:info@seminary.org"><span className="mdi mdi-email-outline"></span>&nbsp;fedacademysuleja@yahoo.com</a>
                </div>
                <div>
                    {/*<Link className="auth-link" to="/portal/dashboard">Portal Dashboard</Link>                        
                    <Link className="auth-link" to="/logout">Logout</Link>*/}
                    <Link className="login" to="/portal/login"><span className="mdi mdi-lock-outline login-icon"></span>Portal</Link>
                </div>
            </div>
            <nav id="nav" className={scroll > top ? 'sticky': ''}>
                <div className="nav-wrapper">
                    <a href="#!" data-target="mobile-menu" className="sidenav-trigger"><span className="mdi mdi-menu"></span></a>
                    <Link to="/" className="brand-logo right hide-on-med-and-down"><img className="logo" src={logo} alt="Federal Government Academy, Suleja Logo" /></Link>
                    <h6>Federal Government Academy</h6>
                    <ul className="left hide-on-med-and-down">
                        <li><Link className={classnames('', { 'active-link': path === '/' })} to="/">Home</Link></li>
                        <li><Link className={classnames('', { 'active-link': path === '/about'})} to="/about">About</Link></li>
                        <li><Link className={classnames('', { 'active-link': path === '/news'})} to="/news">News</Link></li> 
                        <li><Link className={classnames('', { 'active-link': path === '/gallery'})} to="/gallery">Gallery</Link></li>
                        <li><Link className={classnames('', { 'active-link': path === '/contact'})} to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
           <ul id="mobile-menu" className="sidenav">
                <div>
                    <img src={logo} alt="Federal Government Academy, Suleja Logo" />
                    <h5>Federal Government Academy, Suleja</h5>
                </div>
                <li><Link className={classnames('mobile-link', {'active-mobile-link': path === '/'})} to="/">Home</Link></li>
                <li><Link className={classnames('mobile-link', {'active-mobile-link': path === '/about'})} to="/about">About</Link></li>
                <li><Link className={classnames('mobile-link', {'active-mobile-link': path === '/news'})} to="/news">News</Link></li>
                <li><Link className={classnames('mobile-link', {'active-mobile-link': path === '/gallery'})} to="/gallery">Gallery</Link></li>
                <li><Link className={classnames('mobile-link', {'active-mobile-link': path === '/contact'})} to="/contact">Contact</Link></li>
            </ul>
        </header>
    )
}

export default withRouter(Header);