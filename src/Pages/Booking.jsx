import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { FaPhone } from "react-icons/fa6";
import Form from '../Components/Form';

function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState({ loading: false, error: null, success: false });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ loading: true, error: null, success: false });

    try {
  await fetch('https://script.google.com/macros/s/AKfycbzY1Az0LEp_2v8xBVxT5DVR65F0SS7xbjVqYP7h3WwguA0MuxcnwBmLvH8mO1sc-TaS/exec', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...formData,
      timestamp: new Date().toLocaleString(),
    }),
  });
  
  // Since we can't read the response with no-cors, assume success if the fetch doesn't throw
  setSubmitStatus({ loading: false, error: null, success: true });
  setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  } catch (error) {
  setSubmitStatus({ loading: false, error: 'Failed to submit form', success: false });
  }
};

  return (
    <div className="py-16 bg-secondary-gray bg-opacity-20">
      <div className="w-full sm:max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quick Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 rounded-lg shadow-md mb-8"
        >
          <h2 className="text-2xl font-bold text-text-dark text-center mb-6">
            Reach Out for a Pain-Free Tomorrow
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
            <button className="w-auto flex justify-center items-center px-6 py-3 bg-[#90D5FF] text-text-dark rounded-md hover:bg-opacity-90 transition-colors">
              <a
              href="tel:9819950732"
              className='text-nowrap flex items-center'
              >
                <FaPhone className="mr-2" />
                Call Us
              </a>
            </button>

            <button className="w-auto flex justify-center items-center px-6 py-3 bg-[#25D366] text-white rounded-md hover:bg-opacity-90 transition-colors">
              <a
              href="https://wa.me/9819950732"
              target="_blank"
              rel="noopener noreferrer"
              className='text-nowrap flex items-center'
              >
                <FaWhatsapp className="text-lg mr-2" />
                WhatsApp
              </a>
            </button>
            {/* <a
              href="tel:9819950732"
              className="flex w-[80%] text-nowrap items-center px-6 py-3 bg-[#90D5FF] text-text-dark rounded-md hover:bg-opacity-90 transition-colors"
            >
              <FaPhone className="mr-2" />
              Call Us
            </a>
            <a
              href="https://wa.me/9819950732"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-[80%] items-center px-6 py-3 bg-[#25D366] text-white rounded-md hover:bg-opacity-90 transition-colors"
            >
              <FaWhatsapp className="text-lg mr-2" />
              WhatsApp
            </a> */}
          </div>
        </motion.div>

        {/* Inquiry Form */}
        <Form />

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-text-dark text-center mb-6">
            Visit Our Clinic
          </h2>
          <div className="bg-white p-6 rounded-t-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-text-dark mb-2">Contact Information</h3>
                <p className="text-sm sm:text-base text-text-dark mb-1">Dr. Bhoir Orthopedic Hospital</p>
                <p className="text-sm sm:text-base text-text-dark mb-1">Kalyan (West), Maharashtra, 421301</p>
                <p className="text-sm sm:text-base text-text-dark mb-1">Phone: +91-9819950732</p>
                <p className="text-sm sm:text-base text-text-dark">Email: physiopatole@gmail.com</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-text-dark mb-2">Business Hours</h3>
                <p className="text-sm sm:text-base text-text-dark mb-1">Monday - Saturday:</p>
                <p className="text-sm sm:text-base text-text-dark mb-1">Morning: 11:30 AM - 1:00 PM</p>
                <p className="text-sm sm:text-base text-text-dark mb-1">Evening: 07:30 PM - 09:00 PM</p>
                <p className="text-sm sm:text-base text-text-dark mb-1">Sunday: 11:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>
          <div className="hidden md:flex bg-white p-6 rounded-b-lg shadow-md">
            <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.741037517886!2d73.13908937490879!3d19.250114646484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be796822beb43c9%3A0xe83ea50b164a35c1!2sDr.%20Bhoir%20Orthopedic%20Hospital!5e0!3m2!1sen!2sin!4v1736513612440!5m2!1sen!2sin"
                   className='w-full h-[400px]'  
                   allowFullScreen="" 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade">
                </iframe>
          </div>
          <div className="md:hidden bg-white p-6 rounded-b-lg shadow-md">
            <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.741037517886!2d73.13908937490879!3d19.250114646484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be796822beb43c9%3A0xe83ea50b164a35c1!2sDr.%20Bhoir%20Orthopedic%20Hospital!5e0!3m2!1sen!2sin!4v1736513612440!5m2!1sen!2sin"
                   className='w-full h-[250px]'  
                   allowFullScreen="" 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade">
                </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;