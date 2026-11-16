

// EXERCICE 1


function demarrer() {

    let prenom = prompt("Donner votre prénom :");

    if (prenom === null) {
        return;
    }

    let age = prompt("Donner votre âge :");

    if (age === null || age.trim() === "" || isNaN(age)) {
        alert("Âge invalide !");
        return;
    }

    age = Number(age);

    console.log("Prénom :", prenom);
    console.log("Type du prénom :", typeof prenom);

    console.log("Âge :", age);
    console.log("Type de l'âge :", typeof age);

    alert("Bonjour " + prenom + ", vous aurez " +
        (age + 1) + " ans l'année prochaine.");

    let reponse = confirm("Voulez-vous continuer ?");

    console.log("Réponse :", reponse);
}

document.getElementById("commencer")
.addEventListener("click", demarrer);



// EXERCICE 2


function sommeEntiers(n) {

    let somme = 0;

    for (let i = 1; i <= n; i++) {
        somme = somme + i;
    }

    return somme;
}


function nombresPairs(n) {

    let resultat = "";
    let i = 0;

    while (i <= n) {
        resultat = resultat + i + " ";
        i = i + 2;
    }

    return resultat;
}


function lireNombreValide() {

    let valeur = document.getElementById("nombreN").value.trim();
    let n = Number(valeur);

    if (valeur === "" || !Number.isInteger(n) || n < 1 || n > 100) {

        document.getElementById("resultatCalcul").textContent =
            "Erreur : N doit être un entier entre 1 et 100.";

        return null;
    }

    return n;
}




document.getElementById("calculerSomme")
.addEventListener("click", function() {

    let n = lireNombreValide();

    if (n !== null) {

        document.getElementById("resultatCalcul").textContent =
            "Somme : " + sommeEntiers(n);
    }

});



document.getElementById("afficherPairs")
.addEventListener("click", function() {

    let n = lireNombreValide();

    if (n !== null) {

        document.getElementById("resultatCalcul").textContent =
            "Nombres pairs : " + nombresPairs(n);
    }

});


// EXERCICE 3


// 1. getElementById()  

const titre = document.getElementById("titreCours");

// 2. getElementsByTagName()

const sectionCours = document.getElementById("cours");

const paragraphesSection =
    sectionCours.getElementsByTagName("p");

// 3. getElementsByClassName()

const chapitres =
    document.getElementsByClassName("chapitre");

// 4. querySelector()

const chapitreImportant =
    document.querySelector(".chapitre.important");

// 5. querySelectorAll()

const tousLesChapitres =
    document.querySelectorAll("p.chapitre");

// 6. Afficher le nombre de paragraphes

console.log("Nombre de paragraphes :",
    paragraphesSection.length);

console.log("Nombre de chapitres :",
    tousLesChapitres.length);


// 7. Modifier la présentation

document.getElementById("modifier")
.addEventListener("click", function() {

    titre.textContent =
        "JavaScript : une page interactive";

    for (let i = 0; i < chapitres.length; i++) {

        chapitres[i].style.color = "blue";
    }

    chapitreImportant.style.fontWeight = "bold";

    document.getElementById("modifier").textContent =
        "Présentation modifiée";

});  



// EXERCICE 4


function mettreEnEvidence(champ) {

    champ.style.backgroundColor = "lightyellow";
}


function retablirStyle(champ) {

    champ.style.backgroundColor = "";
}


function afficherSaisie(champ) {

    document.getElementById("apercu").textContent =
        champ.value;
}


function changerCouleur(element) {

    element.style.color = "red";
}


function retablirCouleur(element) {

    element.style.color = "";
}




document.getElementById("selectionner")
.addEventListener("click", function() {

    const champPrenom = document.getElementById("prenom");

    champPrenom.focus();

    champPrenom.select();

});



// EXERCICE 5


// Récupérer le formulaire

const formulaire = document.forms["inscription"];

// Accéder au champ Nom

const champNom = formulaire.elements["nom"];

const zoneMessage = document.getElementById("message");

const zoneRecapitulatif =
    document.getElementById("recapitulatif");


// Validation du formulaire

formulaire.addEventListener("submit", function(event) {

    event.preventDefault();

    zoneMessage.textContent = "";
    zoneRecapitulatif.textContent = "";


    // Vérifier le nom

    let nom = champNom.value.trim();

    if (nom.length < 3) {

        zoneMessage.textContent =
            "Erreur : le nom doit contenir au moins 3 caractères.";

        champNom.focus();

        return;
    }


    // Vérifier la profession

    let profession =
        formulaire.elements["profession"].value;

    if (profession === "") {

        zoneMessage.textContent =
            "Erreur : veuillez choisir une profession.";

        return;
    }


    // Vérifier le sexe

    let sexeSelectionne =
        formulaire.querySelector('input[name="sexe"]:checked');

    if (sexeSelectionne === null) {

        zoneMessage.textContent =
            "Erreur : veuillez sélectionner un sexe.";

        return;
    }


    // Vérifier les langues

    let casesLangue =
        formulaire.querySelectorAll('input[name="langue"]');

    let languesChoisies = [];

    for (let i = 0; i < casesLangue.length; i++) {

        if (casesLangue[i].checked) {

            languesChoisies.push(casesLangue[i].value);
        }
    }

    if (languesChoisies.length === 0) {

        zoneMessage.textContent =
            "Erreur : veuillez choisir au moins une langue.";

        return;
    }


    // Créer l'objet inscription

    const inscription = {

        nom: nom,

        profession: profession,

        sexe: sexeSelectionne.value,

        langues: languesChoisies.join(", "),

        presenter: function() {

            return "Nom : " + this.nom +
                "\nProfession : " + this.profession +
                "\nSexe : " + this.sexe +
                "\nLangues : " + this.langues;
        }
    };


    // Afficher le récapitulatif

    zoneRecapitulatif.textContent =
        inscription.presenter();
 
});


// Réinitialisation du formulaire

formulaire.addEventListener("reset", function() {

    zoneMessage.textContent = "";

    zoneRecapitulatif.textContent = "";

});
