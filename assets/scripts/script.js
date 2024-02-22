document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los thumbnails
    var thumbnails = document.querySelectorAll('.thumbnail');
  
    // Añade un event listener a cada thumbnail
    thumbnails.forEach(function(thumbnail) {
      thumbnail.addEventListener('click', function() {
        // Obtiene el índice de la diapositiva a la que queremos ir
        var slideIndex = this.getAttribute('data-bs-slide-to');
  
        // Obtiene una referencia al carrusel
        var carousel = document.querySelector('#myCarousel');
  
        // Muestra el modal (si no está ya visible)
        var modalEl = document.querySelector('#myModal');
        var modal = new bootstrap.Modal(modalEl);
        modal.show();
  
        // Cuando el modal se ha mostrado completamente...
        modalEl.addEventListener('shown.bs.modal', function() {
          // Navega a la diapositiva correcta
          var carouselInstance = new bootstrap.Carousel(carousel);
          carouselInstance.to(parseInt(slideIndex));
        });
      });
    });
  });

var btnClose = document.querySelectorAll(".btn-close")[1];
console.log(btnClose);
btnClose.addEventListener("click",function() {
  var backdrops = document.querySelectorAll('.modal-backdrop');
  backdrops.forEach(function(backdrop) {
    backdrop.remove();
  });
});