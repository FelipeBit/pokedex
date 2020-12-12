import { gql } from "@apollo/client";

export const GET_ALL_POKEMONS = gql`
query {
  pokemons(first: 200) {
    id
	  name
    image
    types
    attacks {
      fast {
       name
       type
       damage
     }
     special {
       name
       type
       damage
     }
   }
  } 
}
`;