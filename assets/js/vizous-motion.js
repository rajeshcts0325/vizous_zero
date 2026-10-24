(() => {
  'use strict';

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer:fine) and (min-width: 900px)').matches;

  function initReveals(root = document) {
    const elements = root.querySelectorAll(
      '.v-reveal:not([data-v-reveal-ready]), .vz-reveal:not([data-v-reveal-ready])'
    );

    if (!('IntersectionObserver' in window) || reducedMotion) {
      elements.forEach(el => {
        el.classList.add('is-visible');
        el.dataset.vRevealReady = 'true';
      });
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -45px 0px' });

    elements.forEach(el => {
      el.dataset.vRevealReady = 'true';
      observer.observe(el);
    });
  }

  function initCursor() {
    if (reducedMotion || !finePointer || document.querySelector('.v-cursor-dot')) return;

    document.body.classList.add('v-custom-cursor');
    const dot = document.createElement('span');
    const ring = document.createElement('span');
    dot.className = 'v-cursor-dot';
    ring.className = 'v-cursor-ring';
    dot.setAttribute('aria-hidden', 'true');
    ring.setAttribute('aria-hidden', 'true');
    document.body.append(dot, ring);

    let x = -100, y = -100, rx = -100, ry = -100, frame = 0;
    document.addEventListener('mousemove', event => {
      x = event.clientX;
      y = event.clientY;
      dot.style.transform = `translate3d(${x}px,${y}px,0)`;

      if (!frame) {
        frame = requestAnimationFrame(function moveRing() {
          rx += (x - rx) * 0.22;
          ry += (y - ry) * 0.22;
          ring.style.transform = `translate3d(${rx}px,${ry}px,0)`;
          if (Math.abs(x - rx) > 0.2 || Math.abs(y - ry) > 0.2) {
            frame = requestAnimationFrame(moveRing);
          } else {
            frame = 0;
          }
        });
      }
    }, { passive: true });

    document.addEventListener('mouseover', event => {
      const target = event.target instanceof Element ? event.target : null;
      if (target && target.closest('a,button,[role="button"],.v-card,.vz-service-card,.project-card')) {
        document.body.classList.add('v-cursor-hover');
      } else {
        document.body.classList.remove('v-cursor-hover');
      }
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
      dot.style.opacity = '';
      ring.style.opacity = '';
    });
  }

  function initHeroVideo() {
    document.querySelectorAll('.v-hero-video').forEach(video => {
      if (video.dataset.vVideoReady) return;
      video.dataset.vVideoReady = 'true';

      const attemptPlay = () => {
        if (reducedMotion) {
          video.pause();
          return;
        }
        const promise = video.play();
        if (promise && typeof promise.catch === 'function') {
          promise.catch(() => { video.style.display = 'none'; });
        }
      };

      video.addEventListener('error', () => { video.style.display = 'none'; });
      if (document.visibilityState === 'visible') attemptPlay();
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') attemptPlay();
        else video.pause();
      });
    });
  }

  function initMagneticButtons() {
    if (reducedMotion || !finePointer) return;
    document.querySelectorAll('.v-magnetic').forEach(button => {
      if (button.dataset.vMagneticReady) return;
      button.dataset.vMagneticReady = 'true';
      button.addEventListener('mousemove', event => {
        const rect = button.getBoundingClientRect();
        const dx = (event.clientX - rect.left - rect.width / 2) * 0.08;
        const dy = (event.clientY - rect.top - rect.height / 2) * 0.12;
        button.style.transform = `translate(${dx}px,${dy}px)`;
      });
      button.addEventListener('mouseleave', () => { button.style.transform = ''; });
    });
  }

  function initHeroGlow() {
    document.querySelectorAll('.v-hero').forEach(hero => {
      const glow = hero.querySelector('.v-cursor-glow');
      if (!glow || hero.dataset.vGlowReady) return;
      hero.dataset.vGlowReady = 'true';
      hero.addEventListener('mousemove', event => {
        const rect = hero.getBoundingClientRect();
        glow.style.left = `${event.clientX - rect.left}px`;
        glow.style.top = `${event.clientY - rect.top}px`;
      }, { passive: true });
    });
  }

  function init() {
    initReveals();
    initCursor();
    initHeroVideo();
    initMagneticButtons();
    initHeroGlow();
  }

  window.VizousMotion = {
    init,
    refresh: initReveals
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
