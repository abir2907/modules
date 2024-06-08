// Importing module
import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';

add('pizza', 2);
console.log(price);
console.log(tq);

const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
const data = await res.json();
console.log(data);
