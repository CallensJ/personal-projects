
const modal = document.querySelector(".modal");
const btn = document.querySelector(".btn");



const openModal = function () {
    
    modal.classList.remove("hidden");
    btn.style.backgroundColor ='#000339';

}
window.onclick = function (e) {
    if (e.target === modal) {
        modal.classList.add("hidden");
        btn.style.backgroundColor = "#d6d2d2";

    }
}


btn.addEventListener("click",openModal);
