
// Enhanced Portfolio JavaScript with Dark Theme Features

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initLoadingScreen();
    initNavigation();
    initScrollEffects();
    initAnimations();
    initContactForm();
    initParticles();
    initTypingEffect();
    initTerminalAnimation();
    initMobileEnhancements();
    initWhatsAppIntegration();
});

// Loading Screen
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loading');
    const loadingText = document.querySelector('.loading-text');
    
    const messages = [
        'Initializing Portfolio...',
        'Loading Skills...',
        'Connecting Services...',
        'Ready to Launch!'
    ];
    
    let messageIndex = 0;
    
    const changeMessage = setInterval(() => {
        if (messageIndex < messages.length - 1) {
            messageIndex++;
            loadingText.textContent = messages[messageIndex];
        } else {
            clearInterval(changeMessage);
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }, 1000);
        }
    }, 800);
}

// Navigation
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');

    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 255, 136, 0.1)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.9)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Scroll Effects
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add special effects for different elements
                if (entry.target.classList.contains('service-card')) {
                    entry.target.style.animationDelay = `${Math.random() * 0.5}s`;
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .portfolio-item, .tech-item, .contact-method');
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const particles = document.querySelector('.particles');
        
        if (hero && particles) {
            particles.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// Animations
function initAnimations() {
    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Service card interactions
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.background = 'var(--card-bg)';
        });
    });

    // Portfolio item hover effects
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        const overlay = item.querySelector('.portfolio-overlay');
        
        item.addEventListener('mouseenter', function() {
            overlay.style.opacity = '1';
        });
        
        item.addEventListener('mouseleave', function() {
            overlay.style.opacity = '0';
        });
    });
}

// Contact Form
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    const statusDot = document.querySelector('.status-dot');
    const statusText = document.querySelector('.status-text');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Change status to sending
            statusDot.style.background = '#ff8800';
            statusText.textContent = 'Sending...';
            
            // Get form data
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const subject = this.querySelector('input[type="text"]:nth-of-type(2)').value;
            const message = this.querySelector('textarea').value;
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                statusDot.style.background = '#ff0088';
                statusText.textContent = 'Error';
                alert('Please fill in all fields');
                return;
            }
            
            // Simulate sending delay
            setTimeout(() => {
                statusDot.style.background = 'var(--accent-primary)';
                statusText.textContent = 'Sent!';
                alert('Thank you for your message! I\'ll get back to you soon.');
                this.reset();
                
                // Reset status after 3 seconds
                setTimeout(() => {
                    statusText.textContent = 'Ready';
                }, 3000);
            }, 2000);
        });
    }
}

