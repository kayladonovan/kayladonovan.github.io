// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}


// Adjust the text size to suit user preference
// [ref] https://www.w3schools.com/jsref/prop_style_fontsize.asp
function adjustTextSize (evt, size) {
	if (size == "small"){
		document.getElementById("body").style.fontSize = "small";
	} else if (size == "medium"){
		document.getElementById("body").style.fontSize = "medium";
	} else if (size == "large"){
		document.getElementById("body").style.fontSize = "large";
	}
}

function checkChoices(){
	
	// [ref] filtering by checkbox groups: https://html5-tutorial.net/forms/checkboxes/
	var checkboxes = document.getElementsByName('restriction');

  	var restrictions = [false, false, false]; // default no restrictions
  	// var restrictions = [];

  	// checking the values of the restrictions, adding to an array
	for(var i = 0; i < checkboxes.length; i++){
        if(checkboxes[i].checked){
        	restrictions[i] = true;
        	// restrictions.push(checkboxes[i].value);
        } else {
        	restrictions[i] = false;
        }
    }
	populateListProductChoices(restrictions);
}
	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(r1) {

	var filter = ""; // default none 

	// All the and/or's of the restrictions . . . 
	if (r1[0] == true){
		if (r1[1] ==true) { 
			// all selected
			if (r1[2] ==true) { 
				filter = "nutfree_dairyfree_organic"; 
			}
			// just 2 of 3
			filter = "nutfree_dairyfree"; 
		// just 2 of 3
		} else if (r1[2] ==true) { 
			filter = "nutfree_organic"; 
		}
		// only nut alergy
		filter = "nutfree";
	} else if (r1[1] ==true){
		// just 2 of 3
		if (r1[2] ==true) { 
			filter = "dairyfree_organic"; 
		}
		// only dairy free
		filter = "dairyfree";
	} else if (r1[2] == true){
		// only organic
		filter = "organic";
	} else if (r1[3] == true){
		filter = "none";
	}

    var s2 = document.getElementById("displayProduct");
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, filter);
    var priceArray = getItemPrices(products, filter);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i];
		var productPrice = priceArray[i];

		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s2.appendChild(checkbox);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName + " $" + productPrice));
		s2.appendChild(label);
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "Items for purchase";
	para.appendChild(document.createElement("br"));
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode("- " + ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is: " + getTotalPrice(chosenProducts)));
		
}
