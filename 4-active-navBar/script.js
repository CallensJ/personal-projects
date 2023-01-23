document.querySelectorAll(".navigation__item").forEach((ele) =>
  ele.addEventListener("click", function (event) {
    event.preventDefault();
    document
      .querySelectorAll(".navigation__item")
      .forEach((ele) => ele.classList.remove("active"));
    this.classList.add("active")
  })
);


/*
const links = document.querySelectorAll('.navigation__item');
    
if (links.length) {
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      links.forEach((link) => {
          link.classList.remove('active');
      });
      e.preventDefault();
      link.classList.add('active');
    });
  });
}

*/