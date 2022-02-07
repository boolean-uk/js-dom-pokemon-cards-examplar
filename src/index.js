// main function to create a card
const createCard = (cardData) => {
  //use createElement function to create new html elements
  const name = createElement('h2', 'card--title');
  // add a width attribute to the image element as a object
  const img = createElement('img', 'card--img', { width: '256' });
  const card = createElement('li', 'card');
  const textWrapper = createElement('ul', 'card--text');
  // use createCardText function to ceate text from the card data
  const textElements = createCardText(cardData);
  //add data to some elements
  name.innerText = cardData.name;
  img.src = cardData.sprites.other['official-artwork'].front_default;
  // iterate through card data and append elements to ul tag 'text wrapper'
  for (const element of textElements) {
    textWrapper.append(element);
  }
  // append the other attributes to the new card
  card.append(name, img, textWrapper);
  //return the  new card
  return card;
};

// dumb function to create elements, pass it the tag type and a classname
const createElement = (elementType, className = '', attributeObj = {}) => {
  const newElement = document.createElement(elementType);
  // iterate through the width attribute object to get the key value pair
  Object.entries(attributeObj).forEach((attribute) => {
    // use the key value pair with the js method setAttribute(name,value)
    newElement.setAttribute(attribute[0], attribute[1]);
  });

  newElement.className = className;
  return newElement;
};

// dumb function to add text to element
const createCardText = (cardInfo) => {
  const elementsArray = [];
  //iterate through the card data
  for (const cardAttr of cardInfo.stats) {
    //create an li element
    const element = createElement('li');
    // add text to the element from card data
    element.innerText = `${cardAttr.stat.name.toUpperCase()}: ${
      cardAttr.base_stat
    }`;
    // add the new element to the array
    elementsArray.push(element);
  }
  return elementsArray;
};

// target the '.cards' div in the index html
const cardsWrapper = document.querySelector('.cards');

// append cards to the '.cards' div
const appendCard = (cards) => {
  // iterate through the data
  for (let i = 0; i < cards.length; i++) {
    // use create card function for each pokemon in the array
    const card = createCard(cards[i]);
    // append this new card to the '.cards div'
    cardsWrapper.append(card);
  }
};

// to initiate the process of creating a card
appendCard(data);
