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
  if (item && item.qty > 1) {
    item.qty--;
  }
  saveCart();
}

function renderCart() {
  let container = document.getElementById("cart-items");
  let totalEl = document.getElementById("cart-total");

  if (!container) return;

  container.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    container.innerHTML = "<p>Keranjang kosong 🛒</p>";
    totalEl.innerText = "";
    return;
  }

  cart.forEach(item => {
    total += item.price * item.qty;

    container.innerHTML += `
      <div class="flex items-center gap-4 border-b pb-4 mb-4">
        <img src="${item.image}"
             class="w-20 h-20 object-cover rounded">

        <div class="flex-1">
          <h4 class="font-semibold">${item.title}</h4>
          <p>Rp ${item.price.toLocaleString("id-ID")}</p>

          <div class="flex items-center gap-2 mt-2">
            <button onclick="decreaseQty(${item.id})"
              class="px-2 bg-gray-300 rounded">-</button>

            <span>${item.qty}</span>

            <button onclick="increaseQty(${item.id})"
              class="px-2 bg-gray-300 rounded">+</button>
          </div>
        </div>

        <button onclick="removeFromCart(${item.id})"
          class="text-red-500 font-bold">X</button>
      </div>
      <button 
      class="px-2 bg-amber-400 rounded font-bold w-20 "
      onclick="alert('berhasil memesan')"
      >Pesan</button>
    `;
  });

  totalEl.innerText =
    "Total: Rp " + total.toLocaleString("id-ID");
}

renderCart();