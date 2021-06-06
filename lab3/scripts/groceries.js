// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Broccoli",
		nutfree: true,
		dairyfree: true,
		organic: true,
		price: 1.99,
		imgFile: 'broccoli.png'
	},

	{
		name: "Eggs",
		nutfree: true,
		dairyfree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "Cheese",
		nutfree: true,
		dairyfree: false,
		organic: false,
		price: 2.35
	},
	{	name: "Carrots",
		nutfree: true,
		dairyfree: true,
		organic: true,
		price: 2.49
	},
	{
		name: "Bread",
		nutfree: true,
		dairyfree: true,
		organic: false,
		price: 3.99
	},

	{	name: "Milk",
		nutfree: false,
		dairyfree: true,
		organic: true,
		price: 3.99
	},
	{
		name: "Yogurt",
		nutfree: true,
		dairyfree: false,
		organic: true,
		price: 4.52
	},
	{	name: "Almonds",
		nutfree: false,
		dairyfree: true,
		organic: false,
		price: 6.99
	},
	{	name: "Spinach",
		nutfree: true,
		dairyfree: true,
		organic: true,
		price: 9.49
	},
	{
		name: "Salmon",
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
		
		if ((restriction === "nutfree_dairyfree_organic") && (prods[i].nutfree == true) && (prods[i].dairyfree == true) && (prods[i].organic == true )){
			product_names.push(prods[i].name + "- $" + prods[i].price + prods[i].imgFile);
		} else if ((restriction === "nutfree_dairyfree") && (prods[i].nutfree == true) && (prods[i].dairyfree == true )){
			product_names.push(prods[i].name + "- $" +  prods[i].price);
		} else if ((restriction === "nutfree_organic") && (prods[i].nutfree == true) && (prods[i].organic == true )){
			product_names.push(prods[i].name + "- $" +  prods[i].price);
		} else if ((restriction === "dairyfree_organic") && (prods[i].dairyfree == true) && (prods[i].organic == true )){
			product_names.push(prods[i].name + " - $" +  prods[i].price);
		} else if ((restriction === "nutfree") && (prods[i].nutfree == true)){
			product_names.push(prods[i].name + " - $" +  prods[i].price);
		} else if ((restriction === "dairyfree") && (prods[i].dairyfree == true)){
			product_names.push(prods[i].name + " - $" +  prods[i].price);
		} else if ((restriction === "organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name + " - $" +  prods[i].price);
		} else if (restriction === '' || restriction == 'none'){
			product_names.push(prods[i].name + " - $" +  prods[i].price);
		}
	}
	return product_names;
}

// Retrieve all item images
function getItemImg(item){

	for (var i=0; i<=products.length; i++){
		if (item == products[i].name){
			return products[i].imgFile;
		}
	}
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