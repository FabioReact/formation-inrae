// const - let

// Type primitifs
const myAge = 32;
const myName = "";

// Types reference
const fruits = [];
const person = {};

// fruits = 42
fruits.push("Banana");
// Possible d'ajouter/supprimer un element d'un tableau - object avec const

// Par défaut, j'utilise const plutot que let

// Arrow function - Fonction flechée
function ajouter(x, y) {
	return x + y;
}

const ajouter2 = (x, y) => {
	return x + y;
};

// Avec return impplicite
const ajouter3 = (x, y) => x + y;

// Si je dispose de un et un seul parametre, je peux ommettre les parentheses lors de la déclaration
const square = (x) => x * x;
// Attention si vous souhaitez retourner un objet, les parentheses sont obligatoires
const square2 = (x) => ({ result: x * x });

// Destructuration d'un objet
const jon = {
	id: 1,
	firstname: "Jon",
	lastname: "Snow",
	age: 30,
	lives: {
		city: "Winterfell",
		continent: "Westeros",
	},
};

// const id = jon.id
// const age = jon.age
// const firstname = jon['firstname']
// const username = jon.firstname
const {
	id,
	age,
	firstname: username,
	lives: { city },
} = jon;

// Destructuration d'un tableau
const player = ["RedPanda", 99];
// const playername = player[0]
const [playername, level] = player;
console.log(playername, level);

const dynamicKey = "surname";

// Dynamic key
const friend = {
	name: "Mathieu",
	[dynamicKey]: "Matt", // equivalent à: surname: 'Matt'
};

// Spread Operator
// ⚠️ Attention, le spread operator effectue une copie superficielle seulement (shallow copy)
const friendCopy = { ...friend };
friend.name = "Fabio";
console.log(friendCopy);

const jonCopy = { ...jon, lives: { ...jon.lives } };
jon.lives.city = "Disney";
console.log(jonCopy.lives);

// https://developer.mozilla.org/en-US/docs/Web/API/structuredClone
const jonStructuredClone = structuredClone(jon);
console.log(jonStructuredClone);

