//* We Need somwhere to save the cart quantity: Variables are the perfect solution to savr the value

let cartQuantity = 0;

let btn1 = document.querySelector("#btn-1")
let btn2 = document.querySelector("#btn-2")
let btn3 = document.querySelector("#btn-3")
let btn4 = document.querySelector("#btn-4")
let btn5 = document.querySelector("#btn-5")

const showQuantity = () => {
  console.log(`Cart Quantity : ${cartQuantity}`);
};

const addCartByOne = ()=>{
    // cartQuantity = cartQuantity + 1;
    cartQuantity += 1
    // cartQuantity++
    console.log(`Cart Quantity : ${cartQuantity}`);
}
const addCartByTwo = ()=>{
    // cartQuantity = cartQuantity + 2;
      cartQuantity += 2;
    console.log(`Cart Quantity : ${cartQuantity}`);
}
const addCartByThree = ()=>{
    // cartQuantity = cartQuantity + 3;
      cartQuantity += 3;
    console.log(`Cart Quantity : ${cartQuantity}`);
}
const resetCart = ()=>{
cartQuantity = 0;
console.log('Cart was reset');
console.log(`Cart Quantity : ${cartQuantity}`);
}
