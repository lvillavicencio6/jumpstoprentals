const products = [
    {
        id: 101,
        name: "Red Green & Yellow Small Jumper",
        price: "$85",
        image: "../../content images/red-green-yellow-small-jumper.png",
        link: "/items/101_-_red_green_and_yellow_small_jumper/"
    },
    {
        id: 102,
        name: "Blue & Pink Small Jumper",
        price: "$85",
        image: "../../content images/blue-pink-small-jumper.png",
        link: "/items/102_-_blue__and__pink_small_jumper/"
    },
    // ... add more products as needed
    {
        id: 103,
        name: "Blue Green & Yellow Jumper",
        price: "$95",
        image: "../../content images/blue-green-yellow-jumper.png",
        link: "/items/103_-_blue,_green__and__yellow_jumper/"
    },
    {
        id: 104,
        name: "Balloons Jumper",
        price: "$95",
        image: "../../content images/balloons-jumper.png",
        link: "/items/104_-_balloons_jumper/"
    },
    {
        id: 105,
        name: "Pink Jumper",
        price: "$95",
        image: "../../content images/pink-jumper.png",
        link: "/items/105_-_pink_jumper/"
    },
    {
        id: 106,
        name: "Pink Castle Jumper",
        price: "$95",
        image: "../../content images/pink-castle-jumper.png",
        link: "/items/106_-_pink_castle_jumper/"
    },
    {
        id: 107,
        name: "Tropical Sun Jumper",
        price: "$95",
        image: "../../content images/tropical-sun-jumper-front.png",
        link: "/items/107_-_tropical_sun_jumper/"
    },
    {
        id: 201,
        name: "Classic Combo Slide Jumper",
        price: "$165",
        image: "../../content images/classic-combo-slide-jumper.png",
        link: "/items/201_-_classic_combo_slide_jumper/"
    },
    {
        id: 202,
        name: "Pink Castle Combo Slide Jumper",
        price: "$165",
        image: "../../content images/pink-castle-combo-slide.png",
        link: "/items/202_-_pink_castle_combo_slide/"
    },
    {
        id: 203,
        name: "Tropical Sun Combo Slide Jumper",
        price: "$165",
        image: "../../content images/tropical-sun-combo-slide.png",
        link: "/items/203_-_tropical_sun_combo_slide_jumper/"
    },
    {
        id: 204,
        name: "Pink Combo Slide Jumper",
        price: "$165",
        image: "../../content images/pink-combo-slide.png",
        link: "/items/204_-_pink_combo_slide/"
    },
    {
        id: 205,
        name: "Tropical Combo Slide Jumper",
        price: "$165",
        image: "../../content images/tropical-combo-slide.png",
        link: "/items/205_-_tropical_combo_slide_jumper/"
    },

];

const productGrid = document.getElementById('product-grid');

products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.id} - ${product.name}</h3>
        <p>${product.price}</p>
        <a href="${product.link}" class="cta-button">View Product</a>
    `;
    productGrid.appendChild(productCard);
});