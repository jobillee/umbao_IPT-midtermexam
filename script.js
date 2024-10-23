const products = [
  { id: 1, name: "Laptop", price: 1500, stock: 5, image: "laptop.jpg" },
  { id: 2, name: "Headphones", price: 100, stock: 10, image: "headphones.jpg" },
  { id: 3, name: "Keyboard", price: 50, stock: 20, image: "keyboard.jpg" },
];

function displayProducts() {
  const container = document.getElementById("product-container");
  container.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "col-md-4 product-card";
    card.innerHTML = `
              <div class="card shadow-sm rounded">
                  <img src="${product.image}" class="card-img-top" alt="${
      product.name
    }">
                  <div class="card-body">
                      <h5 class="card-title">${product.name}</h5>
                      <p class="card-text"><strong>Price: $${product.price.toFixed()}</strong></p>
                      <p class="card-text"><small class="text-muted">Stock: ${
                        product.stock > 0 ? product.stock : "Out of stock"
                      }</small></p>
                      <a href="#" class="btn btn-primary" ${
                        product.stock === 0 ? "disabled" : ""
                      } onclick="addToCart(${product.id})">Add to Cart</a>
                  </div>
              </div>
          `;
    container.appendChild(card);
  });
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);

  if (product.stock > 0) {
    product.stock -= 1;
    const modalBody = document.getElementById("modalBody");
    modalBody.textContent = `The ${product.name} added to cart successfully.`;

    displayProducts();
  } else {
    const modalBody = document.getElementById("modalBody");
    modalBody.textContent = `Sorry, the ${product.name} you order is out of stock.`;
  }

  const modal = new bootstrap.Modal(document.getElementById("cartModal"));
  modal.show();
}

displayProducts();
