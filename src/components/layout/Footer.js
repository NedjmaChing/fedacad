import React from 'react'

const Footer = () =>(
    <footer className="hide-from-printer">
        <div>
            <h4>Federal Government Academy</h4>
            <p>Centre for the Gifted and Talented</p>
        </div>
        <div>
            <h4>Contact Us</h4>
            <a href="mailto:fedacademysuleja@yahoo.com"><span className="mdi mdi-email-outline"></span>&nbsp; fedacademysuleja@yahoo.com</a>
            <a href="tel:+2348035802249"><span className="mdi mdi-phone"></span>&nbsp; +2348035802249</a>
            <a href="tel:+234096270975"><span className="mdi mdi-phone"></span>&nbsp; +234096270975</a>
            <p><span className="mdi mdi-map-marker"></span>&nbsp; P.O. Box 80, Suleja - Niger State</p>
        </div>
        <div>
            <p>Copyright &copy; {new Date().getFullYear()} Federal Government Academy, Suleja - All Rights Reserved.</p>
            <p>Powered by <a href="https://domstech.com" target="_blank" rel="noopener noreferrer">Domstech</a></p>
        </div>
    </footer>
);

export default Footer;