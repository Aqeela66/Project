import React,{useState ,useEffect}  from 'react';
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  let currentScrollPosition=0;
  let scrollAmount=320;

  const sCont=document.querySelector(".story-container");
  const hScroll=document.querySelector(".horizontal-scroll");
  const btnScrollLeft=document.querySelector("#btn-scroll-left");
  const btnScrollRight=document.querySelector("#btn-scroll-right");
btnScrollLeft.style.opacity="0";



  let maxScroll= -sCont.offsetWidth+hScroll.offsetWidth;
  

  function scrollHorizontally(val){
  currentScrollPosition+=(val * scrollAmount);
  if(currentScrollPosition>0){
    currentScrollPosition=0;
    btnScrollLeft.style.opacity="0";
  }
  else{
    btnScrollLeft.style.opacity="1";
  }
  if(currentScrollPosition <= maxScroll){
    currentScrollPosition=maxScroll;
    btnScrollRight.style.opacity="0";
  }
  else{
    btnScrollRight.style.opacity="1";
  }
sCont.style.left=currentScrollPosition+"px";

  }
  