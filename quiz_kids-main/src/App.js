import './App.css';
import LoginPage from './Pages/Login/LoginPage';
import HomePage from './Pages/HomePage';
import QuizPageOne from './Pages/QuizPageOne';
import QuizPageTwo from './Pages/QuizPageTwo';
import QuizPageThree from './Pages/QuizPageThree';
import QuizPageFour from './Pages/QuizPageFour';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <LoginPage /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/quizpageone" element={<QuizPageOne />} />
          <Route path="/quizpagetwo" element={<QuizPageTwo />} />
          <Route path="/quizpagethree" element={<QuizPageThree />} />
          <Route path="/quizpagefour" element={<QuizPageFour />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
