import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

function ContactSectionThree() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      'service_sekkixw',     
      'template_clw191q',     // your template ID
      form.current,
      'AqSE1k3B-1V1tqXhI'    // your public key
    ).then(
      (result) => {
        console.log(result.text);
        setMessageSent(true);  // show success message
        setIsSending(false);   // stop loading
        e.target.reset();      // reset form fields
      },
      (error) => {
        console.log(error.text);
        setIsSending(false);
        alert("Something went wrong. Please try again.");
      }
    );
  };

  const handleInputChange = () => {
    if (messageSent) setMessageSent(false); // hide success message instantly
  };

  return (
    <section className="contact-section-three pull-up">
      <div className="auto-container">
        <div className="row">
          {/* Info Column */}
          <div className="info-column col-lg-6 col-md-12 col-sm-12 order-2">
            <div className="inner-column wow fadeInRight">
              <div className="sec-title light">
                <div className="sub-title">Get in Touch</div>
                <h2>Get a free quote today</h2>
                <div className="text">
                  Web designing in a powerful way of just not an only profession, however, in a passion for our company
                </div>
              </div>

              <div className="contact-info-box-two">
                <span className="icon fa fa-map-marker-alt"></span>
                <h6 className="title">Visit Us</h6>
                <div className="text">HOUSE # 251 Block W, Scheme 3 W Block Farid Town, Sahiwal</div>
              </div>

              <div className="contact-info-box-two">
                <span className="icon fa fa-envelope"></span>
                <h6 className="title">Email address</h6>
                <div className="text">
                  <Link to="mailto:hr.callbackcrew@gmail.com">hr.callbackcrew@gmail.com</Link>
                </div>
              </div>

              <div className="contact-info-box-two">
                <span className="icon fa fa-phone"></span>
                <h6 className="title">Call now</h6>
                <div className="text">
                  <Link to="tel:+999000111222">+999 3363313364</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="form-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="contact-form-two style-two wow fadeInLeft">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="row">
                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                      <input
                        type="text"
                        name="from_name"
                        placeholder="Your Name"
                        required
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                      <input
                        type="email"
                        name="from_email"
                        placeholder="Email Address"
                        required
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="form-group col-lg-12 col-md-6 col-sm-12">
                      <input
                        type="text"
                        name="from_phone"
                        placeholder="Contact info"
                        required
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                      <textarea
                        name="from_message"
                        placeholder="Write Message"
                        required
                        onChange={handleInputChange}
                      ></textarea>
                    </div>

                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                      <button
                        className="theme-btn btn-style-one hvr-light"
                        type="submit"
                        disabled={isSending}
                      >
                        <span className="btn-title">
                          {isSending ? "Please wait..." : "Send a message"}
                        </span>
                      </button>
                    </div>

                    {messageSent && (
                      <p className="text-success">Your message has been sent!</p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSectionThree;
