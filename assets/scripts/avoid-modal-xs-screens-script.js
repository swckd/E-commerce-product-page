 // this code is used to avoid modal in XS screens
 document.addEventListener("DOMContentLoaded", function () {
    function checkWidth() {
      var windowSize = window.innerWidth;

      if (windowSize > 767) {
        document
          .querySelectorAll('[data-bs-toggle="modal"]')
          .forEach(function (el) {
            el.setAttribute("data-bs-toggle", "modal");
          });
        document
          .querySelectorAll('[data-bs-target="#myModal"]')
          .forEach(function (el) {
            el.setAttribute("data-bs-target", "#myModal");
          });
      } else {
        document
          .querySelectorAll('[data-bs-toggle="modal"]')
          .forEach(function (el) {
            el.removeAttribute("data-bs-toggle");
          });
        document
          .querySelectorAll('[data-bs-target="#myModal"]')
          .forEach(function (el) {
            el.removeAttribute("data-bs-target");
          });
      }
    }

    // Execute on load
    checkWidth();

    // Bind event listener
    window.addEventListener("resize", checkWidth);
  });
