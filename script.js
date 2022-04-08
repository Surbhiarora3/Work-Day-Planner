
$("#currentDay").text(moment().format("Do MMMM YYYY, h:mm:ss a"));

setInterval(function () {
    $("#currentDay").text(moment().format("Do MMMM YYYY, h:mm:ss a"));
}, 1000)
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    localStorageFunction();

function localStorageFunction() {

    for (let index = 0; index < numbers.length; index++) {
        $("textarea")[index].value = localStorage.getItem("textarea" + String(index + 1));
    }
}


$("button").on("click", function (event) {
    event.preventDefault();

    for (let index = 0; index < numbers.length; index++) {
        localStorage.setItem('textarea' + String(index + 1), $("textarea")[index].value)
    }
});

function updateByTheHour() {
    var currentHour = moment().hours();
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split(" ")[0]);

        if (blockHour < currentHour) {
            $(this).addClass("past");
        } else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}

updateByTheHour();