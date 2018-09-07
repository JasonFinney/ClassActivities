$(".btn1").on("click", function () {
    console.log("created!");
    $(".create").show();
    $(".existing").hide();
});

$(".btn2").on("click", function () {
    console.log("existing!");
    $(".existing").show();
    $(".create").hide();
});

$(".btn3").on("click", function (event) {
    event.preventDefault();
    var newReservation = {
        routeName: $("#routeName").val().trim(),
        name: $("#routeName").val().trim(),
        party: $("#party-size").val().trim(),
        data: $("#date").val().trim(),
        time: $("#time").val().trim()
    };

    $.post("/api/reservations", newReservation).then(function (data) {
        console.log("post successful", data);
        alert("Your Reservation is in the Books! See you Soon!")
    });
});