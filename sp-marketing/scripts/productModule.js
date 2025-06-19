// ES Module that fetches data asynchronously
export async function loadProducts() {
  try {
    const response = await fetch('../data/products.json');
    if (!response.ok) {
      throw new Error('Failed to load JSON');
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error('Error fetching product data:', error);
    return [];
  }
}

// scripts/productModule.js
export async function loadProducts() {
  try {
    const response = await fetch('./data/products.json');
    if (!response.ok) throw new Error('Failed to fetch products');
    const products = await response.json();
    return products;
  } catch (error) {
    console.error('Error loading products:', error);
    return [];
  }
}
