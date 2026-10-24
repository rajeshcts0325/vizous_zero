const VIZOUS_CONFIG = {
  brandName: 'VIZOUS INTERIO',
  legalName: 'VIZOUS INTERIO PRIVATE LIMITED',
  tagline: 'Design • Style • Comfort',
  phoneDisplay: '+91-9938117844',
  phoneHref: 'tel:+919938117844',
  whatsappNumber: '919938117844',
  email: 'info@vizous.in',
  corporateAddress: '1st Floor, Laxmi Sagar Square, Plot 301/1516, Cuttack Rd, Near Sunshine Hospital, Budheswari Colony, Laxmisagar, Bhubaneswar, Odisha 751006',
  factoryAddress: 'Plot #12, Bhagabanpur Industrial Estate, Patrapada, Bhubaneswar-751019, Odisha, India',
  branchAddress: 'Khasara # 801/8, Bhawna Nagar, Kachna Road, Near Durga Mandir, Raipur, Chhattisgarh 492007 (+91-9893218906)',
  /**
   * BACKEND FORM ENDPOINT CONFIGURATION:
   * Set `formEndpoint` to your live backend handler (e.g., '/api/enquiry' or WordPress CF7 / WPForms REST URL).
   * When `formEndpoint` is null, the form validates all fields and provides a verified direct submission fallback
   * via WhatsApp or Email so no customer lead is ever lost or falsely marked as sent.
   */
  formEndpoint: null
};

