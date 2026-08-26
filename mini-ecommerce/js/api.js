const API_URL = "https://fakestoreapi.com/products";

async function getProducts() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        return await response.json();

    } catch (error) {
        console.error(error);

        showToast("Unable to load products.");

        return [];
    }
}

async function getProduct(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`);

        if (!response.ok) {
            throw new Error("Product not found");
        }

        return await response.json();

    } catch (error) {
        console.error(error);

        showToast("Unable to load product.");

        return null;
    }
}