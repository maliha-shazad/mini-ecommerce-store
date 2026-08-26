let allProducts = [];

const productsGrid = document.getElementById("productsGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");

async function loadProducts() {

    allProducts = await getProducts();

    createCategories();

    displayProducts(allProducts);
}

function createCategories() {

    const categories = [
        ...new Set(allProducts.map(product => product.category))
    ];

    categories.forEach(category => {

        const option = document.createElement("option");

        option.value = category;
        option.textContent = category;

        categoryFilter.appendChild(option);
    });
}

function displayProducts(products) {

    productsGrid.innerHTML = "";

    if (products.length === 0) {

        productsGrid.innerHTML = `
            <div class="loader">
                No products found.
            </div>
        `;

        return;
    }

    products.forEach(product => {

        const card = document.createElement("article");

        card.className = "product-card";

        card.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.title}"
                class="product-image"
            >

            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3 class="product-title">
                    ${product.title}
                </h3>

                <div class="product-rating">
                    ⭐ ${product.rating.rate}
                    (${product.rating.count})
                </div>

                <div class="product-price">
                    $${product.price.toFixed(2)}
                </div>

                <div class="card-buttons">

                    <a
                        href="product.html?id=${product.id}"
                        class="btn secondary-btn"
                    >
                        Details
                    </a>

                    <button
                        class="btn add-cart"
                        data-id="${product.id}"
                    >
                        Add Cart
                    </button>

                </div>

            </div>
        `;

        productsGrid.appendChild(card);
    });

    document.querySelectorAll(".add-cart").forEach(button => {

        button.addEventListener("click", () => {

            const productId = Number(button.dataset.id);

            const product = allProducts.find(
                item => item.id === productId
            );

            addToCart(product);

        });

    });
}

function filterProducts() {

    const searchValue =
        searchInput.value.toLowerCase().trim();

    const category =
        categoryFilter.value;

    let filtered = allProducts.filter(product => {

        const matchesSearch =
            product.title
                .toLowerCase()
                .includes(searchValue);

        const matchesCategory =
            category === "all" ||
            product.category === category;

        return matchesSearch && matchesCategory;
    });

    const sortValue = sortFilter.value;

    if (sortValue === "low") {

        filtered.sort((a, b) => a.price - b.price);

    } else if (sortValue === "high") {

        filtered.sort((a, b) => b.price - a.price);

    } else if (sortValue === "rating") {

        filtered.sort(
            (a, b) => b.rating.rate - a.rating.rate
        );
    }

    displayProducts(filtered);
}

searchInput.addEventListener(
    "input",
    filterProducts
);

categoryFilter.addEventListener(
    "change",
    filterProducts
);

sortFilter.addEventListener(
    "change",
    filterProducts
);

loadProducts();