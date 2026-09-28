import { loadCart, loadFavorites, saveCart, saveFavorites } from "./storage.js";

const baseProducts = [
  { id: 1, name: "Vilnos overshirt", query: "wool overshirt jacket", category: "clothing", categoryLabel: "Drabužiai", price: 89, badge: "Nauja", description: "Minkštas, struktūriškas vilnos mišinio sluoksnis, sukurtas dėvėti vienas arba ant marškinėlių." },
  { id: 2, name: "Kasdieniai marškinėliai", query: "t-shirt", category: "clothing", categoryLabel: "Drabužiai", price: 39, badge: "Bestseller", description: "Sunkesnio medvilnės džersio marškinėliai su laisvu siluetu ir švaria apdaila." },
  { id: 3, name: "Canvas 01 sportbačiai", query: "canvas sneakers", category: "shoes", categoryLabel: "Avalynė", price: 110, badge: "", description: "Lengvi drobiniai sportbačiai su tvirtu guminiu padu ir universaliu profiliu." },
  { id: 4, name: "Odinis diržas", query: "leather belt", category: "accessories", categoryLabel: "Aksesuarai", price: 45, badge: "", description: "Klasikinis natūralios odos diržas, kuris su laiku įgauna individualų charakterį." },
  { id: 5, name: "Ribbed megztinis", query: "ribbed sweater", category: "clothing", categoryLabel: "Drabužiai", price: 75, badge: "", description: "Šiltas briaunuotas megztinis su apvalia apykakle ir subtiliai laisvu kirpimu." },
  { id: 6, name: "Suede 02 batai", query: "suede boots", category: "shoes", categoryLabel: "Avalynė", price: 135, badge: "Nauja", description: "Minkštas zomšos batai kasdieniam ritmui, papildyti patogiu amortizuojančiu padu." },
  { id: 7, name: "Tekstūrinė kepurė", query: "beanie hat", category: "accessories", categoryLabel: "Aksesuarai", price: 29, badge: "", description: "Šilta, tekstūrinė kepurė su subtilia Northline etikete priekyje." },
  { id: 8, name: "Kasdienis krepšys", query: "tote bag", category: "accessories", categoryLabel: "Aksesuarai", price: 98, badge: "", description: "Talpus drobinis krepšys su odinėmis rankenomis ir vidine kišene smulkiems daiktams." },
  { id: 9, name: "Lininiai marškiniai", query: "linen shirt", category: "clothing", categoryLabel: "Drabužiai", price: 69, badge: "Nauja", description: "Lengvi lininiai marškiniai su laisvu kirpimu, tinkami tiek miestui, tiek savaitgalio kelionei." },
  { id: 10, name: "Tiesaus kirpimo džinsai", query: "straight jeans", category: "clothing", categoryLabel: "Drabužiai", price: 95, badge: "", description: "Patvaraus denimo džinsai su tiesiu siluetu ir vidutinio aukščio liemeniu." },
  { id: 11, name: "Vilnonis švarkas", query: "wool blazer", category: "clothing", categoryLabel: "Drabužiai", price: 149, badge: "Atrinkta", description: "Minimalistinis vilnos švarkas, sukurtas sluoksniuoti ir dėvėti ne vieną sezoną." },
  { id: 12, name: "Medvilninis polo", query: "polo shirt", category: "clothing", categoryLabel: "Drabužiai", price: 55, badge: "", description: "Kvėpuojantis medvilninis polo su švaria apykakle ir subtilia tekstūra." },
  { id: 13, name: "Minkštos kelnės", query: "casual trousers", category: "clothing", categoryLabel: "Drabužiai", price: 79, badge: "", description: "Patogios, bet tvarkingos kelnės su elastinga juosmens juosta kasdieniam ritmui." },
  { id: 14, name: "Lengva pūkinė striukė", query: "puffer jacket", category: "clothing", categoryLabel: "Drabužiai", price: 159, badge: "Bestseller", description: "Lengva, šilta striukė su matiniu paviršiumi ir kompaktišku siluetu." }
];

