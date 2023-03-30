let mySidenav = document.getElementById("mySidenav");
let menu__burger = document.querySelector(".menu__burger");

window.addEventListener('click', function(e){
    console.log(e.target);
    if (mySidenav.style.width == "300px") {
        mySidenav.style.width = "0";
      } else if (e.target.closest(".menu__burger") == menu__burger) {
        mySidenav.style.width = "300px";
      }
      
      if (e.target.closest(".sidenav") == document.querySelector(".sidenav")) {
        mySidenav.style.width = "300px";
      }
      
      if (e.target.closest(".sidenav__icons__cancel")) {
        mySidenav.style.width = "0";
      }
});