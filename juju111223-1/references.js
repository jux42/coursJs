let utilisateur = {
    nom: "jux",
    age: 44,
    email: "jux@juxcompany.com"

}

let  copieutilisateur = utilisateur;

copieutilisateur.nom = "Xour";

console.log(utilisateur.nom +', '+ utilisateur.age + ", " + utilisateur.email);
console.log(copieutilisateur.nom +', '+ copieutilisateur.age + ", " + copieutilisateur.email)  ;

console.log(utilisateur === copieutilisateur);

let autreUtilisateur =  structuredClone(utilisateur);

autreUtilisateur.email = "gloubi@boulga.com";
console.log(utilisateur.email + " ==> " + autreUtilisateur.email);


/*    Comment les modifications sur copieUtilisateur et autreUtilisateur affectent-elles utilisateur original ?
    Quelle est la différence entre une copie par référence et une copie profonde ?

la copie par référence ne change pas la référence des elements contenus dans l'objet.
La copie profonde copie tous les elements en changeant la référence au x éléments copies.


    */