const additionalClothingData = [
  { name: "Laisvas medvilninis džemperis", query: "cotton sweatshirt", price: 65, badge: "Nauja", desc: "Laisvo stiliaus medvilninis džemperis patogiam kasdieniam laisvalaikiui." },
  { name: "Struktūrinė liemenė", query: "vest jacket", price: 75, badge: "", desc: "Struktūrinė liemenė, suteikianti išskirtinumo bet kuriam deriniui." },
  { name: "Klasikiniai balti marškiniai", query: "white shirt", price: 59, badge: "Nauja", desc: "Laiko patikrinti klasikiniai marškiniai iš aukštos kokybės medvilnės." },
  { name: "Minkštas kardiganas", query: "soft cardigan", price: 85, badge: "", desc: "Jaukus, švelnus kardiganas vėsesnėms dienoms." },
  { name: "Plačios lininės kelnės", query: "wide linen pants", price: 79, badge: "Atrinkta", desc: "Lengvos ir pralaidios orui plačios lininės kelnės." },
  { name: "Trumpas vilnos paltas", query: "short wool coat", price: 179, badge: "Nauja", desc: "Elegantiškas trumpesnio kirpimo vilnonis paltas." },
  { name: "Laisvo kirpimo švarkas", query: "oversized blazer", price: 139, badge: "", desc: "Stilingas laisvo silueto švarkas modernesniam įvaizdžiui." },
  { name: "Plonas golfas", query: "turtleneck top", price: 49, badge: "", desc: "Švelnus prigludęs golfas, idealiai tinkantis sluoksniavimui." },
  { name: "Medvilninė suknelė", query: "cotton dress", price: 89, badge: "Bestseller", desc: "Lengva medvilninė suknelė su subtiliomis detalėmis." },
  { name: "Tekstūrinis sijonas", query: "textured skirt", price: 69, badge: "", desc: "Elegantiškas tekstūrinis sijonas kasdienai ir progoms." },
  { name: "Kasdienis džemperis", query: "casual hoodie", price: 59, badge: "", desc: "Minkštas ir patogus džemperis laisvalaikiui." },
  { name: "Tamsus denimo švarkas", query: "dark denim jacket", price: 119, badge: "", desc: "Tvarkingas tamsaus denimo švarkas." },
  { name: "Lengvas lietpaltis", query: "trench coat", price: 159, badge: "Nauja", desc: "Vandeniui atsparus ir stilingas lietpaltis permainingiems orams." },
  { name: "Vilnonė liemenė", query: "wool vest", price: 85, badge: "", desc: "Šilta vilnonė liemenė sluoksniavimui ant marškinių." },
  { name: "Klasikinis trench paltas", query: "beige trench coat", price: 189, badge: "Bestseller", desc: "Klasikinis smėlio spalvos trench paltas su diržu." },
  { name: "Minkštas flanelinis švarkas", query: "flannel shirt jacket", price: 95, badge: "", desc: "Jaukus flanelinio audinio švarkas vėsesniam orui." },
  { name: "Ribbed midi suknelė", query: "ribbed midi dress", price: 99, badge: "", desc: "Prigludusi briaunota midi suknelė iš tampraus trikotažo." },
  { name: "Drobiniai šortai", query: "linen shorts", price: 49, badge: "", desc: "Lengvi ir patvarūs drobiniai šortai vasaros dienoms." },
  { name: "Laisvi marškiniai", query: "casual shirt", price: 65, badge: "", desc: "Laisvo kirpimo marškiniai patogiam kasdieniam stiliui." },
  { name: "Minimalistinis kombinezonas", query: "minimalist jumpsuit", price: 129, badge: "Atrinkta", desc: "Vienas rūbas – pilnas įvaizdis: švarus ir minimalistinis kombinezonas." },
  { name: "Medvilninis kardiganas", query: "cotton cardigan", price: 79, badge: "", desc: "Lengvas medvilninis kardiganas su sagomis." },
  { name: "Tiesus midi sijonas", query: "straight midi skirt", price: 69, badge: "", desc: "Klasikinis tiesaus kirpimo midi sijonas." },
  { name: "Lengvas vasarinis švarkas", query: "summer blazer", price: 115, badge: "", desc: "Pralaidus orui švarkas šiltesniems orams." },
  { name: "Pūkinė liemenė", query: "down vest", price: 99, badge: "", desc: "Kompaktiška ir šilta pūkinė liemenė kasdienai." },
  { name: "Minkšti lounge marškinėliai", query: "lounge t-shirt", price: 35, badge: "", desc: "Ypatingai švelnūs marškinėliai namų ilsėjimuisi." },
  { name: "Klasikinis juodas golfas", query: "black turtleneck", price: 55, badge: "", desc: "Būtina garderobo dalis – klasikinis juodas golfas." },
  { name: "Aukšto liemens kelnės", query: "high waist trousers", price: 85, badge: "", desc: "Elegantiškos aukšto liemens kelnės su tiesiomis klešnėmis." },
  { name: "Denimo maxi sijonas", query: "denim maxi skirt", price: 89, badge: "Nauja", desc: "Madingas ilgas denimo sijonas su skeltuku priekyje." },
  { name: "Tekstūriniai marškinėliai", query: "textured t-shirt", price: 42, badge: "", desc: "Marškinėliai iš išreikštos tekstūros medvilnės audinio." },
  { name: "Vilnonis megztinis", query: "wool sweater", price: 95, badge: "Bestseller", desc: "Grynos vilnos šiltas megztinis." },
  { name: "Trumpa medvilninė striukė", query: "cotton jacket", price: 125, badge: "", desc: "Trumpo silueto striukė pavasario/rudens sezonui." },
  { name: "Lininė palaidinė", query: "linen blouse", price: 55, badge: "", desc: "Lengva ir gaivi lininė palaidinė." },
  { name: "Platus džinsinis modelis", query: "wide leg jeans", price: 99, badge: "", desc: "Laisvalaikio džinsai su platėjančiu siluetu." },
  { name: "Minkštas polo džemperis", query: "polo sweater", price: 75, badge: "", desc: "Stilingas polo stiliaus megztas džemperis." },
  { name: "Lengvas oversize džemperis", query: "oversized sweatshirt", price: 69, badge: "", desc: "Oversize modelio džemperis maksimaliam patogumui." },
  { name: "Kreminis megztinis", query: "cream sweater", price: 85, badge: "", desc: "Švelnios kreminės spalvos jaukus megztinis." },
  /*{ name: "Minimalistinė liemenė", query: "minimalist vest", price: 69, badge: "", desc: "Griežto kirpimo minimalistinė liemenė." },
  { name: "Pusiau ilgas vilnos paltas", query: "medium wool coat", price: 199, badge: "Atrinkta", desc: "Klasikinis pusiau ilgas vilnonis paltas." },
  { name: "Kasdienė marškinėlių suknelė", query: "t-shirt dress", price: 72, badge: "", desc: "Paprastos konstrukcijos laisvalaikio suknelė." },
  { name: "Struktūrinės kelnės", query: "tailored trousers", price: 89, badge: "", desc: "Elegantiškos formos ir tekstūros kelnės." },
  { name: "Medvilninis švarkelis", query: "cotton blazer", price: 110, badge: "", desc: "Lengvas kasdienis švarkelis iš medvilnės." },
  { name: "Laisvi cargo džinsai", query: "cargo jeans", price: 99, badge: "Nauja", desc: "Patogūs cargo stiliaus džinsai su kišenėmis." },
  { name: "Minkštas hoodie", query: "cozy hoodie", price: 75, badge: "", desc: "Džemperis su gobtuvu jaukiam laisvalaikiui." },
  { name: "Lininis kostiumas", query: "linen suit", price: 185, badge: "", desc: "Subalansuotas lininis kostiumas vasaros dienoms." },
  { name: "Klasikinė palaidinė", query: "classic blouse", price: 55, badge: "", desc: "Elegantiška ir universali palaidinė." },
  { name: "Tekstūrinis bomberis", query: "bomber jacket", price: 135, badge: "", desc: "Šiuolaikiško kirpimo tekstūrinis bomberis." },
  { name: "Tamsus vilnos džemperis", query: "dark wool sweater", price: 89, badge: "", desc: "Šiltas tamsios spalvos vilnonis džemperis." },
  { name: "Lengvas sluoksniavimo topas", query: "layering top", price: 39, badge: "", desc: "Minimalistinis viršutinis rūbas sluoksniavimui." },
  { name: "Universalus megztinis", query: "everyday sweater", price: 79, badge: "", desc: "Kasdieniam nešiojimui pritaikytas megztinis." },
  { name: "Klasikinis denim švarkas", query: "classic denim jacket", price: 109, badge: "Bestseller", desc: "Niekada neišeinantis iš mados klasikinis džinsinis švarkas." }*/
];

