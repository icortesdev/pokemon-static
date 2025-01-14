import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { createSignal, For } from "solid-js";
import FavouritePokemonCard from "./FavouritePokemonCard";


const FavouritePokemons = () => {

    const getLocalStoragePokemons = (): FavoritePokemon[] => {
        const favouritePokemons = JSON.parse(
            localStorage?.getItem("favorites") || "[]"
        )
        return favouritePokemons

    }

    const [pokemons, setPokemons] = createSignal(getLocalStoragePokemons())

    return (
        <>
            <div class="grid grid-cols-2 sm:grid-cols-4">
                <For each={pokemons()}>
                    {(pokemon) => <FavouritePokemonCard pokemon={pokemon} />}
                </For>
            </div>

        </>
    )
}

export default FavouritePokemons
