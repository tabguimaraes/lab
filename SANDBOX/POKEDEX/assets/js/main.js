console.log("Conexão ok");

const container = document.querySelector(".container");
/* let novoElemento;

const elementos = [
  { tag: "p", texto: "Esse é um parágrafo" },
  { tag: "div", texto: "Essa é uma div" },
  { tag: "footer", texto: "Esse é um footer" },
  { tag: "section", texto: "Essa é uma section" },
];

elementos.forEach((item) => {
  novoElemento = document.createElement(item.tag);
  novoElemento.innerText = item.texto;
  container.appendChild(novoElemento);
});
 */

/* INSERIR FUNÇÃO NO FORM DE BUSCA VIA ADDEVENTLISTENER */
function searchPokemon(pokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(async (pokemon) => {
    await pokemon.json().then((pokemon) => {
      insertSprite(pokemon);
      insertData(pokemon);
    });
  });
}

function insertSprite(pokemon) {
  const image = pokemon["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"];
  const pokemonSprite = document.querySelector(".pokemonSprite");
  pokemonSprite.setAttribute("src", image);
}

function insertData(pokemon) {
  const pokemonName = document.querySelector(".pokemonName");
  const pokemonType = document.querySelector(".pokemonType");
  const pokemonLocation = document.querySelector(".pokemonLocation");

  pokemonName.innerText = pokemon["name"];
  pokemonType.innerText = pokemon["types"]["0"]["type"]["name"];
  pokemonLocation.innerText = pokemon["id"];
}

// insertSprite("1");

searchPokemon("11");
