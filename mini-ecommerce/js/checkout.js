const checkoutSummary =
    document.getElementById("checkoutSummary");

const checkoutForm =
    document.getElementById("checkoutForm");

function renderCheckout() {

    const cart = getCart();

    if (cart.length === 0) {

        checkoutSummary.innerHTML = `

            <h2>Your Cart Is Empty</h2>

            <p>
                Please add products before checkout.
            </p>

            <br>

            <a href="index.html" class="btn">
                Browse Products
            </a>
        `;

        checkoutForm.style.display = "none";

        return;
    }

    let total = 0;

    const productsHTML = cart.map(item => {

        const itemTotal =
            item.price * item.quantity;

        total += itemTotal;

        return `

            <div class="checkout-product">

                <img
                    src="${item.image}"
                    alt="${item.title}"
                >

                <div>

                    <strong>
                        ${item.title}
                    </strong>

                    <small>
                        ${item.quantity} ×
                        $${item.price.toFixed(2)}
                    </small>

                </div>

            </div>
        `;

    }).join("");

    checkoutSummary.innerHTML = `

        <h2>Order Summary</h2>

        ${productsHTML}

        <div class="summary-row summary-total">

            <span>Total</span>

            <span>
                $${total.toFixed(2)}
            </span>

        </div>
    `;
}

checkoutForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const cart = getCart();

        if (cart.length === 0) {
            showToast("Your cart is empty.");
            return;
        }

        alert(
            "Order placed successfully! Thank you for shopping with ShopEase."
        );

        localStorage.removeItem("cart");

        window.location.href = "index.html";
    }
);

renderCheckout();