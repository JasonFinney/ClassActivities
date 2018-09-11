$(document).on("click", "button.btn-success", function () {
    // remove a class
    $(this).removeClass("btn-success");
    // add a new class
    $(this).addClass("btn-warning");

    console.log("I've been attacked!");
});

var button = $("<button>").addClass("btn btn-success").text("Click Me");

// add the button back to the DOM
$("#lou-buttons").append(button);
