console.log('Live de JS - usando o console');

// Variaveis
// Não existe o tipo na declaração = TIPAGEM AUTOMÁTICA
// 3 palavras-chave (USAR APENAS 2) -nome para a variavel = valor
// var = NAO USAR, MUITO ANTIGO
// let = declarar uma variavel
// const = declarar constante

// camelCase = primeiro nome inteiro em minúsculas - partir do segundo nome a primeira letra MAIÚSCULA

let userId = 10;
let userName = 'Laura'
let userPassword = 'udhwi]E$$';
let userConnected = false

console.log(userId);
console.log(userName);
console.log(userName, userId);
console.log(userPassword, userConnected);

// verificar o tipo atribuido
console.log(typeof userName, userName);
console.log(typeof userConnected, userConnected);

// testando escopo
if (userId === 10) {
    let newId = 555;
    console.log(newId)
}

const dataNascimento = '05/07/2001'
console.log(dataNascimento);

let userStatus;
console.log(userStatus);

// objeto
const jogador = {
    name: 'Laura',
    age: '20',
    email: 'lalinhabom@gmail.com',
    id: '92012'
}
console.log(typeof jogador);
console.log(jogador);

// EM JS NÃO FAÇA ISSO
// console.log('Usuário:' + userName + 'senha: ' + userPassword);

// DEVEM INICIAR E TERMINAR COM O SINAL DE `` - DENTRO DELAS VC ESCREVE O QUE QUISER
// variaveis sao inseridas assim: ${nome da variavel} continua a escrever
console.log(`Eu sou o ${userName} meu email é ${jogador.email}, minha idade é ${jogador.age}`);
