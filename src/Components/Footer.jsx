import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-text-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Dr. Priyanka Nair (PT)</h3>
            <p className="text-sm">
              Professional physiotherapy services for your well-being and recovery.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-primary-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-primary-blue transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-sm hover:text-primary-blue transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://maps.app.goo.gl/R7oDmHutSvetecs56" target='_blank'>Dr. Bhoir Orthopedic Hospital</a></li>
              <li><a href="https://maps.app.goo.gl/R7oDmHutSvetecs56" target='_blank'>Kalyan (West), Maharashtra, 421301</a></li>
              <li><a href="tel:9819950732">Phone: +91-9819950732</a></li>
              <li><a href="mailto:physiopatole@gmail.com">Email: physiopatole@gmail.com</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <ul className="space-y-2 text-sm">
              <li>Monday - Saturday:</li>
              <li>Morning: 11:30 AM - 1:00 PM</li>
              <li>Evening: 07:30 PM - 09:00 PM</li>
              <li>Sunday: 11:00 AM - 1:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Dr. Priyanka Nair (PT). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;