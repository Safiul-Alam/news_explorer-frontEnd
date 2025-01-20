import { Routes, Route, useNavigate, useLocation, } from 'react-router-dom';
import { useState } from 'react';

import './App.css';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { fetchNewsArticles } from "../../utils/newsApi";
import NewsCardList from "../NewsCardList/NewsCardList";



function App() {

  // fetch(`https://newsapi.org/v2/everything?q=keyword&apiKey=f65337d8e0d24850932813f45c026477`)
  //   .then(response => response.json())
  //   .then(data => console.log(data.articles));

  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");

  const [currentKeyword, setCurrentKeyword] = useState("");
  const [isSearchPerformed, setIsSearchPerformed] = useState(false);


  const location = useLocation();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };
  const handleSavedArticlesClick = () => {
    navigate("/saved-news");
  };


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
  };
  const navigateToLogin = () => {
    setActiveModal("login");
  };
  const navigateToSignUp = () => {
    setActiveModal("register");
  };



  const closeModal = () => {
    setActiveModal("");
  };


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


    <div className="page__section">
      <Header
        handleLoginClick={handleLoginClick}
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
              {/* <About /> */}
            </>
          }
        />

      </Routes >

      <Footer />
    </div>

  )
}

export default App
