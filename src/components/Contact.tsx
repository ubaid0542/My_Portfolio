import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mdubaid8090@gmail.com" target="_blank" rel="noreferrer" data-cursor="disable">
                mdubaid8090@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+918090507639" data-cursor="disable">
                +91 80905 07639
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/ubaid0542"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
              rel="noreferrer"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/mdubaid8090?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://leetcode.com/u/Ubaid2024/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
              rel="noreferrer"
            >
              LeetCode <MdArrowOutward />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mdubaid8090@gmail.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
              rel="noreferrer"
            >
              Email <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>MD. UBAID</span>
            </h2>
            <h5>
              <MdCopyright /> 2024
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
