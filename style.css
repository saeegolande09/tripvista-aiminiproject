"use strict";

/* TripVista destination data */
const destinations = [
  {
    id: "manali",
    name: "Manali",
    state: "Himachal Pradesh, India",
    price: 8500,
    vibes: ["nature", "adventure", "romantic"],
    duration: ["weekend", "short", "week"],
    rating: 4.8,
    tag: "Mountain magic",
    emoji: "🏔️",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=82",
    description: "Pine forests, snow-dusted peaks and cosy cafés tucked into the mountains.",
    tags: ["Mountains", "Adventure", "Cool weather"]
  },
  {
    id: "goa",
    name: "Goa",
    state: "Goa, India",
    price: 12000,
    vibes: ["beach", "adventure", "romantic"],
    duration: ["weekend", "short", "week"],
    rating: 4.7,
    tag: "Beach days",
    emoji: "🏖️",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=82",
    description: "Golden beaches, colourful streets, sunset walks and laid-back coastal energy.",
    tags: ["Beach", "Sunsets", "Food"]
  },
  {
    id: "jaipur",
    name: "Jaipur",
    state: "Rajasthan, India",
    price: 7000,
    vibes: ["culture", "city", "romantic"],
    duration: ["weekend", "short"],
    rating: 4.6,
    tag: "Royal colours",
    emoji: "🏰",
    image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=900&q=82",
    description: "Pink-hued streets, grand forts, bustling bazaars and delicious Rajasthani food.",
    tags: ["Heritage", "Shopping", "Food"]
  },
  {
    id: "kerala",
    name: "Kerala",
    state: "Kerala, India",
    price: 18000,
    vibes: ["nature", "romantic", "beach"],
    duration: ["short", "week", "long"],
    rating: 4.9,
    tag: "Slow living",
    emoji: "🌴",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=82",
    description: "Drift through peaceful backwaters, explore tea gardens and savour tropical greenery.",
    tags: ["Backwaters", "Nature", "Relaxing"]
  },
  {
    id: "lonavala",
    name: "Lonavala",
    state: "Maharashtra, India",
    price: 4500,
    vibes: ["nature", "adventure", "romantic"],
    duration: ["weekend", "short"],
    rating: 4.5,
    tag: "Quick escape",
    emoji: "🌿",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=82",
    description: "Misty hills, monsoon waterfalls, scenic viewpoints and easy weekend trails.",
    tags: ["Hills", "Weekend", "Waterfalls"]
  },
  {
    id: "rishikesh",
    name: "Rishikesh",
    state: "Uttarakhand, India",
    price: 6500,
    vibes: ["nature", "adventure"],
    duration: ["weekend", "short"],
    rating: 4.7,
    tag: "Find your flow",
    emoji: "🧗",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=900&q=82",
    description: "Riverside cafés, forested foothills, yoga mornings and white-water adventures.",
    tags: ["River", "Rafting", "Wellness"]
  },
  {
    id: "udaipur",
    name: "Udaipur",
    state: "Rajasthan, India",
    price: 14000,
    vibes: ["culture", "romantic"],
    duration: ["weekend", "short"],
    rating: 4.8,
    tag: "Lakeside romance",
    emoji: "🛶",
    image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=900&q=82",
    description: "Lake views, ornate palaces, rooftop dinners and winding old-city lanes.",
    tags: ["Lakes", "Palaces", "Romantic"]
  },
  {
    id: "andaman",
    name: "Andaman Islands",
    state: "Andaman and Nicobar Islands, India",
    price: 32000,
    vibes: ["beach", "adventure", "romantic"],
    duration: ["week", "long"],
    rating: 4.9,
    tag: "Island dreaming",
    emoji: "🐚",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=82",
    description: "Clear blue water, coral reefs, quiet sandy coves and island-hopping days.",
    tags: ["Islands", "Snorkelling", "Ocean"]
  },
  {
    id: "mumbai",
    name: "Mumbai",
    state: "Maharashtra, India",
    price: 11000,
    vibes: ["city", "culture", "beach"],
    duration: ["weekend", "short"],
    rating: 4.5,
    tag: "City buzz",
    emoji: "🌆",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=900&q=82",
    description: "Street food, seaside promenades, art-deco architecture and late-night energy.",
    tags: ["City", "Food", "Culture"]
  },
  {
    id: "sikkim",
    name: "Sikkim",
    state: "Sikkim, India",
    price: 24000,
    vibes: ["nature", "adventure"],
    duration: ["short", "week", "long"],
    rating: 4.8,
    tag: "Himalayan wonder",
    emoji: "🏞️",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=82",
    description: "Dramatic Himalayan scenery, peaceful monasteries and winding mountain roads.",
    tags: ["Himalayas", "Trekking", "Culture"]
  },
  {
    id: "agra",
    name: "Agra",
    state: "Uttar Pradesh, India",
    price: 6000,
    vibes: ["culture", "romantic"],
    duration: ["weekend", "short"],
    rating: 4.4,
    tag: "Timeless wonder",
    emoji: "🕌",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=82",
    description: "Discover iconic Mughal architecture, lively markets and rich local flavours.",
    tags: ["History", "Architecture", "Food"]
  },
  {
    id: "meghalaya",
    name: "Meghalaya",
    state: "Meghalaya, India",
    price: 19000,
    vibes: ["nature", "adventure"],
    duration: ["short", "week", "long"],
    rating: 4.8,
    tag: "Cloud country",
    emoji: "🌧️",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=82",
    description: "Living root bridges, emerald valleys, waterfalls and misty forest trails.",
    tags: ["Waterfalls", "Forest", "Trekking"]
  }
];

