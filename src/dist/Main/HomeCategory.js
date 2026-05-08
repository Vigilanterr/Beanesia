async function getProducts() {
  try {
    const response = await fetch("/src/data/Category.json");
    const data = await response.json();
    const products = data.products;

    const container = document.getElementById("products");

    products.forEach(p => {
      const div = document.createElement("div");
      div.className = "h-full";
      div.innerHTML = `
        <div class="bg-[#121212] border border-[#2a2a2a] rounded-xl shadow-md hover:shadow-2xl hover:border-[#D4AF37] transition duration-300 overflow-hidden group flex flex-col h-full">
          
          <div class="relative overflow-hidden shrink-0">
            <img 
              src="${p.image}" 
              alt="${p.nama}" 
              class="w-full h-56 object-cover transition duration-500 group-hover:scale-110"
            />
            <div class="absolute top-4 left-4 bg-[#D4AF37] text-black text-[10px] font-bold px-2 py-1 rounded uppercase tracking-tighter">
              ${p.category}
            </div>
          </div>

          <div class="p-6 flex flex-col grow">
            <div class="flex justify-between items-start mb-2 gap-2">
              <h5 class="text-xl font-bold text-white tracking-tight leading-tight">
                ${p.nama}
              </h5>
              <span class="text-[#D4AF37] font-bold text-sm whitespace-nowrap">
                Rp ${p.harga.toLocaleString('id-ID')}
              </span>
            </div>

            <p class="text-sm text-gray-400 mb-6 line-clamp-3 leading-relaxed">
              ${p.detail}
            </p>

            <div class="mt-auto">
              <a 
                href="/src/pages/detail.html?id=${p.id}"
                class="flex items-center justify-center gap-2 w-full text-xs font-black text-black bg-[#D4AF37] px-4 py-3 rounded-lg hover:bg-[#b8972e] transition-all uppercase tracking-widest"
              >
                Read More
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      `;

      container.appendChild(div);
    });

  } catch (error) {
    console.error("Error loading Beanesia products:", error);
  }
}

async function bestSeller() {
  try {
    const response = await fetch("/src/data/Category.json");
    const data = await response.json();
    const products = data.products;

    const container = document.getElementById("best-products");

    products.filter(p =>{
      const div = document.createElement("div");
      div.className = "h-full";
      div.innerHTML = `
        <div class="bg-[#121212] border border-[#2a2a2a] rounded-xl shadow-md hover:shadow-2xl hover:border-[#D4AF37] transition duration-300 overflow-hidden group flex flex-col h-full">
          
          <div class="relative overflow-hidden shrink-0">
            <img 
              src="${p.image}" 
              alt="${p.nama}" 
              class="w-full h-56 object-cover transition duration-500 group-hover:scale-110"
            />
            <div class="absolute top-4 left-4 bg-[#D4AF37] text-black text-[10px] font-bold px-2 py-1 rounded uppercase tracking-tighter">
              ${p.category}
            </div>
          </div>

          <div class="p-6 flex flex-col grow">
            <div class="flex justify-between items-start mb-2 gap-2">
              <h5 class="text-xl font-bold text-white tracking-tight leading-tight">
                ${p.nama}
              </h5>
              <span class="text-[#D4AF37] font-bold text-sm whitespace-nowrap">
                Rp ${p.harga.toLocaleString('id-ID')}
              </span>
            </div>

            <p class="text-sm text-gray-400 mb-6 line-clamp-3 leading-relaxed">
              ${p.detail}
            </p>

            <div class="mt-auto">
              <a 
                href="/src/pages/Detail.html?id=${p.id}"
                class="flex items-center justify-center gap-2 w-full text-xs font-black text-black bg-[#D4AF37] px-4 py-3 rounded-lg hover:bg-[#b8972e] transition-all uppercase tracking-widest"
              >
                Read More
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      `;

      container.appendChild(div);
    });

  } catch (error) {
    console.error("Error loading Beanesia products:", error);
  }
}

bestSeller();
getProducts();