const VIZOUS_SERVICES = [
  {
    id: 'modular-kitchen',
    number: '01',
    title: 'Modular Kitchen',
    route: '/services/modular-kitchen/',
    shortDesc: 'Functional, ergonomic kitchens tailored around your cooking habits, layout, and storage needs.',
    features: ['Smart Space Planning', 'Customized Storage', 'Contemporary Finishes'],
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85',
    alt: 'Contemporary matte charcoal and warm oak modular kitchen by Vizous Interio'
  },
  {
    id: 'wardrobe-design',
    number: '02',
    title: 'Wardrobe Design',
    route: '/services/wardrobe-design/',
    shortDesc: 'Custom sliding, hinged, and walk-in wardrobes engineered for effortless bedroom organization.',
    features: ['Personalized Storage', 'Sliding & Hinged Options', 'Refined Finishes'],
    image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1200&q=85',
    alt: 'Floor-to-ceiling custom wardrobe with warm integrated lighting and organized shelves'
  },
  {
    id: 'office-furniture',
    number: '03',
    title: 'Office Furniture',
    route: '/services/office-furniture/',
    shortDesc: 'Ergonomic workstations, executive desks, and conference solutions built for productive workplaces.',
    features: ['Ergonomic Planning', 'Professional Workstations', 'Functional Storage'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
    alt: 'Modern corporate office workspace with custom wooden desks and storage cabinetry'
  },
  {
    id: 'modular-furniture',
    number: '04',
    title: 'Modular Furniture',
    route: '/services/modular-furniture/',
    shortDesc: 'Custom TV units, study desks, crockery units, shoe racks, and partitions crafted for every corner.',
    features: ['Space-Saving Solutions', 'Custom-Made Furniture', 'Coordinated Interiors'],
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    alt: 'Bespoke living room modular TV console and fluted wood partition unit'
  }
];

/* 1. Render Sticky Header */
function renderHeader(activePage = 'services') {
  const headerMount = document.getElementById('vizous-header-mount');
  if (!headerMount) return;

  headerMount.innerHTML = `
    <header id="site-header" class="sticky top-0 z-40 bg-alabaster/95 backdrop-blur-md border-b border-stone-200/80 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <!-- Brand Logo -->
        <a href="/" class="flex items-center gap-3 group focus:outline-none" aria-label="Vizous Interio Home">
          <div class="w-10 h-10 flex items-center justify-center text-charcoal group-hover:text-walnut-600 transition-colors">
            <svg class="w-8 h-8" viewBox="0 0 36 36" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
              <path d="M4 17L18 5L32 17" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 14V30H28V14" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15 30V21H21V30" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div>
            <span class="block font-editorial text-xl sm:text-2xl font-semibold tracking-[0.14em] text-charcoal leading-none">${VIZOUS_CONFIG.brandName}</span>
            <span class="block text-[9px] tracking-[0.26em] text-stone-500 uppercase mt-1">${VIZOUS_CONFIG.tagline}</span>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-8 text-sm font-normal text-stone-700" aria-label="Main Navigation">
          <a href="/" class="nav-link ${activePage === 'home' ? 'active text-charcoal font-medium' : 'hover:text-charcoal'} transition-colors py-1">Home</a>
          <a href="/#about" class="nav-link hover:text-charcoal transition-colors py-1">About Us</a>
          <div class="relative group">
            <a href="/services/" class="nav-link ${activePage.startsWith('services') ? 'active text-charcoal font-medium' : 'hover:text-charcoal'} inline-flex items-center gap-1.5 py-1">
              <span>Services</span>
              <svg class="w-3.5 h-3.5 text-stone-500 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
              </svg>
            </a>
            <!-- Dropdown Menu -->
            <div class="absolute left-0 top-full pt-3 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div class="bg-alabaster border border-stone-200/90 shadow-xl rounded-sm py-2">
                <a href="/services/" class="block px-4 py-2 text-xs font-semibold uppercase tracking-wider text-walnut-600 border-b border-stone-200/60 hover:bg-sand/60">
                  All Interior Services
                </a>
                ${VIZOUS_SERVICES.map(s => `
                  <a href="${s.route}" class="block px-4 py-2.5 text-xs text-stone-700 hover:bg-sand/70 hover:text-charcoal transition-colors ${activePage === s.id ? 'bg-sand/50 font-semibold text-charcoal' : ''}">
                    <span class="text-[10px] text-walnut-600 font-mono mr-1.5">${s.number}.</span>${s.title}
                  </a>
                `).join('')}
              </div>
            </div>
          </div>
          <a href="/#projects" class="nav-link hover:text-charcoal transition-colors py-1">Projects</a>
          <a href="/#blog" class="nav-link hover:text-charcoal transition-colors py-1">Blog</a>
          <a href="#contact-footer" class="nav-link hover:text-charcoal transition-colors py-1">Contact</a>
        </nav>

        <!-- Desktop CTA & Mobile Menu Button -->
        <div class="flex items-center gap-3">
          <a href="${VIZOUS_CONFIG.phoneHref}" class="hidden xl:inline-flex items-center gap-1.5 text-xs font-medium text-stone-700 hover:text-walnut-600 transition-colors mr-1">
            <svg class="w-3.5 h-3.5 text-walnut-600" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <span>${VIZOUS_CONFIG.phoneDisplay}</span>
          </a>

          <button type="button" data-open-consult class="hidden sm:inline-flex items-center gap-2.5 bg-olive-800 hover:bg-charcoal text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow">
            <span>Get a Free Consultation</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-6-6l6 6-6 6"/>
            </svg>
          </button>

          <button id="mobile-menu-btn" type="button" class="lg:hidden p-2.5 rounded-md text-charcoal hover:bg-stone-200/60 focus:outline-none" aria-label="Toggle Menu" aria-expanded="false">
            <svg id="mobile-menu-icon-open" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h16M4 17h16"/>
            </svg>
            <svg id="mobile-menu-icon-close" class="w-6 h-6 hidden" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Responsive Drawer -->
      <div id="mobile-menu" class="hidden lg:hidden bg-alabaster border-b border-stone-200 px-6 pt-3 pb-6 space-y-3">
        <div class="flex flex-col space-y-2 text-sm font-medium text-stone-800">
          <a href="/" class="py-2 border-b border-stone-200/60">Home</a>
          <a href="/#about" class="py-2 border-b border-stone-200/60">About Us</a>
          <a href="/services/" class="py-2 border-b border-stone-200/60 text-walnut-600 font-semibold">Services Overview</a>
          <div class="pl-3 space-y-1.5 pb-2 border-b border-stone-200/60">
            ${VIZOUS_SERVICES.map(s => `
              <a href="${s.route}" class="block py-1 text-xs text-stone-600 hover:text-charcoal">
                ${s.number}.${s.title}
              </a>
            `).join('')}
          </div>
          <a href="/#projects" class="py-2 border-b border-stone-200/60">Projects</a>
          <a href="/#blog" class="py-2 border-b border-stone-200/60">Blog</a>
          <a href="#contact-footer" class="py-2">Contact</a>
        </div>
        <div class="pt-2 flex flex-col gap-2.5">
          <button type="button" data-open-consult class="w-full inline-flex items-center justify-center gap-2 bg-olive-800 text-white text-sm font-medium px-5 py-3 rounded-full">
            <span>Get a Free Consultation</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-6-6l6 6-6 6"/>
            </svg>
          </button>
          <a href="https://wa.me/${VIZOUS_CONFIG.whatsappNumber}?text=Hello%20Vizous%20Interio%2C%20I%20would%20like%20to%20discuss%20an%20interior%20design%20project." target="_blank" rel="noopener noreferrer" class="w-full inline-flex items-center justify-center gap-2 border border-stone-300 bg-white text-charcoal text-xs font-medium px-5 py-2.5 rounded-full">
            <span>Chat on WhatsApp (${VIZOUS_CONFIG.phoneDisplay})</span>
          </a>
        </div>
      </div>
    </header>
  `;

  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const openIcon = document.getElementById('mobile-menu-icon-open');
  const closeIcon = document.getElementById('mobile-menu-icon-close');

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden', !isHidden);
      openIcon.classList.toggle('hidden', isHidden);
      closeIcon.classList.toggle('hidden', !isHidden);
      menuBtn.setAttribute('aria-expanded', String(isHidden));
    });
  }
}

