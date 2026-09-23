const products = [
  { id: 1, name: "Vilnos overshirt", category: "clothing", categoryLabel: "Drabužiai", price: 89, image: "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/777891s.jpg?im=Resize,width=750", badge: "Nauja", description: "Minkštas, struktūriškas vilnos mišinio sluoksnis, sukurtas dėvėti vienas arba ant marškinėlių." },
  { id: 2, name: "Kasdieniai marškinėliai", category: "clothing", categoryLabel: "Drabužiai", price: 39, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=85", badge: "Bestseller", description: "Sunkesnio medvilnės džersio marškinėliai su laisvu siluetu ir švaria apdaila." },
  { id: 3, name: "Canvas 01 sportbačiai", category: "shoes", categoryLabel: "Avalynė", price: 110, image: "https://img.eobuwie.cloud/product(8/d/9/9/8d9910cc0b9d6c10e0e88190f36b9ff3b09ae314_0000208759922_05_plj.jpg,webp)/sportbaciai-veja-nova-canvas-na012005a-white-marsala.webp", badge: "", description: "Lengvi drobiniai sportbačiai su tvirtu guminiu padu ir universaliu profiliu." },
  { id: 4, name: "Odinis diržas", category: "accessories", categoryLabel: "Aksesuarai", price: 45, image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=900&q=85", badge: "", description: "Klasikinis natūralios odos diržas, kuris su laiku įgauna individualų charakterį." },
  { id: 5, name: "Ribbed megztinis", category: "clothing", categoryLabel: "Drabužiai", price: 75, image: "https://hersroom.lt/wp-content/uploads/2026/08/img_4230-scaled.jpeg", badge: "", description: "Šiltas briaunuotas megztinis su apvalia apykakle ir subtiliai laisvu kirpimu." },
  { id: 6, name: "Suede 02 batai", category: "shoes", categoryLabel: "Avalynė", price: 135, image: "https://pic.denimdream.com/picture/n/2026/02/301785_432097_1_1200_1820.jpg", badge: "Nauja", description: "Minkštos zomšos batai kasdieniam ritmui, papildyti patogiu amortizuojančiu padu." },
  { id: 7, name: "Tekstūrinė kepurė", category: "accessories", categoryLabel: "Aksesuarai", price: 29, image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=900&q=85", badge: "", description: "Šilta, tekstūrinė kepurė su subtilia Northline etikete priekyje." },
  { id: 8, name: "Kasdienis krepšys", category: "accessories", categoryLabel: "Aksesuarai", price: 98, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85", badge: "", description: "Talpus drobinis krepšys su odinėmis rankenomis ir vidine kišene smulkiems daiktams." },
  { id: 9, name: "Lininiai marškiniai", category: "clothing", categoryLabel: "Drabužiai", price: 69, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=85", badge: "Nauja", description: "Lengvi lininiai marškiniai su laisvu kirpimu, tinkami tiek miestui, tiek savaitgalio kelionei." },
  { id: 10, name: "Tiesaus kirpimo džinsai", category: "clothing", categoryLabel: "Drabužiai", price: 95, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=85", badge: "", description: "Patvaraus denimo džinsai su tiesiu siluetu ir vidutinio aukščio liemeniu." },
  { id: 11, name: "Vilnonis švarkas", category: "clothing", categoryLabel: "Drabužiai", price: 149, image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=900&q=85", badge: "Atrinkta", description: "Minimalistinis vilnos švarkas, sukurtas sluoksniuoti ir dėvėti ne vieną sezoną." },
  { id: 12, name: "Medvilninis polo", category: "clothing", categoryLabel: "Drabužiai", price: 55, image: "https://images.unsplash.com/photo-1625910513413-5fc45a7b2d3d?auto=format&fit=crop&w=900&q=85", badge: "", description: "Kvėpuojantis medvilninis polo su švaria apykakle ir subtilia tekstūra." },
  { id: 13, name: "Minkštos kelnės", category: "clothing", categoryLabel: "Drabužiai", price: 79, image: "https://images.unsplash.com/photo-1506629905607-d9b1b8d8f6e8?auto=format&fit=crop&w=900&q=85", badge: "", description: "Patogios, bet tvarkingos kelnės su elastinga juosmens juosta kasdieniam ritmui." },
  { id: 14, name: "Lengva pūkinė striukė", category: "clothing", categoryLabel: "Drabužiai", price: 159, image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=900&q=85", badge: "Bestseller", description: "Lengva, šilta striukė su matiniu paviršiumi ir kompaktišku siluetu." }
];

const state = { category: "all", search: "", sort: "featured", cart: loadCart(), favorites: loadFavorites(), wishlistOnly: false };
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

function formatPrice(value) {
  return new Intl.NumberFormat("lt-LT", { style: "currency", currency: "EUR" }).format(value);
}

function loadCart() {
  try {
    const savedCart = JSON.parse(localStorage.getItem("northline-cart"));
    return Array.isArray(savedCart) ? savedCart.filter((item) => item && Number.isFinite(item.id) && item.quantity > 0) : [];
  } catch (error) {
    return [];
  }
}

function loadFavorites() {
  try {
    const savedFavorites = JSON.parse(localStorage.getItem("northline-favorites"));
    return Array.isArray(savedFavorites) ? savedFavorites.map(Number).filter(Number.isInteger) : [];
  } catch (error) {
    return [];
  }
}

function saveCart() {
  localStorage.setItem("northline-cart", JSON.stringify(state.cart));
}

function saveFavorites() {
  localStorage.setItem("northline-favorites", JSON.stringify(state.favorites));
}

function getProduct(productId) {
  return products.find((product) => product.id === productId);
}

function handleImageError(event) {
  const image = event.currentTarget;
  image.classList.add("image-fallback");
  image.removeAttribute("src");
  image.alt = `${image.alt} (vaizdas nepasiekiamas)`;
}

function getVisibleProducts() {
  const query = state.search.trim().toLocaleLowerCase("lt-LT");
  const visible = products.filter((product) => {
    const matchesCategory = state.category === "all" || product.category === state.category;
    const matchesSearch = !query || `${product.name} ${product.categoryLabel}`.toLocaleLowerCase("lt-LT").includes(query);
    const matchesWishlist = !state.wishlistOnly || state.favorites.includes(product.id);
    return matchesCategory && matchesSearch && matchesWishlist;
  });

  return visible.sort((first, second) => {
    if (state.sort === "price-low") return first.price - second.price;
    if (state.sort === "price-high") return second.price - first.price;
    if (state.sort === "name") return first.name.localeCompare(second.name, "lt");
    return first.id - second.id;
  });
}

function renderProducts() {
  const visibleProducts = getVisibleProducts();
  resultsLabel.textContent = `Rodoma ${visibleProducts.length} ${visibleProducts.length === 1 ? "prekė" : "prekių"}`;
  productGrid.innerHTML = visibleProducts.map((product, index) => `
    <article class="product-card" style="animation-delay: ${index * 45}ms">
      <div class="product-image-wrap">
        <button class="product-card-image-button" type="button" data-product-id="${product.id}" aria-label="Peržiūrėti ${product.name}">
          <img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy" onerror="handleImageError(event)">
        </button>
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
        <button class="favorite-button ${state.favorites.includes(product.id) ? "is-favorite" : ""}" type="button" data-favorite-id="${product.id}" aria-label="${state.favorites.includes(product.id) ? "Pašalinti iš mėgstamiausių" : "Pridėti į mėgstamiausius"}" aria-pressed="${state.favorites.includes(product.id)}">♡</button>
        <button class="quick-add" type="button" data-add-id="${product.id}" aria-label="Pridėti ${product.name} į krepšelį">+</button>
      </div>
      <div class="product-meta">
        <div>
          <p class="product-category">${product.categoryLabel}</p>
          <h3 class="product-name">${product.name}</h3>
        </div>
        <p class="product-price">${formatPrice(product.price)}</p>
      </div>
    </article>
  `).join("");

  emptyState.hidden = visibleProducts.length > 0;
  productGrid.hidden = visibleProducts.length === 0;
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
      <img class="cart-item-image" src="${item.image}" alt="${item.name}" onerror="handleImageError(event)">
      <div>
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-price">${formatPrice(item.price)}</p>
        <div class="quantity-controls" aria-label="${item.name} kiekis">
          <button type="button" data-decrease-id="${item.id}" aria-label="Sumažinti kiekį">−</button>
          <span>${item.quantity}</span>
          <button type="button" data-increase-id="${item.id}" aria-label="Padidinti kiekį">+</button>
        </div>
      </div>
      <button class="remove-item" type="button" data-remove-id="${item.id}" aria-label="Pašalinti ${item.name}">×</button>
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
        <img src="${product.image}" alt="${product.name}" onerror="handleImageError(event)">
        <span><strong>${product.name}</strong><small>${formatPrice(product.price)}</small></span>
      </button>
      <button class="remove-item" type="button" data-wishlist-remove-id="${product.id}" aria-label="Pašalinti ${product.name} iš mėgstamiausių">×</button>
    </div>
  `).join("");
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;
  const existingItem = state.cart.find((item) => item.id === productId);
  if (existingItem) existingItem.quantity += 1;
  else state.cart.push({ ...product, quantity: 1 });
  saveCart();
  renderCart();
  showToast(`${product.name} pridėta į krepšelį`);
}

function updateQuantity(productId, change) {
  const item = state.cart.find((cartItem) => cartItem.id === productId);
  if (!item) return;
  item.quantity += change;
  if (item.quantity <= 0) state.cart = state.cart.filter((cartItem) => cartItem.id !== productId);
  saveCart();
  renderCart();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter((item) => item.id !== productId);
  saveCart();
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

function openProductModal(productId) {
  const product = getProduct(productId);
  if (!product) return;
  modalContent.innerHTML = `
    <img class="modal-image" src="${product.image}" alt="${product.name}" onerror="handleImageError(event)">
    <div class="modal-info">
      <p class="eyebrow">${product.categoryLabel}</p>
      <h2 id="modal-title">${product.name}</h2>
      <p class="modal-price">${formatPrice(product.price)}</p>
      <p class="modal-description">${product.description}</p>
      <div class="modal-options">
        <label>Spalva<select id="modal-color"><option>Natūrali</option><option>Juoda</option><option>Akmens</option></select></label>
        <label>Kiekis<div class="modal-quantity"><button type="button" data-modal-quantity="-1" aria-label="Sumažinti kiekį">−</button><output id="modal-quantity-value">1</output><button type="button" data-modal-quantity="1" aria-label="Padidinti kiekį">+</button></div></label>
      </div>
      <button class="button button-primary" type="button" data-modal-add-id="${product.id}">Pridėti į krepšelį <span aria-hidden="true">↗</span></button>
    </div>
  `;
  productModal.showModal();
  document.body.classList.add("is-locked");
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
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

document.querySelector("#filter-list").addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  document.querySelectorAll(".filter-button").forEach((filterButton) => filterButton.classList.toggle("is-active", filterButton === button));
  renderProducts();
});

document.querySelector("#wishlist-filter").addEventListener("click", () => {
  state.wishlistOnly = !state.wishlistOnly;
  renderProducts();
});

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderProducts();
});

sortSelect.addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderProducts();
});

document.querySelector("#search-form").addEventListener("submit", (event) => event.preventDefault());
productGrid.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add-id]");
  const cardButton = event.target.closest("[data-product-id]");
  const favoriteButton = event.target.closest("[data-favorite-id]");
  if (addButton) addToCart(Number(addButton.dataset.addId));
  else if (favoriteButton) toggleFavorite(Number(favoriteButton.dataset.favoriteId));
  else if (cardButton) openProductModal(Number(cardButton.dataset.productId));
});

function toggleFavorite(productId) {
  if (state.favorites.includes(productId)) {
    state.favorites = state.favorites.filter((id) => id !== productId);
    showToast("Pašalinta iš mėgstamiausių");
  } else {
    state.favorites.push(productId);
    showToast("Pridėta į mėgstamiausius");
  }
  saveFavorites();
  renderProducts();
}

cartItems.addEventListener("click", (event) => {
  const increase = event.target.closest("[data-increase-id]");
  const decrease = event.target.closest("[data-decrease-id]");
  const remove = event.target.closest("[data-remove-id]");
  if (increase) updateQuantity(Number(increase.dataset.increaseId), 1);
  if (decrease) updateQuantity(Number(decrease.dataset.decreaseId), -1);
  if (remove) removeFromCart(Number(remove.dataset.removeId));
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
productModal.addEventListener("click", (event) => {
  const quantityButton = event.target.closest("[data-modal-quantity]");
  const addButton = event.target.closest("[data-modal-add-id]");
  if (quantityButton) {
    const quantityOutput = document.querySelector("#modal-quantity-value");
    quantityOutput.value = Math.max(1, Number(quantityOutput.value || quantityOutput.textContent) + Number(quantityButton.dataset.modalQuantity));
    quantityOutput.textContent = quantityOutput.value;
  }
  if (addButton) {
    const quantity = Number(document.querySelector("#modal-quantity-value").value || 1);
    for (let index = 0; index < quantity; index += 1) addToCart(Number(addButton.dataset.modalAddId));
    productModal.close();
    openCart();
  }
});
productModal.addEventListener("close", () => document.body.classList.remove("is-locked"));
document.querySelector("#checkout-close").addEventListener("click", () => checkoutModal.close());
checkoutModal.addEventListener("close", () => document.body.classList.remove("is-locked"));
document.querySelector("#checkout-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const orderNumber = `NL-${Math.floor(10000 + Math.random() * 90000)}`;
  state.cart = [];
  saveCart();
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

renderProducts();
renderCart();
