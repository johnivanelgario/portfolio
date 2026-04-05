function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-header">
        <h2>About Me</h2>
        <p>Get to know more about who I am and what I do.</p>
      </div>

      <div className="about-container">
        <div className="about-card left-card">
          <h3>My Introduction</h3>
          <p>
            Hello, I’m John Ivan, a student who is currently learning web
            development and improving my skills in building modern and simple
            websites. I enjoy exploring design, coding, and turning ideas into
            working projects.
          </p>
        </div>

        <div className="about-card right-card">
          <h3>My Journey</h3>

          <div className="journey-list">
            <div className="journey-item">
              <span className="journey-year">Present</span>
              <h4>IT Student</h4>
              <p>Currently studying Information Technology and improving my web development skills.</p>
            </div>

            <div className="journey-item">
              <span className="journey-year">2020</span>
              <h4>Senior High School Student</h4>
              <p>Focused on animation and creative design, learning how visuals and motion bring ideas to life.</p>
            </div>

            <div className="journey-item">
              <span className="journey-year">2018</span>
              <h4>Junior High School</h4>
              <p>Built my interest in computers and technology while learning the basics step by step.</p>
            </div>
          </div>

          <div className="about-quote">
            <p>
              “I want to continue growing as a developer and create simple,
              useful, and clean websites.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;