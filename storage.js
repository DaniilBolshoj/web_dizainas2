const storage = {
  get(key) {
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      console.warn("Nepavyko išsaugoti naršyklės saugykloje:", error);
    }
  }
};

export function loadCart() {
  try {
    const savedCart = JSON.parse(storage.get("northline-cart"));
    return Array.isArray(savedCart)
      ? savedCart.filter((item) => item && Number.isFinite(item.id) && item.quantity > 0).map((item) => ({ ...item, size: item.size || "S" }))
      : [];
  } catch {
    return [];
  }
}

export function loadFavorites() {
  try {
    const savedFavorites = JSON.parse(storage.get("northline-favorites"));
    return Array.isArray(savedFavorites) ? savedFavorites.map(Number).filter(Number.isInteger) : [];
  } catch {
    return [];
  }
}

export function saveCart(cart) {
  storage.set("northline-cart", JSON.stringify(cart));
}

export function saveFavorites(favorites) {
  storage.set("northline-favorites", JSON.stringify(favorites));
}