/* 2. Render Verified Footer */
function renderFooter() {
  const footerMount = document.getElementById('vizous-footer-mount');
  if (!footerMount) return;

  footerMount.innerHTML = `
    <footer id="contact-footer" class="bg-olive-900 text-stone-300 pt-16 pb-12 border-t border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          <!-- Brand Column -->
          <div class="lg:col-span-4">
            <a href="/" class="flex items-center gap-3 mb-4">
              <div class="w-9 h-9 flex items-center justify-center text-stone-200">
                <svg class="w-7 h-7" viewBox="0 0 36 36" fill="none" stroke="currentColor" stroke-width="1.6">
                  <path d="M4 17L18 5L32 17" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8 14V30H28V14" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M15 30V21H21V30" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div>
                <span class="block font-editorial text-xl font-semibold tracking-[0.14em] text-white leading-none">${VIZOUS_CONFIG.brandName}</span>
                <span class="block text-[8px] tracking-[0.26em] text-stone-400 uppercase mt-1">${VIZOUS_CONFIG.tagline}</span>
              </div>
            </a>
            <p class="text-xs text-stone-400 leading-relaxed max-w-sm mb-6">
              Leading home and commercial interior design brand in Bhubaneswar, specializing in in-house manufactured modular kitchens, customized wardrobes, office furniture, and turnkey interiors.
            </p>
            <div class="flex flex-wrap items-center gap-2.5">
              <a href="https://wa.me/${VIZOUS_CONFIG.whatsappNumber}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-xs bg-white/10 hover:bg-walnut-600 text-white px-3.5 py-2 rounded-full transition-colors">
                <span>WhatsApp Us</span>
              </a>
              <a href="${VIZOUS_CONFIG.phoneHref}" class="inline-flex items-center gap-2 text-xs border border-white/15 hover:border-white/40 text-stone-200 px-3.5 py-2 rounded-full transition-colors">
                <span>${VIZOUS_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>

          <!-- Quick Navigation Links -->
          <div class="lg:col-span-2">
            <h3 class="text-xs font-semibold uppercase tracking-[0.2em] text-white mb-4">Quick Links</h3>
            <ul class="space-y-2.5 text-xs text-stone-400">
              <li><a href="/" class="hover:text-white transition-colors">Home</a></li>
              <li><a href="/#about" class="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/services/" class="hover:text-white transition-colors">Services</a></li>
              <li><a href="/#projects" class="hover:text-white transition-colors">Projects</a></li>
              <li><a href="/#blog" class="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#enquiry-section" class="hover:text-white transition-colors">Book Consultation</a></li>
            </ul>
          </div>

          <!-- Service Category Links -->
          <div class="lg:col-span-3">
            <h3 class="text-xs font-semibold uppercase tracking-[0.2em] text-white mb-4">Our Services</h3>
            <ul class="space-y-2.5 text-xs text-stone-400">
              <li><a href="/services/modular-kitchen/" class="hover:text-white transition-colors">Modular Kitchen Design</a></li>
              <li><a href="/services/wardrobe-design/" class="hover:text-white transition-colors">Wardrobe Design</a></li>
              <li><a href="/services/office-furniture/" class="hover:text-white transition-colors">Office Furniture Solutions</a></li>
              <li><a href="/services/modular-furniture/" class="hover:text-white transition-colors">Customized Modular Furniture</a></li>
              <li><a href="/services/" class="hover:text-white transition-colors">Turnkey Interior Planning</a></li>
            </ul>
          </div>

          <!-- Verified Contact Details & Addresses -->
          <div class="lg:col-span-3">
            <h3 class="text-xs font-semibold uppercase tracking-[0.2em] text-white mb-4">Corporate &amp; Factory</h3>
            <ul class="space-y-3 text-xs text-stone-400">
              <li class="flex items-start gap-2.5">
                <svg class="w-4 h-4 text-walnut-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="1.7" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span><strong class="text-stone-200">Corporate Office:</strong> ${VIZOUS_CONFIG.corporateAddress}</span>
              </li>
              <li class="flex items-start gap-2.5">
                <svg class="w-4 h-4 text-walnut-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="1.7" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5"/>
                </svg>
                <span><strong class="text-stone-200">Factory:</strong> ${VIZOUS_CONFIG.factoryAddress}</span>
              </li>
              <li class="flex items-center gap-2.5">
                <svg class="w-4 h-4 text-walnut-500 shrink-0" fill="none" stroke="currentColor" stroke-width="1.7" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a href="${VIZOUS_CONFIG.phoneHref}" class="hover:text-white transition-colors">${VIZOUS_CONFIG.phoneDisplay}</a>
              </li>
              <li class="flex items-center gap-2.5">
                <svg class="w-4 h-4 text-walnut-500 shrink-0" fill="none" stroke="currentColor" stroke-width="1.7" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href="mailto:${VIZOUS_CONFIG.email}" class="hover:text-white transition-colors">${VIZOUS_CONFIG.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-400">
          <p>&copy; ${new Date().getFullYear()} ${VIZOUS_CONFIG.legalName}. All Rights Reserved.</p>
          <p class="text-stone-400">Mon – Sun: 10:00 AM – 8:00 PM &bull; Bhubaneswar &amp; Raipur</p>
        </div>
      </div>
    </footer>
  `;
}

