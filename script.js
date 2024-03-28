document.addEventListener("DOMContentLoaded", function() {
    const homeBtn = document.querySelector('a[href="#home"]');
    const menuBtn = document.getElementById('order-online-btn');
    const cartBtn = document.getElementById('cart-btn');
    const homeSection = document.getElementById('home');
    const menuSection = document.getElementById('menu');
    const cartSection = document.getElementById('cart');

    function hideAllSections() {
        homeSection.style.display = 'none';
        menuSection.style.display = 'none';
        cartSection.style.display = 'none';
    }

    function showSection(section) {
        hideAllSections();
        section.style.display = 'block';
    }

    // Initially show home section
    showSection(homeSection);

    homeBtn.addEventListener('click', function(event) {
        event.preventDefault();
        showSection(homeSection);
    });

    menuBtn.addEventListener('click', function(event) {
        event.preventDefault();
        showSection(menuSection);
    });

    cartBtn.addEventListener('click', function(event) {
        event.preventDefault();
        showSection(orderSection);
    });
});
