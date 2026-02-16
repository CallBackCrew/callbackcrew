import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import BackToTop from '../BackToTop.jsx';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import FooterHomeOne from '../HomeThree/FooterHomeOne.jsx';
import HeroPageTitle from './HeroPageTitle.jsx';

function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      'service_sekkixw',
      'template_clw191q',
      form.current,
      'AqSE1k3B-1V1tqXhI'
    ).then(
      (result) => {
        console.log(result.text);
        setMessageSent(true);  
        setIsSending(false);   
        e.target.reset();      
      },
      (error) => {
        console.log(error.text);
        setIsSending(false);
        alert("Something went wrong. Please try again.");
      }
    );
  };

  // Hide success message when user types in any field
  const handleInputChange = () => {
    if (messageSent) setMessageSent(false);
  };

  return (
    <>
      <HomeOneHeader />
      <HeroPageTitle
        title="Contact Us"
        breadcrumb={[
          { Link: '/', title: 'Home' },
          { Link: '/news-details', title: 'Contact' },
        ]}
      />

      <section className="contact-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="sec-title">
                <span className="sub-title">Send us email</span>
                <h2>Feel free to write</h2>
              </div>

              <form ref={form} onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="from_name"
                        className="form-control"
                        type="text"
                        placeholder="Enter Name"
                        required
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="from_email"
                        className="form-control"
                        type="email"
                        placeholder="Enter Email"
                        required
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12">
                    <div className="mb-3">
                      <input
                        name="from_phone"
                        className="form-control"
                        type="text"
                        placeholder="Enter contact info"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <textarea
                    name="from_message"
                    className="form-control"
                    rows="7"
                    placeholder="Enter Message"
                    required
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div className="mb-3">
                  <button
                    type="submit"
                    className="theme-btn btn-style-one"
                    data-loading-text="Please wait..."
                    disabled={isSending}
                  >
                    <span className="btn-title">
                      {isSending ? "Please wait..." : "Send message"}
                    </span>
                  </button>
                </div>

                {messageSent && (
                  <p className="text-success">Your message has been sent!</p>
                )}
              </form>
            </div>

            <div className="col-xl-5 col-lg-6">
              <div className="contact-details__right">
                <div className="sec-title">
                  <span className="sub-title">Need any help?</span>
                  <h2>Get in touch with us</h2>
                  <div className="text">
                    "Have questions? Reach out—we're here to help!"
                  </div>
                </div>
                <ul className="list-unstyled contact-details__info">
                  <li>
                    <div className="icon">
                      <span className="lnr-icon-phone-plus"></span>
                    </div>
                    <div className="text">
                      <h6>Have any question?</h6>
                      <a href="tel:980089850">
                        <span>Free</span> +92 336 3313364
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="lnr-icon-envelope1"></span>
                    </div>
                    <div className="text">
                      <h6>Write email</h6>
                      <a href="mailto:hr.callbackcrew@gmail.com">
                        hr.callbackcrew@gmail.com
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="lnr-icon-location"></span>
                    </div>
                    <div className="text">
                      <h6>Visit anytime</h6>
                      <div className="address">
                        HOUSE 251 Block W, Scheme 3 W Block
                        <br />
                        Farid Town, Sahiwal
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid p-0">
          <div className="row">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86103.62314832346!2d74.35576563699348!3d31.416058818743544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922c90023d23f63%3A0xa29d4a9a0896640c!2sThe%20Success%20Sahiwal%20Community!5e0!3m2!1sen!2s!4v1747926456776!5m2!1sen!2s"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <FooterHomeOne />
      <BackToTop />
    </>
  );
}

export default Contact;