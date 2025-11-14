/** @format */

// Menu data
const menuItems = [
  {
    id: 1,
    name: "Chocolate Smoothie",
    category: "Smoothie",
    price: 12.99,
    image:
      "https://icecreamfromscratch.com/wp-content/uploads/2022/08/Chocolate-Milkshake-1.2.jpg",
    rating: 4.8,
    description:
      "Rich, indulgent and satisfying — made with good quality cocoa or chocolate sauce, milk and ice cream. The blend is thick and decadent, perfect for chocolate lovers.",
    isPopular: true,
  },

  {
    id: 3,
    name: "Vegetable Soup",
    category: "Vegetables",
    price: 13.99,
    image:
      "https://www.cookingclassy.com/wp-content/uploads/2014/10/vegetable-soup-7.jpg",
    rating: 4.7,
    description:
      "A warm, comforting soup prepared with a variety of vegetables such as carrots, potatoes, celery, peas, onions, and sometimes spinach or corn. Nutritious and satisfying.",
    isPopular: false,
  },
  {
    id: 4,
    name: "Fresh Garden Salad",
    category: "Salads",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1570197571499-166b36435e9f",
    rating: 4.6,
    description:
      "Crisp mixed greens with strawberries, feta cheese, candied walnuts, and balsamic vinaigrette.",
    isPopular: false,
  },
  {
    id: 5,
    name: "Chicken Breast",
    category: "Protein",
    price: 7.99,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.6HYG1hldyx3pcz-QnRnmTwHaLH?cb=ucfimg2&ucfimg=1&w=474&h=379&c=7&p=0",
    rating: 4.9,
    description:
      "Lean, high-quality animal protein often used in health & fitness meal plans.",
    isPopular: true,
  },
  {
    id: 6,
    name: "Strawberry Smoothie",
    category: "Smoothie",
    price: 11.99,
    image:
      "https://www.oliviascuisine.com/wp-content/uploads/2021/06/strawberry-milkshake.jpg",
    rating: 4.7,
    description:
      "A creamy and refreshing shake made with ripe, juicy strawberries. Its sweet and slightly tangy flavor makes it a classic and perfect choice for any time of the day.",
    isPopular: false,
  },
  {
    id: 7,
    name: "Vanilla Smoothie",
    category: "Smoothie",
    price: 11.99,
    image:
      "https://iambaker.net/wp-content/uploads/2024/06/Vanilla-milkshake-3.jpg",
    rating: 4.7,
    description:
      "Smooth, aromatic and elegant. A vanilla shake uses vanilla ice cream or vanilla extract combined with milk for a simple yet comforting flavor.",
    isPopular: false,
  },
  {
    id: 9,
    name: "Mango Smoothie",
    category: "Smoothie",
    price: 10.99,
    image:
      "https://tastyoven.com/wp-content/uploads/2022/06/mango-shake-image.jpeg",
    rating: 4.7,
    description:
      "Tropical and lively, made with fresh or frozen mangoes to give a bright, juicy sweetness. Ideal for warm days or when you want a fruity twist in your shake.",
    isPopular: false,
  },
  {
    id: 10,
    name: "Banana Smoothie",
    category: "Smoothie",
    price: 10.49,
    image:
      "https://abeautifulmess.com/wp-content/uploads/2023/04/banana-smoothie-recipe.jpg",
    rating: 4.8,
    description:
      "Creamy and naturally sweet, made with ripe bananas and milk. A perfect energy boost and a classic favorite for smoothie lovers.",
    isPopular: true,
  },

  {
    id: 11,
    name: "Spinach Cream Soup",
    category: "Vegetables",
    price: 12.49,
    image:
      "https://cdn3.tmbi.com/secure/RMS/attachments/37/1200x1200/EXPS_23991_CFT1191211D35D_RMS.jpg",
    rating: 4.6,
    description:
      "A velvety and nutritious soup made with fresh spinach, onions, garlic, and cream. Smooth, comforting, and rich in vitamins.",
    isPopular: false,
  },

  {
    id: 12,
    name: "Roasted Veggie Mix",
    category: "Vegetables",
    price: 14.99,
    image:
      "https://sodelicious.recipes/wp-content/uploads/2018/06/15-03-2018-R4-side-dish-var3-Roasted-Veggie-Mix-720x720.jpg",
    rating: 4.8,
    description:
      "A colorful blend of roasted carrots, broccoli, zucchini, and peppers seasoned with herbs. Nutritious and full of flavor.",
    isPopular: true,
  },

  {
    id: 13,
    name: "Caesar Salad",
    category: "Salads",
    price: 10.99,
    image:
      "https://s23209.pcdn.co/wp-content/uploads/2023/01/220905_DD_Chx-Caesar-Salad_051.jpg",
    rating: 4.7,
    description:
      "Crisp romaine lettuce with parmesan, croutons, and creamy Caesar dressing — classic, fresh and satisfying.",
    isPopular: true,
  },

  {
    id: 14,
    name: "Kale & Avocado Salad",
    category: "Salads",
    price: 11.99,
    image:
      "https://th.bing.com/th/id/R.cf3701bab534750618e03e37df2b19e2?rik=vJXmMAzi4MBZRg&pid=ImgRaw&r=0",
    rating: 4.6,
    description:
      "A nutrient-packed mix of kale, creamy avocado, cherry tomatoes, and lemon vinaigrette. Light and refreshing.",
    isPopular: false,
  },

  {
    id: 15,
    name: "Grilled Salmon",
    category: "Protein",
    price: 15.99,
    image:
      "https://somuchfoodblog.com/wp-content/uploads/2024/06/Grilled-Greek-Salmon5-683x1024.jpg",
    rating: 4.9,
    description:
      "High-quality protein rich in omega-3. Tender, juicy salmon grilled to perfection with herbs and lemon.",
    isPopular: true,
  },

  {
    id: 16,
    name: "Tuna Steak",
    category: "Protein",
    price: 14.49,
    image:
      "https://www.tastingtable.com/img/gallery/how-to-pick-out-a-tuna-steak-recipe-that-works-for-you/intro-1685373359.jpg",
    rating: 4.7,
    description:
      "Thick, hearty tuna steak seared for a flavorful and protein-rich meal. Great for fitness and clean eating.",
    isPopular: false,
  },

  {
    id: 17,
    name: "Beef Steak",
    category: "Protein",
    price: 16.99,
    image:
      "https://www.thespruceeats.com/thmb/kvDdJvWZmNA9iw2XkNsGoY04WAo=/2048x1365/filters:fill(auto,1)/butter-basted-rib-eye-steak-912505-9_preview-5b2bc55a1d6404003699d69a.jpeg",
    rating: 4.8,
    description:
      "Juicy and tender beef steak grilled to enhance its natural flavors. A classic protein-packed meal option.",
    isPopular: true,
  },
  {
    id: 21,
    name: "Broccoli Cheese Soup",
    category: "Vegetables",
    price: 13.49,
    image:
      "https://soupchick.s3.amazonaws.com/wp-content/uploads/2024/04/07135227/SOUP0126-A_2.png",
    rating: 4.8,
    description:
      "A thick and comforting soup made with fresh broccoli florets and creamy cheddar cheese. Smooth, rich and satisfying.",
    isPopular: false,
  },
  {
    id: 25,
    name: "Quinoa Power Salad",
    category: "Salads",
    price: 13.99,
    image:
      "https://www.healthypowermeals.com.au/cdn/shop/files/QuinoaPowerSalad_I4R3320SQUARE.jpg?crop=center&height=1536&v=1722478878&width=1280",
    rating: 4.7,
    description:
      "A protein-rich salad combining quinoa, chickpeas, cucumbers, tomatoes, and lemon dressing. Light but filling.",
    isPopular: false,
  },

  //   {
  //     id: 7,
  //     name: "Pepperoni Pizza",
  //     category: "Pizza",
  //     price: 15.99,
  //     image: "https://images.unsplash.com/photo-1544982503-9f984c14501a",
  //     rating: 4.8,
  //     description:
  //       "Loaded with premium pepperoni, mozzarella cheese, and our homemade tomato sauce.",
  //     isPopular: true,
  //   },
  //   {
  //     id: 8,
  //     name: "Black Forest Cake",
  //     category: "Desserts",
  //     price: 8.99,
  //     image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62",
  //     rating: 4.9,
  //     description:
  //       "Decadent chocolate cake layered with cherries, cream, and chocolate shavings.",
  //     isPopular: false,
  //   },
  //   {
  //     id: 2,
  //     name: "Margherita Pizza",
  //     category: "Pizza",
  //     price: 14.99,
  //     image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
  //     rating: 4.9,
  //     description:
  //       "Classic Italian pizza with fresh mozzarella, San Marzano tomatoes, basil, and extra virgin olive oil.",
  //     isPopular: true,
  //   },
];

