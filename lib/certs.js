window.addEventListener('load', function() {
    const body = document.body;
    body.classList.add('loading');

    setTimeout(function() {
        const loader = document.getElementById('loader-wrapper');

        loader.style.opacity = '0';
        body.classList.remove('loading');

        setTimeout(function() {
            loader.remove();
        }, 500);

    }, 1000);
});