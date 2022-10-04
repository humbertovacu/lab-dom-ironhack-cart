// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('input').value;
  let subtotal = price * quantity;
  let printSubtotal = product.querySelector('.subtotal span');
  printSubtotal.innerHTML = subtotal;
  return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let everyProduct = document.getElementsByClassName("product");
  let everyProductArray = [...everyProduct];
  let rubberDuck = everyProductArray[0];
  let beachTowel = everyProductArray[1];

  updateSubtotal(rubberDuck);
  updateSubtotal(beachTowel);

  let sumOfProducts = 0;
  for(let i=0; i < everyProductArray.length; i++){
    sumOfProducts+=updateSubtotal(everyProductArray[i]);
  }

  // ITERATION 3
  totalValue = document.getElementById("total-value");
  totalValue.innerHTML = `Total: $${sumOfProducts}`;
  // totalValue.innerHTML=`Total: $${updateSubtotal(rubberDuck)+updateSubtotal(beachTowel)}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const targetElement = document.getElementsByClassName('product');
  let trigger = target.parentNode.parentNode;
  let resetValue = trigger.querySelector('input');
  if (target){
  resetValue.value = 0;
  calculateAll();
  trigger.style.display = 'none'};
  // const productChild = document.getElementsByTagName('td');
  // let productChildArray = [...productChild];
  // for(let i = 0; i<productChild.length;i++){
  //   let removeProduct = productChild[i];
  // return target[0].removeChild(removeProduct)};
//   let allProductChildren;
//   for (let i = 0; i < productChild.length; i++){
//     allProductChildren = productChild[i];
//   }
//  return target[0].removeChild(allProductChildren)
 //  if(trigger){resetValue = 0;
//  trigger.style.visibility = "hidden";
// };


//  trigger.replaceChildren(resetValue);
//  let triggerValue = trigger.querySelector(".subtotal span")
//  triggerValue.innerHTML = 0 
//  trigger.style.visibility = "hidden";
 

}



// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const removeButton = document.getElementsByClassName("btn btn-remove");
  calculatePricesBtn.addEventListener('click', calculateAll);
  for(let i = 0; i < removeButton.length; i ++){
    removeButton[i].addEventListener('click', removeProduct);
  }
});


