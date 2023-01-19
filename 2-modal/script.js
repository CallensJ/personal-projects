const modal = document.querySelector(".modal");
const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");


const openModal = function () {
    modal.classList.remove("hidden");

}
const closeModal = function () {
    modal.classList.add("hidden");
}

btnOpen.addEventListener("click",openModal);
btnClose.addEventListener("click",closeModal);