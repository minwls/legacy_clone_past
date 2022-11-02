

const mobile = document.querySelector('.mobile-menu');
const buger = document.querySelector('#buger');
const xx = document.querySelector('.mobile-menu > button');

buger.onclick = function(){
   mobile.classList.add('active');
}
xx.onclick = function(){
   mobile.classList.add('off');
   setTimeout(()=>{
      mobile.classList.remove('active');
      mobile.classList.remove('off');
   },600)
}




const videoCut = document.querySelector('.videoCut');
let datav = ['_hq5pqrqxzo','FruFtmWG8Mk','V2dKDP1-vaw','zDL6kkIaiwU'];
let tagv = '';

tagv = `<div><iframe width="1100vw" height="600vw" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         <button><svg data-v-5892d8bc="" aria-hidden="true" focusable="false" width="32" height="32" data-prefix="fal" data-icon="xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-xmark"><path data-v-5892d8bc="" fill="currentColor" d="M315.3 411.3c-6.253 6.253-16.37 6.253-22.63 0L160 278.6l-132.7 132.7c-6.253 6.253-16.37 6.253-22.63 0c-6.253-6.253-6.253-16.37 0-22.63L137.4 256L4.69 123.3c-6.253-6.253-6.253-16.37 0-22.63c6.253-6.253 16.37-6.253 22.63 0L160 233.4l132.7-132.7c6.253-6.253 16.37-6.253 22.63 0c6.253 6.253 6.253 16.37 0 22.63L182.6 256l132.7 132.7C321.6 394.9 321.6 405.1 315.3 411.3z"></path></svg></button></div>`

videoCut.innerHTML = tagv;

const elVideo = document.querySelector('.videoCut > div > iframe');
const videoA = document.querySelectorAll('.video-1 > a');
const videoxx = document.querySelector('.videoCut > div > button');

videoA.forEach(function(eee,fff){
   eee.addEventListener('click',function(){
      videoCut.classList.add('active')
      elVideo.setAttribute('src',`https://www.youtube.com/embed/${datav[fff]}`);
   });
});

videoxx.addEventListener('click',function(){
   videoCut.classList.add('off');
   setTimeout(()=>{
      videoCut.classList.remove('active');
      videoCut.classList.remove('off');
   },600);
});






const photoCut = document.querySelector('.photoCut');
let data = ['14','13','12','11','10','09','08','07','06','05','04','03','02','01'];
let tag = '';

tag = `<figure><img src="./img/media/screen.jpg" alt="">
         <button><svg data-v-5892d8bc="" aria-hidden="true" focusable="false" width="32" height="32" data-prefix="fal" data-icon="xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-xmark"><path data-v-5892d8bc="" fill="currentColor" d="M315.3 411.3c-6.253 6.253-16.37 6.253-22.63 0L160 278.6l-132.7 132.7c-6.253 6.253-16.37 6.253-22.63 0c-6.253-6.253-6.253-16.37 0-22.63L137.4 256L4.69 123.3c-6.253-6.253-6.253-16.37 0-22.63c6.253-6.253 16.37-6.253 22.63 0L160 233.4l132.7-132.7c6.253-6.253 16.37-6.253 22.63 0c6.253 6.253 6.253 16.37 0 22.63L182.6 256l132.7 132.7C321.6 394.9 321.6 405.1 315.3 411.3z"></path></svg></button></figure>`

photoCut.innerHTML = tag;


const elPhoto = document.querySelector('.photoCut > figure > img');
const ela = document.querySelectorAll('.photo-1 > a');
const photoxx = document.querySelector('.photoCut > figure > button');


ela.forEach(function(aaa,bbb){
   aaa.addEventListener('click',function(){
      photoCut.classList.add('active')
      elPhoto.setAttribute('src',`./img/media/screen-${data[bbb]}.jpg`);
   });
});

photoxx.addEventListener('click',function(){
   photoCut.classList.add('off');
   setTimeout(()=>{
      photoCut.classList.remove('active');
      photoCut.classList.remove('off');
   },600)
});
