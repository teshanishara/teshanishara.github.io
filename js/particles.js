/* ==========================================================================
   HERO CANVAS & PARTICLES ANIMATIONS
   ========================================================================== */

export const initParticles = () => {
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
    if (heroSection) {
        heroSection.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        });
        
        heroSection.addEventListener('mouseleave', () => {
            mouse.x = null;
            mouse.y = null;
        });
    }
    
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
            ctx.fillStyle = 'rgba(16, 185, 129, 0.4)';
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
                    ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
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
                    ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
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

/* ==========================================================================
   3D SPINNING WIREFRAME EARTH (GIS GLOBE)
   ========================================================================== */
export const initGlobe = () => {
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
    
    const clients = [
        { lat: 0.12, lon: 1.41, label: "Sri Lanka" },
        { lat: 0.64, lon: -1.72, label: "USA East" },
        { lat: 0.89, lon: -0.05, label: "UK / Europe" },
        { lat: -0.58, lon: 2.63, label: "Australia" },
        { lat: 0.61, lon: -2.13, label: "USA West" }
    ];
    
    const project = (lat, lon) => {
        let radLon = lon + rotY;
        let radLat = lat;
        
        let x = radius * Math.cos(radLat) * Math.sin(radLon);
        let y = radius * Math.sin(radLat);
        let z = radius * Math.cos(radLat) * Math.cos(radLon);
        
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
        glowGradient.addColorStop(0, 'rgba(8, 11, 17, 0)');
        glowGradient.addColorStop(0.8, 'rgba(16, 185, 129, 0.02)');
        glowGradient.addColorStop(1, 'rgba(16, 185, 129, 0.12)');
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();
        
        // Draw grid outline circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(16, 185, 129, 0.25)';
        ctx.lineWidth = 1.3;
        ctx.stroke();
        
        // Draw meridians
        const meridianCount = 10;
        for (let i = 0; i < meridianCount; i++) {
            const lon = (i / meridianCount) * Math.PI * 2;
            ctx.beginPath();
            for (let lat = -Math.PI / 2; lat <= Math.PI / 2; lat += 0.06) {
                const pt = project(lat, lon);
                if (pt.z >= 0) {
                    if (lat === -Math.PI / 2) {
                        ctx.moveTo(pt.x, pt.y);
                    } else {
                        ctx.lineTo(pt.x, pt.y);
                    }
                }
            }
            ctx.strokeStyle = 'rgba(16, 185, 129, 0.1)';
            ctx.lineWidth = 0.75;
            ctx.stroke();
        }
        
        // Draw parallels
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
            ctx.strokeStyle = 'rgba(16, 185, 129, 0.1)';
            ctx.lineWidth = 0.75;
            ctx.stroke();
        }
        
        // Draw client points
        clients.forEach(client => {
            const pt = project(client.lat, client.lon);
            if (pt.z >= 0) {
                const pulse = Math.abs(Math.sin(Date.now() * 0.0025 + client.lat * 4)) * 5 + 3;
                
                ctx.beginPath();
                ctx.arc(pt.x, pt.y, pulse, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(52, 211, 153, 0.22)';
                ctx.fill();
                
                ctx.beginPath();
                ctx.arc(pt.x, pt.y, 3.5, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(16, 185, 129, 0.95)';
                ctx.fill();
                
                if (isHovered) {
                    ctx.fillStyle = 'rgba(248, 250, 252, 0.85)';
                    ctx.font = '500 10px Inter';
                    ctx.fillText(client.label, pt.x + 8, pt.y + 3);
                }
            }
        });
        
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

/* ==========================================================================
   SCROLL-LINKED FLOATING BUBBLES
   ========================================================================== */
export const initScrollBubbles = () => {
    let lastScrollTop = 0;
    let lastBubbleTime = 0;
    const bubbleThrottle = 80;
    const scrollDistThreshold = 10;

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
        if (window.innerWidth <= 1366) return;
        
        const bubble = document.createElement('div');
        bubble.classList.add('scroll-bubble');
        
        const size = Math.random() * 20 + 8;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        
        const startX = 35 + Math.random() * 40;
        
        const bottomOffset = window.innerHeight * 0.12;
        const textHeight = window.innerHeight * 0.53;
        const startY = window.innerHeight - bottomOffset - Math.random() * textHeight;
        
        bubble.style.left = `${startX}px`;
        bubble.style.top = `${startY}px`;
        
        const colors = [
            { main: 'rgba(16, 185, 129, 0.35)', glow: 'rgba(16, 185, 129, 0.4)' }, // Emerald
            { main: 'rgba(52, 211, 153, 0.3)', glow: 'rgba(52, 211, 153, 0.35)' }, // Mint
            { main: 'rgba(5, 150, 105, 0.3)', glow: 'rgba(5, 150, 105, 0.35)' }, // Forest
            { main: 'rgba(110, 231, 183, 0.35)', glow: 'rgba(110, 231, 183, 0.4)' }  // Aquamarine
        ];
        
        const color = colors[Math.floor(Math.random() * colors.length)];
        bubble.style.setProperty('--bubble-color', color.main);
        bubble.style.setProperty('--bubble-glow', color.glow);
        
        const dx = Math.random() * 130 + 70;
        const dy = (Math.random() - 0.5) * 120;
        bubble.style.setProperty('--dx', `${dx}px`);
        bubble.style.setProperty('--dy', `${dy}px`);
        
        document.body.appendChild(bubble);
        
        setTimeout(() => {
            bubble.remove();
        }, 3000);
    };
};
