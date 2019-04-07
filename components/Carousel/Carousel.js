class Carousel {

}

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

let carousel = document.querySelector('.carousel');
let carouselLeft = carousel.children[0];
let carouselRight = carousel.children[carousel.childElementCount - 1];
let index = 0;

carouselLeft.addEventListener('click', () => console.log('Left carousel button clicked'));
carouselRight.addEventListener('click', () => console.log('Right carousel button clicked'));
