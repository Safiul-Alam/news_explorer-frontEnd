import githubIcon from "../../assets/github.svg";
import facebookIcon from "../../assets/facebook-icon.svg";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; 2025 Supersite, Powered by News API
      </p>

      <nav className="footer__menu">
        <ul className="footer__navigation">
          <li className="footer__navigation-item">
            <a href="/" className="footer__navigation-link">
              Home
            </a>
          </li>

          <li className="footer__navigation-item">
            <a
              href="https://www.tripleten.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__navigation-link"
            >
              TripleTen
            </a>
          </li>
        </ul>

        <ul className="footer__icons">

          <li className="footer__icon-item">
            <a
              href="https://github.com/Safiul-Alam"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__icon-link"
              aria-label="Visit Safiul Alam's GitHub profile"
            >
              <img
                src={githubIcon}
                className="footer__icon footer__icon_github"
                alt="GitHub profile link"
              />
            </a>
          </li>

          <li className="footer__icon-item">
            <a
              href="https://www.facebook.com/login.php/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__icon-link"
              aria-label="Visit Facebook login page"
            >
              <img
                src={facebookIcon}
                className="footer__icon footer__icon_facebook"
                alt="Facebook login link"
              />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
