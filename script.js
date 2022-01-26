function currentSlide(n) {
  showSlides(slideIndex = n);
}
var slideIndex = 0;
var timeout;

//Slide Proximo/Anterior controle
function plusSlides(n) {
  slideIndex += n;
  showSlides();
}

function showSlides() {
  if (timeout != null) {
    clearTimeout(timeout);
  }

  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  if (slideIndex < 1) { slideIndex = slides.length }
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  timeout = setTimeout(function () {
    slideIndex++; showSlides()
  }
    , 5000); // Muda imagem a cada 5s
}