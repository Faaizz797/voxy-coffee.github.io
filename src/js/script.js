// navbarfixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const navbarFixed = header.offsetTop;
    const toTop = document.querySelector('#to-top')

    if (window.pageYOffset) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.add('hidden');
    }
}

// button humburger
const humburger = document.querySelector('#humburger');
const navMenu = document.querySelector('#nav-menu');

humburger.addEventListener('click', function () {
    humburger.classList.toggle('active');
    navMenu.classList.toggle('hidden');
})

// Click anywhere
window.addEventListener('click', function (a) {
    if (a.target != humburger && a.target != navMenu) {
        humburger.classList.remove('active');
        navMenu.classList.add('hidden');
    }
});

// Darkmode
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

// perpindahan tombol
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }
