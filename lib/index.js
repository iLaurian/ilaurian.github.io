document.querySelectorAll('.dropdown-content a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const filter = e.target.dataset.filter;
        const items = document.querySelectorAll('.timeline-item');

        items.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
