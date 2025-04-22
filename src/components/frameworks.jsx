import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiNextdotjs } from 'react-icons/si';

const Frameworks = () => {
  const [activeFramework, setActiveFramework] = useState(null);

  const frameworks = [
    { 
      name: "Java", 
      icon: <FaJava size={24} />,
      color: "#007396" 
    },
    { 
      name: "Python", 
      icon: <FaPython size={24} />,
      color: "#3776AB" 
    },
    { 
      name: "JavaScript", 
      icon: <SiJavascript size={22} />,
      color: "#F7DF1E" 
    },
    { 
      name: "React.js", 
      icon: <FaReact size={24} />,
      color: "#61DAFB" 
    },
    { 
      name: "Next.js", 
      icon: <SiNextdotjs size={22} />,
      color: "#000000" 
    },
    { 
      name: "HTML 5", 
      icon: <FaHtml5 size={24} />,
      color: "#E34F26" 
    },
    { 
      name: "CSS", 
      icon: <FaCss3Alt size={24} />,
      color: "#1572B6" 
    },
    { 
      name: "TypeScript", 
      icon: <SiTypescript size={22} />,
      color: "#3178C6" 
    }
  ];

  return (
    <div className="frameworks-section">
      <div className="frameworks-grid">
        {frameworks.map((framework, index) => (
          <motion.div
            key={index}
            className="framework-item"
            onMouseEnter={() => setActiveFramework(framework.name)}
            onMouseLeave={() => setActiveFramework(null)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: index * 0.04 }}
          >
            <motion.div
              className="framework-box"
              animate={{
                scale: activeFramework === framework.name ? 1.02 : 1,
                boxShadow: activeFramework === framework.name 
                  ? `0 2px 8px rgba(0, 0, 0, 0.08)` 
                  : `0 1px 3px rgba(0, 0, 0, 0.02)`,
                borderColor: activeFramework === framework.name 
                  ? framework.color 
                  : 'rgba(230, 230, 230, 1)',
              }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="framework-logo-container"
                style={{ color: activeFramework === framework.name ? framework.color : "#666" }}
                animate={{
                  filter: activeFramework === framework.name ? "grayscale(0%)" : "grayscale(100%)"
                }}
                transition={{ duration: 0.2 }}
              >
                {framework.icon}
              </motion.div>
              <motion.span
                className="framework-name"
                animate={{
                  color: activeFramework === framework.name ? framework.color : "#333",
                }}
                transition={{ duration: 0.2 }}
              >
                {framework.name}
              </motion.span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Frameworks;