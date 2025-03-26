import { useEffect } from 'react';

const InteractiveDots = () => {
  useEffect(() => {
    // Parameters
    const numDots = 80;
    const maxDistance = 200;
    const dots = [];
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    
    // Create dots container
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'dots-container';
    document.body.appendChild(dotsContainer);
    
    console.log('Dots container created:', dotsContainer);
    
    // Create dots
    for (let i = 0; i < numDots; i++) {
      const dot = document.createElement('div');
      dot.className = 'dot';
      
      // Random dot starting positions
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      
      // Random dot properties
      const size = Math.random() * 3 + 2;
      const originalX = x;
      const originalY = y;
      
      // Get random pastel color with higher opacity
      const hue = Math.floor(Math.random() * 360);
      const color = `hsla(${hue}, 70%, 80%, 0.25)`;
      
      // Apply properties
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.backgroundColor = color;
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
      
      dotsContainer.appendChild(dot);
      
      // Store dot properties
      dots.push({
        element: dot,
        originalX,
        originalY
      });
    }
    
    console.log(`${dots.length} dots created`);
    
    // Track mouse movement
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    // Update dots animation function
    const updateDots = () => {
      dots.forEach(dot => {
        // Calculate distance from mouse
        const dx = mouseX - dot.originalX;
        const dy = mouseY - dot.originalY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Only affect dots within max distance
        if (distance < maxDistance) {
          // Calculate repulsion effect (dots move away from cursor)
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          
          // Apply movement
          const moveX = -Math.cos(angle) * force * 30;
          const moveY = -Math.sin(angle) * force * 30;
          
          // Add a slight grow effect
          const scale = 1 + force * 1.5; // More noticeable scale
          
          dot.element.style.transform = `translate(${moveX}px, ${moveY}px) scale(${scale})`;
          dot.element.style.opacity = 0.3 + force * 0.7;
        } else {
          // Return to original position
          dot.element.style.transform = 'translate(0, 0) scale(1)';
          dot.element.style.opacity = 0.3;
        }
      });
      
      requestAnimationFrame(updateDots);
    };
    
    // Handle window resize
    const handleResize = () => {
      dots.forEach(dot => {
        // Recalculate original positions
        dot.originalX = Math.random() * window.innerWidth;
        dot.originalY = Math.random() * window.innerHeight;
        dot.element.style.left = `${dot.originalX}px`;
        dot.element.style.top = `${dot.originalY}px`;
      });
    };
    
    window.addEventListener('resize', handleResize);
    
    // Start animation
    const animationId = requestAnimationFrame(updateDots);
    
    // Cleanup function
    return () => {
      console.log('Cleaning up dots');
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      
      if (dotsContainer && document.body.contains(dotsContainer)) {
        document.body.removeChild(dotsContainer);
      }
    };
  }, []); // Empty dependency array - run once on mount
  
  return null; // This component doesn't render anything itself
};

export default InteractiveDots;