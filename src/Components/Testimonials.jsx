import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto px-4">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-md"
      >
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`w-5 h-5 ${
                index < testimonials[currentIndex].rating
                  ? 'text-primary-yellow'
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <p className="text-lg text-text-dark mb-4 italic">
          "{testimonials[currentIndex].text}"
        </p>
        <div className="flex items-center justify-center">
          {/* {testimonials[currentIndex].image && (
            // <img
            //   src={testimonials[currentIndex].image}
            //   alt={testimonials[currentIndex].name}
            //   className="w-12 h-12 rounded-full mr-4"
            // />
          )} */}
          <div>
            <p className="font-semibold text-text-dark text-center">{testimonials[currentIndex].name}</p>
            <p className="text-sm text-gray-600 text-center">{testimonials[currentIndex].condition}</p>
          </div>
        </div>
      </motion.div>

      <button
        onClick={prevTestimonial}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-text-dark p-2 rounded-full shadow-md hover:bg-gray-50"
      >
        <BsChevronLeft className="w-6 h-6 text-white hover:text-text-dark" />
      </button>
      <button
        onClick={nextTestimonial}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-text-dark p-2 rounded-full shadow-md hover:bg-gray-50"
      >
        <BsChevronRight className="w-6 h-6 text-white hover:text-text-dark" />
      </button>
    </div>
  );
}

const testimonials = [
  {
    name: "Kunal Deshmukh",
    condition: "Sports Injury Recovery",
    text: "After my sports injury, I was worried about getting back to playing. The rehabilitation program was excellent, and I'm now back to my pre-injury performance level.",
    rating: 5,
    image: "/testimonials/john.jpg"
  },
  {
    name: "Meera Rao",
    condition: "Chronic Back Pain",
    text: "I've struggled with chronic back pain for years. The treatment approach here has made a significant difference in my daily life. I can now enjoy activities I had given up on.",
    rating: 5,
    image: "/testimonials/sarah.jpg"
  },
  {
    name: "Rohan Verma",
    condition: "Post-Surgery Rehabilitation",
    text: "The post-surgery rehabilitation program was comprehensive and effective. The therapist's expertise and attention to detail helped me recover faster than expected.",
    rating: 5,
    image: "/testimonials/michael.jpg"
  }
];

export default Testimonials;