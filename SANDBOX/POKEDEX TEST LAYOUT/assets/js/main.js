function initPokemon() {
  let pokemonID;
  function searchPokemon(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`.toLowerCase()).then(async (pokemon) => {
      if (pokemon.status != 200) {
        document.querySelector("#pokemonInput").setAttribute("placeholder", "Não encontrado");
        document.querySelector("#pokemonInput").value = "";
      } else {
        await pokemon.json().then((pokemon) => {
          // document.querySelector("#pokemonName").innerText = "loading";
          document.querySelector("#pokemonInput").setAttribute("placeholder", "Nome ou número");
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
    const pokemonSprite = document.querySelector("#pokemonSprite");
    return pokemonSprite.setAttribute("src", image);
  }

  function insertData(pokemon) {
    const pokemonName = document.querySelector("#pokemonName");
    const pokemonType = document.querySelector("#pokemonType");
    const pokemonHeight = document.querySelector("#pokemonHeight");
    const pokemonWeight = document.querySelector("#pokemonWeight");
    pokemonID = pokemon["id"];

    pokemonName.innerHTML = `<span><img src="./assets/img/favicon-16x16.png" alt="" /></span>&nbsp;${pokemon["id"]} - ${pokemon["name"]}`;
    pokemonType.innerText = pokemon["types"]["0"]["type"]["name"];
    pokemonHeight.innerText = `${pokemon["height"] * 10}cm`;
    pokemonWeight.innerText = `${pokemon["weight"] / 10}Kg`;
    return;
  }

  function formSearch() {
    const pokemonSearch = document.querySelector("#pokemonSearch");
    const pokemonInput = document.querySelector("#pokemonInput");
    pokemonSearch.addEventListener("submit", (event) => {
      event.preventDefault();
      searchPokemon(pokemonInput.value);
    });
  }
  formSearch();

  function btnSearch() {
    const btnBefore = document.querySelector("#btnBefore");
    const btnNext = document.querySelector("#btnNext");
    btnBefore.addEventListener("click", () => {
      if (pokemonID <= 1) {
      } else {
        pokemonID = pokemonID - 1;
        searchPokemon(pokemonID);
      }
    });
    btnNext.addEventListener("click", () => {
      pokemonID = pokemonID + 1;
      searchPokemon(pokemonID);
    });
  }

  btnSearch();
}
initPokemon();
