                        // Zara Shop Page Script
// --- Slider Data ---
const shopSlides = [
  {
    image: 'https://static.zara.net/photos///contents/mkt/spots/ss24-north-woman-new/subhome-xmedia-31//w/1920/IMAGE-landscape-fill-2b1e1e7e-2e2e-4e2e-8e2e-2e2e2e2e2e2e-default_0.jpg?ts=1719588000000',
    text: 'Discover the New Collection',
  },
  {
    image: 'https://static.zara.net/photos///2024/I/0/1/p/0000/000/000/2/w/1920/IMAGE-landscape-fill-2b1e1e7e-2e2e-4e2e-8e2e-2e2e2e2e2e2e-default_0.jpg?ts=1719588000000',
    text: 'Shop the Latest Trends',
  },
  {
    image: 'https://static.zara.net/photos///2024/I/0/1/p/0000/000/000/3/w/1920/IMAGE-landscape-fill-2b1e1e7e-2e2e-4e2e-8e2e-2e2e2e2e2e2e-default_0.jpg?ts=1719588000000',
    text: 'Essentials for Everyone',
  },
];

let shopCurrentSlide = 0;
function renderShopSlider() {
  const slider = document.getElementById('shop-slider');
  slider.innerHTML = '';
  shopSlides.forEach((slide, i) => {
    const slideDiv = document.createElement('div');
    slideDiv.className = 'slide';
    slideDiv.style.backgroundImage = `url('${slide.image}')`;
    slideDiv.innerHTML = `<div class='slide-content'><h2>${slide.text}</h2></div>`;
    slider.appendChild(slideDiv);
  });
  slider.style.transform = `translateX(-${shopCurrentSlide * 100}vw)`;
}
document.getElementById('shop-slider-prev').onclick = function() {
  shopCurrentSlide = (shopCurrentSlide - 1 + shopSlides.length) % shopSlides.length;
  renderShopSlider();
};
document.getElementById('shop-slider-next').onclick = function() {
  shopCurrentSlide = (shopCurrentSlide + 1) % shopSlides.length;
  renderShopSlider();
};
renderShopSlider();

