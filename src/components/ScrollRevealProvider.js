import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollRevealProvider
 *
 * Global IntersectionObserver-based scroll animations.
 * Adds / removes utility classes on any element that has a `data-reveal` attribute.
 *
 * Usage in JSX:
 *   <section
 *     className="section my-section reveal"
 *     data-reveal="left"         // left, right, up, down, fade
 *     data-reveal-once="true"    // optional, animate only first time
 *   >
 *     ...
 *   </section>
 *
 * The visual behavior is controlled via CSS classes in index.css:
 *   .reveal, .reveal-visible, .reveal-left, .reveal-right, etc.
 */
const ScrollRevealProvider = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    const elements = Array.from(
      document.querySelectorAll('[data-reveal]')
    );

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target;
          const direction = target.getAttribute('data-reveal') || 'up';
          const once = target.getAttribute('data-reveal-once') === 'true';

          if (entry.isIntersecting) {
            target.classList.add('reveal-visible');
            target.classList.add(`reveal-${direction}`);

            if (once) {
              observer.unobserve(target);
            }
          } else if (!once) {
            target.classList.remove('reveal-visible');
            target.classList.remove(`reveal-${direction}`);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    elements.forEach((el) => {
      // Ensure base class is present so CSS can start from a hidden state
      el.classList.add('reveal');
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);

  return null;
};

export default ScrollRevealProvider;