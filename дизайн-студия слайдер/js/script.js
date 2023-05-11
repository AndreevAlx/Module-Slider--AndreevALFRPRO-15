let entities = [
  {
    cityName: 'Rostov-on-Don LCD admiral',
    apartamentArea: '81 m2',
    repairTime: '3.5 months',
    repairCost: 'Upon request' ,
    url: './image/slider1.jpg' ,
    title: 'Rostov-on-Don, Admiral'
  },
  
  {
    cityName: 'Sochi Thieves',
    apartamentArea: '105 m2',
    repairTime: '4 months',
    repairCost: 'Upon request' ,
    url: './image/slider2.jpg' ,
    title: 'Sochi Thieves' 
    
  },
  
  {
    cityName: 'Rostov-on-Don Patriotic',
    apartamentArea: '93 m2',
    repairTime: '3 months',
    repairCost: 'Upon request' ,
    url: './image/slider3.jpg' ,
    title: 'Rostov-on-Don Patriotic'
    
  }
];
  let cityName = document.querySelector(".City-Name");
  let apartamentArea = document.querySelector(".area");
  let repairTime = document.querySelector(".repair-time");
  let repairCost = document.querySelector(".repair-cost");
  let title = document.querySelector(".section-2__navigation");
  //let ArrowLeft = document.querySelector(".longLeftWardsArrow");
  //let ArrowRight = document.querySelector(".longRightWardsArrow");
  //let Dots = document.querySelectorAll(".data-dots");
  //let imagesSlider = document.querySelector(".section-2-content__image");
  let arrowsDots = document.querySelectorAll(".longWardsArrow");
  let blockDots = document.querySelector(".section-2-slider-dots");
  
let index = 0;



function initSlider(index){
 
 initImages();
 initDots();
 initNav();
 initArrows();
 //changeSlideText();

 function changeSlideText(){
 document.querySelector(".City-Name").innerText = entities[index].cityName;
 document.querySelector(".area").innerText = entities[index].apartamentArea;
 document.querySelector(".repair-times").innerText = entities[index].repairTime;
 document.querySelector(".repair-costs").innerText = entities[index].repairCost;
 }

function initImages(){
let imagesSlider = document.querySelector(".section-2-content__image");
entities.forEach((image , index) => {
  let imageDiv = `
  <img class="image n${index} ${index === 0? "active" : ""}" src="${image.url}" data-index="${index}">`;
  imagesSlider.innerHTML += imageDiv;
});

}

function initArrows(){
  arrowsDots.forEach(arrow => {
    arrow.addEventListener("click" , function() {
      let curNumber = +document.querySelector(".image.active").dataset.index;
      if(arrow.classList.contains("Left")) {
        index = curNumber === 0? entities.length - 1 : curNumber -1;
      } else {
        index = curNumber === entities.length - 1? 0 : curNumber +1;
      }
      moveSlider(index);
    });
  });
}

function moveSlider(num){
  changeSlideText(num)
  document.querySelector(".image.active").classList.remove("active");
  document.querySelector(`.image.n${num}`).classList.add("active");

  document.querySelector(".section-2__item.active").classList.remove("active");
  document.querySelector(`.section-2__item.n${num}`).classList.add("active");
}

function initDots(){
  
  entities.forEach((item, index) => {
    let dotDiv = `<div class="point ${index} ${index === 0? "active" : ""}" data-dots="${index}"></div>`;
    blockDots.innerHTML += dotDiv;
  });
  document.querySelectorAll(".point").forEach(dotDiv => {
    dotDiv.addEventListener("click" , function() {
      moveSlider(this.dataset.dots);
    });
  });
}

function initNav(){
let blockNav = document.querySelector(".section-2__navigation");
entities.forEach((title , index) => {
  let navDiv = `<li><div class="section-2__item n${index} ${index === 0? "active" : ""}" data-title="${index}">${title.title}</div></li>`;
  blockNav.innerHTML += navDiv;
  });
  document.querySelectorAll(".section-2__item").forEach(navDiv => {
    navDiv.addEventListener("click" , function() {
      moveSlider(this.dataset.title);
    });
  });
}

}



document.addEventListener("DOMContentLoaded" , initSlider(index));