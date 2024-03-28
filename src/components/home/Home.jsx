import React from 'react';
//import './home.css';

import homeData from '../../data/home.json'
import ft from '../../assets/images/home/Foto.jpg'


const Home = () => {
    return (
        <div className="container" style={{ textAlign: 'center' }}>
            <h2 >Front-End Web Developer</h2>
            {homeData.map((data) => (
                <div className="row" key={"home"} style={{ alignItems: 'center'}}>
                    <div className="col-md-3" style={{ textAlign: 'center' }}>
                        <img src={ft} className="img-fluid" style={{ borderRadius: '10%'}} alt={data.img_alt} />
                        <h3>{data.full_name}</h3>
                    </div>
                    <div className="col-md-9" style={{ textAlign: 'justify' }}>
                        <div className="content">
                            <p>{data.description_hello}</p>
                            <p>{data.description_about}</p>
                            <p>{data.description_Thank_you}</p>
                        </div>
                    </div>
                </div>


            ))}

        </div>
    )
}

export default Home;



{/* <h2 >{data.title}</h2>
<div className="row">
    <div className="col-md-3" style={{ textAlign: 'center' }}>
        <img src={data.myFoto} className="img-fluid rounded" alt={data.img_alt} />
        <h5>{data.full_name}</h5>
    </div>
    <div className="col-md-9" style={{ textAlign: 'justify' }}>
        <div className="content">
            <p>{data.description_hello}</p>
            <p>{data.description_about}</p>

            <p>{data.description_Thank_you}</p>
        </div>
    </div>
</div> */}