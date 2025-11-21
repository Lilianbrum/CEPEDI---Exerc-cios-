// Exercício 3: Conversor de Temperaturas

// Converter Celsius para Fahrenheit
function celsiusParaFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// 2. Converter Fahrenheit para Celsius
function fahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// 3. Converter Celsius para Kelvin
function celsiusParaKelvin(celsius) {
    return celsius + 273.15;
}

// 4. Função principal de conversão
function converterTemperatura(temperatura, escalaAtual, escalaDesejada) {
    const escalasValidas = ['celsius', 'fahrenheit', 'kelvin'];
    const escalaAtualLower = escalaAtual.toLowerCase();
    const escalaDesejadaLower = escalaDesejada.toLowerCase();

    // Validar escalas
    if (!escalasValidas.includes(escalaAtualLower)) {
        throw new Error(`Escala atual "${escalaAtual}" inválida. Use: celsius, fahrenheit ou kelvin.`);
    }

    if (!escalasValidas.includes(escalaDesejadaLower)) {
        throw new Error(`Escala desejada "${escalaDesejada}" inválida. Use: celsius, fahrenheit ou kelvin.`);
    }

    // Validar temperatura
    if (typeof temperatura !== 'number' || isNaN(temperatura)) {
        throw new Error('Temperatura deve ser um número válido.');
    }

    // Verificar limites para Kelvin
    if (escalaAtualLower === 'kelvin' && temperatura < 0) {
        throw new Error('Temperatura em Kelvin não pode ser menor que 0.');
    }

    // Se a escala é a mesma, retorna a temperatura original
    if (escalaAtualLower === escalaDesejadaLower) {
        return temperatura;
    }

    // Converter primeiro para Celsius (escala intermediária)
    let tempCelsius;

    switch (escalaAtualLower) {
        case 'celsius':
            tempCelsius = temperatura;
            break;
        case 'fahrenheit':
            tempCelsius = fahrenheitParaCelsius(temperatura);
            break;
        case 'kelvin':
            tempCelsius = temperatura - 273.15;
            break;
    }

    // Converter de Celsius para a escala desejada
    switch (escalaDesejadaLower) {
        case 'celsius':
            return tempCelsius;
        case 'fahrenheit':
            return celsiusParaFahrenheit(tempCelsius);
        case 'kelvin':
            return celsiusParaKelvin(tempCelsius);
    }
}