import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/Img/PhysioHealthBlueLogo.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const isBookingPage = location.pathname.includes('/booking');

  return (
    <nav className="bg-primary-bg shadow-md sticky top-0 left-0 z-[99999]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center overflow-hidden">
            <Link to="/">
              <img src={logo} alt="" className='w-16 h-auto rounded-full bg-cover' />
            </Link>
            <Link to="/" className="text-xl font-bold text-text-dark hover:text-primary-blue">
              Dr. Priyanka S. Nair (PT)
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-text-dark hover:text-primary-blue font-medium transition-colors">
              Home
            </Link>
            <button onClick={() => scrollToSection('about')} className="text-text-dark hover:text-primary-blue font-medium transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-text-dark hover:text-primary-blue font-medium transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-text-dark hover:text-primary-blue font-medium transition-colors">
              Testimonials
            </button>
            {!isBookingPage && (<Link to="/booking" className="btn animated-button bg-primary-blue text-white px-4 py-2 rounded-md hover:bg-[#334BB8] shadow-md font-medium transition-colors">
              <span>Book Appointment</span>
            </Link>
            )}
            
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-dark hover:text-primary-blue"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block w-full text-left px-3 py-2 text-text-dark hover:bg-primary-blue hover:bg-opacity-10 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-text-dark hover:bg-primary-blue hover:bg-opacity-10 rounded-md"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-3 py-2 text-text-dark hover:bg-primary-blue hover:bg-opacity-10 rounded-md"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left px-3 py-2 text-text-dark hover:bg-primary-blue hover:bg-opacity-10 rounded-md"
            >
              Testimonials
            </button>
            {!isBookingPage && (
              <Link 
              to="/booking" 
              className="btn animated-button flex items-center text-center w-[200px] px-3 py-2 bg-primary-blue text-white rounded-md"
              onClick={() => setIsOpen(false)}
              >
              <span><p className='w-full mx-auto'>Book Appointment</p></span>
            </Link>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;