// --- Product Data (sample, should be replaced with real data) ---
const allShopProducts = [
  // Woman
  {id:1, title:'Linen Blend Blazer', price:109.99, category:'woman', img:'https://static.zara.net/photos///2024/I/0/1/p/0000/001/001/2/w/560/0000001001_1_1_1.jpg?ts=1719588000000'},
  {id:2, title:'Wide Leg Trousers', price:59.99, category:'woman', img:'https://static.zara.net/photos///2024/I/0/1/p/0000/001/002/2/w/560/0000001002_1_1_1.jpg?ts=1719588000000'},
  {id:3, title:'Cropped Top', price:39.99, category:'woman', img:'https://static.zara.net/photos///2024/I/0/1/p/0000/001/003/2/w/560/0000001003_1_1_1.jpg?ts=1719588000000'},
  {id:4, title:'Double Breasted Coat', price:149.99, category:'woman', img:'https://static.zara.net/photos///2024/I/0/1/p/0000/001/004/2/w/560/0000001004_1_1_1.jpg?ts=1719588000000'},
  {id:5, title:'Pleated Skirt', price:49.99, category:'woman', img:'https://static.zara.net/photos///2024/I/0/1/p/0000/001/005/2/w/560/0000001005_1_1_1.jpg?ts=1719588000000'},
  {id:6, title:'Oversized Shirt', price:45.99, category:'woman', img:'https://static.zara.net/photos///2024/I/0/1/p/0000/001/006/2/w/560/0000001006_1_1_1.jpg?ts=1719588000000'},
  {id:7, title:'High Waist Jeans', price:69.99, category:'woman', img:'https://static.zara.net/photos///2024/I/0/1/p/0000/001/007/2/w/560/0000001007_1_1_1.jpg?ts=1719588000000'},
  {id:8, title:'Ribbed Knit Dress', price:89.99, category:'woman', img:'https://static.zara.net/photos///2024/I/0/1/p/0000/001/008/2/w/560/0000001008_1_1_1.jpg?ts=1719588000000'},
  {id:9, title:'Faux Leather Jacket', price:119.99, category:'woman', img:'https://static.zara.net/photos///2024/I/0/1/p/0000/001/009/2/w/560/0000001009_1_1_1.jpg?ts=1719588000000'},
  {id:10, title:'Printed Midi Dress', price:99.99, category:'woman', img:'https://static.zara.net/photos///2024/I/0/1/p/0000/001/010/2/w/560/0000001010_1_1_1.jpg?ts=1719588000000'},
  // Man
  {id:11, title:'Slim Fit Suit', price:179.99, category:'man', img:'https://static.zara.net/photos///2024/I/0/2/p/0000/002/001/2/w/560/0000002001_1_1_1.jpg?ts=1719588000000'},
  {id:12, title:'Cotton Shirt', price:49.99, category:'man', img:'https://static.zara.net/photos///2024/I/0/2/p/0000/002/002/2/w/560/0000002002_1_1_1.jpg?ts=1719588000000'},
  {id:13, title:'Denim Jacket', price:89.99, category:'man', img:'https://static.zara.net/photos///2024/I/0/2/p/0000/002/003/2/w/560/0000002003_1_1_1.jpg?ts=1719588000000'},
  {id:14, title:'Chino Trousers', price:59.99, category:'man', img:'https://static.zara.net/photos///2024/I/0/2/p/0000/002/004/2/w/560/0000002004_1_1_1.jpg?ts=1719588000000'},
  {id:15, title:'Basic T-shirt', price:24.99, category:'man', img:'https://static.zara.net/photos///2024/I/0/2/p/0000/002/005/2/w/560/0000002005_1_1_1.jpg?ts=1719588000000'},
  {id:16, title:'Bomber Jacket', price:109.99, category:'man', img:'https://static.zara.net/photos///2024/I/0/2/p/0000/002/006/2/w/560/0000002006_1_1_1.jpg?ts=1719588000000'},
  {id:17, title:'Cargo Pants', price:79.99, category:'man', img:'https://static.zara.net/photos///2024/I/0/2/p/0000/002/007/2/w/560/0000002007_1_1_1.jpg?ts=1719588000000'},
  {id:18, title:'Polo Shirt', price:39.99, category:'man', img:'https://static.zara.net/photos///2024/I/0/2/p/0000/002/008/2/w/560/0000002008_1_1_1.jpg?ts=1719588000000'},
  {id:19, title:'Wool Coat', price:159.99, category:'man', img:'https://static.zara.net/photos///2024/I/0/2/p/0000/002/009/2/w/560/0000002009_1_1_1.jpg?ts=1719588000000'},
  {id:20, title:'Jogger Trousers', price:49.99, category:'man', img:'https://static.zara.net/photos///2024/I/0/2/p/0000/002/010/2/w/560/0000002010_1_1_1.jpg?ts=1719588000000'},
  // Kids
  {id:21, title:'Printed T-shirt', price:19.99, category:'kids', img:'https://static.zara.net/photos///2024/I/0/3/p/0000/003/001/2/w/560/0000003001_1_1_1.jpg?ts=1719588000000'},
  {id:22, title:'Denim Shorts', price:24.99, category:'kids', img:'https://static.zara.net/photos///2024/I/0/3/p/0000/003/002/2/w/560/0000003002_1_1_1.jpg?ts=1719588000000'},
  {id:23, title:'Hooded Sweatshirt', price:34.99, category:'kids', img:'https://static.zara.net/photos///2024/I/0/3/p/0000/003/003/2/w/560/0000003003_1_1_1.jpg?ts=1719588000000'},
  {id:24, title:'Cargo Joggers', price:29.99, category:'kids', img:'https://static.zara.net/photos///2024/I/0/3/p/0000/003/004/2/w/560/0000003004_1_1_1.jpg?ts=1719588000000'},
  {id:25, title:'Puffer Jacket', price:59.99, category:'kids', img:'https://static.zara.net/photos///2024/I/0/3/p/0000/003/005/2/w/560/0000003005_1_1_1.jpg?ts=1719588000000'},
  {id:26, title:'Floral Dress', price:34.99, category:'kids', img:'https://static.zara.net/photos///2024/I/0/3/p/0000/003/006/2/w/560/0000003006_1_1_1.jpg?ts=1719588000000'},
  {id:27, title:'Basic Leggings', price:15.99, category:'kids', img:'https://static.zara.net/photos///2024/I/0/3/p/0000/003/007/2/w/560/0000003007_1_1_1.jpg?ts=1719588000000'},
  {id:28, title:'Denim Jacket', price:39.99, category:'kids', img:'https://static.zara.net/photos///2024/I/0/3/p/0000/003/008/2/w/560/0000003008_1_1_1.jpg?ts=1719588000000'},
  {id:29, title:'Sweatpants', price:24.99, category:'kids', img:'https://static.zara.net/photos///2024/I/0/3/p/0000/003/009/2/w/560/0000003009_1_1_1.jpg?ts=1719588000000'},
  {id:30, title:'Striped Shirt', price:21.99, category:'kids', img:'https://static.zara.net/photos///2024/I/0/3/p/0000/003/010/2/w/560/0000003010_1_1_1.jpg?ts=1719588000000'},
  // Sale
  {id:31, title:'Sale Blazer', price:69.99, oldPrice:119.99, category:'sale', img:'https://static.zara.net/photos///2024/I/0/4/p/0000/004/001/2/w/560/0000004001_1_1_1.jpg?ts=1719588000000'},
  {id:32, title:'Sale Dress', price:49.99, oldPrice:99.99, category:'sale', img:'https://static.zara.net/photos///2024/I/0/4/p/0000/004/002/2/w/560/0000004002_1_1_1.jpg?ts=1719588000000'},
  {id:33, title:'Sale Shirt', price:24.99, oldPrice:49.99, category:'sale', img:'https://static.zara.net/photos///2024/I/0/4/p/0000/004/003/2/w/560/0000004003_1_1_1.jpg?ts=1719588000000'},
  {id:34, title:'Sale Pants', price:29.99, oldPrice:59.99, category:'sale', img:'https://static.zara.net/photos///2024/I/0/4/p/0000/004/004/2/w/560/0000004004_1_1_1.jpg?ts=1719588000000'},
  {id:35, title:'Sale Coat', price:89.99, oldPrice:149.99, category:'sale', img:'https://static.zara.net/photos///2024/I/0/4/p/0000/004/005/2/w/560/0000004005_1_1_1.jpg?ts=1719588000000'},
  {id:36, title:'Sale Skirt', price:24.99, oldPrice:49.99, category:'sale', img:'https://static.zara.net/photos///2024/I/0/4/p/0000/004/006/2/w/560/0000004006_1_1_1.jpg?ts=1719588000000'},
  {id:37, title:'Sale Jeans', price:34.99, oldPrice:69.99, category:'sale', img:'https://static.zara.net/photos///2024/I/0/4/p/0000/004/007/2/w/560/0000004007_1_1_1.jpg?ts=1719588000000'},
  {id:38, title:'Sale Top', price:19.99, oldPrice:34.99, category:'sale', img:'https://static.zara.net/photos///2024/I/0/4/p/0000/004/008/2/w/560/0000004008_1_1_1.jpg?ts=1719588000000'},
  {id:39, title:'Sale Jacket', price:49.99, oldPrice:99.99, category:'sale', img:'https://static.zara.net/photos///2024/I/0/4/p/0000/004/009/2/w/560/0000004009_1_1_1.jpg?ts=1719588000000'},
  {id:40, title:'Sale Shorts', price:15.99, oldPrice:29.99, category:'sale', img:'https://static.zara.net/photos///2024/I/0/4/p/0000/004/010/2/w/560/0000004010_1_1_1.jpg?ts=1719588000000'},
];

