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
        },
        {
            name: "vancho",
            image: "image/vancho.jpg",
            specs: "Classic red velvet with cream cheese frosting",
            weight: ["500g", "1kg"],
            price: {"500g": "₹449", "1kg": "₹799"},
            shops: ["Royal Bakes", "Golden Sweet"]
        },
        {
            name: "plum cake",
            image: "image/plum cake.jpg",
            specs: "Classic red velvet with cream cheese frosting",
            weight: ["500g", "1kg"],
            price: {"500g": "₹449", "1kg": "₹799"},
            shops: ["Royal Bakes", "Golden Sweet"]
        },
        {
            name: "caramel cake",
            image: "image/caramel cake.jpg",
            specs: "Classic red velvet with cream cheese frosting",
            weight: ["500g", "1kg"],
            price: {"500g": "₹449", "1kg": "₹799"},
            shops: ["Royal Bakes", "Golden Sweet"]
        },
        {
            name: "milk cake",
            image: "image/vanila.jpg",
            specs: "Classic red velvet with cream cheese frosting",
            weight: ["500g", "1kg"],
            price: {"500g": "₹449", "1kg": "₹799"},
            shops: ["Royal Bakes", "Golden Sweet"]
        },
        {
            name: "pista choco cake",
            image: "image/pista choco cake.jpg",
            specs: "Classic red velvet with cream cheese frosting",
            weight: ["500g", "1kg"],
            price: {"500g": "₹449", "1kg": "₹799"},
            shops: ["Royal Bakes", "Golden Sweet"]
        },
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
        },
        {
            name: "strawberry",
            image: "image/strawberry.jpg",
            specs: "Nagpur Oranges",
            weight: ["1kg", "2kg"],
            price: {"1kg": "₹129", "2kg": "₹249"},
            shops: ["Orchard Bliss", "The Fruity Stop"]
        },
        {
            name: "avocado",
            image: "image/avocado.jpg",
            specs: "Nagpur Oranges",
            weight: ["1kg", "2kg"],
            price: {"1kg": "₹129", "2kg": "₹249"},
            shops: ["Orchard Bliss", "The Fruity Stop"]
        },
        {
            name: "green grapes",
            image: "image/green grapes.jpg",
            specs: "Nagpur Oranges",
            weight: ["1kg", "2kg"],
            price: {"1kg": "₹129", "2kg": "₹249"},
            shops: ["Orchard Bliss", "The Fruity Stop"]
        },
        {
            name: "pineaple",
            image: "image/pineaple.jpg",
            specs: "Nagpur Oranges",
            weight: ["1kg", "2kg"],
            price: {"1kg": "₹129", "2kg": "₹249"},
            shops: ["Orchard Bliss", "The Fruity Stop"]
        },
    ],
    grocery: [
        {
            name: "Organic Milk",
            image: "image/organic milk.jpg",
            specs: "Fresh farm milk, pasteurized",
            weight: ["500ml", "1L"],
            price: {"500ml": "₹35", "1L": "₹65"},
            shops: ["FMS Mart", "GDS"]
        },
        {
            name: "soft drinks",
            image: "image/soft drinks.jpg",
            specs: "Fresh farm milk, pasteurized",
            weight: ["500ml", "1L"],
            price: {"500ml": "₹35", "1L": "₹65"},
            shops: ["FMS Mart", "GDS"]
        },
        {
            name: "vegitable",
            image: "image/vegitable.jpg",
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
        },
        {
            name: "glutation",
            image: "image/glutation.jpg",
            specs: "Complete emergency medical kit",
            weight: ["Basic", "Premium"],
            price: {"Basic": "₹499", "Premium": "₹999"},
            shops: ["MedPlus", "Apollo Pharmacy"]
        },
        {
            name: "paracetamol",
            image: "image/paracetamol.jpg",
            specs: "Complete emergency medical kit",
            weight: ["Basic", "Premium"],
            price: {"Basic": "₹499", "Premium": "₹999"},
            shops: ["MedPlus", "Apollo Pharmacy"]
        },
        {
            name: "vitaminD3 tablet",
            image: "image/vitaminD3 tablet.jpg",
            specs: "Complete emergency medical kit",
            weight: ["Basic", "Premium"],
            price: {"Basic": "₹499", "Premium": "₹999"},
            shops: ["MedPlus", "Apollo Pharmacy"]
        },
        {
            name: "vitamin tablet",
            image: "image/vitamin tablet.jpg",
            specs: "Complete emergency medical kit",
            weight: ["Basic", "Premium"],
            price: {"Basic": "₹499", "Premium": "₹999"},
            shops: ["MedPlus", "Apollo Pharmacy"]
        },
    ],
    study_material: [
        {
            name: "Complete Study Pack",
            image: "image/study metirial.jpg",
            specs: "Includes notebooks, pens, and basic stationery",
            weight: ["Standard", "Premium"],
            price: {"Standard": "₹299", "Premium": "₹599"},
            shops: ["Academic Books", "Scholar's Corner"]
        },
        {
            name: "pens",
            image: "image/pens.jpg",
            specs: "Includes notebooks, pens, and basic stationery",
            weight: ["Standard", "Premium"],
            price: {"Standard": "₹299", "Premium": "₹599"},
            shops: ["Academic Books", "Scholar's Corner"]
        },
        {
            name: "pencile",
            image: "image/pencile.jpg",
            specs: "Includes notebooks, pens, and basic stationery",
            weight: ["Standard", "Premium"],
            price: {"Standard": "₹299", "Premium": "₹599"},
            shops: ["Academic Books", "Scholar's Corner"]
        },
        
    ],
    dresess: [
        {
            name: "skirt",
            image: "image/skirt.jpg",
            specs: "Includes top,pant and basic stationery",
            weight: ["Standard", "Premium"],
            price: {"Standard": "₹299", "Premium": "₹599"},
            shops: ["dana", "sinus"]
        },
        {
            name: "kurtha",
            image: "image/kurtha set.jpg",
            specs: "Includes belt, and basic stationery",
            weight: ["Standard", "Premium"],
            price: {"Standard": "₹299", "Premium": "₹499"},
            shops: ["luna", "abc shop"]
        },
        {
            name: "code set",
            image: "image/code set.jpg",
            specs: "Includes pant top and basic stationery",
            weight: ["Standard", "Premium"],
            price: {"Standard": "₹80", "Premium": "₹160"},
            shops: ["lulu", "abc shop"]
        },
        {
            name: "jacket",
            image: "image/jaket.jpg",
            specs: "Includes specs, and basic stationery",
            weight: ["Standard", "Premium"],
            price: {"Standard": "₹599", "Premium": "₹999"},
            shops: ["zudip", "abc shop"]
        },
     ],
    readyfood: [
            {
                name: "pizza",
                image: "image/pizza.jpg",
                specs: "Includes top,pant and basic stationery",
                weight: ["Standard", "Premium"],
                price: {"Standard": "₹299", "Premium": "₹599"},
                shops: ["dana", "sinus"]
            },
            {
                name: "burger",
                image: "image/burger.jpg",
                specs: "Includes belt, and basic stationery",
                weight: ["Standard", "Premium"],
                price: {"Standard": "₹60", "Premium": "₹180"},
                shops: ["luna", "abc shop"]
            },
            {
                name: "biriyani",
                image: "image/biriyani.jpg",
                specs: "Includes pant top and basic stationery",
                weight: ["Standard", "Premium"],
                price: {"Standard": "₹80", "Premium": "₹160"},
                shops: ["lulu", "abc shop"]
            },
            {
                name: "unniyappam",
                image: "image/unniyappam.jpg",
                specs: "Includes specs, and basic stationery",
                weight: ["Standard", "Premium"],
                price: {"Standard": "₹10", "Premium": "₹15"},
                shops: ["fms", "ramettante kada"]
            },
         ],
         sportsitems: [
            {
                name: "boot",
                image: "image/boots.jpg",
                specs: "Includes top,pant and basic stationery",
                weight: ["Standard", "Premium"],
                price: {"Standard": "₹115", "Premium": "₹5000"},
                shops: ["sports shop", "abc sports"]
            },
            {
                name: "jersey",
                image: "image/jersey.jpg",
                specs: "Includes belt, and basic stationery",
                weight: ["Standard", "Premium"],
                price: {"Standard": "₹150", "Premium": "₹500"},
                shops: ["sports shop", "abc shop"]
            },
            {
                name: "boxing glove",
                image: "image/boxing.jpg",
                specs: "Includes pant top and basic stationery",
                weight: ["Standard", "Premium"],
                price: {"Standard": "₹600", "Premium": "₹1500"},
                shops: ["lulu", "abc shop"]
            },
            
         ],
         jwellery: [
            {
                name: "necklace",
                image: "image/necklace.jpg",
                specs: "Includes top,pant and basic stationery",
                weight: ["Standard", "Premium"],
                price: {"Standard": "₹115", "Premium": "₹5000"},
                shops: ["sports shop", "abc sports"]
            },
            {
                name: "rings",
                image: "image/rings.jpg",
                specs: "Includes belt, and basic stationery",
                weight: ["Standard", "Premium"],
                price: {"Standard": "₹150", "Premium": "₹500"},
                shops: ["sports shop", "abc shop"]
            },
            {
                name: "bracelate",
                image: "image/bracelate.jpg",
                specs: "Includes pant top and basic stationery",
                weight: ["Standard", "Premium"],
                price: {"Standard": "₹600", "Premium": "₹1500"},
                shops: ["lulu", "abc shop"]
            },
            {
                name: "earrings",
                image: "image/earrings.jpg",
                specs: "Includes pant top and basic stationery",
                weight: ["Standard", "Premium"],
                price: {"Standard": "₹600", "Premium": "₹1500"},
                shops: ["lulu", "abc shop"]
            },
        ],
            furniture: [
                {
                    name: "sofa",
                    image: "image/sofa.jpg",
                    specs: "Includes top,pant and basic stationery",
                    weight: ["Standard", "Premium"],
                    price: {"Standard": "₹10115", "Premium": "₹14000"},
                    shops: ["sports shop", "abc sports"]
                },
                {
                    name: "coffe table",
                    image: "image/coffe table.jpg",
                    specs: "Includes belt, and basic stationery",
                    weight: ["Standard", "Premium"],
                    price: {"Standard": "₹1500", "Premium": "₹5000"},
                    shops: ["sports shop", "abc shop"]
                },
                {
                    name: "bean bag",
                    image: "image/bean bag.jpg",
                    specs: "Includes pant top and basic stationery",
                    weight: ["Standard", "Premium"],
                    price: {"Standard": "₹7000", "Premium": "₹18000"},
                    shops: ["lulu", "abc shop"]
                },
                {
                    name: "tv stand",
                    image: "image/tv stand.jpg",
                    specs: "Includes pant top and basic stationery",
                    weight: ["Standard", "Premium"],
                    price: {"Standard": "₹6000", "Premium": "₹15000"},
                    shops: ["lulu", "abc shop"]
                },
            
         ],
         makeupproducts: [
            {
                name: "primer",
                image: "image/primer.jpg",
                specs: "Includes top,pant and basic stationery",
                weight: ["Standard", "Premium"],
                price: {"Standard": "₹10115", "Premium": "₹14000"},
                shops: ["sports shop", "abc sports"]
            },
            {
                name: "loose powder",
                image: "image/loose powder.jpg",
                specs: "Includes belt, and basic stationery",
                weight: ["Standard", "Premium"],
                price: {"Standard": "₹1500", "Premium": "₹5000"},
                shops: ["sports shop", "abc shop"]
            },
            {
                name: "blush",
                image: "image/blush.jpg",
                specs: "Includes pant top and basic stationery",
                weight: ["Standard", "Premium"],
                price: {"Standard": "₹7000", "Premium": "₹18000"},
                shops: ["lulu", "abc shop"]
            },
            {
                name: "foundation",
                image: "image/foundation.jpg",
                specs: "Includes pant top and basic stationery",
                weight: ["Standard", "Premium"],
                price: {"Standard": "₹6000", "Premium": "₹15000"},
                shops: ["lulu", "abc shop"]
            },
            {
                name: "setting spray",
                image: "image/setting spray.jpg",
                specs: "Includes pant top and basic stationery",
                weight: ["Standard", "Premium"],
                price: {"Standard": "₹6000", "Premium": "₹15000"},
                shops: ["lulu", "abc shop"]
            },
        
     ],
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