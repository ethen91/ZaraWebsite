  // Accessibility button functionality
  const accBtn = document.getElementById('accessibility-main-btn');
  const accMenu = document.getElementById('accessibility-menu');
  if (accBtn && accMenu) {
    accBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      accMenu.style.display = accMenu.style.display === 'flex' ? 'none' : 'flex';
    });
    document.addEventListener('click', function(e) {
      if (!accMenu.contains(e.target) && e.target !== accBtn) {
        accMenu.style.display = 'none';
      }
    });
    // Accessibility actions
    const actions = accMenu.querySelectorAll('.accessibility-action');
    let originalFontSize = document.documentElement.style.fontSize || '16px';
    let contrastOn = false;
    let grayscaleOn = false;
    actions[0].addEventListener('click', function() { // Increase text size
      let fs = parseFloat(getComputedStyle(document.documentElement).fontSize);
      document.documentElement.style.fontSize = (fs + 2) + 'px';
    });
    actions[1].addEventListener('click', function() { // Decrease text size
      let fs = parseFloat(getComputedStyle(document.documentElement).fontSize);
      document.documentElement.style.fontSize = (fs > 10 ? fs - 2 : 10) + 'px';
    });
    actions[2].addEventListener('click', function() { // High contrast
      contrastOn = !contrastOn;
      if (contrastOn) {
        document.body.classList.add('high-contrast');
      } else {
        document.body.classList.remove('high-contrast');
      }
    });
    actions[3].addEventListener('click', function() { // Grayscale
      grayscaleOn = !grayscaleOn;
      if (grayscaleOn) {
        document.body.classList.add('grayscale');
      } else {
        document.body.classList.remove('grayscale');
      }
    });
    actions[4].addEventListener('click', function() { // Reset
      document.documentElement.style.fontSize = originalFontSize;
      document.body.classList.remove('high-contrast', 'grayscale');
      contrastOn = false;
      grayscaleOn = false;
    });
  }
// Accessibility effect styles
const accEffectStyle = document.createElement('style');
accEffectStyle.innerHTML = `
.high-contrast {
  filter: none !important;
  background: #000 !important;
  color: #fff !important;
}
.high-contrast * {
  background: transparent !important;
  color: #fff !important;
  border-color: #fff !important;
  text-shadow: none !important;
  box-shadow: none !important;
}
.grayscale {
  filter: grayscale(1) !important;
}
`;
document.head.appendChild(accEffectStyle);
// Example JS for Zara front page demo
// You can add more interactivity as needed