const fallbackImage = "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80";

const additionalClothing = additionalClothingData.map((item, index) => ({
  id: index + 15,
  name: item.name,
  query: item.query,
  category: "clothing",
  categoryLabel: "Drabužiai",
  price: item.price,
  image: fallbackImage,
  badge: item.badge,
  description: item.desc
}));

const baseProductsWithImages = baseProducts.map(product => ({
  ...product,
  image: fallbackImage
}));

const products = [...baseProductsWithImages, ...additionalClothing];

const urlParams = new URLSearchParams(window.location.search);
const state = {
  category: ["all", "clothing", "shoes", "accessories"].includes(urlParams.get("category")) ? urlParams.get("category") : "all",
  search: urlParams.get("q") || "",
  sort: ["featured", "price-low", "price-high", "name", "new", "bestseller"].includes(urlParams.get("sort")) ? urlParams.get("sort") : "featured",
  minPrice: Math.max(0, Math.min(200, Number(urlParams.get("min")) || 0)),
  maxPrice: Math.max(0, Math.min(200, urlParams.has("max") ? Number(urlParams.get("max")) : 200)),
  cart: loadCart(),
  favorites: loadFavorites(),
  wishlistOnly: urlParams.get("favorites") === "1",
  openProductId: Number(urlParams.get("product")) || null,
  visibleLimit: 16
};
if (state.minPrice > state.maxPrice) state.minPrice = state.maxPrice;

