
/* Mohammed Kotb Hemida — portfolio interactions
   Plain ES5-safe JS + Bootstrap's bundle (no build step, no npm). */

(function () {
  'use strict';

  /* ------------------------------------------------------------------
     1. Case study content (single source of truth for the project modals)
     ------------------------------------------------------------------ */
  var CASE_STUDIES = {
    asset: {
      title: 'Asset Management System',
      type: 'Internal business system, McDonald\u2019s',
      problem: 'The business needed one place to manage company assets, their current status and who holds them across departments.',
      solution: 'Angular screens for asset records and status, ASP.NET Core Web API endpoints for the workflow, and a SQL Server model covering assets, assignment and history.',
      result: 'Delivered as a complete web solution covering the asset lifecycle, built on a stack the team can keep extending with new modules.',
      duties: [
        'Analysed how assets are recorded, assigned and retired before designing the data model',
        'Built the ASP.NET Core Web API layer and the SQL Server schema behind it',
        'Developed the Angular screens for asset records, status and history',
        'Added new modules as the business asked for them'
      ],
      tech: ['ASP.NET Core', 'C#', 'Web API', 'Angular', 'SQL Server', 'LINQ', 'Visual Studio', 'VS Code']
    },
    ticketing: {
      title: 'Ticketing System',
      type: 'Support workflow system, McDonald\u2019s',
      problem: 'Support requests needed a structured queue so every issue could be logged, assigned and tracked instead of living in inboxes.',
      solution: 'An Angular interface for raising and following tickets, ASP.NET Core Web API handling assignment and status rules, and SQL Server holding full ticket history.',
      result: 'Delivered as a working ticketing solution covering logging, assignment and follow-up.',
      duties: [
        'Mapped the ticket lifecycle with the people handling the requests',
        'Implemented API endpoints for assignment, status changes and history',
        'Built the Angular views for raising, filtering and following tickets',
        'Fixed issues reported from live use and shipped requested features'
      ],
      tech: ['ASP.NET Core', 'C#', 'Web API', 'Angular', 'SQL Server', 'LINQ']
    },
    cms: {
      title: 'CMS',
      type: 'Content management system, McDonald\u2019s',
      problem: 'Website and internal content changes were blocked on development time, with no structured way for business teams to manage pages.',
      solution: 'An Angular admin interface for pages and content blocks over an ASP.NET Core API for content rules, with SQL Server storage.',
      result: 'Delivered as a CMS that lets non-developers publish and update content through a structured admin flow.',
      duties: [
        'Worked with content owners to define the page and block structure',
        'Developed the content APIs and the SQL Server schema behind them',
        'Built the Angular admin screens for editing and publishing',
        'Extended the content model as new page types were needed'
      ],
      tech: ['Angular', 'ASP.NET Core', 'C#', 'Web API', 'SQL Server']
    },
    inventory: {
      title: 'Inventory Management System',
      type: 'Business application, inventory',
      problem: 'Stock levels, item records and movements needed one reliable source of truth.',
      solution: 'An inventory application covering items and stock movements, with Angular screens, ASP.NET Core Web API endpoints and a dedicated SQL Server schema.',
      result: 'Developed as a business management solution designed to streamline internal inventory workflows.',
      duties: [
        'Defined the item and movement model with the business',
        'Implemented stock movement logic in the API layer',
        'Built the Angular screens for item records and stock views',
        'Added reporting queries on top of the SQL Server data'
      ],
      tech: ['Angular', 'ASP.NET Core', 'C#', 'Web API', 'SQL Server', 'LINQ']
    },
    documentera: {
      title: 'Documentera',
      type: 'Document management system, Smart Storm',
      problem: 'The business needed controlled storage, search and access to documents rather than scattered files with unclear versions.',
      solution: 'Upload and classification flows, search and retrieval, and permission handling — an Angular front end over an ASP.NET Core API with SQL Server storage.',
      result: 'Delivered as a document management solution covering storage, classification and retrieval.',
      duties: [
        'Analysed document types and access rules with stakeholders',
        'Developed the upload, classification and retrieval APIs',
        'Built the Angular interface for browsing and searching documents',
        'Worked through product problems and feature requests with the team'
      ],
      tech: ['ASP.NET Core', 'C#', 'Web API', 'Angular', 'SQL Server', 'LINQ']
    },
    hr: {
      title: 'HR System',
      type: 'Human resources system, Smart Storm',
      problem: 'HR processes needed a single system for employee records and requests instead of separated files.',
      solution: 'Employee data and HR workflows built with Angular, ASP.NET Core Web API and SQL Server.',
      result: 'Delivered as an HR system that centralises employee records and the workflows around them.',
      duties: [
        'Gathered requirements from HR staff before designing the screens',
        'Implemented employee record and workflow endpoints',
        'Built the Angular screens used day to day by HR',
        'Handled fixes and new features after release'
      ],
      tech: ['ASP.NET Core', 'C#', 'Web API', 'Angular', 'SQL Server', 'LINQ']
    },
    ecommerce: {
      title: 'E-Commerce Platform',
      type: 'Freelance e-commerce build',
      problem: 'The client needed to sell online, with product browsing, ordering and order management running through one connected system.',
      solution: 'Storefront catalog and cart built in Angular, order and pricing logic in an ASP.NET Core Web API, and catalog and orders stored in SQL Server.',
      result: 'Delivered as a working online store covering browsing, ordering and order administration.',
      duties: [
        'Talked through the client\u2019s product structure and ordering process first',
        'Built the catalog, cart and order flow end to end',
        'Developed the order management side for the client\u2019s staff',
        'Implemented requested changes as the store took shape'
      ],
      tech: ['ASP.NET Core', 'C#', 'Web API', 'Angular', 'SQL Server']
    },
    elearning: {
      title: 'E-Learning Platform',
      type: 'Freelance e-learning build',
      problem: 'A learning product needed courses, enrolments and learner progress in one place for both students and administrators.',
      solution: 'Angular learning and admin interfaces, ASP.NET Core APIs for course and enrolment logic, and SQL Server for content and progress data.',
      result: 'Delivered as an e-learning platform covering course delivery, enrolment and administration.',
      duties: [
        'Worked with the client to define how courses would be structured',
        'Developed the course and enrolment APIs',
        'Built the learner-facing and admin Angular interfaces',
        'Iterated on features based on client feedback'
      ],
      tech: ['ASP.NET Core', 'C#', 'Web API', 'Angular', 'SQL Server']
    },
    coursecenter: {
      title: 'Course Center Management System',
      type: 'Freelance management system',
      problem: 'A training centre needed courses, groups and student records organised together rather than kept separately.',
      solution: 'Angular screens for courses, groups and students, ASP.NET Core APIs for the workflows, and SQL Server for data storage.',
      result: 'Delivered as a management system for running courses and tracking student records.',
      duties: [
        'Analysed the centre\u2019s schedule and enrolment process with the owner',
        'Built the course, group and student modules end to end',
        'Developed the API and SQL Server data layer',
        'Communicated progress with the client through the build'
      ],
      tech: ['ASP.NET Core', 'C#', 'Web API', 'Angular', 'SQL Server', 'LINQ']
    }
  };

  var email = 'mohammedkotbhemida@gmail.com';

  /* ------------------------------------------------------------------
     2. Case study modal
     ------------------------------------------------------------------ */
  function text(id, value) {
    var el = document.getElementById(id);
    if (el) { el.textContent = value; }
  }

  function openCase(key) {
    var data = CASE_STUDIES[key];
    if (!data) { return; }

    text('caseModalTitle', data.title);
    text('caseModalType', data.type);
    text('caseModalProblem', data.problem);
    text('caseModalSolution', data.solution);
    text('caseModalResult', data.result);

    var duties = document.getElementById('caseModalDuties');
    var tech = document.getElementById('caseModalTech');
    if (duties) {
      duties.innerHTML = '';
      data.duties.forEach(function (item) {
        var li = document.createElement('li');
        li.textContent = item;
        duties.appendChild(li);
      });
    }
    if (tech) {
      tech.innerHTML = '';
      data.tech.forEach(function (item) {
        var li = document.createElement('li');
        li.className = 'chip';
        li.textContent = item;
        tech.appendChild(li);
      });
    }

    if (window.bootstrap && window.bootstrap.Modal) {
      window.bootstrap.Modal.getOrCreateInstance(document.getElementById('caseModal')).show();
    }
  }

  document.querySelectorAll('[data-case]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      openCase(btn.getAttribute('data-case'));
    });
  });

  /* ------------------------------------------------------------------
     3. Sticky nav: active section + close menu on mobile navigation
     ------------------------------------------------------------------ */
  var navHeight = 90;
  var sections = Array.prototype.slice.call(document.querySelectorAll('main section[id]'));
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-item-link'));

  function setActive(id) {
    navLinks.forEach(function (link) {
      var isActive = link.getAttribute('href') === '#' + id;
      link.classList.toggle('is-active', isActive);
      if (isActive) { link.setAttribute('aria-current', 'true'); }
      else { link.removeAttribute('aria-current'); }
    });
  }

  if ('IntersectionObserver' in window && sections.length) {
    var navObserver = new IntersectionObserver(function (entries) {
      var visible = entries
        .filter(function (e) { return e.isIntersecting; })
        .sort(function (a, b) { return b.intersectionRatio - a.intersectionRatio; });
      if (visible.length) { setActive(visible[0].target.id); }
    }, { rootMargin: '-' + navHeight + 'px 0px -55% 0px', threshold: [0.05, 0.25, 0.5] });
    sections.forEach(function (s) { navObserver.observe(s); });
  }

  var menu = document.getElementById('navMenu');
  if (menu) {
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.bootstrap && menu.classList.contains('show')) {
          window.bootstrap.Collapse.getOrCreateInstance(menu).hide();
        }
      });
    });
  }

  /* ------------------------------------------------------------------
     4. Reveal-on-scroll (one shared motion, stagger inside a group)
     ------------------------------------------------------------------ */
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

  if (reduceMotion || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    reveals.forEach(function (el) {
      var siblings = el.parentElement
        ? Array.prototype.filter.call(el.parentElement.children, function (c) { return c.classList.contains('reveal'); })
        : [el];
      var index = siblings.indexOf(el);
      if (index > -1) { el.style.setProperty('--d', Math.min(index, 4) * 70 + 'ms'); }
    });

    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

    reveals.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ------------------------------------------------------------------
     5. Copy email to clipboard
     ------------------------------------------------------------------ */
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var value = btn.getAttribute('data-copy');
      var done = function () {
        var original = btn.textContent;
        btn.textContent = 'Copied';
        window.setTimeout(function () { btn.textContent = original; }, 1800);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(done, done);
      } else {
        var input = document.createElement('input');
        input.value = value;
        document.body.appendChild(input);
        input.select();
        try { document.execCommand('copy'); } catch (e) { /* ignore */ }
        document.body.removeChild(input);
        done();
      }
    });
  });

  /* ------------------------------------------------------------------
     6. Contact form — builds the message and hands it to the mail client
        (no backend, nothing stored)
     ------------------------------------------------------------------ */
  var form = document.getElementById('contactForm');
  if (form) {
    var status = form.querySelector('.form-status');

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var name = form.querySelector('#cf-name');
      var mail = form.querySelector('#cf-email');
      var kind = form.querySelector('#cf-kind');
      var message = form.querySelector('#cf-message');
      var missing = false;

      [name, mail, message].forEach(function (field) {
        var invalid = !field.value.trim() || (field.type === 'email' && field.value.indexOf('@') < 1);
        field.classList.toggle('is-invalid', invalid);
        if (invalid) { missing = true; }
      });

      if (missing) {
        if (status) { status.textContent = 'Please add your name, a valid email address and a short description of your project.'; }
        return;
      }

      var body = [
        'Name: ' + name.value.trim(),
        'Email: ' + mail.value.trim(),
        'What I need: ' + kind.value,
        '',
        message.value.trim()
      ].join('\r\n');

      if (status) { status.textContent = 'Opening your email app with these details.'; }

      window.location.href = 'mailto:' + email +
        '?subject=' + encodeURIComponent('New project enquiry — ' + kind.value) +
        '&body=' + encodeURIComponent(body);
    });
  }

  /* ------------------------------------------------------------------
     7. Year stamp
     ------------------------------------------------------------------ */
  var year = document.getElementById('year');
  if (year) { year.textContent = String(new Date().getFullYear()); }
})();