/* 3. Render 6-Step Design-to-Installation Process */
function renderProcessSection(customHeading = 'From Your First Idea to the Final Detail.') {
  const mount = document.getElementById('vizous-process-mount');
  if (!mount) return;

  const steps = [
    {
      num: '01',
      title: 'Understand Your Vision',
      desc: 'Discuss your requirements, lifestyle, functional preferences, and overall project budget with our design team.'
    },
    {
      num: '02',
      title: 'Measure & Plan',
      desc: 'Understand the available space, exact site dimensions, architectural layout, and everyday utility needs.'
    },
    {
      num: '03',
      title: 'Design Your Solution',
      desc: 'Develop a customized concept with suitable spatial layouts, core materials, surface finishes, and storage zones.'
    },
    {
      num: '04',
      title: 'Review & Finalize',
      desc: 'Confirm the 3D design views, material selections, hardware specifications, and transparent itemised quotation.'
    },
    {
      num: '05',
      title: 'Manufacturing & Preparation',
      desc: 'Proceed with precision production at our Bhubaneswar facility according to approved specifications and schedule.'
    },
    {
      num: '06',
      title: 'Installation & Handover',
      desc: 'Our in-house installation team fits the approved solution and completes handover with thorough quality checks.'
    }
  ];

  mount.innerHTML = `
    <section class="py-20 lg:py-24 bg-alabaster border-t border-stone-200/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mb-14">
          <p class="text-[11px] tracking-[0.25em] uppercase text-walnut-600 font-medium mb-2.5">HOW WE WORK</p>
          <h2 class="font-editorial text-3xl sm:text-4xl lg:text-[42px] leading-[1.15] text-charcoal font-medium">
            ${customHeading}
          </h2>
          <p class="text-sm text-stone-600 leading-relaxed mt-3">
            A structured, transparent journey from initial conversation to precision factory manufacturing and final on-site installation.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${steps.map(s => `
            <div class="bg-sand/50 border border-stone-200/90 p-7 rounded-sm flex flex-col justify-between hover:border-walnut-500/60 transition-all">
              <div>
                <div class="flex items-center justify-between mb-5">
                  <span class="font-editorial text-3xl font-semibold text-walnut-600">${s.num}</span>
                  <span class="w-8 h-[1px] bg-stone-300"></span>
                </div>
                <h3 class="font-editorial text-2xl font-semibold text-charcoal mb-2.5">${s.title}</h3>
                <p class="text-xs text-stone-600 leading-relaxed">${s.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

/* 4. Render Related Services Section (For Detail Pages) */
function renderRelatedServices(currentServiceId) {
  const mount = document.getElementById('vizous-related-mount');
  if (!mount) return;

  const related = VIZOUS_SERVICES.filter(s => s.id !== currentServiceId);

  mount.innerHTML = `
    <section class="py-20 bg-sand/40 border-t border-stone-200/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <p class="text-[11px] tracking-[0.25em] uppercase text-stone-500 font-medium mb-2">COMPLETE YOUR INTERIORS</p>
            <h2 class="font-editorial text-3xl sm:text-4xl text-charcoal font-medium">Explore Related Services</h2>
          </div>
          <a href="/services/" class="inline-flex items-center gap-2 text-xs font-medium text-charcoal hover:text-walnut-600 transition-colors">
            <span>View All Services</span>
            <span>&rarr;</span>
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          ${related.map(srv => `
            <article class="editorial-card bg-alabaster border border-stone-200/90 rounded-sm overflow-hidden flex flex-col justify-between hover:border-walnut-500/60 transition-all">
              <div>
                <a href="${srv.route}" class="block aspect-[16/10] overflow-hidden bg-stone-200">
                  <img src="${srv.image}" alt="${srv.alt}" loading="lazy" width="600" height="375" class="editorial-zoom-img w-full h-full object-cover" />
                </a>
                <div class="p-6">
                  <span class="text-[10px] uppercase tracking-[0.22em] text-walnut-600 font-medium">Service ${srv.number}</span>
                  <h3 class="font-editorial text-2xl font-semibold text-charcoal mt-1 mb-2">
                    <a href="${srv.route}" class="hover:text-walnut-600 transition-colors">${srv.title}</a>
                  </h3>
                  <p class="text-xs text-stone-600 leading-relaxed mb-4">${srv.shortDesc}</p>
                </div>
              </div>
              <div class="px-6 pb-6 pt-2 border-t border-stone-200/60 flex items-center justify-between">
                <a href="${srv.route}" class="inline-flex items-center gap-2 text-xs font-medium text-charcoal hover:text-walnut-600 transition-colors">
                  <span>Explore ${srv.title}</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

/* 5. Render Accessible FAQ Accordion */
function renderFAQs(faqs, sectionTitle = 'Frequently Asked Questions', sectionSubtitle = 'Clear answers to common questions about our design, customization, manufacturing, and installation process.') {
  const mount = document.getElementById('vizous-faq-mount');
  if (!mount || !Array.isArray(faqs)) return;

  mount.innerHTML = `
    <section class="py-20 lg:py-24 bg-alabaster border-t border-stone-200/80">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <p class="text-[11px] tracking-[0.25em] uppercase text-walnut-600 font-medium mb-2">CLARITY &amp; GUIDANCE</p>
          <h2 class="font-editorial text-3xl sm:text-4xl lg:text-[42px] text-charcoal font-medium mb-3">${sectionTitle}</h2>
          <p class="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto leading-relaxed">${sectionSubtitle}</p>
        </div>

        <div class="divide-y divide-stone-200 border-y border-stone-200" id="faq-accordion-list">
          ${faqs.map((item, idx) => `
            <div class="faq-item ${idx === 0 ? 'open' : ''}">
              <h3>
                <button type="button" class="faq-trigger w-full py-5 flex items-center justify-between text-left gap-4 focus:outline-none group" aria-expanded="${idx === 0 ? 'true' : 'false'}" aria-controls="faq-panel-${idx}">
                  <span class="font-editorial text-xl sm:text-2xl font-medium text-charcoal group-hover:text-walnut-600 transition-colors">${item.q}</span>
                  <span class="faq-icon w-7 h-7 rounded-full bg-sand flex items-center justify-center shrink-0 text-charcoal transition-transform duration-300">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v14M5 12h14"/>
                    </svg>
                  </span>
                </button>
              </h3>
              <div id="faq-panel-${idx}" class="faq-answer" role="region">
                <div class="pb-6 pr-8 text-xs sm:text-sm text-stone-600 leading-relaxed space-y-2">
                  ${item.a}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;

  mount.querySelectorAll('.faq-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.faq-item');
      const isOpen = parent.classList.contains('open');
      mount.querySelectorAll('.faq-item').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        parent.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* 6. Render Inline Service Enquiry & Consultation Section + Modal */
function renderEnquirySection(defaultService = 'Modular Kitchen') {
  const mount = document.getElementById('vizous-enquiry-mount');
  if (!mount) return;

  mount.innerHTML = `
    <section id="enquiry-section" class="py-20 lg:py-24 bg-sand/70 border-t border-stone-200/90">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <!-- Left Editorial Context & Verified Contact -->
          <div class="lg:col-span-5">
            <p class="text-[11px] tracking-[0.25em] uppercase text-walnut-600 font-medium mb-2.5">BOOK A CONSULTATION</p>
            <h2 class="font-editorial text-3xl sm:text-4xl lg:text-[42px] leading-[1.12] text-charcoal font-medium mb-4">
              Discuss Your Space With Our Design Team.
            </h2>
            <p class="text-sm text-stone-600 leading-relaxed mb-8">
              Share your floor plan, room dimensions, or renovation goals. Our designers in Bhubaneswar will guide you through layout possibilities, material samples, and a tailored project quotation.
            </p>

            <div class="bg-alabaster border border-stone-200/90 p-6 rounded-sm space-y-4">
              <div class="flex items-start gap-3.5">
                <div class="w-9 h-9 rounded-full bg-sand flex items-center justify-center text-walnut-600 shrink-0 mt-0.5">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <span class="block text-[10px] uppercase tracking-wider text-stone-500">Direct Consultation Line</span>
                  <a href="${VIZOUS_CONFIG.phoneHref}" class="text-sm font-semibold text-charcoal hover:text-walnut-600 transition-colors">${VIZOUS_CONFIG.phoneDisplay}</a>
                  <span class="block text-[11px] text-stone-500 mt-0.5">Mon – Sun, 10:00 AM to 8:00 PM</span>
                </div>
              </div>

              <div class="flex items-start gap-3.5 pt-3 border-t border-stone-200/70">
                <div class="w-9 h-9 rounded-full bg-sand flex items-center justify-center text-walnut-600 shrink-0 mt-0.5">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <span class="block text-[10px] uppercase tracking-wider text-stone-500">Email Floor Plans</span>
                  <a href="mailto:${VIZOUS_CONFIG.email}" class="text-sm font-semibold text-charcoal hover:text-walnut-600 transition-colors">${VIZOUS_CONFIG.email}</a>
                </div>
              </div>

              <div class="flex items-start gap-3.5 pt-3 border-t border-stone-200/70">
                <div class="w-9 h-9 rounded-full bg-sand flex items-center justify-center text-walnut-600 shrink-0 mt-0.5">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  </svg>
                </div>
                <div>
                  <span class="block text-[10px] uppercase tracking-wider text-stone-500">Experience Studio</span>
                  <p class="text-xs text-stone-700 leading-relaxed mt-0.5">${VIZOUS_CONFIG.corporateAddress}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Validated Service Enquiry Form -->
          <div class="lg:col-span-7">
            <div class="bg-alabaster border border-stone-200/90 p-6 sm:p-10 rounded-sm shadow-sm">
              <h3 class="font-editorial text-2xl sm:text-3xl text-charcoal font-medium mb-2">Request a Customized Quote</h3>
              <p class="text-xs text-stone-500 mb-6">Fields marked with * are required. Costs are calculated based on room dimensions, materials, hardware, and scope.</p>

              <form id="vizous-inline-enquiry-form" novalidate class="space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label for="enq-name" class="block text-xs font-medium text-charcoal mb-1.5">Full Name *</label>
                    <input id="enq-name" name="name" type="text" required autocomplete="name" placeholder="e.g., Subrat Mohanty" class="w-full text-xs bg-white border border-stone-300 rounded-sm px-3.5 py-2.5 text-charcoal focus:border-walnut-600" />
                    <p class="text-[11px] text-red-700 mt-1 hidden" data-error-for="enq-name">Please enter your full name (minimum 2 characters).</p>
                  </div>
                  <div>
                    <label for="enq-phone" class="block text-xs font-medium text-charcoal mb-1.5">Phone / WhatsApp Number *</label>
                    <input id="enq-phone" name="phone" type="tel" required autocomplete="tel" placeholder="+91 99381 XXXXX" class="w-full text-xs bg-white border border-stone-300 rounded-sm px-3.5 py-2.5 text-charcoal focus:border-walnut-600" />
                    <p class="text-[11px] text-red-700 mt-1 hidden" data-error-for="enq-phone">Please enter a valid 10-digit Indian phone number.</p>
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label for="enq-email" class="block text-xs font-medium text-charcoal mb-1.5">Email Address</label>
                    <input id="enq-email" name="email" type="email" autocomplete="email" placeholder="name@example.com" class="w-full text-xs bg-white border border-stone-300 rounded-sm px-3.5 py-2.5 text-charcoal focus:border-walnut-600" />
                    <p class="text-[11px] text-red-700 mt-1 hidden" data-error-for="enq-email">Please enter a valid email address.</p>
                  </div>
                  <div>
                    <label for="enq-service" class="block text-xs font-medium text-charcoal mb-1.5">Service Required *</label>
                    <select id="enq-service" name="service" required class="w-full text-xs bg-white border border-stone-300 rounded-sm px-3.5 py-2.5 text-charcoal focus:border-walnut-600">
                      <option value="Modular Kitchen" ${defaultService === 'Modular Kitchen' ? 'selected' : ''}>Modular Kitchen Design</option>
                      <option value="Wardrobe Design" ${defaultService === 'Wardrobe Design' ? 'selected' : ''}>Wardrobe Design</option>
                      <option value="Office Furniture" ${defaultService === 'Office Furniture' ? 'selected' : ''}>Office Furniture</option>
                      <option value="Modular Furniture" ${defaultService === 'Modular Furniture' ? 'selected' : ''}>Customized Modular Furniture</option>
                      <option value="Full Home Turnkey Interior" ${defaultService === 'Full Home Turnkey Interior' ? 'selected' : ''}>Full Home Turnkey Interior</option>
                    </select>
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label for="enq-project-type" class="block text-xs font-medium text-charcoal mb-1.5">Project Type &amp; Scope *</label>
                    <select id="enq-project-type" name="projectType" required class="w-full text-xs bg-white border border-stone-300 rounded-sm px-3.5 py-2.5 text-charcoal focus:border-walnut-600">
                      <option value="New Home / Apartment Possession">New Home / Apartment Possession</option>
                      <option value="Renovation / Single Room Upgrade">Renovation / Single Room Upgrade</option>
                      <option value="Commercial / Office Fit-Out">Commercial / Office Fit-Out</option>
                      <option value="Custom Furniture Piece">Custom Modular Unit Only</option>
                    </select>
                  </div>
                  <div>
                    <label for="enq-location" class="block text-xs font-medium text-charcoal mb-1.5">Property Location *</label>
                    <input id="enq-location" name="location" type="text" required placeholder="e.g., Laxmisagar, Patia, Cuttack, Raipur" class="w-full text-xs bg-white border border-stone-300 rounded-sm px-3.5 py-2.5 text-charcoal focus:border-walnut-600" />
                    <p class="text-[11px] text-red-700 mt-1 hidden" data-error-for="enq-location">Please enter your project city or locality.</p>
                  </div>
                </div>

                <div>
                  <label for="enq-message" class="block text-xs font-medium text-charcoal mb-1.5">Approximate Dimensions or Specific Requirements (Optional)</label>
                  <textarea id="enq-message" name="message" rows="3" placeholder="Tell us about your room layout, preferred finishes, or storage needs..." class="w-full text-xs bg-white border border-stone-300 rounded-sm px-3.5 py-2.5 text-charcoal focus:border-walnut-600"></textarea>
                </div>

                <div class="flex items-start gap-2.5 pt-1">
                  <input id="enq-consent" name="consent" type="checkbox" required checked class="mt-0.5 rounded border-stone-300 text-olive-800 focus:ring-walnut-600" />
                  <label for="enq-consent" class="text-[11px] text-stone-600 leading-relaxed">
                    I authorize Vizous Interio Pvt. Ltd. to contact me via phone, WhatsApp, or email regarding my interior enquiry.
                  </label>
                </div>
                <p class="text-[11px] text-red-700 hidden" data-error-for="enq-consent">Please confirm consent so our team can contact you.</p>

                <!-- Status Feedback Banner -->
                <div id="enq-form-status" class="hidden p-4 rounded-sm text-xs leading-relaxed" role="status" aria-live="polite"></div>

                <div class="pt-2 flex flex-wrap items-center gap-3">
                  <button id="enq-submit-btn" type="submit" class="inline-flex items-center justify-center gap-2.5 bg-olive-800 hover:bg-charcoal text-white text-xs sm:text-sm font-medium px-7 py-3.5 rounded-full transition-all shadow-sm">
                    <span id="enq-submit-text">Request Free Consultation</span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-6-6l6 6-6 6"/>
                    </svg>
                  </button>
                  <span class="text-[11px] text-stone-500">Or call directly: <a href="${VIZOUS_CONFIG.phoneHref}" class="text-charcoal font-medium underline">${VIZOUS_CONFIG.phoneDisplay}</a></span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  bindEnquiryFormValidation('vizous-inline-enquiry-form');
}

/* 7. Form Validation & Honest Backend / Direct Dispatch Handler */
function bindEnquiryFormValidation(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameEl = form.querySelector('[name="name"]');
    const phoneEl = form.querySelector('[name="phone"]');
    const emailEl = form.querySelector('[name="email"]');
    const serviceEl = form.querySelector('[name="service"]');
    const projectTypeEl = form.querySelector('[name="projectType"]');
    const locationEl = form.querySelector('[name="location"]');
    const messageEl = form.querySelector('[name="message"]');
    const consentEl = form.querySelector('[name="consent"]');
    const statusBox = document.getElementById('enq-form-status');
    const submitBtn = document.getElementById('enq-submit-btn');
    const submitText = document.getElementById('enq-submit-text');

    // Reset previous errors
    form.querySelectorAll('[data-error-for]').forEach(el => el.classList.add('hidden'));
    statusBox.className = 'hidden p-4 rounded-sm text-xs leading-relaxed';

    let isValid = true;
    const cleanPhone = phoneEl.value.replace(/\D/g, '').slice(-10);

    if (!nameEl.value || nameEl.value.trim().length < 2) {
      form.querySelector('[data-error-for="enq-name"]').classList.remove('hidden');
      isValid = false;
    }
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      form.querySelector('[data-error-for="enq-phone"]').classList.remove('hidden');
      isValid = false;
    }
    if (emailEl.value.trim() !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value.trim())) {
      form.querySelector('[data-error-for="enq-email"]').classList.remove('hidden');
      isValid = false;
    }
    if (!locationEl.value || locationEl.value.trim().length < 2) {
      form.querySelector('[data-error-for="enq-location"]').classList.remove('hidden');
      isValid = false;
    }
    if (!consentEl.checked) {
      form.querySelector('[data-error-for="enq-consent"]').classList.remove('hidden');
      isValid = false;
    }

    if (!isValid) return;

    const payload = {
      name: nameEl.value.trim(),
      phone: cleanPhone,
      email: emailEl.value.trim() || 'Not provided',
      service: serviceEl.value,
      projectType: projectTypeEl.value,
      location: locationEl.value.trim(),
      message: messageEl.value.trim() || 'Standard consultation request',
      pageUrl: window.location.href,
      submittedAt: new Date().toISOString()
    };

    submitBtn.disabled = true;
    submitText.textContent = 'Processing Request...';

    // If a live backend endpoint is configured in VIZOUS_CONFIG.formEndpoint, POST to it:
    if (VIZOUS_CONFIG.formEndpoint) {
      try {
        const res = await fetch(VIZOUS_CONFIG.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (!res.ok) throw new Error('Server returned status ' + res.status);

        statusBox.className = 'block p-4 rounded-sm text-xs bg-olive-800 text-white';
        statusBox.innerHTML = `<strong>Thank you, ${payload.name}!</strong> Your enquiry for <em>${payload.service}</em> has been registered. Our Bhubaneswar design team will contact you on ${payload.phone}.`;
        form.reset();
      } catch (err) {
        statusBox.className = 'block p-4 rounded-sm text-xs bg-amber-50 border border-amber-300 text-charcoal';
        statusBox.innerHTML = buildDirectDispatchHTML(payload, true);
      } finally {
        submitBtn.disabled = false;
        submitText.textContent = 'Request Free Consultation';
      }
    } else {
      // Honest Static Mode: Do not fake a backend save; provide instant 1-click verified WhatsApp & Email dispatch
      submitBtn.disabled = false;
      submitText.textContent = 'Request Free Consultation';
      statusBox.className = 'block p-4 rounded-sm text-xs bg-sand border border-walnut-500/50 text-charcoal space-y-2.5';
      statusBox.innerHTML = buildDirectDispatchHTML(payload, false);
    }
  });
}

function buildDirectDispatchHTML(payload, isFallback) {
  const waText = encodeURIComponent(
    `Hello Vizous Interio Team,\n\nI would like to book a consultation:\n` +
    `• Name: ${payload.name}\n` +
    `• Phone: +91-${payload.phone}\n` +
    `• Service: ${payload.service}\n` +
    `• Project Type: ${payload.projectType}\n` +
    `• Location: ${payload.location}\n` +
    `• Details: ${payload.message}`
  );
  const mailSubject = encodeURIComponent(`Service Consultation Request: ${payload.service} (${payload.location})`);
  const mailBody = waText;

  return `
    <p class="font-medium text-charcoal">
      ${isFallback
        ? 'Our form server is temporarily unreachable, but your details are validated and ready.'
        : `<strong>Details Validated for ${payload.name}.</strong> Connect directly with our Bhubaneswar design desk to finalize your slot:`}
    </p>
    <div class="flex flex-wrap items-center gap-2.5 pt-1">
      <a href="https://wa.me/${VIZOUS_CONFIG.whatsappNumber}?text=${waText}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 bg-olive-800 hover:bg-charcoal text-white text-xs font-medium px-4 py-2 rounded-full transition-colors">
        <span>Send via WhatsApp (+91-9938117844) &rarr;</span>
      </a>
      <a href="mailto:${VIZOUS_CONFIG.email}?subject=${mailSubject}&body=${mailBody}" class="inline-flex items-center gap-2 border border-charcoal bg-white hover:bg-sand text-charcoal text-xs font-medium px-4 py-2 rounded-full transition-colors">
        <span>Send via Email (${VIZOUS_CONFIG.email})</span>
      </a>
    </div>
  `;
}

/* 8. Bind Global Consultation Triggers (Smooth Scroll to Form) */
function bindGlobalConsultTriggers() {
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-open-consult]');
    if (!trigger) return;
    e.preventDefault();
    const targetService = trigger.getAttribute('data-service');
    const enqSection = document.getElementById('enquiry-section');
    if (enqSection) {
      if (targetService) {
        const select = document.getElementById('enq-service');
        if (select) select.value = targetService;
      }
      enqSection.scrollIntoView({ behavior: 'smooth' });
      const nameInput = document.getElementById('enq-name');
      if (nameInput) setTimeout(() => nameInput.focus(), 450);
    }
  });
}

/* 9. Inject Verified LocalBusiness & Breadcrumb JSON-LD Schema */
function injectStructuredData(breadcrumbs = []) {
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    'name': 'Vizous Interio Private Limited',
    'url': 'https://vizous.in/',
    'telephone': '+91-9938117844',
    'email': 'info@vizous.in',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '1st Floor, Laxmi Sagar Square, Plot 301/1516, Cuttack Rd, Near Sunshine Hospital, Budheswari Colony, Laxmisagar',
      'addressLocality': 'Bhubaneswar',
      'addressRegion': 'Odisha',
      'postalCode': '751006',
      'addressCountry': 'IN'
    },
    'openingHours': 'Mo-Su 10:00-20:00'
  };

  const scripts = [businessSchema];

  if (breadcrumbs.length > 0) {
    scripts.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': breadcrumbs.map((b, i) => ({
        '@type': 'ListItem',
        'position': i + 1,
        'name': b.name,
        'item': b.url
      }))
    });
  }

  const scriptTag = document.createElement('script');
  scriptTag.type = 'application/ld+json';
  scriptTag.textContent = JSON.stringify(scripts);
  document.head.appendChild(scriptTag);
}