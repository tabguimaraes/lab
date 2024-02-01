// function teste() {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${25}`).then((response) => {
//       const data = response.json();

//       const pokemonData = {
//         id: data["id"],
//         nome: data["name"],
//         tipo: data["types"],
//         altura: data["height"],
//         peso: data["weight"],
//       };
//       return pokemonData;
//     });
//   }

//   teste();

function pkfetch(id, nome, peso, altura) {
  var pkdata = {
    id: id,
    nome: nome,
    peso: peso,
    altura: altura,
  };

  return pkdata;
}

// Exemplo de uso
var meuPokemon = pkfetch(1, "Bulbasaur", 6.9, 0.7);
console.log(meuPokemon);
