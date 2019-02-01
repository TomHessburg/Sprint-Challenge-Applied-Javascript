class Carousel {
    constructor(item){
        this.item = item;
        
        let leftBtn = document.querySelector(".left-button");
        let rightBtn = document.querySelector(".right-button");

        let currentImg = document.querySelector(`img[data-img="${myCounter}"]`);
        carImgs[currentImg.dataset.img].style.display = "block";

        leftBtn.addEventListener("click", () => this.leftSlide());
        rightBtn.addEventListener("click", () => this.rightSlide());
    }
    leftSlide(){
        if(myCounter === 0){
            myCounter = 3
        }
    
        carImgs.forEach(image => image.style.display = "none");
        //carImgs[Math.floor(Math.random()*3)].style.display = "block";
        carImgs[myCounter--].style.display = "block";
    }

    rightSlide(){
        if(myCounter === 3){
            myCounter = 0
        }
        carImgs.forEach(image => image.style.display = "none");
        //carImgs[Math.floor(Math.random()*3)].style.display = "block";
        carImgs[myCounter++].style.display = "block";
    }

}



let myCounter = 0;

let carousel = document.querySelector(".carousel");
let carImgs = document.querySelectorAll(".carousel img");

console.log(carImgs);

carImgs.forEach(img => new Carousel(img));

