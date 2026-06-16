/* ==========================================================================
   PORTFOLIO INTERACTIVE LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // Initialize custom GIS Globe and Data Particles
    initParticles();
    initGlobe();
    initScrollBubbles();

    // --- STICKY NAV ON SCROLL ---
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

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
    });

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
        
        // Vertical position is distributed along the viewport center height (25vh to 75vh)
        const startY = window.innerHeight * 0.25 + Math.random() * (window.innerHeight * 0.5);
        
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
