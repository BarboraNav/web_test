/* -------------------------- slider --------------------------- */

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function nextSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
/*function currentSlide(n) {
  showSlides(slideIndex = n);
}
*/
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }

  slides[slideIndex-1].style.display = "block"; 

}
/* ---------- the article was published "" ago ----------------- */


function publishedAgo() {
  var nowDate = new Date();
  var pDate = new Date("04/01/2018");
  var timeDiff = Math.abs(nowDate.getTime() - pDate.getTime());
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  var changeThis = document.getElementById("date");
  changeThis.innerHTML = "Před "+diffDays+" DNY";
}


