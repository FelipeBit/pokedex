export function initPokemon (pokemons) {
    return {
        type: 'INIT_POKEMON',
        pokemons
      }
}

export function updatePokemon (pokemon) {
    return {
        type: 'UPDATE_POKEMON',
        pokemonUpdated: pokemon
      }
}