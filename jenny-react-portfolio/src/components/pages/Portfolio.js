import React from 'react';
import background from "../../assets/img/portfolio/thumbnails/1.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

// const styles = {
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
          <div className="col-lg-3 col-md-4 col-sm-6" style={{ backgroundImage: `url(${background})`, backgroundSize:"cover" }}>
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Project</div>
                                <div className="project-name">Project Name</div>
                            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6" style={{ backgroundImage: `url(${background})`, backgroundSize:"cover" }}>
                            {/* <img className="img-fluid" style={{ backgroundImage: `url(${background})`, backgroundSize:"cover" }} alt="thumbnail1" /> */}
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Project</div>
                                <div className="project-name">Project Name</div>
                            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6" style={{ backgroundImage: `url(${background})`, backgroundSize:"cover" }}>
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Project</div>
                                <div className="project-name">Project Name</div>
                            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6" style={{ backgroundImage: `url(${background})`, backgroundSize:"cover" }}>
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Project</div>
                                <div className="project-name">Project Name</div>
                            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6" style={{ backgroundImage: `url(${background})`, backgroundSize:"cover" }}>
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Project</div>
                                <div className="project-name">Project Name</div>
                            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6" style={{ backgroundImage: `url(${background})`, backgroundSize:"cover" }}>
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