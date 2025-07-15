const products = [
  {
    name: "Wireless Headphones",
    category: "tech",
    price: 149,
    rating: 4.6,
    image: "headset.avif",
    sale: true
  },
  {
    name: "Smartwatch",
    category: "tech",
    price: 199,
    rating: 4.8,
    image: "smartwatch.webp",
    sale: false
  },
  {
    name: "Gaming Keyboard",
    category: "tech",
    price: 110,
    rating: 4.6,
    image: "keyboard.webp",
    sale: false
  },
  {
    name: "Leather Jacket",
    category: "apparel",
    price: 85,
    rating: 4.5,
    image: "jack.webp",
    sale: true
  },
  {
    name: "Running Shoes",
    category: "apparel",
    price: 120,
    rating: 4.6,
    image: "shoe.png",
    sale: false
  },
  {
    name: "Yoga Pants",
    category: "apparel",
    price: 60,
    rating: 4.4,
    image: "pant.webp",
    sale: false
  },
  {
    name: "Table Lamp",
    category: "home",
    price: 45,
    rating: 4.2,
    image: "lamb.jpg",
    sale: false
  },
  {
    name: "Wall Clock",
    category: "home",
    price: 35,
    rating: 4.1,
    image: "clock.jpg",
    sale: true
  },
  {
    name: "Blender Max",
    category: "home",
    price: 99,
    rating: 4.8,
    image: "blender.avif",
    sale: true
  },
  {
    name: "Sofa Cushion",
    category: "home",
    price: 25,
    rating: 4.0,
    image: "sofa.jpeg",
    sale: true
  },
  {
    name: "Smartphone",
    category: "tech",
    price: 299,
    rating: 4.5,
    image: "phone.jpg",
    sale: true
  },
  {
    name: "Cotton Hoodie",
    category: "apparel",
    price: 45,
    rating: 4.6,
    image: "hoodie.jpg",
    sale: false
  }
];

const container = document.getElementById("productContainer");
const categoryButtons = document.querySelectorAll("button[data-category]");
const sortSelect = document.getElementById("sortSelect");
const searchInput = document.getElementById("searchInput");

function renderProducts(list) {
  container.innerHTML = "";
  list.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.image}" alt="${p.name}" />
        <div class="details">
          <h3>${p.name}</h3>
          <p class="price">₹${p.price}</p>
          <p class="rating">⭐ ${p.rating}</p>
          ${p.sale ? '<span class="badge">Sale</span>' : ""}
        </div>
      </div>
    `;
  });
}

function getActiveCategory() {
  const activeBtn = document.querySelector("button.active");
  return activeBtn ? activeBtn.dataset.category : "all";
}

function applySorting(list) {
  let sorted = [...list];
  switch (sortSelect.value) {
    case "priceAsc":
      sorted.sort((a, b) => a.price - b.price);
      break;
    case "priceDesc":
      sorted.sort((a, b) => b.price - a.price);
      break;
    case "ratingDesc":
      sorted.sort((a, b) => b.rating - a.rating);
      break;
  }
  return sorted;
}

function filterProducts(category) {
  const searchTerm = searchInput.value.toLowerCase();
  let filtered = category === "all" ? products : products.filter(p => p.category === category);
  if (searchTerm) {
    filtered = filtered.filter(p => p.name.toLowerCase().includes(searchTerm));
  }
  renderProducts(applySorting(filtered));
}

categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    categoryButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    filterProducts(btn.dataset.category);
  });
});

sortSelect.addEventListener("change", () => {
  filterProducts(getActiveCategory());
});

searchInput.addEventListener("input", () => {
  filterProducts(getActiveCategory());
});

document.querySelector("button[data-category='all']").classList.add("active");
renderProducts(products);
