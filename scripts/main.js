// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      500: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
      }
    }
});

// Modal Window
const modal = document.querySelector('.modal');
const openModal = document.querySelectorAll('[data-modal]');
const closeModal = document.querySelector('[data-close]');

openModal.forEach(btn => {
    btn.addEventListener('click', ()=>{
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    });
});

function hideModal(){
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

closeModal.addEventListener('click', hideModal);

modal.addEventListener('click', (e)=>{
        if(e.target === modal){
            hideModal();
        }
});

document.addEventListener('keydown', (e)=>{
    if(e.code === 'Escape'){
        hideModal();
    }
});

// Counter stars

const counter = document.querySelector('.rating__count');
const stars = document.querySelectorAll('[data-stars');
const value = stars.value;

for(let i = 1; i < stars.length; i++){
    stars[i].addEventListener('click', count);
};
function count(){
    counter.innerHTML = this.value;
};