document.addEventListener('DOMContentLoaded', function() {
    // Accordion functionality (index.html)
    const accordions = document.querySelectorAll('.accordion-header');
    accordions.forEach(header => {
        header.addEventListener('click', function() {
            const isActive = this.classList.contains('active');
            accordions.forEach(h => h.classList.remove('active'));
            document.querySelectorAll('.accordion-body').forEach(b => b.style.maxHeight = null);
            if (!isActive) {
                this.classList.add('active');
                const body = this.nextElementSibling;
                body.style.maxHeight = body.scrollHeight + 'px';
            }
        });
    });

    // Shop page filter dropdown toggle
    const filterBtn = document.getElementById('filter-btn');
    const filterPanel = document.getElementById('filter-panel');
    if (filterBtn && filterPanel) {
        filterBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (filterPanel.style.display === 'block') {
                filterPanel.style.display = 'none';
            } else {
                filterPanel.style.display = 'block';
            }
        });
        // Hide dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!filterPanel.contains(e.target) && e.target !== filterBtn) {
                filterPanel.style.display = 'none';
            }
        });
    }
    // Hero button navigates to shop page
    const heroBtn = document.querySelector('.hero-btn');
    if (heroBtn) {
        heroBtn.addEventListener('click', function() {
            window.location.href = 'shop.html';
        });
    }

    // Search bar functionality
    const searchForm = document.querySelector('.search-bar');
    const searchInput = document.getElementById('searchInput');
    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const query = searchInput.value.trim();
            if (query) {
                alert('You searched for: ' + query);
            } else {
                alert('Please enter a search term.');
            }
        });
    }

    // Simple login form handler (on login.html)
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Login successful! (Demo only)');
            window.location.href = 'index.html';
        });
    }

    // --- Cart System ---
    function getCart() {
        let cart = localStorage.getItem('zara_cart');
        return cart ? JSON.parse(cart) : [];
    }
    function setCart(cart) {
        localStorage.setItem('zara_cart', JSON.stringify(cart));
    }
    function addToCart(product, redirectToBag = false) {
        let cart = getCart();
        let found = cart.find(item => item.title === product.title);
        if (found) {
            found.qty += 1;
        } else {
            cart.push({...product, qty: 1});
        }
        setCart(cart);
        if (redirectToBag) {
            window.location.href = 'bag.html';
        } else {
            // Show a floating notification
            showCartNotification(product.title);
        }
    }
    function buyNow(product) {
        addToCart(product, true);
    }

    // Floating cart notification
    function showCartNotification(productTitle) {
        let notif = document.createElement('div');
        notif.className = 'cart-notification';
        notif.innerHTML = `Added <b>${productTitle}</b> to bag! <a href="bag.html">View Bag</a>`;
        document.body.appendChild(notif);
        setTimeout(() => {
            notif.classList.add('show');
        }, 10);
        setTimeout(() => {
            notif.classList.remove('show');
            setTimeout(() => notif.remove(), 400);
        }, 2200);
    }

    // Product card buttons (on product pages)
    document.querySelectorAll('.product-card').forEach(function(card) {
        const title = card.getAttribute('data-title');
        const price = card.getAttribute('data-price');
        const img = card.getAttribute('data-img');
        card.querySelectorAll('.add-cart-btn').forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                addToCart({title, price, img});
            });
        });
        card.querySelectorAll('.buy-btn').forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                buyNow({title, price, img});
            });
        });
    });

    // --- Slider ---
    const slider = document.querySelector('.slider');
    if (slider) {
        let slides = document.querySelectorAll('.slide');
        let current = 0;
        function showSlide(idx) {
            slider.style.transform = `translateX(-${idx * 100}vw)`;
        }
        document.querySelector('.slider-btn.prev').addEventListener('click', function() {
            current = (current - 1 + slides.length) % slides.length;
            showSlide(current);
        });
        document.querySelector('.slider-btn.next').addEventListener('click', function() {
            current = (current + 1) % slides.length;
            showSlide(current);
        });
        // Auto-slide
        setInterval(() => {
            current = (current + 1) % slides.length;
            showSlide(current);
        }, 5000);
    }
// Floating cart notification styles
const cartNotifStyle = document.createElement('style');
cartNotifStyle.innerHTML = `
.cart-notification {
  position: fixed;
  bottom: 32px;
  right: 32px;
  background: #111;
  color: #fff;
  padding: 18px 32px;
  border-radius: 8px;
  font-size: 1.1rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.18);
  opacity: 0;
  pointer-events: none;
  z-index: 9999;
  transition: opacity 0.4s, transform 0.4s;
  transform: translateY(30px);
}
.cart-notification.show {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}
.cart-notification a {
  color: #fff;
  text-decoration: underline;
  margin-left: 12px;
}
`;
document.head.appendChild(cartNotifStyle);

    // --- Shopping Bag Page ---
    if (window.location.pathname.endsWith('bag.html')) {
        const bagContainer = document.querySelector('.bag-container');
        if (bagContainer) {
            let cart = getCart();
            if (cart.length === 0) {
                bagContainer.innerHTML = '<p>Your bag is currently empty.</p>';
            } else {
                let total = 0;
                let html = '<table class="bag-table"><tr><th>Product</th><th>Price</th><th>Qty</th><th>Remove</th></tr>';
                cart.forEach((item, idx) => {
                    total += item.price * item.qty;
                    html += `<tr><td><img src="${item.img}" style="width:50px;height:60px;object-fit:cover;vertical-align:middle;"> ${item.title}</td><td>₹${item.price}</td><td>${item.qty}</td><td><button class='remove-btn' data-idx='${idx}'>Remove</button></td></tr>`;
                });
                html += `</table><div class='bag-total'>Total: <b>₹${total}</b></div><button class='checkout-btn'>Checkout</button>`;
                bagContainer.innerHTML = html;
                // Remove item
                bagContainer.querySelectorAll('.remove-btn').forEach(btn => {
                    btn.addEventListener('click', function() {
                        let idx = parseInt(this.getAttribute('data-idx'));
                        cart.splice(idx, 1);
                        setCart(cart);
                        location.reload();
                    });
                });
                // Checkout
                bagContainer.querySelector('.checkout-btn').addEventListener('click', function() {
                    window.location.href = 'checkout.html';
                });
            }
        }
    }
});
