async function detailProduct() {
  try {
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get("id"));

    const response = await fetch("/src/data/Category.json");
    const data = await response.json();
    const products = data.products;

    const currentProduct = products.find(p => p.id === productId);
    const detailContainer = document.getElementById("products");

    if (!currentProduct) {
      detailContainer.innerHTML = `
        <div class="flex justify-center items-center h-64">
          <h2 class="text-white text-2xl font-medium tracking-wide">Produk tidak ditemukan.</h2>
        </div>`;
      return;
    }

    detailContainer.innerHTML = `
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div class="relative group rounded-3xl overflow-hidden bg-[#1a1a1a] p-3 border border-white/5 max-w-md mx-auto w-full">
            <img src="${currentProduct.image}" alt="${currentProduct.nama}" class="w-full h-[280px] md:h-[320px] object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105">
            <div class="absolute top-6 left-6 flex flex-col gap-2">
                <span class="bg-[#D4AF37] text-black text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider w-max shadow-lg">
                  ${currentProduct.category}
                </span>
            </div>
        </div>
        
        <div class="flex flex-col justify-center">
            <h1 class="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 tracking-tight">${currentProduct.nama}</h1>
            
            <div class="flex flex-col mb-8">
                <div class="flex items-center gap-4 mb-2">
                    <p class="text-[#D4AF37] text-3xl font-bold tracking-tight">Rp ${currentProduct.harga.toLocaleString('id-ID')}</p>
              
                </div>
                <p class="text-gray-500 text-sm italic tracking-wide">Harga yang tertera untuk kemasan ${currentProduct.ukuran}</p>
            </div>
            
            <p class="text-gray-400 text-lg leading-relaxed mb-10 text-justify">${currentProduct.detail}</p>
            
                <div class="flex flex-col sm:flex-row gap-4 items-center">
                <div class="flex items-center border border-white/10 rounded-xl bg-[#121212] overflow-hidden h-14 w-full sm:w-32 shrink-0">
                    <button id="kurang" class="px-4 text-gray-400 hover:text-white hover:bg-white/5 transition-colors h-full flex items-center justify-center">-</button>
                    <input id="input" type="text" value="1" class="w-full text-center bg-transparent text-white font-semibold focus:outline-none" readonly>
                    <button id="tambah" class="px-4 text-gray-400 hover:text-white hover:bg-white/5 transition-colors h-full flex items-center justify-center">+</button>
                </div>
          
                <button id="add-to-cart"
                class="flex-1 flex items-center justify-center gap-3 w-full h-14 bg-[#D4AF37] text-black rounded-xl font-bold uppercase tracking-wider hover:bg-[#C5A028] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:-translate-y-1">
                  Tambah ke Keranjang
                </button>
            </div>
        </div>
      </div>
      
    `;
const add = document.getElementById("tambah");
const remove = document.getElementById("kurang");
const inputJumlah = document.getElementById("input");

add.addEventListener("click", function () {
  let jumlahAwal = parseInt(inputJumlah.value);
  inputJumlah.value = jumlahAwal + 1;
});

remove.addEventListener("click", function () {
  let jumlahAwal = parseInt(inputJumlah.value);

  if (jumlahAwal > 1) {
    inputJumlah.value = jumlahAwal - 1;
  } else {
    alert("Jumlah pemesanan minimal 1 ")
  }
});
const btnCart = document.getElementById("add-to-cart");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

btnCart.addEventListener("click", function () {
  let qty = parseInt(inputJumlah.value);

  let existing = cart.find(item => item.id === currentProduct.id);

  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id: currentProduct.id,
      title: currentProduct.nama,
      price: currentProduct.harga,
      image: currentProduct.image,
      qty: qty
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Berhasil ditambahkan ke keranjang");

  
});

    const relatedProducts = products.filter(p => p.category === currentProduct.category && p.id !== productId);
    const relatedContainer = document.getElementById("related-products");
    
    if (relatedProducts.length === 0) {
        relatedContainer.innerHTML = `
          <div class="col-span-full text-center py-12 text-gray-500 font-medium">
            Belum ada rekomendasi kopi lain di kategori ini.
          </div>`;
        return;
    }

    relatedContainer.innerHTML = relatedProducts.map(p => `
      <div class="group bg-[#121212] border border-white/5 rounded-2xl p-4 transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-[#1a1a1a] flex flex-col h-full cursor-pointer" onclick="window.location.href='detail.html?id=${p.id}'">
        <div class="relative overflow-hidden rounded-xl mb-5 aspect-4/3">
          <img src="${p.image}" alt="${p.nama}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
          <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
          <span class="absolute top-3 left-3 bg-[#121212]/80 backdrop-blur-sm border border-white/10 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">
            ${p.ukuran}
          </span>
        </div>
        <div class="flex flex-col grow">
          <h5 class="text-lg font-semibold text-white tracking-wide leading-snug mb-2 line-clamp-2">${p.nama}</h5>
          <span class="text-[#D4AF37] font-bold text-lg mt-auto mb-5">Rp ${p.harga.toLocaleString('id-ID')}</span>
          <button class="w-full text-sm font-bold text-white border border-white/10 py-3 rounded-xl group-hover:bg-[#D4AF37] group-hover:text-black group-hover:border-[#D4AF37] transition-all duration-300 tracking-widest uppercase">
            Lihat 
          </button>
        </div>
      </div>
    `).join('');

  } catch (error) {
    console.error(error);
  }
}

detailProduct();