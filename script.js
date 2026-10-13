
"use strict";

/* ==========================================
   TRIPVISTA — DESTINATION RECOMMENDATION APP
   ========================================== */

const destinations = [
  {
    id: 1,
    name: "Lonavala",
    state: "Maharashtra, India",
    country: "India",
    price: 4500,
    days: 2,
    vibe: ["nature", "adventure", "romantic"],
    company: ["solo", "friends", "family", "couple"],
    emoji: "🌿",
    badge: "Weekend favourite",
    rating: 4.8,
    description: "Misty hills, green valleys, waterfalls and the perfect quick escape.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=850&q=80",
    highlights: ["Tiger Point viewpoint", "Bhushi Dam area", "Sunset over the hills"],
    itinerary: ["Day 1: Arrive, explore the viewpoints and enjoy local food.", "Day 2: Visit a waterfall or fort, then head home."]
  },
  {
    id: 2,
    name: "Goa",
    state: "India's west coast",
    country: "India",
    price: 12000,
    days: 4,
    vibe: ["beach", "adventure", "city", "romantic"],
    company: ["solo", "friends", "family", "couple"],
    emoji: "🏖️",
    badge: "Beach mood",
    rating: 4.9,
    description: "Golden beaches, colourful cafés, coastal sunsets and slow mornings.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=850&q=80",
    highlights: ["North Goa beaches", "Fontainhas streets", "Coastal cafés"],
    itinerary: ["Day 1: Arrive and enjoy a relaxed beach evening.", "Day 2: Explore beaches, markets and cafés.", "Day 3: Discover heritage streets and local food.", "Day 4: Enjoy a final seaside breakfast and depart."]
  },
  {
    id: 3,
    name: "Manali",
    state: "Himachal Pradesh, India",
    country: "India",
    price: 15000,
    days: 5,
    vibe: ["nature", "adventure", "romantic"],
    company: ["solo", "friends", "family", "couple"],
    emoji: "🏔️",
    badge: "Mountain magic",
    rating: 4.8,
    description: "Snowy peaks in season, pine forests, mountain cafés and fresh air.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=850&q=80",
    highlights: ["Old Manali", "Solang Valley", "Mountain viewpoints"],
    itinerary: ["Day 1: Arrive and explore the local market.", "Day 2: Visit mountain viewpoints and nearby villages.", "Day 3: Explore Solang Valley when conditions permit.", "Day 4: Enjoy cafés, nature walks and local food.", "Day 5: Depart."]
  },
  {
    id: 4,
    name: "Jaipur",
    state: "Rajasthan, India",
    country: "India",
    price: 9000,
    days: 3,
    vibe: ["culture", "city", "romantic"],
    company: ["solo", "friends", "family", "couple"],
    emoji: "🏛️",
    badge: "Culture fix",
    rating: 4.7,
    description: "Pink streets, royal architecture, colourful bazaars and delicious food.",
    image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=850&q=80",
    highlights: ["Hawa Mahal", "Amber Fort", "Local bazaars"],
    itinerary: ["Day 1: Explore the old city and Hawa Mahal area.", "Day 2: Visit Amber Fort and other historic landmarks.", "Day 3: Shop for crafts and try Rajasthani food."]
  },
  {
    id: 5,
    name: "Kerala",
    state: "South India",
    country: "India",
    price: 18000,
    days: 5,
    vibe: ["nature", "beach", "romantic"],
    company: ["solo", "friends", "family", "couple"],
    emoji: "🌴",
    badge: "Slow travel",
    rating: 4.9,
    description: "Lush greenery, peaceful backwaters, tropical beaches and local flavours.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=850&q=80",
    highlights: ["Alleppey backwaters", "Munnar tea gardens", "Coastal sunsets"],
    itinerary: ["Day 1: Arrive and settle in.", "Day 2: Explore tea gardens or green hill scenery.", "Day 3: Enjoy a backwater experience.", "Day 4: Discover local food and nearby sights.", "Day 5: Depart."]
  },
  {
    id: 6,
    name: "Rishikesh",
    state: "Uttarakhand, India",
    country: "India",
    price: 8000,
    days: 3,
    vibe: ["nature", "adventure", "romantic"],
    company: ["solo", "friends", "couple"],
    emoji: "🧗",
    badge: "Adventure time",
    rating: 4.7,
    description: "River views, forested hills, yoga cafés and outdoor adventures.",
    image: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=850&q=80",
    highlights: ["Ganga riverfront", "Ram Jhula area", "Yoga and nature experiences"],
    itinerary: ["Day 1: Explore the riverfront and nearby cafés.", "Day 2: Try a suitable outdoor activity or yoga session.", "Day 3: Visit local sights and depart."]
  },
  {
    id: 7,
    name: "Udaipur",
    state: "Rajasthan, India",
    country: "India",
    price: 11000,
    days: 3,
    vibe: ["culture", "romantic", "city"],
    company: ["solo", "friends", "family", "couple"],
    emoji: "💗",
    badge: "Romantic escape",
    rating: 4.8,
    description: "Lake sunsets, historic palaces, charming streets and rooftop dinners.",
    image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=850&q=80",
    highlights: ["Lake Pichola", "City Palace area", "Old-town cafés"],
    itinerary: ["Day 1: Walk around the old city and lakefront.", "Day 2: Explore palaces and enjoy a sunset by the lake.", "Day 3: Visit local shops and depart."]
  },
  {
    id: 8,
    name: "Andaman Islands",
    state: "Bay of Bengal, India",
    country: "India",
    price: 32000,
    days: 6,
    vibe: ["beach", "adventure", "romantic", "nature"],
    company: ["solo", "friends", "family", "couple"],
    emoji: "🐚",
    badge: "Island dreaming",
    rating: 4.9,
    description: "Clear blue water, sandy beaches and tropical island scenery.",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=850&q=80",
    highlights: ["Swaraj Dweep beaches", "Snorkelling when available", "Island sunsets"],
    itinerary: ["Day 1: Arrive and explore nearby sights.", "Day 2: Enjoy a beach day.", "Day 3: Take a permitted island excursion.", "Day 4: Explore the coastline or try a water activity.", "Day 5: Relax and enjoy local food.", "Day 6: Depart."]
  },
  {
    id: 9,
    name: "Darjeeling",
    state: "West Bengal, India",
    country: "India",
    price: 14000,
    days: 5,
    vibe: ["nature", "culture", "romantic"],
    company: ["solo", "friends", "family", "couple"],
    emoji: "🍃",
    badge: "Tea & tranquility",
    rating: 4.7,
    description: "Tea gardens, mountain views, toy-train charm and cosy cafés.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=850&q=80",
    highlights: ["Tea gardens", "Darjeeling Himalayan Railway", "Mountain viewpoints"],
    itinerary: ["Day 1: Arrive and explore the town.", "Day 2: Visit tea gardens and local markets.", "Day 3: Enjoy a scenic railway experience if available.", "Day 4: Discover nearby viewpoints.", "Day 5: Depart."]
  },
  {
    id: 10,
    name: "Dubai",
    state: "United Arab Emirates",
    country: "International",
    price: 55000,
    days: 5,
    vibe: ["city", "adventure", "romantic", "beach"],
    company: ["solo", "friends", "family", "couple"],
    emoji: "🌆",
    badge: "Big city energy",
    rating: 4.8,
    description: "Modern architecture, desert adventures, beaches and lively city life.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=850&q=80",
    highlights: ["Downtown Dubai", "Desert safari", "Dubai Marina"],
    itinerary: ["Day 1: Arrive and explore the neighbourhood.", "Day 2: Visit major city attractions.", "Day 3: Enjoy a desert excursion.", "Day 4: Explore the waterfront and local markets.", "Day 5: Depart."]
  },
  {
    id: 11,
    name: "Bali",
    state: "Indonesia",
    country: "International",
    price: 60000,
    days: 7,
    vibe: ["beach", "nature", "adventure", "romantic"],
    company: ["solo", "friends", "couple"],
    emoji: "🌺",
    badge: "Tropical dream",
    rating: 4.9,
    description: "Rice terraces, tropical beaches, temples and laid-back island days.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=850&q=80",
    highlights: ["Ubud rice terraces", "Coastal sunsets", "Local temples"],
    itinerary: ["Day 1: Arrive and settle in.", "Day 2: Explore Ubud and its green landscapes.", "Day 3: Visit cultural sights and temples.", "Day 4: Enjoy the coast.", "Day 5: Try a nature or water activity.", "Day 6: Explore local cafés and markets.", "Day 7: Depart."]
  },
  {
    id: 12,
    name: "Singapore",
    state: "Southeast Asia",
    country: "International",
    price: 65000,
    days: 5,
    vibe: ["city", "culture", "adventure"],
    company: ["solo", "friends", "family", "couple"],
    emoji: "🌃",
    badge: "City explorer",
    rating: 4.8,
    description: "Futuristic gardens, vibrant food scenes, waterfront walks and museums.",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=850&q=80",
    highlights: ["Gardens by the Bay", "Marina Bay waterfront", "Hawker food centres"],
    itinerary: ["Day 1: Arrive and explore the waterfront.", "Day 2: Visit gardens and city attractions.", "Day 3: Discover neighbourhoods and food markets.", "Day 4: Enjoy museums or other attractions.", "Day 5: Depart."]
  }
];