// State
let cart = [];
let selectedCategory = "All";
let selectedProduct = null;
let productQuantity = 1;

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  updateCartBadge();

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

// Scroll to section
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

// Mobile menu toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const menuIcon = document.getElementById("menuIcon");
  mobileMenu.classList.toggle("active");
}

// Filter menu
function filterMenu(category) {
  selectedCategory = category;

  // Update active button
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  event.target.classList.add("active");

  renderMenu();
}

// Render menu
function renderMenu() {
  const menuGrid = document.getElementById("menuGrid");

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  menuGrid.innerHTML = filteredItems
    .map(
      (item) => `
        <div class="menu-card" onclick="openProductPanel(${item.id})">
            <div class="menu-card-image">
                <img src="${item.image}" alt="${item.name}">
                ${
                  item.isPopular
                    ? `
                    <div class="popular-badge">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                        Popular
                    </div>
                `
                    : ""
                }
            </div>
            <div class="menu-card-content">
                <div class="menu-card-header">
                    <h3 class="menu-card-title">${item.name}</h3>
                    <span class="category-badge">${item.category}</span>
                </div>
                <p class="menu-card-description">${item.description}</p>
                <div class="menu-card-footer">
                    <span class="menu-card-price">$${item.price.toFixed(
                      2
                    )}</span>
                    <div class="menu-card-rating">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                        <span>${item.rating}</span>
                    </div>
                </div>
            </div>
        </div>
    `
    )
    .join("");
}

