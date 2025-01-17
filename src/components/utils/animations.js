// src/utils/animations.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initializeAnimations = () => {
  // Hero animations
  gsap.from('.hero-title', {
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: 'power4.out',
    stagger: 0.2
  });

  // Navbar animation
  gsap.from('.nav-item', {
    duration: 1,
    y: -50,
    opacity: 0,
    stagger: 0.1,
    ease: 'power2.out'
  });

  // Stats counter animation
  const statsElements = gsap.utils.toArray('.stat-number');
  statsElements.forEach(stat => {
    let target = parseInt(stat.getAttribute('data-target'));
    ScrollTrigger.create({
      trigger: stat,
      start: 'top center+=100',
      onEnter: () => {
        gsap.to(stat, {
          duration: 2,
          innerText: target,
          snap: { innerText: 1 },
          ease: 'power1.out'
        });
      }
    });
  });

  // Game cards parallax effect
  const gameCards = gsap.utils.toArray('.game-card');
  gameCards.forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top center+=100',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 50,
      rotation: 5,
      duration: 0.8,
      delay: i * 0.2
    });
  });

  // Community section animation
  gsap.from('.community-item', {
    scrollTrigger: {
      trigger: '.community-section',
      start: 'top center'
    },
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 1
  });
};