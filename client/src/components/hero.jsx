import { useEffect, useState } from "react";
import profile from "../assets/profile.png";

function Hero() {
  const roles = [
    "MERN Stack Developer",
    "Frontend Developer",
    "Web Designer",
    "Student Developer",
  ];

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 60 : 120;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const updatedText = currentRole.substring(0, text.length + 1);
        setText(updatedText);

        if (updatedText === currentRole) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1000);
        }
      } else {
        const updatedText = currentRole.substring(0, text.length - 1);
        setText(updatedText);

        if (updatedText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, roles]);

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-badge">Welcome to my portfolio</span>
          <h1>Hello, I'm John Ivan</h1>

          <p className="hero-role">
            I am a <span className="typing-text">{text}</span>
            <span className="cursor">|</span>
          </p>

          <p className="hero-description">
            I create simple, modern, and responsive web projects using the MERN
            stack while continuously improving my skills in design and
            development.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn">
              View My Projects
            </a>

            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-image-ring">
            <img src={profile} alt="John Ivan" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;