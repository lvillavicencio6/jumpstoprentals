fetch('../../header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;

        // Initialize the hamburger menu functionality after the header is loaded
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        // Toggle menu when hamburger is clicked
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInside = hamburger.contains(event.target) || navMenu.contains(event.target);
            
            if (!isClickInside && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });
