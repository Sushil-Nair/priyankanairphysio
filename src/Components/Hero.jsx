import { motion } from 'framer-motion';

function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-600 opacity-80" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Your path to pain-free living starts here
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl mb-8"
          >
            I am an experienced physiotherapist dedicated to helping individuals restore mobility, reduce pain, and enhance overall well-being through personalized treatment plans and innovative therapeutic techniques.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="/booking"
              className="btn animated-button bg-primary-blue text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors inline-block"
            >
              <span>Book Appointment</span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;