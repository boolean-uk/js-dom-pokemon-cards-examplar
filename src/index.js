const cardsList = document.querySelector('ul')

function createCard() {
  const card = document.createElement('li')
  card.classList.add('card')
  cardsList.append(card)
  return card
}

function addTitle(card, pokemon) {
  const cardTitle = document.createElement('h2')
  cardTitle.classList.add('card--title')
  cardTitle.innerText = pokemon.name
  card.append(cardTitle)
  return cardTitle
}

function addImage(card, pokemon) {
  const cardImage = document.createElement('img')
  cardImage.classList.add('card--img')
  cardImage.setAttribute('width', '256')
  cardImage.setAttribute('src', pokemon.sprites.front_default)
  card.append(cardImage)
  return cardImage
}

function addInfoList(card, pokemon) {
  const cardInfoList = document.createElement('ul')
  cardInfoList.classList.add('card--text')

  addPokemonStats(cardInfoList, pokemon)
  addPokemonGameInfo(cardInfoList, pokemon)

  card.append(cardInfoList)
  return cardInfoList
}

function addPokemonStats(cardInfoList, pokemon) {
  for(let e = 0; e < pokemon.stats.length; e++) {
    const stat = pokemon.stats[e]
    const pokemonStatLi = document.createElement('li')
    pokemonStatLi.innerText = `${stat.stat.name.toUpperCase()}: ${String(stat.base_stat)}`

    cardInfoList.append(pokemonStatLi)
  }
}

function addPokemonGameInfo(cardInfoList, pokemon) {
  let pokemonGamesList = ''
  for(let e = 0; e < pokemon.game_indices.length; e++) {
    const game = pokemon.game_indices[e]
    if(pokemonGamesList.length > 0) {
      pokemonGamesList += ', '
    }
    pokemonGamesList += game.version.name
  }
  const pokemonGameListLi = document.createElement('li')
  pokemonGameListLi.innerText = 'APPEARS IN: ' + pokemonGamesList
  cardInfoList.append(pokemonGameListLi)
}

function createToggleButton(card) {
  const button = document.createElement('button')
  button.classList.add('card--button')
  card.append(button)
  return button
}

for(let i = 0; i < data.length; i++) {
  const pokemon = data[i]
  let isShowingFrontImage = true

  const card = createCard()
  const cardTitle = addTitle(card, pokemon)
  const cardImage = addImage(card, pokemon)
  const cardInfoList = addInfoList(card, pokemon)
  const button = createToggleButton(card)

  // state logic & user interaction
  const updateCardImageUI = () => {
    if(isShowingFrontImage) {
      cardImage.setAttribute('src', pokemon.sprites.front_default)
      button.innerText = 'Show Official Artwork'
    }
    else {
      cardImage.setAttribute('src', pokemon.sprites.other['official-artwork'].front_default)
      button.innerText = 'Show Default Artwork'
    }
  }

  updateCardImageUI()
    button.addEventListener('click', () => {
    isShowingFrontImage = !isShowingFrontImage
    updateCardImageUI()
  })

}
