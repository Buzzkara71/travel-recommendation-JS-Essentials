
document.addEventListener('DOMContentLoaded', () => {


    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page-content');


    const contactForm = document.getElementById('contact-form');
    const formSuccessMessage = document.getElementById('form-success');


    const searchInput = document.getElementById('search-input');
    const allRecs = document.querySelectorAll('.personalized-rec');
    const noResultsMessage = document.getElementById('no-results-message');

    // ======== 1. Page Navigation Logic ========
    function showPage(pageId) {
        pages.forEach(page => page.classList.remove('active'));
        const targetPage = document.getElementById(pageId);
        if (targetPage) targetPage.classList.add('active');

        navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.page === pageId);
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            showPage(link.dataset.page);
        });
    });

    showPage('home'); 

    // ======== 2. Contact Form Logic ========
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                formSuccessMessage.style.display = 'block';
                contactForm.reset();
                setTimeout(() => {
                    formSuccessMessage.style.display = 'none';
                }, 3000);
            } else {
                alert('Please fill out all fields.');
            }
        });
    }

    // ======== 3. Typing Search Logic ========
    if (searchInput) {
        searchInput.addEventListener('keyup', () => {
            const searchTerm = searchInput.value.toLowerCase();
            let visibleCardCount = 0;

            allRecs.forEach(card => {
               
                const title = card.querySelector('h3').textContent.toLowerCase();
                
                if (title.includes(searchTerm)) {
                    card.style.display = 'block'; 
                    visibleCardCount++;
                } else {
                    card.style.display = 'none'; 
                }
            });

            if (visibleCardCount === 0) {
                noResultsMessage.style.display = 'block';
            } else {
                noResultsMessage.style.display = 'none';
            }
        });
    }

});