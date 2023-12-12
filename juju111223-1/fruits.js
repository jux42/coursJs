const fruit = ['pomme', 'banane', 'kiwi', 'pomme'];

const compteFruit = fruit.reduce((acc, fruit ) => {
    acc[fruit] = acc[fruit] || 0 + 1 ;
    return acc;
});

console.log(compteFruit);