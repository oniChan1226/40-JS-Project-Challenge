const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click',(e) => {
    // console.log(e.target.dataset.id);
    const id = e.target.dataset.id;
    // Ensuring to respond only if clicked on an element that has some id attribute
    if(id) {
        // remove active from other buttons
        btns.forEach((btn) => {
            btn.classList.remove('active');
            e.target.classList.add('active');
        });
        articles.forEach((article) => {
            article.classList.remove('active');
        });
        const element = document.getElementById(id);
        element.classList.add('active');
    }
    
});