/* Select page elements */
const $ = (selector) => document.querySelector(selector);

const grid = $("#destinationGrid");
const emptyState = $("#emptyState");
const searchInput = $("#searchInput");
const budgetSelect = $("#budget");
const vibeSelect = $("#vibe");
const durationSelect = $("#duration");
const companySelect = $("#company");
const sortSelect = $("#sortSelect");
const resultsCount = $("#resultsCount");
const favoritesButton = $("#showFavorites");

let quickFilter = "all";
let favoritesOnly = false;
let favorites = loadFavorites();
let toastTimer;

/* Save and load favourites */
function loadFavorites() {
  try {
    const stored = JSON.parse(
      localStorage.getItem("tripvista-favorites") || "[]"
    );

    return new Set(Array.isArray(stored) ? stored : []);
  } catch (error) {
    return new Set();
  }
}

function saveFavorites() {
  try {
    localStorage.setItem(
      "tripvista-favorites",
      JSON.stringify([...favorites])
    );
  } catch (error) {
    // Favourites still work during the current page session.
  }

  updateFavoriteCount();
}

function updateFavoriteCount() {
  const count = $("#savedCount");

  if (count) {
    count.textContent = String(favorites.size);
  }

  favoritesButton.setAttribute(
    "aria-pressed",
    String(favoritesOnly)
  );

  favoritesButton.innerHTML =
    `${favoritesOnly ? "♥" : "♡"} ` +
    `${favoritesOnly ? "Saved places" : "Saved"} ` +
    `<span id="savedCount">${favorites.size}</span>`;
}

/* Budget filtering */
function matchesBudget(destination, selected) {
  if (selected === "any") return true;

  if (selected === "budget") {
    return destination.price < 10000;
  }

  if (selected === "mid") {
    return destination.price >= 10000 &&
      destination.price <= 25000;
  }

  if (selected === "premium") {
    return destination.price > 25000 &&
      destination.price <= 50000;
  }

  if (selected === "luxury") {
    return destination.price > 50000;
  }

  return true;
}

