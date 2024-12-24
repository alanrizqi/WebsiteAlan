// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let closeIcon = document.querySelector('#close-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.style.display = 'none'; // Sembunyikan ikon menu
    closeIcon.style.display = 'block'; // Tampilkan ikon silang
    navbar.classList.add('active'); // Tampilkan navbar
}

closeIcon.onclick = () => {
    closeIcon.style.display = 'none'; // Sembunyikan ikon silang
    menuIcon.style.display = 'block'; // Tampilkan ikon menu
    navbar.classList.remove('active'); // Sembunyikan navbar
}
//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top <= offset + height){
            //active navbar navLink
            navLinks.forEach(link =>{
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + + ']').classList.add('active');
        });
    }
    });
    //sticy header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}