/* ---------- ELEMENTS ---------- */

const tripForm = document.getElementById("tripForm");
const budgetSelect = document.getElementById("budget");
const vibeSelect = document.getElementById("vibe");
const durationSelect = document.getElementById("duration");
const companySelect = document.getElementById("company");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const destinationGrid = document.getElementById("destinationGrid");
const resultsMessage = document.getElementById("resultsMessage");
const resultsTitle = document.getElementById("resultsTitle");
const resultsSubtitle = document.getElementById("resultsSubtitle");
const emptyState = document.getElementById("emptyState");
const showAllBtn = document.getElementById("showAllBtn");
const savedCount = document.getElementById("savedCount");
const showFavoritesBtn = document.getElementById("showFavorites");
const tripDialog = document.getElementById("tripDialog");
const dialogContent = document.getElementById("dialogContent");
const toast = document.getElementById("toast");

let activeFilter = "all";
let showAll = false;
let favoritesOnly = false;
let hasSubmitted = false;
let toastTimer;

/* ---------- SAVED FAVOURITES ---------- */

function readFavorites() {
  try {
    const saved = JSON.parse(localStorage.getItem("tripvista-favorites") || "[]");
    return Array.isArray(saved) ? saved.filter(Number.isFinite) : [];
  } catch {
    return [];
  }
}

