const products = [
    { name: 'Snacks', inStock: true },
    { name: 'Biscuits', inStock: false },
    { name: 'Bottles', inStock: true },
];

function createProductItem(product) {
    const li = document.createElement('li');
    li.className = 'product-item';
    li.classList.add(product.inStock ? 'in-stock' : 'out-of-stock');
    li.innerHTML = `
        <span>${product.name}</span>
        <span class="stock-status">${product.inStock ? 'In Stock' : 'Out of Stock'}</span>
        <button style=B onclick="toggleStockStatus(this)">Toggle Status</button>
    `;
    return li;
}

function renderProductList() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const productItem = createProductItem(product);
        productList.appendChild(productItem);
    });
}

function toggleStockStatus(button) {
    const li = button.parentElement;
    const productName = li.querySelector('span').innerText;
    const product = products.find(p => p.name === productName);
    product.inStock = !product.inStock;
    li.classList.toggle('in-stock');
    li.classList.toggle('out-of-stock');
    li.querySelector('.stock-status').innerText = product.inStock ? 'In Stock' : 'Out of Stock';
}

function addRandomProduct() {
    const productNames = ['Soap', 'Shampoo', 'Nuts', 'Pens'];
    const randomName = productNames[Math.floor(Math.random() * productNames.length)];
    const randomStock = Math.random() > 0.5;
    const newProduct = { name: randomName, inStock: randomStock };
    products.push(newProduct);
    renderProductList();
}

function toggleAllStatuses() {
    products.forEach(product => {
        product.inStock = !product.inStock;
    });
    renderProductList();
}

document.getElementById('addProductBtn').addEventListener('click', addRandomProduct);
document.getElementById('toggleAllBtn').addEventListener('click', toggleAllStatuses);

renderProductList();
