(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.getElementById('main-navigation');
  const closeMenu = (restoreFocus = false) => {
    if (!menuButton || !navigation) return;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', '展开导航菜单');
    navigation.classList.remove('open');
    if (restoreFocus) menuButton.focus();
  };
  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? '收起导航菜单' : '展开导航菜单');
      navigation.classList.toggle('open', open);
    });
    navigation.addEventListener('click', (event) => {
      if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') closeMenu(true);
    });
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.site-header')) closeMenu();
    });
    window.matchMedia('(min-width: 961px)').addEventListener('change', () => closeMenu());
  }

  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    const updateBackToTop = () => {
      const visible = window.scrollY > 500;
      backToTop.classList.toggle('visible', visible);
      backToTop.tabIndex = visible ? 0 : -1;
      backToTop.setAttribute('aria-hidden', String(!visible));
    };
    window.addEventListener('scroll', updateBackToTop, { passive: true });
    updateBackToTop();
  }
})();
