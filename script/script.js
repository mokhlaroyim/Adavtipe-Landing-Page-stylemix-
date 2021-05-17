// scroll
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


// hamburger
var hamburger = document.querySelector('.hamburger');
var menu = document.querySelector('.list');
var list_item = menu.querySelectorAll('.list-item');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('isactive');
    menu.classList.toggle('active');
})

list_item.forEach(function(elem){
    elem.addEventListener('click', function(){
        menu.classList.remove('active');
        hamburger.classList.remove('isactive');
    })
})


// play button
var header = document.getElementsByClassName('header-wrapper');
const play_video = document.querySelector('#video');
const play_btn = document.querySelector('#play-btn');

play_btn.addEventListener("click", togglePlay);
function togglePlay(){
    console.log(play_btn);
    if (play_video.paused || play_video.ended) {
		play_video.play();
	} else {
		play_video.pause();
	}
}

play_video.addEventListener("playing", function () {
	play_btn.style.opacity = 0;
});
play_video.addEventListener("pause", function () {
	play_btn.style.opacity = 1;
});

// slideshow
var slide_index = 1;
showSlides(slide_index);

function currentSlide(n) {
    showSlides(slide_index = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('my-slides'),
        dots = document.getElementsByClassName('dot');
    if(n>slides.length){
        slide_index = 1
    }
    if(n<1){
        slide_index = slides.length
    }

    for(i=0; i<slides.length; i++){
        slides[i].style.display = 'none';
    }
    for(i = 0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace('active', '');
    }
    slides[slide_index-1].style.display = "block";  
    dots[slide_index-1].className += " active";
}


