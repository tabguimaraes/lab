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

function initPokemon() {
  /* INSERIR FUNÇÃO NO FORM DE BUSCA VIA ADDEVENTLISTENER */
  function searchPokemon(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(async (pokemon) => {
      await pokemon.json().then((pokemon) => {
        insertSprite(pokemon);
        insertData(pokemon);
        return;
      });
    });
  }
  searchPokemon("1");

  function insertSprite(pokemon) {
    const image = pokemon["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"];
    const pokemonSprite = document.querySelector(".pokemonSprite");
    return pokemonSprite.setAttribute("src", image);
  }

  function insertData(pokemon) {
    const pokemonName = document.querySelector(".pokemonName");
    const pokemonType = document.querySelector(".pokemonType");
    const pokemonID = document.querySelector(".pokemonID");

    pokemonName.innerText = pokemon["name"];
    pokemonType.innerText = pokemon["types"]["0"]["type"]["name"];
    pokemonID.innerText = pokemon["id"];
    return;
  }

  function btnSearch() {
    const btnNext = document.querySelector(".next");
    const btnPrevious = document.querySelector(".previous");

    btnNext.addEventListener("click", () => {
      const pokemonID = +document.querySelector(".pokemonID").innerText + 1;
      searchPokemon(pokemonID);
    });
    btnPrevious.addEventListener("click", () => {
      const pokemonID = +document.querySelector(".pokemonID").innerText - 1;
      if (pokemonID < 1) {
      } else {
        searchPokemon(pokemonID);
      }
    });
  }

  btnSearch();

  function formSearch() {
    const formSearch = document.querySelector("#pokemonSearch");
    const pokemonInput = document.querySelector("#pokemonInput");
    formSearch.addEventListener("submit", (event) => {
      event.preventDefault();
      if (pokemonInput.value < 1) {
      } else {
        searchPokemon(pokemonInput.value);
      }
    });
  }
  formSearch();
}
initPokemon();
