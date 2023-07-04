let cartItems = [];

function updateCartSummary() {
  let cartTable = document.getElementById("product-item");
  let tbody = cartTable.getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";

  for (let i = 0; i < cartItems.length; i++) {
    let item = cartItems[i];
    
    let row = document.createElement("tr");

    let Itemname= document.createElement("td");
    Itemname.textContent = item.name;
    row.appendChild(Itemname);

    let Itemprice = document.createElement("td");
    Itemprice.textContent = item.price;
    row.appendChild(Itemprice);

    let Itemtotal = document.createElement("td");
    Itemtotal.textContent = item.price * item.quantity;
    row.appendChild(Itemtotal);

    tbody.appendChild(row);
  }

  let cartTotal = calculateTotal();
  let totalRow = document.createElement("tr");

  let totalLabelCell = document.createElement("td");
  totalLabelCell.textContent = "Total:";
  totalLabelCell.setAttribute("colspan", "2");
  totalRow.appendChild(totalLabelCell);

  let totalValueCell = document.createElement("td");
  totalValueCell.textContent = cartTotal;
  totalRow.appendChild(totalValueCell);

  tbody.appendChild(totalRow);
}

function addCart(productName,price) {
  let existingItem = cartItems.find(function(item) {
    return item.name === productName;
  });

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cartItems.push({
      name: productName,
      price: price,
      quantity: 1
    });
  }

  updateCartSummary();
}

function calculateTotal() {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    total += cartItems[i].price * cartItems[i].quantity;
  }
  return total;
}
