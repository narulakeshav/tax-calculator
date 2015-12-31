$(document).ready(function() {
	$('.btn-calculate').click(function() {
		var price = document.getElementById("price").value;
		price = parseFloat(price.replace("$", ""));

		var tax = document.getElementById("tax").value;
		tax = parseFloat(tax.replace("%", "")) / 100;

		var total = (price + (price * tax)).toFixed(2);

		$('.amount').html("$" + total);
	});
});