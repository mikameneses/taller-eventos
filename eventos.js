document.addEventListener("DOMContentLoaded", function () {

    const div = document.getElementById("myDiv");
    const button = document.querySelector("#myDiv button");
  
    div.addEventListener("click", function () {
      alert("Hola! Soy el div");
    });
      button.addEventListener("click", function (event) {
    alert("Hola!");
    event.stopPropagation(); 
});
});
