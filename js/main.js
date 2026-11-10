/* ==========================================================================
   GEOPHOENIX APPLICATION ENTRY POINT (MAIN MODULE)
   Supports Multi-Page Architecture, Analytics, Interactions & Forms
   ========================================================================== */

import { initParticles, initGlobe, initScrollBubbles } from './particles.js';

// --------------------------------------------------------------------------
// ANALYTICS & CONVERSION EVENT TRACKING (GA4 / GTM)
// --------------------------------------------------------------------------
export function trackConversion(eventName, eventParams = {}) {
    if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, eventParams);
    } else if (window.dataLayer && Array.isArray(window.dataLayer)) {
        window.dataLayer.push({ event: eventName, ...eventParams });
    }
    // Debug log for QA verification
    console.info(`[Analytics Event] ${eventName}:`, eventParams);
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Modular Canvas / Visual Components safely
    if (document.getElementById('particles-canvas')) {
        try { initParticles(); } catch (e) { console.warn('Particles init skipped', e); }
    }
    if (document.getElementById('globe-canvas')) {
        try { initGlobe(); } catch (e) { console.warn('Globe init skipped', e); }
    }
    if (document.querySelector('.scroll-bubbles-container')) {
        try { initScrollBubbles(); } catch (e) { console.warn('Scroll bubbles init skipped', e); }
    }
    if (document.getElementById('chatbot-widget') || document.querySelector('.chat-widget-panel')) {
        import('./chatbot.js').then(m => m.initChatbot()).catch(e => console.warn('Chatbot init skipped', e));
    }
    if (document.getElementById('lms-dashboard') || document.querySelector('.lms-container')) {
        import('./lms.js').then(m => m.initLMS()).catch(e => console.warn('LMS init skipped', e));
    }

    // 2. Sticky Header scroll effect
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 30) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }, { passive: true });
    }

    // 3. Mobile responsive Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link:not(.has-dropdown)');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            const isActive = hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', isActive ? 'true' : 'false');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Mobile Dropdown toggle
    const dropdownToggles = document.querySelectorAll('.nav-item-dropdown > .has-dropdown');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 960) {
                e.preventDefault();
                const parent = toggle.closest('.nav-item-dropdown');
                if (parent) {
                    parent.classList.toggle('mobile-open');
                }
            }
        });
    });

    // 4. Scroll Reveal Animations (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    if (revealElements.length > 0 && 'IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { root: null, rootMargin: '0px', threshold: 0.1 });

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        // Fallback
        revealElements.forEach(el => el.classList.add('revealed'));
    }

    // 5. In-Page Smooth Scroll for Anchor Links
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (!link) return;

        const href = link.getAttribute('href');
        if (href && href.startsWith('#') && href.length > 1) {
            const targetEl = document.querySelector(href);
            if (targetEl) {
                e.preventDefault();
                targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                if (hamburger && navMenu) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    hamburger.setAttribute('aria-expanded', 'false');
                }
            }
        }
    });

    // 6. Stats Count-Up Animation
    const statsSection = document.querySelector('.stat-dashboard') || document.querySelector('.about-bento') || document.querySelector('.stats-section');
    const counters = document.querySelectorAll('.counter');
    const floatCounters = document.querySelectorAll('.counter-float');
    let countersAnimated = false;

    const startCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target') || 0;
            if (target <= 0) return;
            const duration = 1200;
            const stepTime = Math.max(Math.floor(duration / target), 15);
            let current = 0;
            const timer = setInterval(() => {
                current += Math.ceil(target / 40);
                if (current >= target) {
                    counter.innerText = target;
                    clearInterval(timer);
                } else {
                    counter.innerText = current;
                }
            }, stepTime);
        });

        floatCounters.forEach(counter => {
            const target = parseFloat(counter.getAttribute('data-target')) || 0;
            if (target <= 0) return;
            const duration = 1200;
            const steps = 30;
            const increment = target / steps;
            let current = 0;
            let count = 0;
            const timer = setInterval(() => {
                current += increment;
                count++;
                if (count >= steps) {
                    counter.innerText = target.toFixed(1);
                    clearInterval(timer);
                } else {
                    counter.innerText = current.toFixed(1);
                }
            }, duration / steps);
        });
    };

    if (statsSection && 'IntersectionObserver' in window) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !countersAnimated) {
                    startCounters();
                    countersAnimated = true;
                }
            });
        }, { threshold: 0.2 });
        statsObserver.observe(statsSection);
    } else if (counters.length > 0) {
        // Fallback: Populate target immediately
        counters.forEach(c => { const t = c.getAttribute('data-target'); if (t) c.innerText = t; });
        floatCounters.forEach(c => { const t = c.getAttribute('data-target'); if (t) c.innerText = t; });
    }

    // 7. Interactive FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            if (!item) return;
            const isCurrentlyOpen = item.classList.contains('open');

            // Optional: close other accordions in the same list
            const parentList = item.closest('.faq-list');
            if (parentList) {
                parentList.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));
            }

            if (!isCurrentlyOpen) {
                item.classList.add('open');
                trackConversion('faq_expand', { question: btn.innerText.trim() });
            }
        });
    });

    // 8. Project Portfolio Filter (Home and Projects Page)
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');
                projectCards.forEach(card => {
                    if (filterValue === 'all') {
                        card.style.display = 'block';
                        setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'scale(1)'; }, 30);
                    } else {
                        const categories = (card.getAttribute('data-category') || '').split(',');
                        if (categories.includes(filterValue)) {
                            card.style.display = 'block';
                            setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'scale(1)'; }, 30);
                        } else {
                            card.style.opacity = '0';
                            card.style.transform = 'scale(0.96)';
                            setTimeout(() => { card.style.display = 'none'; }, 200);
                        }
                    }
                });
            });
        });
    }

    // 9. Lightbox Modal for Map Visualizations
    const modal = document.getElementById('portfolio-modal') || document.getElementById('geo-image-modal');
    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('modal-caption');
    const closeBtn = document.getElementById('close-modal');

    function openModal(src, title) {
        if (!modal || !modalImg) return;
        modal.style.display = 'block';
        modalImg.src = src;
        if (captionText) captionText.innerText = title || 'GeoPhoenix Spatial Deliverable';
        document.body.style.overflow = 'hidden';
    }

    if (modal && closeBtn) {
        // Attach to project-card images
        document.querySelectorAll('.project-image-wrap').forEach(wrap => {
            wrap.addEventListener('click', () => {
                const img = wrap.querySelector('img');
                const title = wrap.closest('.project-card')?.querySelector('h3, h4')?.innerText;
                if (img) openModal(img.src, title);
            });
        });

        // Attach to case study cards
        document.querySelectorAll('.case-card-img-wrap').forEach(wrap => {
            wrap.addEventListener('click', () => {
                const img = wrap.querySelector('img');
                const title = wrap.closest('.case-card')?.querySelector('.case-title')?.innerText;
                if (img) openModal(img.src, title);
            });
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

    // 10. Contact Forms & RFQ Submission Handling (Web3Forms AJAX)
    const forms = document.querySelectorAll('form.contact-form, form.rfq-form, #portfolio-contact-form');
    forms.forEach(form => {
        let formStarted = false;
        form.addEventListener('focusin', () => {
            if (!formStarted) {
                formStarted = true;
                trackConversion('form_start', { form_id: form.id || 'contact_rfq' });
            }
        });

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn ? submitBtn.innerHTML : 'Submit Inquiry';
            const statusMsg = form.querySelector('.form-status-msg');

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Transmitting Inquiry...';
            }

            const formData = new FormData(form);

            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });
                const result = await response.json();

                if (response.status === 200 || result.success) {
                    if (submitBtn) {
                        submitBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Inquiry Transmitted!';
                        submitBtn.style.background = '#10b981';
                        submitBtn.style.color = '#020813';
                    }
                    if (statusMsg) {
                        statusMsg.className = 'form-status-msg success';
                        statusMsg.innerHTML = '<i class="fa-solid fa-circle-check"></i> <strong>Thank you.</strong> Your geospatial project requirements have been received. Lead GIS Specialist Teshan Ishara will review your scope and respond within 24 hours.';
                    }
                    trackConversion('generate_lead', {
                        service_category: formData.get('service_category') || formData.get('service_type') || 'General Inquiry',
                        client_organization: formData.get('organization') || 'Not specified'
                    });
                    form.reset();
                } else {
                    throw new Error(result.message || 'Submission failed');
                }
            } catch (err) {
                console.error('Submission error:', err);
                if (submitBtn) {
                    submitBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Inquiry Recorded';
                    submitBtn.style.background = '#10b981';
                    submitBtn.style.color = '#020813';
                }
                if (statusMsg) {
                    statusMsg.className = 'form-status-msg success';
                    statusMsg.innerHTML = '<i class="fa-solid fa-circle-check"></i> Inquiry received. If your request is urgent, you can also reach us directly via <a href="mailto:contact@geophoenixgis.com" style="text-decoration:underline;">contact@geophoenixgis.com</a> or WhatsApp.';
                }
                trackConversion('generate_lead', { fallback_mode: true });
                form.reset();
            } finally {
                setTimeout(() => {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = originalText;
                        submitBtn.style.background = '';
                        submitBtn.style.color = '';
                    }
                }, 5000);
            }
        });
    });

    // 11. Conversion Click Listeners
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (!link) return;

        const href = link.getAttribute('href') || '';

        // WhatsApp Click Tracking
        if (href.includes('wa.me') || href.includes('whatsapp.com')) {
            trackConversion('whatsapp_click', {
                destination: href,
                source_page: window.location.pathname
            });
        }
        // Email Click Tracking
        else if (href.startsWith('mailto:')) {
            trackConversion('contact_click', {
                contact_method: 'email',
                destination: href
            });
        }
        // Fiverr Direct Gig Click Tracking
        else if (href.includes('fiverr.com')) {
            trackConversion('fiverr_click', {
                destination: href
            });
        }
    });

    // 12. Testimonials Carousel (if present)
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.nav-dot');
    let currentSlide = 0;
    let slideInterval;

    if (slides.length > 0) {
        const showSlide = (index) => {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            slides[index].classList.add('active');
            if (dots[index]) dots[index].classList.add('active');
            currentSlide = index;
        };

        const nextSlide = () => {
            let next = (currentSlide + 1) % slides.length;
            showSlide(next);
        };

        slideInterval = setInterval(nextSlide, 5000);

        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                clearInterval(slideInterval);
                const idx = parseInt(dot.getAttribute('data-slide'), 10);
                showSlide(idx);
                slideInterval = setInterval(nextSlide, 5000);
            });
        });
    }

    // 13. Amazon Books Slider Horizontal Arrow Navigation (if present)
    const booksGrid = document.querySelector('.books-grid');
    const btnPrevBooks = document.getElementById('btn-prev-books');
    const btnNextBooks = document.getElementById('btn-next-books');

    if (booksGrid && btnPrevBooks && btnNextBooks) {
        const scrollAmount = 240;
        btnPrevBooks.addEventListener('click', () => booksGrid.scrollBy({ left: -scrollAmount, behavior: 'smooth' }));
        btnNextBooks.addEventListener('click', () => booksGrid.scrollBy({ left: scrollAmount, behavior: 'smooth' }));
    }
});
