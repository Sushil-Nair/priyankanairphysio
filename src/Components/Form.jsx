import { useState } from 'react';
import { motion } from 'framer-motion';

function Form() {
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
      <div>
        {/* Inquiry Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <h1 className="text-3xl font-bold text-text-dark text-center mb-4">
            Send an Inquiry
          </h1>
          <h1 className="text-lg text-text-dark text-center mb-8">
            Get a response in 24 hours
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
                  pattern="[0-9]*"
                  oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                  maxLength={10}
                  minLength={10}
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
                  <option value="Sports Rehabilitation">Sports Rehabilitation</option>
                  <option value="Musculoskeletal Therapy">Musculoskeletal Therapy</option>
                  <option value="Post-surgery Recovery">Post-Surgery Recovery</option>
                  <option value="Neurological Therapy">Neurological Therapy</option>
                  <option value="Cardio-Respiratory Therapy">Cardio-Respiratory Therapy</option>
                  <option value="Pediatric Therapy">Pediatric Therapy</option>
                  <option value="Geriatric Therapy">Geriatric Therapy</option>
                  <option value="Burn Patient Rehabilitation">Burn Patient Rehabilitation</option>
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
                className="btn bg-primary-blue text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors disabled:opacity-50"
              > 
                {submitStatus.loading ? 'Sending...' : 'Send Inquiry'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
  );
}

export default Form;