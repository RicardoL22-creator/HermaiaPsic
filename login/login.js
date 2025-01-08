const senhaInput = document.getElementById("Senha");
const toggleSenha = document.getElementById("alternaSenha");

toggleSenha.addEventListener("click", function () {
    const tipo = senhaInput.getAttribute("type") === "password" ? "text" : "password";
    senhaInput.setAttribute("type", tipo);

    this.textContent = tipo === "password" ? "👁️" : "🔒";
});
