import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

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
      const response = await fetch('https://script.google.com/macros/s/AKfycbyPVns174vBPHtVUn30SSIV84k-W09na67cSRd37Q6G2VfvLdk9F_riI0LuJQx2Kh4/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toLocaleString(),
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus({ loading: false, error: null, success: true });
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        throw new Error(result.error || 'Failed to submit form');
      }
    } catch (error) {
      setSubmitStatus({ loading: false, error: error.message, success: false });
    }
  };

  return (
    <div className="py-16 bg-secondary-gray bg-opacity-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quick Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 rounded-lg shadow-md mb-8"
        >
          <h2 className="text-2xl font-bold text-text-dark text-center mb-6">
            Get in Touch
          </h2>
          <div className="flex justify-center space-x-8">
            <a
              href="tel:9819950732"
              className="flex items-center px-6 py-3 bg-primary-blue text-text-dark rounded-md hover:bg-opacity-90 transition-colors"
            >
              <FaPhone className="mr-2" />
              Call Us
            </a>
            <a
              href="https://wa.me/9819950732"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-[#25D366] text-white rounded-md hover:bg-opacity-90 transition-colors"
            >
              <FaWhatsapp className="mr-2" />
              WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Inquiry Form */}
         <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <h1 className="text-3xl font-bold text-text-dark text-center mb-8">
            Send an Inquiry
          </h1>

          {submitStatus.success && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
              Thank you for your inquiry! We'll get back to you soon.
            </div>
          )}

          {submitStatus.error && (
            <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
              {submitStatus.error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-dark mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-secondary-gray rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-secondary-gray rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-text-dark mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-secondary-gray rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-text-dark mb-1">
                  Service Type *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-secondary-gray rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                >
                  <option value="">Select a service</option>
                  <option value="sports">Sports Rehabilitation</option>
                  <option value="manual">Manual Therapy</option>
                  <option value="post-surgery">Post-Surgery Recovery</option>
                  <option value="chronic-pain">Chronic Pain Management</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-dark mb-1">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-secondary-gray rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={submitStatus.loading}
                className="bg-primary-green text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors disabled:opacity-50"
              >
                {submitStatus.loading ? 'Sending...' : 'Send Inquiry'}
              </button>
            </div>
          </form>
        </motion.div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-text-dark text-center mb-6">
            Visit Our Clinic
          </h2>
          <div className="bg-white p-6 rounded-t-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-text-dark mb-2">Contact Information</h3>
                <p className="text-text-dark mb-1">Dr. Bhoir Orthopedic Hospital</p>
                <p className="text-text-dark mb-1">Kalyan (West), Maharashtra, 421301</p>
                <p className="text-text-dark mb-1">Phone: +91-9819950732</p>
                <p className="text-text-dark">Email: physiopatole@gmail.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-dark mb-2">Business Hours</h3>
                <p className="text-text-dark mb-1">Monday - Saturday:</p>
                <p className="text-text-dark mb-1">Morning: 11:30 AM - 1:00 PM</p>
                <p className="text-text-dark mb-1">Evening: 07:30 PM - 09:00 PM</p>
                <p className="text-text-dark mb-1">Sunday: 11:00 AM - 1:00 PM</p>
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