import React, { useEffect, useRef } from 'react';

const Slider = (props) => {
    const next = useRef();
    const prev = useRef();
    const auto = true;
    const intervalTime = 5000;
    let slideInterval = useRef();

    useEffect(() => {
        next.current.addEventListener('click', () => {
            nextSlide();
            if (auto) {
                clearInterval(slideInterval.current);
                slideInterval.current = setInterval(nextSlide, intervalTime);
            }
        });

        prev.current.addEventListener('click', () => {
            prevSlide();
            if (auto) {
                clearInterval(slideInterval.current);
                slideInterval.current = setInterval(nextSlide, intervalTime);
            }
        });
        // Auto slide
        if (auto) {
            // Run next slide at interval time 
            slideInterval.current = setInterval(nextSlide, intervalTime);
        }

        // cleaning up effect
        return () => {
            clearInterval(slideInterval.current);
        }
        // eslint-disable-next-line
    }, []);

    const nextSlide = () => {
        const slides = document.querySelectorAll('.slide');//grabbing every element with the class of slide
        // Get current class
        const current = document.querySelector('.current');
        // Remove current class
        current.classList.remove('current');
        // check for next slide
        if (current.nextElementSibling) {
            // Add current to next sibbling
            current.nextElementSibling.classList.add('current');
        } else {
            // Add current to first slide
            slides[0].classList.add('current');
        }
    }

    const prevSlide = () => {
        const slides = document.querySelectorAll('.slide');//grabbing every element with the class of slide
        // Get current class
        const current = document.querySelector('.current');
        // Remove current class
        current.classList.remove('current');
        // check for previous slide
        if (current.previousElementSibling) {
            // Add current to next sibbling
            current.previousElementSibling.classList.add('current');
        } else {
            // Add current to last slide
            slides[slides.length - 1].classList.add('current');
        }
    }

    return (
        <>
            <section className="slider">
                <div className="slide current">
                    <div className="overlay">
                        <h2 className="overlay-schoolname">Federal Government Academy</h2>
                        <h4 className="subtitle">Centre for the Gifted &amp; Talented</h4>
                    </div>
                </div>
                <div className="slide">
                    <div className="overlay"></div>
                    <div className="content">
                        <h3>Learning Environment</h3>
                        <p>A good and condusive learning environment to help train our gifted and talented students</p>
                    </div>
                </div>
                <div className="slide">
                    <div className="overlay"></div>
                    <div className="content">
                        <h3>School Facilities</h3>
                        <p>Equipped with state of the art laboratories, classroom, accomodation, etc facilities to accomodate every student</p>
                    </div>
                </div>
                <div className="slide">
                    <div className="overlay"></div>
                    <div className="content">
                        <h3>Extra-Curricular Activities</h3>
                        <p>Engaging the students in various extra-curricular activities to fuel their passion and prepare them for an all round success</p>
                    </div>
                </div>
                <div className="slide">
                    <div className="overlay"></div>
                    <div className="content">
                        <h3>Gifted Program</h3>
                        <p>Listed among the Gifted and Talented Programs in the world to help nuture exceptionally gifted children in every study field</p>
                    </div>
                </div>
                <div className="slide">
                    <div className="overlay"></div>
                    <div className="content">
                        <h3>Dedicated Staff</h3>
                        <p>Properly trained and dedicated staff members to help assist in their learning process</p>
                    </div>
                </div>
            </section>
            <button ref={next} className="slider-button" id="next"><span className="mdi mdi-arrow-right button-icon"></span></button>
            <button ref={prev} className="slider-button" id="prev"><span className="mdi mdi-arrow-left button-icon"></span></button>
        </>
    );
}

export default Slider;