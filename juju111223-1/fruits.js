const fruit = ['pomme', 'banane', 'kiwi', 'pomme'];

const compteFruit = fruit.reduce((acc, fruit ) => {
    acc = acc[fruit] || 0 + 1 ;
    return acc;
});

console.log(compteFruit);