// --- Pagination, Filtering, and Rendering ---
let shopCurrentPage = 1;
let shopProductsPerPage = 10;
let shopActiveCategory = 'all';
let shopActivePrice = 'all';
let shopFilteredProducts = allShopProducts;

function filterShopProducts() {
  shopFilteredProducts = allShopProducts.filter(p => {
    let catMatch = shopActiveCategory === 'all' || p.category === shopActiveCategory;
    let priceMatch = true;
    if (shopActivePrice === 'low') priceMatch = p.price < 50;
    else if (shopActivePrice === 'mid') priceMatch = p.price >= 50 && p.price <= 100;
    else if (shopActivePrice === 'high') priceMatch = p.price > 100;
    return catMatch && priceMatch;
  });
  shopCurrentPage = 1;
  renderShopProducts();
  renderShopPagination();
}

function renderShopProducts() {
  const productsDiv = document.getElementById('shop-products');
  productsDiv.innerHTML = '';
  const start = (shopCurrentPage - 1) * shopProductsPerPage;
  const end = start + shopProductsPerPage;
  const pageProducts = shopFilteredProducts.slice(start, end);
  if (pageProducts.length === 0) {
    productsDiv.innerHTML = '<p style="text-align:center;width:100%;">No products found.</p>';
    return;
  }
  pageProducts.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-title', product.title);
    card.setAttribute('data-price', product.price);
    card.setAttribute('data-img', product.img);
    // Add more product details for hover
    let details = '';
    if (product.category === 'woman') details = 'Premium quality, modern fit, and elegant style.';
    else if (product.category === 'man') details = 'Comfortable, versatile, and on-trend menswear.';
    else if (product.category === 'kids') details = 'Fun, durable, and playful for kids.';
    else if (product.category === 'sale') details = 'Limited time offer! Grab the best deals.';
    card.innerHTML = `
      <img src="${product.img}" alt="${product.title}">
      <div class="product-info">
        <div class="product-title">${product.title}</div>
        <div class="product-price">${product.oldPrice ? `<span class='old-price'>₹${product.oldPrice.toLocaleString('en-IN')}</span> ` : ''}₹${product.price.toLocaleString('en-IN')}</div>
      </div>
      <div class="product-hover">
        <p style="font-weight:600;font-size:1.08rem;">${product.title}</p>
        <p style='margin:8px 0;'>${product.oldPrice ? `<span class='old-price'>₹${product.oldPrice.toLocaleString('en-IN')}</span> ` : ''}<span class='product-price'>₹${product.price.toLocaleString('en-IN')}</span></p>
        <div class="product-details" style="font-size:0.98rem;color:#444;margin-bottom:10px;">${details}</div>
        <button class="add-cart-btn">Add to Cart</button>
        <button class="buy-btn">Buy Now</button>
      </div>
    `;
    productsDiv.appendChild(card);
  });
  // Add event listeners for Add to Cart and Buy Now
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
}

