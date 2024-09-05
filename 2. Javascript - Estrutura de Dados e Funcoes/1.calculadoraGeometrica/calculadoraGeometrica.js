function calcAreaTriangle(){
    const base = parseFloat(prompt("Informa o valor da base:"))
    const altura = parseFloat(prompt("Informa o valor da altura:"))
    return base * altura / 2
}

function calcAreaRectangle(){
    const base = parseFloat(prompt("Informa o valor da base:"))
    const altura = parseFloat(prompt("Informa o valor da altura:"))
    return base * altura 
}

function calcAreaSquare(){
    const lado = parseFloat(prompt("Informe o valor do lado:"))
    return lado**2
}

function calcAreaTrapezoid(){
    const baseMaior = parseFloat(prompt("Informe o valor da base maior:"))
    const baseMenor = parseFloat(prompt("Informe o valor da base menor:"))
    const altura = parseFloat(prompt("Informe o valor da altura:"))
    return (baseMaior + baseMenor) * altura / 2
}

function calcAreaCircle(){
    const raio = parseFloat(prompt("Informe o raio do círculo:"))
    return (3.14 * raio * raio)
}

function showMenu() {
    return prompt(
        "Calculadora Geométrica\n"+
        "1. Calcular área de triângulo\n"+
        "2. Calcular área de retângulo\n"+
        "3. Calcular área de quadrado\n"+
        "4. Calcular área de trapézio\n"+
        "5. Calcular área de círculo\n"+
        "6. Sair\n"
    )
}

function executar() {
    let opcao = ""

    do {
        opcao = showMenu()
        let resultado

        switch (opcao) {
            case "1":
                resultado = calcAreaTriangle()
                break
            case "2":
                resultado = calcAreaRectangle()
                break
            case "3":
                resultado = calcAreaSquare()
                break
            case "4":
                resultado = calcAreaTrapezoid()
                break
            case "5":
                resultado = calcAreaCircle()
                break
            case "6":
                alert("Saindo...")
                break
            default:
                alert("Opção Inválida!")
                break
        }

        if (resultado) {
            alert("Resultado: " + resultado)
        }
    } while (opcao !== "6");
}

executar()