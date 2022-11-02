

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
   
   const bottomMain = document.querySelector('.bottom-main').offsetTop; //부모 상단 위치값
   const Subcard = document.querySelectorAll('.scroll'); //효과 줄 자식

   let sd = {y:0, y2:0, state:true} //위치값 정할 공간

   let offset = []; //빈공간

   Subcard.forEach((ele,k)=>{
      if(k < 2){                                                           //0 1 번째 배열은 부모가 있고 나머지는 없음
         offset.push( (bottomMain + ele.offsetTop) - window.innerHeight ); //윈도우 기준 부모 상단위치값 + 부모기준 자식 상단 위치값 - 윈도우 height값
      }else{
         offset.push( ele.offsetTop - window.innerHeight );
      }
   })

   console.log(offset)  //모든 오프셋값 확인

   window.addEventListener('scroll',()=>{   // 스크롤하면, 이렇게 해라

      sd.y = window.pageYOffset                  //윈도우의 세로 스크롤값

      sd.state = (sd.y > sd.y2) ? true : false;  //스크롤 내리기 의미 (세로 스크롤값이 y2보다 크니?)
      
      sd.y2 = sd.y;                          // 내린 값을 y2랑 동기화시켜서 이 세가지 명령이 계속 돌게 함. 그래서 내린값이 계속 커짐. 그래야 하단의 if함수를 실행하기 때문.
      

      if(sd.state){                          // 위 명령이 맞으면 실행. 만약 올렸을 때 명령도 존재하면 else함수도 추가
         Subcard.forEach((ele,idx)=>{                 // ele는 안쓰지만 두번째 배열값이 필요해서 두개 쓰기
            if(window.pageYOffset > offset[idx]){     // 만약 윈도우의 세로 스크롤 값이 n번째 값의 오프셋값보다 크다면(휠을 내리면 오프셋탑값이 윈도우 세로값보다 작아질테니)
               Subcard[idx].classList.add('active');  // n번째 녀석에게 클래스리스트 추가해.
               }
         })
      }
   });
}

window.addEventListener('load', scroll) //스크롤함수 로드해.







const play = document.querySelector('.play')
const mobilePlay = document.querySelector('.mobile-play')
const videoPlay = document.querySelector('.iframe-video')
const videoxx = document.querySelector('.iframe-video button')


play.addEventListener("click",function(){
   videoPlay.classList.add('active');
});
mobilePlay.addEventListener("click",function(){
   videoPlay.classList.add('active');
});

videoxx.addEventListener("click",function(){
   videoPlay.classList.add('off');
   setTimeout(()=>{
      videoPlay.classList.remove('active');
      videoPlay.classList.remove('off');
   },600)
});


