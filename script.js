document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    
    const menuItems = [
        { text: 'Басты бет', href: 'index.html' },
        { text: 'Каталог', href: 'catalog.html' },
        { text: 'Компания туралы', href: 'about.html' },
        { text: 'Негізін қалаушы', href: 'founder.html' },
        { text: 'Байланыс', href: 'contact.html' }
    ];

    // Әлеуметтік желі сілтемелері
    const socialLinks = [
        { href: 'https://wa.me/yournumber', icon: 'fab fa-whatsapp' },
        { href: 'https://instagram.com/tulpar_autokaz', icon: 'fab fa-instagram' },
        { href: 'https://youtube.com/yourchannel', icon: 'fab fa-youtube' },
        { href: 'https://tiktok.com/@yourusername', icon: 'fab fa-tiktok' }
    ];

    mobileMenu.innerHTML = `
        <ul>
            ${menuItems.map(item => `
                <li><a href="${item.href}">${item.text}</a></li>
            `).join('')}
        </ul>
        <div class="mobile-socials">
            ${socialLinks.map(link => `
                <a href="${link.href}" target="_blank"><i class="${link.icon}"></i></a>
            `).join('')}
        </div>
    `;

    document.body.appendChild(mobileMenu);

    function openMenu() {
        mobileMenu.classList.add('active');
        burgerMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
        mobileMenu.classList.remove('active');
        burgerMenu.classList.remove('active');
        document.body.style.overflow = '';
    }

    burgerMenu.addEventListener('click', () => {
        if (mobileMenu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Мобильді менюдегі сілтемеге басқанда меню жабылады
    mobileMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            closeMenu();
        }
    });

    // Меню ашық кезде кез келген бос жерге басқанда жабылады
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            closeMenu();
        }
    });

    // Параллакс эффекті
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}); 