/* Filter and sort destinations */
function getFilteredDestinations() {
  const query = searchInput.value.trim().toLowerCase();
  const budget = budgetSelect.value;
  const vibe = vibeSelect.value;
  const duration = durationSelect.value;
  const company = companySelect.value;

  let list = destinations.filter((destination) => {
    const searchable = [
      destination.name,
      destination.state,
      destination.description,
      destination.tag,
      ...destination.tags,
      ...destination.vibes
    ].join(" ").toLowerCase();

    if (query && !searchable.includes(query)) {
      return false;
    }

    if (!matchesBudget(destination, budget)) {
      return false;
    }

    if (vibe !== "any" && !destination.vibes.includes(vibe)) {
      return false;
    }

    if (
      quickFilter !== "all" &&
      !destination.vibes.includes(quickFilter)
    ) {
      return false;
    }

    if (
      duration !== "any" &&
      !destination.duration.includes(duration)
    ) {
      return false;
    }

    if (
      company === "couple" &&
      !destination.vibes.includes("romantic")
    ) {
      return false;
    }

    if (
      company === "friends" &&
      !destination.vibes.some((vibeName) =>
        ["adventure", "beach", "city"].includes(vibeName)
      )
    ) {
      return false;
    }

    if (
      company === "family" &&
      !destination.vibes.some((vibeName) =>
        ["nature", "culture", "beach"].includes(vibeName)
      )
    ) {
      return false;
    }

    if (favoritesOnly && !favorites.has(destination.id)) {
      return false;
    }

    return true;
  });

  switch (sortSelect.value) {
    case "price-low":
      list.sort((a, b) => a.price - b.price);
      break;

    case "price-high":
      list.sort((a, b) => b.price - a.price);
      break;

    case "name":
      list.sort((a, b) => a.name.localeCompare(b.name));
      break;

    default:
      list.sort((a, b) => b.rating - a.rating);
  }

  return list;
}

/* Format prices in Indian rupees */
function formatPrice(price) {
  return `₹${price.toLocaleString("en-IN")}`;
}

/* Create a destination card */
function renderCard(destination) {
  const isFavorite = favorites.has(destination.id);
  const article = document.createElement("article");

  article.className = "destination-card";

  article.innerHTML = `
    <div class="card-image-wrap">
      <img
        class="card-image"
        src="${destination.image}"
        alt="Scenery in ${destination.name}"
        loading="lazy"
      >

      <span class="card-badge">
        ${destination.emoji} ${destination.tag}
      </span>

      <button
        class="favorite-button ${isFavorite ? "is-favorite" : ""}"
        type="button"
        data-favorite="${destination.id}"
        aria-label="${isFavorite ? "Remove" : "Save"} ${destination.name} ${isFavorite ? "from" : "to"} favourites"
        aria-pressed="${isFavorite}"
      >${isFavorite ? "♥" : "♡"}</button>
    </div>

    <div class="card-body">
      <div class="card-location">📍 ${destination.state}</div>

      <div class="card-title-row">
        <h3>${destination.name}</h3>
        <span class="rating">★ ${destination.rating.toFixed(1)}</span>
      </div>

      <p class="card-description">${destination.description}</p>

      <div class="card-tags">
        ${destination.tags
          .slice(0, 3)
          .map((tag) => `<span class="card-tag">${tag}</span>`)
          .join("")}
      </div>

      <div class="card-footer">
        <div>
          <div class="price-label">EST. TRIP BUDGET / PERSON</div>
          <div class="price-value">
            ${formatPrice(destination.price)}
            <small>onwards</small>
          </div>
        </div>

        <a
          class="card-link"
          href="https://www.google.com/search?q=${encodeURIComponent(destination.name + " travel guide")}"
          target="_blank"
          rel="noopener noreferrer"
        >Explore ↗</a>
      </div>
    </div>
  `;

  const image = article.querySelector(".card-image");

  image.addEventListener("error", () => {
    image.src =
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80";

    image.alt = `Scenic travel landscape for ${destination.name}`;
  }, { once: true });

  return article;
}

/* Render the destination grid */
function renderDestinations() {
  const visible = getFilteredDestinations();

  grid.replaceChildren(...visible.map(renderCard));

  emptyState.hidden = visible.length > 0;
  grid.hidden = visible.length === 0;

  resultsCount.textContent = favoritesOnly
    ? `${visible.length} saved ${visible.length === 1 ? "place" : "places"}`
    : `${visible.length} ${visible.length === 1 ? "destination" : "destinations"} to explore`;

  updateFavoriteCount();
}

