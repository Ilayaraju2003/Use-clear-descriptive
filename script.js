/* ================= PRODUCT IMAGE SLIDER ============== */


/* ================= IMAGES ================= */

const images = [

  "assets/machine.jpg",
  "assets/content1.jpg",
  "assets/content2.jpg",
  "assets/machine.jpg",
  "assets/content1.jpg",
  "assets/content2.jpg",

];

/* ================= ELEMENTS ================= */

const thumbnails =
document.querySelectorAll(".thumb");

const mainImage =
document.getElementById("mainImage");

const leftBtn =
document.querySelector(".left-btn");

const rightBtn =
document.querySelector(".right-btn");

/* ================= INDEX ================= */

let currentIndex = 0;


/* ================= SHOW IMAGE ======================== */


function showImage(index){

  if(mainImage){

    mainImage.style.opacity = "0";

    setTimeout(()=>{

      mainImage.src = images[index];

      mainImage.style.opacity = "1";

    },200);

  }

}

/* ================= THUMB CLICK ======================= */


if(thumbnails.length && mainImage){

  thumbnails.forEach((thumb,index)=>{

    thumb.addEventListener("click",()=>{

      const activeThumb =
      document.querySelector(".thumb.active");

      if(activeThumb){

        activeThumb.classList.remove("active");
      }

      thumb.classList.add("active");

      currentIndex = index;

      showImage(currentIndex);

    });

  });

}


/* ================= NEXT IMAGE ======================== */


if(rightBtn){

  rightBtn.addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex >= images.length){

      currentIndex = 0;
    }

    showImage(currentIndex);

  });

}


/* ================= PREVIOUS IMAGE ==================== */


if(leftBtn){

  leftBtn.addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex < 0){

      currentIndex = images.length - 1;
    }

    showImage(currentIndex);

  });

}

/* ================= INDUSTRIES SLIDER ================= */


const industriesSlider =
document.getElementById("industriesSlider");

const nextBtn =
document.getElementById("nextBtn");

const prevBtn =
document.getElementById("prevBtn");

/* ================= NEXT ================= */

if(nextBtn && industriesSlider){

  nextBtn.addEventListener("click",()=>{

    industriesSlider.scrollBy({

      left:320,

      behavior:"smooth"

    });

  });

}

/* ================= PREVIOUS ================= */

if(prevBtn && industriesSlider){

  prevBtn.addEventListener("click",()=>{

    industriesSlider.scrollBy({

      left:-320,

      behavior:"smooth"

    });

  });

}


/* ================= DATASHEET POPUP =================== */


const openPopup =
document.getElementById("openPopup");

const closePopup =
document.getElementById("closePopup");

const popupOverlay =
document.getElementById("popupOverlay");

/* ================= OPEN ================= */

if(openPopup && popupOverlay){

  openPopup.addEventListener("click",()=>{

    popupOverlay.classList.add("active");

    document.body.style.overflow = "hidden";

  });

}

/* ================= CLOSE ================= */

if(closePopup && popupOverlay){

  closePopup.addEventListener("click",()=>{

    popupOverlay.classList.remove("active");

    document.body.style.overflow = "auto";

  });

}

/* ================= OUTSIDE CLICK ================= */

if(popupOverlay){

  popupOverlay.addEventListener("click",(e)=>{

    if(e.target === popupOverlay){

      popupOverlay.classList.remove("active");

      document.body.style.overflow = "auto";

    }

  });

}


/* ================= QUOTE POPUP ======================= */


const openQuotePopup =
document.getElementById("openQuotePopup");

const closeQuotePopup =
document.getElementById("closeQuotePopup");

const quotePopupOverlay =
document.getElementById("quotePopupOverlay");

/* ================= OPEN ================= */

if(openQuotePopup && quotePopupOverlay){

  openQuotePopup.addEventListener("click",()=>{

    quotePopupOverlay.classList.add("active");

    document.body.style.overflow = "hidden";

  });

}

/* ================= CLOSE ================= */

if(closeQuotePopup && quotePopupOverlay){

  closeQuotePopup.addEventListener("click",()=>{

    quotePopupOverlay.classList.remove("active");

    document.body.style.overflow = "auto";

  });

}

/* ================= OUTSIDE CLICK ================= */

if(quotePopupOverlay){

  quotePopupOverlay.addEventListener("click",(e)=>{

    if(e.target === quotePopupOverlay){

      quotePopupOverlay.classList.remove("active");

      document.body.style.overflow = "auto";

    }

  });

}


/* ================= ESC CLOSE ========================= */


document.addEventListener("keydown",(e)=>{

  if(e.key === "Escape"){

    if(popupOverlay &&
       popupOverlay.classList.contains("active")){

      popupOverlay.classList.remove("active");

    }

    if(quotePopupOverlay &&
       quotePopupOverlay.classList.contains("active")){

      quotePopupOverlay.classList.remove("active");

    }

    document.body.style.overflow = "auto";

  }

});


/* ================= SCROLL TO CONTACT ================= */


function scrollToContact(){

  const contactSection =
  document.getElementById("footer-contact");

  if(contactSection){

    contactSection.scrollIntoView({

      behavior:"smooth"

    });

  }

}