//add-seller


function sellerDetails(event){
  event.preventDefault();

  const amount = event.target.amount.value;
  const product = event.target.product.value;
  const category = event.target.category.value;

  const obj = {
    amount: amount,
    product: product,
    category: category
  };

  axios.post("http://localhost:3000/seller/add-product",obj)
  .then((response) => {
    showOnScreen(response.data.newProductDetails);
  })
  .catch((err) => {
    document.body.innerHTML = document.body.innerHTML +"<h4> Something went wrong <h4>";
    console.log(err);
  })
}


//get seller
window.addEventListener("DOMContentLoaded",(event) => {
  
  axios.get("http://localhost:3000/seller/get-seller")
  .then((response) => {

    for(var i=0; i<response.data.allSellers.length; i++){
      showOnScreen(response.data.allSellers[i]);
    }
  })
  .catch((err) => {
    console.log(err);
  })
})



// show on screen
function showOnScreen(user) {

   const parentNode = document.getElementById("electronicItem");
  
  const childHTML = `<li id=${user.id}> ${user.amount} - ${user.product} - ${user.category}
    <button style="border-color: green" onclick=editSellerDetails('${user.amount}','${user.product}','${user.category}','${user.id}')>Edit</button>
    <button style="border-color: red" onclick=deleteSeller('${user.id}')>Delete</button><br>
    </li>`

    parentNode.innerHTML = parentNode.innerHTML+childHTML;
  
}


//edit Seller
function editSellerDetails(amount,product,category,userId) {
  
  document.getElementById('amount').value= amount;
  document.getElementById('product').value= product;
  document.getElementById('category').value= category;

  deleteSeller(userId);
}


//delete Seller
function deleteSeller(userId){
  axios.delete(`http://localhost:3000/seller/delete-seller/${userId}`)
  .then((response) => {
    removeSellerFromScreen(userId);
  })
  .catch((err) => {
    console.log(err);
  })
}


//remove from screen
function removeSellerFromScreen(userId){
  const parentNode = document.getElementById("electronicItem");
  const childNodeToBeDeleted = document.getElementById(userId);

  if(childNodeToBeDeleted) {
    parentNode.removeChild(childNodeToBeDeleted);
  }
}