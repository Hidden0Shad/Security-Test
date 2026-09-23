const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
        const isOpen = mainNav.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
}

document.querySelectorAll('[data-demo-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const toast = document.querySelector('.toast');
        if (toast) {
            toast.textContent = 'Thanks. We will be in touch shortly.';
            toast.classList.add('show');
            window.setTimeout(() => toast.classList.remove('show'), 3500);
        }
        form.reset();
    });
});
