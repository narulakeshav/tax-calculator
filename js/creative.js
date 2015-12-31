$(document).ready(function() {

    //PUT USER'S NAME IN THE HEADING
    var user_name = prompt("Please enter your first name:");
    if(!user_name) { document.getElementById("name").innerHTML = "User,"; }
    else 
    {
        user_name = user_name.charAt(0).toUpperCase() + user_name.slice(1).toLowerCase() + ",";
        document.getElementById("name").innerHTML = user_name;
    }

    //CALCULATE TAX WHEN BUTTON IS CLICKED
    $('#calculate').click(function() {
        //GRAB THE VALUE OF THE ELEMENT IN THE HTML FILE BY ID
        var price = document.getElementById("price").value;
        var tax = document.getElementById("tax").value;

        //CHANGE PRICE TO DECIMAL AND REMOVES "$"
        price = parseFloat(price.replace("$", ""));

        //TURN PERCENT INTO DECIMAL AND REMOVES THE "%"
        tax = parseFloat(tax.replace("%", "")) / 100;

        //ROUND TOTAL TO TWO DECIMAL PLACES AND DISPLAY IN '.amount'
        var total = (price + (price * tax)).toFixed(2);
        $('.amount').html("$" + total);
    });

    //RESET THE VALUES OF INPUT FIELD ON BUTTON CLICK
    $('#reset').click(function() {
        document.getElementById("price").value = "";
        document.getElementById("tax").value = "";
        document.getElementById("amount").innerHTML = "$0.00";
    });
});