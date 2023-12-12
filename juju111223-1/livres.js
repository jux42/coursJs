const livre1 ={

    titre: "Animal Farm",
    auteur: "George Orwell",
    annee: "1949"

};
const livre2 ={

    titre: "Guerre et Paix",
    auteur: "Leon Tolstoi",
    annee: "1867"

};
const livre3 ={

    titre: "mémoires d'un vieux dégueulasse",
    auteur: "Charles Bukowski",
    annee: "1970"

};
const livre4 ={

    titre: "mangez des pommes",
    auteur: "Jacques Chirac",
    annee: "1995"

};
const livre5 ={

    titre: "oui oui et la gomme magique",
    auteur: "inconnu",
    annee: "1985"

};

livres = Array (livre1, livre2, livre3, livre4, livre5);

function addBook(collection, objetLivre)
{
    collection.push(objetLivre);
}

function deleteBookByTitle(titreASupprimer ){

    for (let i=0 ; i<livres.length ; i++)
        if (livres[i].titre === titreASupprimer) {
            livres.splice(i,  1);
        }
}

deleteBookByTitle("mangez des pommes");

livres.forEach((item)=>console.log("toujours là : " + item.titre));

function findBook(collection, titreATrouver){

    for (let i=0 ; i<collection.length ; i++){
        if (collection[i].titre === titreATrouver)
        {collection.find(collection[i].titre, 1)
        return collection[i];
        }
}
}

function filtreApresAnnee(collection)
{
    collection.filter(book => book.annee > 1900);

}

function trierAuteurs()
{
   const collection2 = livres.map((book)=> book.auteur );
   collection2.forEach((item)=> console.log(item));
}

