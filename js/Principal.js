let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');

}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

});



formBtn.addEventListener('click', () =>{
    loginForm.classList.toggle('active');

});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');

});
