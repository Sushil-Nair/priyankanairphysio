import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Booking from './Pages/Booking';
import ScrollToTop from './utils/ScrollToTop';
import BackToTopButton from './utils/BackToTop';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>

        <BackToTopButton />
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;