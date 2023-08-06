import React from 'react';
import avatar from '../../assets/images/profile.jpg';

// const style = {
//   avatar:{
//     src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp",
//     width: 150px,
//     backgroundImage: `url("../../assets/img/portfolio/thumbnails/1")`,
//   }

// }

export default function About() {
  return (
    <div>
      <section className="page-section bg-primary" id="about">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 text-center" style={{alignItems: 'center',}}>

                        <div className="rounded-circle shadow-4" style={{ backgroundImage: `url(${avatar})`, backgroundSize:"cover", height: '220px',width: '200px', alignItems: 'left',}} alt="Jenny Avatar" /></div>
                        <div style={{alignItems: 'center'}}>
                          <h2 className="text-white mt-0" >About Me!</h2>
                          <hr className="divider divider-light" />
                        </div>
                        <p className="text-white-75 mb-4">I'm currently a web development student studying online at the University of Adelaide, graduating in September 2023. This webpage showcases some of my current work. I have a bachelor's degree in Information Management, have been working as a Sommelier for the past 3 years and have been in the Hospitality industry for over 15 years.
                            My passions inlude Food, Wine and Sport. I am a bubbly, competitive, hard worker. I am a quick
                            learner and am always looking for new challenges and ways to improve and learn. I enjoy creating, establishing
                            and maintaining business and customer relationships and strive to excel at this. My hospitality and customer
                            service background has stemmed into a strong mental aptitude for working efficiently under pressure, and
                            creative problem solving on the job. 
                            I am looking for a role that will allow me to grow, take on new opportunities and responsibilities and teach
                            me new skills. I have plenty of Customer Service, Supervisory, Management, Event and Operational experience
                            and would love to work in a challenging environment. </p>
                            
                        <div><a className="btn btn-light btn-xl" href="#portfolio">Get Started!</a></div>
                    </div>
            </div>    
              
        </section>
    </div>
  );
}
