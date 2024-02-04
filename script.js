// const click = document.querySelector('.hamMenu');
// const mobileNav = document.querySelector('.m-nav');

// click.addEventListener('click', () => {
//     mobileNav.classList.toggle('hidden');
// });

document.addEventListener("DOMContentLoaded", function() {
    const hamMenu = document.querySelector('.hamMenu');
    const navbar = document.querySelector('.m-nav');

    // Tambahkan event listener untuk klik pada tombol hamburger
    hamMenu.addEventListener('click', function() {
        // Toggle class untuk menampilkan/menyembunyikan navbar
        if(navbar.classList.contains('opacity-0')) {
            navbar.classList.replace('opacity-0', 'opacity-1');
        } else if(navbar.classList.contains('opacity-1')) {
            navbar.classList.replace('opacity-1', 'opacity-0');
        };
        
    });


});

