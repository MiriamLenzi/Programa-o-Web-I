function calcularSoma() {
    // Pega os valores dos campos de entrada
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    // Converte os valores para números e calcula a soma
    var soma = parseFloat(num1) + parseFloat(num2);

    // Exibe o resultado em um alert
    alert("A soma é: " + soma);
}
