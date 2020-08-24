import React from 'react';

const Welcome = () => (
    <section className="welcome">
        <h3>Welcome to Federal Government Academy</h3>
        <p>Founded in 1990 with the goal of nurturing gifted and talented children of secondary school age. It has since then been producing individuals who have gone ahead to make great impacts in various parts of the world. It is truly a home of great talents. </p>
        <div className="advert">
            <div>
                <p><span className="mdi mdi-hand-okay"></span></p>
                <h5>Excellence in innovation</h5>
                <p>we exhibit a higher level of critical thinking in problem solving.</p>
            </div>
            <div>
                <p><span className="mdi mdi-head-lightbulb"></span></p>
                <h5>Domain of Profound Talents</h5>
                <p>The fedacad community is enriched with people of great gifts and skills.</p>
            </div>
            <div>
                <p><span className="mdi mdi-school"></span></p>
                <h5>Entrepreneurship and Leadership</h5>
                <p>Our students continue to thrive and make distinct impacts in the world at large.</p>
            </div>
        </div>
    </section>
);

export default Welcome;