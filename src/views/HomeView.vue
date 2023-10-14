<script setup>
import Weather from './WeatherView.vue';
</script>

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
    <div>
      <div id="app">
        <div class="Container">
          <h1>แนะนำเว็บดูสถานที่ท่องเที่ยว</h1>
          <br>
          <br>
          <div class="circle-container" style="display: grid; justify-content: space-around;">
            <a href="https://travel.trueid.net/detail/DerKpM90N71"><img src="../assets/image/trueID.jpg" alt="สถานที่เที่ยว" class="circle-image"></a>
            <a href="https://www.wongnai.com/trips/best-thailand-attraction"><img src="../assets/image/Wongnai.jpg" alt="สถานที่เที่ยว" class="circle-image"></a>
            <a href="https://www.tpartnerluggage.com/content/7119/10-%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%97%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A7%E0%B9%83%E0%B8%99%E0%B9%84%E0%B8%97%E0%B8%A2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%AD%E0%B8%B1%E0%B8%99%E0%B8%94%E0%B8%B1%E0%B8%9A%E0%B9%82%E0%B8%A5%E0%B8%81">
              <img src="../assets/image/Tpartner.jpg" alt="สถานที่เที่ยว" class="circle-image">
            </a> 
          </div>
        </div>
      </div>
    </div>
  </div> <br> <br>


  <div>
    <h2>ก่อนจะไปเที่ยว มาเช็คสภาพอากาศกันก่อน</h2>
    <Weather />
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

 .circle-image{
  width: 300px;
  height: 200px;
  border-radius: 200px;
  display: flex;
  justify-content: center;
  justify-items: center;
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
    height: 300px;
   }
  .dot {
    width: 10px;
    height: 10px;
  }
  .circle-image{
  width: 250px;
  height: 200px;
  border-radius: 200px;
  }
}

/* ปรับขนาดของรูปภาพเมื่อหน้าจอมีความกว้างต่ำกว่า 576px (มือถือ) */
@media (max-width: 576px) {
  img {
      width: 900px;
      height: 200px;
      margin: 0px;
   }
  .dot {
    width: 10px;
    height: 10px;
  }
  .circle-image{
    width: 200px;
    height: 150px;
    border-radius: 200px;
  }
}
 </style>