let favorites = readFavorites();

function saveFavorites() {
  try {
    localStorage.setItem("tripvista-favorites", JSON.stringify(favorites));
  } catch {
    showToast("Your browser couldn't save favourites for this session.");
  }
  updateFavoriteCount();
}

function updateFavoriteCount() {
  savedCount.textContent = favorites.length;
  showFavoritesBtn.setAttribute(
    "aria-label",
    `Show saved destinations, ${favorites.length} saved`
  );
}

/* ---------- BUDGET AND FILTERS ---------- */

function getBudgetRange() {
  const ranges = {
    budget: [0, 9999],
    mid: [10000, 25000],
    premium: [25001, 50000],
    luxury: [50001, Infinity]
  };
  return ranges[budgetSelect.value] || [0, Infinity];
}

function getDurationRange() {
  const ranges = {
    weekend: [2, 3],
    short: [4, 5],
    week: [6, 8],
    long: [9, Infinity]
  };
  return ranges[durationSelect.value] || [0, Infinity];
}

function getFilteredDestinations() {
  const [minBudget, maxBudget] = getBudgetRange();
  const [minDays, maxDays] = getDurationRange();
  const chosenVibe = vibeSelect.value;
  const chosenCompany = companySelect.value;
  const query = searchInput.value.trim().toLowerCase();

  let list = destinations.filter(place => {
    const matchesBudget = place.price >= minBudget && place.price <= maxBudget;
    const matchesVibe = chosenVibe === "any" || place.vibe.includes(chosenVibe);
    const matchesDuration = place.days >= minDays && place.days <= maxDays;
    const matchesCompany = chosenCompany === "any" || place.company.includes(chosenCompany);

    const searchable = [
      place.name,
      place.state,
      place.country,
      place.description,
      ...place.vibe,
      ...place.highlights
    ].join(" ").toLowerCase();

    const matchesSearch = !query || searchable.includes(query);
    const matchesChip = activeFilter === "all" || place.vibe.includes(activeFilter);
    const matchesFavorites = !favoritesOnly || favorites.includes(place.id);

    return matchesBudget && matchesVibe && matchesDuration &&
      matchesCompany && matchesSearch && matchesChip && matchesFavorites;
  });

  switch (sortSelect.value) {
    case "priceLow":
      list.sort((a, b) => a.price - b.price);
      break;
    case "priceHigh":
      list.sort((a, b) => b.price - a.price);
      break;
    case "name":
      list.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      if (hasSubmitted && vibeSelect.value !== "any") {
        list.sort((a, b) =>
          b.vibe.includes(chosenVibe) - a.vibe.includes(chosenVibe)
        );
      }
  }

  return list;
}