// Open product panel
function openProductPanel(productId) {
  selectedProduct = menuItems.find((item) => item.id === productId);
  productQuantity = 1;
  document.body.classList.add("no-scroll"); // Remover la clase para reactivar el desplazamiento
  const panel = document.getElementById("productPanel");
  const content = document.getElementById("productPanelContent");

  content.innerHTML = `
        <img src="${selectedProduct.image}" alt="${
    selectedProduct.name
  }" class="product-detail-image">
        ${
          selectedProduct.isPopular
            ? `
            <div class="popular-badge" style="width: 20%;  height: auto;  left: 1rem;">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                Popular
            </div>
        `
            : ""
        }
        <div class="product-detail-content">
            <div class="product-detail-header">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                    <div>
                        <h2 class="product-title">${selectedProduct.name}</h2>
                        <span class="category-badge">${
                          selectedProduct.category
                        }</span>
                    </div>
                    <div class="product-price">$${selectedProduct.price.toFixed(
                      2
                    )}</div>
                </div>
                <div class="product-rating">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="color: var(--primary);">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                    <span style="font-size: 1.125rem; font-weight: 600;">${
                      selectedProduct.rating
                    }</span>
                    <span style="color: var(--muted-foreground);">(250+ reviews)</span>
                </div>
            </div>
            
            <div class="product-section">
                <h3>Description</h3>
                <p style="color: var(--muted-foreground); line-height: 1.7;">${
                  selectedProduct.description
                }</p>
            </div>
            
            <div class="product-details-box">
                <h3 style="margin-bottom: 0.75rem;">Details</h3>
                <div class="product-detail-row">
                    <span style="color: var(--muted-foreground);">Preparation time:</span>
                    <span style="font-weight: 500;">15-20 min</span>
                </div>
                <div class="product-detail-row">
                    <span style="color: var(--muted-foreground);">Serves:</span>
                    <span style="font-weight: 500;">1-2 people</span>
                </div>
                <div class="product-detail-row">
                    <span style="color: var(--muted-foreground);">Dietary info:</span>
                    <span style="font-weight: 500;">Contains gluten</span>
                </div>
            </div>
            
            <div class="product-section">
                <h3>Quantity</h3>
                <div class="quantity-selector">
                    <button class="quantity-btn" onclick="decrementQuantity()" ${
                      productQuantity === 1 ? "disabled" : ""
                    }>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="5" y1="12" x2="19" y2="12"/>
                        </svg>
                    </button>
                    <span class="quantity-value" id="quantityValue">${productQuantity}</span>
                    <button class="quantity-btn" onclick="incrementQuantity()" ${
                      productQuantity === 10 ? "disabled" : ""
                    }>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="12" y1="5" x2="12" y2="19"/>
                            <line x1="5" y1="12" x2="19" y2="12"/>
                        </svg>
                    </button>
                </div>
            </div>
            
            <button class="add-to-cart-btn" onclick="addToCart()">
                Add to Cart - $${(
                  selectedProduct.price * productQuantity
                ).toFixed(2)}
            </button>
        </div>
    `;

  panel.classList.add("active");
}

