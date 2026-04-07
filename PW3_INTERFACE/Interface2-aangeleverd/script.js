const sets = [
  {
    setNumber: "10273",
    name: "Haunted House",
    pieces: 3231,
    year: 2020,
    image: "images/haunted-house.jpg"
  },
  {
    setNumber: "910001",
    name: "Castle in the Forest",
    pieces: 2103,
    year: 2021,
    image: "images/castle-forest.jpg"
  },
  {
    setNumber: "21325",
    name: "Medieval Blacksmith",
    pieces: 2164,
    year: 2021,
    image: "images/blacksmith.jpg"
  },
  {
    setNumber: "10332",
    name: "Medieval Town Square",
    pieces: 3304,
    year: 2024,
    image: "images/town-square.jpg"
  },
  {
    setNumber: "76408",
    name: "12 Grimmauld Place",
    pieces: 1083,
    year: 2022,
    image: "images/grimmauld.jpg"
  },
  {
    setNumber: "76407",
    name: "The Shrieking Shack",
    pieces: 777,
    year: 2022,
    image: "images/shrieking-shack.jpg"
  },
  {
    setNumber: "21341",
    name: "Sanderson Sisters' Cottage",
    pieces: 2316,
    year: 2023,
    image: "images/sanderson.jpg"
  },
  {
    setNumber: "75904",
    name: "Mystery Mansion",
    pieces: 860,
    year: 2015,
    image: "images/mystery-mansion.jpg"
  }
];

const searchInput = document.getElementById("searchInput");
const resultsContainer = document.getElementById("results");
const resultCount = document.getElementById("resultCount");
const cardTemplate = document.getElementById("cardTemplate");

function filterSets(query) {
  const q = query.trim().toLowerCase();
  if (!q) return sets;

  return sets.filter((set) => {
    return (
      set.name.toLowerCase().includes(q) ||
      set.setNumber.toLowerCase().includes(q)
    );
  });
}

function updateResultCount(count) {
  resultCount.textContent = count === 1 
    ? `${count} resultaat`
    : `${count} resultaten`;
}

function renderSets(items) {
  resultsContainer.innerHTML = "";

  if (items.length === 0) {
    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";
    emptyState.textContent = "Geen LEGO-sets gevonden voor deze zoekopdracht.";
    resultsContainer.appendChild(emptyState);
    updateResultCount(0);
    return;
  }

  const fragment = document.createDocumentFragment();

  items.forEach((set) => {
    const card = cardTemplate.content.cloneNode(true);
    const image = card.querySelector(".set-card__image");
    const number = card.querySelector(".set-card__number");
    const title = card.querySelector(".set-card__title");
    const meta = card.querySelector(".set-card__meta");

    image.src = set.image;
    image.alt = set.name;
    number.textContent = `Setnummer: ${set.setNumber}`;
    title.textContent = set.name;
    meta.textContent = `${set.pieces} onderdelen · ${set.year}`;

    fragment.appendChild(card);
  });

  resultsContainer.appendChild(fragment);
  updateResultCount(items.length);
}

searchInput.addEventListener("input", (event) => {
  renderSets(filterSets(event.target.value));
});

renderSets(sets);