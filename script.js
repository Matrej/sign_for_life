const toggleButton = document.getElementById("toggleTheme");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

const inputs = document.querySelectorAll("input");

inputs.forEach(item => {
    item.addEventListener("focus", () => {
        item.classList.add("active");
    })
    item.addEventListener("blur", () => {
        if(item.value != "") return;
        item.classList.remove("active");
    })
})

const password = document.getElementById("password"), confirm_password = document.getElementById("confirm_password");
    function validatePassword(){
        if(password.value != confirm_password.value) {
            confirm_password.setCustomValidity("Passwords Don't Match");
        } else {
            confirm_password.setCustomValidity('');
        }
    }

    password.onchange = validatePassword;
    confirm_password.onkeyup = validatePassword;