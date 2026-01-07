class CustomNavbar extends HTMLElement {
    connectedCallback() {
        const path = window.location.pathname.toLowerCase();
        const isSubpage = path.includes('/pages/');
        const assetPrefix = isSubpage ? '../' : '';
        const logoSrc = `${assetPrefix}assets/images/logo.png`;
        const homeHref = `${assetPrefix}index.html`;

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                    background-color: transparent;
                    backdrop-filter: none;
                    -webkit-backdrop-filter: none;
                    box-shadow: none;
                    border-bottom: 1px solid transparent;
                    transition: background-color 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease;
                }
                :host(.scrolled) {
                    background-color: rgba(255, 255, 255, 0.98);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
                    border-bottom: 1px solid rgba(0, 0, 0, 0.03);
                }
                nav {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 1.5rem 2rem;
                    display: grid;
                    grid-template-columns: 1fr auto 1fr;
                    align-items: center;
                }
                .logo {
                    display: inline-flex;
                    align-items: center;
                    text-decoration: none;
                    grid-column: 2;
                    justify-self: center;
                }

                .logo img {
                    height: 64px;
                    width: auto;
                    display: block;
                }
.nav-links {
                    display: flex;
                    gap: 2rem;
                    grid-column: 1;
                    justify-self: start;
                }
                
                .nav-links a {
                    color: #333;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.3s ease;
                    position: relative;
                }
                
                .nav-links a:hover {
                    color: #000;
                }
                
                .nav-links a::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: #000;
                    transition: width 0.3s ease;
                }
                
                .nav-links a:hover::after {
                    width: 100%;
                }
                
                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    cursor: pointer;
                    grid-column: 3;
                    justify-self: end;
                }
                
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }
                    
                    .mobile-menu-btn {
                        display: block;
                    }

                    .logo img {
                        height: 52px;
                    }
                }
            </style>
            
            <nav>
                <a href="${homeHref}" class="logo" aria-label="Inicio">
                    <img src="${logoSrc}" alt="RS Visuals logo">
                </a>
                <button class="mobile-menu-btn">
                    <i data-feather="menu"></i>
                </button>
            </nav>
        `;

        this.handleScroll = () => {
            if (window.scrollY > 10) {
                this.classList.add('scrolled');
            } else {
                this.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', this.handleScroll, { passive: true });
        this.handleScroll();
    }

    disconnectedCallback() {
        if (this.handleScroll) {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
}

customElements.define('custom-navbar', CustomNavbar);
