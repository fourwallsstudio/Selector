import React from 'react';

const ContactFooter = () => {
  return (
    <div className="contact-footer-contianer">
      <div className="c-f-head">
        <h2>Contact</h2>
      </div>
      <a href="http://calvinmcelroy.us/" target="_blank">calvinmcelroy.us</a>
      <a href="mailto:calvin.mcelroy.dev@gmail.com">calvin.mcelroy.dev@gmail.com</a>
      <div className="c-f-link-icons-box">
        <a href="https://github.com/fourwallsstudio" target="_blank" className="github-img"></a>
        <a href="https://angel.co/calvin-mcelroy-1" target="_blank" className="angellist-img"></a>
        <a href="https://www.linkedin.com/in/calvin-mcelroy-dev/" target="_blank" className="linkedin-img"></a>
      </div>
    </div>
  )
}

export default ContactFooter;
