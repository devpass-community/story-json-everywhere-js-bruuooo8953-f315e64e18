async function getProduct(productId) {
    const apiUrl = await `https://fakestoreapi.com/products/${productId}`.then(response => response.json())
    return apiUrl
}

module.exports = getProduct;
