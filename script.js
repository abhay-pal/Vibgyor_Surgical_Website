(() => {
  'use strict';

  const products = [
    {
      id: 'ventilators', category: 'medical', categoryName: 'Medical Equipment', name: 'Ventilators', image: 'assets/images/ventilators.jpg',
      description: 'Respiratory support equipment for monitored care environments.',
      overview: 'Dependable ventilation solutions intended to support clinical teams in monitored respiratory care environments.',
      features: ['Designed for clinical respiratory support', 'Clear, accessible operating interface', 'Configurations available for varied care settings'],
      applications: ['Critical care support', 'Emergency care environments', 'Monitored hospital departments'],
      suitable: 'Hospitals, ICUs, emergency departments and critical care facilities'
    },
    {
      id: 'anesthesia-machines', category: 'medical', categoryName: 'Medical Equipment', name: 'Anesthesia Machines', image: 'assets/images/anesthesia-machines.jpg',
      description: 'Integrated anesthesia delivery solutions for operation theatres.',
      overview: 'Anesthesia workstations designed to support controlled delivery and monitoring workflows in operation theatre environments.',
      features: ['Integrated clinical workflow support', 'Organized controls and monitoring area', 'Options suited to different OT requirements'],
      applications: ['General surgery', 'Procedure rooms', 'Operation theatre environments'],
      suitable: 'Hospitals, surgical centres and operation theatres'
    },
    {
      id: 'patient-monitors', category: 'medical', categoryName: 'Medical Equipment', name: 'Patient Monitors', image: 'assets/images/patient-monitors.jpg',
      description: 'Clear vital-sign monitoring for clinical and critical care use.',
      overview: 'Patient monitoring solutions that help care teams view essential patient parameters in clinical and critical care settings.',
      features: ['Clear multi-parameter display', 'Flexible bedside placement', 'Options for routine and critical monitoring'],
      applications: ['Bedside monitoring', 'Recovery areas', 'Emergency and critical care'],
      suitable: 'Hospitals, clinics, ICUs, nursing facilities and procedure rooms'
    },
    {
      id: 'c-arm', category: 'medical', categoryName: 'Medical Equipment', name: 'C-Arm', image: 'assets/images/c-arm.jpg',
      description: 'Mobile imaging support for surgical and interventional workflows.',
      overview: 'Mobile C-Arm systems for image-guided procedures, with configurations available according to clinical and facility requirements.',
      features: ['Mobile imaging configuration', 'Positioning designed for procedural access', 'Solutions for varied clinical workflows'],
      applications: ['Orthopaedic procedures', 'Surgical imaging', 'Interventional workflows'],
      suitable: 'Hospitals, surgical centres and specialist procedure facilities'
    },
    {
      id: 'infusion-pumps', category: 'medical', categoryName: 'Medical Equipment', name: 'Infusion Pumps', image: 'assets/images/infusion-pumps.jpg',
      description: 'Controlled infusion support for diverse care environments.',
      overview: 'Compact infusion systems designed to support controlled therapy delivery in monitored patient care settings.',
      features: ['Compact bedside design', 'Clear user interface', 'Flexible mounting and placement options'],
      applications: ['Medication delivery support', 'Critical care', 'General ward use'],
      suitable: 'Hospitals, clinics, ICUs, day-care units and nursing facilities'
    },
    {
      id: 'endoscopy-systems', category: 'medical', categoryName: 'Medical Equipment', name: 'Endoscopy Systems', image: 'assets/images/endoscopy-systems.jpg',
      description: 'Endoscopic visualization solutions for clinical procedures.',
      overview: 'Integrated endoscopy system options to support visualization, documentation and procedural workflows.',
      features: ['Integrated component arrangement', 'Clinical visualization support', 'Configurations based on procedure needs'],
      applications: ['Diagnostic procedures', 'Therapeutic endoscopy', 'Specialist clinical workflows'],
      suitable: 'Hospitals, diagnostic centres and specialist clinics'
    },
    {
      id: 'hospital-beds', category: 'furniture', categoryName: 'Hospital Furniture', name: 'Hospital Beds', image: 'assets/images/hospital-beds.jpg',
      description: 'Patient-care beds designed for comfort, access and mobility.',
      overview: 'Hospital-grade beds created to support patient comfort, caregiver access and everyday movement across care environments.',
      features: ['Patient-focused design', 'Accessible side protection', 'Options for manual or powered adjustment'],
      applications: ['In-patient care', 'Recovery environments', 'General and specialist wards'],
      suitable: 'Hospitals, clinics, nursing homes and recovery centres'
    },
    {
      id: 'ot-tables', category: 'furniture', categoryName: 'Hospital Furniture', name: 'OT Tables', image: 'assets/images/ot-tables.jpg',
      description: 'Procedure tables for positioning and surgical access.',
      overview: 'Operation theatre tables designed to support positioning, access and practical workflow during surgical procedures.',
      features: ['Stable procedural platform', 'Positioning options for clinical access', 'Easy-clean hospital-grade surfaces'],
      applications: ['General surgery', 'Specialist procedures', 'Operation theatre use'],
      suitable: 'Hospitals, surgical centres and operation theatres'
    },
    {
      id: 'instrument-trolleys', category: 'furniture', categoryName: 'Hospital Furniture', name: 'Instrument Trolleys', image: 'assets/images/instrument-trolleys.jpg',
      description: 'Mobile storage and access for clinical instruments.',
      overview: 'Practical hospital-grade trolleys for organizing, transporting and accessing instruments in clinical environments.',
      features: ['Durable easy-clean construction', 'Mobile castor-based design', 'Multiple shelf and tray options'],
      applications: ['Instrument organization', 'Ward rounds', 'Procedure support'],
      suitable: 'Hospitals, clinics, operation theatres and treatment rooms'
    },
    {
      id: 'bedside-lockers', category: 'furniture', categoryName: 'Hospital Furniture', name: 'Bedside Lockers', image: 'assets/images/bedside-lockers.jpg',
      description: 'Convenient bedside storage for patient care settings.',
      overview: 'Compact bedside storage units designed for convenient access, practical organization and easy maintenance.',
      features: ['Compact bedside footprint', 'Accessible drawer and cabinet storage', 'Hospital-friendly easy-clean surfaces'],
      applications: ['Patient room storage', 'Personal item organization', 'Bedside support'],
      suitable: 'Hospitals, clinics, nursing homes and recovery facilities'
    },
    {
      id: 'waiting-chairs', category: 'furniture', categoryName: 'Hospital Furniture', name: 'Waiting Chairs', image: 'assets/images/waiting-chairs.jpg',
      description: 'Durable linked seating for healthcare waiting areas.',
      overview: 'Professional waiting-area seating designed for frequent use, simple maintenance and orderly public spaces.',
      features: ['Durable linked-seat construction', 'Easy-to-maintain finish', 'Configurations for varied waiting areas'],
      applications: ['Reception areas', 'Outpatient waiting', 'Visitor seating'],
      suitable: 'Hospitals, clinics, diagnostic centres and healthcare offices'
    },
    {
      id: 'storage-cabinets', category: 'furniture', categoryName: 'Hospital Furniture', name: 'Storage Cabinets', image: 'assets/images/storage-cabinets.jpg',
      description: 'Organized hospital-grade storage for supplies and instruments.',
      overview: 'Clinical storage cabinets that help healthcare teams keep supplies, consumables and instruments organized and accessible.',
      features: ['Structured internal storage', 'Durable hospital-grade build', 'Easy-clean design options'],
      applications: ['Supply organization', 'Instrument storage', 'Departmental inventory'],
      suitable: 'Hospitals, clinics, pharmacies, labs and treatment areas'
    },
    {
      id: 'surgical-instruments', category: 'surgical', categoryName: 'Surgical Instruments & Consumables', name: 'Surgical Instruments', image: 'assets/images/surgical-instruments.jpg',
      description: 'Essential instruments for varied surgical procedures.',
      overview: 'A practical range of surgical instruments for common procedural and operation theatre requirements.',
      features: ['Options for varied procedures', 'Designed for clinical handling', 'Instrument sets available by requirement'],
      applications: ['General surgery', 'Minor procedures', 'Specialist surgical workflows'],
      suitable: 'Hospitals, surgical centres, clinics and procedure rooms'
    },
    {
      id: 'consumables-disposables', category: 'surgical', categoryName: 'Surgical Instruments & Consumables', name: 'Consumables & Disposables', image: 'assets/images/consumables-disposables.jpg',
      description: 'Everyday medical supplies for safe, efficient patient care.',
      overview: 'Routine-use medical consumables and disposable supplies selected to support efficient healthcare workflows.',
      features: ['Wide range of everyday essentials', 'Convenient single-use options', 'Supply support based on facility demand'],
      applications: ['Routine patient care', 'Procedure preparation', 'Ward and clinical use'],
      suitable: 'Hospitals, clinics, laboratories and healthcare institutions'
    },
    {
      id: 'contrast-media-injectors', category: 'surgical', categoryName: 'Surgical Instruments & Consumables', name: 'Contrast Media & Injectors', image: 'assets/images/contrast-media-injectors.jpg',
      description: 'Contrast-related products for supported imaging workflows.',
      overview: 'Contrast media and compatible injector-related solutions for appropriate diagnostic imaging requirements.',
      features: ['Options for imaging workflows', 'Products selected by procedural need', 'Compatible accessory support available'],
      applications: ['Diagnostic imaging support', 'Radiology workflows', 'Contrast-enhanced procedures'],
      suitable: 'Hospitals, radiology departments and diagnostic imaging centres'
    },
    {
      id: 'infection-control-products', category: 'surgical', categoryName: 'Surgical Instruments & Consumables', name: 'Infection Control Products', image: 'assets/images/infection-control-products.jpg',
      description: 'Protective and hygiene supplies for healthcare environments.',
      overview: 'Practical infection-control products to support hygiene protocols, staff protection and safer healthcare environments.',
      features: ['Everyday protective essentials', 'Products for hygiene-focused workflows', 'Options for varied departments'],
      applications: ['Routine infection control', 'Procedure preparation', 'Environmental hygiene support'],
      suitable: 'Hospitals, clinics, laboratories and institutional healthcare teams'
    }
  ];

  const productCard = (product, index) => `
    <article class="product-card" data-category="${product.category}" data-product-id="${product.id}" style="animation-delay:${index * 55}ms">
      <button class="product-card__image" type="button" data-view-product="${product.id}" aria-label="View details for ${product.name}">
        <img src="${product.image}" alt="${product.name} product reference" width="800" height="480" loading="lazy">
        <span class="product-card__number">${String(index + 1).padStart(2, '0')}</span>
      </button>
      <div class="product-card__body">
        <span class="product-card__category">${product.categoryName}</span>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-card__actions">
          <button class="product-card__details" type="button" data-view-product="${product.id}">View details</button>
          <a class="product-card__enquire" href="contact.html?product=${product.id}#enquiry-form">Enquire Now <span>→</span></a>
        </div>
      </div>
    </article>`;

  const query = new URLSearchParams(window.location.search);
  const productGrid = document.getElementById('productsGrid');
  const productTabs = [...document.querySelectorAll('.product-tab')];
  const productModal = document.getElementById('productModal');
  let activeCategory = ['medical', 'furniture', 'surgical'].includes(query.get('category')) ? query.get('category') : 'medical';
  let currentProduct = null;
  let lastFocused = null;

  function renderProducts(category, focusTab = false) {
    if (!productGrid) return;
    activeCategory = category;
    const items = products.filter((product) => product.category === category);
    productGrid.setAttribute('aria-busy', 'true');
    productGrid.innerHTML = items.map(productCard).join('');
    requestAnimationFrame(() => productGrid.setAttribute('aria-busy', 'false'));
    productTabs.forEach((tab) => {
      const isActive = tab.dataset.category === category;
      tab.classList.toggle('active', isActive);
      tab.setAttribute('aria-selected', String(isActive));
      tab.tabIndex = isActive ? 0 : -1;
      if (isActive && focusTab) tab.focus();
    });
    const url = new URL(window.location.href);
    if (category === 'medical') url.searchParams.delete('category');
    else url.searchParams.set('category', category);
    history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
  }

  if (productGrid) {
    productTabs.forEach((tab, index) => {
      tab.addEventListener('click', () => renderProducts(tab.dataset.category));
      tab.addEventListener('keydown', (event) => {
        if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        let targetIndex = index;
        if (event.key === 'ArrowRight') targetIndex = (index + 1) % productTabs.length;
        if (event.key === 'ArrowLeft') targetIndex = (index - 1 + productTabs.length) % productTabs.length;
        if (event.key === 'Home') targetIndex = 0;
        if (event.key === 'End') targetIndex = productTabs.length - 1;
        renderProducts(productTabs[targetIndex].dataset.category, true);
      });
    });
    renderProducts(activeCategory);
  }

  // Product detail modal exists only on the dedicated Products page.
  const modalDialog = productModal?.querySelector('.modal__dialog');
  const modalClose = productModal?.querySelector('.modal__close');
  const modalElements = productModal ? {
    image: document.getElementById('modalImage'),
    category: document.getElementById('modalCategory'),
    title: document.getElementById('modalTitle'),
    overview: document.getElementById('modalOverview'),
    features: document.getElementById('modalFeatures'),
    applications: document.getElementById('modalApplications'),
    suitable: document.getElementById('modalSuitable'),
    request: document.getElementById('modalRequest'),
    quote: document.getElementById('modalQuote')
  } : null;

  function openModal(productId) {
    if (!productModal || !modalElements) return;
    const product = products.find((item) => item.id === productId);
    if (!product) return;
    currentProduct = product;
    lastFocused = document.activeElement;
    modalElements.image.src = product.image;
    modalElements.image.alt = `${product.name} product reference`;
    modalElements.category.textContent = product.categoryName;
    modalElements.title.textContent = product.name;
    modalElements.overview.textContent = product.overview;
    modalElements.features.innerHTML = product.features.map((item) => `<li>${item}</li>`).join('');
    modalElements.applications.innerHTML = product.applications.map((item) => `<li>${item}</li>`).join('');
    modalElements.suitable.textContent = product.suitable;
    const enquiryHref = `contact.html?product=${product.id}#enquiry-form`;
    modalElements.request.href = enquiryHref;
    modalElements.quote.href = enquiryHref;
    productModal.classList.add('is-open');
    productModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    window.setTimeout(() => modalClose.focus(), 60);
  }

  function closeModal() {
    if (!productModal) return;
    productModal.classList.remove('is-open');
    productModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    if (lastFocused) lastFocused.focus();
    currentProduct = null;
  }

  if (productModal) {
    document.addEventListener('click', (event) => {
      const viewButton = event.target.closest('[data-view-product]');
      if (viewButton) openModal(viewButton.dataset.viewProduct);
      if (event.target.closest('[data-close-modal]')) closeModal();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && productModal.classList.contains('is-open')) closeModal();
      if (event.key !== 'Tab' || !productModal.classList.contains('is-open')) return;
      const focusable = [...modalDialog.querySelectorAll('button, a[href]')].filter((el) => !el.disabled);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    });
  }

  // Sticky header, responsive navigation and back-to-top.
  const header = document.getElementById('siteHeader');
  const backToTop = document.getElementById('backToTop');
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');

  function handleScroll() {
    header?.classList.toggle('scrolled', window.scrollY > 12);
    backToTop?.classList.toggle('show', window.scrollY > 650);
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  menuToggle?.addEventListener('click', () => {
    const open = !nav.classList.contains('open');
    nav.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  });

  document.querySelectorAll('.nav-link').forEach((link) => link.addEventListener('click', () => {
    nav?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Open navigation menu');
  }));

  document.addEventListener('click', (event) => {
    if (nav?.classList.contains('open') && !event.target.closest('.nav-wrap')) {
      nav.classList.remove('open');
      menuToggle?.setAttribute('aria-expanded', 'false');
    }
  });
  backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Subtle entrance animation.
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      });
    }, { threshold: .1, rootMargin: '0px 0px -35px' });
    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('in-view'));
  }

  // Dedicated contact-page enquiry form.
  const form = document.getElementById('enquiryForm');
  const formSuccess = document.getElementById('formSuccess');
  const successWhatsApp = document.getElementById('successWhatsApp');

  function prefillEnquiry(product) {
    if (!form || !product) return;
    form.elements.category.value = product.category === 'medical' ? 'Medical Equipment' : product.category === 'furniture' ? 'Hospital Furniture' : (product.name.includes('Consumable') || product.name.includes('Infection') || product.name.includes('Contrast')) ? 'Consumables & Disposables' : 'Surgical Instruments';
    form.elements.productRequired.value = product.name;
  }

  function setError(input, message) {
    const field = input.closest('.field');
    field.classList.toggle('has-error', Boolean(message));
    input.setAttribute('aria-invalid', String(Boolean(message)));
    const error = field.querySelector('.error-message');
    if (error) error.textContent = message || '';
  }

  function validateForm() {
    const name = form.elements.fullName;
    const phone = form.elements.phone;
    const email = form.elements.email;
    let valid = true;
    if (name.value.trim().length < 2) { setError(name, 'Please enter your full name.'); valid = false; }
    else setError(name, '');
    const cleanPhone = phone.value.replace(/\D/g, '');
    if (cleanPhone.length < 10 || cleanPhone.length > 13) { setError(phone, 'Enter a valid 10-digit phone number.'); valid = false; }
    else setError(phone, '');
    if (email.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) { setError(email, 'Enter a valid email address.'); valid = false; }
    else setError(email, '');
    return valid;
  }

  if (form) {
    const requestedProduct = products.find((item) => item.id === query.get('product'));
    if (requestedProduct) prefillEnquiry(requestedProduct);

    ['fullName', 'phone', 'email'].forEach((name) => {
      form.elements[name].addEventListener('input', () => {
        if (form.elements[name].closest('.field').classList.contains('has-error')) validateForm();
      });
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      formSuccess.classList.remove('show');
      if (!validateForm()) {
        form.querySelector('.has-error input').focus();
        return;
      }
      const submitButton = form.querySelector('.btn--submit');
      submitButton.classList.add('loading');
      submitButton.disabled = true;
      const data = Object.fromEntries(new FormData(form).entries());
      const message = [
        'Hello Vibgyor Surgical, I would like to enquire about your medical equipment/products.', '',
        `Name: ${data.fullName}`, data.company ? `Hospital / Company: ${data.company}` : '',
        `Phone: ${data.phone}`, data.email ? `Email: ${data.email}` : '', data.city ? `City: ${data.city}` : '',
        data.category ? `Category: ${data.category}` : '', data.productRequired ? `Product Required: ${data.productRequired}` : '',
        data.quantity ? `Quantity: ${data.quantity}` : '', data.message ? `Requirement: ${data.message}` : ''
      ].filter(Boolean).join('\n');
      successWhatsApp.href = `https://wa.me/919958407651?text=${encodeURIComponent(message)}`;
      try { localStorage.setItem('vibgyorRecentEnquiry', JSON.stringify({ ...data, submittedAt: new Date().toISOString() })); } catch (_) {}
      window.setTimeout(() => {
        submitButton.classList.remove('loading');
        submitButton.disabled = false;
        formSuccess.classList.add('show');
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 750);
    });
  }

  // Loader and copyright year.
  const loader = document.getElementById('siteLoader');
  const hideLoader = () => loader?.classList.add('is-hidden');
  if (document.readyState === 'complete') hideLoader();
  else window.addEventListener('load', hideLoader, { once: true });
  window.setTimeout(hideLoader, 2200);
  document.querySelectorAll('#currentYear').forEach((year) => { year.textContent = new Date().getFullYear(); });
})();
