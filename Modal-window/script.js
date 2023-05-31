'use strict';

const btnOpens = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const btncloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
console.log(btnOpens);
const  closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
const  OpenModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
btncloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)
for(let i =0; i< btnOpens.length; i++){
    btnOpens[i].addEventListener('click', OpenModal);
}
document.addEventListener('keydown', function(e){
    console.log(e.key);
    if(e.key === 'Escape'){
      if(!modal.classList.contains('hidden')){
        closeModal();
      }
    }
});