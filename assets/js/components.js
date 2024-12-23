// components.js
document.addEventListener('DOMContentLoaded', async function() {
    // Load header
    const headerTemplate = document.createElement('template');
    const currentPage = document.body.className.replace('-page', '');
    const isHomePage = currentPage === 'home';
    
    headerTemplate.innerHTML = `
        <header class="site-header">
            <div class="container">
                <div class="header-wrapper">
                    ${!isHomePage ? `
                        <a href="/" class="logo">
                            <img src="assets/images/logo.png" 
                                 alt="MycoBridge Network Logo" 
                                 height="45" 
                                 onerror="this.src='/api/placeholder/135/45'; this.onerror=null;">
                        </a>
                    ` : ''}
                    <ul class="nav-menu">
                        <li><a href="index.html" class="nav-link" data-nav="home">Home</a></li>
                        <li><a href="about.html" class="nav-link" data-nav="about">About</a></li>
                        <li><a href="team.html" class="nav-link" data-nav="team">Our Team</a></li>
                        <li><a href="research.html" class="nav-link" data-nav="research">Research</a></li>
                        <li><a href="donate.html" class="nav-link" data-nav="donate">Support Us</a></li>
                        <li><a href="contact.html" class="nav-link" data-nav="contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </header>
    `;

    // Rest of the code remains exactly the same
    const footerTemplate = document.createElement('template');
    footerTemplate.innerHTML = `
        <footer class="site-footer">
            <div class="container">
                <div class="footer-grid grid grid-3">
                    <div class="footer-section">
                        <h4>Contact Us</h4>
                        <p>Email: info@mycobridge.org</p>
                        <p>Phone: (555) 123-4567</p>
                        <p>Address: Research Drive<br>Innovation Center<br>NC 27401</p>
                    </div>
                    <div class="footer-section">
                        <h4>Quick Links</h4>
                        <ul class="footer-links">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="team.html">Our Team</a></li>
                            <li><a href="research.html">Research</a></li>
                            <li><a href="donate.html">Support Us</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h4>Follow Us</h4>
                        <div class="social-links">
                            <a href="https://twitter.com/mycobridge" 
                               target="_blank" 
                               rel="noopener" 
                               aria-label="Follow us on Twitter">
                                <svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                                </svg>
                            </a>
                            <a href="https://linkedin.com/company/mycobridge" 
                               target="_blank" 
                               rel="noopener" 
                               aria-label="Connect with us on LinkedIn">
                                <svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                                    <rect x="2" y="9" width="4" height="12"/>
                                    <circle cx="4" cy="4" r="2"/>
                                </svg>
                            </a>
                            <a href="https://instagram.com/mycobridge" 
                               target="_blank" 
                               rel="noopener" 
                               aria-label="Follow us on Instagram">
                                <svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                                    <circle cx="12" cy="12" r="3"/>
                                    <circle cx="17" cy="7" r="1.5"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; <span id="current-year">2024</span> MycoBridge Network. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    `;

    // Insert header at the start of body
    document.body.insertBefore(headerTemplate.content, document.body.firstChild);

    // Insert footer before the scripts at the end of body
    const scripts = document.body.querySelectorAll('script');
    const lastScript = scripts[scripts.length - 1];
    document.body.insertBefore(footerTemplate.content, lastScript);

    // Set active nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('data-nav') === currentPage) {
            link.classList.add('active');
        }
    });

    // Update copyright year
    document.getElementById('current-year').textContent = new Date().getFullYear();
});