/* Show short notifications */
function showToast(message) {
  const toast = $("#toast");

  toast.textContent = message;
  toast.classList.add("show");

  window.clearTimeout(toastTimer);

  toastTimer = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}

/* Reset all filters */
function resetFilters() {
  budgetSelect.value = "any";
  vibeSelect.value = "any";
  durationSelect.value = "any";
  companySelect.value = "any";

  searchInput.value = "";
  sortSelect.value = "recommended";

  quickFilter = "all";
  favoritesOnly = false;

  document.querySelectorAll("[data-quick-filter]").forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.quickFilter === "all"
    );
  });

  renderDestinations();
}

/* Surprise destination feature */
function surpriseMe() {
  const list = getFilteredDestinations();
  const pool = list.length ? list : destinations;

  const chosen = pool[Math.floor(Math.random() * pool.length)];

  if (!chosen) return;

  favoritesOnly = false;
  searchInput.value = chosen.name;
  quickFilter = "all";

  document.querySelectorAll("[data-quick-filter]").forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.quickFilter === "all"
    );
  });

  renderDestinations();

  const card = [...grid.querySelectorAll(".destination-card")].find(
    (element) => element.querySelector("h3")?.textContent === chosen.name
  );

  if (card) {
    card.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

    card.classList.add("surprise-highlight");

    window.setTimeout(() => {
      card.classList.remove("surprise-highlight");
    }, 1600);
  }

  showToast(
    `Your surprise destination: ${chosen.name} ${chosen.emoji}`
  );
}

/* Initialize the page */
$("#year").textContent = String(new Date().getFullYear());

/* Trip planner form */
$("#tripForm").addEventListener("submit", (event) => {
  event.preventDefault();

  favoritesOnly = false;
  quickFilter = "all";

  document.querySelectorAll("[data-quick-filter]").forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.quickFilter === "all"
    );
  });

  renderDestinations();

  $("#explore").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  const count = getFilteredDestinations().length;

  showToast(
    count
      ? `Found ${count} getaway ${count === 1 ? "idea" : "ideas"} for you!`
      : "No matches yet — try broadening your choices."
  );
});

/* Update results when planner filters change */
[
  budgetSelect,
  vibeSelect,
  durationSelect,
  companySelect,
  sortSelect
].forEach((element) => {
  element.addEventListener("change", renderDestinations);
});

/* Search destinations as the user types */
searchInput.addEventListener("input", () => {
  favoritesOnly = false;
  renderDestinations();
});

/* Quick filter buttons */
document.querySelectorAll("[data-quick-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    quickFilter = button.dataset.quickFilter;
    favoritesOnly = false;

    document.querySelectorAll("[data-quick-filter]").forEach((item) => {
      item.classList.toggle("active", item === button);
    });

    renderDestinations();
  });
});

/* Save and remove favourite destinations */
grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-favorite]");

  if (!button) return;

  const id = button.dataset.favorite;
  const destination = destinations.find((item) => item.id === id);

  if (!destination) return;

  if (favorites.has(id)) {
    favorites.delete(id);
    showToast(`${destination.name} removed from saved places`);
  } else {
    favorites.add(id);
    showToast(`${destination.name} saved for later ♥`);
  }

  saveFavorites();
  renderDestinations();
});

/* Show saved destinations */
favoritesButton.addEventListener("click", () => {
  favoritesOnly = !favoritesOnly;

  if (favoritesOnly) {
    quickFilter = "all";
    searchInput.value = "";
    budgetSelect.value = "any";
    vibeSelect.value = "any";
    durationSelect.value = "any";
    companySelect.value = "any";
  }

  renderDestinations();

  $("#explore").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  if (favoritesOnly && favorites.size === 0) {
    showToast("Save a destination with the ♡ button to see it here.");
  }
});

/* Button event handlers */
$("#heroSurprise").addEventListener("click", surpriseMe);
$("#clearFilters").addEventListener("click", resetFilters);
$("#emptyReset").addEventListener("click", resetFilters);

/* Render cards immediately on page load */
renderDestinations();
