window.addEventListener('load', function() {
    const target = document.getElementById('role-text');

    if (!target) {
        return;
    }

    const text = "Software Developer and CS Student @ University of Bucharest";
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            target.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();
});