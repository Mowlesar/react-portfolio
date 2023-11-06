import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-lg-start text-white mt-4">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Connect with me on social media:</span>
        </div>
        {/* Right */}
        <div>
          <a href="https://github.com/Mowlesar" className="me-4 text-reset">
            <FaGithub size="1.5em" />
          </a>
        </div>
      </section>
      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © {new Date().getFullYear()} Your Name - All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
