

const mobile = document.querySelector('.mobile-menu');
const buger = document.querySelector('#buger');
const xx = document.querySelector('.mobile-menu > button')

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





function scroll(){
   
   const bottomMain = document.querySelector('.bottom-main').offsetTop;
   const Subcard = document.querySelectorAll('.scroll');

   let sd = {y:0, y2:0, state:true}

   let offset = [];

   Subcard.forEach((ele,k)=>{
      if(k==0){
         offset.push( (bottomMain + ele.offsetTop) - window.innerHeight );
      }else{
         offset.push( ele.offsetTop - window.innerHeight );
      }
   })

   console.log(offset)

   window.addEventListener('scroll',()=>{

      sd.y = window.pageYOffset

      sd.state = (sd.y > sd.y2) ? true : false; 

      sd.y2 = sd.y;
      

      if(sd.state){
         Subcard.forEach((ele,idx)=>{
            if(window.pageYOffset > offset[idx]){
               Subcard[idx].classList.add('active');
               }
         })
      }
   });
}

window.addEventListener('load', scroll)