// Close product panel
function closeProductPanel() {
  document.getElementById("productPanel").classList.remove("active");
  document.body.classList.remove("no-scroll"); // Remover la clase para reactivar el desplazamiento
  selectedProduct = null;
}

// Quantity functions
function incrementQuantity() {
  if (productQuantity < 10) {
    productQuantity++;
    updateProductPanel();
  }
}

function decrementQuantity() {
  if (productQuantity > 1) {
    productQuantity--;
    updateProductPanel();
  }
}

function updateProductPanel() {
  document.getElementById("quantityValue").textContent = productQuantity;
  document.querySelector(".add-to-cart-btn").textContent = `Add to Cart - $${(
    selectedProduct.price * productQuantity
  ).toFixed(2)}`;

  // Update button states
  const decrementBtn = document.querySelector(
    ".quantity-selector .quantity-btn:first-child"
  );
  const incrementBtn = document.querySelector(
    ".quantity-selector .quantity-btn:last-child"
  );

  decrementBtn.disabled = productQuantity === 1;
  incrementBtn.disabled = productQuantity === 10;
}

// Add to cart
function addToCart() {
  const existingItem = cart.find((item) => item.id === selectedProduct.id);

  if (existingItem) {
    existingItem.quantity += productQuantity;
  } else {
    cart.push({ ...selectedProduct, quantity: productQuantity });
  }

  updateCartBadge();
  showToast(
    `${productQuantity}x ${selectedProduct.name} added to cart!`,
    "success"
  );
  closeProductPanel();
}

// Update cart badge
function updateCartBadge() {
  const badge = document.getElementById("cartBadge");
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  badge.textContent = totalItems;
  badge.style.display = totalItems > 0 ? "flex" : "none";
}

// Toggle checkout
function toggleCheckout() {
  const panel = document.getElementById("checkoutPanel");
  panel.classList.toggle("active");
  document.body.classList.add("no-scroll"); // Remover la clase para reactivar el desplazamiento
  if (panel.classList.contains("active")) {
    document.querySelector("#panel-close").style.top = "0px";
    renderCheckout();
  }
  document.querySelector("#panel-close").style.top = "0px";
}

// Close checkout
function closeCheckout() {
  document.getElementById("checkoutPanel").classList.remove("active");
  document.querySelector(".panel-close").style.top = "0.5rem";
  document.body.classList.remove("no-scroll"); // Remover la clase para reactivar el desplazamiento
}

