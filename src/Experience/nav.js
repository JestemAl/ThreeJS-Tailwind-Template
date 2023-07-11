var myNav = document.getElementById('mynav');

// var height = window.innerHeight
// var width = window.innerWidth
// var navWidth = (width < 976) ? height : (width < 1440) ? 600 : 900

var heroHeight = document.getElementById('hero').clientHeight;
var navHeight = document.getElementById('mynav').clientHeight;


// updateWidth()
window.addEventListener("resize", () =>
{
  // width = window.innerWidth
  // height = window.innerHeight
  // navWidth = (width < 976) ? height : (width < 1440) ? 600 : 900
  heroHeight = document.getElementById('hero').clientHeight;
  navHeight = document.getElementById('mynav').clientHeight;
})




  window.onscroll = () => { 
    if (window.scrollY > (heroHeight - navHeight)) {
        myNav.classList.add("navTextColor");
    } 
    else {
        myNav.classList.remove("navTextColor");
    }
  };





// HAMBURGER MENU
console.log('text');

const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
// const panels = document.getElementById("panel")
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");



//tabs nasluchiwanie
tabs.forEach((tab) => tab.addEventListener("click", onTabClick));
panels.forEach((panel) => panel.addEventListener("click", closeNav));



//ham button listener
btn.addEventListener("click", navToggle);

function onTabClick(e) {
  //wylacz bordery
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      "border-softRed",
      "border-b-4",
      "md:border-b-0"
    );
  });

  //schowaj wszystyko
  panels.forEach((panel) => {
    panel.classList.add("hidden");
  });

  //aktywujemy tab i panel ktory klikniecieee
  e.target.classList.add("border-softRed", "border-b-4");
  const classString = e.target.getAttribute("data-target");
  document
    .getElementById("panels")
    .getElementsByClassName(classString)[0]
    .classList.remove("hidden");
}

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");

}

function closeNav(){
  setTimeout(()=> {
    btn.classList.toggle("open");
    menu.classList.toggle("flex");
    menu.classList.toggle("hidden");
 }
 ,500)
}


const load = document.querySelector('#loading')

// function loading(){
//   log('clicked')
// }

function loading(){
  console.log('clicked');
  load.classList.remove('hidden')
}