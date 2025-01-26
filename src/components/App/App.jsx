import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './App.css';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import About from '../About/About';

import NewsCardList from "../NewsCardList/NewsCardList";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import MobileNavBar from '../MobileNavBar/MobileNavBar';

import { fetchNewsArticles } from "../../utils/newsApi";


import { getNews, getItems } from '../../utils/api';
import SavedNews from "../SavedNews/SavedNews";
import SuccessModal from "../SuccessModal/SuccessModal";



function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentKeyword, setCurrentKeyword] = useState("");
  const [isSearchPerformed, setIsSearchPerformed] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();


  const handleHomeClick = () => navigate("/");

  const handleSavedArticlesClick = () => navigate("/saved-news");


  const handleSignUp = () => {
    setActiveModal("success-modal");
  };

  const handleLoginSubmit = () => {
    setIsLoggedIn(true);
    closeModal();
  };

  const handleLogOut = () => {
    navigate("/");
    setIsLoggedIn(false);
  };

  const handleLoginClick = () => {
    setActiveModal("login");
    console.log("Sign  In button clicked");
  };

  const closeModal = () => {
    setActiveModal("");
  };


  const navigateToLogin = () => {
    setActiveModal("login");
  };

  const navigateToSignUp = () => {
    setActiveModal("register");
  };

  const handleMobileMenuClick = () => {
    console.log("Mobile menu clicked");
    setActiveModal("mobile-menu");
  };



  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    const handleOverlay = (e) => {
      if (e.target.classList.contains("modal")) {
        closeModal();
      }
    };
    document.addEventListener("click", handleOverlay);
    return () => document.removeEventListener("click", handleOverlay);
  }, []);


  // Search handler
  const onSearch = (keyword) => {
    console.log("onSearch called with:", keyword);

    setIsLoading(true);
    setError("");

    setIsSearchPerformed(true);
    setCurrentKeyword(keyword);

    fetchNewsArticles(keyword)
      .then((articles) => {
        const fetchedArticles = articles.map((article) => ({
          ...article,
          keyword: keyword,
        }));
        setArticles(fetchedArticles);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <div className="page">

        <div
          className={`page ${location.pathname === "/saved-news" ? "no-bg" : ""
            }`}
        >
          <Header
            handleLoginClick={handleLoginClick}
            handleMobileMenuClick={handleMobileMenuClick}
            isLoggedIn={isLoggedIn}
            handleHomeClick={handleHomeClick}
            handleSavedArticlesClick={handleSavedArticlesClick}
            handleLogOut={handleLogOut}
          />
          <Routes>
            
            <Route
              path="*"
              element={
                <>
                  <Main onSearch={onSearch} />

                  {isSearchPerformed && (
                    <NewsCardList
                      isLoggedIn={isLoggedIn}
                      articles={articles}
                      isLoading={isLoading}
                      error={error}
                    />
                  )}
                  <About />
                </>
              }
            />

            <Route
              path="saved-news"
              element={
                <SavedNews />
              }
            />

          </Routes>
          <Footer />
        </div>
      </div>

      {activeModal === "login" && (
        <LoginModal
          isOpen={true}
          closeModal={closeModal}
          navigateToSignUp={navigateToSignUp}
          handleLoginSubmit={handleLoginSubmit}
        />
      )}

      {activeModal === "register" && (
        <RegisterModal
          isOpen={true}
          closeModal={closeModal}
          navigateToLogin={navigateToLogin}
          handleSignUp={handleSignUp}
        />
      )}

      {activeModal === "mobile-menu" && (
        <MobileNavBar
          isOpen={true}
          closeModal={closeModal}
          navigateToLogin={navigateToLogin}
          handleLoginClick={handleLoginClick}
          handleHomeClick={handleHomeClick}
          isLoggedIn={isLoggedIn}
          handleSavedArticlesClick={handleSavedArticlesClick}
          handleLogOut={handleLogOut}
        />
      )}


      {activeModal === "success-modal" && (
        <SuccessModal
          isOpen={true}
          closeModal={closeModal}
          navigateToLogin={navigateToLogin}
        />
      )}

    </>

  );
}

export default App;
