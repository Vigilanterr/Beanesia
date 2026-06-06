let dataProduk = [];

async function jalankanToko() {
  const res = await fetch("/src/data/Category.json");
  const data = await res.json();
  dataProduk = data.products;
  tampilkanProduk('Semua');
  tampilkanBestSeller();
}

function cetakProduct(p, best) {
  const label = best
    ? `<div class="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase flex items-center gap-1"><iconify-icon icon="mdi:fire" width="14"></iconify-icon> Best Seller</div>`
    : `<div class="absolute top-4 left-4 bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#D4AF37]/50 text-[#D4AF37] text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">${p.category}</div>`;

  const terjual = best
    ? `<div class="mb-4 text-xs text-gray-400 border-t border-[#2a2a2a] pt-4"><span class="text-white font-semibold">${p.sold}</span> Terjual</div>`
    : ``;

  return `
    <div class="bg-gradient-to-b from-[#1c1c1c] to-[#0a0a0a] border border-[#2a2a2a] rounded-2xl shadow-lg hover:border-[#D4AF37] transition-all duration-300 overflow-hidden flex flex-col h-full relative group">
      <div class="relative h-60 overflow-hidden shrink-0">
        <img src="${p.image}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
        <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-90"></div>
        ${label}
      </div>
      <div class="p-6 flex flex-col grow relative z-10 -mt-8">
        <div class="bg-[#151515] p-4 rounded-xl border border-[#222] mb-4">
          <h5 class="text-lg font-bold text-white truncate">${p.nama}</h5>
          <span class="text-[#D4AF37] font-black text-lg">Rp ${p.harga.toLocaleString('id-ID')}</span>
        </div>
        <p class="text-sm text-gray-400 mb-4 line-clamp-2">${p.detail}</p>
        ${terjual}
        <a href="/src/pages/Login.html" class="mt-auto flex justify-center w-full text-xs font-bold text-black bg-gradient-to-r from-[#D4AF37] to-[#e8c86b] px-4 py-3.5 rounded-xl uppercase hover:opacity-80 transition-all">
          Beli sekarang
        </a>
      </div>
    </div>
  `;
}

function tampilkanProduk(kategori) {
  const p = document.getElementById("products");
  p.innerHTML = "";
  const list = kategori === 'Semua' ? dataProduk : dataProduk.filter(x => x.category === kategori);
  list.forEach(x => p.innerHTML += cetakProduct(x, false));
}

function tampilkanBestSeller() {
  const best = document.getElementById("best-seller");
  best.innerHTML = "";
  dataProduk.filter(p => p.sold > 300).forEach(p => best.innerHTML += cetakProduct(p, true));
}

function filterCategory(kategori, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.remove('bg-[#D4AF37]', 'text-black');
    b.classList.add('text-[#D4AF37]');
  });

  btn.classList.add('bg-[#D4AF37]', 'text-black');
  btn.classList.remove('text-[#D4AF37]');
  tampilkanProduk(kategori);
}

jalankanToko();