$(document).ready(function() {

    //CALCULATE TAX WHEN BUTTON IS CLICKED
    $('#calculate').click(function() {
        //GRAB THE VALUE OF THE ELEMENT IN THE HTML FILE BY ID
        var price = document.getElementById("price").value;
        var tax = document.getElementById("tax").value;

        //IF INPUTS ARE EMPTY, SHOW THE FOLLOWING MESSAGE
        if(price === "" || tax === "") {
            document.getElementById("sub").innerHTML = "Don't leave inputs blank 😉";
        }

        //IF USER PUTS ALPHABETS IN INPUT, SHOW THE FOLLOWING MESSAGE
        else if(price.match(/[a-z]/g) != null || tax.match(/[a-z]/g) != null) {
            document.getElementById("sub").innerHTML = "Don't enter alphabets yo 😉";
        }
        else {
            //CHANGE PRICE TO DECIMAL AND REMOVES "$"
            price = parseFloat(price.replace("$", ""));

            //TURN PERCENT INTO DECIMAL AND REMOVES THE "%"
            tax = parseFloat(tax.replace("%", "")) / 100;

            //ROUND TOTAL TO TWO DECIMAL PLACES
            var total = (price + (price * tax)).toFixed(2);

            //DISPLAY THE AMOUNT IN '.amount' AND SHOW MESSAGE
            $('.amount').html("$" + total);
            document.getElementById("sub").innerHTML = "There you go 😉";
        }
    });

    //RESET THE VALUES OF INPUT FIELD/MESSAGES ON BUTTON CLICK
    $('#reset').click(function() {
        document.getElementById("price").value = "";
        document.getElementById("tax").value = "";
        document.getElementById("amount").innerHTML = "$0.00";
        document.getElementById("sub").innerHTML = "message";
    });
});