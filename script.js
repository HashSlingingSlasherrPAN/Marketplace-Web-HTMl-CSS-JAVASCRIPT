// Fetch products from the fake API and inject them into the section
// In your script.js for index.html or shop.html
fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => {
        const productsContainer = document.querySelector('.products');
        data.products.forEach(product => {
            const productCard = `
            <a href="detail.html?id=${product.id}">
                <div class="card">
                    <div>
                        <img src="${product.thumbnail}" alt="${product.title}">
                    </div>
                    <p>${product.title}</p>
                    <h3>$ ${product.price.toLocaleString('id-ID')}</h3>
                </div>
            </a>`;
            
            productsContainer.innerHTML += productCard;
        });
    })
    .catch(error => console.error('Error fetching products:', error));
