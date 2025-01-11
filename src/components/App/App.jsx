import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Header from '../Header/Header';

function App() {

  // fetch(`https://newsapi.org/v2/everything?q=keyword&apiKey=f65337d8e0d24850932813f45c026477`)
  //   .then(response => response.json())
  //   .then(data => console.log(data.articles));

  return (


    <div className="page__section">
      <Header />

      <Routes>

        <Route path='/' element={<Main />}></Route>

      </Routes >
    </div>

  )
}

export default App
