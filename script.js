function calcular() {
    // Obtendo os valores dos inputs
    const consumo = parseFloat(document.getElementById('consumo').value);
    const tipo = document.getElementById('tipo').value;
    const fonte = document.getElementById('fonte').value;

    // Validando o consumo
    if (isNaN(consumo) || consumo <= 0) {
        alert("Por favor, insira um valor válido de consumo.");
        return;
    }

    // Determinando a economia percentual com base no tipo de estabelecimento
    let economiaPercentual = 0;
    switch (tipo) {
        case "residencial":
            economiaPercentual = 20;
            break;
        case "comercial":
            economiaPercentual = 25;
            break;
        case "industrial":
            economiaPercentual = 30;
            break;
    }

    // Ajustando economia para fontes renováveis
    if (fonte === "renovavel") {
        economiaPercentual += 5;
    }

    // Calculando a economia e redução de emissões
    const economia = (consumo * economiaPercentual) / 100;
    const emissaoReduzida = economia * 0.5; // Aproximadamente 0.5kg CO₂ por kWh economizado.

    // Exibindo os resultados
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <strong>Economia Estimada:</strong> ${economia.toFixed(2)} kWh/mês<br>
        <strong>Redução de Emissões:</strong> ${emissaoReduzida.toFixed(2)} kg CO₂/mês<br>
        <strong>Economia Percentual:</strong> ${economiaPercentual}%
    `;
    resultadoDiv.style.display = 'block';
}
