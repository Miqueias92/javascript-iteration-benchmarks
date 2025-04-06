// Definindo a concessionária
const concessionarias = [{
    nome: 'AutoMóveis São Paulo',
    endereco: 'Rua teste, 123 - São Paulo - SP',
    carros:  Array.from({ length: 400 }, () => ({
      marca: 'Toyota',
      modelo: 'Corolla',
      ano: 2022,
      cor: 'Prata',
      preco: 120000
  }))
}];
  
console.log(concessionarias[0].carros.length);

console.time('forEach');
const listForEach = []
concessionarias.forEach((item, index) => {
    
    const carros = []

    item.carros.forEach((carro) => {
        carros.push({ 
            marca: carro.marca,
            modelo: carro.modelo,
            ano: carro.ano,
            cor: carro.cor,
            preco: carro.preco
        })
    })
    
    listForEach.push({
        id: item,
        name: `Item ${item}`,
        description: `This is item number ${item}`,
        tests: carros
    });
});
console.timeEnd('forEach');


const listFor = []
console.time('for');
for (let i = 0; i < concessionarias.length; i++) {

    const carros = []

    for (let j = 0; j < concessionarias[i].carros.length; j++) {
        carros.push({
            marca: concessionarias[i].carros[j].marca,
            modelo: concessionarias[i].carros[j].modelo,
            ano: concessionarias[i].carros[j].ano,
            cor: concessionarias[i].carros[j].cor,
            preco: concessionarias[i].carros[j].preco
        })
    }

    listFor.push({
        id: concessionarias[i],
        name: `Item ${concessionarias[i]}`,
        description: `This is item number ${concessionarias[i]}`,
        tests: carros
    });
}
console.timeEnd('for');
// ------------------------------

const listForOf = []
console.time('for of');
for (const item of concessionarias) {

    const carros = []

    for (const carro of item.carros) {
        carros.push({
            marca: carro.marca,
            modelo: carro.modelo,
            ano: carro.ano,
            cor: carro.cor,
            preco: carro.preco
        })
    }
    listForOf.push({
        id: item,
        name: `Item ${item}`,
        description: `This is item number ${item}`,
        tests: carros
    });
}
console.timeEnd('for of');
// ------------------------------

const listForIn = []
console.time('for in');
for (const index in concessionarias) {

    const carros = []
    for (const indexCarro in concessionarias[index].carros) {
        carros.push({
            marca: concessionarias[index].carros[indexCarro].marca,
            modelo: concessionarias[index].carros[indexCarro].modelo,
            ano: concessionarias[index].carros[indexCarro].ano,
            cor: concessionarias[index].carros[indexCarro].cor,
            preco: concessionarias[index].carros[indexCarro].preco
        })
    }

    listForIn.push({
        id: concessionarias[index],
        name: `Item ${concessionarias[index]}`,
        description: `This is item number ${concessionarias[index]}`,
        tests: carros
    });
}
console.timeEnd('for in');
// ------------------------------
console.time('map');
const listMap = concessionarias.map((item, index) => {
    return {
        id: item,
        name: `Item ${item}`,
        description: `This is item number ${item}`,
        tests: item.carros.map((carro) => {
            return {
                marca: carro.marca,
                modelo: carro.modelo,
                ano: carro.ano,
                cor: carro.cor,
                preco: carro.preco
            }
        })
    };
});
console.timeEnd('map');