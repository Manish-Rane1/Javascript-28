// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 20;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderButtons(){
  if (state.Patty){
    document.querySelector(".btn-patty").classList.add("active")
  } else {document.querySelector(".btn-patty").classList.remove("active")}

  if (state.Cheese){
    document.querySelector(".btn-cheese").classList.add("active")
  } else {document.querySelector(".btn-cheese").classList.remove("active")}

  if (state.Lettuce){
    document.querySelector(".btn-lettuce").classList.add("active")
  } else {document.querySelector(".btn-lettuce").classList.remove("active")}

  if (state.Onions){
    document.querySelector(".btn-onions").classList.add("active")
  } else {document.querySelector(".btn-onions").classList.remove("active")}

  if (state.Tomatoes){
    document.querySelector(".btn-tomatoes").classList.add("active")
  } else {document.querySelector(".btn-tomatoes").classList.remove("active")}

}

function renderIngredientsBoard(){
  let cheese = document.getElementById('cheese-itm')
  let patty = document.getElementById('patty-itm')
  let onion = document.getElementById('onion-itm')
  let lettuce = document.getElementById('lettuce-itm')
  let tomato = document.getElementById('tomato-itm')

  if (state.Cheese){
    cheese.style.display = "inherit"
  } else {cheese.style.display = "none"}

  if (state.Patty){
    patty.style.display = "inherit"
  } else {patty.style.display = "none"}

  if (state.Onions){
    onion.style.display = "inherit"
  } else {onion.style.display = "none"}

  if (state.Lettuce){
    lettuce.style.display = "inherit"
  } else {lettuce.style.display = "none"}

  if (state.Tomatoes){
    tomato.style.display = "inherit"
  } else {tomato.style.display = "none"}
}

function renderPrice(){
  let total=wholeWheatBun
  if (state.Cheese){
    total+=10
  }
  if (state.Patty){
    total+=80
  }
  if (state.Lettuce){
    total+=20
  }
  if (state.Onions){
    total+=20
  }
  if (state.Tomatoes){
    total+=20
  }
  document.getElementById('amount').innerText=('INR '+total)
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let Cheese = document.querySelector("#cheese");
  if (state.Cheese) {
    Cheese.style.display = "inherit";
  } else {
    Cheese.style.display = "none";
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let Tomatoes = document.querySelector("#tomato");
  if (state.Tomatoes) {
    Tomatoes.style.display = "inherit";
  } else {
    Tomatoes.style.display = "none";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let Onions = document.querySelector("#onion");
  if (state.Onions) {
    Onions.style.display = "inherit";
  } else {
    Onions.style.display = "none";
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let Lettuce = document.querySelector("#lettuce");
  if (state.Lettuce) {
    Lettuce.style.display = "inherit";
  } else {
    Lettuce.style.display = "none";
  }
}

document.querySelector(".btn-patty").onclick = function () {
  
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  
  state.Cheese = !state.Cheese;
  renderAll();
};


// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};


// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  
  state.Onions = !state.Onions;
  renderAll();
};


// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  
  state.Lettuce = !state.Lettuce;
  renderAll();
};


//Challenge 1 - Add/Remove the class active to the buttons based on state


//Challenge 2 - Render only the items selected in the ingredients board based on the state


//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
