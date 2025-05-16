let pedido = 3;
let nomeCombo = "";
let preço = 0;

switch(pedido) {
    case 1:
       nomeCombo = "Batata + Suco";
       preço = 12;
       break;
    case 2:
        nomeCombo = "Hamburguer";
        preço = 15;
        break;
    case 3:
        nomeCombo = "Pizza Broto";
        preço = 20;
        break;
    default:
        console.log("Opção inválida");
        break;        

}

if (nomeCombo != "")
console.log("Combo Escolhido:" , nomeCombo);
console.log("Preço: R$", preço);