import React from 'react';
import slide4 from '../../assets/img/slide4.jpg';
import {Link} from 'react-router-dom';
import TextClamp from 'react-string-clamp';

import application from '../../assets/img/application.jpg';
import admissionList from '../../assets/img/slide2.jpg';


const News = () => (
    <section className="news">
        <h4>News, Events, and updates</h4>
        <p>Stay up to date with happenings related to the school</p>
        <div className="news-container">
            <article>
                <div>
                    <img src={admissionList} alt="Federal Government Academy Suleja, Entrance Examination" />
                </div>
                <div>
                    <a href="https://firebasestorage.googleapis.com/v0/b/fedacad-927ea.appspot.com/o/FGA%20Admission%20List.pdf?alt=media&token=89ddd05c-1285-491c-aa1a-a1a3a3e3d6b8" target="_blank" rel="noopener noreferrer">
                        <TextClamp 
                            text="2020/2021 Admission List"
                            lines={2}
                            className="Application for 2020/2021 Academic Session now Open"
                        />
                    </a>
                    <p><span className="mdi mdi-calendar"></span>&nbsp;&nbsp;&nbsp;24th January, 2021</p>
                    <p>All successful candidates are to collect their Letters of Admission from the Principal's Office beginning from Monday 25th January 2021.</p>
                    <Link to="/news#admission-list">Read More</Link>
                </div>
            </article>
            <article>
                <div>
                    <img src={application} alt="Federal Government Academy Suleja, Entrance Examination" />
                </div>
                <div>
                    <a href="https://firebasestorage.googleapis.com/v0/b/fedacad-927ea.appspot.com/o/admission%20form.pdf?alt=media&token=a64f246a-6ef6-4b50-9f1e-d3e40d91c1d2" target="_blank" rel="noopener noreferrer">
                        <TextClamp 
                            text="Application for 2020/2021 Academic Session now Open"
                            lines={2}
                            className="title"
                        />
                    </a>
                    <p><span className="mdi mdi-calendar"></span>&nbsp;&nbsp;&nbsp;19th August,2020</p>
                    <p>The school for the gifted and talented is inviting students to apply for the 2020/2021 academic session starting in September. Download the form by clicking on the link above.</p>
                </div>
            </article>
            <article>
                <div>
                    <img src={slide4} alt="Football game" />
                </div>
                <div>
                    <Link to="/news">
                        <TextClamp 
                            text="Federal Ministry Of Education, Federal Government Academy, Suleja 2020 Entrance Examination"
                            lines={2} 
                            className="title"
                        />
                    </Link>
                    <p><span className="mdi mdi-calendar"></span>&nbsp;&nbsp;&nbsp;23rd August,2020</p>
                    <p>The Federal Government Academy Suleja is a National Centre for nurturing gifted and talented children of Secondary School age. Students of the Academy are on Federal Government Scholarship which covers their tuition, boarding, feeding, uniforms and basic text and exercise books only.</p>
                </div>
            </article>
        </div>
    </section>
);

export default News;