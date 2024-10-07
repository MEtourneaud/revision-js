//==> Les conditrions

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
let listeMots = ["Cachalot", "Pétunia", "Serviette"]

// Déclarez une deuxième variable score, initialisée à 0 (nombre de mots correctement tapés par l’utilisateur).
let score = 0

// Demandez à l’utilisateur de rentrer le mot contenu dans la première case du tableau.
let motUtilisateur = prompt("Entrez le mot : " + listeMots[0])

// Vérifiez si le mot tapé est celui demandé.
if (motUtilisateur === listeMots[0]) {
  score++
}

motUtilisateur = prompt("Entrez le mot : " + listeMots[1])
if (motUtilisateur === listeMots[1]) {
  score++
}

motUtilisateur = prompt("Entrez le mot : " + listeMots[2])
if (motUtilisateur === listeMots[2]) {
  score++
}

console.log("Le score est de : " + score)
