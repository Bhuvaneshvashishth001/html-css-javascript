let container = document.querySelector(".container");
let searchInput = document.querySelector(".input");
let categorySelect = document.getElementById("category");
let btn = document.querySelector("#button");

let allProducts = [];
let filteredProducts = [];
let currentIndex = 0;
let loadedAllCount = 0;
const pageSize = 5;

const renderProducts = (products) => {
  products.forEach((ele) => {
    const { image, title, price, description } = ele;
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img src="${image}" alt="${title}">
      <h5>${title}</h5>
      <strong style="background-color: lightgray;">$${price}</strong>
      <p>${description}</p>
      <button style="background-color: lightblue; padding: 2px;">Add to Cart</button>
    `;
    container.appendChild(div);
  });
};

const updateLoadMoreButton = () => {
  if (currentIndex >= filteredProducts.length) {
    btn.disabled = true;
    btn.textContent = "No more items";
  } else {
    btn.disabled = false;
    btn.textContent = "Load More";
  }
};

const loadMore = () => {
  if (currentIndex >= filteredProducts.length) {
    updateLoadMoreButton();
    return;
  }

  const nextProducts = filteredProducts.slice(currentIndex, currentIndex + pageSize);
  renderProducts(nextProducts);
  currentIndex += nextProducts.length;

  if (categorySelect.value === "All" && !searchInput.value.trim()) {
    loadedAllCount = currentIndex;
  }

  updateLoadMoreButton();
};

const applyFilters = () => {
  const category = categorySelect.value;
  const searchTerm = searchInput.value.trim().toLowerCase();

  filteredProducts = allProducts.filter((item) => {
    let categoryMatch = true;

    if (category !== "All") {
      categoryMatch = item.category.toLowerCase() === category.toLowerCase();
    }

    const textMatch =
      !searchTerm ||
      item.title.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm);

    return categoryMatch && textMatch;
  });

  container.innerHTML = "";

  if (category === "All" && !searchTerm && loadedAllCount > 0) {
    currentIndex = loadedAllCount;
    renderProducts(filteredProducts.slice(0, loadedAllCount));
    updateLoadMoreButton();
  } else {
    currentIndex = 0;
    updateLoadMoreButton();
    loadMore();
  }
};

const init = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      allProducts = data;
      filteredProducts = data;
      loadMore();
    })
    .catch((err) => console.error("Error fetching data:", err));
};

categorySelect.addEventListener("change", applyFilters);
searchInput.addEventListener("input", applyFilters);
btn.addEventListener("click", loadMore);

init();
