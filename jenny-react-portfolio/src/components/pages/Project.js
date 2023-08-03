import React from 'react';
// import styles from '../../styles/styles.css'
// import background from "../../assets/img/portfolio/thumbnails/1";

// const styles = {
//   headerStyle: {
//     backgroundImage: "../../assets/img/portfolio/thumbnails/1",
//   },
// };

export default function Project() {
  return (
    <div>
      <div className="col-sm">
        <a className="portfolio-box" href="../../assets/img/portfolio/fullsize/1.jpg" title="Project Name">
          <img className="" src="../../assets/img/portfolio/thumbnails/1.jpg" alt="studying" />
            <div className="portfolio-box-caption">
            <div className="project-category text-white-50">Project</div>
            <div className="project-name">Project Name</div>
            </div>
        </a>
      </div>
    </div>
  );
}