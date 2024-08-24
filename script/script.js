document.getElementById('cta-button').addEventListener('click', function() {
    alert('¡Gracias por tu interés! Pronto tendrás más información.');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
