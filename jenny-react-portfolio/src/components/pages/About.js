import React from "react";
import avatar from "../../assets/images/profile.jpg";

export default function About() {
  return (
    <div>
      <section className="page-section bg-primary" id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="card-img-top d-flex justify-content-center">
                <div
                  className="rounded-circle shadow-4"
                  style={{
                    backgroundImage: `url(${avatar})`,
                    backgroundSize: "cover",
                    height: "220px",
                    width: "200px",
                    alignItems: "left",
                  }}
                  alt="Jenny Avatar"
                />
              </div>
            </div>
            <div className="card-body">
              <h2 className="text-white mt-4 mb-4 text-center">About Me</h2>
              <hr className="divider divider-light" />

              <p className="text-white-75 mb-4">
                I’m a Full Stack Web Developer leveraging a management
                background to provide a unique perspective on how end users
                interact with websites and software platforms. This website
                showcases some of my current work. I have a certificate in
                Full-Stack Web Development from the University of Adelaide and a
                Bachelor's degree in Business, Majoring in Information
                Management and Marketing. I have been working as a Sommelier for
                the past 3 years and have been in the Hospitality industry for
                over 10 years. My passions include Food, Wine and Sport. I am a
                bubbly, competitive, hard worker. I am a quick learner and am
                always looking for new challenges and ways to improve and learn.
                I enjoy creating, establishing and maintaining business and
                customer relationships and strive to excel at this. My
                hospitality and customer service background has stemmed into a
                strong mental aptitude for working efficiently under pressure,
                and creative problem solving on the job. I am looking for a Web Development role
                that will allow me to grow, take on new opportunities and
                responsibilities and teach me new skills. I have plenty of
                Supervisory, Management, Event and Operational experience and
                would love to work in a challenging environment.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
