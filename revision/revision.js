//===>Modification variables

//Bibliothèque de 500 livres
//Acheter 50 livres de plus
//En jeter 10
//Racheter 5 des livres jetés

let totalLivres = 500

totalLivres += 50
totalLivres -= 10
totalLivres += 5

// console.log(totalLivres)

let affichageTotalLivres = "Notre bibliothèque possède " + totalLivres + " livres"
// console.log(affichageTotalLivres)

//==>Objets JavaScript

let ticket = {
  nomFilm: "Alien",
  prix: 12,
  numeroSalle: 2,
}

let nom = "Mathieu"

// Bonjour nom, votre film NOMDEFILM est en salle NUMERODELASALE

let texteAffichage =
  "Bonjour " + nom + ", votre film " + ticket.nomFilm + " est en salle " + ticket.numeroSalle + "."
// console.log(texteAffichage)

//==>Tableaux d'objets

//Déclarez un tableau playlist qui contiendra trois de vos morceaux préférés.
let playlist = ["Phantom Liberty", "Riders on the Storm", "Radioactive"]

//Stockez le nombre de morceaux disponibles dans une variable totalMorceaux.
let totalMorceaux = playlist.length

//Ajoutez deux morceaux au tableau playlist.
playlist.push("Wild Thing", "Stairway to Heaven")

//Supprimez le dernier morceau ajouté à votre collection.
playlist.pop()
console.log(playlist)
