showHidePassword = () => {
    const pwd = document.getElementById("Password");
    const eye = document.getElementById("eye-icon");
    if (pwd.type === "password") {
        pwd.type = "text";
        eye.classList.replace("fa-eye-slash", "fa-eye");
    } else {
        pwd.type = "password";
		eye.classList.replace("fa-eye", "fa-eye-slash");
    }
}