/* ---------- CARD RENDERING ---------- */

function formatPrice(price) {
  return "₹" + price.toLocaleString("en-IN");
}

function renderCard(place, index) {
  const isFavorite = favorites.includes(place.id);
  const tags = place.vibe.slice(0, 3).map(vibe =>
    `<span class="card-tag">${vibe.charAt(0).toUpperCase() + vibe.slice(1)}</span>`
  ).join("");

  return `
    <article class="destination-card" style="animation-delay:${Math.min(index, 8) * 45}ms">
      <div class="card-image-wrap">
        <img class="card-image"
          src="${place.image}"
          alt="${place.name} travel destination"
          loading="lazy"
          onerror="this.onerror=null;this.style.display='none';this.parentElement.style.background='linear-gradient(135deg,#e6defc,#fce4e8)'">
        <span class="card-badge">${place.emoji} ${place.badge}</span>
        <button class="favorite-button ${isFavorite ? "is-favorite" : ""}"
          type="button"
          data-action="favorite"
          data-id="${place.id}"
          aria-label="${isFavorite ? "Remove" : "Save"} ${place.name} ${isFavorite ? "from" : "to"} favourites"
          aria-pressed="${isFavorite}">${isFavorite ? "♥" : "♡"}</button>
      </div>
      <div class="card-body">
        <div class="card-location">📍 ${place.state}</div>
        <div class="card-title-row">
          <h3>${place.name}</h3>
          <span class="card-rating">★ ${place.rating.toFixed(1)}</span>
        </div>
        <p class="card-description">${place.description}</p>
        <div class="card-tags">${tags}</div>
        <div class="card-footer">
          <div>
            <div class="price-label">Estimated / person</div>
            <div class="price-value">${formatPrice(place.price)} <small>· ${place.days} days</small></div>
          </div>
          <div class="card-actions">
            <button class="card-details-btn" type="button" data-action="details" data-id="${place.id}">Details</button>
            <button class="card-plan-btn" type="button" data-action="plan" data-id="${place.id}">Let's go ↗</button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderDestinations() {
  const list = getFilteredDestinations();
  const visibleList = showAll ? list : list.slice(0, 6);

  destinationGrid.innerHTML = visibleList.map(renderCard).join("");
  emptyState.hidden = list.length !== 0;
  destinationGrid.hidden = list.length === 0;

  if (favoritesOnly) {
    resultsTitle.innerHTML = 'Your <span class="gradient-text">saved places.</span>';
    resultsSubtitle.textContent = "All the places you have saved for later.";
  } else if (hasSubmitted) {
    resultsTitle.innerHTML = 'Your next <span class="gradient-text">adventure.</span>';
    resultsSubtitle.textContent = list.length
      ? `We found ${list.length} destination${list.length === 1 ? "" : "s"} matching your preferences.`
      : "No exact matches yet. Try widening your preferences.";
  } else {
    resultsTitle.innerHTML = 'Little places, <span class="gradient-text">big memories.</span>';
    resultsSubtitle.textContent = "A few ideas to get your wanderlust going.";
  }

  resultsMessage.textContent = list.length
    ? `Showing ${visibleList.length} of ${list.length} destination${list.length === 1 ? "" : "s"}`
    : "";

  showAllBtn.hidden = list.length <= 6;
  showAllBtn.textContent = showAll ? "Show fewer destinations ↑" : "Explore all destinations ↓";
  showFavoritesBtn.classList.toggle("saved-mode", favoritesOnly);

  document.querySelectorAll(".filter-chip").forEach(button => {
    button.classList.toggle("active", button.dataset.filter === activeFilter);
  });
}

/* ---------- FEEDBACK ---------- */

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function getPlace(id) {
  return destinations.find(place => place.id === Number(id));
}

/* ---------- ITINERARY DIALOG ---------- */

function openDetails(place, planning = false) {
  const itinerary = place.itinerary.map((item, index) => `
    <li><span>${["🗺️", "📸", "🍜", "🌅", "✨", "✈️"][index % 6]}</span><div>${item}</div></li>
  `).join("");

  dialogContent.innerHTML = `
    <img class="dialog-cover" src="${place.image}" alt="${place.name}"
      onerror="this.onerror=null;this.style.display='none'">
    <div class="dialog-inner">
      <div class="card-location">${place.emoji} ${place.state}</div>
      <h2>${planning ? "Your little escape to " : "Discover "}<span class="gradient-text">${place.name}</span></h2>
      <p>${place.description}</p>
      <div class="dialog-meta">
        <span>💰 ${formatPrice(place.price)} / person*</span>
        <span>🗓️ ${place.days} days</span>
        <span>⭐ ${place.rating} community rating</span>
      </div>
      <h3>📍 Places to look forward to</h3>
      <div class="card-tags">${place.highlights.map(item => `<span class="card-tag">${item}</span>`).join("")}</div>
      <h3>✨ Your sample itinerary</h3>
      <ul class="itinerary-list">${itinerary}</ul>
      <p class="dialog-note">💡 *Planning estimate only. Actual travel, stay, food and activity costs vary by season, transport and personal choices. Check current prices and conditions before booking.</p>
      <button class="button button-primary" type="button" data-action="dialog-favorite" data-id="${place.id}">
        ${favorites.includes(place.id) ? "♥ Saved to favourites" : "♡ Save this destination"}
      </button>
    </div>
  `;

  if (typeof tripDialog.showModal === "function") {
    tripDialog.showModal();
  } else {
    showToast("Your browser doesn't support the itinerary popup. Try a modern browser.");
  }
}

/* ---------- USER INTERACTIONS ---------- */

tripForm.addEventListener("submit", event => {
  event.preventDefault();
  hasSubmitted = true;
  favoritesOnly = false;
  showAll = false;
  renderDestinations();

  document.getElementById("explore").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  const count = getFilteredDestinations().length;
  showToast(count
    ? `✨ ${count} destination${count === 1 ? "" : "s"} found for your vibe!`
    : "Try another combination to discover more places.");
});

document.getElementById("filterChips").addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;

  activeFilter = button.dataset.filter;
  favoritesOnly = false;
  showAll = false;
  renderDestinations();
});

searchInput.addEventListener("input", () => {
  showAll = false;
  renderDestinations();
});

sortSelect.addEventListener("change", renderDestinations);

showAllBtn.addEventListener("click", () => {
  showAll = !showAll;
  renderDestinations();
});

destinationGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const place = getPlace(button.dataset.id);
  if (!place) return;

  switch (button.dataset.action) {
    case "favorite":
      toggleFavorite(place);
      break;
    case "details":
      openDetails(place);
      break;
    case "plan":
      openDetails(place, true);
      break;
  }
});

function toggleFavorite(place) {
  if (favorites.includes(place.id)) {
    favorites = favorites.filter(id => id !== place.id);
    showToast(`${place.name} removed from saved places.`);
  } else {
    favorites.push(place.id);
    showToast(`${place.name} saved! ♥`);
  }

  saveFavorites();

  if (tripDialog.open) {
    openDetails(place, true);
  }
  renderDestinations();
}

showFavoritesBtn.addEventListener("click", () => {
  favoritesOnly = !favoritesOnly;
  showAll = true;

  if (favoritesOnly) {
    activeFilter = "all";
    searchInput.value = "";
    budgetSelect.value = "any";
    vibeSelect.value = "any";
    durationSelect.value = "any";
    companySelect.value = "any";
    showToast("Here's your travel wishlist ♥");
  }

  renderDestinations();
  document.getElementById("explore").scrollIntoView({ behavior: "smooth" });
});

function surpriseMe() {
  const list = getFilteredDestinations();
  const pool = list.length ? list : destinations;
  const place = pool[Math.floor(Math.random() * pool.length)];

  favoritesOnly = false;
  hasSubmitted = true;
  renderDestinations();
  openDetails(place, true);
}

document.getElementById("heroSurprise").addEventListener("click", surpriseMe);
document.getElementById("bannerSurprise").addEventListener("click", surpriseMe);

document.getElementById("resetFilters").addEventListener("click", () => {
  tripForm.reset();
  searchInput.value = "";
  sortSelect.value = "recommended";
  activeFilter = "all";
  showAll = false;
  favoritesOnly = false;
  hasSubmitted = false;
  renderDestinations();
});

document.getElementById("closeDialog").addEventListener("click", () => {
  tripDialog.close();
});

tripDialog.addEventListener("click", event => {
  if (event.target === tripDialog) tripDialog.close();

  const button = event.target.closest('[data-action="dialog-favorite"]');
  if (button) {
    const place = getPlace(button.dataset.id);
    if (place) toggleFavorite(place);
  }
});

tripDialog.addEventListener("close", () => {
  dialogContent.innerHTML = "";
});

/* ---------- START THE APP ---------- */

updateFavoriteCount();
renderDestinations();
