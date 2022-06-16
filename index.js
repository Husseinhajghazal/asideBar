let myLinks = document.querySelectorAll("a");

myLinks.forEach((e) => {
  e.addEventListener("click", function ArrowUpDown() {
    e.firstElementChild.classList.toggle("d-none");
    e.children[1].classList.toggle("d-none");
    e.children[2].classList.toggle("d-none");
    e.classList.toggle("black");
  });
});

let myMenu = document.querySelector(".bars");
let myClose = document.querySelector(".close");
let Linkscolumn = document.querySelector(".nav .left-nav .links");
let background = document.querySelector(".background");
let links = document.querySelector(".links");
let left = document.querySelector(".left");
let right = document.querySelector(".right");

myMenu.addEventListener("click", function openAsideBar() {
  myMenu.classList.add("d-none");
  myClose.classList.remove("d-none");
  background.style.display = "block";
  right.style.display = "flex";
  left.style.display = "flex";
  links.style.backgroundColor = "white";
});

myClose.addEventListener("click", function closeAsideBar() {
  myMenu.classList.remove("d-none");
  myClose.classList.add("d-none");
  background.style.display = "none";
  right.style.display = "none";
  left.style.display = "none";
  links.style.backgroundColor = "transparent";
});

background.addEventListener("click", function close() {
  myClose.click();
});
