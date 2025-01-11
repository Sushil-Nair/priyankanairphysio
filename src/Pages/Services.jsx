import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MdArrowCircleRight } from "react-icons/md";
import GetACallBack from '../Components/GetACallBack';

function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-text-dark text-center mb-12"
        >
          Our Services
        </motion.h1>

        <div className="grid md:grid-cols-4 gap-8 " ref={ref}>
          {services.map((service, index) => (
            
            <motion.div
            key={service.title}
            initial={{ opacity: 0.5, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between min-h-[400px]"
            >
                <div>
                  <div className="text-primary-blue text-4xl mb-4">{service.icon}</div>
                  <h2 className="text-2xl font-semibold text-text-dark mb-4">{service.title}</h2>
                  <p className="text-text-dark mb-4">{service.description}</p>
                  <ul className="list-disc list-inside text-text-dark">
                    {service.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto pt-4">
                  <a href="/booking">
                    <MdArrowCircleRight className='flex mx-auto text-4xl hover:text-primary-blue' />
                  </a>
                </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call Back */}
      <GetACallBack />
    </div>
  );
}

const services = [
  {
    title: "Sports Rehabilitation",
    description: "Comprehensive rehabilitation programs for athletes and sports enthusiasts.",
    icon: "🏃‍♂️",
    benefits: [
      "Injury prevention strategies",
      "Performance enhancement",
      "Sport-specific training",
      "Recovery planning",
    ],
  },
  {
    title: "Post-Surgery Recovery",
    description: "Specialized rehabilitation programs for post-operative patients.",
    icon: "🏥",
    benefits: [
      "Guided recovery process",
      "Pain management",
      "Restored functionality",
      "Progress monitoring",
    ],
  },
  {
    title: "Chronic Pain Management",
    description: "Comprehensive approach to managing and reducing chronic pain.",
    icon: "🌟",
    benefits: [
      "Pain reduction strategies",
      "Lifestyle modifications",
      "Exercise programs",
      "Long-term management plans",
    ],
  },
  {
    title: "Musculoskeletal Therapy",
    description: "Expert care for bone, muscle, and joint conditions.",
    icon: "🦴",
    benefits: [
      "Comprehensive joint mobility assessment",
      "Targeted strength training protocols",
      "Manual therapy techniques",
      "Movement pattern correction",
    ],
  },
  {
    title: "Neurological Therapy",
    description: "Specialized treatment for nervous system disorders.",
    icon: "🧠",
    benefits: [
      "Cognitive function enhancement",
      "Balance and coordination training",
      "Neural pathway rehabilitation",
      "Adaptive skill development",
    ],
  },
  {
    title: "Cardio-Respiratory Therapy",
    description: "Advanced care for heart and lung conditions.",
    icon: "❤️",
    benefits: [
      "Breathing exercise programs",
      "Cardiac rehabilitation protocols",
      "Endurance training methods",
      "Respiratory function monitoring",
    ],
  },
  {
    title: "Pediatric Therapy",
    description: "Dedicated care for children's developmental needs.",
    icon: "👶",
    benefits: [
      "Age-appropriate exercise programs",
      "Motor skill development",
      "Sensory integration training",
      "Growth milestone tracking",
    ],
  },
  {
    title: "Geriatric Therapy",
    description: "Specialized care for aging adults.",
    icon: "👴",
    benefits: [
      "Fall prevention strategies",
      "Mobility maintenance programs",
      "Daily activity adaptation",
      "Quality of life enhancement",
    ],
  },
  {
    title: "Burn Patient Rehabilitation",
    description: "Comprehensive care for burn recovery.",
    icon: "🔥",
    benefits: [
      "Scar tissue management",
      "Range of motion restoration",
      "Skin elasticity exercises",
      "Psychological support integration",
    ],
  },
  {
    title: "Kinesiology Taping",
    description: "Advanced therapeutic taping technique for muscle and joint support.",
    icon: "🎯",
    benefits: [
      "Evidence-based application methods",
      "Joint stability enhancement",
      "Lymphatic drainage facilitation",
      "Pain signal modulation",
    ],
  },
  {
    title: "Cupping Therapy",
    description: "Ancient healing technique using suction for deep tissue therapy.",
    icon: "🏺",
    benefits: [
      "Targeted blood flow stimulation",
      "Muscle tension release",
      "Toxin removal promotion",
      "Myofascial decompression",
    ],
  },
  {
    title: "Myofascial Release Technique",
    description: "Specialized soft tissue manipulation for fascial restrictions.",
    icon: "🔄",
    benefits: [
      "Trigger point identification",
      "Sustained pressure application",
      "Connective tissue mobilization",
      "Movement pattern restoration",
    ],
  },
  {
    title: "Electrotherapy",
    description: "Therapeutic use of electrical currents for rehabilitation.",
    icon: "⚡",
    benefits: [
      "Pain management protocols",
      "Muscle re-education programs",
      "Tissue healing stimulation",
      "Circulation enhancement",
    ],
  },
];

export default Services;