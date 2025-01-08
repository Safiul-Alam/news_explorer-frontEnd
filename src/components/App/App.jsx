import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';

function App() {
  
  // fetch(`https://newsapi.org/v2/everything?q=keyword&apiKey=f65337d8e0d24850932813f45c026477`)
  //   .then(response => response.json())
  //   .then(data => console.log(data.articles));

  return (
    <div>

      <h1>App</h1>
      <Routes>
        <Route path='/' element={<Main />}></Route>
      </Routes>
    </div>
  )
}

export default App
