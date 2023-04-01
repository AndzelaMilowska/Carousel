//add necessary variables and css links
let clicks = 0;
let slideWidth = 0;
const rootEl = document.querySelector(':root');

class Slides {
    slidesContentList;
    /*
    0 - Background color 
    1 - background image 
    2 - Heading
    3 - Paragraph
    4 - Link//
    5 - Color (text)
    */
    constructor(slidesContentList) {
        this.slidesContentList = slidesContentList;
    }

    generateSlidesHTML() {
        let slidesHTML = `<section class="carousel__slides-container row flex-nowrap m-0 p-0">`
        for (let i = 0; i < this.slidesContentList.length; i++) {
            slidesHTML += `<section class="row flex-nowrap m-0 p-0 pe-auto">
            <a class="position-absolute w-100 h-100 z-2 p-0" href="${this.slidesContentList[i][4]}"></a>
                <div class="col-6 m-0 p-0 d-flex flex-column justify-content-center"  
                style="background-color: ${this.slidesContentList[i][0]}; color: ${this.slidesContentList[i][5]};">
                    <h2 class="carousel__slide__text-padding carousel__slide__h2"> ${this.slidesContentList[i][2]} </h2>
                    <p class="carousel__slide__text-padding carousel__slide__p"> ${this.slidesContentList[i][3]} </p>
                </div>
                <div class="col m-0 p-0 justify-content-center align-items-center d-flex overflow-hidden">
                    <img class="mh-100"src="${this.slidesContentList[i][1]}">       
                </div>
            </section>`
        }
        slidesHTML += `</section>`
        return slidesHTML;
    }
}


class Buttons {
    buttonImg;
    slidesContentList;

    constructor(buttonImg, slidesContentList) {
        this.buttonImg = buttonImg;
        this.slidesContentList = slidesContentList;
        this.slidesAmount = this.slidesContentList.length;
    }

    generateButtonsHTML() {
        let buttonsHTML = `     <button class="carousel__next-slide-btn carousel__btn mx-2 bg-white bg-opacity-50 position-absolute z-1 d-flex justify-content-center align-items-center border border-light rounded overflow-hidden end-0">
            <img class="mh-100" src="${this.buttonImg}">
        </button>
        <button class="carousel__prev-slide-btn carousel__btn mx-2 bg-white bg-opacity-50 position-absolute z-1 d-flex justify-content-center align-items-center border border-light rounded overflow-hidden">
            <img class="mh-100" src="${this.buttonImg}">
        </button>`;
         return buttonsHTML;
    }
}

class Dots {
    slidesContentList;

    constructor(slidesContentList) {
        this.slidesContentList = slidesContentList;
        this.numberOfDots = slidesContentList.length;
    }
    generateDotsHTML() {
        let dotsHTML = `<nav class="carousel__dots-container d-flex flex-row mt-3 justify-content-center">`
        
        for (let i = 0; i < this.numberOfDots; i++) {
            dotsHTML+= `<figure class="carousel__dot rounded-circle bg-secondary bg-opacity-75 mx-1" ></figure>`
        }

        dotsHTML+=`</nav>`
        return dotsHTML;
    }
}


class CarouselHTML {
    idOfElementCarouselDestination;
    slidesContentList;  //Background color, background image, Heading, Paragraph, Link, Color//
    buttonImg;
    carouselFont;


    constructor(idOfElementCarouselDestination, slidesContentList, buttonImg, carouselFont) {
        this.idOfElementCarouselDestination = document.getElementById(idOfElementCarouselDestination); 
        this.slidesContentList = slidesContentList;
        this.buttonImg = buttonImg;
        this.carouselFont = carouselFont;
        
    }

