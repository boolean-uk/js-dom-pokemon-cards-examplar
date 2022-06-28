// console.log(data);

const CARDS_SEL = ".cards";

const CARD = "card";
const CARD__TITLE = "card--title";
const CARD__IMAGE = "card--img";
const CARD__TEXT = "card--text";

const IMAGE_WIDTH = 256;

const cardsContainer = document.querySelector(CARDS_SEL);

// NOTE: No longer need this as we use the 'capitalize' text transform
function uppercaseFirst(s) {
  if (s.length > 0) {
    return s[0].toUpperCase() + s.slice(1);
  } else {
    return s;
  }
}

// That's what they are :)
const monsters = data;

for (let monster of monsters) {
  const cardEl = document.createElement("li");
  cardEl.className = CARD;
  // Turn off list bullets
  cardEl.style.listStyle = "none";

  const nameEl = document.createElement("h2");
  nameEl.className = CARD__TITLE;
  nameEl.style.textTransform = "capitalize";
  nameEl.innerText = monster.name;
  cardEl.append(nameEl);

  const imgEl = document.createElement("img");
  imgEl.className = CARD__IMAGE;
  imgEl.width = IMAGE_WIDTH;
  imgEl.src = monster.sprites.other["official-artwork"].front_default;
  cardEl.append(imgEl);

  const ulEl = document.createElement("ul");
  ulEl.className = CARD__TEXT;
  // Turn off list bullets
  ulEl.style.listStyle = "none";
  // Some styling
  ulEl.style.lineHeight = 1.5;
  ulEl.style.paddingLeft = "5rem";
  cardEl.append(ulEl);

  for (let stat of monster.stats) {
    const liEl = document.createElement("li");
    liEl.innerText = stat.stat.name.toUpperCase() + ": " + stat.base_stat;

    ulEl.append(liEl);
  }

  // Add a completed monster card
  cardsContainer.append(cardEl);
}
