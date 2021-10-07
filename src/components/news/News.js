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
        <section className="news">
            <article id="admission-list-result-2021/2022">
                <h5>
                    2021/2022 Admission Result for Successful Candidates into JSS1
                </h5>
                <h6>Congratulations to all the successful candidates. To access the list, please click the link below:</h6>
                <p>
                    Admission <a href="https://firebasestorage.googleapis.com/v0/b/fedacad-927ea.appspot.com/o/FGA%20ADMISSION%20LIST.pdf?alt=media&token=c42a4d83-9106-400e-8f27-582df7bc1cfe" rel="noopener noreferrer" target="_blank">Result</a>
                </p>
            </article>
            <article id="admission-list-2021/2022">
                <h5>
                    2021/2022 Admission into JSS1
                </h5>
                <h6>Candidates should please follow the steps below:</h6>
                <ol>
                    <li>Visit The ministry <a href="https://education.gov.ng/" rel="noopener noreferrer" target="_blank">website</a></li>
                    <li>Click on FGA Suleja Admission</li>
                    <li>Fill the Registration <a href="https://www.fmeposting.com.ng/web/sulejaForm" rel="noopener noreferrer" target="_blank">Form</a> and Submit</li>
                    <li>Print Out a Copy of the Completed Registration Form</li>
                    <li>Proceed to Pay the Sum of 1,500 on Remita</li>
                    <li>Get a Printout of the Remita Payment Receipt</li>
                    <li>You are required to come to the Exam Centre with the Print Out of your Registration Form and the Remita Payment Receipt</li>
                </ol>
            </article>
            <article id="admission-list">
                <h5>
                    2020/2021 Admission List
                </h5>
                <p>
                    All successful candidates are to collect their Letters of Admission from the Principal's Office beginning from Monday 25th January 2021.
                </p>
                <p>
                    The proof of ownership is the photo card issued to the candidates during the Entrance Examination.
                </p>
                <p>Resumption is on Saturday, 30th January, 2021.</p>
                <p>Time: 9:00 am to 5:00 p.m</p>
                <p>Congratulations!</p>
                <a href="https://firebasestorage.googleapis.com/v0/b/fedacad-927ea.appspot.com/o/FGA%20Admission%20List.pdf?alt=media&token=89ddd05c-1285-491c-aa1a-a1a3a3e3d6b8" target="_blank" rel="noopener noreferrer">View 2020/2021 Admission List</a>
            </article>
            <article>
                <h5>
                    FEDERAL MINISTRY OF EDUCATION, FEDERAL GOVERNMENT ACADEMY,<br />  SULEJA 2020 ENTRANCE EXAMINATION
                </h5>
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
            </article>
        </section>
  </>
);

export default News;