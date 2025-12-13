window.addEventListener('load', () => {
    const loader = document.getElementById('loader-wrapper');
    const body = document.body;

    function removeLoader() {
        if (!loader) return;
        loader.style.opacity = '0';
        body.classList.remove('loading');
        setTimeout(() => loader.remove(), 2000);
    }

    removeLoader();
});
