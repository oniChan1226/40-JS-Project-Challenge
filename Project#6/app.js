// Two methods
// 1-> using selectors inside the element instead of traversing the DOM

const questions = document.querySelectorAll(".question");

questions.forEach((question)=> {
    // the button inside the respective article will be selected
    let btn = question.querySelector('.question-btn');
    // console.log(btn);
    btn.addEventListener('click', () => {
        question.classList.toggle("show-text");
    })
})


// 2-> Traversing DOM
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//         console.log(e.currentTarget.parentElement.parentElement);
//         let question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text");
//     })
// })