const productGrid = document.querySelector("#product-grid");
const emptyState = document.querySelector("#empty-state");
const resultsLabel = document.querySelector("#results-label");
const searchInput = document.querySelector("#search-input");
const sortSelect = document.querySelector("#sort-select");
const cartPanel = document.querySelector("#cart-panel");
const overlay = document.querySelector("#overlay");
const cartItems = document.querySelector("#cart-items");
const cartEmpty = document.querySelector("#cart-empty");
const productModal = document.querySelector("#product-modal");
const modalContent = document.querySelector("#modal-content");
const wishlistPanel = document.querySelector("#wishlist-panel");
const wishlistItems = document.querySelector("#wishlist-items");
const wishlistEmpty = document.querySelector("#wishlist-empty");
const checkoutModal = document.querySelector("#checkout-modal");
let toastTimer;
let searchTimer;
const toastQueue = [];

function formatPrice(value) {
  return new Intl.NumberFormat("lt-LT", { style: "currency", currency: "EUR" }).format(value);
}

function getProduct(productId) {
  return products.find((product) => product.id === productId);
}

function normalizeText(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("lt-LT")
    .trim();
}

function getVisibleProducts() {
  const query = normalizeText(state.search);
  const visible = products.filter((product) => {
    const matchesCategory = state.category === "all" || product.category === state.category;
    const searchableText = normalizeText(`${product.name} ${product.categoryLabel} ${product.description}`);
    const matchesSearch = !query || searchableText.includes(query);
    const matchesWishlist = !state.wishlistOnly || state.favorites.includes(product.id);
    const matchesPrice = product.price >= state.minPrice && product.price <= state.maxPrice;
    const matchesBadge = state.sort === "new" ? product.badge === "Nauja" : state.sort === "bestseller" ? product.badge === "Bestseller" : true;
    return matchesCategory && matchesSearch && matchesWishlist && matchesPrice && matchesBadge;
  });

  return visible.sort((first, second) => {
    if (state.sort === "price-low") return first.price - second.price;
    if (state.sort === "price-high") return second.price - first.price;
    if (state.sort === "name") return first.name.localeCompare(second.name, "lt");
    return first.id - second.id;
  });
}

function applySearch(value) {
  state.search = String(value ?? "").trim();
  state.visibleLimit = 16;
  syncUrl();
  renderProducts();
}

function syncUrl(method = "pushState") {
  const url = new URL(window.location.href);
  ["q", "category", "sort", "min", "max", "favorites", "product"].forEach((key) => url.searchParams.delete(key));
  if (state.search) url.searchParams.set("q", state.search);
  if (state.category !== "all") url.searchParams.set("category", state.category);
  if (state.sort !== "featured") url.searchParams.set("sort", state.sort);
  if (state.minPrice > 0) url.searchParams.set("min", String(state.minPrice));
  if (state.maxPrice < 200) url.searchParams.set("max", String(state.maxPrice));
  if (state.wishlistOnly) url.searchParams.set("favorites", "1");
  if (state.openProductId) url.searchParams.set("product", String(state.openProductId));
  window.history[method]({}, "", url);
}

function updatePriceControls() {
  const minInput = document.querySelector("#min-price");
  const maxInput = document.querySelector("#max-price");
  minInput.value = String(state.minPrice);
  maxInput.value = String(state.maxPrice);
  minInput.max = String(state.maxPrice);
  maxInput.min = String(state.minPrice);
  document.querySelector("#min-price-label").textContent = `Nuo ${state.minPrice} €`;
  document.querySelector("#max-price-label").textContent = `Iki ${state.maxPrice} €`;
}

