const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(loginForm);
    const formDataObject = Object.fromEntries(formData.entries());

    if (!formDataObject.email || !formDataObject.password) {
    alert("All fields must be filled out!");
    return;
    }

    console.log(formDataObject);
    loginForm.reset();
});