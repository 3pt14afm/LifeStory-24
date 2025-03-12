function openArticle(articleUrl) {
    window.location.href = articleUrl;
}

const menuBtn = document.querySelector('#menu-btn');
const navig = document.querySelector('.navig');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-times');
    navig.classList.toggle('active');
})
document.addEventListener('click', (event) => {
    if (!menuBtn.contains(event.target) && !navig.contains(event.target)) {
        menuBtn.classList.remove('fa-times'); 
        navig.classList.remove('active');    
    }
});


let lastScrollTop = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        header.style.top = "-90px";  // Hide header
    } else {
        // Scrolling up
        header.style.top = "0";  // Show header
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll values
});



document.addEventListener("DOMContentLoaded", function () {
    const events = document.querySelectorAll(".event");

    function toggleEvents() {
        const triggerBottom = window.innerHeight * 0.85;
        const triggerTop = window.innerHeight * 0.15; // Prevents reappearing above header

        events.forEach(event => {
            const eventTop = event.getBoundingClientRect().top;
            const eventBottom = event.getBoundingClientRect().bottom;

            if (eventTop < triggerBottom && eventBottom > triggerTop) {
                event.classList.add("show");
            } else {
                event.classList.remove("show"); // Hides when scrolling up
            }
        });
    }

    window.addEventListener("scroll", toggleEvents);
    toggleEvents(); // Run once on load
});






function showLogin() {
    document.getElementById('loginBox').style.display = 'block';
    document.getElementById('signupBox').style.display = 'none';
}

function showSignup() {
    document.getElementById('loginBox').style.display = 'none';
    document.getElementById('signupBox').style.display = 'block';
}



const scaleSections = document.querySelectorAll('.scale-section');

window.addEventListener('scroll', () => {
  scaleSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 400;

    if (sectionTop < triggerPoint) {
      section.classList.add('show');
    } else {
      section.classList.remove('show');
    }
  });
});
