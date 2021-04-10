const card = document.querySelector('.card');
const container = document.querySelector('.container');

// Items
const title = document.querySelector('.title');
const logo = document.querySelector('.logo');
const image1 = document.querySelector('.image-1');
const image2 = document.querySelector('.image-2');
const image3 = document.querySelector('.image-3');

container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth/2 - e.pageX) / 20;
    let yAxis = (window.innerHeight/2 - e.pageY) / 20;
    card.style.transform = `rotateX(${xAxis}deg) rotateY(${yAxis}deg)`;
})

container.addEventListener('mouseenter', (e) => {
    card.style.transition = "none";

    title.style.transform = "translateZ(350px)";
    logo.style.transform = 'translateZ(200px) rotateZ(-15deg)';
    image1.style.transform = 'translateZ(200px) rotateZ(-15deg)'; 
    image2.style.transform = 'translateZ(200px) rotateZ(15deg)';
    image3.style.transform = 'translateZ(200px) rotateZ(10deg)';
})

container.addEventListener('mouseleave' ,(e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    title.style.transform = "translateZ(0px)";
    logo.style.transform = 'translateZ(0px) rotateZ(0deg)';
    image1.style.transform = 'translateZ(0px) rotateZ(0deg)'; 
    image2.style.transform = 'translateZ(0px) rotateZ(0deg)';
    image3.style.transform = 'translateZ(0px) rotateZ(0deg)';
})
