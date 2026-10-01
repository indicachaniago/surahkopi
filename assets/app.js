// Surah Kopi - Interactive Ordering, Customizations, Delivery Calculator & QRIS System

const SURAH_CONFIG = {
  phone: "6281234567890", // Ganti dengan nomor WhatsApp resmi Surah Kopi
  shopeeFoodUrl: "https://shopee.co.id/universal-link/now-food",
  instagramUrl: "https://www.instagram.com/surahkopi/",
  openHour: 9,
  closeHour: 21,
  timezoneOffset: 7, // WIB (UTC+7)
  storeLocation: "Surah Kopi, Tangerang Selatan, Banten" // Origin Titik Jemput
};

// Official 8 Menu Items (All @ 18K)
const MENU_ITEMS = [
  {
    id: 1,
    ayat: "Surah Ayat 1",
    name: "Signature Kopi Susu Creamy Aren",
    size: "180ml",
    category: "coffee",
    price: 18000,
    tag: "Best Seller 👑",
    desc: "Kombinasi espresso house blend khas Surah, gula aren murni, dan susu creamy yang pas.",
    img: "assets/menu_ayat_1.jpg",
    hasSugarOption: true
  },
  {
    id: 2,
    ayat: "Surah Ayat 2",
    name: "Americano",
    size: "180ml",
    category: "coffee",
    price: 18000,
    tag: "Classic Bold ☕",
    desc: "Ekstraksi espresso murni dengan aftertaste yang segar, bersih, dan harum.",
    img: "assets/menu_ayat_2.jpg",
    hasSugarOption: true
  },
  {
    id: 3,
    ayat: "Surah Ayat 3",
    name: "Latte (no sugar)",
    size: "180ml",
    category: "coffee",
    price: 18000,
    tag: "Sugar Free 🥛",
    desc: "Espresso mantap berpadu steamed fresh milk lembut tanpa gula, gurih alami.",
    img: "assets/menu_ayat_3.jpg",
    hasSugarOption: false
  },
  {
    id: 4,
    ayat: "Surah Ayat 4",
    name: "Special Cinnamon Coffee",
    size: "180ml",
    category: "coffee",
    price: 18000,
    tag: "Aromatic 🪵",
    desc: "Kopi susu creamy berpadu rempah kayu manis pilihan, hangat dan menenangkan.",
    img: "assets/menu_ayat_4.jpg",
    hasSugarOption: true
  },
  {
    id: 5,
    ayat: "Surah Ayat 5",
    name: "MATCHA LATTE",
    size: "150ml",
    category: "new",
    price: 18000,
    tag: "Menu Baru! 🍵",
    desc: "Matcha otentik dipadukan susu segar lembut, cita rasa earthy yang manis creamy.",
    img: "assets/menu_ayat_5.jpg",
    hasSugarOption: true
  },
  {
    id: 6,
    ayat: "Surah Ayat 6",
    name: "ROASTED MILK TEA",
    size: "250ml",
    category: "new",
    price: 18000,
    tag: "Menu Baru! 🧋",
    desc: "Teh panggang harum karamel dengan racikan susu gurih mantap porsi 250ml.",
    img: "assets/menu_ayat_6.jpg",
    hasSugarOption: true
  },
  {
    id: 7,
    ayat: "Surah Ayat 7",
    name: "Matcha Corn Milk",
    size: "",
    category: "non-coffee",
    price: 18000,
    tag: "Unique Twist 🌽🍵",
    desc: "Harmoni unik antara manisnya sari jagung segar dan sentuhan matcha premium.",
    img: "assets/menu_ayat_7.jpg",
    hasSugarOption: true
  },
  {
    id: 8,
    ayat: "Surah Ayat 8",
    name: "Corn Milk",
    size: "",
    category: "non-coffee",
    price: 18000,
    tag: "Sweet & Creamy 🌽",
    desc: "Minuman sari jagung manis segar yang lembut dan creamy, kaya rasa.",
    img: "assets/menu_ayat_8.jpg",
    hasSugarOption: true
  }
];

