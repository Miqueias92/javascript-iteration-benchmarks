
const list = Array.from({ length: 10000}, (_, i) => i + 1);

const listForEach = []
console.time('forEach');
list.forEach((item, index) => {
    listForEach.push({
        id: item,
        name: `Item ${item}`,
        description: `This is item number ${item}`,
    });
});
console.timeEnd('forEach');

// ------------------------------

const listFor = []
console.time('for');
for (let i = 0; i < list.length; i++) {
    listFor.push({
        id: list[i],
        name: `Item ${list[i]}`,
        description: `This is item number ${list[i]}`,
    });
}
console.timeEnd('for');

// ------------------------------

const listForOf = []
console.time('for of');
for (const item of list) {
    listForOf.push({
        id: item,
        name: `Item ${item}`,
        description: `This is item number ${item}`,
    });
}
console.timeEnd('for of');


const listForIn = []
console.time('for in');
for (const index in list) {
    listForIn.push({
        id: list[index],
        name: `Item ${list[index]}`,
        description: `This is item number ${list[index]}`,
    });
}
console.timeEnd('for in');


console.time('map');
const listMap = list.map((item, index) => {
    return{
        id: item,
        name: `Item ${item}`,
        description: `This is item number ${item}`,
    };
});
console.timeEnd('map');