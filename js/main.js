/* ==========================================================================
   APPLICATION ENTRY POINT (MAIN MODULE)
   ========================================================================== */

import { initParticles, initGlobe, initScrollBubbles } from './particles.js';
import { initChatbot } from './chatbot.js';
import { initLMS } from './lms.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Modular Components
    initParticles();
    initGlobe();
    initScrollBubbles();
    initChatbot();
    initLMS();

    // 2. Sticky Header scroll effect
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }, { passive: true });
    }

    // 3. Mobile responsive Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            const isActive = hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', isActive);
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // 4. Scroll Reveal Animations (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Stop observing once animated to save cycles
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 5. Active Link Highlight on Scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${id}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }, {
        root: null,
        rootMargin: '-20% 0px -60% 0px', // focused viewport band
        threshold: 0
    });

    sections.forEach(section => {
        if (section.id) {
            sectionObserver.observe(section);
        }
    });

    // 6. Stats Count-Up Animation
    const statsSection = document.querySelector('.stats-section');
    const counters = document.querySelectorAll('.counter');
    const floatCounters = document.querySelectorAll('.counter-float');
    let countersAnimated = false;

    const startCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 1500;
            const stepTime = Math.abs(Math.floor(duration / target));
            let current = 0;
            
            const timer = setInterval(() => {
                current += 1;
                counter.innerText = current;
                if (current >= target) {
                    counter.innerText = target;
                    clearInterval(timer);
                }
            }, Math.max(stepTime, 15));
        });

        floatCounters.forEach(counter => {
            const target = parseFloat(counter.getAttribute('data-target'));
            const duration = 1500;
            const steps = 50;
            const increment = target / steps;
            let current = 0;
            let count = 0;

            const timer = setInterval(() => {
                current += increment;
                counter.innerText = current.toFixed(1);
                count++;
                if (count >= steps) {
                    counter.innerText = target.toFixed(1);
                    clearInterval(timer);
                }
            }, duration / steps);
        });
    };

    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !countersAnimated) {
                    startCounters();
                    countersAnimated = true;
                }
            });
        }, { threshold: 0.25 });
        statsObserver.observe(statsSection);
    }

    // 7. Project Portfolio Filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                    setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'scale(1)'; }, 50);
                } else {
                    const categories = card.getAttribute('data-category').split(',');
                    if (categories.includes(filterValue)) {
                        card.style.display = 'block';
                        setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'scale(1)'; }, 50);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.95)';
                        setTimeout(() => { card.style.display = 'none'; }, 300);
                    }
                }
            });
        });
    });

    // 8. Testimonials Slider Carousel
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.nav-dot');
    let currentSlide = 0;
    let slideInterval;

    const showSlide = (index) => {
        if (slides.length === 0) return;
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        slides[index].classList.add('active');
        if (dots[index]) dots[index].classList.add('active');
        currentSlide = index;
    };

    const nextSlide = () => {
        if (slides.length === 0) return;
        let next = (currentSlide + 1) % slides.length;
        showSlide(next);
    };

    const startSlideShow = () => {
        slideInterval = setInterval(nextSlide, 5000);
    };

    const stopSlideShow = () => {
        clearInterval(slideInterval);
    };

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            stopSlideShow();
            const slideIndex = parseInt(dot.getAttribute('data-slide'));
            showSlide(slideIndex);
            startSlideShow();
        });
    });

    if (slides.length > 0) {
        startSlideShow();
    }

    // 9. Portfolio Projects Image Modal Lightbox
    const modal = document.getElementById('portfolio-modal');
    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('modal-caption');
    const closeBtn = document.getElementById('close-modal');

    if (modal && closeBtn) {
        projectCards.forEach(card => {
            if (card.classList.contains('direct-link')) return;
            const imgWrap = card.querySelector('.project-image-wrap');
            const img = card.querySelector('.project-image');
            const titleEl = card.querySelector('.project-info-box h3');

            if (imgWrap && img && titleEl) {
                const title = titleEl.innerText;
                imgWrap.addEventListener('click', () => {
                    modal.style.display = 'block';
                    modalImg.src = img.src;
                    captionText.innerText = title;
                    document.body.style.overflow = 'hidden';
                });
            }
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // 10. Contact Form Submission via Web3Forms AJAX
    const contactForm = document.getElementById('portfolio-contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('.btn-submit');
            if (!submitBtn) return;
            const originalText = submitBtn.innerHTML;

            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Transmitting Securely...';

            const formData = new FormData(contactForm);
            
            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200 || json.success) {
                    submitBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Inquiry Sent Successfully!';
                    submitBtn.style.background = 'var(--accent-emerald)';
                    submitBtn.style.color = '#020813';
                    contactForm.reset();
                } else {
                    submitBtn.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Sending Failed';
                    submitBtn.style.background = '#ef4444';
                    submitBtn.style.color = '#ffffff';
                }
            })
            .catch(error => {
                console.error('Submission error:', error);
                // Fallback simulation mode
                submitBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Inquiry Received (Simulation Mode)';
                submitBtn.style.background = 'var(--accent-emerald)';
                submitBtn.style.color = '#020813';
                contactForm.reset();
            })
            .finally(() => {
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = '';
                    submitBtn.style.color = '';
                }, 4000);
            });
        });
    }
});
