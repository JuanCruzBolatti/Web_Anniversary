function obtenerEnteroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numeroEnteroAleatorio = obtenerEnteroAleatorio(1, 100);
console.log(numeroEnteroAleatorio);

function randomPoem() {
  const poemas = ['improvisacion_de_un_querer', 'cuna_de_luna', 'estacion', 'rezos', 'improvisacion_de_un_querer_rehecho', 'improvisacion_de_un_amar', 'cuna_de_luna_rehecho', 'canto_de_luna', 'constelaciones'];
  window.location.href = window.location.origin + '/poemario/' + poemas[obtenerEnteroAleatorio(0, 8)];
}

if (document.getElementById("contador")) {

  // Set the date we're counting down to
  var countDownDate = new Date("Jan 4, 2025 12:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("contador").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("contador").innerHTML = "FELIZ ANIVERSARIO";
    }
  }, 1000);

}

//
function getScrollYOffset(element) {
  var rect = element.getBoundingClientRect();
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return rect.top + scrollTop;
}

document.addEventListener("DOMContentLoaded", function() {
  var finExplicacion = document.getElementById("finExplicacion");
  const video = document.getElementById("youtubePlayer");

  window.onscroll = () => {
    if(window.scrollY > getScrollYOffset(finExplicacion)) {
      video.classList.add("video-chiquito");
    } else {
      video.classList.remove("video-chiquito");
    }
  }
});

// 
function teamo(element) {
  const colores = ["#dc143c", "#21D4FD", "#85ffbd", "#ffb536", "#8bc6ec", "#9553c6"];
  element.style.color = colores[obtenerEnteroAleatorio(0, 5)];
}

