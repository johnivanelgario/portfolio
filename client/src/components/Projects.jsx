import blj from "../assets/blj.jpg";
import portfolio from "../assets/portfolio.png";
import awesometodos from "../assets/awesometodos.png";

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="projects-header">
        <h2>My Projects</h2>
        <p>Here are some of the projects I built and designed.</p>
      </div>

      <div className="projects-grid">
        <div className="project-card">
          <img src={blj} alt="BLJ Study Hub" className="project-image" />
          <div className="project-content">
            <h3>BLJ Study Hub & Café System</h3>
            <p>
              A smart web-based platform made for a study hub and café setup.
              It helps manage products, inventory, reservations, and customer
              transactions while improving organization and overall user
              experience.
            </p>
            <span className="project-tech">
              HTML • CSS • JavaScript • PHP • MySQL
            </span>
          </div>
        </div>

        <div className="project-card">
          <img src={portfolio} alt="Portfolio Website" className="project-image" />
          <div className="project-content">
            <h3>Personal Portfolio Website</h3>
            <p>
              A modern and responsive portfolio website created to showcase my
              skills, projects, and background in web development. It features
              smooth navigation, a clean interface, and a contact form connected
              to a backend API.
            </p>
            <span className="project-tech">
              React • Node.js • Express • MongoDB
            </span>
          </div>
        </div>

        <div className="project-card">
          <img src={awesometodos} alt="Awesome Todos App" className="project-image" />
          <div className="project-content">
            <h3>Awesome Todos App</h3>
            <p>
              A full-stack MERN todo application that allows users to create,
              update, and delete tasks. It demonstrates CRUD operations, API
              integration, and dynamic user interface updates with a connected
              backend database.
            </p>
            <span className="project-tech">
              MongoDB • Express • React • Node.js
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;