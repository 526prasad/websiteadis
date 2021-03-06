import React, { useState } from 'react';


function Readmore() {
    const [readMore, setReadMore] = useState(false);

    const extraContent = <div>
        <p className="para2 p">All the is done through a simple smart phone app.We leveraging  smartphone to generate Big data for cattle on cloud with animal biometrics and facial recognition features connected to Cattle Management Tool & Centralised Database.</p>
        <p className="para3 p">Making technology an efficient tool to Milk Forecasting, Remote veterinary services, Linking with fintech and insuring cattle, Enabling farmers to increase their income,Rear desi cattle in situ and breed identifications on field. All these technologies will reach each and every small-holder farmer via App mobile based application at every Village level for all in situ management of indeginious farmers and their cattle.</p>
    </div>
    const linkname = readMore ? 'Read Less..... ' : 'Read More.....'
    return (
        <div className={readMore ? "about-container added" : "about-container"} onClick={() => { setReadMore(!readMore) }}>
            <div className="ab">
                <div className="ab-name"><h3>About</h3></div>
                <div className="hr">
                    <hr/>
                </div>
                <div className="ab-para">
                    <p className="para1 p">Adis Technologies Pvt Ltd is an agri-tech company that combines extension and technology to provide service support to the farmers by managing their animal records like  Pedigree records, health records and providing breeding assistance to improve their cattle breeds. The farmers and their cattle issues are addressed in a scientific way timely.</p>
                    {readMore && extraContent}
                    <p className="readmore" onClick={() => { setReadMore(!readMore) }}> {linkname} </p>
                </div>
            </div>
        </div>
    );
}

export default Readmore;