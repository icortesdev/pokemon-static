import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import type { Component } from "solid-js";
import { createSignal, Show } from "solid-js";



interface Props {
  pokemon: FavoritePokemon;
}

const FavouritePokemonCard: Component<Props> = ({ pokemon }) => {

  const [isVisible, setIsVisible] = createSignal(true);

  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`

  const deleteFavorite = () => {
    const favorites = JSON.parse
      (localStorage.getItem("favorites") ?? "[]"
      ) as FavoritePokemon[]

    const newFavorites = favorites.filter((p) => p.id !== pokemon.id);

    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setIsVisible(false);
  }
  return (
    <Show when={isVisible()}>
      <div class="flex flex-col justify-center items-center">
        <a href={`/pokemons/${pokemon.name}`}>
          <img
            src={imageSrc}
            alt={pokemon.name}
            width="180"
            height="180"
            style={`ViewTransition-name: ${pokemon.name}-image`}
          />
          <p class="capitalize">
            #{pokemon.id} - {pokemon.name}
          </p>
        </a>
        <button onclick={deleteFavorite} class="text-red-400">
          Borrar
        </button>
      </div>
    </Show>
  )
}

export default FavouritePokemonCard
