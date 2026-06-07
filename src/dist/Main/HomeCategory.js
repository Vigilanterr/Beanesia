    let produkList = [];

    async function init() {
      const res = await fetch("/src/data/Category.json");
      const data = await res.json();
      produkList = data.products;
      tampil('Semua');
      bestSeller();
      akunNavbar();
    }

    function kartu(p, best) {
      const label = best
        ? `<div class="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase flex items-center gap-1"><iconify-icon icon="mdi:fire" width="12"></iconify-icon> Best Seller</div>`
        : `<div class="absolute top-3 left-3 bg-black/70 border border-[#D4AF37]/50 text-[#D4AF37] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">${p.category}</div>`;
      const terjual = best ? `<p class="text-xs text-gray-400 mb-3 border-t border-[#2a2a2a] pt-3"><span class="text-white font-semibold">${p.sold}</span> Terjual</p>` : '';
      return `
        <div class="bg-[#111111] border border-[#2a2a2a] rounded-2xl overflow-hidden flex flex-col group hover:border-[#D4AF37] transition duration-300">
          <div class="relative h-52 overflow-hidden shrink-0">
            <img src="${p.image}" alt="${p.nama}" class="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            ${label}
          </div>
          <div class="p-4 flex flex-col grow">
            <div class="flex justify-between items-start mb-2 gap-2">
              <h5 class="text-sm font-bold leading-tight">${p.nama}</h5>
              <span class="text-[#D4AF37] font-bold text-sm whitespace-nowrap">Rp ${p.harga.toLocaleString('id-ID')}</span>
            </div>
            <p class="text-xs text-gray-400 mb-3 line-clamp-2">${p.detail}</p>
            ${terjual}
            <a href="/src/pages/Detail.html?id=${p.id}" class="mt-auto text-center text-xs font-bold text-black bg-[#D4AF37] py-2.5 rounded-xl hover:bg-[#b8972e] transition uppercase">Beli Sekarang</a>
          </div>
        </div>`;
    }

    function tampil(kat) {
      const el = document.getElementById("products-grid");
      const list = kat === 'Semua' ? produkList : produkList.filter(p => p.category === kat);
      el.innerHTML = list.map(p => kartu(p, false)).join('');
    }

    function bestSeller() {
      const el = document.getElementById("best-seller");
      el.innerHTML = produkList.filter(p => p.sold > 300).map(p => kartu(p, true)).join('');
    }

    function filter(kat, btn) {
      document.querySelectorAll('.btn-filter').forEach(b => {
        b.classList.remove('bg-[#D4AF37]', 'text-black');
        b.classList.add('text-[#D4AF37]');
      });
      btn.classList.add('bg-[#D4AF37]', 'text-black');
      btn.classList.remove('text-[#D4AF37]');
      tampil(kat);
    }

    function akunNavbar() {
      const user = JSON.parse(sessionStorage.getItem("user") || "null");
      if (user) {
        document.getElementById("nama-pengguna").textContent = user.name || "";
        document.getElementById("foto-navbar").src = user.foto || "https://api.dicebear.com/9.x/adventurer/svg?seed=default";
      }
    }

    init();

  // FUNGSI PENCARIAN PRODUK
function cariProduk() {
  const kataKunci = document.getElementById("input-pencarian").value.toLowerCase();
  const wadah = document.getElementById("wadah-rekomendasi");

  wadah.innerHTML = "";

  if (kataKunci === "") {
    wadah.classList.add("hidden");
    return; 
  }

  // PERBAIKAN: Ubah dataSemuaProduk menjadi produkList sesuai variabelmu di atas
  const hasilPencarian = produkList.filter(produk => 
    produk.nama.toLowerCase().includes(kataKunci)
  );

  if (hasilPencarian.length > 0) {
    const produkDibatasi = hasilPencarian.slice(0, 5);
    
    produkDibatasi.forEach(p => {
      wadah.innerHTML += `
        <a href="/src/pages/Detail.html?id=${p.id}" class="flex items-center gap-3 p-3 hover:bg-gray-50 transition border-b border-gray-100 last:border-0">
          <img src="${p.image}" class="w-10 h-10 rounded-md object-cover bg-gray-200" />
          <div>
            <p class="text-sm font-bold text-gray-800">${p.nama}</p>
            <p class="text-xs text-[#C4A46C] font-semibold">Rp ${p.harga.toLocaleString('id-ID')}</p>
          </div>
        </a>
      `;
    });
  } else {
    wadah.innerHTML = `
      <p class="p-4 text-center text-sm text-gray-500 font-medium">
        gak tersedia
      </p>
    `;
  }

  wadah.classList.remove("hidden");
}

// FUNGSI TAMBAHAN: Menutup dropdown saat klik di luar
document.addEventListener("click", function(event) {
  const kotakSearch = document.getElementById("input-pencarian");
  const wadah = document.getElementById("wadah-rekomendasi");
  
  // PERBAIKAN: Tambahkan if (wadah) untuk memastikan HTML-nya memang ada sebelum diproses
  if (wadah && event.target !== kotakSearch) {
    wadah.classList.add("hidden");
  }
});