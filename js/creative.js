$(document).ready(function() {

	//Put user's name in place of heading
	var user_name = prompt("Please enter your first name:");
	if(!user_name) { document.getElementById("name").innerHTML = "User,"; }
	else { document.getElementById("name").innerHTML = user_name + ","; }

	$('#calculate').click(function() {
		//Grab the value of the element in HTML file by id 
		var price = document.getElementById("price").value;
		var tax = document.getElementById("tax").value;

		//Validate to see if value of price or tax is empty
		if(price === "" || tax === "") {
			alert("Please enter value for the input(s).");
		}

		//Change price to decimal and removes "$"
		price = parseFloat(price.replace("$", ""));

		//Turn percent into decimal and removes the "%"
		tax = parseFloat(tax.replace("%", "")) / 100;

		//Round total to two decimal places and display in '.amount'
		var total = (price + (price * tax)).toFixed(2);
		$('.amount').html("$" + total);
	});

	//Reset the values of input field on button click
	$('#reset').click(function() {
		document.getElementById("price").value = "";
		document.getElementById("tax").value = "";
	});
});