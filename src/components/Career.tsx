import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master of Computer Application</h4>
                <h5>Kamla Nehru Institute of Technology, AKTU</h5>
              </div>
              <h3>2024 - 2026</h3>
            </div>
            <p>
              Pursuing my Master's degree in Computer Applications, focusing on advanced software engineering and modern web technologies. Current CGPA: 7.70.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Teacher</h4>
                <h5>Gyanoday group of Institutions</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Programming instructor specializing in O-Level Course. Taught HTML, CSS, JavaScript, and Python with a focus on clear concepts and practical coding.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Sc. in Computer Science</h4>
                <h5>Mahatma Gandhi Kashi Vidyapith</h5>
              </div>
              <h3>2019 - 2023</h3>
            </div>
            <p>
              Graduated with a focus on computer science fundamentals, data structures, algorithms, and core programming languages. Academic Percentage: 62.94%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