    initialize() {

        //create desired class instances
    const carouselSlides = new Slides(this.slidesContentList)
    const carouselButtons = new Buttons(this.buttonImg, this.slidesContentList)
    const carouselDots = new Dots(this.slidesContentList)

        //change font
    rootEl.style.setProperty('--carausel__font', this.carouselFont);

        //create and export carousel html
    let carouselHTML = `<article class="carousel overflow-hidden position-relative"> ${carouselButtons.generateButtonsHTML()} ${carouselSlides.generateSlidesHTML()} ${carouselDots.generateDotsHTML()}`
    this.idOfElementCarouselDestination.innerHTML += carouselHTML;
}

    countSlidesAmount(){
        return this.slidesContentList.length
    }

}



class CarouselDynamics {
    nextSlideBtn;
    prevSlideBtn;
    dotsEl;
    slidesAmount;
    slidesContentList;

    constructor(slidesContentList) {
        this.nextSlideBtn = document.getElementsByClassName("carousel__next-slide-btn");
        this.prevSlideBtn = document.getElementsByClassName("carousel__prev-slide-btn");
        this.dotsEl = document.getElementsByClassName("carousel__dot")
        this.slidesContentList = slidesContentList
        this.slidesAmount = this.slidesContentList.length
    }

    changeSlide() {
        rootEl.style.setProperty('--slide-width', -slideWidth + "vw");
    }

    checkAreButtonsVisible() {
        this.nextSlideBtn[0].classList.toggle("d-none");
        this.prevSlideBtn[0].classList.toggle("d-none");
        if (slideWidth > 0) { 
            this.prevSlideBtn[0].classList.remove("d-none");
        } 
        if (slideWidth <= 100 * (this.slidesAmount - 2)) {
            this.nextSlideBtn[0].classList.remove("d-none")
            
        }
    }

    changeActiveDot() {
        for (let i = 0; i < this.dotsEl.length; i++) {
            this.dotsEl[i].className = this.dotsEl[i].className.replace("bg-opacity-100", "bg-opacity-75")
        }
        
        this.dotsEl[clicks].classList.toggle("bg-opacity-100")
    }

    lookForNextButtonUse() {
        let that = this;
        this.nextSlideBtn[0].addEventListener("click", function () {
            clicks++;
            slideWidth = 100 * clicks; 
            that.changeSlide()
            that.checkAreButtonsVisible() 
            that.changeActiveDot()
            
        })
    }

    lookForPrevButtonUse() {
        let that = this;
        this.prevSlideBtn[0].addEventListener("click", function () {
            clicks--;
            slideWidth = 100 * clicks; 
            that.changeSlide()
            that.checkAreButtonsVisible() 
            that.changeActiveDot()

        });
    }

    changeSlideOnDotClick() {
        let that = this;
        for (let j = 0; j < this.dotsEl.length; j++) {
            this.dotsEl[j].addEventListener("click", () => {
                clicks = j;
                slideWidth = 100 * clicks;
                that.checkAreButtonsVisible()
                that.changeSlide()
                that.changeActiveDot()
            })
        }
    }

}


export class Carousel {
    idOfElementCarouselDestination;
    slidesContentList;  //Background color, background image, Heading, Paragraph, Link, Color//
    buttonImg;
    carouselFont;


    constructor(idOfElementCarouselDestination, slidesContentList, buttonImg, carouselFont) {
        this.idOfElementCarouselDestination = idOfElementCarouselDestination;
        this.slidesContentList = slidesContentList;
        this.buttonImg = buttonImg;
        this.carouselFont = carouselFont;
        
    }

    initialize() {
        const carouselHTML = new CarouselHTML(this.idOfElementCarouselDestination,  this.slidesContentList,  this.buttonImg,  this.carouselFont)
        carouselHTML.initialize()
        const carouselDynamics = new CarouselDynamics(this.slidesContentList)

        carouselDynamics.changeActiveDot()
        carouselDynamics.checkAreButtonsVisible()
        carouselDynamics.changeSlideOnDotClick()
        carouselDynamics.lookForNextButtonUse()
        carouselDynamics.lookForPrevButtonUse()
    }
}


    