// // NAVBAR BEGINS
// document.addEventListener("scroll", function () {
//   const navbar = document.querySelector(".navbar");
//   const navbarHeight = 100;

//   const distanceFromTop = Math.abs(
//     document.body.getBoundingClientRect().top
//   );

//   if (distanceFromTop >= navbarHeight) navbar.classList.add("scroll");
//   else navbar.classList.remove("scroll");
// });
// // NAVBAR ENDS

// window.onscroll = () => {

  function scrollValue() {
    let navbar = document.getElementById('top-bar');
    let anchorElements = document.querySelectorAll('#top-bar a');
    let logo = document.querySelector('#top-bar .logo');
    let scroll = window.scrollY;
    if (scroll < 200) {
        navbar.classList.remove('navbarBg');
        for (let i = 0; i < anchorElements.length; i++){
            anchorElements[i].classList.remove('top-bar-scroll');
        }
        logo.setAttribute('src', "./img/The Akashic Records Logo White.png");
    } 
    else {
        navbar.classList.add('navbarBg');
        for (let i = 0; i < anchorElements.length; i++){
            anchorElements[i].classList.add('top-bar-scroll');
        }
        logo.setAttribute('src', "./img/The Akashic Records Logo Black Cropped.png");
    }
}

window.addEventListener('scroll', scrollValue);