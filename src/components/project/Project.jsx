import React from 'react';
import { useParams } from 'react-router-dom';
import projectData from '../../data/projects.json'
//import { Link } from 'react-router-dom';
//import './project.css';

const Project = () => {

    const { id } = useParams();
    console.log(id)
    const project = projectData.find(project => project.id == id)

console.log(project.h1)
    return (
        
        <div className="container">
            <h3 className="text-center">My Projects</h3>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-around',
                flexWrap: 'wrap'
            }}>

              
                  
                    <div key={project.id} className="card" style={{ width: '40rem', marginTop: '20px' }}>
                        <img src={project.imgsource} className="card-img-top" alt={project.imgalt} />
                        <div className="card-body">
                            <h5 className="card-title">{project.h1}</h5>
                            <p className="card-text">{project.p1}</p>
                           
                        </div>
                    </div>
               



            </div>
        </div>
    );
};

export default Project;