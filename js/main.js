$( document ).ready(function(){
    $("#recursion").on( "click", function (e){
        e.preventDefault();

        let valnumber = $('#number').val();
        let arrayNumberString = valnumber.toString().split('');
        let arrayNumbers = arrayNumberString.map(Number)

        console.log(valnumber, arrayNumberString, arrayNumbers);

        if (valnumber >= 10) {
            let sumNumber = arrayNumbers.reduce(function(a,b){ return a + b; })
            console.log(sumNumber);
            $(".result-recursion").html(sumNumber);
        }

        else {
            $(".result-recursion").html('число задано неверно');
        }

    });

    $("#multiple").on( "click", function (e){
        e.preventDefault();

        let sum = 0;
        let valnumber = $('#multi-number').val();

        for (let i = 0; i <= valnumber; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                sum += i;
            }
        }

        $(".result-multiple").html(sum);

        console.log(valnumber, sum);

    });

});

