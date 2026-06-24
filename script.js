/* ==========================================================================
   PORTFOLIO INTERACTIVE LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // Initialize custom GIS Globe and Data Particles
    initParticles();
    initGlobe();
    initScrollBubbles();
    initChatbot();
    initLMS();

    // --- STICKY NAV ON SCROLL ---
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }, { passive: true });

    // --- MOBILE HAMBURGER MENU ---
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // --- ACTIVE LINK ON SCROLL (Intersection Observer) ---
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

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
    }, observerOptions);

    sections.forEach(section => {
        if (section.id) {
            sectionObserver.observe(section);
        }
    });

    // --- STATS COUNT-UP ANIMATION ---
    const statsSection = document.querySelector('.stats-section');
    const counters = document.querySelectorAll('.counter');
    const floatCounters = document.querySelectorAll('.counter-float');
    let animated = false;

    const startCounters = () => {
        // Integer counters
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 1500; // 1.5 seconds
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

        // Floating counters (e.g. 4.9 rating)
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

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                startCounters();
                animated = true;
            }
        });
    }, { threshold: 0.2 });

    if (statsSection) {
        statsObserver.observe(statsSection);
    }

    // --- PROJECT PORTFOLIO FILTER ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from buttons
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
                        card.style.transform = 'scale(0.9)';
                        setTimeout(() => { card.style.display = 'none'; }, 300);
                    }
                }
            });
        });
    });

    // --- TESTIMONIALS SLIDER ---
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.nav-dot');
    let currentSlide = 0;
    let slideInterval;

    const showSlide = (index) => {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    };

    const nextSlide = () => {
        let next = (currentSlide + 1) % slides.length;
        showSlide(next);
    };

    const startSlideShow = () => {
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
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

    // --- IMAGE MODAL FOR PROJECT VIEWS ---
    const modal = document.getElementById('portfolio-modal');
    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('modal-caption');
    const closeBtn = document.getElementById('close-modal');

    projectCards.forEach(card => {
        if (card.classList.contains('direct-link')) {
            return;
        }
        const imgWrap = card.querySelector('.project-image-wrap');
        const img = card.querySelector('.project-image');
        const title = card.querySelector('.project-info-box h3').innerText;

        imgWrap.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = img.src;
            captionText.innerText = title;
            document.body.style.overflow = 'hidden'; // Stop body scrolling when modal open
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

    // --- CONTACT FORM SUBMISSION HANDLING (WEB3FORMS AJAX) ---
    const contactForm = document.getElementById('portfolio-contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('.btn-submit');
            const originalText = submitBtn.innerHTML;

            // Check if key is still placeholder
            const accessKey = contactForm.querySelector('input[name="access_key"]').value;
            if (accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY_HERE') {
                alert('Note: The email contact form is currently running in simulation mode. To receive actual client emails, please replace "YOUR_WEB3FORMS_ACCESS_KEY_HERE" in index.html with a free key from web3forms.com!');
            }

            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Transmitting Securely...';

            const formData = new FormData(contactForm);
            
            // Web3Forms fetch submission
            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200 || json.success) {
                    submitBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Inquiry Sent Successfully!';
                    submitBtn.style.background = 'linear-gradient(135deg, var(--accent-teal), var(--accent-cyan))';
                    submitBtn.style.color = '#000000';
                    contactForm.reset();
                } else {
                    submitBtn.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Sending Failed';
                    submitBtn.style.background = '#ff4d4d';
                    submitBtn.style.color = '#ffffff';
                }
            })
            .catch(error => {
                console.error('Submission error:', error);
                // Fallback simulation for local/offline testing
                submitBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Inquiry Received (Simulation Mode)';
                submitBtn.style.background = 'linear-gradient(135deg, var(--accent-teal), var(--accent-cyan))';
                submitBtn.style.color = '#000000';
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

// --- HERO INTERACTIVE PARTICLES (CONSTELLATION) ---
const initParticles = () => {
    const canvas = document.getElementById('data-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;
    
    const particles = [];
    const maxParticles = window.innerWidth < 768 ? 30 : 65;
    const connectionDist = 110;
    const mouse = { x: null, y: null, radius: 160 };
    
    // Handle Resize
    window.addEventListener('resize', () => {
        if (!canvas.offsetWidth) return;
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
    });
    
    // Track Mouse
    const heroSection = document.getElementById('home');
    heroSection.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });
    
    heroSection.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });
    
    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 2 + 1;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            // Boundary collision
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
            
            // Mouse interactive repulsion/attraction
            if (mouse.x !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                if (dist < mouse.radius) {
                    const force = (mouse.radius - dist) / mouse.radius;
                    this.x -= (dx / dist) * force * 0.5;
                    this.y -= (dy / dist) * force * 0.5;
                }
            }
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 242, 254, 0.4)';
            ctx.fill();
        }
    }
    
    // Initialize
    for (let i = 0; i < maxParticles; i++) {
        particles.push(new Particle());
    }
    
    // Loop
    const animate = () => {
        if (!isParticlesVisible) return;
        ctx.clearRect(0, 0, width, height);
        
        // Draw lines and update
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                
                if (dist < connectionDist) {
                    const alpha = (connectionDist - dist) / connectionDist * 0.2;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(0, 242, 254, ${alpha})`;
                    ctx.lineWidth = 0.7;
                    ctx.stroke();
                }
            }
            
            // Connect to mouse
            if (mouse.x !== null) {
                const dx = particles[i].x - mouse.x;
                const dy = particles[i].y - mouse.y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                if (dist < mouse.radius) {
                    const alpha = (mouse.radius - dist) / mouse.radius * 0.35;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = `rgba(0, 242, 254, ${alpha})`;
                    ctx.lineWidth = 0.9;
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animate);
    };
    
    let isParticlesVisible = false;
    const particlesObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const wasVisible = isParticlesVisible;
            isParticlesVisible = entry.isIntersecting;
            if (isParticlesVisible && !wasVisible) {
                requestAnimationFrame(animate);
            }
        });
    }, { threshold: 0.05 });
    particlesObserver.observe(canvas);
    
    animate();
};

// --- 3D SPINNING WIREFRAME EARTH (GIS GLOBE) ---
const initGlobe = () => {
    const canvas = document.getElementById('globe-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;
    
    let radius = Math.min(width, height) * 0.42;
    let centerX = width / 2;
    let centerY = height / 2;
    
    // Dynamic variables
    let rotX = 0.35; // Tilt
    let rotY = 0;    // Y rotation
    let baseSpeed = 0.0035;
    let rotationSpeed = baseSpeed;
    let isHovered = false;
    
    // Interaction
    let isDragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;
    
    window.addEventListener('resize', () => {
        if (!canvas.offsetWidth) return;
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
        radius = Math.min(width, height) * 0.42;
        centerX = width / 2;
        centerY = height / 2;
    });
    
    canvas.addEventListener('mouseenter', () => {
        isHovered = true;
        rotationSpeed = baseSpeed * 3;
    });
    
    canvas.addEventListener('mouseleave', () => {
        isHovered = false;
        rotationSpeed = baseSpeed;
        isDragging = false;
    });
    
    canvas.addEventListener('mousedown', (e) => {
        isDragging = true;
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
    });
    
    window.addEventListener('mouseup', () => {
        isDragging = false;
    });
    
    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const deltaX = e.clientX - lastMouseX;
        const deltaY = e.clientY - lastMouseY;
        rotY += deltaX * 0.005;
        rotX += deltaY * 0.005;
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
    });
    
    // Spatial database nodes representing global clients (lat, lon coordinates in radians)
    // lon: -PI to PI, lat: -PI/2 to PI/2
    const clients = [
        { lat: 0.12, lon: 1.41, label: "Sri Lanka" },
        { lat: 0.64, lon: -1.72, label: "USA East" },
        { lat: 0.89, lon: -0.05, label: "UK / Europe" },
        { lat: -0.58, lon: 2.63, label: "Australia" },
        { lat: 0.61, lon: -2.13, label: "USA West" }
    ];
    
    const project = (lat, lon) => {
        // Rotations
        // 1. Rotate Y (longitude rotation)
        let radLon = lon + rotY;
        let radLat = lat;
        
        // Spherical coordinates
        let x = radius * Math.cos(radLat) * Math.sin(radLon);
        let y = radius * Math.sin(radLat);
        let z = radius * Math.cos(radLat) * Math.cos(radLon);
        
        // 2. Rotate X (latitude tilt)
        let tempY = y * Math.cos(rotX) - z * Math.sin(rotX);
        let tempZ = y * Math.sin(rotX) + z * Math.cos(rotX);
        
        return {
            x: centerX + x,
            y: centerY - tempY,
            z: tempZ
        };
    };
    
    const drawGlobe = () => {
        if (!isGlobeVisible) return;
        ctx.clearRect(0, 0, width, height);
        
        // Background sphere glow
        const glowGradient = ctx.createRadialGradient(centerX, centerY, radius * 0.7, centerX, centerY, radius);
        glowGradient.addColorStop(0, 'rgba(10, 10, 12, 0)');
        glowGradient.addColorStop(0.8, 'rgba(0, 240, 255, 0.03)');
        glowGradient.addColorStop(1, 'rgba(0, 240, 255, 0.16)');
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();
        
        // Draw grid outline circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.28)';
        ctx.lineWidth = 1.3;
        ctx.stroke();
        
        // Draw meridians (longitudes)
        const meridianCount = 10;
        for (let i = 0; i < meridianCount; i++) {
            const lon = (i / meridianCount) * Math.PI * 2;
            ctx.beginPath();
            for (let lat = -Math.PI / 2; lat <= Math.PI / 2; lat += 0.06) {
                const pt = project(lat, lon);
                if (pt.z >= 0) { // Render only the front hemisphere
                    if (lat === -Math.PI / 2) {
                        ctx.moveTo(pt.x, pt.y);
                      } else {
                        ctx.lineTo(pt.x, pt.y);
                    }
                }
            }
            ctx.strokeStyle = 'rgba(0, 240, 255, 0.11)';
            ctx.lineWidth = 0.75;
            ctx.stroke();
        }
        
        // Draw parallels (latitudes)
        const parallelCount = 6;
        for (let i = 1; i < parallelCount; i++) {
            const lat = -Math.PI / 2 + (i / parallelCount) * Math.PI;
            ctx.beginPath();
            for (let lon = -Math.PI; lon <= Math.PI; lon += 0.06) {
                const pt = project(lat, lon);
                if (pt.z >= 0) {
                    if (lon === -Math.PI) {
                        ctx.moveTo(pt.x, pt.y);
                    } else {
                        ctx.lineTo(pt.x, pt.y);
                    }
                }
            }
            ctx.strokeStyle = 'rgba(0, 240, 255, 0.11)';
            ctx.lineWidth = 0.75;
            ctx.stroke();
        }
        
        // Draw client node points
        clients.forEach(client => {
            const pt = project(client.lat, client.lon);
            if (pt.z >= 0) { // Front face
                const pulse = Math.abs(Math.sin(Date.now() * 0.0025 + client.lat * 4)) * 5 + 3;
                
                // Draw outer glowing pulse ring
                ctx.beginPath();
                ctx.arc(pt.x, pt.y, pulse, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(0, 240, 255, 0.22)';
                ctx.fill();
                
                // Draw inner solid dot
                ctx.beginPath();
                ctx.arc(pt.x, pt.y, 3.5, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(0, 240, 255, 0.95)';
                ctx.fill();
                
                // Label display on hover
                if (isHovered) {
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
                    ctx.font = '500 10px Inter';
                    ctx.fillText(client.label, pt.x + 8, pt.y + 3);
                }
            }
        });
        
        // Update rotation
        if (!isDragging) {
            rotY += rotationSpeed;
        }
        
        requestAnimationFrame(drawGlobe);
    };
    
    let isGlobeVisible = false;
    const globeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const wasVisible = isGlobeVisible;
            isGlobeVisible = entry.isIntersecting;
            if (isGlobeVisible && !wasVisible) {
                requestAnimationFrame(drawGlobe);
            }
        });
    }, { threshold: 0.05 });
    globeObserver.observe(canvas);
    
    drawGlobe();
};

// --- SCROLL-LINKED FLOATING BUBBLES ---
const initScrollBubbles = () => {
    let lastScrollTop = 0;
    let lastBubbleTime = 0;
    const bubbleThrottle = 80; // Min time in ms between bubble spawns
    const scrollDistThreshold = 10; // Min scroll distance in px to spawn

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollDelta = Math.abs(scrollTop - lastScrollTop);
        const now = Date.now();
        
        if (scrollDelta > scrollDistThreshold && (now - lastBubbleTime) > bubbleThrottle) {
            spawnScrollBubble();
            lastScrollTop = scrollTop;
            lastBubbleTime = now;
        }
    }, { passive: true });

    const spawnScrollBubble = () => {
        // Only run on desktop screen sizes where vertical-sidebar is visible
        if (window.innerWidth <= 1366) return;
        
        const bubble = document.createElement('div');
        bubble.classList.add('scroll-bubble');
        
        // Randomize bubble size (8px to 28px)
        const size = Math.random() * 20 + 8;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        
        // Horizontal position starts around the left vertical text
        const startX = 35 + Math.random() * 40;
        
        // Vertical position is distributed along the vertical text height (extending upwards from bottom: 12vh)
        const bottomOffset = window.innerHeight * 0.12;
        const textHeight = window.innerHeight * 0.53;
        const startY = window.innerHeight - bottomOffset - Math.random() * textHeight;
        
        bubble.style.left = `${startX}px`;
        bubble.style.top = `${startY}px`;
        
        // Harmonious neon theme colors
        const colors = [
            { main: 'rgba(0, 240, 255, 0.45)', glow: 'rgba(0, 240, 255, 0.5)' }, // Cyan
            { main: 'rgba(0, 162, 255, 0.4)', glow: 'rgba(0, 162, 255, 0.45)' }, // Neon Blue
            { main: 'rgba(20, 241, 188, 0.45)', glow: 'rgba(20, 241, 188, 0.5)' }, // Mint/Teal
            { main: 'rgba(139, 92, 246, 0.4)', glow: 'rgba(139, 92, 246, 0.45)' }, // Purple
            { main: 'rgba(255, 0, 127, 0.35)', glow: 'rgba(255, 0, 127, 0.4)' }  // Pink/Magenta
        ];
        
        const color = colors[Math.floor(Math.random() * colors.length)];
        bubble.style.setProperty('--bubble-color', color.main);
        bubble.style.setProperty('--bubble-glow', color.glow);
        
        // Randomize physics translation values (float to the right and slightly vertical)
        const dx = Math.random() * 130 + 70; // moves right by 70px to 200px
        const dy = (Math.random() - 0.5) * 120; // moves up or down slightly
        bubble.style.setProperty('--dx', `${dx}px`);
        bubble.style.setProperty('--dy', `${dy}px`);
        
        document.body.appendChild(bubble);
        
        // Auto cleanup of the bubble after animation finishes to prevent DOM leaks
        setTimeout(() => {
            bubble.remove();
        }, 3000); // 3 seconds matching the CSS animation duration
    };
};

// --- CHATBOT LOGIC (SIMULATION MODE) ---
const initChatbot = () => {
    const chatTrigger = document.getElementById('chat-trigger');
    const chatWindow = document.getElementById('chat-window');
    const chatClose = document.getElementById('chat-close');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const suggestionChips = document.querySelectorAll('.suggestion-chip');

    if (!chatTrigger || !chatWindow || !chatMessages || !chatInput || !chatSend) return;

    // Toggle Chat Window
    chatTrigger.addEventListener('click', () => {
        const isActive = chatWindow.classList.toggle('active');
        chatWindow.setAttribute('aria-hidden', !isActive);
        if (isActive) {
            chatInput.focus();
            // Remove pulsing animation once opened
            const pulse = chatTrigger.querySelector('.chat-trigger-pulse');
            if (pulse) pulse.remove();
        }
    });

    chatClose.addEventListener('click', () => {
        chatWindow.classList.remove('active');
        chatWindow.setAttribute('aria-hidden', 'true');
    });

    // Send Message on click
    chatSend.addEventListener('click', () => {
        handleUserMessage();
    });

    // Send Message on Enter key
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleUserMessage();
        }
    });

    // Handle suggestion chips
    suggestionChips.forEach(chip => {
        chip.addEventListener('click', () => {
            const topic = chip.getAttribute('data-topic');
            let userText = chip.innerText;
            appendMessage(userText, 'user-message');
            showTypingIndicator();
            
            setTimeout(() => {
                removeTypingIndicator();
                const response = getSimulatedResponse(topic);
                appendMessage(response, 'bot-message');
            }, 800);
        });
    });

    const handleUserMessage = () => {
        const text = chatInput.value.trim();
        if (!text) return;

        appendMessage(text, 'user-message');
        chatInput.value = '';
        
        showTypingIndicator();

        setTimeout(() => {
            removeTypingIndicator();
            const response = getBotResponse(text);
            appendMessage(response, 'bot-message');
        }, 1000);
    };

    const appendMessage = (text, className) => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', className);
        
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('message-content');
        contentDiv.innerHTML = text;
        messageDiv.appendChild(contentDiv);

        const timeSpan = document.createElement('span');
        timeSpan.classList.add('message-time');
        const now = new Date();
        const hrs = String(now.getHours()).padStart(2, '0');
        const mins = String(now.getMinutes()).padStart(2, '0');
        timeSpan.innerText = `${hrs}:${mins}`;
        messageDiv.appendChild(timeSpan);

        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    };

    let typingIndicatorElement = null;

    const showTypingIndicator = () => {
        if (typingIndicatorElement) return;
        
        typingIndicatorElement = document.createElement('div');
        typingIndicatorElement.classList.add('message', 'bot-message');
        
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('message-content');
        contentDiv.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Writing...';
        typingIndicatorElement.appendChild(contentDiv);
        
        chatMessages.appendChild(typingIndicatorElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    };

    const removeTypingIndicator = () => {
        if (typingIndicatorElement) {
            typingIndicatorElement.remove();
            typingIndicatorElement = null;
        }
    };

    const getSimulatedResponse = (topic) => {
        switch(topic) {
            case 'gis':
                return `<strong>GIS & Spatial Data Services:</strong><br>I specialize in high-precision GIS mapping, remote sensing, and statistical modeling. 🗺️<br><br>My expertise covers:<br>• Delineating <strong>wildfire fuel models</strong> & flood risk maps.<br>• <strong>Suitability Analysis</strong> & Multi-Criteria Evaluation (MCE).<br>• Custom GIS tools scripting using <strong>Python & R</strong>.<br>• SPSS academic data modeling.<br><br>Check out my active portfolio in the <strong>Projects</strong> section above!`;
            case 'books':
                return `<strong>Self-Published Author:</strong><br>I have written and published <strong>11 books</strong> on Amazon! 📚<br><br>Some key titles include:<br>• <em>Guardian of the Digital Self</em> (AI Safety)<br>• <em>The Sonic Gold Playbook</em> & <em>Suno AI Prompt Bundle</em> (AI Music)<br>• <em>Advanced GIS for Oceanography</em> (Marine Spatial Science)<br>• <em>250 Side Hustles for Wealth</em> (Finance)<br><br>You can click the <strong>"Buy on Amazon"</strong> buttons in the <strong>Publications</strong> section to grab your copy!`;
            case 'blog':
                return `<strong>Teshan Growth Academy:</strong><br>I run a blog focused on digital wealth creation. 📈<br><br>At <a href="https://teshangrowthacademy.blogspot.com/" target="_blank" style="color: var(--accent-teal); text-decoration: underline;">teshangrowthacademy.blogspot.com</a>, I write about:<br>• Building passive income streams.<br>• Advanced digital marketing workflows.<br>• Investment strategy & financial independence.<br><br>Check out the showcase card in the <strong>Publications</strong> section to visit directly!`;
            case 'contact':
                return `<strong>Let's Work Together!</strong> 🤝<br>You can contact me in any of these ways:<br>• Fill out the secure <strong>Contact Form</strong> below.<br>• Email me at <a href="mailto:teshan.ishara@gmail.com" style="color: var(--accent-teal); text-decoration: underline;">teshan.ishara@gmail.com</a>.<br>• WhatsApp chat at <a href="https://wa.me/94715298267" target="_blank" style="color: var(--accent-teal); text-decoration: underline;">+94 71 529 8267</a>.<br>• Visit my <a href="https://www.fiverr.com/s/AyNPwDX" target="_blank" style="color: var(--accent-teal); text-decoration: underline;">Fiverr Profile</a> to hire my services directly.`;
            default:
                return "How can I help you today?";
        }
    };

    const getBotResponse = (input) => {
        const query = input.toLowerCase();

        if (query.includes('gis') || query.includes('map') || query.includes('arcgis') || query.includes('qgis') || query.includes('spatial') || query.includes('cartograph')) {
            return getSimulatedResponse('gis');
        }
        if (query.includes('book') || query.includes('author') || query.includes('publish') || query.includes('amazon') || query.includes('suno') || query.includes('bible')) {
            return getSimulatedResponse('books');
        }
        if (query.includes('blog') || query.includes('blogger') || query.includes('growth') || query.includes('academy') || query.includes('finance')) {
            return getSimulatedResponse('blog');
        }
        if (query.includes('contact') || query.includes('hire') || query.includes('work') || query.includes('fiverr') || query.includes('whatsapp') || query.includes('email')) {
            return getSimulatedResponse('contact');
        }
        if (query.includes('hello') || query.includes('hi') || query.includes('hey') || query.includes('greetings')) {
            return `Hello! 😊 I am Teshan's virtual assistant. Ask me anything about his GIS mapping work, his 11 books, his Blogger site, or how to contact him.`;
        }
        if (query.includes('who are you') || query.includes('what is this') || query.includes('help')) {
            return `I am an AI assistant designed to represent Teshan's portfolio. You can click on the topic chips below or type a query about his GIS services, writing, or blog!`;
        }
        if (query.includes('thank') || query.includes('thanks') || query.includes('cool') || query.includes('awesome')) {
            return `You're very welcome! Let me know if you need any other information about Teshan's work. 👍`;
        }

        // Fallback response with helpful hints
        return `I want to make sure I give you the right details. Ask me about:<br>
        • <strong>GIS Services</strong> (mapping, analysis, coding)<br>
        • <strong>Self-Published Books</strong> (11 Amazon titles)<br>
        • <strong>Blogger</strong> (Teshan Growth Academy)<br>
        • <strong>Contact Details</strong> (email, WhatsApp, Fiverr)`;
    };
};

// ==========================================================================
// LMS PLATFORM LOGIC (QGIS COURSE PLATFORM)
// ==========================================================================
function initLMS() {
        let currentLang = localStorage.getItem('lms_lang') || 'en';
        let currentUser = JSON.parse(localStorage.getItem('lms_current_user')) || null;
        if (currentUser) {
            currentUser.completedSlides = currentUser.completedSlides || [];
            currentUser.studySeconds = currentUser.studySeconds || 0;
            currentUser.examScore = currentUser.examScore !== undefined ? currentUser.examScore : null;
            currentUser.examDate = currentUser.examDate !== undefined ? currentUser.examDate : null;
        }
        let activeSlideIndex = 0;
        let activeFlashIndex = 0;
        let timerInterval = null;
        let totalSeconds = 0;

        // BILINGUAL COURSE DATASET
        const lmsCourseData = {
            en: {
                title: "QGIS Fundamentals: Complete Beginner's Guide",
                agreement: "I agree not to copy, redistribute, or republish the course content without the explicit permission of Teshan Ishara.",
                outcomesTitle: "Course Learning Outcomes",
                curriculumTitle: "Course Curriculum (5 Modules)",
                careersTitle: "Available Opportunities & Careers",
                tabs: {
                    outcomes: `
                        <h4>Course Learning Outcomes</h4>
                        <ul>
                            <li>Understand the fundamentals of GIS, vector and raster data types.</li>
                            <li>Navigate the QGIS interface confidently and customize panel layouts.</li>
                            <li>Understand Coordinate Reference Systems (CRS) and avoid common projection errors.</li>
                            <li>Style vector layers using simple, categorized, and graduated symbology.</li>
                            <li>Work with attribute tables, add new columns, and run geometry calculations.</li>
                            <li>Run SQL-like queries and spatial selections to extract specific data.</li>
                            <li>Create professional print layouts with legends, scale bars, and north arrows.</li>
                        </ul>
                    `,
                    curriculum: `
                        <h4>Course Curriculum</h4>
                        <ul>
                            <li><strong>Module 1:</strong> Introduction to QGIS & GIS Basics (3 slides)</li>
                            <li><strong>Module 2:</strong> Spatial Data Sources & Coordinate Reference Systems (3 slides)</li>
                            <li><strong>Module 3:</strong> Map Visualization & Cartographic Styling (3 slides)</li>
                            <li><strong>Module 4:</strong> Working with Attribute Tables & Spatial Queries (3 slides)</li>
                            <li><strong>Module 5:</strong> Designing Print Layouts & Map Exporting (3 slides)</li>
                        </ul>
                    `,
                    careers: `
                        <h4>Available Opportunities & Careers</h4>
                        <p>Completing this course provides a strong foundation for various roles:</p>
                        <ul>
                            <li><strong>GIS Technician / Specialist:</strong> Manage mapping databases and build web maps.</li>
                            <li><strong>Environmental Consultant:</strong> Perform spatial analysis and suitability modeling.</li>
                            <li><strong>Urban Planner:</strong> Analyze service accessibility, zoning, and transport routing.</li>
                            <li><strong>Research Assistant:</strong> Help academic projects with spatial data visualization.</li>
                        </ul>
                    `
                },
                slides: [
                    // Module 1
                    {
                        module: "Module 1",
                        moduleTitle: "Introduction to QGIS & GIS Basics",
                        title: "What is GIS and QGIS?",
                        text: "Geographic Information Systems (GIS) capture, store, manipulate, analyze, and present spatial or geographic data. QGIS is a leading, free, and open-source desktop GIS application. It allows you to create maps, perform spatial analysis, and manage spatial databases.",
                        visual: "<strong>Core QGIS Capabilities:</strong><br>• Fully supports Vector (points, lines, polygons) and Raster (grids, imagery) formats.<br>• Integration with GRASS GIS, SAGA, and GDAL toolboxes.<br>• Extendable through thousands of community-developed plugins.",
                        download: null
                    },
                    {
                        module: "Module 1",
                        moduleTitle: "Introduction to QGIS & GIS Basics",
                        title: "Installing QGIS and Interface Tour",
                        text: "To get started, install QGIS on your machine. The QGIS interface is highly customizable and composed of several key panels: the Map Canvas (where your map is drawn), the Layers List (shows all loaded datasets), the Browser Panel (to navigate files), and the toolbars.",
                        visual: "<strong>Main Toolbar Shortcuts:</strong><br>• <code>Ctrl + Shift + V</code>: Add Vector Layer<br>• <code>Ctrl + Shift + R</code>: Add Raster Layer<br>• <code>Ctrl + Alt + T</code>: Open Toolbox<br>• Use the <strong>Settings -> Options</strong> menu to configure language and themes.",
                        download: null
                    },
                    {
                        module: "Module 1",
                        moduleTitle: "Introduction to QGIS & GIS Basics",
                        title: "Loading Your First Vector Layer",
                        text: "Vector data is stored as coordinates. Points represent discrete locations (e.g., cities), lines represent linear features (e.g., rivers), and polygons represent enclosed areas (e.g., countries). We will load a sample vector dataset representing Alaska.",
                        visual: "<strong>Practice Step:</strong><br>1. Download the Alaska dataset from the link below.<br>2. Extract the ZIP archive.<br>3. In QGIS, drag and drop the shapefile (.shp) into the Map Canvas, or go to <strong>Layer -> Add Layer -> Add Vector Layer</strong>.",
                        download: {
                            text: "Download Alaska Sample Dataset (ZIP, 3.2 MB)",
                            url: "http://download.osgeo.org/qgis/data/qgis_sample_data.zip"
                        }
                    },
                    // Module 2
                    {
                        module: "Module 2",
                        moduleTitle: "Spatial Data Sources & CRS",
                        title: "Understanding Vector vs Raster Formats",
                        text: "GIS data is broadly categorized into Vector (discrete points, lines, or polygons representing features with attribute metadata) and Raster (cell-based grids representing continuous fields like temperature or elevation). Choosing the right format is essential for spatial analysis.",
                        visual: "<strong>Format Comparisons:</strong><br>• <strong>Vector:</strong> ESRI Shapefiles (.shp), GeoPackage (.gpkg), GeoJSON (.geojson). Ideal for administrative boundaries.<br>• <strong>Raster:</strong> GeoTIFF (.tif), ASCII Grids. Ideal for digital elevation models (DEM) and satellite imagery.",
                        download: null
                    },
                    {
                        module: "Module 2",
                        moduleTitle: "Spatial Data Sources & CRS",
                        title: "Coordinate Reference Systems (CRS)",
                        text: "The Earth is a 3D ellipsoid, but maps are flat 2D projections. A Coordinate Reference System (CRS) defines how your geographic coordinates map onto a flat surface. Misaligned CRS settings (e.g. projecting WGS 84 onto a local coordinate grid without correction) lead to incorrect distance and area measurements.",
                        visual: "<strong>Key EPSG Codes to Remember:</strong><br>• <strong>EPSG:4326:</strong> WGS 84 - Geographic (degrees) used by GPS and web mapping.<br>• <strong>EPSG:3857:</strong> Web Mercator - Used by Google Maps & OpenStreetMap.<br>• Project CRS is displayed at the bottom right corner of the QGIS interface.",
                        download: null
                    },
                    {
                        module: "Module 2",
                        moduleTitle: "Spatial Data Sources & CRS",
                        title: "Reprojecting Layers in QGIS",
                        text: "QGIS handles multiple coordinate systems on-the-fly, but for analytical operations (like buffering or intersection calculations), your layers must share the exact same Projected CRS. To change a layer's projection permanently, you must export it.",
                        visual: "<strong>How to Reproject a Layer:</strong><br>1. Right-click the layer in the Layers panel.<br>2. Select <strong>Export -> Save Features As...</strong><br>3. Choose <strong>GeoPackage</strong> as format.<br>4. Under <strong>CRS</strong>, select the target projected coordinate system (e.g. UTM zone).<br>5. Click OK to save the reprojected layer.",
                        download: null
                    },
                    // Module 3
                    {
                        module: "Module 3",
                        moduleTitle: "Map Visualization & Styling",
                        title: "Symbology and Layer Properties",
                        text: "Symbology determines how features are visualized on your map canvas. In the Layer Properties panel, you can configure color, borders, opacity, and symbols. Standard styling modes include Single Symbol (all features styled identically) and Categorized (styling based on discrete attributes).",
                        visual: "<strong>Categorized Styling Practice:</strong><br>1. Double-click your layer to open Layer Properties.<br>2. Go to the <strong>Symbology</strong> tab.<br>3. Change the dropdown from 'Single Symbol' to <strong>'Categorized'</strong>.<br>4. Select a classification field (e.g., 'class' or 'type').<br>5. Click <strong>Classify</strong> to generate unique colors for each type.",
                        download: null
                    },
                    {
                        module: "Module 3",
                        moduleTitle: "Map Visualization & Styling",
                        title: "Graduated Styling for Continuous Data",
                        text: "Graduated symbology is used to map numerical continuous variables (like population density, elevation, or temperatures) using color gradients. Data is grouped into classes using classification modes like Equal Interval, Quantile, or Natural Breaks (Jenks).",
                        visual: "<strong>Graduated Styling Tips:</strong><br>• Use <strong>Jenks (Natural Breaks)</strong> for data with high variances or non-normal distributions.<br>• Avoid using too many classes (5 to 7 classes is standard for human readability).<br>• Choose color ramps that are colorblind-friendly (e.g., Viridis or color palettes from ColorBrewer).",
                        download: null
                    },
                    {
                        module: "Module 3",
                        moduleTitle: "Map Visualization & Styling",
                        title: "Layer Labels and Rules",
                        text: "Labels add text descriptions directly on the map. QGIS provides a sophisticated labeling system that prevents text overlaps. You can configure labels to display values from any attribute column and set maximum scale visibilities.",
                        visual: "<strong>Configuring Labels:</strong><br>1. In Layer Properties, open the <strong>Labels</strong> tab.<br>2. Set dropdown to <strong>Single Labels</strong>.<br>3. In the 'Value' dropdown, select the field (e.g., 'NAME').<br>4. Adjust font size, add a <strong>Buffer</strong> (halo text) to make labels readable against complex backgrounds.",
                        download: null
                    },
                    // Module 4
                    {
                        module: "Module 4",
                        moduleTitle: "Attribute Tables & Spatial Queries",
                        title: "Working with Attribute Tables",
                        text: "Behind every vector feature is a database record. The Attribute Table stores attribute columns (fields) and rows (features). In QGIS, you can open the table to edit, sort, and inspect these non-spatial parameters.",
                        visual: "<strong>Attribute Table Controls:</strong><br>• Right-click layer -> <strong>Open Attribute Table</strong>.<br>• Toggle <strong>Editing Mode</strong> (pencil icon) to modify values directly.<br>• Open the <strong>Field Calculator</strong> to calculate new columns using mathematical expressions.",
                        download: null
                    },
                    {
                        module: "Module 4",
                        moduleTitle: "Attribute Tables & Spatial Queries",
                        title: "The Field Calculator and Geometry Functions",
                        text: "The Field Calculator is one of the most powerful tools in QGIS. It allows you to compute fields based on other columns or geographic properties, such as calculating the area of polygons or the length of lines in metric units.",
                        visual: "<strong>Calculating Area in Hectares:</strong><br>1. Open Field Calculator.<br>2. Check 'Create a new field'. Name it <code>area_ha</code> (Decimal number).<br>3. Write the geometry expression: <code>$area / 10000</code><br>4. Click OK. (Note: geometry functions like <code>$area</code> calculate results in the unit of the layer's Projected CRS).",
                        download: null
                    },
                    {
                        module: "Module 4",
                        moduleTitle: "Attribute Tables & Spatial Queries",
                        title: "Query Builder and Select by Expression",
                        text: "To filter data, you can write mathematical expressions. For example, selecting cities with a population greater than 500,000 or filtering counties within a specific state. QGIS features a 'Select by Expression' dialog to query features dynamically.",
                        visual: "<strong>Sample Query Expressions:</strong><br>• Filter population: <code>\"pop_est\" > 500000</code><br>• Filter by string: <code>\"state_name\" = 'California'</code><br>• Combine queries: <code>\"elevation\" > 1000 AND \"type\" = 'Volcano'</code>",
                        download: null
                    },
                    // Module 5
                    {
                        module: "Module 5",
                        moduleTitle: "Print Layout & Exporting Maps",
                        title: "Creating a Print Layout",
                        text: "To export a professional map, you must use the Print Layout. It opens a canvas separate from the main workspace where you can arrange maps, scale bars, north arrows, legends, titles, and logos for publication.",
                        visual: "<strong>Opening Print Layout:</strong><br>1. Go to <strong>Project -> New Print Layout...</strong><br>2. Give it a title (e.g., 'Alaska Map').<br>3. Use the <strong>Add Map</strong> tool in the sidebar to draw a bounding rectangle on the layout canvas where your QGIS layer will be rendered.",
                        download: null
                    },
                    {
                        module: "Module 5",
                        moduleTitle: "Print Layout & Exporting Maps",
                        title: "Adding Cartographic Elements",
                        text: "Every map requires essential components: a Legend (explaining the colors), a Scale Bar (showing distance ratios), a North Arrow (orientation), and a Title. These elements can be styled and configured inside the Item Properties panel of your print layout.",
                        visual: "<strong>Item Properties Adjustments:</strong><br>• <strong>Legend:</strong> Uncheck 'Auto update' to manually edit and rename layer titles.<br>• <strong>Scale Bar:</strong> Set units to Kilometers/Miles and configure segment divisions.<br>• <strong>Grid:</strong> Add coordinates lines (graticules) to map borders.",
                        download: null
                    },
                    {
                        module: "Module 5",
                        moduleTitle: "Print Layout & Exporting Maps",
                        title: "Exporting Your Final Map",
                        text: "Once your layout is fully configured, QGIS allows you to export your cartographic output as a high-resolution print PDF, SVG vector file, or standard image format (PNG, JPEG). Typically, 300 DPI is the standard resolution for print publications.",
                        visual: "<strong>Export Options:</strong><br>• <strong>Export as Image:</strong> Click the Image icon. Set resolution (DPI) to 300.<br>• <strong>Export as PDF:</strong> Click the PDF icon. Enable options like 'Vector export' to keep labels crisp.<br>• Save the outputs to your workspace directories.",
                        download: null
                    }
                ],
                flashcards: [
                    { q: "What is the difference between Vector and Raster data?", a: "Vector data uses coordinates (points, lines, polygons) to represent discrete objects with attributes. Raster data uses grid cells (pixels) to represent continuous values like elevation or temperature." },
                    { q: "Why is a Coordinate Reference System (CRS) critical?", a: "A CRS projects the Earth's 3D surface onto a 2D flat map. Choosing the wrong CRS leads to distorted shapes, incorrect distances, and invalid area calculations." },
                    { q: "What EPSG code represents the global WGS 84 geographic CRS?", a: "EPSG:4326 is the standard code for WGS 84 geographic coordinates, which uses degrees for latitude and longitude." },
                    { q: "How do you calculate area in the Field Calculator?", a: "Create a decimal field and write the geometry expression '$area'. If you need hectares, divide by 10,000 ('$area / 10000'). Make sure the layer CRS is projected." },
                    { q: "Which tool in QGIS is used to export high-quality final maps?", a: "The Print Layout (Project -> New Print Layout) is used to compose maps, legends, scale bars, and export them as PDFs or images." }
                ],
                quiz: [
                    { q: "What is QGIS?", o: ["A proprietary database software", "A free and open-source Desktop GIS application", "A web browser extension for Google Maps", "An operating system for spatial databases"], a: 1 },
                    { q: "Which data type is composed of grid cells or pixels?", o: ["Vector", "Shapefile", "Raster", "Attribute Table"], a: 2 },
                    { q: "What does CRS stand for in Geographic Information Systems?", o: ["Coordinate Reference System", "Cartographic Rendering Scale", "Central Raster Structure", "Calculation Reference System"], a: 0 },
                    { q: "Which EPSG code is used for WGS 84 Web Mercator projection?", o: ["EPSG:4326", "EPSG:3857", "EPSG:32644", "EPSG:4240"], a: 1 },
                    { q: "If you need to change a layer's projection permanently, you must:", o: ["Double click layer and change it in properties without saving", "Reproject using the 'Save Features As...' export function", "Rename the shapefile manually in file browser", "Change the QGIS project background theme"], a: 1 },
                    { q: "Which styling method would you use to color a land-use layer containing classes like Forest, Water, and Urban?", o: ["Single Symbol", "Categorized", "Graduated", "Rule-based only"], a: 1 },
                    { q: "In the Field Calculator, what does the expression '$area / 10000' compute?", o: ["Area in square meters", "Area in hectares", "Area in square kilometers", "Perimeter in kilometers"], a: 1 },
                    { q: "To filter city features with populations exceeding 1,000,000, you would write:", o: ["\"population\" < 1000000", "\"population\" = 1000000", "\"population\" > 1000000", "\"population\" matches 1000000"], a: 2 },
                    { q: "Where in QGIS do you compose and add map elements like legends, titles, and scale bars?", o: ["Layer panel", "Browser panel", "Print Layout editor", "Processing toolbox"], a: 2 },
                    { q: "What is the recommended resolution (DPI) when exporting maps for print publications?", o: ["72 DPI", "150 DPI", "300 DPI", "1200 DPI"], a: 2 }
                ]
            },
            si: {
                title: "QGIS මූලධර්ම: සම්පූර්ණ ආධුනික මාර්ගෝපදේශය",
                agreement: "මා විසින් මෙම පාඨමාලා අන්තර්ගතය ඉෂාර තේෂාන්ගේ පූර්ණ අවසරයකින් තොරව පිටපත් කිරීම, නැවත බෙදාහැරීම හෝ නැවත ප්‍රකාශයට පත් නොකරන බවට එකඟ වෙමි.",
                outcomesTitle: "පාඨමාලා ඉගෙනුම් ප්‍රතිඵල",
                curriculumTitle: "පාඨමාලා විෂය නිර්දේශය (මොඩියුල 5)",
                careersTitle: "පවතින අවස්ථා සහ වෘත්තීන්",
                tabs: {
                    outcomes: `
                        <h4>පාඨමාලා ඉගෙනුම් ප්‍රතිඵල</h4>
                        <ul>
                            <li>GIS හි මූලික කරුණු, vector සහ raster දත්ත වර්ග තේරුම් ගැනීම.</li>
                            <li>QGIS අතුරු මුහුණත පහසුවෙන් හැසිරවීම සහ පැනල සකස් කිරීම.</li>
                            <li>ඛණ්ඩාංක පද්ධති (CRS) තේරුම් ගැනීම සහ වැරදි නිරූපණ ගැටළු මඟහරවා ගැනීම.</li>
                            <li>සරල, වර්ගීකරණය කළ (Categorized) සහ ශ්‍රේණිගත (Graduated) සංකේත භාවිතයෙන් දෛශික ස්ථර හැඩතල ගැන්වීම.</li>
                            <li>ආරෝපණ වගු (Attribute Tables) සමඟ වැඩ කිරීම, නව තීරු එකතු කිරීම සහ ගණනය කිරීම් සිදු කිරීම.</li>
                            <li>නිශ්චිත දත්ත ලබා ගැනීම සඳහා SQL වැනි විමසුම් සහ අවකාශීය තේරීම් සිදු කිරීම.</li>
                            <li>සූචි, පරිමාණ තීරු සහ උතුරු ඊතල සහිත වෘත්තීය මට්ටමේ මුද්‍රණ සැලසුම් (Print Layout) නිර්මාණය කිරීම.</li>
                        </ul>
                    `,
                    curriculum: `
                        <h4>පාඨමාලා විෂය නිර්දේශය</h4>
                        <ul>
                            <li><strong>මොඩියුලය 1:</strong> QGIS හඳුන්වාදීම සහ GIS මූලික කරුණු (ස්ලයිඩ 3)</li>
                            <li><strong>මොඩියුලය 2:</strong> අවකාශීය දත්ත මූලාශ්‍ර සහ ඛණ්ඩාංක පද්ධති (CRS) (ස්ලයිඩ 3)</li>
                            <li><strong>මොඩියුලය 3:</strong> සිතියම් දෘශ්‍යකරණය සහ වර්ණ ගැන්වීම් (ස්ලයිඩ 3)</li>
                            <li><strong>මොඩියුලය 4:</strong> ආරෝපණ වගු සහ අවකාශීය විමසුම් (ස්ලයිඩ 3)</li>
                            <li><strong>මොඩියුලය 5:</strong> මුද්‍රණ සැලසුම් නිර්මාණය සහ සිතියම් අපනයනය (ස්ලයිඩ 3)</li>
                        </ul>
                    `,
                    careers: `
                        <h4>පවතින අවස්ථා සහ වෘත්තීන්</h4>
                        <p>මෙම පාඨමාලාව සම්පූර්ණ කිරීමෙන් ඔබට පහත සඳහන් ක්ෂේත්‍රයන්හි රැකියා සඳහා ශක්තිමත් පදනමක් ලැබේ:</p>
                        <ul>
                            <li><strong>GIS තාක්ෂණවේදී / විශේෂඥ:</strong> සිතියම් දත්ත කළමනාකරණය සහ වෙබ් සිතියම් නිර්මාණය.</li>
                            <li><strong>පරිසර උපදේශක:</strong> භූමි ප්‍රදේශ සහ යෝග්‍යතා ආකෘති නිර්මාණය.</li>
                            <li><strong>නාගරික සැලසුම්කරු:</strong> සේවා ප්‍රවේශය, කලාපකරණය සහ ප්‍රවාහන මාර්ග විශ්ලේෂණය.</li>
                            <li><strong>පර්යේෂණ සහකරු:</strong> අවකාශීය දෘශ්‍යකරණයන් සමඟ ශාස්ත්‍රීය අධ්‍යයන සඳහා සහාය වීම.</li>
                        </ul>
                    `
                },
                slides: [
                    // Module 1
                    {
                        module: "මොඩියුලය 1",
                        moduleTitle: "QGIS හඳුන්වාදීම සහ GIS මූලික කරුණු",
                        title: "GIS සහ QGIS යනු කුමක්ද?",
                        text: "භූගෝලීය තොරතුරු පද්ධති (GIS) මඟින් අවකාශීය හෝ භූගෝලීය දත්ත ග්‍රහණය කර ගැනීම, ගබඩා කිරීම, විශ්ලේෂණය කිරීම සහ ඉදිරිපත් කිරීම සිදු කරයි. QGIS යනු ප්‍රමුඛ පෙළේ, නොමිලේ ලබාදෙන සහ විවෘත කේත ඩෙස්ක්ටොප් GIS මෘදුකාංගයකි. එය මඟින් සිතියම් නිර්මාණය කිරීමට, විශ්ලේෂණය කිරීමට සහ අවකාශීය දත්ත සමුදායන් කළමනාකරණය කිරීමට හැකියාව ලැබේ.",
                        visual: "<strong>ප්‍රධාන QGIS හැකියාවන්:</strong><br>• Vector (ලක්ෂ්‍ය, රේඛා, බහුඅස්‍ර) සහ Raster (පික්සෙල් ජාල, චන්ද්‍රිකා රූප) දත්ත සඳහා පූර්ණ සහාය දැක්වීම.<br>• GRASS GIS, SAGA, සහ GDAL මෙවලම් පෙට්ටි සමඟ ඒකාබද්ධ වීම.<br>• ප්‍රජාව විසින් සංවර්ධනය කරන ලද ප්ලගීන (Plugins) දහස් ගණනක් මඟින් ක්‍රියාකාරීත්වය පුළුල් කිරීමේ शक्यता.",
                        download: null
                    },
                    {
                        module: "මොඩියුලය 1",
                        moduleTitle: "QGIS හඳුන්වාදීම සහ GIS මූලික කරුණු",
                        title: "QGIS ස්ථාපනය සහ අතුරු මුහුණත හැඳින්වීම",
                        text: "ආරම්භ කිරීමට, ඔබගේ පරිගණකයේ QGIS ස්ථාපනය කර ගන්න. QGIS අතුරු මුහුණත ඉතා පහසුවෙන් සකස් කර ගත හැකි අතර එය ප්‍රධාන කොටස් කිහිපයකින් සමන්විත වේ: Map Canvas (සිතියම ඇඳෙන ප්‍රදේශය), Layers List (දත්ත ස්ථර පෙන්වන ලැයිස්තුව), Browser Panel (ගොනු සෙවීම සඳහා), සහ Toolbars (මෙවලම් තීරු).",
                        visual: "<strong>ප්‍රධාන කෙටිමං:</strong><br>• <code>Ctrl + Shift + V</code>: Vector ස්ථරයක් එකතු කිරීම<br>• <code>Ctrl + Shift + R</code>: Raster ස්ථරයක් එකතු කිරීම<br>• <code>Ctrl + Alt + T</code>: මෙවලම් පෙට්ටිය (Toolbox) විවෘත කිරීම<br>• භාෂාව සහ තේමාවන් වෙනස් කිරීමට <strong>Settings -> Options</strong> වෙත යන්න.",
                        download: null
                    },
                    {
                        module: "මොඩියුලය 1",
                        moduleTitle: "QGIS හඳුන්වාදීම සහ GIS මූලික කරුණු",
                        title: "පළමු දෛශික (Vector) ස්ථරය ඇතුලත් කිරීම",
                        text: "දෛශික දත්ත ඛණ්ඩාංක ලෙස ගබඩා වේ. ලක්ෂ්‍ය (Points) මඟින් නිශ්චිත ස්ථාන (උදා. නගර), රේඛා (Lines) මඟින් දිගටි වස්තූන් (උදා. ගංගා), සහ බහුඅස්‍ර (Polygons) මඟින් සීමා සහිත ප්‍රදේශ (උදා. රටවල්) නිරූපණය වේ. අපි ඇලස්කාව නිරූපණය කරන නියැදි දෛශික දත්ත කට්ටලයක් ඇතුලත් කරමු.",
                        visual: "<strong>ප්‍රායෝගික පියවර:</strong><br>1. පහත සබැඳියෙන් ඇලස්කා දත්ත කට්ටලය බාගත කරන්න.<br>2. ZIP ගොනුව දිග හරින්න (Extract).<br>3. QGIS හි, shapefile (.shp) ගොනුව Map Canvas එකට drag කරන්න, නැතහොත් <strong>Layer -> Add Layer -> Add Vector Layer</strong> වෙත යන්න.",
                        download: {
                            text: "ඇලස්කා නියැදි දත්ත කට්ටලය බාගන්න (ZIP, 3.2 MB)",
                            url: "http://download.osgeo.org/qgis/data/qgis_sample_data.zip"
                        }
                    },
                    // Module 2
                    {
                        module: "මොඩියුලය 2",
                        moduleTitle: "අවකාශීය දත්ත මූලාශ්‍ර සහ CRS",
                        title: "Vector සහ Raster දත්ත හඳුනාගැනීම",
                        text: "GIS දත්ත ප්‍රධාන වශයෙන් Vector (තොරතුරු ගබඩා කර ඇති ලක්ෂ්‍ය, රේඛා හෝ බහුඅස්‍ර) සහ Raster (උෂ්ණත්වය හෝ උන්නතාංශය වැනි අඛණ්ඩ අගයන් නිරූපණය කරන පික්සෙල් ජාල) ලෙස වර්ග කෙරේ. නිවැරදි දත්ත වර්ගය තේරීම විශ්ලේෂණය සඳහා අතිශය වැදගත් වේ.",
                        visual: "<strong>දත්ත ආකෘති සංසන්දනය:</strong><br>• <strong>Vector:</strong> ESRI Shapefiles (.shp), GeoPackage (.gpkg), GeoJSON (.geojson). පරිපාලන සීමාවන් සඳහා සුදුසුය.<br>• <strong>Raster:</strong> GeoTIFF (.tif), ASCII Grids. ඩිජිටල් උන්නතාංශ ආකෘති (DEM) සහ චන්ද්‍රිකා ඡායාරූප සඳහා සුදුසුය.",
                        download: null
                    },
                    {
                        module: "මොඩියුලය 2",
                        moduleTitle: "අවකාශීය දත්ත මූලාශ්‍ර සහ CRS",
                        title: "ඛණ්ඩාංක පද්ධති (Coordinate Reference Systems - CRS)",
                        text: "පෘථිවිය ත්‍රිමාණ ඉලිප්සයිඩයක් වන නමුත් සිතියම් ද්විමාන තල වේ. ඛණ්ඩාංක පද්ධතියක් (CRS) මඟින් ත්‍රිමාණ පෘථිවිය ද්විමාන තලයකට නිරූපණය කරන ආකාරය අර්ථ දක්වයි. වැරදි CRS සැකසුම් නිසා දුර සහ වර්ගඵල මැනීමේදී වැරදි අගයන් ලැබිය හැකිය.",
                        visual: "<strong>මතක තබා ගත යුතු ප්‍රධාන EPSG කේත:</strong><br>• <strong>EPSG:4326:</strong> WGS 84 - GPS සහ වෙබ් සිතියම්කරණයේදී බහුලව භාවිත වේ.<br>• <strong>EPSG:3857:</strong> Web Mercator - Google Maps සහ OpenStreetMap මඟින් භාවිත වේ.<br>• ව්‍යාපෘතියේ CRS අගය QGIS හි පහළ දකුණු කෙළවරේ දක්වා ඇත.",
                        download: null
                    },
                    {
                        module: "මොඩියුලය 2",
                        moduleTitle: "අවකාශීය දත්ත මූලාශ්‍ර සහ CRS",
                        title: "QGIS හි දත්ත ස්ථරවල CRS වෙනස් කිරීම (Reprojecting)",
                        text: "QGIS මඟින් විවිධ CRS සහිත දත්ත එකවර පෙන්විය හැකි වුවද, බෆර (Buffering) හෝ ඡේදනය (Intersection) වැනි විශ්ලේෂණ වලදී සියලු දත්ත එකම CRS පද්ධතියක තිබීම අනිවාර්ය වේ. ස්ථරයක CRS එක ස්ථිරවම වෙනස් කිරීමට එය අපනයනය (Export) කළ යුතුය.",
                        visual: "<strong>CRS වෙනස් කරන ආකාරය:</strong><br>1. Layers panel හි අදාළ ස්ථරය මත Right-click කරන්න.<br>2. <strong>Export -> Save Features As...</strong> තෝරන්න.<br>3. <strong>GeoPackage</strong> ආකෘතිය තෝරන්න.<br>4. <strong>CRS</strong> යටතේ අවශ්‍ය Projected CRS එක (උදා. UTM zone) තෝරන්න.<br>5. OK ක්ලික් කර සුරකින්න.",
                        download: null
                    },
                    // Module 3
                    {
                        module: "මොඩියුලය 3",
                        moduleTitle: "සිතියම් දෘශ්‍යකරණය සහ වර්ණ ගැන්වීම්",
                        title: "සංකේත (Symbology) සහ ස්ථර ගුණාංග",
                        text: "සංකේත මඟින් සිතියමේ දත්ත දෘශ්‍යමාන වන ආකාරය තීරණය වේ. Layer Properties හිදී ඔබට වර්ණය, මායිම්, විනිවිදභාවය සහ සංකේත සකස් කළ හැකිය. ප්‍රධාන ක්‍රම ලෙස Single Symbol (සියලු දත්ත එකම වර්ණයෙන්) සහ Categorized (නිශ්චිත ගුණාංග මත පදනම්ව වර්ණ ගැන්වීම) හැඳින්විය හැකිය.",
                        visual: "<strong>වර්ගීකරණ සංකේත භාවිතය (Categorized Symbology):</strong><br>1. Layer Properties විවෘත කිරීමට ස්ථරය මත Double-click කරන්න.<br>2. <strong>Symbology</strong> ටැබය වෙත යන්න.<br>3. ඉහළින්ම ඇති 'Single Symbol' යන්න <strong>'Categorized'</strong> ලෙස වෙනස් කරන්න.<br>4. වර්ණ ගැන්වීමට අවශ්‍ය තීරුව 'Value' සඳහා තෝරන්න.<br>5. වර්ණ ජනනය කිරීමට <strong>Classify</strong> ක්ලික් කරන්න.",
                        download: null
                    },
                    {
                        module: "මොඩියුලය 3",
                        moduleTitle: "සිතියම් දෘශ්‍යකරණය සහ වර්ණ ගැන්වීම්",
                        title: "අඛණ්ඩ දත්ත සඳහා ශ්‍රේණිගත සංකේත (Graduated Symbology)",
                        text: "ජනගහන ඝනත්වය, උන්නතාංශය හෝ උෂ්ණත්වය වැනි සංඛ්‍යාත්මක අඛණ්ඩ දත්ත පෙන්වීමට ශ්‍රේණිගත සංකේත (Graduated Symbology) භාවිත වේ. මෙහිදී දත්ත විවිධ පන්තිවලට (Classes) බෙදා දක්වනු ලැබේ.",
                        visual: "<strong>ප්‍රයෝජනවත් උපදෙස්:</strong><br>• දත්ත විසිරීම වැඩි නම් <strong>Natural Breaks (Jenks)</strong> ක්‍රමය තෝරන්න.<br>• සිතියම කියවීමට පහසු වීම සඳහා පන්ති 5 ත් 7 ත් අතර ප්‍රමාණයක් තබා ගන්න.<br>• වර්ණ අන්ධ අයටද හඳුනාගත හැකි වර්ණ රටාවන් (Color Ramps) තෝරන්න (උදා. Viridis).",
                        download: null
                    },
                    {
                        module: "මොඩියුලය 3",
                        moduleTitle: "සිතියම් දෘශ්‍යකරණය සහ වර්ණ ගැන්වීම්",
                        title: "ලේබල් (Labels) එකතු කිරීම සහ රීති",
                        text: "ලේබල් මඟින් සිතියමේ වස්තූන් අසල අදාළ නම හෝ අගය පෙළ (Text) ලෙස පෙන්වයි. QGIS හි ඇති labeling පද්ධතිය මඟින් ලේබල් එකිනෙක මත වැටීම වළක්වයි. ඔබට ඕනෑම දත්ත තීරුවකින් ලේබල් අගයන් තෝරාගත හැකිය.",
                        visual: "<strong>ලේබල් සැකසීමේ පියවර:</strong><br>1. Layer Properties හි <strong>Labels</strong> ටැබය විවෘත කරන්න.<br>2. එය <strong>Single Labels</strong> ලෙස වෙනස් කරන්න.<br>3. 'Value' සඳහා ලේබල් කිරීමට අවශ්‍ය තීරුව (උදා. 'NAME') තෝරන්න.<br>4. පසුබිමට වඩා පැහැදිලිව පෙනීම සඳහා ලේබලයට <strong>Buffer</strong> එකක් එක් කරන්න.",
                        download: null
                    },
                    // Module 4
                    {
                        module: "මොඩියුලය 4",
                        moduleTitle: "ආරෝපණ වගු සහ අවකාශීය විමසුම්",
                        title: "ආරෝපණ වගුව (Attribute Table) හැඳින්වීම",
                        text: "සෑම දෛශික දත්ත ස්ථරයක් පිටුපසම දත්ත සමුදායක් පවතී. ආරෝපණ වගුවේ තීරු (Fields) සහ පේළි (Features) ලෙස දත්ත ගබඩා වේ. QGIS හිදී ඔබට මෙම වගුව විවෘත කර දත්ත සංස්කරණය කිරීමට සහ පරීක්ෂා කිරීමට හැකිය.",
                        visual: "<strong>ආරෝපණ වගු පාලනය:</strong><br>• ස්ථරය මත Right-click -> <strong>Open Attribute Table</strong>.<br>• දත්ත සංස්කරණය කිරීමට <strong>Toggle Editing Mode</strong> (පැන්සල් ලකුණ) ක්ලික් කරන්න.<br>• නව තීරු සහ ගණනය කිරීම් සඳහා <strong>Field Calculator</strong> විවෘත කරන්න.",
                        download: null
                    },
                    {
                        module: "මොඩියුලය 4",
                        moduleTitle: "ආරෝපණ වගු සහ අවකාශීය විමසුම්",
                        title: "Field Calculator සහ ජ්‍යාමිතික ශ්‍රිත (Geometry Functions)",
                        text: "Field Calculator මඟින් ගණිතමය සමීකරණ හෝ ජ්‍යාමිතික ලක්ෂණ මත පදනම්ව නව තීරු සෑදීමට හැකියාව ලැබේ. උදාහරණයක් ලෙස බහුඅස්‍රවල වර්ගඵලය හෝ මායිම්වල දිග මීටර් හෝ හෙක්ටයාර වලින් ගණනය කිරීම දැක්විය හැකිය.",
                        visual: "<strong>හෙක්ටයාර වලින් වර්ගඵලය සෙවීම:</strong><br>1. Field Calculator විවෘත කරන්න.<br>2. 'Create a new field' තෝරා, නම <code>area_ha</code> ලෙස දෙන්න (Decimal number).<br>3. සමීකරණය ලියන්න: <code>$area / 10000</code><br>4. OK ක්ලික් කරන්න. (සටහන: <code>$area</code> ශ්‍රිතය මඟින් වර්ගඵලය සොයනු ලබන්නේ එම ස්ථරයේ CRS එකෙහි ඇති ඒකකයෙනි).",
                        download: null
                    },
                    {
                        module: "මොඩියුලය 4",
                        moduleTitle: "ආරෝපණ වගු සහ අවකාශීය විමසුම්",
                        title: "Query Builder සහ ප්‍රකාශන මඟින් තේරීම් කිරීම",
                        text: "දත්ත පෙරීමට (Filter) ගණිතමය ප්‍රකාශන ලිවිය හැකිය. උදාහරණයක් ලෙස ජනගහනය 500,000 ට වැඩි නගර සෙවීම හෝ කිසියම් ප්‍රාන්තයක ඇති දිස්ත්‍රික්ක පමණක් පෙරීම දැක්විය හැකිය. මේ සඳහා 'Select by Expression' භාවිත වේ.",
                        visual: "<strong>නියැදි ප්‍රකාශන (Sample Expressions):</strong><br>• ජනගහනය පෙරීමට: <code>\"pop_est\" > 500000</code><br>• අකුරු මඟින් පෙරීමට: <code>\"state_name\" = 'California'</code><br>• කොන්දේසි කිහිපයක් එක් කිරීමට: <code>\"elevation\" > 1000 AND \"type\" = 'Volcano'</code>",
                        download: null
                    },
                    // Module 5
                    {
                        module: "මොඩියුලය 5",
                        moduleTitle: "මුද්‍රණ සැලසුම් නිර්මාණය සහ සිතියම් අපනයනය",
                        title: "මුද්‍රණ සැලසුම් කවුළුව (Print Layout) විවෘත කිරීම",
                        text: "නිර්මාණය කළ සිතියම වෘත්තීය මට්ටමෙන් අපනයනය කිරීමට Print Layout භාවිත කරයි. මෙහිදී සිතියම්, පරිමාණ තීරු, උතුරු ඊතල, සූචි සහ මාතෘකා වෙන වෙනම සකසා මුද්‍රණය සඳහා සකස් කළ හැකිය.",
                        visual: "<strong>මුද්‍රණ සැලසුමක් ඇරඹීම:</strong><br>1. <strong>Project -> New Print Layout...</strong> වෙත යන්න.<br>2. මාතෘකාවක් දෙන්න (උදා. 'Alaska Map').<br>3. පැති තීරුවේ ඇති <strong>Add Map</strong> මෙවලම භාවිතයෙන් මුද්‍රණ තලයේ සෘජුකෝණාස්‍රයක් ඇඳ සිතියම එක් කරන්න.",
                        download: null
                    },
                    {
                        module: "මොඩියුලය 5",
                        moduleTitle: "මුද්‍රණ සැලසුම් නිර්මාණය සහ සිතියම් අපනයනය",
                        title: "සිතියම් අංග (Cartographic Elements) එකතු කිරීම",
                        text: "ඕනෑම සිතියමක ප්‍රධාන අංග තිබිය යුතුය: Legend (වර්ණ පැහැදිලි කිරීම), Scale Bar (දුර ප්‍රමාණය පෙන්වීමට), North Arrow (දිශාව), සහ Title (මාතෘකාව). මේවා Print Layout හි Item Properties මඟින් සැකසිය හැකිය.",
                        visual: "<strong>සිතියම් අංග සැකසීම:</strong><br>• <strong>Legend:</strong> අනවශ්‍ය ස්ථර ඉවත් කිරීමට 'Auto update' අක්‍රිය කරන්න.<br>• <strong>Scale Bar:</strong> ඒකකය කිලෝමීටර් (Kilometers) ලෙස සකසා කොටස් (Segments) ප්‍රමාණය තීරණය කරන්න.<br>• <strong>Grid:</strong> සිතියම් මායිම්වල අක්ෂාංශ/දේශාංශ රේඛා එක් කිරීමට Grid භාවිත කරන්න.",
                        download: null
                    },
                    {
                        module: "මොඩියුලය 5",
                        moduleTitle: "මොඩියුල 5: මුද්‍රණ සැලසුම් නිර්මාණය සහ සිතියම් අපනයනය",
                        title: "අවසන් සිතියම අපනයනය කිරීම (Exporting)",
                        text: "සියල්ල නිවැරදිව සැකසූ පසු, සිතියම උසස් තත්ත්වයේ PDF, SVG දෛශික ගොනුවක් හෝ සාමාන්‍ය රූපයක් (PNG, JPEG) ලෙස අපනයනය කළ හැකිය. මුද්‍රණ කටයුතු සඳහා 300 DPI ධාරිතාවය නිර්දේශ කෙරේ.",
                        visual: "<strong>අපනයන විකල්ප:</strong><br>• <strong>රූපයක් ලෙස (Image):</strong> Export as Image ක්ලික් කර DPI අගය 300 ලෙස දෙන්න.<br>• <strong>PDF ගොනුවක් ලෙස:</strong> Export as PDF ක්ලික් කර සුරකින්න.<br>• ඔබගේ පරිගණකයේ අවශ්‍ය තැනක ගොනුව සුරකින්න.",
                        download: null
                    }
                ],
                flashcards: [
                    { q: "Vector සහ Raster දත්ත අතර වෙනස කුමක්ද?", a: "Vector දත්ත ලක්ෂ්‍ය, රේඛා, බහුඅස්‍ර ලෙස දත්ත ගබඩා කරන අතර Raster දත්ත පික්සෙල් ජාල (පික්සෙල්) ලෙස අඛණ්ඩ අගයන් ගබඩා කරයි." },
                    { q: "ඛණ්ඩාංක පද්ධතියක් (CRS) වැදගත් වන්නේ ඇයි?", a: "ත්‍රිමාණ පෘථිවිය ද්විමාන තලයකට හැරවීමේදී සිදුවන හැඩය, දුර සහ වර්ගඵල විකෘති වීම් වළක්වා ගැනීමට නිවැරදි CRS පද්ධතියක් අවශ්‍ය වේ." },
                    { q: "WGS 84 භූගෝලීය CRS එක නියෝජනය කරන EPSG කේතය කුමක්ද?", a: "EPSG:4326 යනු GPS සහ පොදු භූගෝලීය ඛණ්ඩාංක සඳහා භාවිත වන සම්මත EPSG කේතයයි." },
                    { q: "Field Calculator මඟින් වර්ගඵලය හෙක්ටයාර වලින් සොයන්නේ කෙසේද?", a: "decimal වර්ගයේ තීරුවක් සාදා <code>$area / 10000</code> යන සමීකරණය ලියන්න. ස්ථරය Projected CRS එකක තිබීම අනිවාර්ය වේ." },
                    { q: "උසස් තත්ත්වයේ සිතියම් අපනයනය කිරීමට QGIS හි ඇති මෙවලම කුමක්ද?", a: "Print Layout (Project -> New Print Layout) මෙවලම භාවිතයෙන් සිතියම්, පරිමාණ තීරු සහ සූචි සකසා අපනයනය කළ හැකිය." }
                ],
                quiz: [
                    { q: "QGIS යනු කුමක්ද?", o: ["භාවිතයට ගෙවිය යුතු දත්ත සමුදා මෘදුකාංගයකි", "නොමිලේ ලැබෙන විවෘත කේත ඩෙස්ක්ටොප් GIS මෘදුකාංගයකි", "Google Maps සඳහා වන බ්‍රවුසර් දිගුවකි", "අවකාශීය දත්ත සඳහා වන මෙහෙයුම් පද්ධතියකි"], a: 1 },
                    { q: "පික්සෙල් ජාල හෝ කොටු වලින් සමන්විත දත්ත වර්ගය කුමක්ද?", o: ["Vector", "Shapefile", "Raster", "Attribute Table"], a: 2 },
                    { q: "GIS හි CRS යන්නෙහි තේරුම කුමක්ද?", o: ["Coordinate Reference System (ඛණ්ඩාංක පද්ධතිය)", "Cartographic Rendering Scale", "Central Raster Structure", "Calculation Reference System"], a: 0 },
                    { q: "WGS 84 Web Mercator නිරූපණය සඳහා භාවිත වන EPSG කේතය කුමක්ද?", o: ["EPSG:4326", "EPSG:3857", "EPSG:32644", "EPSG:4240"], a: 1 },
                    { q: "ස්ථරයක (Layer) ඛණ්ඩාංක පද්ධතිය ස්ථිරවම වෙනස් කිරීමට ඔබ කළ යුත්තේ:", o: ["ස්ථරයේ properties වෙනස් කර සේව් නොකර වැසීම", "'Save Features As...' අපනයන මෙවලම මඟින් reproject කිරීම", "පරිගණකයේ ඇති shapefile එකෙහි නම අතින් වෙනස් කිරීම", "QGIS පසුබිම් වර්ණය වෙනස් කිරීම"], a: 1 },
                    { q: "Forest, Water, සහ Urban වැනි විවිධ පන්ති සහිත භූමි පරිහරණ ස්ථරයක් වර්ණ ගැන්වීමට සුදුසුම ක්‍රමය කුමක්ද?", o: ["Single Symbol", "Categorized (වර්ගීකරණය)", "Graduated (ශ්‍රේණිගත)", "Rule-based only"], a: 1 },
                    { q: "Field Calculator හි <code>$area / 10000</code> යන ප්‍රකාශනයෙන් ලැබෙන්නේ කුමක්ද?", o: ["වර්ග මීටර් වලින් වර්ගඵලය", "හෙක්ටයාර වලින් වර්ගඵලය", "වර්ග කිලෝමීටර් වලින් වර්ගඵලය", "පරිමිතිය කිලෝමීටර් වලින්"], a: 1 },
                    { q: "ජනගහනය 1,000,000 ට වැඩි නගර පෙරීමට ඔබ ලියන ප්‍රකාශනය කුමක්ද?", o: ["\"population\" < 1000000", "\"population\" = 1000000", "\"population\" > 1000000", "\"population\" matches 1000000"], a: 2 },
                    { q: "QGIS හි සූචි, මාතෘකා සහ පරිමාණ තීරු වැනි සිතියම් අංග එක් කරන්නේ කොතැනින්ද?", o: ["Layer panel", "Browser panel", "Print Layout (මුද්‍රණ සැලසුම් කවුළුව)", "Processing toolbox"], a: 2 },
                    { q: "මුද්‍රණය සඳහා සිතියම් අපනයනය කිරීමේදී නිර්දේශිත ධාරිතාවය (DPI) කුමක්ද?", o: ["72 DPI", "150 DPI", "300 DPI", "1200 DPI"], a: 2 }
                ]
            }
        };

        // DOM ELEMENTS REFERENCE
        const landingPanel = document.getElementById('lms-landing-panel');
        const workspacePanel = document.getElementById('lms-workspace-panel');
        const tabContentArea = document.getElementById('tab-content-area');
        const agreementCheck = document.getElementById('lms-agreement-check');
        const agreementText = document.getElementById('lms-agreement-text');
        const btnSubmitEnroll = document.getElementById('btn-submit-enroll');
        const btnShowSignup = document.getElementById('btn-show-signup');
        const btnShowLogin = document.getElementById('btn-show-login');
        const signupForm = document.getElementById('signup-payment-form');
        const loginForm = document.getElementById('login-form');
        const btnSubmitLogin = document.getElementById('btn-submit-login');
        
        // Forms inputs
        const regName = document.getElementById('lms-reg-name');
        const regEmail = document.getElementById('lms-reg-email');
        const regPassword = document.getElementById('lms-reg-password');
        const loginEmail = document.getElementById('lms-login-email');
        const loginPassword = document.getElementById('lms-login-password');

        // Workspace elements
        const userDisplayName = document.getElementById('user-display-name');
        const workspaceLangDisplay = document.getElementById('workspace-lang-display');
        const workspacePercentDisplay = document.getElementById('workspace-percent-display');
        const studyTimer = document.getElementById('study-timer');
        const btnLogoutLms = document.getElementById('btn-logout-lms');

        // Player elements
        const playerModuleNum = document.getElementById('player-module-num');
        const playerModuleTitle = document.getElementById('player-module-title');
        const playerProgressBar = document.getElementById('player-progress-bar');
        const playerSlideCounter = document.getElementById('player-slide-counter');
        const slideContentArea = document.getElementById('slide-content-area');
        const btnPrevSlide = document.getElementById('btn-prev-slide');
        const btnNextSlide = document.getElementById('btn-next-slide');
        const slideDotsContainer = document.getElementById('slide-dots');

        // Flashcards elements
        const flashCard = document.getElementById('qgis-flashcard');
        const flashFrontText = document.getElementById('flash-front-text');
        const flashBackText = document.getElementById('flash-back-text');
        const btnPrevFlash = document.getElementById('btn-prev-flash');
        const btnNextFlash = document.getElementById('btn-next-flash');
        const flashCounter = document.getElementById('flash-counter');

        // Quiz elements
        const quizPanel = document.getElementById('lms-quiz-panel');
        const quizForm = document.getElementById('lms-quiz-form');
        const quizQuestionsContainer = document.getElementById('quiz-questions-container');
        const quizResultsBox = document.getElementById('quiz-results-box');

        // Tutor elements
        const tutorMessages = document.getElementById('tutor-messages');
        const tutorInput = document.getElementById('tutor-input');
        const tutorSend = document.getElementById('tutor-send');
        const tutorSuggestions = document.getElementById('tutor-suggestions');
        const btnClearTutor = document.getElementById('btn-clear-tutor');

        // Certificate elements
        const certificateModal = document.getElementById('certificate-modal');
        const btnCloseCert = document.getElementById('btn-close-cert');
        const certStudentName = document.getElementById('cert-student-name');
        const certGrade = document.getElementById('cert-grade');
        const certDate = document.getElementById('cert-date');
        const certCourseName = document.getElementById('cert-course-name');
        const btnPrintCertificate = document.getElementById('btn-print-certificate');

        const updateEnrollmentBtnText = (amount) => {
            const enrollBtn = document.getElementById('btn-submit-enroll');
            if (!enrollBtn) return;
            if (amount === '0.00') {
                enrollBtn.innerHTML = currentLang === 'en' ? 
                    '<i class="fa-solid fa-graduation-cap"></i> Register & Start Learning (Free)' : 
                    '<i class="fa-solid fa-graduation-cap"></i> ලියාපදිංචි වී ඉගෙනීම අරඹන්න (නොමිලේ)';
            } else {
                enrollBtn.innerHTML = currentLang === 'en' ? 
                    '<i class="fa-solid fa-unlock"></i> Complete Enrollment & Unlock Course' : 
                    '<i class="fa-solid fa-unlock"></i> ලියාපදිංචිය සම්පූර්ණ කර පාඨමාලාව විවෘත කරන්න';
            }
        };

        // 1. CHOOSE LANGUAGE & UPDATE METADATA
        const setLanguage = (lang) => {
            currentLang = lang;
            localStorage.setItem('lms_lang', lang);
            
            // Toggle active buttons
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
            });

            // Update course title & agreement text
            document.getElementById('landing-course-title').innerText = lmsCourseData[lang].title;
            agreementText.innerText = lmsCourseData[lang].agreement;

            // Re-render tabs
            const activeTab = document.querySelector('.tab-header-btn.active').getAttribute('data-tab');
            renderTabContent(activeTab);

            // Update enrollment button text based on active tier
            const activeTierBtn = document.querySelector('.donate-tier-btn.active');
            if (activeTierBtn) {
                updateEnrollmentBtnText(activeTierBtn.getAttribute('data-amount'));
            }

            if (currentUser) {
                workspaceLangDisplay.innerText = lang === 'en' ? 'English' : 'සිංහල';
                renderSlide();
                renderFlashcard();
                renderQuiz();
            }
        };

        // Tab Content Switching
        const renderTabContent = (tabName) => {
            tabContentArea.innerHTML = lmsCourseData[currentLang].tabs[tabName];
        };

        document.querySelectorAll('.tab-header-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.tab-header-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderTabContent(btn.getAttribute('data-tab'));
            });
        });

        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                setLanguage(btn.getAttribute('data-lang'));
            });
        });

        // 2. INTELLECTUAL PROPERTY CHECKBOX
        agreementCheck.addEventListener('change', () => {
            btnSubmitEnroll.disabled = !agreementCheck.checked;
        });

        // 3. AUTH TOGGLES
        btnShowSignup.addEventListener('click', () => {
            btnShowSignup.classList.add('active');
            btnShowLogin.classList.remove('active');
            signupForm.style.display = 'flex';
            loginForm.style.display = 'none';
        });

        btnShowLogin.addEventListener('click', () => {
            btnShowLogin.classList.add('active');
            btnShowSignup.classList.remove('active');
            loginForm.style.display = 'flex';
            signupForm.style.display = 'none';
        });

        // Donation tier selection
        document.querySelectorAll('.donate-tier-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.donate-tier-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const customContainer = document.querySelector('.custom-amount-input-container');
                const paymentWrapper = document.querySelector('.payment-gateway-wrapper');
                
                const amount = btn.getAttribute('data-amount');
                if (amount === 'custom') {
                    customContainer.style.display = 'block';
                    if (paymentWrapper) paymentWrapper.style.display = 'block';
                } else if (amount === '0.00') {
                    customContainer.style.display = 'none';
                    if (paymentWrapper) paymentWrapper.style.display = 'none';
                } else {
                    customContainer.style.display = 'none';
                    if (paymentWrapper) paymentWrapper.style.display = 'block';
                }
                updateEnrollmentBtnText(amount);
            });
        });

        // SIGN UP & PAYMENT SIMULATION
        btnSubmitEnroll.addEventListener('click', () => {
            const name = regName.value.trim();
            const email = regEmail.value.trim();
            const password = regPassword.value.trim();

            if (!name || !email || !password) {
                alert(currentLang === 'en' ? "Please fill all registration fields." : "කරුණාකර සියලුම ලියාපදිංචි කිරීමේ තොරතුරු ඇතුලත් කරන්න.");
                return;
            }

            if (!agreementCheck.checked) {
                alert(currentLang === 'en' ? "You must accept the Intellectual Property Agreement to proceed." : "ඉදිරියට යාමට ඔබ බුද්ධිමය දේපල ගිවිසුමට එකඟ විය යුතුය.");
                return;
            }

            // Create and save user
            const users = JSON.parse(localStorage.getItem('lms_users')) || {};
            if (users[email] && email !== 'teshan.ishara@gmail.com') {
                alert(currentLang === 'en' ? "An account with this email already exists." : "මෙම විද්‍යුත් තැපෑල සහිත ගිණුමක් දැනටමත් පවතී.");
                return;
            }

            const newUser = {
                name: name,
                email: email,
                password: password,
                enrolled: true,
                completedSlides: [],
                studySeconds: 0,
                examScore: null,
                examDate: null
            };

            users[email] = newUser;
            localStorage.setItem('lms_users', JSON.stringify(users));
            
            // Login user
            currentUser = newUser;
            localStorage.setItem('lms_current_user', JSON.stringify(newUser));
            
            alert(currentLang === 'en' ? "Account Created Successfully! Course Unlocked." : "ගිණුම සාර්ථකව සාදන ලදී! පාඨමාලාව විවෘත කරන ලදී.");
            enterWorkspace();
        });

        // LOGIN
        btnSubmitLogin.addEventListener('click', () => {
            const email = loginEmail.value.trim();
            const password = loginPassword.value.trim();

            if (!email || !password) {
                alert(currentLang === 'en' ? "Please enter your email and password." : "කරුණාකර ඔබගේ විද්‍යුත් තැපෑල සහ මුරපදය ඇතුලත් කරන්න.");
                return;
            }

            const users = JSON.parse(localStorage.getItem('lms_users')) || {};
            let user = users[email];

            if (email === 'teshan.ishara@gmail.com') {
                if (password === 'Teshan123@') {
                    // Force align or create the admin user with this password
                    user = {
                        name: "Admin",
                        email: email,
                        password: 'Teshan123@',
                        enrolled: true,
                        completedSlides: user ? (user.completedSlides || []) : [],
                        studySeconds: user ? (user.studySeconds || 0) : 0,
                        examScore: user ? user.examScore : null,
                        examDate: user ? user.examDate : null
                    };
                    users[email] = user;
                    localStorage.setItem('lms_users', JSON.stringify(users));
                } else {
                    // Invalid password for admin
                    alert(currentLang === 'en' ? "Invalid password for admin." : "පරිපාලක සඳහා වැරදි මුරපදයක්.");
                    return;
                }
            } else {
                if (!user || user.password !== password) {
                    alert(currentLang === 'en' ? "Invalid email or password." : "වැරදි විද්‍යුත් තැපෑලක් හෝ මුරපදයක්.");
                    return;
                }
            }

            currentUser = user;
            localStorage.setItem('lms_current_user', JSON.stringify(user));
            enterWorkspace();
        });

        // LOGOUT
        const logoutLMS = () => {
            saveUserState();
            currentUser = null;
            localStorage.removeItem('lms_current_user');
            clearInterval(timerInterval);
            landingPanel.style.display = 'block';
            workspacePanel.style.display = 'none';
        };

        btnLogoutLms.addEventListener('click', logoutLMS);

        // 4. ENTER WORKSPACE & INITIALIZE STUDY AREA
        const enterWorkspace = () => {
            landingPanel.style.display = 'none';
            workspacePanel.style.display = 'block';
            
            userDisplayName.innerText = currentUser.name;
            workspaceLangDisplay.innerText = currentLang === 'en' ? 'English' : 'සිංහල';

            // Reset slide coordinates
            activeSlideIndex = 0;
            activeFlashIndex = 0;
            totalSeconds = currentUser.studySeconds || 0;

            renderSlide();
            renderFlashcard();
            renderQuiz();
            startStudyTimer();
            updateProgressPercentage();

            // Clear tutor chat history and welcome student
            tutorMessages.innerHTML = `
                <div class="tutor-message bot">
                    <p>${currentLang === 'en' ? 
                        `Hello <strong>${currentUser.name}</strong>! I am your QGIS tutor. As you study the slides, I will provide context-aware suggestions. Feel free to ask me anything about GIS!` :
                        `ආයුබෝවන් <strong>${currentUser.name}</strong>! මම ඔබගේ QGIS උපදේශකයා වෙමි. ඔබ ස්ලයිඩ අධ්‍යයනය කරන විට මම ඔබට උපදෙස් ලබා දෙන්නෙමි. GIS පිළිබඳ ඕනෑම දෙයක් මගෙන් අසන්න!`
                    }</p>
                </div>
            `;
            updateTutorSuggestions();
        };

        // STUDY TIMER
        const startStudyTimer = () => {
            clearInterval(timerInterval);
            timerInterval = setInterval(() => {
                totalSeconds++;
                const mins = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
                const secs = String(totalSeconds % 60).padStart(2, '0');
                studyTimer.innerText = `${mins}m ${secs}s`;
                
                // Autosave progress every 15 seconds
                if (totalSeconds % 15 === 0) {
                    saveUserState();
                }
            }, 1000);
        };

        const saveUserState = () => {
            if (!currentUser) return;
            currentUser.studySeconds = totalSeconds;
            
            const users = JSON.parse(localStorage.getItem('lms_users')) || {};
            users[currentUser.email] = currentUser;
            localStorage.setItem('lms_users', JSON.stringify(users));
            localStorage.setItem('lms_current_user', JSON.stringify(currentUser));
        };

        // PROGRESS CALCULATOR
        const updateProgressPercentage = () => {
            const totalSlides = lmsCourseData[currentLang].slides.length;
            const completedCount = currentUser.completedSlides.length;
            const percent = Math.round((completedCount / totalSlides) * 100);
            workspacePercentDisplay.innerText = `${percent}%`;

            // If user has read all slides, unlock the quiz panel
            if (completedCount === totalSlides) {
                quizPanel.style.display = 'block';
            } else {
                quizPanel.style.display = 'none';
            }
        };

        // 5. SLIDE PRESENTATION PLAYER RENDER
        const renderSlide = () => {
            const slide = lmsCourseData[currentLang].slides[activeSlideIndex];
            
            playerModuleNum.innerText = slide.module;
            playerModuleTitle.innerText = slide.moduleTitle;
            
            // Mark slide as completed
            if (!currentUser.completedSlides.includes(activeSlideIndex)) {
                currentUser.completedSlides.push(activeSlideIndex);
                updateProgressPercentage();
                saveUserState();
            }

            // Slide counters
            const totalSlides = lmsCourseData[currentLang].slides.length;
            playerSlideCounter.innerText = `${currentLang === 'en' ? 'Slide' : 'ස්ලයිඩය'} ${activeSlideIndex + 1} / ${totalSlides}`;
            playerProgressBar.style.width = `${((activeSlideIndex + 1) / totalSlides) * 100}%`;

            // Compose content
            let downloadHTML = '';
            if (slide.download) {
                downloadHTML = `
                    <a href="${slide.download.url}" target="_blank" class="slide-download-link">
                        <i class="fa-solid fa-download"></i> ${slide.download.text}
                    </a>
                `;
            }

            slideContentArea.innerHTML = `
                <h5>${slide.title}</h5>
                <p>${slide.text}</p>
                <div class="slide-code-block">${slide.visual}</div>
                ${downloadHTML}
            `;

            // Draw Dots
            renderSlideDots();
            
            btnPrevSlide.disabled = activeSlideIndex === 0;
            btnNextSlide.disabled = activeSlideIndex === totalSlides - 1;

            // Trigger Tutor context update
            updateTutorSuggestions();
        };

        const renderSlideDots = () => {
            slideDotsContainer.innerHTML = '';
            const totalSlides = lmsCourseData[currentLang].slides.length;
            for (let i = 0; i < totalSlides; i++) {
                const dot = document.createElement('span');
                dot.classList.add('slide-dot');
                if (i === activeSlideIndex) dot.classList.add('active');
                dot.addEventListener('click', () => {
                    activeSlideIndex = i;
                    renderSlide();
                });
                slideDotsContainer.appendChild(dot);
            }
        };

        btnPrevSlide.addEventListener('click', () => {
            if (activeSlideIndex > 0) {
                activeSlideIndex--;
                renderSlide();
            }
        });

        btnNextSlide.addEventListener('click', () => {
            const totalSlides = lmsCourseData[currentLang].slides.length;
            if (activeSlideIndex < totalSlides - 1) {
                activeSlideIndex++;
                renderSlide();
            }
        });

        // 6. 3D FLASHCARDS ENGINE
        const renderFlashcard = () => {
            const card = lmsCourseData[currentLang].flashcards[activeFlashIndex];
            flashFrontText.innerText = card.q;
            flashBackText.innerText = card.a;
            
            flashCard.classList.remove('flipped');
            flashCounter.innerText = `${currentLang === 'en' ? 'Card' : 'කාඩ්පත'} ${activeFlashIndex + 1} ${currentLang === 'en' ? 'of' : 'න්'} ${lmsCourseData[currentLang].flashcards.length}`;
        };

        flashCard.addEventListener('click', () => {
            flashCard.classList.toggle('flipped');
        });

        btnPrevFlash.addEventListener('click', (e) => {
            e.stopPropagation();
            if (activeFlashIndex > 0) {
                activeFlashIndex--;
                renderFlashcard();
            }
        });

        btnNextFlash.addEventListener('click', (e) => {
            e.stopPropagation();
            if (activeFlashIndex < lmsCourseData[currentLang].flashcards.length - 1) {
                activeFlashIndex++;
                renderFlashcard();
            }
        });

        // 7. COMPREHENSIVE EVALUATION QUIZ ENGINE
        const renderQuiz = () => {
            quizQuestionsContainer.innerHTML = '';
            const quizList = lmsCourseData[currentLang].quiz;

            quizList.forEach((q, qIndex) => {
                const qBlock = document.createElement('div');
                qBlock.classList.add('quiz-question-block');

                qBlock.innerHTML = `
                    <span class="quiz-q-num">${currentLang === 'en' ? 'Question' : 'ප්‍රශ්නය'} ${qIndex + 1}</span>
                    <p class="quiz-q-text">${q.q}</p>
                    <div class="quiz-options-list">
                        ${q.o.map((opt, oIndex) => `
                            <label class="quiz-option-label" data-q="${qIndex}" data-o="${oIndex}">
                                <input type="radio" name="quiz-q-${qIndex}" value="${oIndex}" required>
                                <span>${opt}</span>
                            </label>
                        `).join('')}
                    </div>
                `;

                quizQuestionsContainer.appendChild(qBlock);
            });

            // Set up option clicks styling
            document.querySelectorAll('.quiz-option-label').forEach(label => {
                const radio = label.querySelector('input[type="radio"]');
                label.addEventListener('click', () => {
                    const qIdx = label.getAttribute('data-q');
                    document.querySelectorAll(`.quiz-option-label[data-q="${qIdx}"]`).forEach(l => {
                        l.classList.remove('selected');
                    });
                    label.classList.add('selected');
                    radio.checked = true;
                });
            });

            // Re-render score results if they already passed
            if (currentUser && currentUser.examScore !== null) {
                displayQuizResults(currentUser.examScore);
            }
        };

        const displayQuizResults = (score) => {
            quizResultsBox.style.display = 'flex';
            quizResultsBox.className = 'quiz-results ' + (score >= 70 ? 'pass' : 'fail');
            
            const passed = score >= 70;
            const title = passed ? 
                (currentLang === 'en' ? "Congratulations! You Passed!" : "සුභ පැතුම්! ඔබ සමත් විය!") : 
                (currentLang === 'en' ? "Exam Failed. Try Again." : "විභාගය අසමත් විය. නැවත උත්සාහ කරන්න.");
            
            const desc = passed ?
                (currentLang === 'en' ? 
                    "You have successfully certified in QGIS. You are now eligible to download your official GeoPhoenix e-Learning Certificate." : 
                    "ඔබ QGIS පාඨමාලාව සාර්ථකව නිම කර ඇත. දැන් ඔබට නිල GeoPhoenix e-Learning සහතිකය බාගත කිරීමට හැකියාව ඇත.") :
                (currentLang === 'en' ? 
                    "A minimum score of 70% is required to pass. Read the modules and try again!" : 
                    "සමත් වීම සඳහා අවම වශයෙන් 70% ක ලකුණු ප්‍රමාණයක් අවශ්‍ය වේ. කරුණාකර නැවත අධ්‍යයනය කර උත්සාහ කරන්න!");

            let actionBtnHTML = passed ? 
                `<button type="button" class="btn btn-primary" id="btn-trigger-cert-modal"><i class="fa-solid fa-award"></i> View Certificate</button>` : 
                `<button type="button" class="btn btn-outline" id="btn-retake-quiz"><i class="fa-solid fa-rotate-right"></i> Retake Exam</button>`;

            quizResultsBox.innerHTML = `
                <span class="quiz-results-title">${title}</span>
                <div class="quiz-score-circle">${score}%</div>
                <p class="quiz-results-text">${desc}</p>
                ${actionBtnHTML}
            `;

            // Bind triggers
            if (passed) {
                document.getElementById('btn-trigger-cert-modal').addEventListener('click', openCertificate);
            } else {
                document.getElementById('btn-retake-quiz').addEventListener('click', () => {
                    currentUser.examScore = null;
                    currentUser.examDate = null;
                    saveUserState();
                    quizResultsBox.style.display = 'none';
                    renderQuiz();
                });
            }
        };

        quizForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const quizList = lmsCourseData[currentLang].quiz;
            let correctCount = 0;

            quizList.forEach((q, qIndex) => {
                const selectedOption = quizForm.querySelector(`input[name="quiz-q-${qIndex}"]:checked`);
                if (selectedOption && parseInt(selectedOption.value) === q.a) {
                    correctCount++;
                }
            });

            const finalScore = Math.round((correctCount / quizList.length) * 100);
            currentUser.examScore = finalScore;
            currentUser.examDate = new Date().toLocaleDateString(currentLang === 'en' ? 'en-US' : 'si-LK', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            saveUserState();
            displayQuizResults(finalScore);
        });

        // 8. CERTIFICATE GENERATION PREVIEW & BIND PRINT ENGINE
        const openCertificate = () => {
            certStudentName.innerText = currentUser.name.toUpperCase();
            certGrade.innerText = `${currentUser.examScore}%`;
            certDate.innerText = currentUser.examDate;
            certCourseName.innerText = lmsCourseData[currentLang].title;
            
            certificateModal.style.display = 'flex';
        };

        const closeCertificate = () => {
            certificateModal.style.display = 'none';
        };

        btnCloseCert.addEventListener('click', closeCertificate);
        
        btnPrintCertificate.addEventListener('click', () => {
            window.print();
        });

        // Close certificate modal on overlay click
        certificateModal.addEventListener('click', (e) => {
            if (e.target === certificateModal) {
                closeCertificate();
            }
        });

        // 9. EMPOWERED QGIS AI TUTOR BOT CHAT
        const appendTutorMessage = (text, sender) => {
            const msgDiv = document.createElement('div');
            msgDiv.classList.add('tutor-message', sender);
            
            const textPara = document.createElement('p');
            textPara.innerHTML = text;
            msgDiv.appendChild(textPara);
            
            tutorMessages.appendChild(msgDiv);
            tutorMessages.scrollTop = tutorMessages.scrollHeight;
        };

        const getTutorResponse = (query) => {
            const clean = query.toLowerCase();

            // English Answers
            if (currentLang === 'en') {
                if (clean.includes('install') || clean.includes('setup') || clean.includes('download')) {
                    return `<strong>Installing QGIS:</strong><br>Go to the official website: <a href="https://qgis.org" target="_blank" style="color: var(--accent-teal); text-decoration: underline;">qgis.org</a> and download the Long Term Release (LTR) for stability.<br><br>Steps:<br>1. Run the installer.<br>2. Open QGIS Desktop.<br>3. Verify panels like 'Layers' and 'Browser' are visible under <strong>View -> Panels</strong>.`;
                }
                if (clean.includes('vector') || clean.includes('raster') || clean.includes('geopackage') || clean.includes('shapefile')) {
                    return `<strong>Vector vs Raster Formats:</strong><br>• <strong>Vector:</strong> Stores geometric coordinates. Format options include <code>ESRI Shapefiles (.shp)</code> and <code>GeoPackages (.gpkg)</code>. Ideal for features with boundaries like parcels or rivers.<br>• <strong>Raster:</strong> Stores matrix cells (pixels) of data. Format option is <code>GeoTIFF (.tif)</code>. Ideal for maps with continuous values like elevation grids (DEM) or heatmaps.`;
                }
                if (clean.includes('crs') || clean.includes('projection') || clean.includes('epsg') || clean.includes('utm') || clean.includes('coordinate')) {
                    return `<strong>Coordinate Reference Systems (CRS):</strong><br>A CRS translates 3D locations on Earth to 2D flat coordinates on a map.<br>• <strong>EPSG:4326 (WGS 84):</strong> Geographic system (degrees). Standard for GPS.<br>• <strong>EPSG:3857 (Web Mercator):</strong> Used by Google Maps/OSM (meters).<br>• <strong>Projected Coordinate System (e.g. UTM):</strong> Best for calculations. ALWAYS reproject layers before running operations like buffer or area calculations!`;
                }
                if (clean.includes('symbology') || clean.includes('color') || clean.includes('style') || clean.includes('label') || clean.includes('graduated') || clean.includes('categorized')) {
                    return `<strong>Styling layers in QGIS:</strong><br>Open Layer Properties and navigate to the <strong>Symbology</strong> tab:<br>• <strong>Categorized:</strong> Ideal for qualitative columns (e.g. soil types, zoning classes).<br>• <strong>Graduated:</strong> Ideal for quantitative fields (e.g. population numbers, rainfall). Use Natural Breaks (Jenks) classes.<br>• <strong>Labels:</strong> Toggle 'Single Labels' and remember to turn on text buffers (borders) to ensure text legibility.`;
                }
                if (clean.includes('attribute') || clean.includes('calculator') || clean.includes('field') || clean.includes('column') || clean.includes('expression') || clean.includes('query')) {
                    return `<strong>Working with Attributes:</strong><br>• Open table: Right-click layer -> <strong>Open Attribute Table</strong>.<br>• Edit fields: Click pencil icon to toggle edit mode, then open the <strong>Field Calculator</strong>.<br>• Area expression: Use geometry parameter <code>$area</code>. Divide by 10000 to convert to hectares (<code>$area / 10000</code>).<br>• Selection query: Use <code>\"column_name\" > 50000</code>.`;
                }
                if (clean.includes('print') || clean.includes('layout') || clean.includes('export') || clean.includes('legend') || clean.includes('scale') || clean.includes('pdf')) {
                    return `<strong>Print & Layout Composers:</strong><br>Create a canvas using <strong>Project -> New Print Layout</strong>.<br>• Use <strong>Add Map</strong> to render the active QGIS view.<br>• Use <strong>Add Scalebar</strong> and <strong>Add Legend</strong> to insert cartographic items. Configure scalebar units in Item Properties.<br>• Export: Click image icon or PDF icon at 300 DPI for publication.`;
                }
                if (clean.includes('alaska') || clean.includes('dataset') || clean.includes('sample')) {
                    return `<strong>Alaska Dataset Guide:</strong><br>This is the standard OSGeo educational data. It contains shapefiles for state boundaries, rivers, highways, and airports. Make sure to download and unzip it before loading shapefiles into QGIS.`;
                }
            } else {
                // Sinhala Answers
                if (clean.includes('install') || clean.includes('setup') || clean.includes('download') || clean.includes('ස්ථාපනය')) {
                    return `<strong>QGIS ස්ථාපනය කිරීම:</strong><br>නිල වෙබ් අඩවිය වන <a href="https://qgis.org" target="_blank" style="color: var(--accent-teal); text-decoration: underline;">qgis.org</a> වෙත ගොස් වඩාත් ස්ථාවර LTR (Long Term Release) සංස්කරණය බාගත කර ස්ථාපනය කර ගන්න.<br><br>පියවර:<br>1. Installer ගොනුව ක්‍රියාත්මක කරන්න.<br>2. QGIS විවෘත කරන්න.<br>3. Layers සහ Browser පැනල දර්ශනය නොවේ නම් <strong>View -> Panels</strong> වෙත ගොස් ඒවා සක්‍රිය කරන්න.`;
                }
                if (clean.includes('vector') || clean.includes('raster') || clean.includes('geopackage') || clean.includes('shapefile') || clean.includes('දෛශික') || clean.includes('රාස්ටර්')) {
                    return `<strong>Vector සහ Raster දත්ත වෙනස:</strong><br>• <strong>Vector:</strong> ලක්ෂ්‍ය, රේඛා සහ බහුඅස්‍ර ඛණ්ඩාංක ලෙස ගබඩා කෙරේ. Shapefile (.shp) සහ GeoPackage (.gpkg) ප්‍රධාන ආකෘති වේ. නගර, ගංගා හෝ පරිපාලන සීමා සඳහා යෝග්‍ය වේ.<br>• <strong>Raster:</strong> පික්සෙල් කොටු (pixels) ලෙස දත්ත ගබඩා කෙරේ. ප්‍රධාන ආකෘතිය GeoTIFF (.tif) වේ. උන්නතාංශ සිතියම් (DEM) හෝ චන්ද්‍රිකා රූප සඳහා භාවිත වේ.`;
                }
                if (clean.includes('crs') || clean.includes('projection') || clean.includes('epsg') || clean.includes('utm') || clean.includes('coordinate') || clean.includes('ඛණ්ඩාංක')) {
                    return `<strong>ඛණ්ඩාංක පද්ධති (Coordinate Reference Systems - CRS):</strong><br>CRS එකකින් ත්‍රිමාණ පෘථිවිය ද්විමාන සිතියමකට නිරූපණය කරයි.<br>• <strong>EPSG:4326 (WGS 84):</strong> GPS සඳහා භාවිත වන අංශක (degrees) ඒකකය සහිත පද්ධතියයි.<br>• <strong>EPSG:3857 (Web Mercator):</strong> Google Maps මඟින් භාවිත වන මීටර් ඒකකය සහිත පද්ධතියයි.<br>• විශ්ලේෂණ කටයුතු (buffering, area) වලදී හැමවිටම Projected CRS (උදා. UTM) භාවිත කරන්න!`;
                }
                if (clean.includes('symbology') || clean.includes('color') || clean.includes('style') || clean.includes('label') || clean.includes('graduated') || clean.includes('categorized') || clean.includes('සංකේත') || clean.includes('වර්ණ')) {
                    return `<strong>ස්ථර හැඩතල ගැන්වීම (Styling):</strong><br>Layer Properties හි <strong>Symbology</strong> ටැබය වෙත යන්න:<br>• <strong>Categorized:</strong> ගුණාත්මක දත්ත වර්ණ ගැන්වීමට (උදා. පස වර්ග).<br>• <strong>Graduated:</strong> සංඛ්‍යාත්මක දත්ත පන්තිවලට බෙදා පෙන්වීමට (උදා. ජනගහනය). Natural Breaks (Jenks) ක්‍රමය භාවිත කරන්න.<br>• <strong>Labels:</strong> සිතියමේ නම් පෙන්වීමට Single Labels තෝරා, පැහැදිලිව පෙනීම සඳහා label buffer එකක් සක්‍රිය කරන්න.`;
                }
                if (clean.includes('attribute') || clean.includes('calculator') || clean.includes('field') || clean.includes('column') || clean.includes('expression') || clean.includes('query') || clean.includes('වගු') || clean.includes('ගණනය')) {
                    return `<strong>ආරෝපණ වගු (Attribute Tables):</strong><br>• වගුව විවෘත කිරීමට: Right-click -> <strong>Open Attribute Table</strong>.<br>• දත්ත ගණනයට: පැන්සල් ලකුණ ක්ලික් කර Edit සක්‍රිය කර, <strong>Field Calculator</strong> විවෘත කරන්න.<br>• වර්ගඵලය සෙවීමට: <code>$area</code> ශ්‍රිතය ලියන්න. හෙක්ටයාර සඳහා: <code>$area / 10000</code>.<br>• දත්ත පෙරීමට: <code>\"column_name\" > 50000</code> වැනි ප්‍රකාශනයක් ලියන්න.`;
                }
                if (clean.includes('print') || clean.includes('layout') || clean.includes('export') || clean.includes('legend') || clean.includes('scale') || clean.includes('pdf') || clean.includes('මුද්‍රණ') || clean.includes('අපනයන')) {
                    return `<strong>මුද්‍රණ සැලසුම් (Print Layout):</strong><br>Project -> New Print Layout වෙත යන්න.<br>• <strong>Add Map</strong> මෙවලමෙන් සිතියම එක් කරන්න.<br>• <strong>Add Scalebar</strong> සහ <strong>Add Legend</strong> මඟින් පරිමාණ තීරුව සහ සූචිය ඇතුලත් කරන්න.<br>• අපනයනය කිරීමට: PDF හෝ රූප සබැඳි ක්ලික් කර 300 DPI ධාරිතාවයෙන් සිතියම සුරකින්න.`;
                }
            }

            // Fallbacks
            return currentLang === 'en' ? 
                `I'm not fully sure about that query. Try asking about QGIS installation, vector/raster differences, Coordinate reference systems (CRS), symbology coloring, attribute table calculator, or print layouts!` :
                `ඒ පිළිබඳව මට සම්පූර්ණ පිළිතුරක් දිය නොහැක. කරුණාකර QGIS ස්ථාපනය, vector/raster දත්ත, CRS ඛණ්ඩාංක පද්ධති, symbology, attribute table ගණනය කිරීම් හෝ print layouts පිළිබඳව විමසන්න!`;
        };

        // Context-aware tutor suggestions
        const updateTutorSuggestions = () => {
            tutorSuggestions.innerHTML = '';
            const slide = lmsCourseData[currentLang].slides[activeSlideIndex];
            
            let queryOptions = [];
            if (activeSlideIndex < 3) { // Module 1
                queryOptions = currentLang === 'en' ? 
                    ["How to install QGIS?", "What is Vector layer?", "Download Alaska data"] :
                    ["QGIS ස්ථාපනය කරන්නේ කෙසේද?", "Vector දත්ත යනු මොනවාද?", "ඇලස්කා දත්ත බාගන්න"];
            } else if (activeSlideIndex < 6) { // Module 2
                queryOptions = currentLang === 'en' ? 
                    ["Vector vs Raster?", "What is CRS?", "How to reproject layer?"] :
                    ["Vector සහ Raster වෙනස?", "CRS යනු කුමක්ද?", "CRS වෙනස් කරන්නේ කෙසේද?"];
            } else if (activeSlideIndex < 9) { // Module 3
                queryOptions = currentLang === 'en' ? 
                    ["How to style layers?", "What is graduated color?", "How to add map labels?"] :
                    ["Symbology සකසන්නේ කෙසේද?", "Graduated color යනු කුමක්ද?", "ලේබල් එකතු කරන්නේ කෙසේද?"];
            } else if (activeSlideIndex < 12) { // Module 4
                queryOptions = currentLang === 'en' ? 
                    ["Open Attribute table", "Calculate area in hectares", "Select by expression query"] :
                    ["Attribute table විවෘත කරන්නේ කෙසේද?", "හෙක්ටයාර වලින් වර්ගඵලය සෙවීම", "Query එකක් ලියන්නේ කෙසේද?"];
            } else { // Module 5
                queryOptions = currentLang === 'en' ? 
                    ["Start Print Layout", "Add map elements", "Export map at 300 DPI"] :
                    ["Print Layout එකක් හදන්නේ කෙසේද?", "Legend එකක් එක් කිරීම", "300 DPI වලින් export කරන්නේ කෙසේද?"];
            }

            queryOptions.forEach(opt => {
                const chip = document.createElement('button');
                chip.classList.add('tutor-chip');
                chip.innerText = opt;
                chip.addEventListener('click', () => {
                    appendTutorMessage(opt, 'user');
                    const reply = getTutorResponse(opt);
                    setTimeout(() => {
                        appendTutorMessage(reply, 'bot');
                    }, 500);
                });
                tutorSuggestions.appendChild(chip);
            });
        };

        const handleTutorSend = () => {
            const text = tutorInput.value.trim();
            if (!text) return;
            
            appendTutorMessage(text, 'user');
            tutorInput.value = '';
            
            const reply = getTutorResponse(text);
            setTimeout(() => {
                appendTutorMessage(reply, 'bot');
            }, 600);
        };

        tutorSend.addEventListener('click', handleTutorSend);
        tutorInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleTutorSend();
        });

        btnClearTutor.addEventListener('click', () => {
            tutorMessages.innerHTML = '';
            appendTutorMessage(currentLang === 'en' ? "Chat history cleared. How can I help you with QGIS?" : "පණිවිඩ ඉතිහාසය මකා දමන ලදී. ඔබට සහාය විය යුත්තේ කෙසේද?", 'bot');
            updateTutorSuggestions();
        });

        // 10. AUTO-RESUME IF SESSION ALREADY ACTIVE
        // Initialize language UI
        setLanguage(currentLang);
        
        if (currentUser && currentUser.enrolled) {
            enterWorkspace();
        }
}

