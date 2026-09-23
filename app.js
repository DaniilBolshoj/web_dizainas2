const baseProducts = [
  { id: 1, name: "Vilnos overshirt", category: "clothing", categoryLabel: "Drabužiai", price: 89, imageId: "1617137968427-85924c800a22", badge: "Nauja", description: "Minkštas, struktūriškas vilnos mišinio sluoksnis, sukurtas dėvėti vienas arba ant marškinėlių." },
  { id: 2, name: "Kasdieniai marškinėliai", category: "clothing", categoryLabel: "Drabužiai", price: 39, imageId: "1521572163474-6864f9cf17ab", badge: "Bestseller", description: "Sunkesnio medvilnės džersio marškinėliai su laisvu siluetu ir švaria apdaila." },
  { id: 3, name: "Canvas 01 sportbačiai", category: "shoes", categoryLabel: "Avalynė", price: 110, imageId: "1542291026-7eec264c27ff", badge: "", description: "Lengvi drobiniai sportbačiai su tvirtu guminiu padu ir universaliu profiliu." },
  { id: 4, name: "Odinis diržas", category: "accessories", categoryLabel: "Aksesuarai", price: 45, imageId: "1624222247344-550fb60583dc", badge: "", description: "Klasikinis natūralios odos diržas, kuris su laiku įgauna individualų charakterį." },
  { id: 5, name: "Ribbed megztinis", category: "clothing", categoryLabel: "Drabužiai", price: 75, imageId: "1574164904299-3a102b110380", badge: "", description: "Šiltas briaunuotas megztinis su apvalia apykakle ir subtiliai laisvu kirpimu." },
  { id: 6, name: "Suede 02 batai", category: "shoes", categoryLabel: "Avalynė", price: 135, imageId: "1608231387042-66d1773070a5", badge: "Nauja", description: "Minkštas zomšos batai kasdieniam ritmui, papildyti patogiu amortizuojančiu padu." },
  { id: 7, name: "Tekstūrinė kepurė", category: "accessories", categoryLabel: "Aksesuarai", price: 29, imageId: "1576871337632-b9aef4c17ab9", badge: "", description: "Šilta, tekstūrinė kepurė su subtilia Northline etikete priekyje." },
  { id: 8, name: "Kasdienis krepšys", category: "accessories", categoryLabel: "Aksesuarai", price: 98, imageId: "1544816155-12df9643f363", badge: "", description: "Talpus drobinis krepšys su odinėmis rankenomis ir vidine kišene smulkiems daiktams." },
  { id: 9, name: "Lininiai marškiniai", category: "clothing", categoryLabel: "Drabužiai", price: 69, imageId: "1596755094514-f87e34085b2c", badge: "Nauja", description: "Lengvi lininiai marškiniai su laisvu kirpimu, tinkami tiek miestui, tiek savaitgalio kelionei." },
  { id: 10, name: "Tiesaus kirpimo džinsai", category: "clothing", categoryLabel: "Drabužiai", price: 95, imageId: "1541099649105-f69ad21f3246", badge: "", description: "Patvaraus denimo džinsai su tiesiu siluetu ir vidutinio aukščio liemeniu." },
  { id: 11, name: "Vilnonis švarkas", category: "clothing", categoryLabel: "Drabužiai", price: 149, imageId: "1591047139829-d91aecb6caea", badge: "Atrinkta", description: "Minimalistinis vilnos švarkas, sukurtas sluoksniuoti ir dėvėti ne vieną sezoną." },
  { id: 12, name: "Medvilninis polo", category: "clothing", categoryLabel: "Drabužiai", price: 55, imageId: "1581655353564-df123a1eb820", badge: "", description: "Kvėpuojantis medvilninis polo su švaria apykakle ir subtilia tekstūra." },
  { id: 13, name: "Minkštos kelnės", category: "clothing", categoryLabel: "Drabužiai", price: 79, imageId: "1624378439575-d8705ad7ae80", badge: "", description: "Patogios, bet tvarkingos kelnės su elastinga juosmens juosta kasdieniam ritmui." },
  { id: 14, name: "Lengva pūkinė striukė", category: "clothing", categoryLabel: "Drabužiai", price: 159, imageId: "1551028719-00167b16eac5", badge: "Bestseller", description: "Lengva, šilta striukė su matiniu paviršiumi ir kompaktišku siluetu." }
];

