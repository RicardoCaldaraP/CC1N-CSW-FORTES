function login() {
    const usuario = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;
    if (usuario === "administrador" && senha === "adm123") {
        alert("Bem-vindo Admin!");
        window.location.href = "index.html";
    } else if (usuario === "donatario01" && senha === "dona123") {
        alert("Bem-vindo Usuário!");
        window.location.href = "./index.html";
    } else {
        alert("Usuário ou senha incorretos!");
    }
}