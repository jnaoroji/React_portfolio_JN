import React from 'react';
import background from "../../assets/img/portfolio/thumbnails/1.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

// const style = {
//   backgroundImage: {
//     backgroundImage: `url("../../assets/img/portfolio/thumbnails/1")`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     width: '33.33%', 
//     float: 'center',
//     height: '100vh',
//   },
// };


export default function Portfolio() {
  return (
    <div>
      <section className="page-section bg-primary" id="portfolio">
        {/* <div className="container-fluid p-0"> */}
          <div className="row g-0">
          <div className="portfolio-box col-lg-3 col-md-4 col-sm-6" style={{ backgroundImage: `url(${background})`, backgroundSize:"cover", height: '300px',width: '33.33%', }}>
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Project</div>
                                <div className="project-name">Project Name</div>
                            </div>
          </div>
          <div className="portfolio-box col-lg-3 col-md-4 col-sm-6" style={{ backgroundImage: `url(${background})`, backgroundSize:"cover", height: '300px',width: '33.33%', }}>
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Project</div>
                                <div className="project-name">Project Name</div>
                            </div>
          </div>
          <div className="portfolio-box col-lg-3 col-md-4 col-sm-6" style={{ backgroundImage: `url(${background})`, backgroundSize:"cover", height: '300px',width: '33.33%', }}>
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Project</div>
                                <div className="project-name">Project Name</div>
                            </div>
          </div>
          <div className="portfolio-box col-lg-3 col-md-4 col-sm-6" style={{ backgroundImage: `url(${background})`, backgroundSize:"cover", height: '300px',width: '33.33%', }}>
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Project</div>
                                <div className="project-name">Project Name</div>
                            </div>
          </div>
          <div className="portfolio-box col-lg-3 col-md-4 col-sm-6" style={{ backgroundImage: `url(${background})`, backgroundSize:"cover", height: '300px',width: '33.33%', }}>
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Project</div>
                                <div className="project-name">Project Name</div>
                            </div>
          </div>
          <div className="portfolio-box col-lg-3 col-md-4 col-sm-6" style={{ backgroundImage: `url(${background})`, backgroundSize:"cover", height: '300px',width: '33.33%', }}>
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Project</div>
                                <div className="project-name">Project Name</div>
                            </div>
          </div>

        </div>
      </section>
    </div>
  );
}