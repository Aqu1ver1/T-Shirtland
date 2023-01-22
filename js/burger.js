
function burger(){
    const burger = document.querySelector(".burger");
    const burgerMenu = document.querySelector(".burger__menu");
    const body = document.querySelector("body");

    burger.classList.toggle("burger_active"),
    burgerMenu.classList.toggle('show');
    body.classList.toggle('lock')
}
