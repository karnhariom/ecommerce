// function addToCart(productName, price) {
//   var cartTable = document.getElementById('cartTable').getElementsByTagName('tbody')[0];
//   var newRow = cartTable.insertRow(cartTable.rows.length);

//   var srNoCell = newRow.insertCell(0);
//   var productCell = newRow.insertCell(1);
//   var priceCell = newRow.insertCell(2);
//   var deleteCell = newRow.insertCell(3);

//   srNoCell.textContent = cartTable.rows.length;
//   productCell.textContent = productName;
//   priceCell.textContent = price;
  
//   var deleteButton = document.createElement('button');
//   deleteButton.className = 'r_btn';
//   deleteButton.textContent = 'Delete';
//   deleteButton.onclick = function () {
//       deleteRow(this);
//   };
//   deleteCell.appendChild(deleteButton);
// }

// // Function to delete a row from the cart table
// function deleteRow(button) {
//   var row = button.parentNode.parentNode;
//   row.parentNode.removeChild(row);

//   // Update the Sr.no after deletion
//   var cartTable = document.getElementById('cartTable').getElementsByTagName('tbody')[0];
//   for (var i = 0; i < cartTable.rows.length; i++) {
//       cartTable.rows[i].cells[0].textContent = i + 1;
//   }
// }

// // Add event listeners for "Add to cart" buttons
// var addToCartButtons = document.querySelectorAll('.btn');
// addToCartButtons.forEach(function (button) {
//   button.addEventListener('click', function () {
//       var productName = this.parentNode.querySelector('h2').textContent;
//       var price = this.parentNode.querySelector('p').textContent;
//       addToCart(productName, price);
//   });
// });   

function deleteRow(button) {
  event.preventDefault();
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}