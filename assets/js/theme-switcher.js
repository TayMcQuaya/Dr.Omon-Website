// theme-switcher.js

document.addEventListener('DOMContentLoaded', () => {
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Create and append theme toggle button
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.setAttribute('aria-label', 'Toggle dark mode');
    themeToggle.innerHTML = `
        <svg class="theme-toggle-icon" viewBox="0 0 24 24" width="24" height="24">
            <path class="sun" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            <path class="moon" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
    `;

    document.body.appendChild(themeToggle);

    // Toggle theme function
    const toggleTheme = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    // Add click event listener
    themeToggle.addEventListener('click', toggleTheme);

    // Add styles for the toggle button
    const style = document.createElement('style');
    style.textContent = `
        .theme-toggle {
            position: fixed;
            bottom: 1.5rem;
            left: 1.5rem;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: var(--color-primary-500);
            border: none;
            color: var(--color-white);
            cursor: pointer;
            box-shadow: var(--shadow);
            z-index: var(--z-fixed);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all var(--transition-fast);
        }

        .theme-toggle:hover {
            transform: translateY(-3px);
            box-shadow: var(--shadow-lg);
        }

        .theme-toggle-icon {
            stroke: currentColor;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
            fill: none;
        }

        [data-theme="dark"] .theme-toggle-icon .sun { display: none; }
        [data-theme="light"] .theme-toggle-icon .moon { display: none; }
    `;
    
    document.head.appendChild(style);
});