function renderProducts() {
  const allVisibleProducts = getVisibleProducts();
  const visibleProducts = allVisibleProducts.slice(0, state.visibleLimit);
  
  resultsLabel.textContent = allVisibleProducts.length > visibleProducts.length
    ? `Rodoma ${visibleProducts.length} iš ${allVisibleProducts.length} prekių`
    : `Rodoma ${visibleProducts.length} ${visibleProducts.length === 1 ? "prekė" : "prekių"}`;
    
  productGrid.innerHTML = visibleProducts.map((product, index) => `
    <article class="product-card" style="animation-delay: ${Math.min(index * 20, 240)}ms">
      <div class="product-image-wrap is-loading">
        <button class="product-card-image-button" type="button" data-product-id="${product.id}" aria-label="Peržiūrėti ${product.name}">
          <img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy">
        </button>
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
        <button class="favorite-button ${state.favorites.includes(product.id) ? "is-favorite" : ""}" type="button" data-favorite-id="${product.id}" aria-label="${state.favorites.includes(product.id) ? "Pašalinti iš mėgstamiausių" : "Pridėti į mėgstamiausius"}" aria-pressed="${state.favorites.includes(product.id)}">♡</button>
        <button class="quick-add" type="button" data-add-id="${product.id}" aria-label="Pridėti ${product.name} į krepšelį">+</button>
      </div>
      <div class="product-meta">
        <div>
          <p class="product-category">${product.categoryLabel}</p>
          <h3 class="product-name">${product.name}</h3>
          <label class="card-size-label"><span class="sr-only">${product.name} dydis</span><select class="card-size-select" aria-label="${product.name} dydis" data-size-select><option>XS</option><option selected>S</option><option>M</option><option>L</option><option>XL</option></select></label>
        </div>
        <p class="product-price">${formatPrice(product.price)}</p>
      </div>
    </article>
  `).join("");

  productGrid.querySelectorAll(".product-image").forEach((image) => {
    const finishLoading = () => image.closest(".product-image-wrap").classList.remove("is-loading");
    image.addEventListener("load", finishLoading, { once: true });
    image.addEventListener("error", finishLoading, { once: true });
    if (image.complete) finishLoading();
  });
  
  emptyState.hidden = allVisibleProducts.length > 0;
  productGrid.hidden = allVisibleProducts.length === 0;
  
  const loadMoreButton = document.querySelector("#load-more");
  loadMoreButton.hidden = visibleProducts.length >= allVisibleProducts.length || allVisibleProducts.length === 0;
  
  emptyState.querySelector("h3").textContent = state.wishlistOnly ? "Dar neišsaugojote šios kategorijos prekių" : "Pabandykite kitą paiešką";
  emptyState.querySelector("#clear-search").textContent = state.wishlistOnly ? "Rodyti visas prekes" : "Išvalyti paiešką";
  
  document.querySelector("#wishlist-filter").setAttribute("aria-pressed", state.wishlistOnly);
  document.querySelector("#wishlist-filter").classList.toggle("is-active", state.wishlistOnly);
  
  renderWishlist();
}

function getCartCount() {
  return state.cart.reduce((total, item) => total + item.quantity, 0);
}

function renderCart() {
  const count = getCartCount();
  const subtotal = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  
  document.querySelector("#cart-count").textContent = count;
  document.querySelector("#cart-title-count").textContent = `(${count})`;
  document.querySelector("#cart-subtotal").textContent = formatPrice(subtotal);
  
  const shippingProgress = document.querySelector("#shipping-progress");
  const shippingNote = document.querySelector("#shipping-note");
  const shippingThreshold = 100;
  const progress = Math.min((subtotal / shippingThreshold) * 100, 100);
  const remaining = shippingThreshold - subtotal;
  
  shippingProgress.innerHTML = `<span style="width: ${progress}%"></span>`;
  shippingNote.textContent = remaining > 0 ? `Iki nemokamo pristatymo liko ${formatPrice(remaining)}` : "Jūsų užsakymui taikomas nemokamas pristatymas";
  
  cartEmpty.hidden = state.cart.length > 0;
  cartItems.hidden = state.cart.length === 0;
  
  cartItems.innerHTML = state.cart.map((item) => `
    <div class="cart-item">
      <img class="cart-item-image" src="${item.image}" alt="${item.name}">
      <div>
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-price">${formatPrice(item.price)} · Dydis ${item.size || "S"}</p>
        <div class="quantity-controls" aria-label="${item.name} kiekis">
          <button type="button" data-decrease-id="${item.id}" data-size="${item.size || "S"}" aria-label="Sumažinti kiekį">−</button>
          <span>${item.quantity}</span>
          <button type="button" data-increase-id="${item.id}" data-size="${item.size || "S"}" aria-label="Padidinti kiekį">+</button>
        </div>
      </div>
      <button class="remove-item" type="button" data-remove-id="${item.id}" data-size="${item.size || "S"}" aria-label="Pašalinti ${item.name}">×</button>
    </div>
  `).join("");
}

