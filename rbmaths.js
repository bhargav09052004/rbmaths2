let myForm = document.getElementById("myForm")
myForm.addEventListener("click", function(event) {
    event.preventDefault();
})
let signupEl = document.getElementById("signup")
let signinEl = document.getElementById("signin")
let suEl = document.getElementById("su")
signupEl.classList.add("visible")
signinEl.classList.remove("visible")
suEl.onclick = function() {
    signupEl.classList.remove("visible")
    signinEl.classList.add("visible")
}