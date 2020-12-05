function BoasVindas(Nome) {
    console.log(Nome);
    let meuh2 = document.getElementById("bem_vindo");
    let textoBoasVindas = document.createTextNode(`Bem vindo ao Mundo Bruxo ${Nome}!!!`);

    meuh2.appendChild(textoBoasVindas);
    
}

let pessoa = prompt("Qual seu nome?");
let Name_pessoa = BoasVindas(pessoa);
