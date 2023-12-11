const profilUtilisateur = {
    nom: "Alex Dupont",
    age: 29,
    adresse: {
        rue: "123, rue de la Liberté",
        ville: "Paris",
        codePostal: "75001"
    },
    hobbies: ["lecture", "voyages", "cuisine"],
    profession: {
        titre: "Développeur Web",
        entreprise: "TechCorp Solutions"
    }
};

function extractName({nom}) {
    return nom;
}

function extractAge({age}) {
    return age;
}

function extractHobbies({hobbies}) {

    const {hobbies: userHobbies} = profilUtilisateur;
    return userHobbies;
}

console.log("Nom : " + extractName(profilUtilisateur) + ", "
    + "Age : " + extractAge(profilUtilisateur) + ", "
    + "Hobbies: " + extractHobbies(profilUtilisateur));

let {adresse: {rue: userStreet, ville: userCity, codePostal: userZipCode}}
    = profilUtilisateur;

console.log("Adresse: " + userStreet + " ," + userCity);

let {profession: {titre: titreProfessionnel, entreprise: userCompany}}
    = profilUtilisateur;

console.log("titre professionnel :" + titreProfessionnel);

let {hobbies: hobbiesTab} = profilUtilisateur;
let [hobby1= "non spécifié", hobby2= "non spécifié", hobby3= "non spécifié" ] = profilUtilisateur.hobbies;
console.log(hobby1 + ", " + hobby2 + ", " + hobby3);

function afficherProfil( profilUtilisateur)
{
    const {nom:name} = profilUtilisateur;
    const {profession:{entreprise:company}}
        = profilUtilisateur;
    console.log("Nom :" + name + ", " + "Entreprise : " + company) ;
}
afficherProfil(profilUtilisateur);


