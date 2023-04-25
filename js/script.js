const bars = document.querySelector(".fa-bars"),
      navbarNav = document.querySelector(".navbar__nav"),
      navAAA = document.querySelectorAll(".navbar__nav a"),
      btn = document.querySelector(".btn");

      bars.addEventListener('click', () =>{
        navbarNav.classList.toggle('show');
        navbarNav.classList.remove('hide');
     
      });
      
const loader = document.querySelector(".loader");
setTimeout(() =>{
loader.classList.add("hide")
}, 1000);

btn.addEventListener("click", () => {
    window.location.reload();
});
 