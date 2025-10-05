document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('js-hamburger');
    const nav = document.getElementById('js-nav');
    if (!btn || !nav) return;
  
    const toggleMenu = () => {
      const isOpen = btn.classList.toggle('active');
      nav.classList.toggle('active', isOpen);
      document.body.classList.toggle('no-scroll', isOpen);
    };
  
    btn.addEventListener('click', toggleMenu);
  
    // メニュー内のリンクを押したら閉じる
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        btn.classList.remove('active');
        nav.classList.remove('active');
        document.body.classList.remove('no-scroll');
      });
    });
  });
  