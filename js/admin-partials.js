function adminGuard() {
  if (!VonariStore.isLoggedIn()) {
    window.location.href = 'index.html';
  }
}

function adminSidebar(active) {
  const items = [
    ['dashboard.html', 'Dashboard', '<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>'],
    ['inquiries.html', 'Inquiries', '<path d="M4 4h16v13a2 2 0 0 1-2 2H8l-4 4V4Z"/>'],
    ['content.html', 'Content', '<path d="M4 19.5V6a2 2 0 0 1 2-2h12a1 1 0 0 1 1 1v13"/><path d="M6.5 22H18a2 2 0 0 0 2-2v-1H6.5a2.5 2.5 0 0 0 0 5"/>'],
  ];
  const links = items.map(([href, label, icon]) =>
    `<li><a href="${href}"${active === href ? ' class="active"' : ''}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">${icon}</svg>${label}</a></li>`
  ).join('');

  return `
  <aside class="admin-sidebar">
    <div class="brand">
      <svg viewBox="0 0 64 64" fill="none" width="34" height="34" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 30 C10 20, 20 14, 28 18 C24 22, 22 27, 24 32 C16 30, 9 33, 6 30Z" fill="#C89B3C"/>
        <path d="M40 26 C46 22, 54 22, 58 27 C53 27, 48 30, 46 34 C43 30, 41 28, 40 26Z" fill="#C89B3C"/>
        <path d="M4 36 L60 20" stroke="#E4C878" stroke-width="2.4" stroke-linecap="round"/>
        <path d="M18 40 L30 34 L42 40 L30 46 Z" fill="#0B1E3D" stroke="#C89B3C" stroke-width="1.4"/>
      </svg>
      <span class="brand-text" style="margin-top:8px;">
        <span class="name" style="color:#E4C878; font-size:1.1rem;">Vonari</span>
        <span class="sub" style="font-size:0.6rem;">ADMIN DASHBOARD</span>
      </span>
    </div>
    <ul class="admin-nav">${links}</ul>
    <div class="admin-logout">
      <a href="../index.html" style="display:block; font-size:0.85rem; margin-bottom:10px; color: rgba(247,244,236,0.6);">&larr; View public site</a>
      <button id="admin-logout-btn" class="btn btn-outline btn-block" style="font-size:0.85rem; padding:10px;">Log Out</button>
    </div>
  </aside>`;
}

document.addEventListener('DOMContentLoaded', function () {
  const mount = document.getElementById('admin-sidebar');
  if (mount) {
    mount.outerHTML = adminSidebar(mount.dataset.active);
    document.getElementById('admin-logout-btn').addEventListener('click', function () {
      VonariStore.logout();
      window.location.href = 'index.html';
    });
  }
});
