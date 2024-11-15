import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './assets/Components/Header/Header';
import Home from './assets/Components/Home/Home';
import Footer from './assets/Components/Footer/Footer';
import ContactUsPage from './assets/Components/ContactUsPage/ContactUsPage';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
