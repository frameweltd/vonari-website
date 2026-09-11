function brandMarkSVG(cls) {
  return `<svg class="${cls || ''}" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M6 30 C10 20, 20 14, 28 18 C24 22, 22 27, 24 32 C16 30, 9 33, 6 30Z" fill="#C89B3C"/>
    <path d="M40 26 C46 22, 54 22, 58 27 C53 27, 48 30, 46 34 C43 30, 41 28, 40 26Z" fill="#C89B3C"/>
    <path d="M4 36 L60 20" stroke="#E4C878" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M52 17 L60 20 L53 24" stroke="#E4C878" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M18 40 L30 34 L42 40 L30 46 Z" fill="#0B1E3D" stroke="#C89B3C" stroke-width="1.4"/>
    <path d="M30 46 L30 52" stroke="#C89B3C" stroke-width="1.4"/>
    <circle cx="30" cy="52.5" r="1.6" fill="#C89B3C"/>
  </svg>`;
}

function siteHeader(active) {
  const items = [
    ['index.html', 'Home'],
    ['about.html', 'About Us'],
    ['services.html', 'Services'],
    ['destinations.html', 'Destinations'],
    ['contact.html', 'Contact']
  ];
  const links = items.map(([href, label]) =>
    `<a href="${href}"${active === href ? ' aria-current="page"' : ''}>${label}</a>`
  ).join('\n');

  return `
  <header class="site-header">
    <div class="header-inner">
      <a href="index.html" class="brand" aria-label="Vonari Educational Agency, home">
        ${brandMarkSVG('brand-mark')}
        <span class="brand-text">
          <span class="name">Vonari</span>
          <span class="sub">EDUCATIONAL AGENCY</span>
        </span>
      </a>
      <nav class="main-nav" aria-label="Primary">
        ${links}
        <a href="apply.html" class="nav-cta">Start Your Application</a>
      </nav>
      <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
    </div>
  </header>`;
}

function siteFooter() {
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="brand" aria-label="Vonari Educational Agency, home">
            ${brandMarkSVG('brand-mark')}
            <span class="brand-text">
              <span class="name">Vonari</span>
              <span class="sub">EDUCATIONAL AGENCY</span>
            </span>
          </a>
          <p>Guiding students and professionals from Kabarnet, Kenya into world-class study and work opportunities in the USA and Canada.</p>
          <div class="footer-social">
            <a href="#" aria-label="Vonari Educational Agency on Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a>
            <a href="#" aria-label="Vonari Educational Agency on Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z"/></svg></a>
            <a href="#" aria-label="Vonari Educational Agency on TikTok"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 3c.3 2 1.7 3.6 4 4v3c-1.5 0-2.9-.4-4-1.2V15a5 5 0 1 1-5-5c.3 0 .7 0 1 .1v3.1a2 2 0 1 0 2 2V3h2z"/></svg></a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><a href="about.html">About Us</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="destinations.html">Destinations</a></li>
            <li><a href="apply.html">Apply / Get Started</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="services.html#university">University Selection</a></li>
            <li><a href="services.html#visa">Visa Application</a></li>
            <li><a href="services.html#recruitment">Recruitment &amp; Placement</a></li>
            <li><a href="services.html#scholarship">Scholarship Guidance</a></li>
            <li><a href="services.html#airport">Airport Pick Up</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Reach Us</h4>
          <ul>
            <li>Kabarnet, Baringo County, Kenya</li>
            <li>+254 793 708 295</li>
            <li>+1 587 893 5030</li>
            <li>hello@vonarieducation.com</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; 2026 Vonari Educational Agency. All rights reserved.</span>
        <span>Let Your Dreams Take Off</span>
      </div>
    </div>
  </footer>`;
}

document.addEventListener('DOMContentLoaded', function () {
  const headerMount = document.getElementById('site-header');
  const footerMount = document.getElementById('site-footer');
  if (headerMount) headerMount.outerHTML = siteHeader(headerMount.dataset.active);
  if (footerMount) footerMount.outerHTML = siteFooter();
});