function renderWishlist() {
  const savedProducts = state.favorites.map(getProduct).filter(Boolean);
  
  document.querySelector("#wishlist-count").textContent = savedProducts.length;
  document.querySelector("#wishlist-title-count").textContent = `(${savedProducts.length})`;
  
  wishlistEmpty.hidden = savedProducts.length > 0;
  wishlistItems.hidden = savedProducts.length === 0;
  
  wishlistItems.innerHTML = savedProducts.map((product) => `
    <div class="wishlist-item">
      <button class="wishlist-product" type="button" data-wishlist-product-id="${product.id}">
        <img src="${product.image}" alt="${product.name}">
        <span><strong>${product.name}</strong><small>${formatPrice(product.price)}</small></span>
      </button>
      <button class="remove-item" type="button" data-wishlist-remove-id="${product.id}" aria-label="Pašalinti ${product.name} iš mėgstamiausių">×</button>
    </div>
  `).join("");
}

function addToCart(productId, size = "S") {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const normalizedSize = size || "S";
  const existingItem = state.cart.find((item) => item.id === productId && (item.size || "S") === normalizedSize);
  if (existingItem) existingItem.quantity += 1;
  else state.cart.push({ ...product, size: normalizedSize, quantity: 1 });

  saveCart(state.cart);
  renderCart();
  showToast(`${product.name} pridėta į krepšelį`);
}

function updateQuantity(productId, change, size = "S") {
  const item = state.cart.find((cartItem) => cartItem.id === productId && (cartItem.size || "S") === size);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) state.cart = state.cart.filter((cartItem) => !(cartItem.id === productId && (cartItem.size || "S") === size));

  saveCart(state.cart);
  renderCart();
}

function removeFromCart(productId, size = "S") {
  state.cart = state.cart.filter((item) => !(item.id === productId && (item.size || "S") === size));
  saveCart(state.cart);
  renderCart();
}

function openCart() {
  cartPanel.classList.add("is-open");
  cartPanel.setAttribute("aria-hidden", "false");
  document.querySelector("#cart-toggle").setAttribute("aria-expanded", "true");
  overlay.hidden = false;
  document.body.classList.add("is-locked");
}

function closeCart() {
  cartPanel.classList.remove("is-open");
  cartPanel.setAttribute("aria-hidden", "true");
  document.querySelector("#cart-toggle").setAttribute("aria-expanded", "false");
  overlay.hidden = true;
  document.body.classList.remove("is-locked");
}

function bindQuickViewControls() {
  const quantityButtons = modalContent.querySelectorAll("[data-modal-quantity]");
  const addButton = modalContent.querySelector("[data-modal-add-id]");

  quantityButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const quantityOutput = document.querySelector("#modal-quantity-value");
      if (!quantityOutput) return;

      const currentVal = Number(quantityOutput.value || quantityOutput.textContent || 1);
      const nextVal = Math.max(1, currentVal + Number(button.dataset.modalQuantity));
      quantityOutput.textContent = String(nextVal);
      quantityOutput.value = String(nextVal);
    });
  });

  if (addButton) {
    addButton.addEventListener("click", () => {
      const quantityOutput = document.querySelector("#modal-quantity-value");
      const sizeSelect = document.querySelector("#modal-size");
      const quantity = Number(quantityOutput ? (quantityOutput.textContent || quantityOutput.value || 1) : 1);
      const size = sizeSelect ? sizeSelect.value : "S";

      for (let index = 0; index < quantity; index += 1) {
        addToCart(Number(addButton.dataset.modalAddId), size);
      }

      productModal.close();
      openCart();
    });
  }
}

function openProductModal(productId, updateHistory = true) {
  const product = getProduct(productId);
  if (!product) return;

  modalContent.innerHTML = `
    <div class="modal-product-layout">
      <div class="modal-media">
        <img src="${product.image}" alt="${product.name}" class="modal-image">
        ${product.badge ? `<span class="product-badge modal-badge">${product.badge}</span>` : ""}
      </div>
      <div class="modal-details">
        <p class="eyebrow modal-eyebrow">${product.categoryLabel}</p>
        <h2>${product.name}</h2>
        <div class="modal-price-row">
          <p class="modal-price">${formatPrice(product.price)}</p>
          <span class="modal-status">Sandėlyje</span>
        </div>
        <p class="modal-description">${product.description}</p>

        <div class="modal-options">
          <div class="modal-option-field">
            <label for="modal-size">Dydis</label>
            <select id="modal-size" class="modal-select">
              <option value="XS">XS</option>
              <option value="S" selected>S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>

          <div class="modal-option-field">
            <span class="modal-option-label">Kiekis</span>
            <div class="modal-quantity" aria-label="Kiekis">
              <button type="button" data-modal-quantity="-1" aria-label="Sumažinti kiekį">−</button>
              <span id="modal-quantity-value">1</span>
              <button type="button" data-modal-quantity="1" aria-label="Padidinti kiekį">+</button>
            </div>
          </div>
        </div>

        <button class="button button-primary modal-action-button" type="button" data-modal-add-id="${product.id}">Pridėti į krepšelį <span aria-hidden="true">↗</span></button>
      </div>
    </div>
  `;

  bindQuickViewControls();
  state.openProductId = productId;
  productModal.dataset.productId = String(productId);
  productModal.showModal();
  document.body.classList.add("is-locked");
  if (updateHistory) syncUrl();
}

