document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById('loader-wrapper');
    const body = document.body;

    const badgeContainers = document.querySelectorAll('[data-share-badge-id]');
    const totalBadges = badgeContainers.length;
    let loadedBadges = 0;

    const safetyTimeout = setTimeout(removeLoader, 8000);

    function removeLoader() {
        if (!loader) return;

        clearTimeout(safetyTimeout);

        loader.style.opacity = '0';
        body.classList.remove('loading');

        setTimeout(function() {
            if(loader.parentNode) {
                loader.remove();
            }
        }, 500);
    }

    function markBadgeAsLoaded() {
        loadedBadges++;
        if (loadedBadges >= totalBadges) {
            removeLoader();
        }
    }

    if (totalBadges === 0) {
        removeLoader();
        return;
    }

    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
                if (node.tagName === 'IFRAME') {
                    node.addEventListener('load', markBadgeAsLoaded);
                }
            });
        });
    });

    badgeContainers.forEach(function(container) {
        observer.observe(container, { childList: true });
    });
});