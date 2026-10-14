/* Royal Elevators & Escalators Ltd. — interactions */
(function () {
  'use strict';

  /* ---------------- Data ---------------- */

  var SERVICES = [
    {
      title: 'Passenger Elevators',
      img: 'assets/img/service-passenger.jpg',
      desc: 'Smooth, quiet and efficient passenger elevators engineered for comfort, capacity and dependable daily operation.',
      features: ['Passenger & freight configurations', 'Capacity- and traffic-matched selection', 'Modern, durable cabin interiors']
    },
    {
      title: 'Commercial Elevators',
      img: 'assets/img/service-commercial.jpg',
      desc: 'High-performance elevators for offices, hotels and mixed-use developments, built to handle heavy traffic reliably.',
      features: ['High-traffic performance', 'Energy-efficient drive systems', 'Coordinated group control']
    },
    {
      title: 'Residential Elevators',
      img: 'assets/img/service-residential.jpg',
      desc: 'Space-efficient home and low-rise lifts that bring convenience and accessibility to villas and residential buildings.',
      features: ['Compact, quiet operation', 'Accessible entry options', 'Elegant interior finishes']
    },
    {
      title: 'Panoramic Elevators',
      img: 'assets/img/service-panoramic.jpg',
      desc: 'Glass observation elevators that combine movement with striking views, adding a signature architectural feature.',
      features: ['Full-glass panoramic cabins', 'Striking architectural statement', 'Smooth, scenic travel']
    },
    {
      title: 'Escalators & Moving Walkways',
      img: 'assets/img/service-escalator.jpg',
      desc: 'Durable escalators and moving walkways that move large volumes of people smoothly in commercial and public spaces.',
      features: ['Heavy-duty, safe operation', 'Suitable for retail & transit', 'Low-maintenance design']
    },
    {
      title: 'Elevator Installation',
      img: 'assets/img/service-installation.jpg',
      desc: 'Professional planning, delivery and installation by experienced technicians, coordinated to keep your project on schedule.',
      features: ['Project management', 'Certified installation practices', 'Safe, on-time delivery']
    },
    {
      title: 'Maintenance & Servicing',
      img: 'assets/img/service-maintenance.jpg',
      desc: 'Preventive maintenance, safety inspections and responsive servicing that keep your equipment running at its best.',
      features: ['Scheduled preventive care', 'Safety inspections', 'Rapid response servicing']
    },
    {
      title: 'Modernization & Upgrades',
      img: 'assets/img/service-modernization.jpg',
      desc: 'Upgrade aging systems with modern controls, energy-efficient drives and refreshed interiors for better performance and safety.',
      features: ['Modern control systems', 'Energy-efficient drives', 'Refreshed cabin interiors']
    }
  ];

  var PROJECTS = [
    {
      title: 'Commercial Tower',
      category: 'commercial',
      location: 'Mogadishu',
      type: 'Commercial Elevators',
      img: 'assets/img/project-1.jpg',
      desc: 'A high-rise commercial development supported by high-traffic passenger elevators designed for dependable, continuous operation.',
      meta: { Location: 'Mogadishu', Type: 'Commercial Elevators', Scope: 'Passenger lifts' }
    },
    {
      title: 'Residential Residences',
      category: 'residential',
      location: 'Mogadishu',
      type: 'Residential Elevators',
      img: 'assets/img/project-2.jpg',
      desc: 'Modern residential apartments equipped with quiet, space-efficient home elevators for everyday convenience and accessibility.',
      meta: { Location: 'Mogadishu', Type: 'Residential Elevators', Scope: 'Home & low-rise lifts' }
    },
    {
      title: 'Office Headquarters',
      category: 'commercial',
      location: 'Mogadishu',
      type: 'Passenger Elevators',
      img: 'assets/img/project-3.jpg',
      desc: 'A contemporary office headquarters with coordinated passenger elevators supporting smooth movement throughout the building.',
      meta: { Location: 'Mogadishu', Type: 'Passenger Elevators', Scope: 'Group-controlled lifts' }
    },
    {
      title: 'Luxury Villa',
      category: 'panoramic',
      location: 'Mogadishu',
      type: 'Panoramic Elevators',
      img: 'assets/img/project-4.jpg',
      desc: 'A premium private residence featuring a panoramic glass elevator as a central architectural and design feature.',
      meta: { Location: 'Mogadishu', Type: 'Panoramic Elevators', Scope: 'Glass cabin lift' }
    },
    {
      title: 'Retail Mall',
      category: 'escalators',
      location: 'Mogadishu',
      type: 'Escalators & Moving Walkways',
      img: 'assets/img/project-5.jpg',
      desc: 'A busy retail environment supported by durable escalators engineered for high footfall and reliable all-day operation.',
      meta: { Location: 'Mogadishu', Type: 'Escalators', Scope: 'Public circulation' }
    },
    {
      title: 'Mixed-Use Development',
      category: 'modernization',
      location: 'Mogadishu',
      type: 'Modernization & Upgrades',
      img: 'assets/img/project-6.jpg',
      desc: 'An existing building upgraded with modern controls, energy-efficient drives and refreshed elevator interiors.',
      meta: { Location: 'Mogadishu', Type: 'Modernization', Scope: 'System upgrade' }
    }
  ];

  /* ---------------- DOM helpers ---------------- */

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  }

  /* ---------------- Render services ---------------- */

  var servicesGrid = document.querySelector('.services-grid');
  if (servicesGrid) {
    SERVICES.forEach(function (s) {
      var card = el('article', 'service-card reveal');
      card.setAttribute('data-service', s.title);

      var media = el('div', 'service-media');
      var img = el('img');
      img.src = s.img;
      img.alt = s.title;
      img.loading = 'lazy';
      img.decoding = 'async';
      media.appendChild(img);

      var body = el('div', 'service-body');
      body.appendChild(el('h3', null, s.title));
      body.appendChild(el('p', null, s.desc));

      var link = el('button', 'service-link');
      link.type = 'button';
      link.textContent = 'Learn more';
      link.setAttribute('data-open', 'service');
      body.appendChild(link);

      card.appendChild(media);
      card.appendChild(body);
      servicesGrid.appendChild(card);
    });
  }

  /* ---------------- Render projects ---------------- */

  var projectsGrid = document.querySelector('.projects-grid');
  if (projectsGrid) {
    PROJECTS.forEach(function (p) {
      var card = el('article', 'project-card reveal');
      card.setAttribute('data-category', p.category);
      card.setAttribute('data-project', p.title);

      var media = el('div', 'project-media');
      var img = el('img');
      img.src = p.img;
      img.alt = p.title + ' — ' + p.type;
      img.loading = 'lazy';
      img.decoding = 'async';
      media.appendChild(img);
      media.appendChild(el('span', 'project-tag', p.type));

      var body = el('div', 'project-body');
      body.appendChild(el('h3', null, p.title));
      body.appendChild(el('p', 'project-loc', p.location + ' · ' + p.type));
      body.appendChild(el('span', 'project-more', 'View details'));

      card.appendChild(media);
      card.appendChild(body);
      projectsGrid.appendChild(card);
    });
  }

  /* ---------------- Reveal on scroll ---------------- */

  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (n) { revealObserver.observe(n); });
  } else {
    revealEls.forEach(function (n) { n.classList.add('is-in'); });
  }

  /* ---------------- Navigation ---------------- */

  var nav = document.getElementById('nav');
  var navToggle = document.querySelector('.nav-toggle');
  var mobileMenu = document.getElementById('mobile-menu');

  function onScroll() {
    nav.classList.toggle('is-scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function closeMenu() {
    if (mobileMenu && !mobileMenu.hidden) {
      mobileMenu.hidden = true;
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open menu');
    }
  }

  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', function () {
      var open = mobileMenu.hidden;
      mobileMenu.hidden = !open;
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
  }

  // Scroll-spy active link
  var sections = document.querySelectorAll('main section[id]');
  var navLinks = document.querySelectorAll('.nav-links .nav-link[href^="#"]');
  if ('IntersectionObserver' in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = '#' + entry.target.id;
          navLinks.forEach(function (l) {
            l.classList.toggle('is-active', l.getAttribute('href') === id);
          });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------------- Project filters ---------------- */

  var filterBar = document.querySelector('.filter-bar');
  if (filterBar && projectsGrid) {
    filterBar.addEventListener('click', function (e) {
      var chip = e.target.closest('.filter-chip');
      if (!chip) return;
      filterBar.querySelectorAll('.filter-chip').forEach(function (c) { c.classList.remove('is-active'); });
      chip.classList.add('is-active');
      var f = chip.getAttribute('data-filter');
      projectsGrid.querySelectorAll('.project-card').forEach(function (card) {
        var show = f === 'all' || card.getAttribute('data-category') === f;
        card.classList.toggle('is-hidden', !show);
      });
    });
  }

  /* ---------------- Modals ---------------- */

  var serviceModal = document.getElementById('service-modal');
  var projectModal = document.getElementById('project-modal');

  function openModal(modal) { if (modal) modal.hidden = false; document.body.style.overflow = 'hidden'; }
  function closeModal(modal) { if (modal) modal.hidden = true; document.body.style.overflow = ''; }

  function closeAll() {
    closeModal(serviceModal);
    closeModal(projectModal);
    closeLightbox();
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAll();
  });

  function bindModalClose(modal) {
    if (!modal) return;
    modal.querySelectorAll('[data-close]').forEach(function (btn) {
      btn.addEventListener('click', function () { closeModal(modal); });
    });
    modal.addEventListener('click', function (e) {
      if (e.target === modal || e.target.classList.contains('modal-backdrop')) closeModal(modal);
    });
  }
  bindModalClose(serviceModal);
  bindModalClose(projectModal);

  function fillServiceModal(title) {
    var s = SERVICES.filter(function (x) { return x.title === title; })[0];
    if (!s) return;
    document.getElementById('sm-image').src = s.img;
    document.getElementById('sm-image').alt = s.title;
    document.getElementById('sm-title').textContent = s.title;
    document.getElementById('sm-desc').textContent = s.desc;
    var list = document.getElementById('sm-list');
    list.innerHTML = '';
    s.features.forEach(function (f) { list.appendChild(el('li', null, f)); });
    var link = serviceModal.querySelector('[data-service-link]');
    if (link) link.setAttribute('data-service', s.title);
  }

  function fillProjectModal(title) {
    var p = PROJECTS.filter(function (x) { return x.title === title; })[0];
    if (!p) return;
    document.getElementById('pm-image').src = p.img;
    document.getElementById('pm-image').alt = p.title;
    document.getElementById('pm-title').textContent = p.title;
    document.getElementById('pm-desc').textContent = p.desc;
    var meta = document.getElementById('pm-meta');
    meta.innerHTML = '';
    Object.keys(p.meta).forEach(function (k) {
      var li = el('li');
      li.appendChild(el('span', 'meta-label', k));
      li.appendChild(el('span', 'meta-value', p.meta[k]));
      meta.appendChild(li);
    });
  }

  document.addEventListener('click', function (e) {
    var openBtn = e.target.closest('[data-open="service"]');
    if (openBtn) {
      var card = openBtn.closest('.service-card');
      if (card) { fillServiceModal(card.getAttribute('data-service')); openModal(serviceModal); }
      return;
    }
    var projCard = e.target.closest('.project-card');
    if (projCard && !e.target.closest('[data-open]')) {
      fillProjectModal(projCard.getAttribute('data-project'));
      openModal(projectModal);
      return;
    }
    var reqLink = e.target.closest('[data-service-link]');
    if (reqLink) {
      var service = reqLink.getAttribute('data-service');
      if (service) preselectService(service);
      closeModal(serviceModal);
      scrollToContact();
    }
  });

  /* ---------------- Lightbox ---------------- */

  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  var lightboxCaption = document.getElementById('lightbox-caption');

  function openLightbox(img, caption) {
    if (!lightbox) return;
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = caption || img.alt || '';
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    if (lightbox && !lightbox.hidden) {
      lightbox.hidden = true;
      document.body.style.overflow = '';
    }
  }

  document.querySelectorAll('.gallery-item img').forEach(function (img) {
    img.addEventListener('click', function () { openLightbox(img, img.alt); });
  });
  if (lightbox) {
    lightbox.querySelectorAll('[data-close]').forEach(function (b) {
      b.addEventListener('click', closeLightbox);
    });
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }

  /* ---------------- Contact form ---------------- */

  var form = document.getElementById('contact-form');
  var serviceSelect = document.getElementById('cf-service');

  function preselectService(name) {
    if (!serviceSelect || !name) return;
    for (var i = 0; i < serviceSelect.options.length; i++) {
      if (serviceSelect.options[i].value === name) { serviceSelect.value = name; break; }
    }
  }
  function scrollToContact() {
    var c = document.getElementById('contact');
    if (c) c.scrollIntoView({ behavior: 'smooth' });
  }

  if (form) {
    var nameField = document.getElementById('cf-name');
    var emailField = document.getElementById('cf-email');
    var phoneField = document.getElementById('cf-phone');
    var serviceField = document.getElementById('cf-service');
    var messageField = document.getElementById('cf-message');
    var websiteField = document.getElementById('cf-website');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = document.getElementById('form-status');
      var btn = document.getElementById('cf-submit');
      status.className = 'form-status';
      status.textContent = '';

      var name = nameField.value.trim();
      var email = emailField.value.trim();
      var message = messageField.value.trim();
      var phone = phoneField.value.trim();

      // Client-side validation
      var ok = true;
      [[nameField, name], [emailField, email], [messageField, message]].forEach(function (pair) {
        var field = pair[0];
        field.classList.remove('is-invalid');
        if (!pair[1]) { field.classList.add('is-invalid'); ok = false; }
      });
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailField.classList.add('is-invalid'); ok = false;
      }
      if (!ok) {
        status.className = 'form-status err';
        status.textContent = 'Please complete the required fields with a valid email.';
        return;
      }

      // Honeypot: silently ignore bot submissions
      if (websiteField.value) { form.reset(); return; }

      btn.disabled = true;
      btn.textContent = 'Sending…';

      var payload = new FormData();
      payload.append('name', name);
      payload.append('email', email);
      payload.append('phone', phone);
      payload.append('service', serviceField.value);
      payload.append('message', message);

      fetch('contact.php', { method: 'POST', body: payload, headers: { 'Accept': 'application/json' } })
        .then(function (res) { return res.json().catch(function () { throw new Error('bad-response'); }); })
        .then(function (data) {
          if (data && data.ok) {
            status.className = 'form-status ok';
            status.textContent = 'Thank you — your message has been sent. We\'ll be in touch shortly.';
            form.reset();
          } else {
            throw new Error((data && data.error) || 'send-failed');
          }
        })
        .catch(function () {
          status.className = 'form-status err';
          status.textContent = 'Sorry, something went wrong. Please try again or contact us directly by email or WhatsApp.';
        })
        .finally(function () {
          btn.disabled = false;
          btn.textContent = 'Send Message';
        });
    });
  }

  /* ---------------- Footer year ---------------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
