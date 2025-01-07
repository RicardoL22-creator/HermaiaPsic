const senhaInput = document.getElementById("Senha");
const toggleSenha = document.getElementById("alternaSenha");

toggleSenha.addEventListener("click", function () {
    // Alterna entre 'password' e 'text'
    const tipo = senhaInput.getAttribute("type") === "password" ? "text" : "password";
    senhaInput.setAttribute("type", tipo);

    // Atualiza o emoji no botão
    this.textContent = tipo === "password" ? "👁️" : "🔒";
});
