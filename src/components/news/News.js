import React from 'react';
import { Helmet } from 'react-helmet';

import Breadcrumb from '../common/Breadcrumb';

const News = () => (
    <>
        <Helmet><title>News - Federal Government Academy Centre for the Gifted and Talented Suleja, Niger State</title></Helmet>
        <Breadcrumb 
            link="news" 
            linkText="News" 
            title="Latest News" 
        />
        <section className="about-fedacad">
            <h4>
                FEDERAL MINISTRY OF EDUCATION, FEDERAL GOVERNMENT ACADEMY,<br />  SULEJA 2020 ENTRANCE EXAMINATION
            </h4>
            <p>
                The Federal Government Academy Suleja is a National Centre for nurturing gifted and talented children of Secondary School age. Students of the Academy are on Federal Government Scholarship which covers their tuition, boarding, feeding, uniforms and basic text and exercise books only.
            </p>
            <p>
                The Gifted Education Programme gives opportunity to brilliant, gifted and talented, especially economically disadvantaged students who lack financial resources for this kind of education. Every state of the Federation has this class of students.
            </p>
            <p>
                It is therefore the wish of the Hon. Minister of Education Malam Adamu Adamu, that States Ministries of Education should use this opportunity to sponsor their representatives to the Centre to fill their slots at a fee of N1,500.00 only per candidate. The Entrance Examination will take place on 26th September, 2020.
            </p>
            <p>
                This great opportunity should be extended to both Urban and Rural dwellers irrespective of sex. Please download the form and other necessary details from www.education.gov.ng .
            </p>
            <p>
                Dr. Asma’u Y. Abdullahi
            </p>
            <p>
                Director/Principal, FGA
            </p>
        </section>
  </>
);

export default News;