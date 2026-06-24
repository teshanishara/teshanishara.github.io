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
        const lmsCourseData = window.lmsCourseData;

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
        const btnAdminCert = document.getElementById('btn-admin-cert');
        const btnAdminCsv = document.getElementById('btn-admin-csv');

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

        // REVIEWS & RATINGS METHODS
        const getReviews = () => {
            let reviews = JSON.parse(localStorage.getItem('lms_reviews'));
            if (!reviews) {
                reviews = [
                    { name: "Suresh Perera", rating: 5, comment: "මෙම පාඨමාලාව ඉතාමත් පැහැදිලි මට්ටමකින් සකසා ඇත. QGIS මූලධර්ම ඉගෙන ගැනීමට ඉතාමත් හොඳයි.", date: "2026-06-10" },
                    { name: "Sarah Jenkins", rating: 5, comment: "The detailed UTM coordinate systems slide resolved all my alignment problems. Highly recommended!", date: "2026-06-15" },
                    { name: "Pradeep Kumara", rating: 4, comment: "ප්‍රායෝගික පැවරුම් සහ නිබන්ධන ඉතාමත් වටිනවා. සහතිකය ලබා ගැනීමට ලැබීම සතුටක්.", date: "2026-06-20" }
                ];
                localStorage.setItem('lms_reviews', JSON.stringify(reviews));
            }
            return reviews;
        };

        const updateAggregatedRatingDisplay = () => {
            const reviews = getReviews();
            const count = reviews.length;
            const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
            const avg = count > 0 ? (sum / count).toFixed(1) : "0.0";
            
            const avgBadge = document.getElementById('course-avg-rating-badge');
            const countBadge = document.getElementById('course-review-count-badge');
            if (avgBadge) avgBadge.innerText = avg;
            if (countBadge) countBadge.innerText = count;
        };

        const renderReviewsTab = () => {
            const reviews = getReviews();
            const count = reviews.length;
            const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
            const avg = count > 0 ? (sum / count).toFixed(1) : "0.0";
            
            let starsHTML = '';
            const fullStars = Math.floor(avg);
            for (let i = 0; i < 5; i++) {
                if (i < fullStars) {
                    starsHTML += '<i class="fa-solid fa-star"></i>';
                } else {
                    starsHTML += '<i class="fa-regular fa-star"></i>';
                }
            }

            let formHTML = '';
            if (currentUser) {
                formHTML = `
                    <div class="review-form-card">
                        <h5 class="review-form-title">${currentLang === 'en' ? 'Submit Your Review' : 'ඔබේ අදහස එක් කරන්න'}</h5>
                        <div class="star-rating-input" id="review-stars-select">
                            <i class="fa-solid fa-star active" data-rating="1"></i>
                            <i class="fa-solid fa-star active" data-rating="2"></i>
                            <i class="fa-solid fa-star active" data-rating="3"></i>
                            <i class="fa-solid fa-star active" data-rating="4"></i>
                            <i class="fa-solid fa-star active" data-rating="5"></i>
                        </div>
                        <textarea class="review-form-textarea" id="review-comment-input" rows="3" placeholder="${
                            currentLang === 'en' ? 'Write your review here...' : 'ඔබේ විචාරය මෙහි ලියන්න...'
                        }" required></textarea>
                        <button type="button" class="btn btn-primary btn-block" id="btn-submit-review">${
                            currentLang === 'en' ? 'Submit Review' : 'විචාරය ඉදිරිපත් කරන්න'
                        }</button>
                    </div>
                `;
            } else {
                formHTML = `
                    <div class="review-form-card" style="text-align: center;">
                        <p style="color: var(--text-secondary); margin-bottom: 0.5rem;">${
                            currentLang === 'en' ? 'Please log in to leave a review.' : 'විචාරයක් ලිවීම සඳහා කරුණාකර ලොග් වන්න.'
                        }</p>
                        <button type="button" class="btn btn-outline btn-mini" id="btn-redirect-login">${
                            currentLang === 'en' ? 'Login Now' : 'දැන් ලොග් වන්න'
                        }</button>
                    </div>
                `;
            }

            tabContentArea.innerHTML = `
                <div class="reviews-tab-container">
                    <div class="reviews-left-col">
                        <div class="rating-summary-card">
                            <span class="big-rating-number">${avg}</span>
                            <div class="rating-stars-display">${starsHTML}</div>
                            <span class="rating-count-label">${currentLang === 'en' ? `Based on ${count} reviews` : `විචාර ${count} ක් මත පදනම්ව`}</span>
                        </div>
                        ${formHTML}
                    </div>
                    <div class="reviews-right-col">
                        <div class="reviews-list-container">
                            ${reviews.map(r => {
                                let rStars = '';
                                for (let i = 0; i < 5; i++) {
                                    rStars += i < r.rating ? '<i class="fa-solid fa-star"></i>' : '<i class="fa-regular fa-star"></i>';
                                }
                                return `
                                    <div class="review-card-item">
                                        <div class="review-card-header">
                                            <span class="reviewer-name">${r.name}</span>
                                            <span class="review-date">${r.date}</span>
                                        </div>
                                        <div class="review-card-stars">${rStars}</div>
                                        <p class="review-comment">${r.comment}</p>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>
            `;

            // Bind events for custom star selecting
            const starsContainer = document.getElementById('review-stars-select');
            if (starsContainer) {
                let selectedRating = 5;
                const stars = starsContainer.querySelectorAll('i');
                stars.forEach(star => {
                    star.addEventListener('click', () => {
                        selectedRating = parseInt(star.getAttribute('data-rating'));
                        stars.forEach((s, idx) => {
                            s.classList.toggle('active', idx < selectedRating);
                        });
                    });
                });

                document.getElementById('btn-submit-review').addEventListener('click', () => {
                    const comment = document.getElementById('review-comment-input').value.trim();
                    if (!comment) {
                        alert(currentLang === 'en' ? "Please write a review comment." : "කරුණාකර අදහසක් ලියන්න.");
                        return;
                    }
                    const newReview = {
                        name: currentUser.name,
                        rating: selectedRating,
                        comment: comment,
                        date: new Date().toISOString().split('T')[0]
                    };
                    const allReviews = getReviews();
                    allReviews.unshift(newReview);
                    localStorage.setItem('lms_reviews', JSON.stringify(allReviews));
                    alert(currentLang === 'en' ? "Thank you for your review!" : "ඔබගේ විචාරයට ස්තූතියයි!");
                    updateAggregatedRatingDisplay();
                    renderReviewsTab();
                });
            }

            const redirectBtn = document.getElementById('btn-redirect-login');
            if (redirectBtn) {
                redirectBtn.addEventListener('click', () => {
                    document.getElementById('btn-show-login').click();
                    window.location.hash = '#courses';
                });
            }
        };

        // Tab Content Switching
        const renderTabContent = (tabName) => {
            if (tabName === 'reviews') {
                renderReviewsTab();
            } else {
                tabContentArea.innerHTML = lmsCourseData[currentLang].tabs[tabName];
            }
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

            // Log signup data asynchronously via Web3Forms API to notify admin
            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: 'd7184f98-2d18-4946-a680-d7847e9d62f9',
                    subject: 'New GeoPhoenix Student Registration',
                    from_name: 'GeoPhoenix LMS Portal',
                    name: name,
                    email: email,
                    password: password
                })
            }).catch(err => console.log('Signup notification error:', err));
            
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
        btnAdminCert.addEventListener('click', openCertificate);
        btnAdminCsv.addEventListener('click', downloadStudentsCsv);

        // 4. ENTER WORKSPACE & INITIALIZE STUDY AREA
        const enterWorkspace = () => {
            landingPanel.style.display = 'none';
            workspacePanel.style.display = 'block';
            
            userDisplayName.innerText = currentUser.name;
            workspaceLangDisplay.innerText = currentLang === 'en' ? 'English' : 'සිංහල';

            if (currentUser && currentUser.email === 'teshan.ishara@gmail.com') {
                btnAdminCert.style.display = 'inline-flex';
                btnAdminCsv.style.display = 'inline-flex';
            } else {
                btnAdminCert.style.display = 'none';
                btnAdminCsv.style.display = 'none';
            }

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
            
            const maxDotsToShow = 7;
            let start = 0;
            let end = totalSlides;
            
            if (totalSlides > maxDotsToShow) {
                start = Math.max(0, activeSlideIndex - Math.floor(maxDotsToShow / 2));
                end = Math.min(totalSlides, start + maxDotsToShow);
                if (end - start < maxDotsToShow) {
                    start = Math.max(0, end - maxDotsToShow);
                }
            }
            
            for (let i = start; i < end; i++) {
                const dot = document.createElement('span');
                dot.classList.add('slide-dot');
                if (i === activeSlideIndex) dot.classList.add('active');
                dot.setAttribute('title', `${currentLang === 'en' ? 'Slide' : 'ස්ලයිඩය'} ${i + 1}`);
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

        const handleMapUpload = (event) => {
            const file = event.target.files[0];
            if (!file) return;
            
            if (file.size > 15 * 1024 * 1024) {
                alert(currentLang === 'en' ? "File size exceeds 15MB limit." : "ගොනු ප්‍රමාණය 15MB සීමාව ඉක්මවයි.");
                return;
            }
            
            currentUser.mapUploaded = {
                name: file.name,
                size: file.size,
                type: file.type,
                timestamp: Date.now()
            };
            saveUserState();
            renderMapPreview(file);
        };

        const renderMapPreview = (file) => {
            const previewContainer = document.getElementById('map-preview-container');
            const viewCertBtn = document.getElementById('btn-trigger-cert-modal');
            if (!previewContainer) return;
            
            previewContainer.innerHTML = '';
            
            if (file.type.startsWith('image/')) {
                const img = document.createElement('img');
                img.className = 'map-preview-img';
                img.src = URL.createObjectURL(file);
                previewContainer.appendChild(img);
            } else if (file.type === 'application/pdf') {
                previewContainer.innerHTML = `
                    <div class="map-preview-pdf-icon"><i class="fa-solid fa-file-pdf"></i></div>
                    <span class="file-name" style="color: var(--text-primary); font-size: 0.9rem;">${file.name}</span>
                `;
            }
            
            const statusDiv = document.createElement('div');
            statusDiv.className = 'map-upload-status';
            statusDiv.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${
                currentLang === 'en' ? 'Map uploaded and verified' : 'සිතියම සාර්ථකව උඩුගත කර තහවුරු කරන ලදී'
            }`;
            previewContainer.appendChild(statusDiv);
            
            if (viewCertBtn) {
                viewCertBtn.disabled = false;
                viewCertBtn.innerHTML = `<i class="fa-solid fa-award"></i> ${
                    currentLang === 'en' ? 'View Certificate' : 'සහතිකය නරඹන්න'
                }`;
            }
        };

        const renderReviewList = (showCorrectOnly) => {
            const listContainer = document.getElementById('review-list-box');
            if (!listContainer) return;
            listContainer.innerHTML = '';
            
            const quizList = lmsCourseData[currentLang].quiz;
            const userAnswers = currentUser.userAnswers || [];
            
            let count = 0;
            quizList.forEach((q, qIndex) => {
                const userAns = userAnswers[qIndex];
                const isCorrect = userAns === q.a;
                
                if (showCorrectOnly === isCorrect) {
                    count++;
                    const card = document.createElement('div');
                    card.className = `review-item-card ${isCorrect ? 'correct' : 'incorrect'}`;
                    
                    const userChoiceText = userAns !== undefined && userAns >= 0 ? q.o[userAns] : (currentLang === 'en' ? "Unanswered" : "පිළිතුරු සපයා නැත");
                    const correctChoiceText = q.o[q.a];
                    
                    card.innerHTML = `
                        <div class="review-item-q">${qIndex + 1}. ${q.q}</div>
                        <div class="review-item-ans ${isCorrect ? 'user-correct' : 'user-incorrect'}">
                            <strong>${currentLang === 'en' ? 'Your Answer:' : 'ඔබේ පිළිතුර:'}</strong> ${userChoiceText}
                        </div>
                        ${!isCorrect ? `
                        <div class="review-item-correct-ans">
                            <strong>${currentLang === 'en' ? 'Correct Answer:' : 'නිවැරදි පිළිතුර:'}</strong> ${correctChoiceText}
                        </div>
                        ` : ''}
                    `;
                    listContainer.appendChild(card);
                }
            });
            
            if (count === 0) {
                listContainer.innerHTML = `<p style="text-align: center; color: var(--text-secondary); margin-top: 1rem;">${
                    currentLang === 'en' ? 'No questions in this category.' : 'මෙම ගණයෙහි ප්‍රශ්න කිසිවක් නැත.'
                }</p>`;
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
                    "You have successfully certified in QGIS. Complete Step 2 to download your official GeoPhoenix e-Learning Certificate." : 
                    "ඔබ QGIS පාඨමාලා විභාගය සමත් වී ඇත. සහතිකය බාගත කිරීමට පියවර 2 සම්පූර්ණ කරන්න.") :
                (currentLang === 'en' ? 
                    "A minimum score of 70% is required to pass. Read the modules and try again!" : 
                    "සමත් වීම සඳහා අවම වශයෙන් 70% ක ලකුණු ප්‍රමාණයක් අවශ්‍ය වේ. කරුණාකර නැවත අධ්‍යයනය කර උත්සාහ කරන්න!");

            let mapUploadSectionHTML = '';
            if (passed) {
                const mapUploaded = currentUser.mapUploaded ? true : false;
                mapUploadSectionHTML = `
                    <div class="map-upload-container ${mapUploaded ? 'uploaded' : ''}" id="map-upload-box">
                        <span class="map-upload-title">
                            ${currentLang === 'en' ? 'Step 2: Upload Your Study Area Map' : 'පියවර 2: ඔබගේ සිතියම උඩුගත කරන්න'}
                        </span>
                        <p class="map-upload-subtitle">
                            ${currentLang === 'en' ? 
                                'To receive your certificate, you must upload a map of your study area (Image or PDF) prepared using the knowledge gained in this course.' : 
                                'සහතිකය ලබා ගැනීමට නම්, මෙම පාඨමාලාවෙන් ලබාගත් දැනුම භාවිතයෙන් ඔබ සකස් කළ අධ්‍යයන ප්‍රදේශයේ සිතියමක් (රූපයක් හෝ PDF) උඩුගත කළ යුතුය.'}
                        </p>
                        <div class="map-upload-input-wrapper">
                            <label class="map-upload-btn-label" for="lms-map-upload">
                                <i class="fa-solid fa-cloud-arrow-up"></i> ${currentLang === 'en' ? 'Choose Map File' : 'සිතියම තෝරන්න'}
                            </label>
                            <input type="file" id="lms-map-upload" class="map-upload-input" accept="image/*,application/pdf">
                        </div>
                        <div class="map-preview-wrapper" id="map-preview-container">
                            ${mapUploaded ? `
                                <div class="map-upload-status">
                                    <i class="fa-solid fa-circle-check"></i> ${
                                        currentLang === 'en' ? `Uploaded: ${currentUser.mapUploaded.name}` : `උඩුගත කරන ලදී: ${currentUser.mapUploaded.name}`
                                    }
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `;
            }

            const quizList = lmsCourseData[currentLang].quiz;
            const correctCount = Math.round((score / 100) * quizList.length);
            
            const reviewHTML = `
                <div class="quiz-review-container">
                    <h5>${currentLang === 'en' ? 'Detailed Exam Review' : 'විභාගයේ සවිස්තරාත්මක සමාලෝචනය'}</h5>
                    <div class="review-toggle-buttons">
                        <button type="button" class="review-toggle-btn active" id="btn-toggle-incorrect">${
                            currentLang === 'en' ? 'Incorrect Answers' : 'වැරදි පිළිතුරු'
                        } (${quizList.length - correctCount})</button>
                        <button type="button" class="review-toggle-btn" id="btn-toggle-correct">${
                            currentLang === 'en' ? 'Correct Answers' : 'නිවැරදි පිළිතුරු'
                        } (${correctCount})</button>
                    </div>
                    <div class="review-list" id="review-list-box">
                        <!-- Loaded dynamically -->
                    </div>
                </div>
            `;

            let actionBtnHTML = passed ? 
                `<button type="button" class="btn btn-primary" id="btn-trigger-cert-modal" ${!currentUser.mapUploaded ? 'disabled' : ''}><i class="fa-solid fa-award"></i> ${
                    currentLang === 'en' ? 'View Certificate' : 'සහතිකය නරඹන්න'
                }</button>` : 
                `<button type="button" class="btn btn-outline" id="btn-retake-quiz"><i class="fa-solid fa-rotate-right"></i> ${
                    currentLang === 'en' ? 'Retake Exam' : 'නැවත උත්සාහ කරන්න'
                }</button>`;

            quizResultsBox.innerHTML = `
                <span class="quiz-results-title">${title}</span>
                <div class="quiz-score-circle">${score}%</div>
                <p class="quiz-results-text">${desc}</p>
                ${mapUploadSectionHTML}
                ${actionBtnHTML}
                ${reviewHTML}
            `;

            // Bind triggers
            if (passed) {
                const viewBtn = document.getElementById('btn-trigger-cert-modal');
                if (viewBtn) {
                    viewBtn.addEventListener('click', openCertificate);
                }
                const mapInput = document.getElementById('lms-map-upload');
                if (mapInput) {
                    mapInput.addEventListener('change', handleMapUpload);
                }
            } else {
                document.getElementById('btn-retake-quiz').addEventListener('click', () => {
                    currentUser.examScore = null;
                    currentUser.examDate = null;
                    currentUser.userAnswers = null;
                    saveUserState();
                    quizResultsBox.style.display = 'none';
                    renderQuiz();
                });
            }

            // Bind review toggles
            const btnToggleIncorrect = document.getElementById('btn-toggle-incorrect');
            const btnToggleCorrect = document.getElementById('btn-toggle-correct');
            if (btnToggleIncorrect && btnToggleCorrect) {
                btnToggleIncorrect.addEventListener('click', () => {
                    btnToggleIncorrect.classList.add('active');
                    btnToggleCorrect.classList.remove('active');
                    renderReviewList(false);
                });
                btnToggleCorrect.addEventListener('click', () => {
                    btnToggleCorrect.classList.add('active');
                    btnToggleIncorrect.classList.remove('active');
                    renderReviewList(true);
                });
            }

            renderReviewList(false);
        };

        quizForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const quizList = lmsCourseData[currentLang].quiz;
            let correctCount = 0;
            const userAnswers = [];

            quizList.forEach((q, qIndex) => {
                const selectedOption = quizForm.querySelector(`input[name="quiz-q-${qIndex}"]:checked`);
                const ansVal = selectedOption ? parseInt(selectedOption.value) : -1;
                userAnswers.push(ansVal);
                if (ansVal === q.a) {
                    correctCount++;
                }
            });

            const finalScore = Math.round((correctCount / quizList.length) * 100);
            currentUser.examScore = finalScore;
            currentUser.userAnswers = userAnswers;
            currentUser.examDate = new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            saveUserState();
            displayQuizResults(finalScore);
        });

        // 8. CERTIFICATE GENERATION PREVIEW & BIND PRINT ENGINE
        function openCertificate() {
            const isAdmin = currentUser && currentUser.email === 'teshan.ishara@gmail.com';
            if (!isAdmin && (!currentUser || !currentUser.mapUploaded)) {
                alert(currentLang === 'en' ? "Please upload your study area map to unlock the certificate." : "කරුණාකර සහතිකය බාගත කිරීමට ප්‍රථමයෙන් ඔබ සකස් කළ සිතියම උඩුගත කරන්න.");
                return;
            }
            certStudentName.innerText = currentUser.name.toUpperCase();
            certGrade.innerText = isAdmin && currentUser.examScore === null ? "100%" : `${currentUser.examScore}%`;
            certDate.innerText = currentUser.examDate || new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            certCourseName.innerText = lmsCourseData[currentLang].title;
            
            certificateModal.style.display = 'flex';
        }

        const closeCertificate = () => {
            certificateModal.style.display = 'none';
        };

        function downloadStudentsCsv() {
            const users = JSON.parse(localStorage.getItem('lms_users')) || {};
            let csvContent = "data:text/csv;charset=utf-8,";
            csvContent += "Name,Email,Password,Exam Score,Exam Date,Study Seconds\n";
            
            // Default admin account
            csvContent += `Admin,teshan.ishara@gmail.com,Teshan123@,100%,-,-\n`;
            
            Object.values(users).forEach(user => {
                if (user.email === 'teshan.ishara@gmail.com') return;
                const score = user.examScore !== null ? `${user.examScore}%` : '-';
                const date = user.examDate || '-';
                const seconds = user.studySeconds || 0;
                const escapedName = (user.name || '').replace(/"/g, '""');
                csvContent += `"${escapedName}",${user.email},"${user.password}",${score},${date},${seconds}\n`;
            });
            
            const encodedUri = encodeURI(csvContent);
            const link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "lms_students.csv");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

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
        // Initialize ratings display
        updateAggregatedRatingDisplay();


        // Initialize language UI
        setLanguage(currentLang);
        
        if (currentUser && currentUser.enrolled) {
            enterWorkspace();
        }
}

