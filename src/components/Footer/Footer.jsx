import githubLogo from '../../images/github.svg';
import facebookLogo from '../../images/fb.svg';
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer__description">
                © 2025 Supersite. Powered by News API
            </div>


            <nav className="footer__nav-bar">
                <a className="nav__link-footer nav__link" href="/">
                    Home
                </a>
                <a className="nav__link-tripleten nav__link" href="https://tripleten.com">
                    TripleTen
                </a>
            </nav>


            <div className="footer__social-links">
                <a href="https://github.com" className="nav__link">
                    <img src={githubLogo} className="footer__logo-github" alt="github" />
                </a>

                <a href="https://facebook.com" className="nav__link">
                    <img
                        src={facebookLogo}
                        className="footer__logo-facebook"
                        alt="facebook"
                    />
                </a>
            </div>

        </footer>
    )
}

export default Footer