function renderShopPagination() {
  const pagDiv = document.getElementById('shop-pagination');
  pagDiv.innerHTML = '';
  const totalPages = Math.ceil(shopFilteredProducts.length / shopProductsPerPage);
  if (totalPages <= 1) return;
  const prevBtn = document.createElement('button');
  prevBtn.className = 'hero-btn';
  prevBtn.textContent = 'Prev';
  prevBtn.disabled = shopCurrentPage === 1;
  prevBtn.onclick = () => { if (shopCurrentPage > 1) { shopCurrentPage--; renderShopProducts(); renderShopPagination(); } };
  pagDiv.appendChild(prevBtn);
  for (let i = 1; i <= totalPages; i++) {
    const numBtn = document.createElement('button');
    numBtn.className = 'hero-btn';
    numBtn.textContent = i;
    if (i === shopCurrentPage) numBtn.style.background = '#222', numBtn.style.color = '#fff';
    numBtn.onclick = () => { shopCurrentPage = i; renderShopProducts(); renderShopPagination(); };
    pagDiv.appendChild(numBtn);
  }
  const nextBtn = document.createElement('button');
  nextBtn.className = 'hero-btn';
  nextBtn.textContent = 'Next';
  nextBtn.disabled = shopCurrentPage === totalPages;
  nextBtn.onclick = () => { if (shopCurrentPage < totalPages) { shopCurrentPage++; renderShopProducts(); renderShopPagination(); } };
  pagDiv.appendChild(nextBtn);
}

document.getElementById('filter-btn').onclick = function() {
  const panel = document.getElementById('filter-panel');
  panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
};
document.getElementById('apply-filter-btn').onclick = function() {
  shopActiveCategory = document.getElementById('filter-category').value;
  shopActivePrice = document.getElementById('filter-price').value;
  filterShopProducts();
};
document.getElementById('clear-filter-btn').onclick = function() {
  shopActiveCategory = 'all';
  shopActivePrice = 'all';
  document.getElementById('filter-category').value = 'all';
  document.getElementById('filter-price').value = 'all';
  filterShopProducts();
};

// --- Search ---
document.getElementById('shop-search-btn').onclick = function() {
  const q = document.getElementById('shop-search').value.trim().toLowerCase();
  shopFilteredProducts = allShopProducts.filter(p => p.title.toLowerCase().includes(q));
  shopCurrentPage = 1;
  renderShopProducts();
  renderShopPagination();
};

document.getElementById('shop-search').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') document.getElementById('shop-search-btn').click();
});

// --- Cart Integration (reuse from script.js) ---
function addToCart(productId) {
  // This function should be defined in script.js and handle localStorage cart logic
  if (window.addToCartFromShop) return window.addToCartFromShop(productId);
  // fallback: add to localStorage
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const prod = allShopProducts.find(p => p.id === productId);
  if (!prod) return;
  const idx = cart.findIndex(item => item.id === productId);
  if (idx > -1) cart[idx].qty += 1;
  else cart.push({id: productId, qty: 1});
  localStorage.setItem('cart', JSON.stringify(cart));
  updateShopBagCount();
  alert('Added to bag!');
}
function updateShopBagCount() {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  document.getElementById('shop-bag-count').textContent = cart.reduce((a, b) => a + b.qty, 0) || '';
}
updateShopBagCount();

// --- Initial Render ---
filterShopProducts();
renderShopProducts();
renderShopPagination();
