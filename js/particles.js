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
    
    let radius = Math.min(width, height) * 0.46;
    let centerX = width / 2;
    let centerY = height / 2;
    
    let rotX = 0.35; // Tilt
    let rotY = 0;    // Y rotation
    let baseSpeed = 0.0035;
    let rotationSpeed = baseSpeed;
    let isHovered = false;
    
    // Dragging Interaction
    let isDragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;
    
    window.addEventListener('resize', () => {
        if (!canvas.offsetWidth) return;
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
        radius = Math.min(width, height) * 0.46;
        centerX = width / 2;
        centerY = height / 2;
    });
    
    canvas.addEventListener('mouseenter', () => {
        isHovered = true;
        rotationSpeed = baseSpeed * 2.5;
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

    // Simplified Continent Boundaries (Coordinates in degrees)
    const eurasia = [
        [70, -10], [72, 20], [75, 60], [70, 90], [70, 120], [60, 160], [50, 140], [35, 140], [20, 115],
        [10, 105], [10, 80], [25, 65], [15, 45], [12, 43], [30, 32], [40, 26], [36, 15], [40, -10]
    ];
    const africa = [
        [36, 10], [30, 32], [15, 39], [5, 48], [-15, 40], [-34, 18], [-15, 12], [5, 10], [5, -12], [15, -17], [32, -15], [37, 10]
    ];
    const northAmerica = [
        [70, -160], [75, -120], [70, -80], [60, -60], [50, -50], [40, -75], [25, -80], [15, -90],
        [15, -100], [25, -110], [35, -120], [45, -125], [55, -135], [60, -165]
    ];
    const southAmerica = [
        [12, -72], [5, -53], [-5, -36], [-20, -40], [-40, -60], [-55, -70], [-45, -75], [-20, -70], [-5, -80]
    ];
    const australia = [
        [-22, 114], [-12, 131], [-11, 142], [-28, 153], [-35, 138], [-35, 117]
    ];
    const greenland = [
        [80, -65], [83, -30], [70, -20], [60, -45], [73, -60]
    ];
    const antarctica = [
        [-70, -180], [-65, -120], [-68, -60], [-72, 0], [-68, 60], [-65, 120], [-70, 180]
    ];

    const landmasses = [
        eurasia.map(pt => [pt[0] * Math.PI / 180, pt[1] * Math.PI / 180]),
        africa.map(pt => [pt[0] * Math.PI / 180, pt[1] * Math.PI / 180]),
        northAmerica.map(pt => [pt[0] * Math.PI / 180, pt[1] * Math.PI / 180]),
        southAmerica.map(pt => [pt[0] * Math.PI / 180, pt[1] * Math.PI / 180]),
        australia.map(pt => [pt[0] * Math.PI / 180, pt[1] * Math.PI / 180]),
        greenland.map(pt => [pt[0] * Math.PI / 180, pt[1] * Math.PI / 180]),
        antarctica.map(pt => [pt[0] * Math.PI / 180, pt[1] * Math.PI / 180])
    ];
    
    const clients = [
        { lat: 7.87 * Math.PI / 180, lon: 80.77 * Math.PI / 180, label: "Sri Lanka" },
        { lat: 40.71 * Math.PI / 180, lon: -74.00 * Math.PI / 180, label: "USA East" },
        { lat: 51.50 * Math.PI / 180, lon: -0.12 * Math.PI / 180, label: "UK / Europe" },
        { lat: -33.86 * Math.PI / 180, lon: 151.20 * Math.PI / 180, label: "Australia" },
        { lat: 37.77 * Math.PI / 180, lon: -122.41 * Math.PI / 180, label: "USA West" }
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
        glowGradient.addColorStop(0, 'rgba(11, 15, 25, 0)');
        glowGradient.addColorStop(0.8, 'rgba(59, 130, 246, 0.03)');
        glowGradient.addColorStop(1, 'rgba(16, 185, 129, 0.08)');
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();
        
        // Draw grid outline circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.25)';
        ctx.lineWidth = 1.3;
        ctx.stroke();
        
        // Draw meridians
        const meridianCount = 10;
        for (let i = 0; i < meridianCount; i++) {
            const lon = (i / meridianCount) * Math.PI * 2;
            ctx.beginPath();
            for (let lat = -Math.PI / 2; lat <= Math.PI / 2; lat += 0.06) {
                const pt = project(lat, lon);
                if (pt.z >= -10) {
                    if (lat === -Math.PI / 2) {
                        ctx.moveTo(pt.x, pt.y);
                    } else {
                        ctx.lineTo(pt.x, pt.y);
                    }
                }
            }
            ctx.strokeStyle = 'rgba(59, 130, 246, 0.08)';
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
                if (pt.z >= -10) {
                    if (lon === -Math.PI) {
                        ctx.moveTo(pt.x, pt.y);
                    } else {
                        ctx.lineTo(pt.x, pt.y);
                    }
                }
            }
            ctx.strokeStyle = 'rgba(59, 130, 246, 0.08)';
            ctx.lineWidth = 0.75;
            ctx.stroke();
        }

        // Draw Continent Boundaries
        landmasses.forEach(polygon => {
            ctx.beginPath();
            let first = true;
            polygon.forEach(pt => {
                const projected = project(pt[0], pt[1]);
                if (projected.z >= -10) {
                    if (first) {
                        ctx.moveTo(projected.x, projected.y);
                        first = false;
                    } else {
                        ctx.lineTo(projected.x, projected.y);
                    }
                }
            });
            ctx.closePath();
            ctx.strokeStyle = 'rgba(16, 185, 129, 0.45)';
            ctx.lineWidth = 1.3;
            ctx.stroke();
            
            // Draw mesh data nodes
            polygon.forEach(pt => {
                const projected = project(pt[0], pt[1]);
                if (projected.z >= 0) {
                    ctx.beginPath();
                    ctx.arc(projected.x, projected.y, 2, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(59, 130, 246, 0.8)';
                    ctx.fill();
                }
            });
        });
        
        // Draw client points
        clients.forEach(client => {
            const pt = project(client.lat, client.lon);
            if (pt.z >= 0) {
                const pulse = Math.abs(Math.sin(Date.now() * 0.0025 + client.lat * 4)) * 6 + 3;
                
                ctx.beginPath();
                ctx.arc(pt.x, pt.y, pulse, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(52, 211, 153, 0.18)';
                ctx.fill();
                
                ctx.beginPath();
                ctx.arc(pt.x, pt.y, 4, 0, Math.PI * 2);
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
