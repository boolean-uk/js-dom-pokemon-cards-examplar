//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

const cardsList = document.querySelector('ul')


for(let i = 0; i < data.length; i++) {
  const pokemon = data[i]
  let isShowingFrontImage = true

  const card = document.createElement('li')
  card.classList.add('card')

  const cardTitle = document.createElement('h2')
  cardTitle.classList.add('card--title')
  cardTitle.innerText = pokemon.name

  const cardImage = document.createElement('img')
  cardImage.classList.add('card--img')
  cardImage.setAttribute('width', '256')

  const cardInfoList = document.createElement('ul')
  cardInfoList.classList.add('card--text')

  for(let e = 0; e < pokemon.stats.length; e++) {
    const stat = pokemon.stats[e]
    const pokemonStatLi = document.createElement('li')
    pokemonStatLi.innerText = `${stat.stat.name.toUpperCase()}: ${String(stat.base_stat)}`

    cardInfoList.append(pokemonStatLi)
  }

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

  const button = document.createElement('button')
  button.classList.add('card--button')

  // put together HTML elements
  card.append(cardTitle)
  card.append(cardImage)
  card.append(cardInfoList)
  card.append(button)

  cardsList.append(card)

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
