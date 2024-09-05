// Coletando os dados

const name_player1 = prompt("Nome do primeiro personagem? : ")
var damage_player1 = parseFloat(prompt("Insira o poder de ataque do primeiro personagem?  "))

const name_player2 = prompt("Nome do segundo personagem?  ")
var life_player2 = parseFloat(prompt("Quantos pontos de vida tem o segundo personagem?  "))
var defense_player2 = parseFloat(prompt("Quantos pontos de defesa tem o segundo personagem? "))
var shield_player2 = confirm("O segundo personagem possui escudo?")

// Exibição dos dados antes da atualização

if(shield_player2 === true){
     
    window.alert(
        "Personagem 1: " + name_player1 +"\n" +
        "Dano: " + damage_player1 + "\n" +
        "-----------------------------------------------\n"+
        "Personagem 2: " + name_player2 + "\n"+
        "Defesa: " + defense_player2 + "\n"+
        "Escudo: Ativo" + "\n"+
        "Vida: " + life_player2
    )

    }else if(shield_player2 === false){ 
        window.alert(
            "Personagem 1: " + name_player1 +"\n" +
            "Dano: " + damage_player1 + "\n" +
            "-----------------------------------------------\n"+
            "Personagem 2: " + name_player2 + "\n"+
            "Defesa: " + defense_player2 + "\n"+
            "Escudo: Desativado" + "\n"+
            "Vida: " + life_player2
        )
    }

// Início das condições

var damage = 0

if (damage_player1 > defense_player2 && shield_player2 === false){

    damage = damage_player1 - defense_player2
    life_player2 = life_player2 - damage

    window.alert(
        "Personagem 1: " + name_player1 +"\n" +
        "Dano: " + damage_player1 + "\n" +
        "-----------------------------------------------\n"+
        "Personagem 2: " + name_player2 + "\n"+
        "Defesa: " + defense_player2 + "\n"+
        "Escudo: Desativado" + "\n"+
        "Vida: " + life_player2
    )

} else if (damage_player1 > defense_player2 && shield_player2 === true){

    damage = (damage_player1 - defense_player2) /2
    life_player2 = life_player2 - damage

    window.alert(
        "Personagem 1: " + name_player1 +"\n" +
        "Dano: " + damage_player1 + "\n" +
        "-----------------------------------------------\n"+
        "Personagem 2: " + name_player2 + "\n"+
        "Defesa: " + defense_player2 + "\n"+
        "Escudo: Ativado" + "\n"+
        "Vida: " + life_player2
    )

} else if (damage_player1 === defense_player2){

    damage = 0

    window.alert(
        "Personagem 1: " + name_player1 +"\n" +
        "Dano: " + damage_player1 + "\n" +
        "-----------------------------------------------\n"+
        "Personagem 2: " + name_player2 + "\n"+
        "Defesa: " + defense_player2 + "\n"+
        "Escudo: Desativado" + "\n"+
        "Vida: " + life_player2
    )
}