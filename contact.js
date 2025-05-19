document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value
        };
        
        // Мұнда форманы өңдеу логикасын қосу керек
        // Мысалы, API-ға жіберу немесе электронды пошта арқылы жіберу
        
        // Әзірге тек алерт көрсетеміз
        alert('Хабарламаңыз сәтті жіберілді! Біз сізбен жақын арада байланысамыз.');
        contactForm.reset();
    });
}); 