// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "broccoli",
		nutfree: true,
		dairyfree: true,
		organic: true,
		price: 1.99
	},

	{
		name: "eggs",
		nutfree: true,
		dairyfree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "cheese",
		nutfree: true,
		dairyfree: false,
		organic: false,
		price: 2.35
	},
	{	name: "carrots",
		nutfree: true,
		dairyfree: true,
		organic: true,
		price: 2.49
	},
	{
		name: "bread",
		nutfree: true,
		dairyfree: true,
		organic: false,
		price: 3.99
	},

	{	name: "almond milk",
		nutfree: false,
		dairyfree: true,
		organic: true,
		price: 3.99
	},
	{
		name: "yogurt",
		nutfree: true,
		dairyfree: false,
		organic: true,
		price: 4.52
	},
	{	name: "trail mix",
		nutfree: false,
		dairyfree: true,
		organic: false,
		price: 6.99
	},
	{	name: "spinach",
		nutfree: true,
		dairyfree: true,
		organic: true,
		price: 9.49
	},
	{
		name: "salmon",
		nutfree: true,
		dairyfree: true,
		organic: true,
		price: 10.27
	},
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {

	let product_names = [];

	for (let i=0; i<prods.length; i+=1) {
		
		if ((restriction == 'nutfree_dairyfree_organic') && (prods[i].nutfree == true) && (prods[i].dairyfree == true) && (prods[i].organic == true )){
			product_names.push(prods[i].name);
		} else if ((restriction == 'nutfree_dairyfree') && (prods[i].nutfree == true) && (prods[i].dairyfree == true )){
			product_names.push(prods[i].name);
		} else if ((restriction == 'nutfree_organic') && (prods[i].nutfree == true) && (prods[i].organic == true )){
			product_names.push(prods[i].name);
		} else if ((restriction == 'dairyfree_organic') && (prods[i].dairyfree == true) && (prods[i].organic == true )){
			product_names.push(prods[i].name);
		} else if ((restriction == 'nutfree') && (prods[i].nutfree == true)){
			product_names.push(prods[i].name);
		} else if ((restriction == 'dairyfree') && (prods[i].dairyfree == true)){
			product_names.push(prods[i].name);
		} else if ((restriction == 'organic') && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		} else if (restriction == 'none'){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

function getItemPrices(prods, restriction){

	let product_prices = [];

	for (let i=0; i<prods.length; i+=1) {
		
		if ((restriction == "nutfree_dairyfree_organic") && (prods[i].nutfree == true) && (prods[i].dairyfree == true) && (prods[i].organic == true )){
			product_prices.push(prods[i].price);
		} else if ((restriction == "nutfree_dairyfree") && (prods[i].dairyfree == true ) && (prods[i].nutfree == true)){
			product_prices.push(prods[i].price);
		} else if ((restriction == "nutfree_organic") && (prods[i].nutfree == true) && (prods[i].organic == true )){
			product_prices.push(prods[i].price);
		} else if ((restriction == "dairyfree_organic") && (prods[i].dairyfree == true) && (prods[i].organic == true )){
			product_prices.push(prods[i].price);
		} else if ((restriction == "nutfree") && (prods[i].nutfree == true)){
			product_prices.push(prods[i].price);
		} else if ((restriction == "dairyfree") && (prods[i].dairyfree == true)){
			product_prices.push(prods[i].price);
		} else if ((restriction == "organic") && (prods[i].organic == true)){
			product_prices.push(prods[i].price);
		} else if (restriction == "none"){
			product_prices.push(prods[i].price);
		}
	}
	return product_prices;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}