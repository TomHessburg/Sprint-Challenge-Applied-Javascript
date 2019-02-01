class Carousel {
    constructor(item){
        this.item = item;
        

            //using myData as my indexes
        //this.myData = this.item.dataset.img;
        //console.log(this.myData);


        let leftBtn = document.querySelector(".left-button");
        let rightBtn = document.querySelector(".right-button");

        let currentImg = document.querySelector(`img[data-img="0"]`);
        carImgs[currentImg.dataset.img].style.display = "block";

        leftBtn.addEventListener("click", () => this.leftSlide());
        rightBtn.addEventListener("click", () => this.rightSlide());
    }
    leftSlide(){
        
        carImgs.forEach(image => image.style.display = "none");
        carImgs[Math.floor(Math.random()*3)].style.display = "block";
    }

    rightSlide(){

        carImgs.forEach(image => image.style.display = "none");
        carImgs[Math.floor(Math.random()*3)].style.display = "block";
    }

}





let carousel = document.querySelector(".carousel");
let carImgs = document.querySelectorAll(".carousel img");

console.log(carImgs);

carImgs.forEach(img => new Carousel(img));