// Destination Presets in Tangerang Selatan & Surrounding Area
const DESTINATION_PRESETS = [
  { id: "ciputat", name: "Ciputat / Sekitar Kedai (1.5 km)", dist: 1.5, desc: "Pasar Ciputat, Cipayung, Jl. Menjangan" },
  { id: "ciputat_timur", name: "Ciputat Timur / UIN / Pondok Ranji (3.0 km)", dist: 3.0, desc: "Kampus UIN, Stasiun Pondok Ranji, Rempoa" },
  { id: "pamulang", name: "Pamulang / Unpam (4.5 km)", dist: 4.5, desc: "Unpam, Pamulang Square, Benda Baru" },
  { id: "bintaro_9", name: "Bintaro Sektor 7 - 9 (5.5 km)", dist: 5.5, desc: "Bintaro Xchange, Fresh Market Sek. 9" },
  { id: "pondok_aren", name: "Pondok Aren / Jurangmangu (6.0 km)", dist: 6.0, desc: "Pondok Betung, Jurangmangu Timur/Barat" },
  { id: "bintaro_1_5", name: "Bintaro Sektor 1 - 5 (7.0 km)", dist: 7.0, desc: "Bintaro Plaza, Bintaro Sektor 1-5" },
  { id: "lebak_bulus", name: "Lebak Bulus / Cilandak Jaksel (8.0 km)", dist: 8.0, desc: "Stasiun MRT Lebak Bulus, Poins Mall" },
  { id: "bsd_serpong", name: "BSD City / Serpong (8.5 km)", dist: 8.5, desc: "AEON Mall BSD, The Breeze, Pasar Modern BSD" },
  { id: "setu_muncul", name: "Setu / Puspitek / Muncul (9.0 km)", dist: 9.0, desc: "Kawasan Puspitek, Muncul, Babakan" },
  { id: "alam_sutera", name: "Alam Sutera / Serpong Utara (12.0 km)", dist: 12.0, desc: "Mall @ Alam Sutera, Living World" },
  { id: "gading_serpong", name: "Gading Serpong / Kelapa Dua (14.0 km)", dist: 14.0, desc: "Summarecon Mall Serpong, Scientia" },
  { id: "custom", name: "Atur Jarak Manual (KM)", dist: 5.0, desc: "Tentukan jarak KM secara mandiri" }
];

// Cart State
let cartItems = [];
let pendingCustomItem = null;
let customModalQty = 1;
let currentCustomDistance = 5.0;

// Format Currency
function formatRupiah(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
  }).format(number);
}

// Calculate Official GoSend & GrabExpress Instant Rates
function calculateDeliveryFee(deliveryType, distanceKm) {
  if (deliveryType === "pickup") return 0;
  
  const d = Math.max(1, distanceKm);
  if (deliveryType === "gosend") {
    // GoSend Instant Jabodetabek: Min 0-4km = Rp 15.000, per km berikutnya = Rp 2.800
    if (d <= 4) return 15000;
    return Math.round((15000 + ((d - 4) * 2800)) / 1000) * 1000;
  } else if (deliveryType === "grab") {
    // GrabExpress Instant Jabodetabek: Min 0-4km = Rp 14.000, per km berikutnya = Rp 2.600
    if (d <= 4) return 14000;
    return Math.round((14000 + ((d - 4) * 2600)) / 1000) * 1000;
  }
  return 0;
}

// Operational Status Indicator
function checkStoreStatus() {
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const wibTime = new Date(utc + (3600000 * SURAH_CONFIG.timezoneOffset));
  const currentHour = wibTime.getHours();

  const isOpen = currentHour >= SURAH_CONFIG.openHour && currentHour < SURAH_CONFIG.closeHour;
  
  const statusBadges = document.querySelectorAll(".store-status-badge");
  statusBadges.forEach(badge => {
    if (isOpen) {
      badge.innerHTML = `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border border-neutral-700 bg-neutral-900 text-white">
        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>BUKA (09.00 - 21.00 WIB)</span>
      </span>`;
    } else {
      badge.innerHTML = `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border border-neutral-800 bg-neutral-950 text-neutral-400">
        <span class="w-2 h-2 rounded-full bg-rose-500"></span>
        <span>TUTUP SEMENTARA</span>
      </span>`;
    }
  });
}

