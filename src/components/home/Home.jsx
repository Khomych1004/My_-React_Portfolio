import React from 'react';
import homeData from '../../data/home.json'

const Home = () => {
    return (
        <div className="container" style={{ textAlign: 'center' }}>
            <h2 >Front-End Web Developer</h2>
            {homeData.map((data) => (
                <div className="row" key={"home"} style={{ alignItems: 'center' }}>
                    <div className="col-md-3" style={{ textAlign: 'center' }}>
                        <img src={data.my_foto} className="img-fluid" style={{ borderRadius: '10%' }} alt={data.img_alt} />
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
