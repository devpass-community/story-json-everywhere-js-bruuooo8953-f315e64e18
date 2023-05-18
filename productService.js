async function getProduct(productId) {
    const apiUrl = `https://fakestoreapi.com/products/${productId}`;
    const product = apiUrl.json({})
    return product
}

module.exports = getProduct;
