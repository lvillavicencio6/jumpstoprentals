const products = [
    {
        name: "Red Green & Yellow Package",
        price: "$137",
        image: "../../content images/red-green-yellow-package.png",
        link: "/items/red,_green__and__yellow_package/"
    },
    {
        name: "Blue & Pink Package",
        price: "$137",
        image: "../../content images/blue-pink-package.png",
        link: "/items/blue__and__pink_package/"
    },
    {
        name: "Classic Combo Slide Package",
        price: "$209",
        image: "../../content images/classic-combo-slide-package.png",
        link: "/items/classic_combo_slide_package/"
    },
    {
        name: "Pink Castle Combo Slide Package",
        price: "$209",
        image: "../../content images/pink-castle-combo-slide-package.png",
        link: "/items/pink_castle_combo_slide_package/"
    },
    {
        name: "Tropical Sun Combo Slide Package",
        price: "$209",
        image: "../../content images/tropical-sun-combo-slide-package.png",
        link: "/items/tropical_sun_combo_slide_package/"
    },
    
    // ... add more products as needed
    {
        name: "Blue Green & Yellow Package",
        price: "$147",
        image: "../../content images/blue-green-yellow-package.png",
        link: "/items/blue,_green__and__yellow_package/"
    },
    {
        name: "Balloons Package",
        price: "$147",
        image: "../../content images/balloons-package.png",
        link: "/items/balloons_package/"
    },
    {
        name: "Pink Package",
        price: "$147",
        image: "../../content images/pink-package.png",
        link: "/items/pink_package/"
    },
    {
        name: "Tropical Sun Package",
        price: "$147",
        image: "../../content images/tropical-sun-package.png",
        link: "/items/tropical_sun_package/"
    },
];

const productGrid = document.getElementById('product-grid');

products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <a href="${product.link}" class="cta-button">View Product</a>
    `;
    productGrid.appendChild(productCard);
});