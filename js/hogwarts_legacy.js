

const mobile = document.querySelector('.mobile-menu');
const buger = document.querySelector('#buger');
const xx = document.querySelector('.mobile-menu > button')

buger.onclick = function(){
   mobile.classList.add('active');
}
xx.onclick = function(){
   mobile.classList.remove('active');
}