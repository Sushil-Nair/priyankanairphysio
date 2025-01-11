import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { FaPhone } from "react-icons/fa6";
import Modal from '../Components/Modal';
import Form from './Form';

const GetACallBack = () => {
      const location = useLocation();
  const initialized = useRef(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <section id="callback" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between gap-8 items-center bg-text-dark w-full h-[300px] rounded-lg px-8 py-10 mx-auto my-auto"
          >
            <div>
                <h2 className="text-3xl font-bold text-white text-center mb-4">Take the First Step to Better Health</h2>
                <p className='text-white text-lg'>Get Expert Care, Just a Click Away</p>
            </div>
            <div>
                <a
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center btn justify-center cursor-pointer text-nowrap bg-[#90D5FF] text-black px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
                >
                  <FaPhone className="mr-2" />
                  Get A Call Back
                </a>
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <Form />
                </Modal>
            </div>
          </motion.div>
        </div>
    </section>
  )
}

export default GetACallBack
