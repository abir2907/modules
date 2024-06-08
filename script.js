// Importing module
import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';

add('pizza', 2);
console.log(price);
console.log(tq);

const getLastPost = async function () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);
// Incorrect, this will print the Promise(pending) and not the object

lastPost.then(last => console.log(last));
// Correct

const lastPost2 = await getLastPost();
console.log(lastPost2);
// Correct, looks cleaner

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = cloneDeep(state);
