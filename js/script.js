// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }
});

// Modal Box
// Buka modal
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    const modal = document.querySelector(
      btn.getAttribute('href')
    );

    if (modal) {
      modal.style.display = 'flex';
    }
  });
});

// Tutup modal
const closeIcons = document.querySelectorAll('.close-icon');

closeIcons.forEach((icon) => {
  icon.addEventListener('click', (e) => {
    e.preventDefault();

    icon.closest('.modal').style.display = 'none';
  });
});

// Klik di luar modal
window.addEventListener('click', (e) => {
  document.querySelectorAll('.modal').forEach((modal) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

const cart = [];
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    const productCard = this.closest(".product-card");
    const name = productCard.querySelector("h3").textContent;
    const image = productCard.querySelector("img").src;
    const priceText =
      productCard.querySelector(".product-price").childNodes[0].textContent;
    const cleanedPrice = priceText.replace("IDR", "").replace("K", "").trim();
    const price = parseInt(cleanedPrice) * 1000;
    const itemExist = cart.find((item) => item.name === name);
    if (itemExist) {
      itemExist.qty++;
    } else {
      cart.push({
        name,
        image,
        price,
        qty: 1,
      });
    }
    renderCart();
  });
});
function renderCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const badge = document.querySelector(".quantity-badge");
  cartItems.innerHTML = "";
  let total = 0;
  let totalQty = 0;
  cart.forEach((item, index) => {
    total += item.price * item.qty;
    totalQty += item.qty;
    cartItems.innerHTML += `
<div class="cart-item">
 
${item.image}
 
<div class="item-detail">
 
<h3>${item.name}</h3>
 
<div class="item-price">
${item.qty} x IDR ${item.price.toLocaleString("id-ID")}
</div>
 
</div>
 
<button
class="remove-item-btn"
onclick="removeItem(${index})">
Hapus
</button>
 
</div>
`;
  });
  cartTotal.textContent = "IDR " + total.toLocaleString("id-ID");
  badge.textContent = totalQty;
}
function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}
