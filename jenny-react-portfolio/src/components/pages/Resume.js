import React from "react";

export default function Resume() {
  // Create state variables for the fields in the form and set their initial values to an empty string

  return (
    <div>
      <section className="page-section bg-primary" id="resume">
        <div className="container px-4 py-4 px-lg-5 py-lg-5 bg-white rounded">
        <h2 className="text-center mt-0">Jenny Naoroji - Full Stack Web Developer</h2>
          <h2 className="text-center mt-0">At Your Service</h2>
          <hr className="divider" />
            <p className="text-muted mb-5 text-center">
                Like what you see? Get in touch with me via the contact form!
            </p>
          <div className="row gx-4 gx-lg-5">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-gem fs-1 text-primary"></i>
                </div>
                <h3 className="h4 mb-2">Skills</h3>
                <p className="text-muted mb-0">
                Web Development, Web Design, Programming, SQL, MERN, React, MongoDB, Mongoose, Quality Assurance
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-laptop fs-1 text-primary"></i>
                </div>
                <h3 className="h4 mb-2">Technologies</h3>
                <p className="text-muted mb-0">
                HTML5, CSS3, JavaScript ES6+, Heroku, Bootstrap, GitHub, GraphQl, MVC, OOP, Express.js,
                Node.js, React.js
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-chat-square-text fs-1 text-primary"></i>
                </div>
                <h3 className="h4 mb-2">Interpersonal skills</h3>
                <p className="text-muted mb-0">
                  Financial reporting, Management, Sales, Negotiation, Communication, Leadership, Time management, 
                  Training, Organising, Planning, Problem Solving
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-briefcase fs-1 text-primary"></i>
                </div>
                <h3 className="h4 mb-2">Resume</h3>
                <p className="text-muted mb-0">
                  Click here to see my </p>

                  <a
                    href="https://drive.google.com/file/d/1TjUkmolNaOKreHSfPFGfpsKN5oclTbYS/view?usp=sharing"
                    target="_blank" rel="noreferrer"
                  >
                    Resume 
                  </a>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
