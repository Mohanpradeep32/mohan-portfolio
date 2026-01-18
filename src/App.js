import { motion } from "framer-motion";
import "./App.css";
import emailjs from "emailjs-com";
import { useState } from "react";


export default function App() {
  const [notification, setNotification] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sqoddhn",
        "template_r23is4h",
        e.target,
        "Qxnrf5eBOqxOFjmXC"
      )
      .then(() => {
        setNotification({
          type: "success",
          message: "Message sent successfully. I’ll get back to you soon!"
        });
        e.target.reset();
      })
      .catch(() => {
        setNotification({
          type: "error",
          message: "Something went wrong. Please try again later."
        });
      });

    // Auto-hide after 4 seconds
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };



  return (
    <div className="app">

      {/* Header / Navbar */}
      <header className="header">
        <div className="header-container">
          <div className="logo">Mohan</div>

          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>


      {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-section"
        >
          <div className="hero-container" id="home">

            {/* Left: Profile Image */}
            <div className="hero-image">
              <img src="/mohan.jpg" alt="Mohan Pradeep Profile" />
            </div>

            {/* Right: Details */}
            <div className="hero-content">
              <h1>Machavarapu Mohan Durga Pradeep</h1>
              <p className="hero-role">
                Full Stack Software Engineer (2+ Years) · Java · Spring Boot · React · FinTech
              </p>

              <div className="hero-icons">
                <a href="https://github.com/Mohanpradeep32" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/mohan-machavarapu-b00064206/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://leetcode.com/u/mohanmachavarapu117/" target="_blank" rel="noreferrer"> LeetCode </a>
                <a href="mailto:mohanmachavarapu117@gmail.com">Email</a>
              </div>

              <a href="/resume.pdf" download className="resume-btn">
                Download Resume
              </a>
            </div>

          </div>
        </motion.section>



      {/* Skills */}
      <section className="skills" id="skills">
        <h2>Technical Skills</h2>

        <div className="skills-grid">
          {[
            "Java",
            "Python",
            "Spring Boot",
            "REST APIs",
            "Microservices",
            "React",
            "JavaScript",
            "HTML & CSS",
            "MySQL",
            "PostgreSQL",
            "Git",
            "Data Structures",
            "AWS Fundamentals",
            "TestNG"
          ].map(skill => (
            <div className="skill-card" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </section>


      {/* Experience */}
       <section className="experience" id="experience">
        <h2>Professional Experience</h2>

        <div className="experience-grid">

          <div className="experience-card">
            <h3>Pennant Technologies Pvt Ltd</h3>
            <span className="experience-role">
              Software Engineer · FinTech Domain · Jul 2024 – Present
            </span>
            <ul>
              <li>Developing enterprise-grade Loan Origination & Management systems.</li>
              <li>Building scalable REST APIs using Java and Spring Boot.</li>
              <li>Integrating React UIs with backend services.</li>
              <li>Optimizing SQL queries and backend performance.</li>
            </ul>
          </div>

          <div className="experience-card">
            <h3>Pennant Technologies Pvt Ltd</h3>
            <span className="experience-role">
              Associate Software Engineer (Trainee) · Jan 2024 – Jun 2024
            </span>
            <ul>
              <li>Trained in Java, JDBC, Servlets, JSP, and SQL.</li>
              <li>Built CRUD modules using MVC architecture.</li>
              <li>Worked on backend debugging and API integration.</li>
            </ul>
          </div>

          <div className="experience-card">
            <h3>NIT Andhra Pradesh</h3>
            <span className="experience-role">
              Research Intern · May 2023 – Jun 2023
            </span>
            <ul>
              <li>Researched Brain Tumor Classification using Deep Learning.</li>
              <li>Built PyTorch models improving accuracy by 25%.</li>
              <li>Worked with MRI image datasets and preprocessing.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Projects */}
      <section className="projects" id = "projects">
        <h2>Projects</h2>

        <div className="project-grid">

          {/* Loan Management System */}
          <div className="project-card">
            <img src="/emi_cal.jpg" alt="Loan Management System Java Spring Boot Project" />
            <h3>Loan Management System</h3>

            <div className="tech-badges">
              <span>React</span>
              <span>Java</span>
              <span>Spring Boot</span>
              <span>MySQL</span>
            </div>

            <p>
              Enterprise-grade loan management platform used in FinTech workflows.
              Built secure REST APIs for customer onboarding, loan approvals,
              repayments, and EMI calculations, supporting high-volume transactions.
            </p>


            <div className="project-actions">
              <a href="https://github.com/Mohanpradeep32" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>

          {/* Property Studio */}
          <div className="project-card">
            <img src="/realEstate.jpg" alt="Property Studio Real Estate CRM Application" />
            <h3>Property Studio</h3>

            <div className="tech-badges">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>PostgreSQL</span>
              <span>jQuery</span>
            </div>

            <p>
              Real estate CRM enabling agents to manage properties and customers
              to track bookings, payments, and completion status.
            </p>

            <div className="project-actions">
              <a href="https://github.com/Mohanpradeep32" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>

          {/* E-Commerce */}
          <div className="project-card">
            <img src="/ecommerce.png" alt="E-commerce Shopping Cart Java Project" />
            <h3>E-Commerce Website</h3>

            <div className="tech-badges">
              <span>Java</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>PostgreSQL</span>
            </div>

            <p>
              Java-based e-commerce platform following MVC architecture with
              product browsing, cart management, authentication, and admin panel.
            </p>

            <div className="project-actions">
              <a href="https://github.com/Mohanpradeep32" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>

          {/* Brain Tumor Segmentation */}
          <div className="project-card">
            <img src="/brain_tumor.png" alt="Brain Tumor Segmentation Deep Learning Project" />
            <h3>Brain Tumor Segmentation</h3>

            <div className="tech-badges">
              <span>Python</span>
              <span>3D CNN</span>
              <span>Flask</span>
              <span>Deep Learning</span>
            </div>

            <p>
              Deep learning system using 3D CNN models for accurate brain tumor
              segmentation from MRI scans with Flask-based inference.
            </p>

            <div className="project-actions">
              <a href="https://github.com/Mohanpradeep32" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Education */}
      <section className="education" id="education">
        <h2>Education</h2>

        <div className="education-grid">
          <div className="education-card">
            <h3>Jawaharlal Nehru Technological University, Gurajada (JNTU-GV)</h3>
            <span>B.Tech (Honors) – Information Technology</span>
            <p className="education-meta">CGPA: <strong>8.7</strong></p>
          </div>
        </div>
      </section>


      {/* Contact */}
      <section className="contact" id="contact">
        <h2>Contact Me</h2>

        <form onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="4" required />
          <button type="submit">Send Message</button>
        </form>
      </section>

      
      {notification && (
        <div className={`toast ${notification.type}`}>
          {notification.message}
        </div>
      )}

      <footer className="footer">
        © 2026 Mohan Pradeep
      </footer>
    </div>
  );
}
