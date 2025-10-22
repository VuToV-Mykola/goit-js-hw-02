// `use strict`
// Task 2. Product Delivery
function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = Number.parseFloat(price) + Number.parseFloat(deliveryFee);
  if (totalPrice) {
    return `Shipping to ${String(country)} will cost ${totalPrice} credits`;
  } else {
    return `Please enter valid arguments - numeric values' for the getShippingMessage function`;
  }
}
console.log(getShippingMessage('Australia', 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage('Germany', 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage('Sweden', 100, 20)); // "Shipping to Sweden will cost 120 credits"
