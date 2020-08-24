import React from 'react';
import principal from '../../assets/img/principal.JPG';

const Principal = () => (
    <section className="principal">
        <div>
            <h4>Welcome Address</h4>
            <h5>The Principal</h5>   
            <p>Welcome to the Federal Government Academy, Suleja, Niger State, Nigeria. I feel elated to be at the helm of affairs at the only National centre for nurturing the Gifted and Talented Children of Nigeria. Children with high intellectual abilities are drawn from the 36 states of the Federation including the FCT and given the best opportunities and scholarship by the Federal Government to exhibit their gifts and talents.</p>
            <p>Federal Government Academy is a boarding school that converge students of very many different characters to have their cultures fused together, but through the observance of school rules and regulations, they learn to live with one another in harmony. This harmonious relationship helps in moulding the students' character positively, thereby gently suppressing undesirable traits to make room for decent habits.</p> 
            <p>We employ many strategies to achieve our goal. Teachers are carefully monitored and supervised to apply integrated teaching and learning approaches. The gifted and talented children are placed under dedicated and committed teacher mentors who ensure complete check on academic, morals, social and general behavioural patterns of the students so that they come out as the best nationwide.</p>
            <p>Our core values are Discipline Drive, Task Commitments, Honesty, Creativity and Excellence. You are all invited to partake in our Annual National Entrance Examination at various designated centres across Nigeria so as to avail your children/wards of this great opportunity of being part of Nigerian gifts and talents.</p>       
        </div>
        <div>
            <div>
                <img src={principal} alt="Dr. Asma'u Y. Abdullahi" />
                <h6>Dr. Asma'u Y. Abdullahi</h6>
                <p>Principal</p>
            </div>
        </div>
    </section>
);
export default Principal;