// const navMenu = document.querySelector(".nav__menu");
// const hamburger = document.querySelector(".hamburger-container");

// hamburger.addEventListener("click", () => {
//   navMenu.classList.toggle("active");
// });
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    product += arr[i];
  }
  // Only change code above this line
  console.log(product);
}

multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);
console.log(multiplyAll.length);
