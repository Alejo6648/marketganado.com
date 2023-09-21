
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var inicio = document.getElementById("inicio").value;

    if (username === "" || password === ""|| inicio === "") {
    alert("Por favor, completa todos los campos");
    return;
    }

    this.submit();
});
