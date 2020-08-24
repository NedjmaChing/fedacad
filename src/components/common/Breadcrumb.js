import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Breadcrumb = (props) => {
    const { link, linkText, title } = props; // destructuring

    return (
        <section className="breadcrumb-bar">
            <Link to="/">Home</Link>
            <span className="mdi mdi-chevron-right"></span>
            <Link to={`/${link}`}>{linkText}</Link>
            <h4>{title}</h4>
        </section>
    );
}

Breadcrumb.propTypes = {
    link: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default Breadcrumb;