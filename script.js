const password = document.getElementById("password");
const show = document.getElementById("show-password");
const hide = document.getElementById("hide-password");


password.addEventListener("click", () =>{
    show.style.display = "block";
})
show.addEventListener("click", () =>{
    password.type = "text";
    show.style.display = "none";
    hide.style.display = "block";
});
hide.addEventListener("click", () =>{
    password.type = "password";
    show.style.display = "block";
    hide.style.display = "none";
})
