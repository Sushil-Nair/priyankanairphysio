import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowDown } from 'react-icons/io';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggleQuestion(index)}
            className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
          >
            <span className="font-medium text-text-dark text-left">{faq.question}</span>
            <IoIosArrowDown
              className={`w-5 h-5 text-text-dark transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-4 bg-gray-50 rounded-b-lg">
                  <p className="text-text-dark">{faq.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

const faqs = [
  {
    question: "What should I expect during my first visit?",
    answer: "During your initial visit, we'll conduct a thorough assessment of your condition, discuss your medical history, and develop a personalized treatment plan. The session typically lasts 30-45 minutes."
  },
  {
    question: "Do I need a referral from my doctor?",
    answer: "While a referral isn't always required, some insurance providers may need one for coverage. We recommend checking with your insurance provider before your first visit."
  },
  {
    question: "How many sessions will I need?",
    answer: "The number of sessions varies depending on your condition and progress. After your initial assessment, we'll provide an estimated treatment timeline and regularly review your progress."
  },
  {
    question: "Does insurance cover physiotherapy?",
    answer: "Many insurance plans cover physiotherapy services. We recommend contacting your insurance provider to verify your coverage and any requirements for claims."
  },
  {
    question: "What should I wear to my appointment?",
    answer: "Wear comfortable, loose-fitting clothes that allow easy movement and access to the area requiring treatment."
  },
  {
    question: "How long does each session last?",
    answer: "Regular treatment sessions typically last 20-30 minutes. The duration may vary based on your specific treatment plan and needs."
  }
];

export default FAQ;