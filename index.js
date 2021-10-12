let display= $("#display");
$(document).ready(function() {
    //todo tugmalarni bosish uchun
    $(".buttons").click(function() {
        // if (!$(this).hasClass("not")) {
            if (display.val() === 0)
                $("#display").val($(this).text());
            else
                $("#display").val($("#display").val() + $(this).text());
        // }
    });
});
//todo hamma yozilganlarni tozalash
$("#allClear").click(function() {
    $("#display").val("");
});

//todo resultni chiqarish
$("#equals").click(function() {
    let result;
    try {
        result = (eval(($("#display").val())));
    } catch (e) {
        if (e instanceof SyntaxError) {
            alert("Xato qiymatlar kiritdinggiz!");
            $("#display").val("0");
            $("#result").val("0");
        }
        if (e instanceof TypeError) {
            alert("Xato qiymatlar kiritdinggiz!");
            $("#display").val("0");
            $("#result").val("0");
        }
    }
    //todo natija
    display.val(result);
});


