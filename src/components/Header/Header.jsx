import { useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({
  handleLoginClick,
  isLoggedIn,
  handleHomeClick,
  handleSavedArticlesClick,
  handleLogOut,
  handleMobileMenuClick,
}) {
  const location = useLocation();
  const isSavedNewsPage = location.pathname === "/saved-news";

  return (
    <header className={`header ${isSavedNewsPage ? "header__saved-news" : ""}`}>
      
      <button
        className={`header__title ${isSavedNewsPage ? "header__title_saved-news" : ""}`}
        onClick={handleHomeClick}
        aria-label="Go to homepage"
      >
        NewsExplorer
      </button>

      <Navigation
        handleLoginClick={handleLoginClick}
        isLoggedIn={isLoggedIn}
        handleHomeClick={handleHomeClick}
        handleSavedArticlesClick={handleSavedArticlesClick}
        handleLogOut={handleLogOut}
        handleMobileMenuClick={handleMobileMenuClick}
      />
    </header>
  );
}

export default Header;
