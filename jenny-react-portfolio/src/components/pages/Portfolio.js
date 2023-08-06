import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { projects } from '../../projects';

export default function Portfolio() {
  return (
    <div>
      <section className="page-section bg-primary" id="portfolio">
        <div className="container-fluid p-0">
          <div className="row g-0">
          {projects.map((project,projectIndex)=>(
                    <div 
                        key={projectIndex} 
                        href={project.link} 
                        className="portfolio-box col-lg-3 col-md-4 col-sm-6" 
                        style={{ 
                          backgroundImage: `url(${project.image})`, 
                          backgroundSize:'cover', 
                          height: '250px',
                          width: '33.33%', 
                          transition: 'opacity 0.25s ease', 
                          textAlign: 'center', }}>
                      <div className="portfolio-box-caption">
                          <div className="project-category text-white-50">{project.description} </div>
                          <div>
                            <a href={project.git}><span className=" project-category text-white-50">Github Repo</span></a>
                          </div>
                          <a href={project.link}><span className="project-name text-white">{project.title}</span></a> 
                      </div>
                    </div>
          ))}
          </div>
        </div>
      </section>
    </div>
  );
}