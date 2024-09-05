const first_name = prompt("Insira o nome do primeiro veículo:")
const first_speed = parseFloat(prompt("Insira a velocidade do primeiro veículo:"))

const second_name = prompt("Insira o nome do segundo veículo:")
const second_speed = parseFloat(prompt("Insira a velocidade do segundo veículo:"))

 


if (first_speed > second_speed){

    alert(
        "Veículo 1: "+first_name+"\n"+
        "Velocidade: "+first_speed+" Km \n"+
        "\n"+
   
        "Veículo 2: "+second_name+" \n"+
        "Velocidade: "+second_speed+" Km \n"+
        "-------------------------------------"+
        "\n"+
        "TOP SPEED: \n"+
        first_name + " -> " + first_speed + "Km"
        )
} else if (second_speed > first_speed){

    alert(
        "Veículo 1: "+first_name+"\n"+
        "Velocidade: "+first_speed+" Km \n"+
        "\n"+
   
        "Veículo 2: "+second_name+" \n"+
        "Velocidade: "+second_speed+" Km \n"+
        "-------------------------------------"+
        "\n"+
        "TOP SPEED: \n"+
        second_name + " -> " + second_speed + "Km"
        )
} else if (first_speed === second_speed){

    alert(
        "Veículo 1: "+first_name+"\n"+
        "Velocidade: "+first_speed+" Km \n"+
        "\n"+
   
        "Veículo 2: "+second_name+" \n"+
        "Velocidade: "+second_speed+" Km \n"+
        "-------------------------------------"+
        "\n"+
        "TOP SPEED : \n"+
        first_name + " -> " + first_speed + "Km" +
        "\n"+
        second_name + " -> " + second_speed + "KM \n" +
        "EMPATE!"
        )
}