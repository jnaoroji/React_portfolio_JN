import React, { useState } from 'react';
import '../../styles/styles.css';


import { validateEmail } from '../../utils/helpers';



export default function Contact() {
  // Create state variables for the fields in the form and set their initial values to an empty string
  
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either full name, email, and message
    if (inputType === 'fullName') {
      setFullName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Check to see if the name is empty. If so we set an error message to be displayed on the page.
    if (!fullName ) {
      setErrorMessage('Your name is required!');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      
    }// Then we check to see if the email field is empty or is invalid. If so, we set an error message to be displayed.
    if (!email ) {
      setErrorMessage('Your email is required!');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      
    }
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid! Please enter a valid Email Address');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }
    if (!message) {
      setErrorMessage(
        `Please enter a message ${fullName}!`
      );
      return;
    }
    alert(`Thanks for reaching out ${fullName}! I'll be in touch within 48 hours!`);
    console.log(fullName, email, message)

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setFullName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

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
                       
              <form className="form" id="contactForm">
                        
                <div className="form-floating mb-3">
                  <input className="form-control" id="name"
                    value={fullName}
                    name="fullName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Enter your name..."
                  />
                  <label htmlFor="name">Full name</label>
                </div>
                           
                <div className="form-floating mb-3">
                  <input className="form-control" id="email"
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="email">Email address</label>
                </div>
                          
                <div className="form-floating mb-3">
                  <input className="form-control" id="message"
                      value={message}
                      name="message"
                      onChange={handleInputChange}
                      type="text"
                      placeholder="Enter your message here..."
                    />
                  <label htmlFor="message">Message</label>
                </div>
                <div className="d-grid"><button className="btn btn-primary btn-xl" id="submitButton" type="button" onClick={handleFormSubmit}>Submit</button></div>
              </form>
              {errorMessage && (
                <div className="text-center mt-5 mb-5">
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
            </div>
          </div>
                
            </div>
        </section>
    </div>
  );
}
