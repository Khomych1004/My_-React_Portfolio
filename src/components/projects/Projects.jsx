import React from "react";
import { Link } from 'react-router-dom';
//import "./projects.css";
import projectData from '../../data/projects.json'

//import im from '../../assets/images/projects/Weather_For_Five_Days.png'

const Projects = () => {
    return (
        <div className="container">
            <h3 className="text-center">My Projects</h3>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-around',
                flexWrap: 'wrap'
            }}>

                {projectData.map((project) => (
                  
                    <div key={project.id} className="card" style={{ width: '18rem', marginTop: '20px' }}>
                        <img src={project.imgsource} className="card-img-top" alt={project.imgalt} />
                        <div className="card-body">
                            <h5 className="card-title">{project.h1}</h5>
                            <p className="card-text">{project.p1}</p>
                            <Link to={`/Projects/${project.id}`} className="btn btn-primary">Open</Link>
                        </div>
                    </div>
                ))}



            </div>
        </div>
    )
}

export default Projects;