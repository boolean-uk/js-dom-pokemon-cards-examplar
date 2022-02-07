
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

const PokemonStats = [
    {
        statName: 'HP',
        statIndex: 0,
    },
    {
        statName: 'ATTACK',
        statIndex: 1,
    },
    {
        statName: 'DEFENSE',
        statIndex: 2,
    },
    {
        statName: 'SPECIAL-ATTACK',
        statIndex: 3,
    },
    {
        statName: 'SPECIAL-DEFENSE',
        statIndex: 4,
    },
    {
        statName: 'SPEED',
        statIndex: 5,
    },
]

const createPokemonHeader = (pokemon) => {
    const header = document.createElement("H2")
    const text = document.createTextNode(pokemon.name)
    header.appendChild(text)
    header.classList.add("card--title")
    return header
}
const createPokemonImage = (pokemon) => {
    const image = document.createElement("IMG")
    image.classList.add("card--img")
    image.setAttribute("width", 256)
    image.setAttribute("src", pokemon.sprites.other['official-artwork'].front_default)
    return image
}

const createPokemonStat = (pokemon, statIndex, statName) => {
    const stat = document.createElement("LI")
    const text = document.createTextNode(`${statName}: ${pokemon.stats[statIndex].base_stat}`)
    stat.appendChild(text)
    return stat
}

const createPokemonStatList = (pokemon) => {
    const statList = document.createElement("UL")
    statList.classList.add("card--text")
    PokemonStats.forEach(stat => {
        const statEl = createPokemonStat(pokemon, stat.statIndex, stat.statName)
        statList.appendChild(statEl)
    })
    return statList
}

const createPokemonElement = (pokemon) => {
    const card = document.createElement("LI")
    card.classList.add("card")
    card.appendChild(createPokemonHeader(pokemon))
    card.appendChild(createPokemonImage(pokemon))
    card.appendChild(createPokemonStatList(pokemon))
    return card
}

const createPokemonList = (pokemonList) => {
    return pokemonList.map(pokemon => createPokemonElement(pokemon))
}

const pokemonList = createPokemonList(data)
console.log(pokemonList)
pokemonList.forEach(pokemon => {
    document.getElementsByClassName("cards")[0].appendChild(pokemon)
})