// Particles Effect
function initParticles() {
    const particles = document.querySelector('.particles');
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.background = 'var(--accent-primary)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.opacity = Math.random() * 0.5;
        particle.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite`;
        
        particles.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 7000);
    }
    
    // Create particles periodically
    setInterval(createParticle, 2000);
}

// Typing Effect
function initTypingEffect() {
    const typingText = document.querySelector('.typing-text');
    
    if (typingText) {
        const texts = ['Hello World', 'Welcome', 'Let\'s Build', 'Innovation'];
        let currentText = 0;
        let currentChar = 0;
        let isDeleting = false;
        
        function typeWriter() {
            const current = texts[currentText];
            
            if (isDeleting) {
                typingText.textContent = current.substring(0, currentChar - 1);
                currentChar--;
            } else {
                typingText.textContent = current.substring(0, currentChar + 1);
                currentChar++;
            }
            
            let typeSpeed = isDeleting ? 50 : 100;
            
            if (!isDeleting && currentChar === current.length) {
                typeSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && currentChar === 0) {
                isDeleting = false;
                currentText = (currentText + 1) % texts.length;
                typeSpeed = 500; // Pause before next word
            }
            
            setTimeout(typeWriter, typeSpeed);
        }
        
        // Start typing effect after loading
        setTimeout(typeWriter, 3000);
    }
}

// Terminal Animation
function initTerminalAnimation() {
    const terminalContent = document.querySelector('.terminal-content');
    
    if (terminalContent) {
        const commands = [
            '$ whoami',
            'developer',
            '$ ls skills/',
            'javascript  react  nodejs  wordpress  design',
            '$ cat mission.txt',
            'Building amazing digital experiences...',
            '$ status',
            'Ready for new projects! 🚀'
        ];
        
        let commandIndex = 0;
        
        function showNextCommand() {
            if (commandIndex < commands.length) {
                const commandLine = document.createElement('div');
                commandLine.textContent = commands[commandIndex];
                commandLine.style.color = commandIndex % 2 === 0 ? 'var(--accent-primary)' : 'var(--text-secondary)';
                commandLine.style.marginBottom = '8px';
                commandLine.style.opacity = '0';
                commandLine.style.animation = 'fadeInUp 0.5s ease forwards';
                
                terminalContent.appendChild(commandLine);
                commandIndex++;
                
                setTimeout(showNextCommand, 1500);
            }
        }
        
        // Start terminal animation
        setTimeout(showNextCommand, 2000);
    }
}

// Utility Functions
function animateNumber(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateNumber() {
        start += increment;
        if (start >= target) {
            element.textContent = target;
        } else {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateNumber);
        }
    }
    
    updateNumber();
}

// Add floating animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Smooth scroll polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/iamdustan/smoothscroll@master/dist/smoothscroll.min.js';
    document.head.appendChild(script);
}

// Performance optimization
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Preload critical images
    const criticalImages = [
        // Add any critical image URLs here
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});

// Mobile Enhancements
function initMobileEnhancements() {
    // Detect mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        document.body.classList.add('mobile-device');
        
        // Enhanced touch feedback
        const touchElements = document.querySelectorAll('.btn, .service-card, .portfolio-item, .social-link');
        
        touchElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            });
            
            element.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.style.transform = '';
                }, 100);
            });
        });
        
        // Smooth scroll for mobile navigation
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 60;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Optimize animations for mobile
        const animatedElements = document.querySelectorAll('.service-card, .portfolio-item');
        animatedElements.forEach(element => {
            element.style.willChange = 'transform';
        });
    }
}

// WhatsApp Integration
function initWhatsAppIntegration() {
    const whatsappLink = document.querySelector('.whatsapp-link');
    const whatsappPhone = '+212723717826';
    
    if (whatsappLink) {
        whatsappLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create a more engaging message
            const message = encodeURIComponent('Hello Mouad! I found your portfolio and I\'m interested in discussing a project. 🚀');
            const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${message}`;
            
            // Add click animation
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = '';
                window.open(whatsappUrl, '_blank');
            }, 200);
        });
    }
    
    // Add floating WhatsApp button for mobile
    if (window.innerWidth <= 768) {
        createFloatingWhatsApp();
    }
}

// Floating WhatsApp Button
function createFloatingWhatsApp() {
    const floatingBtn = document.createElement('a');
    floatingBtn.href = 'https://wa.me/212723717826?text=Hello%20Mouad!%20I%20found%20your%20portfolio%20and%20I%27m%20interested%20in%20discussing%20a%20project.%20🚀';
    floatingBtn.className = 'floating-whatsapp';
    floatingBtn.target = '_blank';
    floatingBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .floating-whatsapp {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.5rem;
            text-decoration: none;
            z-index: 1000;
            box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
            animation: whatsapp-bounce 2s infinite;
            transition: all 0.3s ease;
        }
        
        .floating-whatsapp:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 30px rgba(37, 211, 102, 0.6);
        }
        
        @keyframes whatsapp-bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        
        @media (max-width: 480px) {
            .floating-whatsapp {
                bottom: 15px;
                right: 15px;
                width: 55px;
                height: 55px;
                font-size: 1.3rem;
            }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(floatingBtn);
}

// Error handling for animations
window.addEventListener('error', function(e) {
    console.warn('Animation error caught:', e.message);
});
