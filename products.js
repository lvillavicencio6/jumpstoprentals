const products = [
    {
        id: 121,
        name: "Toddler Bounce House 11' x 11'",
        price: "$95",
        image: "../../content images/red-green-yellow-small-jumper.png",
        link: "/items/121_-_toddler_bounce_house/"
    },
    {
        id: 122,
        name: "Pink Toddler Bounce House 11' x 11'",
        price: "$95",
        image: "../../content images/blue-pink-small-jumper.png",
        link: "/items/122_-_pink_toddler_bounce_house/"
    },
    // ... add more products as needed
    {
        id: 109,
        name: "Pink & Blue 11' x 11'",
        price: "$105",
        image: "../../content images/11x11purple-bluecastle.png",
        link: "/items/109_-_purple_and_blue/"
    },
    {
        id: 110,
        name: "Fun Castle 13' x 13'",
        price: "$115",
        image: "../../content images/funcastle.png",
        link: "/items/109_-_purple_and_blue/"
    },
    {
        id: 106,
        name: "Happy Birthday 13' x 13'",
        price: "$115",
        image: "../../content images/HappyBirthdayJumperFront.png",
        link: "/items/109_-_purple_and_blue/"
    },
    {
        id: 104,
        name: "Unicorn Themed 13' x 13'",
        price: "$115",
        image: "../../content images/UnicornJumperFront.png",
        link: "/items/109_-_purple_and_blue/"
    },
    {
        id: 103,
        name: "Blue, Green & Yellow 13' x 13'",
        price: "$115",
        image: "../../content images/BLUE-GREEN.png",
        link: "/items/109_-_purple_and_blue/"
    },
    {
        id: 105,
        name: "Crayon Themed 13' x 13'",
        price: "$115",
        image: "../../content images/CrayolaJumperFront.png",
        link: "/items/109_-_purple_and_blue/"
    },
    {
        id: 108,
        name: "Blue, Red & Orange 13' x 13'",
        price: "$115",
        image: "../../content images/blueredandorange13x13.png",
        link: "/items/109_-_purple_and_blue/"
    },
    {
        id: 107,
        name: "Tropical Sun 13' x 13'",
        price: "$115",
        image: "../../content images/tropical-sun-jumper-front.png",
        link: "/items/109_-_purple_and_blue/"
    },
    {
        
        id: 124,
        name: "Classic Castle 13' x 13'",
        price: "$115",
        image: "../../content images/blue-green-yellow-jumper.png",
        link: "/items/124_-_classic_castle_jumper/"
    },
    {
        id: 123,
        name: "Balloons 13' x 13'",
        price: "$115",
        image: "../../content images/balloons-jumper.png",
        link: "/items/123_-_balloons_jumper/"
    },
    {
        id: 125,
        name: "Pink Princess 13' x 13'",
        price: "$115",
        image: "../../content images/pink-jumper.png",
        link: "/items/125_-_pink_princess_jumper/"
    },
    {
        id: 102,
        name: "Pink Castle Jumper",
        price: "$95",
        image: "../../content images/pink-castle-jumper.png",
        link: "/items/106_-_pink_castle_jumper/"
    },
    {
        id: 126,
        name: "Sunny Palms 13' x 13'",
        price: "$115",
        image: "../../content images/tropical-sun-jumper-front.png",
        link: "/items/126_-_sunny_palms_jumper/"
    },
    {
        id: 211,
        name: "Rainbow Castle Combo Slide 13' x 21'",
        price: "$185",
        image: "../../content images/classic-combo-slide-jumper.png",
        link: "/items/211_-_rainbow_combo_slide_jumper/"
    },
    {
        id: 212,
        name: "Princess Castle Combo Slide 13' x 21'",
        price: "$185",
        image: "../../content images/pink-castle-combo-slide.png",
        link: "/items/212_-_princess_castle_combo_slide/"
    },
    {
        id: 213,
        name: "Tropical Tropical Palms Combo Slide 13' x 21'",
        price: "$185",
        image: "../../content images/tropical-sun-combo-slide.png",
        link: "/items/213_-_tropical_palms_combo_slide_jumper/"
    },
    {
        id: 203,
        name: "Balloons Combo Slide 13' x 21'",
        price: "$185",
        image: "../../content images/BalloonsMiniSlideFront.png",
        link: "/items/203_-_balloons_mini_slide/"
    },
    {
        id: 303,
        name: "Big Tropical Combo Slide 13' x 27'",
        price: "$275",
        image: "../../content images/tropicaBIGSLIDE.png",
        link: "/items/303_-_tropical_slide_combo/"
    },
    {
        id: 301,
        name: "Double Lane Waterslide",
        price: "$339",
        image: "../../content images/DOUBLELANEWATERSLIDE.png",
        link: "/items/301_-_double_lane_waterslide/"
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