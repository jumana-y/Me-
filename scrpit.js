const productsData = {
    cakes: [
        {
            name: "Black Forest Cake",
            image: "image/black forest.jpg",
            specs: "Rich chocolate cake with cherries and cream",
            weight: ["500g", "1kg"],
            price: {"500g": "₹399", "1kg": "₹699"},
            shops: ["Cake Studio", "Freddo Cakes"]
        },
        {
            name: "Red Velvet Cake",
            image: "image/red velvet.jpg",
            specs: "Classic red velvet with cream cheese frosting",
            weight: ["500g", "1kg"],
            price: {"500g": "₹449", "1kg": "₹799"},
            shops: ["Royal Bakes", "Golden Sweet"]
        }
    ],
    fruits: [
        {
            name: "Fresh Apple Pack",
            image: "image/fresh apple pack.jpg",
            specs: "Imported Shimla Apples",
            weight: ["1kg", "2kg"],
            price: {"1kg": "₹199", "2kg": "₹379"},
            shops: ["Fresh Harvest", "Juicy Bites"]
        },
        {
            name: "Sweet Orange Pack",
            image: "image/sweet orange pack.jpg",
            specs: "Nagpur Oranges",
            weight: ["1kg", "2kg"],
            price: {"1kg": "₹129", "2kg": "₹249"},
            shops: ["Orchard Bliss", "The Fruity Stop"]
        }
    ],
    grocery: [
        {
            name: "Organic Milk",
            image: "image/organic milk.jpg",
            specs: "Fresh farm milk, pasteurized",
            weight: ["500ml", "1L"],
            price: {"500ml": "₹35", "1L": "₹65"},
            shops: ["FMS Mart", "GDS"]
        }
    ],
    medicines: [
        {
            name: "First Aid Kit",
            image: "image/first aid kit.jpg",
            specs: "Complete emergency medical kit",
            weight: ["Basic", "Premium"],
            price: {"Basic": "₹499", "Premium": "₹999"},
            shops: ["MedPlus", "Apollo Pharmacy"]
        }
    ],
    study_material: [
        {
            name: "Complete Study Pack",
            image: "image/study metirial.jpg",
            specs: "Includes notebooks, pens, and basic stationery",
            weight: ["Standard", "Premium"],
            price: {"Standard": "₹299", "Premium": "₹599"},
            shops: ["Academic Books", "Scholar's Corner"]
        }
    ]
};

let currentCategory = '';
let selectedProduct = null;

function showProducts(category) {
    currentCategory = category;
    const productList = document.getElementById("productList");
    const productContainer = document.getElementById("products");

    productContainer.innerHTML = "";
    document.body.classList.add("no-scroll"); // Lock background scrolling
    productList.classList.remove("hidden");

    if (productsData[category]) {
        productsData[category].forEach(product => {
            productContainer.innerHTML += `
                <div class="product" onclick="showProductDetails('${category}', '${product.name}')">
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>Starting from ${product.price[product.weight[0]]}</p>
                </div>`;
        });
    } else {
        productContainer.innerHTML = "<p>No products available.</p>";
    }
}

// Function to close the overlay
function closeProductList() {
    document.getElementById("productList").classList.add("hidden");
    document.body.classList.remove("no-scroll"); // Unlock background scrolling
}


function showProductDetails(category, productName) {
    const modal = document.getElementById("productModal");
    const product = productsData[category].find(p => p.name === productName);
    selectedProduct = product;

    document.getElementById("productImage").src = product.image;
    document.getElementById("productName").textContent = product.name;
    document.getElementById("productSpecs").textContent = product.specs;

    const weightsContainer = document.getElementById("productWeights");
    weightsContainer.innerHTML = product.weight.map(w => 
        `<div class="weight-option" onclick="selectWeight(this, '${w}')">${w} - ${product.price[w]}</div>`
    ).join('');

    modal.style.display = "block";
}

function selectWeight(element, weight) {
    document.querySelectorAll('.weight-option').forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
}

function showAvailableShops() {
    if (!selectedProduct) return;
    
    const modal = document.getElementById("productModal");
    modal.style.display = "none";
    
    const shopList = document.getElementById("shopList");
    shopList.classList.remove("hidden");

    const shopContainer = document.getElementById("shops");
    shopContainer.innerHTML = selectedProduct.shops.map(shop => 
        `<div class="shop">${shop} <button onclick="order('${shop}')">Order</button></div>`
    ).join('');
}

function order(shop) {
    alert(`Order placed at ${shop}! Choose Pickup or Delivery.`);
}

function searchProduct() {
    const query = document.getElementById("searchBox").value.toLowerCase();
    document.querySelectorAll(".product").forEach(item => {
        item.style.display = item.textContent.toLowerCase().includes(query) ? "inline-block" : "none";
    });
}

// Modal close functionality
document.querySelector('.close').onclick = function() {
    document.getElementById('productModal').style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}