const accordion = document.getElementsByClassName("accordion-content");
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const link = document.querySelector(".main-nav-link");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

document.querySelectorAll('.main-nav-list').forEach(link=>{
  link.addEventListener('click', () => {
    headerEl.classList.remove("nav-open");
  });
});