import { motion } from "framer-motion";
import "./App.css";
import emailjs from "emailjs-com";


export default function App() {

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
        alert("Message sent successfully!");
        e.target.reset();
      })
      .catch(() => {
        alert("Failed to send message");
      });
  };

  return (
    <div className="app">

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="hero-section"
      >
        <div className="hero-overlay">
          <h1>Machavarapu Mohan Durga Pradeep</h1>
          <p>Associate Software Engineer | Java | Spring Boot | FinTech Backend</p>

          <div className="hero-icons">
            <a href="https://github.com/Mohanpradeep32" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/mohan-machavarapu-b00064206/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:mohanmachavarapu117@gmail.com">Email</a>
          </div>

          <a href="/resume.pdf" download className="resume-btn">
            Download Resume
          </a>
        </div>
      </motion.section>


      {/* Skills */}
      <section className="skills">
        {["Java", "Spring Boot", "React", "MySQL"].map(skill => (
          <div className="skill-card" key={skill}>{skill}</div>
        ))}
      </section>

      {/* Projects */}
      <section className="projects">
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
              Full-stack loan processing system with automated approval workflows
              and 15+ REST APIs for onboarding, repayments, and loan management.
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



      {/* Contact */}
      <section className="contact">
        <h2>Contact Me</h2>

        <form onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="4" required />
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer className="footer">
        © 2026 Mohan Pradeep
      </footer>
    </div>
  );
}
