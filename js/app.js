window.addEventListener("load", function(event) {
  var imagelm = document.querySelector(".mhc-banner-box-side-img");
  var titletxt = document.querySelector(".mhc-banner-box-side-title");
  var boxes = document.querySelectorAll(".mhc-blocks-box-items");

  if (imagelm) {
    imagelm.addEventListener("click", function() {
      alert("Esto es una imagen");
    });
  }

  if (titletxt) {
    titletxt.addEventListener("click", function() {
      titletxt.innerText = "";
      titletxt.innerText = "¿ola q hace?";
    });
  }

  boxes.forEach(function(e) {
    e.addEventListener("click", function(elm) {
      var box = elm.target;
      alert(box.innerHTML);
    });
  });
});