function openWishlist() {
  wishlistPanel.classList.add("is-open");
  wishlistPanel.setAttribute("aria-hidden", "false");
  document.querySelector("#wishlist-toggle").setAttribute("aria-expanded", "true");
  overlay.hidden = false;
  document.body.classList.add("is-locked");
}

function closeWishlist() {
  wishlistPanel.classList.remove("is-open");
  wishlistPanel.setAttribute("aria-hidden", "true");
  document.querySelector("#wishlist-toggle").setAttribute("aria-expanded", "false");
  overlay.hidden = true;
  document.body.classList.remove("is-locked");
}

function openCheckout() {
  const subtotal = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  document.querySelector("#checkout-total").textContent = formatPrice(subtotal);
  checkoutModal.showModal();
  document.body.classList.add("is-locked");
}

function showToast(message) {
  toastQueue.push(message);
  if (toastQueue.length === 1) displayNextToast();
}

function displayNextToast() {
  const toast = document.querySelector("#toast");
  if (!toastQueue.length) return;
  toast.textContent = toastQueue[0];
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("is-visible");
    toastTimer = setTimeout(() => {
      toastQueue.shift();
      displayNextToast();
    }, 220);
  }, 2400);
}

document.querySelector("#filter-list").addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  state.visibleLimit = 16;
  syncUrl();
  document.querySelectorAll(".filter-button").forEach((filterButton) => filterButton.classList.toggle("is-active", filterButton === button));
  renderProducts();
});

document.querySelector("#wishlist-filter").addEventListener("click", () => {
  state.wishlistOnly = !state.wishlistOnly;
  state.visibleLimit = 16;
  syncUrl();
  renderProducts();
});

if (searchInput) {
  searchInput.value = state.search;
  searchInput.addEventListener("input", (event) => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => applySearch(event.target.value), 300);
  });
}

sortSelect.addEventListener("change", (event) => {
  state.sort = event.target.value;
  state.visibleLimit = 16;
  syncUrl();
  renderProducts();
});

sortSelect.value = state.sort;
updatePriceControls();

document.querySelector("#min-price").addEventListener("input", (event) => {
  state.minPrice = Number(event.target.value);
  updatePriceControls();
  state.visibleLimit = 16;
  syncUrl("replaceState");
  renderProducts();
});

document.querySelector("#max-price").addEventListener("input", (event) => {
  state.maxPrice = Number(event.target.value);
  updatePriceControls();
  state.visibleLimit = 16;
  syncUrl("replaceState");
  renderProducts();
});

document.querySelector("#search-form").addEventListener("submit", (event) => {
  event.preventDefault();
  if (searchInput) {
    clearTimeout(searchTimer);
    applySearch(searchInput.value);
  }
});

productGrid.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add-id]");
  const cardButton = event.target.closest("[data-product-id]");
  const favoriteButton = event.target.closest("[data-favorite-id]");
  if (addButton) {
    const card = addButton.closest(".product-card");
    addToCart(Number(addButton.dataset.addId), card.querySelector("[data-size-select]").value);
  }
  else if (favoriteButton) toggleFavorite(Number(favoriteButton.dataset.favoriteId));
  else if (cardButton) openProductModal(Number(cardButton.dataset.productId));
});

function toggleFavorite(productId) {
  const nextFavorites = new Set(state.favorites);

  if (nextFavorites.has(productId)) {
    nextFavorites.delete(productId);
    showToast("Pašalinta iš mėgstamiausių");
  } else {
    nextFavorites.add(productId);
    showToast("Pridėta į mėgstamiausius");
  }

  state.favorites = [...nextFavorites];
  saveFavorites(state.favorites);
  renderProducts();
}

cartItems.addEventListener("click", (event) => {
  const increase = event.target.closest("[data-increase-id]");
  const decrease = event.target.closest("[data-decrease-id]");
  const remove = event.target.closest("[data-remove-id]");

  if (increase) updateQuantity(Number(increase.dataset.increaseId), 1, increase.dataset.size || "S");
  if (decrease) updateQuantity(Number(decrease.dataset.decreaseId), -1, decrease.dataset.size || "S");
  if (remove) removeFromCart(Number(remove.dataset.removeId), remove.dataset.size || "S");
});

