import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

const Background = () => {
  const mountRef = useRef(null);
  const particlesRef = useRef([]);
  
  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);
    
    // Create particles
    const particleGeometry = new THREE.SphereGeometry(0.1, 8, 8);
    const particleMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xffffff,
      transparent: true,
      opacity: 0.5
    });
    
    for(let i = 0; i < 100; i++) {
      const particle = new THREE.Mesh(particleGeometry, particleMaterial);
      particle.position.set(
        Math.random() * 40 - 20,
        Math.random() * 40 - 20,
        Math.random() * 40 - 20
      );
      scene.add(particle);
      particlesRef.current.push(particle);
      
      // Animate each particle
      gsap.to(particle.position, {
        x: Math.random() * 40 - 20,
        y: Math.random() * 40 - 20,
        z: Math.random() * 40 - 20,
        duration: 10 + Math.random() * 20,
        repeat: -1,
        yoyo: true,
        ease: "none"
      });
    }
    
    camera.position.z = 30;
    
    // Mouse interaction
    const mouse = new THREE.Vector2();
    const handleMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      gsap.to(camera.position, {
        x: mouse.x * 2,
        y: mouse.y * 2,
        duration: 1
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      particlesRef.current.forEach(particle => {
        particle.rotation.x += 0.001;
        particle.rotation.y += 0.001;
      });
      renderer.render(scene, camera);
    };
    animate();
    
    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div 
      ref={mountRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity: 0.7
      }}
    />
  );
};

export default Background;