// Render checkout
function renderCheckout() {
  const content = document.getElementById("checkoutContent");
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = subtotal > 0 ? 3.99 : 0;
  const total = subtotal + deliveryFee;

  if (cart.length === 0) {
    content.innerHTML = `
            <div class="empty-cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="8" cy="21" r="1"/>
                    <circle cx="19" cy="21" r="1"/>
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                </svg>
                <p style="color: var(--muted-foreground);">Your cart is empty</p>
            </div>
        `;
    return;
  }

  content.innerHTML = `
        <div class="cart-items">
            <h3 style="margin-bottom: 1rem;">Order Summary</h3>
            ${cart
              .map(
                (item) => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${
                  item.name
                }" class="cart-item-image">
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">$${item.price.toFixed(
                          2
                        )} each</div>
                        <div class="cart-item-quantity">
                            <button class="cart-quantity-btn" onclick="updateCartQuantity(${
                              item.id
                            }, ${item.quantity - 1})">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <line x1="5" y1="12" x2="19" y2="12"/>
                                </svg>
                            </button>
                            <span class="cart-quantity-value">${
                              item.quantity
                            }</span>
                            <button class="cart-quantity-btn" onclick="updateCartQuantity(${
                              item.id
                            }, ${item.quantity + 1})">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <line x1="12" y1="5" x2="12" y2="19"/>
                                    <line x1="5" y1="12" x2="19" y2="12"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="cart-item-actions">
                        <div class="cart-item-total">$${(
                          item.price * item.quantity
                        ).toFixed(2)}</div>
                        <button class="remove-btn" onclick="removeFromCart(${
                          item.id
                        })">Remove</button>
                    </div>
                </div>
            `
              )
              .join("")}
        </div>
        
        <div class="price-summary">
            <div class="price-row">
                <span style="color: var(--muted-foreground);">Subtotal</span>
                <span style="font-weight: 500;">$${subtotal.toFixed(2)}</span>
            </div>
            <div class="price-row">
                <span style="color: var(--muted-foreground);">Delivery Fee</span>
                <span style="font-weight: 500;">$${deliveryFee.toFixed(
                  2
                )}</span>
            </div>
            <div class="price-row">
                <span>Total</span>
                <span class="price-total">$${total.toFixed(2)}</span>
            </div>
        </div>
        
        <form class="checkout-form" onsubmit="handleCheckoutSubmit(event)">
            <div class="form-section">
                <h3>Delivery Details</h3>
                <div class="form-group">
                    <label class="form-label" for="name">Full Name</label>
                    <input class="form-input" type="text" id="name" placeholder="John Doe" required>
                </div>
                <div class="form-group">
                    <label class="form-label" for="email">Email</label>
                    <input class="form-input" type="email" id="email" placeholder="john@example.com" required>
                </div>
                <div class="form-group">
                    <label class="form-label" for="phone">Phone Number</label>
                    <input class="form-input" type="tel" id="phone" placeholder="+1 (555) 123-4567" required>
                </div>
                <div class="form-group">
                    <label class="form-label" for="address">Delivery Address</label>
                    <input class="form-input" type="text" id="address" placeholder="123 Main St, Apt 4B" required>
                </div>
            </div>
            
            <div class="form-section">
                <h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                        <line x1="1" y1="10" x2="23" y2="10"/>
                    </svg>
                    Payment Details
                </h3>
                <div class="form-group">
                    <label class="form-label" for="cardNumber">Card Number</label>
                    <input class="form-input" type="text" id="cardNumber" placeholder="1234 5678 9012 3456" maxlength="19" required>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label" for="expiryDate">Expiry Date</label>
                        <input class="form-input" type="text" id="expiryDate" placeholder="MM/YY" maxlength="5" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="cvv">CVV</label>
                        <input class="form-input" type="text" id="cvv" placeholder="123" maxlength="3" required>
                    </div>
                </div>
            </div>
            
            <button type="submit" class="submit-btn">Place Order - $${total.toFixed(
              2
            )}</button>
        </form>
    `;
}

// Update cart quantity
function updateCartQuantity(productId, newQuantity) {
  if (newQuantity === 0) {
    removeFromCart(productId);
  } else {
    const item = cart.find((item) => item.id === productId);
    if (item) {
      item.quantity = newQuantity;
      updateCartBadge();
      renderCheckout();
    }
  }
}

// Remove from cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCartBadge();
  renderCheckout();
}

// Handle checkout submit
function handleCheckoutSubmit(event) {
  event.preventDefault();

  if (cart.length === 0) {
    showToast("Your cart is empty!", "error");
    return;
  }

  showToast(
    "Order placed successfully! Your food will arrive in 30 minutes.",
    "success"
  );

  setTimeout(() => {
    cart = [];
    updateCartBadge();
    closeCheckout();
  }, 1500);
}

// Show toast
function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = `toast ${type} show`;

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}
