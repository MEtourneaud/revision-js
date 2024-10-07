//==> Les Conditrions

// IF / ELSE
let motTapeOk = false // Essayez de mettre false à la place de true

if (motTapeOk) {
  //   console.log("Bravo, vous avez correctement tapé le mot")
} else {
  //   console.log("Échec, le mot n'est pas correct")
}

// ---------------------

// const motApplication = "Magie" // Essayez de mettre un autre mot ici !
// let motUtilisateur = prompt("Entrez le mot : " + motApplication)

// if (motUtilisateur === motApplication) {
//   console.log("Bravo !")
// } else {
//   console.log("Vous avez fait une erreur de frappe.")
// }

// ---------------------

// Déclarez une variable listeMots qui est un tableau
// let listeMots = ["Cachalot", "Pétunia", "Serviette"]

// Déclarez une deuxième variable score, initialisée à 0 (nombre de mots correctement tapés par l’utilisateur).
// let score = 0

// Demandez à l’utilisateur de rentrer le mot contenu dans la première case du tableau.
// let motUtilisateur = prompt("Entrez le mot : " + listeMots[0])

// Vérifiez si le mot tapé est celui demandé.
// if (motUtilisateur === listeMots[0]) {
//   score++
// }

// motUtilisateur = prompt("Entrez le mot : " + listeMots[1])
// if (motUtilisateur === listeMots[1]) {
//   score++
// }

// motUtilisateur = prompt("Entrez le mot : " + listeMots[2])
// if (motUtilisateur === listeMots[2]) {
//   score++
// }

// console.log("Le score est de : " + score)

//==>Les Boucles

// Déclaration des tableaux contenant les listes des mots proposés à l'utilisateur
const listeMots = ["Cachalot", "Pétunia", "Serviette"]
const listePhrases = ["Pas de panique !", "La vie, l'univers et le reste", "Merci pour le poisson"]

let score = 0

// Déclaration de la variable contenant le choix de l'utilisateur
let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
// Tant que l'utilisateur n'a pas saisi "mots" ou "phrases", on lui redemande de saisir un choix
while (choix !== "mots" && choix !== "phrases") {
  choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
}

if (choix === "mots") {
  // On parcourt le tableau des mots
  for (let i = 0; i < listeMots.length; i++) {
    // On demande à l'utilisateur de saisir le mot correspondant à l'indice i
    let motUtilisateur = prompt("Entrez le mot : " + listeMots[i])
    if (motUtilisateur === listeMots[i]) {
      // Si le mot saisi par l'utilisateur est correct, on incrémente le score
      score++
    }
  }
  console.log("Votre score est de " + score + " sur " + listeMots.length)
} else {
  // On parcourt le tableau des phrases
  for (let i = 0; i < listePhrases.length; i++) {
    // On demande à l'utilisateur de saisir la phrase correspondant à l'indice i
    let phraseUtilisateur = prompt("Entrez la phrase : " + listePhrases[i])
    if (phraseUtilisateur === listePhrases[i]) {
      // Si la phrase saisi par l'utilisateur est correct, on incrémente le score
      score++
    }
  }
  console.log("Votre score est de " + score + " sur " + listePhrases.length)
}
