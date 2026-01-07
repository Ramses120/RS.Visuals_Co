class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: var(--primary);
                    color: white;
                    padding: 5rem 2rem;
                    position: relative;
                    overflow: hidden;
                }

                :host:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 5px;
                    background: linear-gradient(90deg, var(--accent), gold);
                }
.footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                }
                .footer-section h3 {
                    font-family: 'Luthon', 'Playfair Display', serif;
                    font-size: 1.5rem;
                    margin-bottom: 2rem;
                    color: white;
                    position: relative;
                    display: inline-block;
                    padding-bottom: 10px;
                }

                .footer-section h3:after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 40px;
                    height: 2px;
                    background-color: var(--accent);
                }
.footer-section p, .footer-section a {
                    color: #aaa;
                    margin-bottom: 0.75rem;
                    display: block;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }
                
                .footer-section a:hover {
                    color: #fff;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                }
                .social-links a {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background-color: #222;
                    color: #fff;
                    transition: all 0.3s ease;
                }
                
                .social-links svg {
                    width: 20px;
                    height: 20px;
                }
.social-links a:hover {
                    background-color: #333;
                    transform: translateY(-3px);
                }
                
                .copyright {
                    text-align: center;
                    margin-top: 3rem;
                    padding-top: 2rem;
                    border-top: 1px solid #333;
                    color: #666;
                    font-size: 0.875rem;
                }
            </style>
            
            <div class="footer-container">
                <div class="footer-section">
                    <h3>RS.Visuals_co </h3>
                    <p>Servicios de fotografia y video  para toda ocasion. Capturando momentos que duran toda la vida.</p>
</div>
<div class="footer-section">
                    <h3>Sigueme</h3>
<div class="social-links">
                        <a href="https://instagram.com" target="_blank" aria-label="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        <a href="https://whatsapp.com" target="_blank" aria-label="WhatsApp">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            </svg>
                        </a>
                        <a href="https://facebook.com" target="_blank" aria-label="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
</div>
                </div>
            </div>
            
            <div class="copyright">
                &copy; ${new Date().getFullYear()} RS.Visuals_co All rights reserved.
            </div>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);
