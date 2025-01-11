import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../Components/Hero';
import Testimonials from '../Components/Testimonials';
import FAQ from '../Components/FAQ';
import heroImg from '../assets/Img/hero.png'

function Home() {
  const location = useLocation();
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current && location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      initialized.current = true;
    }
  }, [location]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      <Hero />
      
      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className='flex flex-col gap-2'>
              <h2 className="text-3xl font-bold text-text-dark mb-4 text-center">About Me</h2>
              <h1>I am <br/><span className='text-2xl font-bold text-primary-blue'>Dr. Priyanka S. Nair</span></h1>
              <p className="text-text-dark mb-4">
                With over <span className='text-text-dark font-semibold'>12 years</span> of experience in physiotherapy, I have a <span className='text-text-dark font-semibold'>broad spectrum of experience</span> in musculoskeletal, cardiovascular, neurological, respiratory, and pediatric physical therapy, I provide individualized care for a variety of ailments.
              </p>
              <ul className="list-disc list-inside text-text-dark">
                <li>Certified Physiotherapist from <span className='text-text-dark font-semibold'>Maharashtra OTPT Council</span></li>
              </ul>
              <p className='mt-4'>
                I am currently working at <span className='text-text-dark font-semibold'><a href="https://maps.app.goo.gl/R7oDmHutSvetecs56" target='_blank'>Dr. Bhoir Orthopedic Hospital, Kalyan, Maharashtra</a></span>
              </p>
              <div className='mt-4'>
                 <h3 className="text-base font-bold mb-3">Working Hours:</h3>
                 <ul className="space-y-2 text-sm">
                   <li><span className='font-semibold'>Monday - Saturday:</span><br /> 
                       <span className='font-semibold'>Morning:</span> 11:30 AM - 1:00 PM <br />
                       <span className='font-semibold'>Evening:</span> 07:30 PM - 09:00 PM
                    </li>
                   <li><span className='font-semibold'>Sunday:</span> 11:00 AM - 1:00 PM</li>
                 </ul>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden mt-[100px] shadow-lg">
              <img
                src={heroImg}
                alt="Dr. Priyanka S. Nair"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-16 bg-secondary-gray bg-opacity-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-primary-blue text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-text-dark mb-2">{service.title}</h3>
                <p className="text-text-dark">{service.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="/services"
              className="inline-block btn animated-button bg-primary-blue text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
            >
              <span>Explore All Services</span>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark text-center mb-12">What Our Patients Say</h2>
          <Testimonials />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary-gray bg-opacity-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark text-center mb-12">Frequently Asked Questions</h2>
          <FAQ />
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    title: "Sports Rehabilitation",
    description: "Specialized treatment for sports-related injuries and performance enhancement.",
    icon: "🏃‍♂️",
  },
  {
    title: "Chronic Pain Management",
    description: "Comprehensive approach to managing and reducing chronic pain.",
    icon: "🌟",
  },
  {
    title: "Post-Surgery Recovery",
    description: "Customized rehabilitation programs for post-operative care.",
    icon: "🏥",
  },
];

export default Home;