// Get the product ID from the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Fetch the product details using the product ID
fetch(`https://dummyjson.com/products/${productId}`)
    .then(response => response.json())
    .then(product => {
        // Populate the detail page with the product data
        document.getElementById('product-image').src = product.thumbnail;
        document.getElementById('product-image').alt = product.title;
        document.getElementById('product-title').textContent = product.title;
        document.getElementById('product-price').textContent = `$ ${product.price.toLocaleString('id-ID')}`;
    })
    .catch(error => console.error('Error fetching product details:', error));
