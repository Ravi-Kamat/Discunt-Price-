

const originalPrice = 50;
const discountedPrice = 40;



const calcPercentage = (originalPrice, discountedPrice) => {
    let discountAmount = originalPrice - discountedPrice;
    let discountPercentage = (discountAmount / originalPrice) * 100;
    return Math.round(discountPercentage * 100) / 100;
};

let result = calcPercentage(originalPrice, discountedPrice);
console.log(result); 
