function sommeFor(number){
    let j = 0;
    for (let i= 1; i<=number ; i++)
    {
        j+=i;

    }
    return j;
}

let numberToPass = 100;
console.log(sommeFor(numberToPass));

let someArray = Array(72,2,3,4,5,6,7,8,9);


function findElement(tab, num){

    let i = 0;
    let numberCheck = -1;
    while (i < tab.length) {

        if (tab[i] === num) {
            console.log(i);
            numberCheck++;
            break;
        } else {
            i++;
        }
    }
   if (numberCheck === -1) console.log(numberCheck);
}

findElement(someArray, 72);


function rebours(number){

    do {

        console.log(number);
        --number;
    }while (number>=0);
}

rebours(8);


/********************************************/

const fauxObjetJs = {

    blabla : "expBlabla",
    bloublou : "expBloublou",
    blibli : "expBlibli",
    bloblo : "expBloblo"

}

function enumCles(objet){
    for(const cle in objet)
    {
        console.log(cle + " : " + objet[cle]);
    }
}

enumCles(fauxObjetJs);

/*************************/

function showTab(tab){
    for (item of tab)
    {
        console.log(item);
    }

}
showTab(someArray);