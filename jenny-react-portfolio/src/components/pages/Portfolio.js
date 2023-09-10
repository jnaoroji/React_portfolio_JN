import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { projects } from '../../projects';

export default function Portfolio() {
  return (
    <div>
      <section className="page-section bg-primary" id="portfolio">
        <div className="container-fluid p-0">
          <div className="row  d-flex align-items-center justify-content-center">
          {projects.map((project,projectIndex)=>(
                    <div 
                        key={projectIndex} 
                        href={project.link} 
                        className="portfolio-box col-lg-4 col-md-4 col-sm-6 col-12" 
                        style={{ 
                          backgroundImage: `url(${project.image})`, 
                          backgroundSize:'cover', 
                          height: '250px',
                          transition: 'opacity 0.25s ease', 
                          textAlign: 'center',
                          margin: '10px', }}>
                      <div className="portfolio-box-caption">
                          <a href={project.link}><span className="project-name text-white">{project.title}</span></a> 
                          <div className="project-category text-white-50 mt-4">{project.description} </div>
                          <div className="project-stack text-white-50 mt-4">{project.stack} </div>
                          <div className="mt-4">
                            <a href={project.git}>
                              <span className=" project-category text-white-50">
                                <i 
                                className="bi bi-github"
                                style={{
                                  fontSize: '24px',
                                  margin:'10px',
                                }}> 
                                </i>
                              </span>
                            </a>
                            <a href={project.link}>
                              <span className=" project-category text-white-50">
                                <i 
                                className="bi bi-arrow-up-right-square-fill"
                                style={{
                                  fontSize: '24px',
                                }}> 
                                </i>
                              </span>
                            </a>
                          </div>

                      </div>
                    </div>
          ))}
          </div>
        </div>
      </section>
    </div>
  );
}