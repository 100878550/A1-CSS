// TODO: Implement localStorage-based persistence using JSON.parse / JSON.stringify.
// Use this key for storage:
export const STORAGE_KEY = 'a1_products';

// TODO: return an array of products from localStorage (or [] if none)
export function getAllProducts() {
  /* your code */
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  }catch{
    return [];
  }
}

// TODO: persist a product into storage
export function addProduct(product) {
  /* your code */
  const products = getAllProducts();
  products.push(product);
  localStorage.setItem(STORAGE_KEY,JSON.stringify(products));
}

// TODO: remove a product by id and persist
export function removeProduct(id) {
  /* your code */
  // removes product if the product ID is equal to the given ID
  const products = getAllProducts().filter(p => p.id !==id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}
