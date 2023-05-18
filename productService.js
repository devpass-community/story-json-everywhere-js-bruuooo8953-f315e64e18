async function getProduct(productId) {
    const apiUrl = `https://fakestoreapi.com/products/${productId}`.then(response => response.json())
    return apiUrl
}

module.exports = getProduct;