const additionalClothingData = [
  { name: "Laisvas medvilninis džemperis", price: 65, imageId: "1556821840-3a63f95609a7", badge: "Nauja", desc: "Laisvo stiliaus medvilninis džemperis patogiam kasdieniam laisvalaikiui." },
  { name: "Struktūrinė liemenė", price: 75, imageId: "1616166324213-94c6f9661f4c", badge: "", desc: "Struktūrinė liemenė, suteikianti išskirtinumo bet kuriam deriniui." },
  { name: "Klasikiniai balti marškiniai", price: 59, imageId: "1621072156002-e2fcc103e889", badge: "Nauja", desc: "Laiko patikrinti klasikiniai marškiniai iš aukštos kokybės medvilnės." },
  { name: "Minkštas kardiganas", price: 85, imageId: "1516762689617-e1cffcef479d", badge: "", desc: "Jaukus, švelnus kardiganas vėsesnėms dienoms." },
  { name: "Plačios lininės kelnės", price: 79, imageId: "1509551388413-e18d0ac5d495", badge: "Atrinkta", desc: "Lengvos ir pralaidios orui plačios lininės kelnės." },
  { name: "Trumpas vilnos paltas", price: 179, imageId: "1544923246-77307dd654cb", badge: "Nauja", desc: "Elegantiškas trumpesnio kirpimo vilnonis paltas." },
  { name: "Laisvo kirpimo švarkas", price: 139, imageId: "1548883354-7622d03aca27", badge: "", desc: "Stilingas laisvo silueto švarkas modernesniam įvaizdžiui." },
  { name: "Plonas golfas", price: 49, imageId: "1614975058789-41316d0e2e9c", badge: "", desc: "Švelnus prigludęs golfas, idealiai tinkantis sluoksniavimui." },
  { name: "Medvilninė suknelė", price: 89, imageId: "1595777457583-95e059d581b8", badge: "Bestseller", desc: "Lengva medvilninė suknelė su subtiliomis detalėmis." },
  { name: "Tekstūrinis sijonas", price: 69, imageId: "1583496661160-fb5886a0aaaa", badge: "", desc: "Elegantiškas tekstūrinis sijonas kasdienai ir progoms." },
  { name: "Kasdienis džemperis", price: 59, imageId: "1620799140408-edc6dcb6d633", badge: "", desc: "Minkštas ir patogus džemperis laisvalaikiui." },
  { name: "Tamsus denimo švarkas", price: 119, imageId: "1611312449412-6cefac5dc3e4", badge: "", desc: "Tvarkingas tamsaus denimo švarkas." },
  { name: "Lengvas lietpaltis", price: 159, imageId: "1542393545-10f5cde2c810", badge: "Nauja", desc: "Vandeniui atsparus ir stilingas lietpaltis permainingiems orams." },
  { name: "Vilnonė liemenė", price: 85, imageId: "1626438012674-a690bf70d898", badge: "", desc: "Šilta vilnonė liemenė sluoksniavimui ant marškinių." },
  { name: "Klasikinis trench paltas", price: 189, imageId: "1525450824789-227aeefac513", badge: "Bestseller", desc: "Klasikinis smėlio spalvos trench paltas su diržu." },
  { name: "Minkštas flanelinis švarkas", price: 95, imageId: "1516257984-b1b4d707412e", badge: "", desc: "Jaukus flanelinio audinio švarkas vėsesniam orui." },
  { name: "Ribbed midi suknelė", price: 99, imageId: "1515372039744-b8f02a3ae446", badge: "", desc: "Prigludusi briaunota midi suknelė iš tampraus trikotažo." },
  { name: "Drobiniai šortai", price: 49, imageId: "1591195853828-11db59a44f6b", badge: "", desc: "Lengvi ir patvarūs drobiniai šortai vasaros dienoms." },
  { name: "Laisvi marškiniai", price: 65, imageId: "1512436991641-6745cdb1723f", badge: "", desc: "Laisvo kirpimo marškiniai patogiam kasdieniam stiliui." },
  { name: "Minimalistinis kombinezonas", price: 129, imageId: "1550614000-4895a10e1bfd", badge: "Atrinkta", desc: "Vienas rūbas – pilnas įvaizdis: švarus ir minimalistinis kombinezonas." },
  { name: "Medvilninis kardiganas", price: 79, imageId: "1620799140188-3b2a02fd9a55", badge: "", desc: "Lengvas medvilninis kardiganas su sagomis." },
  { name: "Tiesus midi sijonas", price: 69, imageId: "1544526226-d4568090ffb8", badge: "", desc: "Klasikinis tiesaus kirpimo midi sijonas." },
  { name: "Lengvas vasarinis švarkas", price: 115, imageId: "1604644401890-0bd678c83780", badge: "", desc: "Pralaidus orui švarkas šiltesniems orams." },
  { name: "Pūkinė liemenė", price: 99, imageId: "1601924994987-69e26d50dc26", badge: "", desc: "Kompaktiška ir šilta pūkinė liemenė kasdienai." },
  { name: "Minkšti lounge marškinėliai", price: 35, imageId: "1503342217505-b0a15ec3261c", badge: "", desc: "Ypatingai švelnūs marškinėliai namų ilsėjimuisi." },
  { name: "Klasikinis juodas golfas", price: 55, imageId: "1508445861827-7711f397113a", badge: "", desc: "Būtina garderobo dalis – klasikinis juodas golfas." },
  { name: "Aukšto liemens kelnės", price: 85, imageId: "1584308666744-24d5c474f2ae", badge: "", desc: "Elegantiškos aukšto liemens kelnės su tiesiomis klešnėmis." },
  { name: "Denimo maxi sijonas", price: 89, imageId: "1605763240000-7e93b172d754", badge: "Nauja", desc: "Madingas ilgas denimo sijonas su skeltuku priekyje." },
  { name: "Tekstūriniai marškinėliai", price: 42, imageId: "1484515991647-c5760fcecfc7", badge: "", desc: "Marškinėliai iš išreikštos tekstūros medvilnės audinio." },
  { name: "Vilnonis megztinis", price: 95, imageId: "1611911813495-2630a91e56b8", badge: "Bestseller", desc: "Grynos vilnos šiltas megztinis." },
  { name: "Trumpa medvilninė striukė", price: 125, imageId: "1618333256087-0b5c16386fae", badge: "", desc: "Trumpo silueto striukė pavasario/rudens sezonui." },
  { name: "Lininė palaidinė", price: 55, imageId: "1541101767792-f9b2b1c4f127", badge: "", desc: "Lengva ir gaivi lininė palaidinė." },
  { name: "Platus džinsinis modelis", price: 99, imageId: "1582562124811-c09040d0a901", badge: "", desc: "Laisvalaikio džinsai su platėjančiu siluetu." },
  { name: "Minkštas polo džemperis", price: 75, imageId: "1618517047922-d790407df742", badge: "", desc: "Stilingas polo stiliaus megztas džemperis." },
  { name: "Lengvas oversize džemperis", price: 69, imageId: "1620799139834-6b8f844fbe61", badge: "", desc: "Oversize modelio džemperis maksimaliam patogumui." },
  { name: "Kreminis megztinis", price: 85, imageId: "1607730140456-c6e4c278077c", badge: "", desc: "Švelnios kreminės spalvos jaukus megztinis." },
  { name: "Minimalistinė liemenė", price: 69, imageId: "1551232864-3f0890e580d9", badge: "", desc: "Griežto kirpimo minimalistinė liemenė." },
  { name: "Pusiau ilgas vilnos paltas", price: 199, imageId: "1539571696357-5a69c17a67c6", badge: "Atrinkta", desc: "Klasikinis pusiau ilgas vilnonis paltas." },
  { name: "Kasdienė marškinėlių suknelė", price: 72, imageId: "1572804013309-59a88b7e92f1", badge: "", desc: "Paprastos konstrukcijos laisvalaikio suknelė." },
  { name: "Struktūrinės kelnės", price: 89, imageId: "1517445312882-bc9910d016b7", badge: "", desc: "Elegantiškos formos ir tekstūros kelnės." },
  { name: "Medvilninis švarkelis", price: 110, imageId: "1507679799987-c73779587ccf", badge: "", desc: "Lengvas kasdienis švarkelis iš medvilnės." },
  { name: "Laisvi cargo džinsai", price: 99, imageId: "1617113913973-418370733843", badge: "Nauja", desc: "Patogūs cargo stiliaus džinsai su kišenėmis." },
  { name: "Minkštas hoodie", price: 75, imageId: "1543163521-1bf539c55dd2", badge: "", desc: "Džemperis su gobtuvu jaukiam laisvalaikiui." },
  { name: "Lininis kostiumas", price: 185, imageId: "1505022610485-0249ba5b3675", badge: "", desc: "Subalansuotas lininis kostiumas vasaros dienoms." },
  { name: "Klasikinė palaidinė", price: 55, imageId: "1564584217132-2271feaeb3c5", badge: "", desc: "Elegantiška ir universali palaidinė." },
  { name: "Tekstūrinis bomberis", price: 135, imageId: "1544022613-e87ca75a784a", badge: "", desc: "Šiuolaikiško kirpimo tekstūrinis bomberis." },
  { name: "Tamsus vilnos džemperis", price: 89, imageId: "1614975058789-41316d0e2e9c", badge: "", desc: "Šiltas tamsios spalvos vilnonis džemperis." },
  { name: "Lengvas sluoksniavimo topas", price: 39, imageId: "1529139574466-a303027c1d8b", badge: "", desc: "Minimalistinis viršutinis rūbas sluoksniavimui." },
  { name: "Universalus megztinis", price: 79, imageId: "1517245386807-bb43f82c33c4", badge: "", desc: "Kasdieniam nešiojimui pritaikytas megztinis." },
  { name: "Klasikinis denim švarkas", price: 109, imageId: "1576995853123-5a10305d93c0", badge: "Bestseller", desc: "Niekada neišeinantis iš mados klasikinis džinsinis švarkas." }
];

