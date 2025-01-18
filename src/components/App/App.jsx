import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import './App.css';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {

  // fetch(`https://newsapi.org/v2/everything?q=keyword&apiKey=f65337d8e0d24850932813f45c026477`)
  //   .then(response => response.json())
  //   .then(data => console.log(data.articles));

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (


    <div className="page__section">
      <Header
        isLoggedIn={isLoggedIn}
      />

      <Routes>

        <Route path='/' element={<Main />}></Route>

      </Routes >

      <Footer />
    </div>

  )
}

export default App
