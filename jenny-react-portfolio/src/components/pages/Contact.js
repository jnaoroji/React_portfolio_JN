// import React, { useState } from 'react';
import '../../styles/styles.css';
import React from 'react';
// function Form() {
//   // Here we set two state variables for firstName and lastName using `useState`
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');

//   const handleInputChange = (e) => {
//     // Getting the value and name of the input which triggered the change
//     const { name, value } = e.target;

//     // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
//     return name === 'firstName' ? setFirstName(value) : setLastName(value);
//   };

//   const handleFormSubmit = (e) => {
//     // Preventing the default behavior of the form submit (which is to refresh the page)
//     e.preventDefault();

//     // Alert the user their first and last name, clear the inputs
//     alert(`Hello ${firstName} ${lastName}`);
//     setFirstName('');
//     setLastName('');
//   };

//   return (
//     <div>
//       <p>
//         Hello {firstName} {lastName}
//       </p>
//       <form className="form">
//         <input
//           value={firstName}
//           name="firstName"
//           onChange={handleInputChange}
//           type="text"
//           placeholder="First Name"
//         />
//         <input
//           value={lastName}
//           name="lastName"
//           onChange={handleInputChange}
//           type="text"
//           placeholder="Last Name"
//         />
//         <button type="button" onClick={handleFormSubmit}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Form;



export default function Contact() {
  return (
    <div>
      <section className="page-section bg-primary" id="contact">
        <div className="container px-4 py-4 px-lg-5 py-lg-5 bg-white rounded">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 col-xl-6 text-center">
              <h2 className="mt-0">Let's Get In Touch!</h2>
              <hr className="divider" />
              <p className="text-muted mb-5">Ready to start your next project with me? Send me a message and I'll will get back to you as soon as possible!</p>
            </div>
          </div>
          <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
            <div className="col-lg-6">
                       
              <form id="contactForm">
                        
                <div className="form-floating mb-3">
                  <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                  <label for="name">Full name</label>
                  <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                </div>
                           
                <div className="form-floating mb-3">
                  <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                  <label for="email">Email address</label>
                  <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                  <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                </div>
                            
                {/* <div className="form-floating mb-3">
                  <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                  <label for="phone">Phone number</label>
                  <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                </div> */}
                          
                <div className="form-floating mb-3">
                  <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." data-sb-validations="required"></textarea>
                  <label for="message">Message</label>
                  <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                </div>
                            
                <div className="d-none" id="submitSuccessMessage">
                  <div className="text-center mb-3">
                  <div className="fw-bolder">Form submission successful!</div>
                    To activate this form, sign up at
                    <br />
                    {/* <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a> */}
                  </div>
                </div>
                            
                <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                     
                <div className="d-grid"><button className="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Submit</button></div>
              </form>
            </div>
          </div>
                
            </div>
        </section>
    </div>
  );
}
