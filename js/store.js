/* ============================================================
   VONARI — Mock data layer for PREVIEW PURPOSES ONLY.
   In the real build this is replaced by a real database
   (e.g. Postgres via Prisma) — see the deployment guide.
   Uses localStorage purely so the admin dashboard demo feels
   persistent across page loads in this preview.
   ============================================================ */

const VonariStore = (function () {
  const KEY = 'vonari_preview_submissions_v1';
  const CONTENT_KEY = 'vonari_preview_content_v1';
  const AUTH_KEY = 'vonari_preview_admin_auth_v1';

  const seedSubmissions = [
    { id: 'S-1042', type: 'Application', name: 'Grace Chebet', email: 'grace.chebet@example.com', phone: '+254 712 345 678', country: 'Canada', service: 'University Selection', contactMethod: 'WhatsApp', message: 'Interested in computer science programs starting Fall 2027.', status: 'New', notes: [], date: '2026-09-05T09:14:00Z' },
    { id: 'S-1041', type: 'Application', name: 'Kiplangat Rotich', email: 'kiplangat.r@example.com', phone: '+254 722 981 004', country: 'USA', service: 'Visa Application', contactMethod: 'Phone Call', message: 'Already admitted, need help with F1 visa interview prep.', status: 'In Progress', notes: ['Docs received 4 Sep', 'Mock interview booked for 10 Sep'], date: '2026-09-04T14:02:00Z' },
    { id: 'S-1040', type: 'Contact', name: 'Faith Jepkosgei', email: 'faith.j@example.com', phone: '+254 700 112 233', country: '—', service: 'General Inquiry', contactMethod: 'Email', message: 'Do you help with scholarship applications for Masters programs?', status: 'Contacted', notes: ['Replied with scholarship guidance service info'], date: '2026-09-02T11:30:00Z' },
    { id: 'S-1039', type: 'Application', name: 'Brian Kiptoo', email: 'brian.kiptoo@example.com', phone: '+254 733 556 210', country: 'Canada', service: 'Recruitment & Placement', contactMethod: 'WhatsApp', message: 'Looking for placement in a diploma nursing program.', status: 'Completed', notes: ['Placed at Confederation College, Jan intake'], date: '2026-08-28T08:45:00Z' },
    { id: 'S-1038', type: 'Contact', name: 'Cherotich Naomi', email: 'naomi.c@example.com', phone: '+254 745 990 112', country: 'USA', service: 'Airport Pick Up', contactMethod: 'Phone Call', message: 'Landing at JFK on the 20th, need pick up arranged.', status: 'New', notes: [], date: '2026-08-27T16:20:00Z' }
  ];

  const defaultContent = {
    heroTagline: 'Let Your Dreams Take Off',
    stats: [
      { number: '500+', label: 'Students Placed' },
      { number: '30+', label: 'Partner Universities' },
      { number: '2', label: 'Countries Served' },
      { number: '95%', label: 'Visa Success Rate' }
    ],
    whyChooseUs: [
      { title: 'Bridging you to world-class education', body: 'We connect you directly to accredited universities and colleges across the USA and Canada, matched to your goals and budget.' },
      { title: 'Transparent reporting, always', body: 'You will always know exactly where your application stands — no vague updates, no disappearing acts.' },
      { title: 'Ongoing communication', body: 'From your first consultation to your arrival abroad, we stay in touch at every milestone.' },
      { title: 'Minimizing your administrative workload', body: 'We handle the heavy lifting on paperwork and coordination with institutions, so you don\u2019t have to.' }
    ],
    testimonials: [
      { quote: 'Vonari made a process that felt impossible feel completely manageable. Every question I had was answered honestly.', name: 'Diana M.', where: 'Placed in Toronto, Canada' },
      { quote: 'From my first visit to their Kabarnet office to landing in New York, they were with me every step.', name: 'Emmanuel K.', where: 'Placed in New York, USA' },
      { quote: 'Transparent, patient, and genuinely invested in getting me into the right program, not just any program.', name: 'Sharon A.', where: 'Placed in Vancouver, Canada' }
    ]
  };

  function read() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    localStorage.setItem(KEY, JSON.stringify(seedSubmissions));
    return seedSubmissions.slice();
  }

  function write(data) { localStorage.setItem(KEY, JSON.stringify(data)); }

  function readContent() {
    try {
      const raw = localStorage.getItem(CONTENT_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    localStorage.setItem(CONTENT_KEY, JSON.stringify(defaultContent));
    return defaultContent;
  }

  function writeContent(data) { localStorage.setItem(CONTENT_KEY, JSON.stringify(data)); }

  function addSubmission(entry) {
    const all = read();
    const id = 'S-' + (2000 + Math.floor(Math.random() * 900));
    const record = Object.assign({ id, status: 'New', notes: [], date: new Date().toISOString() }, entry);
    all.unshift(record);
    write(all);
    return record;
  }

  function updateSubmission(id, changes) {
    const all = read();
    const idx = all.findIndex(s => s.id === id);
    if (idx > -1) { all[idx] = Object.assign({}, all[idx], changes); write(all); }
    return all[idx];
  }

  function deleteSubmission(id) {
    write(read().filter(s => s.id !== id));
  }

  function isLoggedIn() { return sessionStorage.getItem(AUTH_KEY) === 'true'; }
  function login() { sessionStorage.setItem(AUTH_KEY, 'true'); }
  function logout() { sessionStorage.removeItem(AUTH_KEY); }

  return {
    getSubmissions: read,
    addSubmission,
    updateSubmission,
    deleteSubmission,
    getContent: readContent,
    setContent: writeContent,
    isLoggedIn, login, logout
  };
})();
