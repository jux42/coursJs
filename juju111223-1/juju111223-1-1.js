let globalVar = "je suis global";


function testLocalScope()
{
    let localVar = "je suis local";
    console.log(globalVar + " + " + localVar);

    if(2+2 ==4)
    {
        let blockVar = "je suis de bloc";
        console.log(blockVar);
    }
    // console.log(blockVar);
}
// console.log(localVar);
// console.log(blockVar);
// les trois print commentés ne sont pas dans le scope où les variables ont été définies, le programme ne s'exécute pas.

testLocalScope();

/*
Quelle est la différence entre l'impression de globalVar et localVar à
l'extérieur de testLocalScope ?

==> la variable globalWar est reconnue car son scope est global (elle est reconnue dans tout le script)
==> la variable localWar n'est pas reconnue car elle est en dehors de son scope de définition.

Que se passe-t-il lorsque vous essayez d'imprimer blockVar
à l'extérieur du bloc if mais à l'intérieur de la fonction testLocalScope ?

==> même réponse, elle est en dehors de son scope et n'est pas reconnue.
C'est comme si elle n'avait pas été définie et le print n'est pas possible

Pourquoi ne pouvez-vous pas accéder à
localVar et blockVar en dehors de la fonction testLocalScope ?

==> même réponse, question de scope.

*/


