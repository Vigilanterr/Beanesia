let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
}

function increaseQty(id) {
  let item = cart.find(item => item.id === id);
  if (item) item.qty++;
  saveCart();
}

function decreaseQty(id) {
  let item = cart.find(item => item.id === id);
  if (item && item.qty > 1) item.qty--;
  saveCart();
}

function toggleCheck(id, checked) {
  let item = cart.find(item => item.id === id);
  if (item) {
    item.checked = checked;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateTotalPrice();
}

function updateTotalPrice() {
  let total = 0;
  const totalEl = document.getElementById("cart-total");
  const subtotalEl = document.getElementById("subtotal-price");

  cart.forEach(item => {
    if (item.checked !== false) {
      total += item.price * item.qty;
    }
  });

  if (totalEl) {
    totalEl.innerText = "Rp " + total.toLocaleString("id-ID");
  }
  if (subtotalEl) {
    subtotalEl.innerText = "Rp " + total.toLocaleString("id-ID");
  }
}

function renderCart() {
  let container = document.getElementById("cart-items");
  let totalEl = document.getElementById("cart-total");
  let subtotalEl = document.getElementById("subtotal-price");

  if (!container) return;

  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="bg-white rounded-2xl border border-gray-100 p-12 text-center shadow-sm">
        <i class="fa-solid fa-basket-shopping text-5xl text-gray-300 mb-4"></i>
        <p class="text-gray-500 font-medium">Keranjang belanja Anda masih kosong</p>
        <a href="/src/pages/home.html#products" class="mt-4 inline-block text-sm bg-amber-100 text-amber-700 font-semibold px-4 py-2 rounded-xl hover:bg-amber-200 transition">Mulai Belanja</a>
      </div>
    `;
    if (totalEl) totalEl.innerText = "Rp 0";
    if (subtotalEl) subtotalEl.innerText = "Rp 0";
    return;
  }

  cart.forEach(item => {
    if (item.checked === undefined) {
      item.checked = true;
    }

    const isChecked = item.checked ? "checked" : "";

    container.innerHTML += `
      <div class="bg-white rounded-2xl p-4 md:p-5 border border-gray-100 shadow-sm flex items-center gap-4 transition hover:shadow-md">
        <div class="flex items-center">
          <input type="checkbox" class="w-5 h-5 accent-amber-500 rounded cursor-pointer transition" data-id="${item.id}" ${isChecked} onchange="toggleCheck(${item.id}, this.checked)">
        </div>
        
        <div class="w-20 h-20 md:w-24 md:h-24 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0 border border-gray-100">
          <img src="${item.image}" class="w-full h-full object-cover">
        </div>
        
        <div class="flex-1 min-w-0">
          <h4 class="font-bold text-gray-900 text-sm md:text-base truncate hover:text-amber-500 transition cursor-pointer">${item.title}</h4>
          <p class="text-amber-600 font-extrabold text-base mt-1">Rp ${item.price.toLocaleString("id-ID")}</p>
          
          <div class="flex items-center gap-1 mt-3 bg-gray-50 border border-gray-200 rounded-lg w-max p-0.5">
            <button onclick="decreaseQty(${item.id})" class="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-gray-200 rounded-md font-bold text-sm transition">-</button>
            <span class="w-8 text-center text-sm font-semibold text-gray-800">${item.qty}</span>
            <button onclick="increaseQty(${item.id})" class="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-gray-200 rounded-md font-bold text-sm transition">+</button>
          </div>
        </div>
        
        <button onclick="removeFromCart(${item.id})" class="text-gray-400 hover:text-red-500 p-2 rounded-xl hover:bg-red-5 tracks transition self-start md:self-center">
          <i class="fa-regular fa-trash-can text-lg"></i>
        </button>
      </div>
    `;
  });

  updateTotalPrice();
}

renderCart();