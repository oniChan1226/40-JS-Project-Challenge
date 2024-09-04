// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener('click', () => {
    // linksContainer.classList.toggle("show-links");
    
    // This method add's height dynamically according the the number of links, you can add links in the index.html file and see the js magic 
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    // console.log(linksHeight);
    if(containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    }
    else {
        linksContainer.style.height = 0;
    }
    
})

// ********** fixed navbar ************
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
window.addEventListener('scroll', () => {
    // console.log(window.pageYOffset);
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    }
    else {
        navbar.classList.remove('fixed-nav');
    }

    if(scrollHeight > 500) {
        topLink.classList.add('show-link');
    }
    else {
        topLink.classList.remove('show-link');
    }
});



// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        // prevent default
        e.preventDefault();
        // navigate to specific spot
        // .slice(1) -> starts from the index of 1
        const id = e.currentTarget.getAttribute('href').slice(1);
        // console.log(id);
        const element = document.getElementById(id);
        // calculate the heights
        const navHeightNew = navbar.getBoundingClientRect().height;
        const containerHeightNew = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed-nav');

        // We dont get the exact position of the page because the navbar covers it
        let position = element.offsetTop - navHeightNew;

        // for desktop view
        if(!fixedNav) {
            position = position - navHeightNew;
        }
        // for mobile view
        if(navHeightNew > 82) {
            position = position + containerHeightNew;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });
        // close the mobile view links autmatically
        linksContainer.style.height = 0;
    });
});