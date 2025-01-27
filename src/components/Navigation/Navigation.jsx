import { useLocation } from "react-router-dom";
import "./Navigation.css";
import logoutIcon from "../../assets/logout.svg";
import altIcon from "../../assets/alt-logout.svg";
import menuIcon from "../../assets/menuIcon.svg";
import menuIconBlack from "../../assets/menuIconBlack.svg";

function Navigation({
    handleLoginClick,
    isLoggedIn,
    handleHomeClick,
    handleSavedArticlesClick,
    handleLogOut,
    handleMobileMenuClick,
  }) {
    const location = useLocation();
  
    console.log(isLoggedIn);
    return (
      <nav
        className={`navigation ${
          location.pathname === "/saved-news" ? "navigation--saved" : ""
        }`}
      >
        <ul className="navigation__list">
          <li className="navigation__links">
            <button
              className={`navigation__link_home-button ${
                location.pathname === "/" ? "navigation__link_home-button-active" : ""
              }`}
              onClick={handleHomeClick}
            >
              Home
            </button>
          </li>
          {isLoggedIn ? (
            <>
              <li className="navigation__links">
                <button
                  className={`navigation__link_saved-articles-button ${
                    location.pathname === "/saved-news"
                      ? "navigation__link_saved-articles-button-active"
                      : ""
                  }`}
                  onClick={handleSavedArticlesClick}
                >
                  Saved articles
                </button>
              </li>
              <li className="navigation__links">
                <button
                  className="navigation__link_logout-button"
                  onClick={handleLogOut}
                >
                  Elise
                  <img
                    className="navigation__logout-icon"
                    alt="Logout"
                    src={location.pathname === "/" ? logoutIcon : altIcon}
                  />
                </button>
              </li>
            </>
          ) : (
            <li className="navigation__links">
              <button
                className="navigation__link_signin-button"
                onClick={handleLoginClick}
              >
                Sign In
              </button>
            </li>
          )}
        </ul>
        <button
          type="button"
          className="navigation__mobile-button"
          style={{
            backgroundImage: `url(${
              location.pathname === "/saved-news" ? menuIconBlack : menuIcon
            })`,
          }}
          onClick={handleMobileMenuClick}
        ></button>
      </nav>
    );
  }
  
  export default Navigation;