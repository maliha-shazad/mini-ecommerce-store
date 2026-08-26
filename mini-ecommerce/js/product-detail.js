const productDetails =
    document.getElementById("productDetails");

const params =
    new URLSearchParams(window.location.search);

const productId =
    params.get("id");

async function loadProductDetails() {

    if (!productId) {

        productDetails.innerHTML = `
            <div class="empty-cart">
                <h2>Product not found</h2>
                <a href="index.html" class="btn">
                    Back to Products
                </a>
            </div>
        `;

        return;
    }

    const product =
        await getProduct(productId);

    if (!product) return;

    productDetails.innerHTML = `

        <div class="product-detail-grid">

            <div>
                <img
                    src="${product.image}"
                    alt="${product.title}"
                    class="detail-image"
                >
            </div>

            <div class="detail-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h1>${product.title}</h1>

                <div class="product-rating">
                    ⭐ ${product.rating.rate}
                    (${product.rating.count} reviews)
                </div>

                <div class="detail-price">
                    $${product.price.toFixed(2)}
                </div>

                <p class="detail-description">
                    ${product.description}
                </p>

                <div class="quantity-control">

                    <button id="minus">−</button>

                    <span id="quantity">1</span>

                    <button id="plus">+</button>

                </div>

                <button
                    id="addProduct"
                    class="btn"
                >
                    Add to Cart
                </button>

            </div>

        </div>
    `;

    let quantity = 1;

    const quantityElement =
        document.getElementById("quantity");

    document.getElementById("minus")
        .addEventListener("click", () => {

            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
            }

        });

    document.getElementById("plus")
        .addEventListener("click", () => {

            quantity++;
            quantityElement.textContent = quantity;

        });

    document.getElementById("addProduct")
        .addEventListener("click", () => {

            addToCart(product, quantity);

        });
}

loadProductDetails();