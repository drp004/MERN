let categories = ["Women's Clothes", "Jwellery", "Men's Clothes"]

// Data About Products
let data = [
  [{
    "id": 1,
    "title": "Snowboard Jacket Winter Coats",
    "price": 56.99,
    "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    "rating": {
      "rate": 2.6,
      "count": 235
    }
  },
  {
    "id": 2,
    "title": "Windbreaker Striped Raincoats",
    "price": 39.99,
    "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    "rating": {
      "rate": 3.8,
      "count": 679
    }
  },
  {
    "id": 3,
    "title": "Opna Short Sleeve Moisture",
    "price": 7.95,
    "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    "rating": {
      "rate": 4.5,
      "count": 146
    }
  }],
  [{
    "id": 1,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 70
    }
  },
  {
    "id": 2,
    "title": "White Gold Plated Princess",
    "price": 9.99,
    "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 3,
      "count": 400
    }
  },
  {
    "id": 3,
    "title": "Pierced Owl Rose Gold Rings",
    "price": 10.99,
    "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 1.9,
      "count": 100
    }
  }],
  [{
   "id": 1,
   "title": "Slim Fit T-Shirts ",
   "price": 22.3,
   "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
   "category": "men's clothing",
   "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
   "rating": {
     "rate": 4.1,
     "count": 259
   }
   }, 
   {
   "id": 2,
   "title": "Cotton Jacket",
   "price": 55.99,
   "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
   "category": "men's clothing",
   "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
   "rating": {
     "rate": 4.7,
     "count": 500
   }
   },
    {
    "id": 3,
    "title": "Slim Fit Sweat-Shirt",
    "price": 15.99,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "rating": {
        "rate": 2.1,
        "count": 430
    }
   }
]
]

// functions and logics
const cart = [];

function addToCart(productName, price, image) {
    cart.push([productName, price, image]);
    alert(productName + ' has been added to your cart!');
    localStorage.setItem('cart', JSON.stringify(cart));
}

function goToCartPage() {
    window.location.href = 'cart.html';
}

function loadCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    

    
    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cartItems.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <h3>${item[0]}, ${item[1]}</h3>
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartContainer.appendChild(cartItem);
        });
    }
}

function removeFromCart(index) {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    location.reload();
}

function goToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Load Data Dynamically

//  Selecting Main for Adding dynamic content
let main = document.querySelector("main");
let k = 0

for (let c of categories) {
    
    // Creating new div for each category
    let category = document.createElement("div");
    category.setAttribute("class", "category");
    category.setAttribute("id", c);
    main.append(category)
    
    // Adding Category header for each category
    let heading = document.createElement("h2");
    heading.textContent = c;
    category.append(heading);

    //  Creating product-card container
    let pcontainer = document.createElement("div");
    pcontainer.setAttribute("class", "product-container");
    category.append(pcontainer);

    for (let i=0; i<3; i++) {
        // Creating card for each product
        let pcard = document.createElement("div");
        pcard.setAttribute("class", "product-card");
        pcontainer.append(pcard);

        // Adding product image
        let image = document.createElement("img");
        image.setAttribute("src", data[k][i].image);
        pcard.append(image);

        // Adding product Name
        let product = document.createElement("h3");
        product.textContent = data[k][i].title;
        pcard.append(product);

        // Adding product Price
        let price = document.createElement("p");
        price.textContent = "$ " + data[k][i].price;
        pcard.append(price);

        // Adding Add to cart button
        let btn = document.createElement("button");
        btn.setAttribute("onclick", `addToCart('${data[k][i].title}', '${data[k][i].price}', '${data[k][i].image}')`);
        btn.textContent = "Add to Cart";
        pcard.append(btn);
    }
    k++;
}
