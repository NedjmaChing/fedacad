import React from 'react';
import principal from '../../assets/img/principal2.JPG';
import vpAcad from '../../assets/img/vp-acad.JPG';
import vpAdmin from '../../assets/img/vp-admin.JPG';
import vpAffairs from '../../assets/img/vp-affairs.JPG';
import vpAcad2 from '../../assets/img/vp-acad2.JPG';
import vpSpecialDuty from '../../assets/img/vp-specialduty.JPG';
import vpAffairs2 from '../../assets/img/vp-affairs2.JPG';

const Administrators=() => (
    <section className="administrators"> 
        <h4>Effective and Efficient Administrators</h4>
        <p>Listed below are the current school administrators dedicated to the growth and proper running of the school </p>
        <div className="administrator-container">
            <div className="administrator">
                <img src={principal} alt="Principal Federal Government Academy Suleja" />
                <h6>Dr. Asma'u Y. Abdullahi</h6>
                <p>Principal</p>
            </div>
            <div className="administrator">
                <img src={vpAcad} alt="Vice Principal Academics Federal Government Academy Suleja"/>
                <h6>Mrs. Ukama Cornelia Ini-Abasi</h6>
                <p>V.P Academics I</p>
            </div>
            <div className="administrator">
                <img src={vpAdmin} alt="Vice Principal Admin Federal Government Academy Suleja"/>
                <h6>Mrs. Ayashim Theresa Achungulu</h6>
                <p>V.P Admin</p>
            </div>
            <div className="administrator">
                <img src={vpAffairs} alt="Vice Principal Affairs Federal Government Academy Suleja"/>
                <h6>Mr. Alade Adegboye Yusuf</h6>
                <p>V.P Student Affairs I</p>
            </div>
            <div className="administrator">
                <img src={vpAcad2} alt="Vice Principal Academics Federal Government Academy Suleja"/>
                <h6>Mr. Itina Ibanga Chukwuemeka</h6>
                <p>V.P Academics II</p>
            </div>
            <div className="administrator">
                <img src={vpSpecialDuty} alt="Vice Principal Special Duties Federal Government Academy Suleja"/>
                <h6>Mr. Ado Zayyana</h6>
                <p>V.P Special Duty</p>
            </div>
            <div className="administrator">
                <img src={vpAffairs2} alt="Vice Principal Affairs Federal Government Academy Suleja"/>
                <h6>Mrs. Okafor Mary Ifeyinwa</h6>
                <p>V.P Student Affairs II</p>
            </div>

        </div>

    </section>
);

export default Administrators;