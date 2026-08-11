const products = [
    {
        name: "Toddler Bounce House Package",
        price: "$140",
        image: "../../content images/red-green-yellow-package.png",
        link: "/items/red,_green__and__yellow_package/"
    },
    {
        name: "Pink Toddler Bounce House Package",
        price: "$140",
        image: "../../content images/blue-pink-package.png",
        link: "/items/blue__and__pink_package/"
    },
    {
        name: "Balloons Package",
        price: "$220",
        image: "../../content images/minislidepackage.png",
        link: "/items/Balloons_Package/"
    },
    {
        name: "Unicorn Package",
        price: "$150",
        image: "../../content images/Unicronpackage.png",
        link: "/items/classic_combo_slide_package/"
    },
    {
        name: "Happy Birthday Package",
        price: "$150",
        image: "../../content images/Happybirthdaypackage.png",
        link: "/items/classic_combo_slide_package/"
    },
    {
        name: "Crayon Package",
        price: "$150",
        image: "../../content images/crayonpackage.png",
        link: "/items/classic_combo_slide_package/"
    },
    {
        name: "Blue, Green, Yellow Package",
        price: "$150",
        image: "../../content images/BOUNCEHOUSEPACKAGE.png",
        link: "/items/classic_combo_slide_package/"
    },
    {
        name: "Purple & Blue Package",
        price: "$150",
        image: "../../content images/11x11package.png",
        link: "/items/classic_combo_slide_package/"
    },
    {
        name: "Pink & Purple Package",
        price: "$150",
        image: "../../content images/PINK-PURPLERPACKAGE.png",
        link: "/items/classic_combo_slide_package/"
    },
    {
        name: "Rainbow Castle Package",
        price: "$220",
        image: "../../content images/classic-combo-slide-package.png",
        link: "/items/Rainbow_Castle_Package/"
    },
    {
        name: "Princess Castle Package",
        price: "$220",
        image: "../../content images/pink-castle-combo-slide-package.png",
        link: "/items/Princess_Castle_Package/"
    },
    {
        name: "Tropical Palms Package",
        price: "$220",
        image: "../../content images/tropical-sun-combo-slide-package.png",
        link: "/items/Tropical_Palms_Package/"
    },
    
    // ... add more products as needed
    {
        name: "Classic Castle Package",
        price: "$150",
        image: "../../content images/blue-green-yellow-package.png",
        link: "/items/blue,_green__and__yellow_package/"
    },
    {
        name: "Classic Balloons Package",
        price: "$150",
        image: "../../content images/balloons-package.png",
        link: "/items/classic_balloons_package/"
    },
    {
        name: "Pink Princess Package",
        price: "$150",
        image: "../../content images/pink-package.png",
        link: "/items/pink_package/"
    },
    {
        name: "Sunny Palms Package",
        price: "$150",
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