import { useEffect } from 'react';

const InteractiveDots = () => {
  useEffect(() => {
    const numDots = 80;
    const maxDistance = 200;
    const dots = [];
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'dots-container';
    document.body.appendChild(dotsContainer);
    
    console.log('Dots container created:', dotsContainer);
    
    for (let i = 0; i < numDots; i++) {
      const dot = document.createElement('div');
      dot.className = 'dot';
      
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      
      const size = Math.random() * 3 + 2;
      const originalX = x;
      const originalY = y;
      
      const hue = Math.floor(Math.random() * 360);
      const color = `hsla(${hue}, 70%, 80%, 0.25)`;
      
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.backgroundColor = color;
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
      
      dotsContainer.appendChild(dot);
      
      dots.push({
        element: dot,
        originalX,
        originalY
      });
    }
    
    console.log(`${dots.length} dots created`);
    
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
  
    const updateDots = () => {
      dots.forEach(dot => {
        const dx = mouseX - dot.originalX;
        const dy = mouseY - dot.originalY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          
          const moveX = -Math.cos(angle) * force * 30;
          const moveY = -Math.sin(angle) * force * 30;
          
          const scale = 1 + force * 1.5;
          
          dot.element.style.transform = `translate(${moveX}px, ${moveY}px) scale(${scale})`;
          dot.element.style.opacity = 0.3 + force * 0.7;
        } else {
          dot.element.style.transform = 'translate(0, 0) scale(1)';
          dot.element.style.opacity = 0.3;
        }
      });
      
      requestAnimationFrame(updateDots);
    };
    
    const handleResize = () => {
      dots.forEach(dot => {
        dot.originalX = Math.random() * window.innerWidth;
        dot.originalY = Math.random() * window.innerHeight;
        dot.element.style.left = `${dot.originalX}px`;
        dot.element.style.top = `${dot.originalY}px`;
      });
    };
    
    window.addEventListener('resize', handleResize);
    
    const animationId = requestAnimationFrame(updateDots);
    
    return () => {
      console.log('Cleaning up dots');
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      
      if (dotsContainer && document.body.contains(dotsContainer)) {
        document.body.removeChild(dotsContainer);
      }
    };
  }, []);
  
  return null;
};

export default InteractiveDots;