// Render Menu Cards
function renderMenu(filter = "all") {
  const container = document.getElementById("menu-container");
  if (!container) return;

  const filteredItems = filter === "all" 
    ? MENU_ITEMS 
    : filter === "new"
      ? MENU_ITEMS.filter(item => item.category === "new")
      : filter === "coffee"
        ? MENU_ITEMS.filter(item => item.category === "coffee")
        : MENU_ITEMS.filter(item => item.category === "non-coffee" || item.category === "new");

  container.innerHTML = filteredItems.map(item => {
    return `
      <div class="menu-card flex flex-col justify-between group">
        <div>
          <!-- Vibrant Image Container -->
          <div class="drink-photo-wrapper h-56 w-full">
            <img src="${item.img}" alt="${item.name}" loading="lazy" class="drink-photo">
            
            <!-- Badges -->
            <div class="absolute top-3 left-3 flex flex-col gap-1.5 items-start z-10">
              <span class="badge-ayat px-3 py-1 rounded-lg text-xs">
                ${item.ayat}
              </span>
              <span class="badge-tag px-2 py-0.5 rounded shadow">
                ${item.tag}
              </span>
            </div>

            <!-- Volume Tag -->
            ${item.size ? `
              <span class="absolute bottom-3 right-3 px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-black/80 text-white border border-white/20 backdrop-blur-md z-10">
                ${item.size}
              </span>
            ` : ''}
          </div>

          <!-- Content Details -->
          <div class="p-5">
            <div class="flex items-start justify-between gap-2 mb-2">
              <h3 class="font-heading font-bold text-lg text-white group-hover:text-neutral-200 transition-colors leading-snug">
                ${item.name}
              </h3>
              <div class="text-right">
                <span class="text-white font-mono font-extrabold text-base block leading-none">18K</span>
                <span class="text-[10px] text-neutral-400 font-mono">Rp 18.000</span>
              </div>
            </div>
            <p class="text-neutral-400 text-xs leading-relaxed font-light mt-1">${item.desc}</p>
          </div>
        </div>

        <!-- Action Bottom Bar -->
        <div class="p-5 pt-0">
          <div class="flex items-center gap-2 pt-3 border-t border-neutral-900">
            <button onclick="openCustomizeModal(${item.id})" class="flex-1 py-2.5 px-4 rounded-xl btn-primary-white text-xs font-heading font-extrabold tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"></path></svg>
              <span>+ Atur & Pesan</span>
            </button>
            <button onclick="quickOrderWA(${item.id})" title="Pesan cepat via WhatsApp" class="p-2.5 rounded-xl border border-neutral-800 hover:border-white text-neutral-300 hover:text-white transition-all">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Filter Tab Switcher
function filterMenu(category, element) {
  document.querySelectorAll(".menu-tab-btn").forEach(btn => {
    btn.classList.remove("bg-white", "text-black", "font-bold");
    btn.classList.add("bg-neutral-950", "text-neutral-400", "border-neutral-800");
  });

  element.classList.remove("bg-neutral-950", "text-neutral-400", "border-neutral-800");
  element.classList.add("bg-white", "text-black", "font-bold");

  renderMenu(category);
}

// ================= CUSTOMIZE MODAL LOGIC =================
function openCustomizeModal(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  pendingCustomItem = item;
  customModalQty = 1;

  document.getElementById("custom-modal-img").src = item.img;
  document.getElementById("custom-modal-ayat").textContent = item.ayat;
  document.getElementById("custom-modal-name").textContent = item.name;
  document.getElementById("custom-modal-price").textContent = formatRupiah(item.price);
  document.getElementById("custom-modal-qty").textContent = customModalQty;
  document.getElementById("custom-modal-note").value = "";

  // Sugar Options
  const sugarContainer = document.getElementById("sugar-options-container");
  if (item.hasSugarOption) {
    sugarContainer.classList.remove("hidden");
    document.querySelector('input[name="optSugar"][value="Normal Sugar (100%)"]').checked = true;
  } else {
    sugarContainer.classList.add("hidden");
  }

  // Packaging selection (Default Cup Standar)
  const packagingCup = document.querySelector('input[name="optPackaging"][value="Cup Standar (Siap Minum)"]');
  if (packagingCup) packagingCup.checked = true;

  // Ice options (Default Normal Ice)
  const iceNormal = document.querySelector('input[name="optIce"][value="Normal Ice"]');
  if (iceNormal) iceNormal.checked = true;

  // Trigger packaging state to show/hide ice options
  handlePackagingChange();
  updateCustomizeTotal();

  const modal = document.getElementById("customize-modal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeCustomizeModal() {
  const modal = document.getElementById("customize-modal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

// When packaging changes: Botol Ready to Go has NO ice option!
function handlePackagingChange() {
  const selectedPackaging = document.querySelector('input[name="optPackaging"]:checked')?.value || "Cup Standar (Siap Minum)";
  const iceContainer = document.getElementById("ice-options-container");
  const bottleNotice = document.getElementById("bottle-ice-notice");

  if (selectedPackaging.includes("Botol Ready to Go")) {
    // Hide Ice options for Botol Ready to Go
    if (iceContainer) iceContainer.classList.add("hidden");
    if (bottleNotice) bottleNotice.classList.remove("hidden");
  } else {
    // Show Ice options for Cup Standar
    if (iceContainer) iceContainer.classList.remove("hidden");
    if (bottleNotice) bottleNotice.classList.add("hidden");
  }
}

function changeCustomizeQty(delta) {
  customModalQty = Math.max(1, customModalQty + delta);
  document.getElementById("custom-modal-qty").textContent = customModalQty;
  updateCustomizeTotal();
}

function updateCustomizeTotal() {
  if (!pendingCustomItem) return;
  const total = pendingCustomItem.price * customModalQty;
  document.getElementById("custom-modal-total-btn").textContent = `+ Tambah ke Pesanan • ${formatRupiah(total)}`;
}

// Confirm Add to Cart
function confirmAddToCart() {
  if (!pendingCustomItem) return;

  const packaging = document.querySelector('input[name="optPackaging"]:checked')?.value || "Cup Standar (Siap Minum)";
  
  const sugar = pendingCustomItem.hasSugarOption
    ? (document.querySelector('input[name="optSugar"]:checked')?.value || "Normal Sugar")
    : "No Sugar (Default)";

  // If Botol Ready to Go, ice is automatically NO ICE (cold chilled in sealed bottle)
  let ice = "Normal Ice";
  if (packaging.includes("Botol Ready to Go")) {
    ice = "Tanpa Es (Chilled Botol Segar)";
  } else {
    ice = document.querySelector('input[name="optIce"]:checked')?.value || "Normal Ice";
  }

  const note = document.getElementById("custom-modal-note").value.trim();

  cartItems.push({
    id: Date.now() + Math.random(),
    menuId: pendingCustomItem.id,
    ayat: pendingCustomItem.ayat,
    name: pendingCustomItem.name,
    size: pendingCustomItem.size,
    price: pendingCustomItem.price,
    qty: customModalQty,
    sugar: sugar,
    ice: ice,
    packaging: packaging,
    note: note
  });

  closeCustomizeModal();
  updateCartBadge();
  showToast(`${pendingCustomItem.ayat} berhasil ditambahkan!`);
}

// Remove or update cart items
function removeCartItem(uniqueId) {
  cartItems = cartItems.filter(item => item.id !== uniqueId);
  updateCartBadge();
  openCartModal();
}

function updateCartItemQty(uniqueId, delta) {
  const item = cartItems.find(i => i.id === uniqueId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cartItems = cartItems.filter(i => i.id !== uniqueId);
  }
  updateCartBadge();
  openCartModal();
}

// Quick Order 1 Item via WA
function quickOrderWA(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  const sizeText = item.size ? ` (${item.size})` : '';
  const text = encodeURIComponent(
    `Halo Surah Kopi! 👋\nSaya mau pesan:\n• 1x [${item.ayat}] ${item.name}${sizeText} (Rp 18.000)\n\nMohon info pengiriman via GoSend / GrabExpress / Ambil Sendiri. Terima kasih!`
  );
  window.open(`https://wa.me/${SURAH_CONFIG.phone}?text=${text}`, "_blank");
}

// Update Cart Badge & Floating Bar
function updateCartBadge() {
  const totalCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const badges = document.querySelectorAll(".cart-count-badge");
  const cartBar = document.getElementById("floating-cart-bar");

  badges.forEach(b => {
    b.textContent = totalCount;
    if (totalCount > 0) {
      b.classList.remove("hidden");
    } else {
      b.classList.add("hidden");
    }
  });

  if (cartBar) {
    if (totalCount > 0) {
      cartBar.classList.remove("translate-y-32", "opacity-0");
      cartBar.classList.add("translate-y-0", "opacity-100");
    } else {
      cartBar.classList.add("translate-y-32", "opacity-0");
      cartBar.classList.remove("translate-y-0", "opacity-100");
    }
  }

  // Update total in floating cart
  const cartTotalAmount = document.getElementById("cart-total-amount");
  if (cartTotalAmount) {
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
    cartTotalAmount.textContent = formatRupiah(subtotal);
  }
}

// ================= CART & DELIVERY ESTIMATOR MODAL =================
function populateDestinationDropdown() {
  const select = document.getElementById("delivery-destination-select");
  if (!select) return;

  select.innerHTML = DESTINATION_PRESETS.map(preset => {
    return `<option value="${preset.id}">${preset.name} &bull; ${preset.desc}</option>`;
  }).join("");
}

function handleDestinationChange() {
  const select = document.getElementById("delivery-destination-select");
  const customKmInput = document.getElementById("custom-km-container");
  if (!select) return;

  if (select.value === "custom") {
    if (customKmInput) customKmInput.classList.remove("hidden");
  } else {
    if (customKmInput) customKmInput.classList.add("hidden");
    const preset = DESTINATION_PRESETS.find(p => p.id === select.value);
    if (preset) {
      currentCustomDistance = preset.dist;
    }
  }
  calculateOrderTotals();
}

function handleManualKmInput(val) {
  const km = parseFloat(val);
  if (!isNaN(km) && km > 0) {
    currentCustomDistance = km;
    calculateOrderTotals();
  }
}

function openCartModal() {
  const modal = document.getElementById("cart-modal");
  const list = document.getElementById("cart-modal-items");
  if (!modal || !list) return;

  populateDestinationDropdown();

  if (cartItems.length === 0) {
    list.innerHTML = `
      <div class="text-center py-8 text-neutral-500 font-mono text-xs">
        Keranjang masih kosong.<br>
        <span class="text-white mt-1 block">Silakan pilih varian Surah Ayat di katalog menu.</span>
      </div>
    `;
    document.getElementById("cart-subtotal").textContent = "Rp 0";
    document.getElementById("cart-delivery-fee").textContent = "Rp 0";
    document.getElementById("cart-grand-total").textContent = "Rp 0";
  } else {
    list.innerHTML = cartItems.map(item => {
      const subtotal = item.price * item.qty;
      return `
        <div class="py-3 border-b border-neutral-900 flex items-start justify-between gap-3">
          <div class="flex-1">
            <div class="flex items-center gap-1.5 mb-0.5">
              <span class="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded bg-neutral-900 border border-neutral-800 text-neutral-300">${item.ayat}</span>
              <h4 class="font-bold text-white text-xs">${item.name}</h4>
            </div>
            
            <div class="text-[11px] text-neutral-400 font-mono space-y-0.5 mt-1">
              <div>&bull; ${item.sugar} &bull; ${item.ice}</div>
              <div>&bull; ${item.packaging}</div>
              ${item.note ? `<div class="text-neutral-300 italic">&bull; Catatan: "${item.note}"</div>` : ''}
            </div>

            <div class="text-xs font-mono font-bold text-white mt-1.5">
              ${formatRupiah(item.price)} &times; ${item.qty} = <span class="text-neutral-200">${formatRupiah(subtotal)}</span>
            </div>
          </div>

          <div class="flex items-center gap-1">
            <button onclick="updateCartItemQty(${item.id}, -1)" class="w-6 h-6 rounded bg-neutral-900 hover:bg-neutral-800 text-neutral-300 flex items-center justify-center font-mono text-xs">-</button>
            <span class="w-5 text-center font-mono font-bold text-xs text-white">${item.qty}</span>
            <button onclick="updateCartItemQty(${item.id}, 1)" class="w-6 h-6 rounded bg-neutral-900 hover:bg-neutral-800 text-neutral-300 flex items-center justify-center font-mono text-xs">+</button>
            <button onclick="removeCartItem(${item.id})" title="Hapus menu" class="w-6 h-6 rounded hover:bg-rose-950 text-neutral-500 hover:text-rose-400 flex items-center justify-center ml-1">
              &times;
            </button>
          </div>
        </div>
      `;
    }).join("");

    calculateOrderTotals();
  }

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeCartModal() {
  const modal = document.getElementById("cart-modal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

// Calculate Order Totals with Official GoSend / Grab Formulas
function calculateOrderTotals() {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const deliveryType = document.querySelector('input[name="deliveryMethod"]:checked')?.value || "gosend";

  // Determine Distance
  const destSelect = document.getElementById("delivery-destination-select");
  let distanceKm = 1.5;
  let destinationName = "Ciputat / Sekitar Kedai";

  if (destSelect) {
    if (destSelect.value === "custom") {
      const customInput = document.getElementById("custom-km-input");
      distanceKm = parseFloat(customInput?.value) || currentCustomDistance || 5.0;
      destinationName = `Tujuan Kustom (${distanceKm} km)`;
    } else {
      const preset = DESTINATION_PRESETS.find(p => p.id === destSelect.value);
      if (preset) {
        distanceKm = preset.dist;
        destinationName = preset.name;
      }
    }
  }

  // Calculate Rate
  const deliveryFee = calculateDeliveryFee(deliveryType, distanceKm);
  const grandTotal = subtotal + deliveryFee;

  // Update Elements
  const subtotalEl = document.getElementById("cart-subtotal");
  const feeEl = document.getElementById("cart-delivery-fee");
  const totalEl = document.getElementById("cart-grand-total");
  const formulaInfoEl = document.getElementById("delivery-formula-info");

  if (subtotalEl) subtotalEl.textContent = formatRupiah(subtotal);
  if (feeEl) feeEl.textContent = deliveryType === "pickup" ? "Gratis (Pick-up)" : formatRupiah(deliveryFee);
  if (totalEl) totalEl.textContent = formatRupiah(grandTotal);

  if (formulaInfoEl) {
    if (deliveryType === "pickup") {
      formulaInfoEl.textContent = "Pengambilan mandiri di kedai Surah Kopi (Tanpa ongkir).";
    } else if (deliveryType === "gosend") {
      formulaInfoEl.textContent = `Tarif GoSend: Tarif dasar min. 0-4km = Rp 15.000, km berikutnya Rp 2.800/km (Jarak: ${distanceKm} km).`;
    } else if (deliveryType === "grab") {
      formulaInfoEl.textContent = `Tarif GrabExpress: Tarif dasar min. 0-4km = Rp 14.000, km berikutnya Rp 2.600/km (Jarak: ${distanceKm} km).`;
    }
  }

  return { subtotal, deliveryFee, grandTotal, deliveryType, distanceKm, destinationName };
}

// Toggle Delivery Method (GoSend, Grab, Pickup)
function handleDeliveryChange() {
  const deliveryType = document.querySelector('input[name="deliveryMethod"]:checked')?.value || "gosend";
  const addressContainer = document.getElementById("address-field-container");
  const destinationContainer = document.getElementById("destination-selector-container");

  if (deliveryType === "pickup") {
    if (addressContainer) addressContainer.classList.add("hidden");
    if (destinationContainer) destinationContainer.classList.add("hidden");
  } else {
    if (addressContainer) addressContainer.classList.remove("hidden");
    if (destinationContainer) destinationContainer.classList.remove("hidden");
  }

  calculateOrderTotals();
}

// ================= QRIS MODAL LOGIC (FIXED CLOSE & WORKS ANYTIME) =================
function openQrisModal() {
  const { subtotal, deliveryFee, grandTotal } = calculateOrderTotals();
  
  const amountEl = document.getElementById("qris-modal-amount");
  const breakdownEl = document.getElementById("qris-subtotal-breakdown");

  if (cartItems.length > 0) {
    if (amountEl) amountEl.textContent = formatRupiah(grandTotal);
    if (breakdownEl) breakdownEl.textContent = `Minuman: ${formatRupiah(subtotal)} + Ongkir: ${formatRupiah(deliveryFee)}`;
  } else {
    if (amountEl) amountEl.textContent = "Nominal Sesuai Pesanan";
    if (breakdownEl) breakdownEl.textContent = "Silakan masukkan nominal sesuai pesanan Anda";
  }

  const modal = document.getElementById("qris-modal");
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }
}

function closeQrisModal() {
  const modal = document.getElementById("qris-modal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

// ================= WHATSAPP ORDER CHECKOUT =================
function checkoutWhatsApp() {
  if (cartItems.length === 0) {
    showToast("Keranjang Anda masih kosong!");
    return;
  }

  const { subtotal, deliveryFee, grandTotal, deliveryType, distanceKm, destinationName } = calculateOrderTotals();
  const customerName = document.getElementById("cust-name")?.value.trim() || "Pelanggan";
  const customerAddress = document.getElementById("cust-address")?.value.trim() || "";
  const globalNote = document.getElementById("cust-global-note")?.value.trim() || "-";

  if (deliveryType !== "pickup" && !customerAddress) {
    alert("Silakan masukkan Alamat Lengkap Pengiriman untuk kurir GoSend / Grab.");
    document.getElementById("cust-address")?.focus();
    return;
  }

  const courierName = deliveryType === "gosend" ? "🛵 GoSend Instant (Gojek)" : deliveryType === "grab" ? "🛵 GrabExpress Instant (Grab)" : "🛍️ Ambil Sendiri di Kedai (Pick-up)";

  let lines = [];
  cartItems.forEach((item, idx) => {
    const sub = item.price * item.qty;
    let details = [];
    if (item.sugar) details.push(item.sugar);
    if (item.ice) details.push(item.ice);
    if (item.packaging) details.push(item.packaging);
    if (item.note) details.push(`Catatan: ${item.note}`);

    lines.push(
      `${idx + 1}. *[${item.ayat}] ${item.name}* x${item.qty} = ${formatRupiah(sub)}\n   ↳ ${details.join(" | ")}`
    );
  });

  const msg = 
`*PESANAN SURAH KOPI (ONLINE)* ☕
(Tangerang Selatan - All Menu @ 18K)

Nama Pemesan: ${customerName}
Metode Pengiriman: ${courierName}
${deliveryType !== "pickup" ? `Titik Asal: ${SURAH_CONFIG.storeLocation}\nWilayah Tujuan: ${destinationName} (~${distanceKm} km)\nAlamat Lengkap: ${customerAddress}\n` : ''}Catatan: ${globalNote}

*Rincian Menu:*
${lines.join("\n")}

----------------------------
Subtotal Minuman: ${formatRupiah(subtotal)}
Estimasi Ongkir (${deliveryType === "gosend" ? "GoSend" : deliveryType === "grab" ? "Grab" : "Pick-up"}): ${deliveryType === "pickup" ? "Rp 0 (Pick-up)" : formatRupiah(deliveryFee)}
*TOTAL PEMBAYARAN: ${formatRupiah(grandTotal)}*
----------------------------
Metode Bayar: QRIS (SURAH KOPI - BEVERAGES / ID1026576702777)

Mohon konfirmasi pesanan dan proses pengiriman kurir. Terima kasih! 🙏`;

  const waUrl = `https://wa.me/${SURAH_CONFIG.phone}?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, "_blank");
  closeCartModal();
}

// Simple Toast Notification
function showToast(message) {
  let toast = document.getElementById("toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-notification";
    toast.className = "fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-white text-black font-mono font-bold px-4 py-2.5 rounded-full shadow-2xl transition-all duration-300 pointer-events-none opacity-0 translate-y-4 text-xs flex items-center gap-2 border border-neutral-300";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg class="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
    <span>${message}</span>
  `;
  toast.classList.remove("opacity-0", "translate-y-4");
  toast.classList.add("opacity-100", "translate-y-0");

  setTimeout(() => {
    toast.classList.remove("opacity-100", "translate-y-0");
    toast.classList.add("opacity-0", "translate-y-4");
  }, 2200);
}

// Keydown listener to close modals with ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeCustomizeModal();
    closeCartModal();
    closeQrisModal();
  }
});

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  checkStoreStatus();
  renderMenu("all");
  updateCartBadge();
  populateDestinationDropdown();
  setInterval(checkStoreStatus, 60000);
});
