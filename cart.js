// cart.js - Handles cart logic for Zara website
// This script manages adding products to the cart, updating quantities, and syncing with localStorage.

// Utility: Get cart from localStorage
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Utility: Save cart to localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Add product to cart (expects product object with id, title, img, price)
function addToCart(product, qty = 1) {
    let cart = getCart();
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            img: product.img,
            price: product.price,
            qty: qty
        });
    }
    saveCart(cart);
    updateCartCount();
}

// Remove product from cart by id
function removeFromCart(productId) {
    let cart = getCart().filter(item => item.id !== productId);
    saveCart(cart);
    updateCartCount();
}

// Update product quantity in cart
function updateCartQty(productId, qty) {
    let cart = getCart();
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.qty = qty;
        if (item.qty <= 0) {
            cart = cart.filter(i => i.id !== productId);
        }
        saveCart(cart);
        updateCartCount();
    }
}

// Update cart count in header
function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    const bagCount = document.getElementById('shop-bag-count');
    if (bagCount) bagCount.textContent = count > 0 ? count : '';
}

// Expose cart functions globally
window.getCart = getCart;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartQty = updateCartQty;
window.updateCartCount = updateCartCount;

// On page load, update cart count
window.addEventListener('DOMContentLoaded', updateCartCount);
