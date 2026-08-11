const products = [
    {
        name: "Toddler Bounce House Package",
        price: "$140",
        image: "../../content images/red-green-yellow-package.png",
        link: "/items/Toddler_Bounce_House_Package/"
    },
    {
        name: "Pink Toddler Bounce House Package",
        price: "$140",
        image: "../../content images/blue-pink-package.png",
        link: "/items/Pink_Toddler_Bounce_House_Package/"
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
        link: "/items/Unicorn_Package/"
    },
    {
        name: "Happy Birthday Package",
        price: "$150",
        image: "../../content images/Happybirthdaypackage.png",
        link: "/items/Happy_Birthday_Package/"
    },
    {
        name: "Crayon Package",
        price: "$150",
        image: "../../content images/crayonpackage.png",
        link: "/items/Crayon_Package/"
    },
    {
        name: "Blue, Green, Yellow Package",
        price: "$150",
        image: "../../content images/BOUNCEHOUSEPACKAGE.png",
        link: "/items/blue,_green__and__yellow_package/"
    },
    {
        name: "Purple & Blue Package",
        price: "$150",
        image: "../../content images/11x11package.png",
        link: "/items/Purple_Blue_Package/"
    },
    {
        name: "Pink & Purple Package",
        price: "$150",
        image: "../../content images/PINK-PURPLERPACKAGE.png",
        link: "/items/Pink_Purple_Package/"
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
        link: "/items/Classic_Castle_Package/"
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
        link: "/items/Pink_Princess_Package/"
    },
    {
        name: "Sunny Palms Package",
        price: "$150",
        image: "../../content images/tropical-sun-package.png",
        link: "/items/Sunny_Palms_Package/"
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