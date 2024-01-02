/* function initPokemon() {
  function searchPokemon(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`.toLowerCase()).then(async (pokemon) => {
      if (pokemon.status != 200) {
        document.querySelector("#pokemonInput").value = "Não encontrado";
      } else {
        await pokemon.json().then((pokemon) => {
          // document.querySelector(".pokemonName").innerText = "loading";
          document.querySelector("#pokemonInput").value = "";
          insertSprite(pokemon);
          insertData(pokemon);
          return;
        });
      }
    });
  }
  searchPokemon("1");

  function insertSprite(pokemon) {
    const image = pokemon["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"];
    const pokemonSprite = document.querySelector("#pokemonDisplay");
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

  // function insertForm ()
}
initPokemon();
 */
function searchPokemon(pokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`.toLowerCase()).then(async (pokemon) => {
    await pokemon.json().then((pokemon) => {
      // document.querySelector(".pokemonName").innerText = "loading";
      // document.querySelector("#pokemonInput").value = "";
      insertSprite(pokemon);
      insertData(pokemon);
      return;
    });
  });
}

searchPokemon("25");

function insertSprite(pokemon) {
  const image = pokemon["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"];
  const pokemonSprite = document.querySelector("#pokemonDisplay");
  return pokemonSprite.setAttribute("src", image);
}
