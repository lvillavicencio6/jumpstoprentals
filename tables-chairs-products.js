const products = [
    {
        name: "White Folding Chair",
        price: "$1.50",
        image: "../../content images/white-folding-chair.png",
        link: "/items/white_folding_chair/"
    },
    {
        name: "6ft Rectangular Table",
        price: "$10",
        image: "../../content images/6ft-rectangular-table.png",
        link: "/items/6ft_rectangular_table/"
    },
    {
        name: "Kids Folding Chair",
        price: "$1.50",
        image: "../../content images/kids-folding-chair.png",
        link: "/items/kids_folding_chair/"
    },
    {
        name: "Kids Rectangular Table",
        price: "$9",
        image: "../../content images/kids-rectangular-table.png",
        link: "/items/kids_rectangular_table/"
    },
    {
        name: "60 Inch Round Table",
        price: "$12",
        image: "../../content images/60-inch-round-table.png",
        link: "/items/60_inch_round_table/"
    },
    {
        name: "White Resin Chair",
        price: "$3",
        image: "../../content images/WEBSITERESINCHAIR.png",
        link: "/items/60_inch_round_table/"
    },
    {
        name: "30 Inch Round Cocktail Table",
        price: "$13.5",
        image: "../../content images/Cocktail-table.jpeg",
        link: "/items/60_inch_round_table/"
    },
    {
        name: "24 Inch Round Cocktail Table",
        price: "$13",
        image: "../../content images/Cocktail-table.jpeg",
        link: "/items/60_inch_round_table/"
    },
    {
        name: "White Rectangular Linen",
        price: "$8",
        image: "../../content images/White-Rectangular-Linen.jpg",
        link: "/items/60_inch_round_table/"
    },
    {
        name: "Black Rectangular Linen",
        price: "$8",
        image: "../../content images/blacktablecloth.jpeg",
        link: "/items/60_inch_round_table/"
    },
    {
        name: "White Round Linen",
        price: "$10",
        image: "../../content images/White-Round-Linen.jpg",
        link: "/items/60_inch_round_table/"
    },
    {
        name: "Black Round Linen",
        price: "$10",
        image: "../../content images/roundblacktablecloth.jpeg",
        link: "/items/60_inch_round_table/"
    },
    {
        name: "White Round Cocktail Table Linen",
        price: "$11",
        image: "../../content images/spandexcocktailtablewhite.jpg",
        link: "/items/60_inch_round_table/"
    },
    {
        name: "Red Round Cocktail Table Linen",
        price: "$11",
        image: "../../content images/Screenshot-2023-11-19-170011.png",
        link: "/items/60_inch_round_table/"
    },
    {
        name: "Black Round Cocktail Table Linen",
        price: "$11",
        image: "../../content images/blackroundlinencocktailtable.jpg",
        link: "/items/60_inch_round_table/"
    },
    {
        name: "20 x 20 Canopy",
        price: "$295",
        image: "../../content images/10x20-canopy.jpg",
        link: "/items/20_x_20_canopy/"
    },
    {
        name: "10 x 20 Canopy",
        price: "$225",
        image: "../../content images/10x20-canopy.jpg",
        link: "/items/10_x_20_canopy/"
    },
    
    // ... add more products as needed
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