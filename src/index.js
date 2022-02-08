console.log(data)

//You can start simple and just render a single
//pokemon card from the first element
console.log(data[0])

const boundedIncrement = (number, max) => {
  number++
  if (number > max) {
    number = 0
  }
  return number
}

const createPokemonHeader = (pokemon) => {
  const header = document.createElement('H2')
  const text = document.createTextNode(pokemon.name)
  header.appendChild(text)
  header.classList.add('card--title')
  return header
}

const generateImageArray = (pokemon) => {
  const images = Object.values(pokemon.sprites)
    .filter((url) => url !== null)
    .filter((url) => typeof url !== 'object')
  const dreamWorldImages = Object.values(
    pokemon.sprites.other.dream_world
  ).filter((url) => url !== null)
  const officialImages = Object.values(
    pokemon.sprites.other['official-artwork']
  ).filter((url) => url !== null)
  return [...officialImages, ...images, ...dreamWorldImages]
}

const createPokemonImage = (pokemon) => {
  const image = document.createElement('IMG')
  const pokemonImages = generateImageArray(pokemon)
  let currentImage = 0
  image.classList.add('card--img')
  image.setAttribute('width', 256)
  image.setAttribute('src', pokemonImages[currentImage])
  image.addEventListener('click', () => {
    currentImage = boundedIncrement(currentImage, pokemonImages.length - 1)
    image.setAttribute('src', pokemonImages[currentImage])
  })
  return image
}

const createPokemonStat = (baseStat, statName) => {
  const stat = document.createElement('LI')
  const text = document.createTextNode(`${statName}: ${baseStat}`)
  stat.appendChild(text)
  return stat
}

const createPokemonStatList = (pokemon) => {
  const statList = document.createElement('UL')
  statList.classList.add('card--text')
  pokemon.stats.forEach((stat) => {
    const statEl = createPokemonStat(stat.base_stat, stat.stat.name)
    statList.appendChild(statEl)
  })
  return statList
}

const createPokemonGameList = (pokemon) => {
  const games = document.createElement('div')
  games.classList.add('card--games')
  pokemon.game_indices.forEach((game) => {
    const gameName = game.version.name
    const gameEl = document.createElement('div')
    gameEl.classList.add('tooltip', `game-${gameName}`)
    gameEl.setAttribute('data-text', `Pokemon ${gameName}`)
    games.appendChild(gameEl)
  })
  return games
}

const createPokemonElement = (pokemon) => {
  const card = document.createElement('LI')
  card.classList.add('card')
  card.appendChild(createPokemonHeader(pokemon))
  card.appendChild(createPokemonImage(pokemon))
  card.appendChild(createPokemonStatList(pokemon))
  card.appendChild(createPokemonGameList(pokemon))
  return card
}

const createPokemonList = (pokemonList) => {
  return pokemonList.map((pokemon) => createPokemonElement(pokemon))
}

const pokemonList = createPokemonList(data)
pokemonList.forEach((pokemon) => {
  document.getElementsByClassName('cards')[0].appendChild(pokemon)
})

