const cartContainer =
    document.getElementById("cartContainer");

function renderCart() {

    const cart = getCart();

    if (cart.length === 0) {

        cartContainer.innerHTML = `

            <div class="empty-cart">

                <h2>Your cart is empty</h2>

                <p>
                    Add some products to your cart first.
                </p>

                <br>

                <a href="index.html" class="btn">
                    Start Shopping
                </a>

            </div>
        `;

        return;
    }

    let subtotal = 0;

    const itemsHTML = cart.map(item => {

        const itemTotal =
            item.price * item.quantity;

        subtotal += itemTotal;

        return `

            <div class="cart-item">

                <img
                    src="${item.image}"
                    alt="${item.title}"
                >

                <div>

                    <h3>${item.title}</h3>

                    <span class="cart-price">
                        $${item.price.toFixed(2)}
                    </span>

                    <div class="cart-controls">

                        <button
                            onclick="changeQuantity(${item.id}, -1)"
                        >
                            −
                        </button>

                        <strong>
                            ${item.quantity}
                        </strong>

                        <button
                            onclick="changeQuantity(${item.id}, 1)"
                        >
                            +
                        </button>

                        <button
                            class="remove-btn"
                            onclick="removeItem(${item.id})"
                        >
                            Remove
                        </button>

                    </div>

                </div>

                <div class="cart-price">
                    $${itemTotal.toFixed(2)}
                </div>

            </div>
        `;

    }).join("");

    cartContainer.innerHTML = `

        <div class="cart-layout">

            <div>
                ${itemsHTML}
            </div>

            <aside class="cart-summary">

                <h2>Order Summary</h2>

                <div class="summary-row">
                    <span>Subtotal</span>
                    <strong>
                        $${subtotal.toFixed(2)}
                    </strong>
                </div>

                <div class="summary-row">
                    <span>Shipping</span>
                    <strong>Free</strong>
                </div>

                <div class="summary-row summary-total">
                    <span>Total</span>
                    <span>
                        $${subtotal.toFixed(2)}
                    </span>
                </div>

                <br>

                <a
                    href="checkout.html"
                    class="btn full-btn"
                >
                    Proceed to Checkout
                </a>

            </aside>

        </div>
    `;
}

function changeQuantity(id, change) {

    const cart = getCart();

    const item = cart.find(
        product => product.id === id
    );

    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {

        const updatedCart =
            cart.filter(product => product.id !== id);

        saveCart(updatedCart);

    } else {

        saveCart(cart);

    }

    renderCart();
}

function removeItem(id) {

    const cart =
        getCart().filter(item => item.id !== id);

    saveCart(cart);

    showToast("Product removed.");

    renderCart();
}

renderCart();