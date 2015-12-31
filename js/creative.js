$(document).ready(function() {
	$('.btn-calculate').click(function() {
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
});