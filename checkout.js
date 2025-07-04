// checkout.js - Handles checkout product rendering and order logic
function getCart() {
    try {
        return JSON.parse(localStorage.getItem('cart') || '[]');
    } catch { return []; }
}
function renderCheckoutProductsWithProducts(products) {
    const cart = getCart();
    const container = document.getElementById('checkout-products');
    if (!container) return;
    if (!cart.length) {
        container.innerHTML = '<div class="empty-cart-msg">Your bag is empty.</div>';
        document.querySelector('.checkout-form').style.display = 'none';
        return;
    }
    let total = 0;
    let html = `<table class="checkout-table" style="width:100%;border-collapse:collapse;margin-bottom:1.2rem;">
        <tr><th style='text-align:left;padding:0.6rem 0.4rem;'>Product</th><th style='text-align:left;padding:0.6rem 0.4rem;'>Price</th><th style='text-align:left;padding:0.6rem 0.4rem;'>Qty</th><th style='text-align:left;padding:0.6rem 0.4rem;'>Subtotal</th></tr>`;
    cart.forEach(item => {
        let prod = products.find(p => p.id === item.id) || item;
        let price = prod.price || item.price || 0;
        let subtotal = price * (item.qty || 1);
        total += subtotal;
        html += `<tr><td style='border-bottom:1px solid #e3e6f3;vertical-align:middle;'><img src="${prod.img || item.img}" style="width:48px;height:58px;object-fit:cover;vertical-align:middle;border-radius:8px;margin-right:8px;"> <b>${prod.title || item.title || 'Product'}</b><br><span style='font-size:0.97rem;color:#888;'>${prod.desc ? prod.desc : ''}</span></td><td style='border-bottom:1px solid #e3e6f3;'>₹${price}</td><td style='border-bottom:1px solid #e3e6f3;'>${item.qty || 1}</td><td style='border-bottom:1px solid #e3e6f3;'>₹${subtotal}</td></tr>`;
    });
    html += `</table><div class="checkout-total" style="font-size:1.15rem;font-weight:600;color:#e11d48;text-align:right;margin-top:0.5rem;">Total: <b>₹${total}</b></div>`;
    container.innerHTML = html;
}
function ensureShopProductsAndRender() {
    if (window.allShopProducts && Array.isArray(window.allShopProducts) && window.allShopProducts.length > 0) {
        renderCheckoutProductsWithProducts(window.allShopProducts);
    } else {
        var s = document.createElement('script');
        s.src = 'shop.js';
        s.onload = function() {
            window.allShopProducts = window.allShopProducts || (typeof allShopProducts !== 'undefined' ? allShopProducts : []);
            renderCheckoutProductsWithProducts(window.allShopProducts);
        };
        document.head.appendChild(s);
    }
}
document.addEventListener('DOMContentLoaded', function() {
    ensureShopProductsAndRender();
    var form = document.getElementById('checkout-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your order! (Demo only)');
            localStorage.removeItem('cart');
            window.location.href = 'index.html';
        });
    }
});
