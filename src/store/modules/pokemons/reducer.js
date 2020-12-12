export default function pokemons(state = [], action){

    switch (action.type) {
        case 'INIT_POKEMON':
            return action.pokemons
        case 'UPDATE_POKEMON':
            return state.map(pokemon => pokemon.id === action.pokemonUpdated.id ? action.pokemonUpdated : pokemon)
        default: 
            return state;
    }
    
}