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
        link: "/items/black_round_linen/"
    },
    {
        name: "White Round Cocktail Table Linen",
        price: "$11",
        image: "../../content images/spandexcocktailtablewhite.jpg",
        link: "/items/white_round_cocktail_table_linen/"
    },
    {
        name: "Red Round Cocktail Table Linen",
        price: "$11",
        image: "../../content images/Screenshot-2023-11-19-170011.png",
        link: "/items/red_round_cocktail_table_linen/"
    },
    {
        name: "Black Round Cocktail Table Linen",
        price: "$11",
        image: "../../content images/blackroundlinencocktailtable.jpg",
        link: "/items/black_round_cocktail_table_linen/"
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
    {
        name: "Commercial Pink Cotton Candy Machine",
        price: "$85",
        image: "../../content images/commercialcottoncandy.jpg",
        link: "/items/commercial_pink_cotton_candy_machine/"
    },
    {
        name: "Commercial Blue Cotton Candy Machine",
        price: "$85",
        image: "../../content images/bluecottoncandymachinecommercial.jpg",
        link: "/items/commercial_blue_cotton_candy_machine/"
    },
    {
        name: "10 x 10 Popup Canopy",
        price: "$40",
        image: "../../content images/s873688019986951038_p66_i1_w1000.jpeg",
        link: "/items/10_x_10_popup_canopy/"
    },
    {
        name: "Coffee Brewer",
        price: "$25",
        image: "../../content images/hb_coffee60cup_brewer02.jpg",
        link: "/items/coffee_brewer/"
    },
    {
        name: "Countertop Snowcone Machine",
        price: "$85",
        image: "../../content images/countertopsnowcone.png",
        link: "/items/countertop_snowcone_machine/"
    },
    {
        name: "Outdoor Heater",
        price: "$85",
        image: "../../content images/Patio-heater.jpg",
        link: "/items/outdoor_heater/"
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