import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import SignIn from './components/SignIn';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signin" element={<SignIn/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