wishlistItems.addEventListener("click", (event) => {
  const productButton = event.target.closest("[data-wishlist-product-id]");
  const removeButton = event.target.closest("[data-wishlist-remove-id]");
  if (productButton) {
    closeWishlist();
    openProductModal(Number(productButton.dataset.wishlistProductId));
  }
  if (removeButton) toggleFavorite(Number(removeButton.dataset.wishlistRemoveId));
});

document.querySelector("#cart-toggle").addEventListener("click", openCart);
document.querySelector("#cart-close").addEventListener("click", closeCart);
document.querySelector("#continue-shopping").addEventListener("click", closeCart);
document.querySelector("#wishlist-toggle").addEventListener("click", openWishlist);
document.querySelector("#wishlist-close").addEventListener("click", closeWishlist);
document.querySelector("#wishlist-continue").addEventListener("click", closeWishlist);

overlay.addEventListener("click", () => {
  closeCart();
  closeWishlist();
});

document.querySelector("#clear-search").addEventListener("click", () => {
  state.search = "";
  searchInput.value = "";
  state.wishlistOnly = false;
  state.visibleLimit = 16;
  syncUrl();
  renderProducts();
});

document.querySelector("#load-more").addEventListener("click", () => {
  state.visibleLimit += 16;
  renderProducts();
});

document.querySelector("#checkout-button").addEventListener("click", () => {
  if (!state.cart.length) {
    showToast("Krepšelis tuščias");
    return;
  }
  closeCart();
  openCheckout();
});

document.querySelector("#modal-close").addEventListener("click", () => productModal.close());
productModal.addEventListener("click", (event) => {
  if (event.target === productModal) productModal.close();
});


productModal.addEventListener("close", () => {
  document.body.classList.remove("is-locked");
  const wasRestored = productModal.dataset.restoring === "true";
  delete productModal.dataset.restoring;
  if (!wasRestored) {
    state.openProductId = null;
    syncUrl("replaceState");
  }
});
document.querySelector("#checkout-close").addEventListener("click", () => checkoutModal.close());
checkoutModal.addEventListener("close", () => document.body.classList.remove("is-locked"));

document.querySelector("#checkout-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const orderNumber = `NL-${Math.floor(10000 + Math.random() * 90000)}`;
  state.cart = [];
  saveCart(state.cart);
  renderCart();
  checkoutModal.close();
  event.currentTarget.reset();
  showToast(`Užsakymas ${orderNumber} patvirtintas`);
});

document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  event.currentTarget.reset();
  showToast("Ačiū, jūsų žinutė išsiųsta");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && cartPanel.classList.contains("is-open")) closeCart();
  if (event.key === "Escape" && wishlistPanel.classList.contains("is-open")) closeWishlist();
});

function restoreFromUrl() {
  const params = new URLSearchParams(window.location.search);
  state.category = ["all", "clothing", "shoes", "accessories"].includes(params.get("category")) ? params.get("category") : "all";
  state.search = params.get("q") || "";
  state.sort = ["featured", "price-low", "price-high", "name", "new", "bestseller"].includes(params.get("sort")) ? params.get("sort") : "featured";
  state.minPrice = Math.max(0, Math.min(200, Number(params.get("min")) || 0));
  state.maxPrice = Math.max(0, Math.min(200, params.has("max") ? Number(params.get("max")) : 200));
  if (state.minPrice > state.maxPrice) state.minPrice = state.maxPrice;
  state.wishlistOnly = params.get("favorites") === "1";
  state.visibleLimit = 16;
  const productId = Number(params.get("product"));
  state.openProductId = productId && getProduct(productId) ? productId : null;
  searchInput.value = state.search;
  sortSelect.value = state.sort;
  updatePriceControls();
  document.querySelectorAll(".filter-button").forEach((button) => button.classList.toggle("is-active", button.dataset.category === state.category));
  renderProducts();

  if (productId && getProduct(productId)) {
    if (productModal.open && Number(productModal.dataset.productId) !== productId) {
      productModal.dataset.restoring = "true";
      productModal.addEventListener("close", () => openProductModal(productId, false), { once: true });
      productModal.close();
    } else if (!productModal.open) {
      openProductModal(productId, false);
    }
  } else if (productModal.open) {
    productModal.dataset.restoring = "true";
    productModal.close();
  }
}

window.addEventListener("popstate", restoreFromUrl);

// INITIAL RENDER
renderProducts();
renderCart();
document.querySelectorAll(".filter-button").forEach((button) => button.classList.toggle("is-active", button.dataset.category === state.category));
if (state.openProductId && getProduct(state.openProductId)) openProductModal(state.openProductId, false);