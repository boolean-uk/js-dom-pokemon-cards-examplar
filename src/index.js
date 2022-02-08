
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

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

const createPokemonStat = (pokemon, baseStat, statName) => {
    const stat = document.createElement("LI")
    const text = document.createTextNode(`${statName}: ${baseStat}`)
    stat.appendChild(text)
    return stat
}

const createPokemonStatList = (pokemon) => {
    const statList = document.createElement("UL")
    statList.classList.add("card--text")
    pokemon.stats.forEach(stat => {
        const statEl = createPokemonStat(pokemon, stat.base_stat, stat.stat.name)
        statList.appendChild(statEl)
    })
    return statList
}

const createPokemonGameList = (pokemon) => {
    const games = document.createElement('div')
    games.classList.add("card--games")
    pokemon.game_indices.forEach(game => {
        const gameName = game.version.name
        const gameEl = document.createElement("div")
        gameEl.classList.add("tooltip", `game-${gameName}`)
        gameEl.setAttribute("data-text", `Pokemon ${gameName}`)
        games.appendChild(gameEl)
    })
    return games
}

const createPokemonElement = (pokemon) => {
    const card = document.createElement("LI")
    card.classList.add("card")
    card.appendChild(createPokemonHeader(pokemon))
    card.appendChild(createPokemonImage(pokemon))
    card.appendChild(createPokemonStatList(pokemon))
    card.appendChild(createPokemonGameList(pokemon))
    return card
}


const createPokemonList = (pokemonList) => {
    return pokemonList.map(pokemon => createPokemonElement(pokemon))
}

const pokemonList = createPokemonList(data)
pokemonList.forEach(pokemon => {
    document.getElementsByClassName("cards")[0].appendChild(pokemon)
})

