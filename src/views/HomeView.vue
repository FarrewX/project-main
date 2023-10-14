<template>
<div class="app">
   <div class="slideshow-container" style="justify-content: center; justify-items: center;">
 
     <div>
       <div class="mySlides slide">
   <div class="numbertext">ภูเก็ต</div>
   <img src="../assets/image/Phuket.jpg" style="width:100%">
   </div>
   <div class="text"></div>
 </div>
 
 <div class="mySlides">
   <div class="numbertext">กรุงเทพ</div>
   <img src="../assets/image/bangkok.jpg" style="width:100%">
   <div class="text"></div>
 </div>
 
 <div class="mySlides">
   <div class="numbertext">ชลบุรี</div>
   <img src="../assets/image/chonburee.jpg" style="width:100%">
   <div class="text"></div>
   </div>
 
   <div class="mySlides">
   <div class="numbertext">เชียงใหม่</div>
   <img src="../assets/image/changmai.jpg" style="width:100%">
   <div class="text"></div>
   </div>
 
   <div class="mySlides">
   <div class="numbertext">ขอนแก่น</div>
   <img src="../assets/image/khonkhan.jpg" style="width:100%">
   <div class="text"></div>
   </div>
 
   <div class="swiper-button-next"></div>
   <div class="swiper-button-prev"></div>
 </div>
 <br>

 <div style="text-align:center">
   <span class="dot"></span> 
   <span class="dot"></span> 
   <span class="dot"></span> 
   <span class="dot"></span>
   <span class="dot"></span>
 </div> <br> <br>

  <div class="other">
    <div style="display: grid;" >

    </div>
  </div>
</div>
</template>
 <script>
 export default {
   mounted() {
     let slideIndex = 0;
     showSlides();
 
     function showSlides() {
       let i;
       let slides = document.getElementsByClassName("mySlides");
       let dots = document.getElementsByClassName("dot");
       for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
       }
       slideIndex++;
       if (slideIndex > slides.length) {
         slideIndex = 1
       }
       for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" active", "");
       }
       slides[slideIndex - 1].style.display = 'block';
       dots[slideIndex - 1].className += " active";
       setTimeout(showSlides, 2000); 
     }
   },
 };
 </script>
 <style>
 * {box-sizing: border-box;}
 body {font-family: Verdana, sans-serif;}
 .mySlides {display: none;}
 img {vertical-align: middle;}
 
 
 .slideshow-container {
   max-width: 1000px;
   position: relative;
   margin: auto;
 }
 
 /* Caption text */
 .text {
   color: #f2f2f2;
   font-size: 15px;
   padding: 8px 12px;
   position: absolute;
   bottom: 8px;
   width: 100%;
   text-align: center;
 }
 
 /* Number text (1/3 etc) */
 .numbertext {
   color: #f2f2f2;
   font-size: 12px;
   padding: 8px 12px;
   position: absolute;
   top: 0;
 }
 
 /* The dots/bullets/indicators */
 .dot {
   height: 15px;
   width: 15px;
   margin: 0 2px;
   background-color: #bbb;
   border-radius: 50%;
   display: inline-block;
   transition: background-color 0.6s ease;
 }
 
 .active {
   background-color: #717171;
 }


 /* Fading animation */
 .fade {
   animation-name: fade;
   animation-duration: 1.5s;
 }
 
 @keyframes fade {
   from {opacity: .4} 
   to {opacity: 1}
 }

  img{
   width: 220px;
   height: 620px;
 }

 /* ปรับขนาดของรูปภาพเมื่อหน้าจอมีความกว้างต่ำกว่า 768px (ไอแพต) */
@media (max-width: 768px) {
  img {
    width: 800px;
    height: 400px;
   }
  .dot {
    width: 10px;
    height: 10px;
  }
}

/* ปรับขนาดของรูปภาพเมื่อหน้าจอมีความกว้างต่ำกว่า 576px (มือถือ) */
@media (max-width: 576px) {
   img {
      width: 900px;
      height: 200px;
   }
   .dot {
    width: 10px;
    height: 10px;
  }
}
 </style>