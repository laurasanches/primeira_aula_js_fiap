const banda = ['John', 'Paul', 'Ringo', 'George', 'Robert', 'Jimmy', 'Bohan', 'Jones']
console.log(banda);
console.log(banda[3]);
console.table(banda);

// inserir no fim do Array
console.log(banda);
banda.push('Mercury')
console.log(banda);

// excluir o conteúdo do último índice do Array - CUIDADO ELE APAGA MESMO
// banda.pop(banda)

// inserir no início do Array
banda.unshift('Mick Jagger')
console.log(banda);

// retirar o conteúdo do primeiro índice
let retirado = []
retirado.push(banda.shift());
console.log(banda);
console.log(retirado);

// retirando um conteudo em uma posição do Array splice (onde começa e quantidade dxe exclusões)
banda.splice(3,3)
console.log(banda);

// inserir em qualquer parte do Array == splice(onde começa, quantidade de exclusões, novos conteúdos)
banda.splice(3, 0, 'George', 'Robert', 'Jimmy', 'Laura')
console.log(banda);

// concatenar Arrays
const novaBanda = banda.concat(retirado)
console.log(novaBanda);