const additionalClothing = additionalClothingData.map((item, index) => ({
  id: index + 15,
  name: item.name,
  category: "clothing",
  categoryLabel: "Drabužiai",
  price: item.price,
  image: `https://images.unsplash.com/photo-${item.imageId}?auto=format&fit=crop&w=600&q=80`,
  badge: item.badge,
  description: item.desc
}));

const baseProductsWithImages = baseProducts.map(product => ({
  ...product,
  image: `https://images.unsplash.com/photo-${product.imageId}?auto=format&fit=crop&w=600&q=80`
}));

const products = [...baseProductsWithImages, ...additionalClothing];

const state = {
  category: "all",
  search: "",
  sort: "featured",
  cart: loadCart(),
  favorites: loadFavorites(),
  wishlistOnly: false,
  visibleLimit: 16
};

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
    return Array.isArray(savedCart) 
      ? savedCart.filter((item) => item && Number.isFinite(item.id) && item.quantity > 0).map((item) => ({ ...item, size: item.size || "S" })) 
      : [];
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
  const allVisibleProducts = getVisibleProducts();
  const visibleProducts = allVisibleProducts.slice(0, state.visibleLimit);
  
  resultsLabel.textContent = allVisibleProducts.length > visibleProducts.length
    ? `Rodoma ${visibleProducts.length} iš ${allVisibleProducts.length} prekių`
    : `Rodoma ${visibleProducts.length} ${visibleProducts.length === 1 ? "prekė" : "prekių"}`;
    
  productGrid.innerHTML = visibleProducts.map((product, index) => `
    <article class="product-card" style="animation-delay: ${Math.min(index * 20, 240)}ms">
      <div class="product-image-wrap">
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
        </div>
        <p class="product-price">${formatPrice(product.price)}</p>
      </div>
    </article>
  `).join("");
  
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
  
  const existingItem = state.cart.find((item) => item.id === productId && (item.size || "S") === size);
  if (existingItem) existingItem.quantity += 1;
  else state.cart.push({ ...product, size, quantity: 1 });
  
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
    <div class="modal-product-layout">
      <img src="${product.image}" alt="${product.name}" class="modal-image">
      <div class="modal-details">
        <span class="product-category">${product.categoryLabel}</span>
        <h2>${product.name}</h2>
        <p class="modal-price">${formatPrice(product.price)}</p>
        <p class="modal-description">${product.description}</p>
        <div class="modal-options">
          <label for="modal-size">Dydis:</label>
          <select id="modal-size" class="modal-select">
            <option value="XS">XS</option>
            <option value="S" selected>S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>
        <div class="modal-quantity-row">
          <span>Kiekis:</span>
          <div class="quantity-controls">
            <button type="button" data-modal-quantity="-1">−</button>
            <span id="modal-quantity-value">1</span>
            <button type="button" data-modal-quantity="1">+</button>
          </div>
        </div>
        <button class="button button-primary" type="button" data-modal-add-id="${product.id}">Pridėti į krepšelį</button>
      </div>
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
  state.visibleLimit = 16;
  document.querySelectorAll(".filter-button").forEach((filterButton) => filterButton.classList.toggle("is-active", filterButton === button));
  renderProducts();
});

document.querySelector("#wishlist-filter").addEventListener("click", () => {
  state.wishlistOnly = !state.wishlistOnly;
  state.visibleLimit = 16;
  renderProducts();
});

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  state.visibleLimit = 16;
  renderProducts();
});

sortSelect.addEventListener("change", (event) => {
  state.sort = event.target.value;
  state.visibleLimit = 16;
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
  state.visibleLimit = 16;
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

productModal.addEventListener("click", (event) => {
  const quantityButton = event.target.closest("[data-modal-quantity]");
  const addButton = event.target.closest("[data-modal-add-id]");
  if (quantityButton) {
    const quantityOutput = document.querySelector("#modal-quantity-value");
    let currentVal = Number(quantityOutput.value || quantityOutput.textContent);
    let newVal = Math.max(1, currentVal + Number(quantityButton.dataset.modalQuantity));
    quantityOutput.textContent = newVal;
    quantityOutput.value = newVal;
  }
  if (addButton) {
    const quantity = Number(document.querySelector("#modal-quantity-value").textContent || 1);
    const size = document.querySelector("#modal-size").value;
    for (let index = 0; index < quantity; index += 1) addToCart(Number(addButton.dataset.addId), size);
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