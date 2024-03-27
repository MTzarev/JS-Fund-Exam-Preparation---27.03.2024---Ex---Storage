function storage(input) {
    let storageObj = {};

    input.forEach(info => {
        let [product, qty] = info.split(` `);
        qty = Number(qty);
        if (storageObj.hasOwnProperty(product)) {
            storageObj[product] += qty;
        } else {
            storageObj[product] = qty;
        }

    });
    for (let productName in storageObj) {
        console.log(`${productName} -> ${storageObj[productName]}`);
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);