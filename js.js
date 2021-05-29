let products = {'apple': 800, 'banana': 600, 'milk': 700};

function roundPrice(price){
    let newPrice = 0;
    roundedPrice = Math.round(price * 1.15);
    if (roundedPrice % 10 > 5) {
        newPrice = roundedPrice - (roundedPrice % 10) + 10;
    }
    else if (roundedPrice % 10 > 2.5) {
        newPrice = roundedPrice - (roundedPrice % 10) + 5;
    }
    else {
        newPrice = roundedPrice - (roundedPrice % 10);
    }
    return newPrice
}


function sellPrice(products) {
    let sellProducts = {};
    for (let name in products) {
        sellProducts[name] = roundPrice(products[name])
    }

    return sellProducts
}

console.log(sellPrice(products));