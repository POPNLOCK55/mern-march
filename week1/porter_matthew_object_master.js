const pokémon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);


// const poke3 = pokémon.filter(p => p.id % 3 === 0);
// console.log(poke3);

const firePoke = pokémon.filter(p => p.types[0] == "fire");
console.log(firePoke);

// const multiType = pokémon.filter(p => p.types).map(poke =>`<li>${poke.types}</li>`);
// console.log(multiType);

// const justNames = pokémon.map(p => `<li>${p.name}</li>`);
// console.log(justNames)

// const idOver99 = pokémon.filter(p => p.id > 99).map(poke => `<li>${poke.name}</li>`)
// console.log(idOver99)

// I need to have my function read both positions in the array to determine if the type I'm searching for is present. The or operator isn't helping!
//Try the .concat method next
const poisonType = pokémon.filter(p => p.types[0] === "poison");
console.log(poisonType);
