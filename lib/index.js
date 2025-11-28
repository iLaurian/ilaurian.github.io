document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#experience-container');
    const filterButtons = document.querySelectorAll('.filter-btn');
    let allData = [];

    fetch('./data/experience.json')
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
        .then(data => {
            allData = data;
            renderTimeline(allData);
        })
        .catch(error => {
            console.error("Error fetching data", error);
            container.innerHTML = '<p>Error loading experience data.</p>';
        })

    function renderTimeline(data) {
        container.innerHTML = '';
        data.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('timeline-item', item.category);

            let htmlContent = `<h4>${item.title}</h4>`;

            if (item.organization) {
                htmlContent += `<h4>${item.organization}</h4>`;
            }

            htmlContent += `<p>${item.date}</p>`;

            if (item.description) {
                htmlContent += `<p>${item.description}</p>`;
            }

            card.innerHTML = htmlContent;
            container.appendChild(card);
        })

        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const filterValue = btn.getAttribute('data-filter');

                if (filterValue === 'all') {
                    renderTimeline(allData);
                } else {
                    const filteredData = allData.filter(item => item.category === filterValue);
                    renderTimeline(filteredData);
                }
            });
        });
    }
})