var database = firebase.database();

$("#add-employee-btn").on("click", function (event) {
    event.preventDefault();
    var name = $("#train-name-input").val().trim();
    var destination = $("destination-input").val().trim();
    var time = $("first-train-time-input").val().trim();
    var freaquency = $("freaquency-input").val().trim();

    var newTrain = {
        "trainName": name,
        "place": destination,
        "firstTrainTime": time,
        "rate": freaquency
    };

    database.ref().push(newTrain);

    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.time);
    console.log(newTrain.freaquency);

    alert("Train Schedule Updated");

    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#first-train-time-input").val("");
    $("#freaquency-input").val("");
});

database.ref().on("child_added", function (childsnapshot) {
    console.log(childsnapshot);

    var name = childsnapshot.val().trainName;
    var destination = childsnapshot.val().destination;
    var time = childsnapshot.val().firstTrainTime;
    var freaquency = childsnapshot.val().freaquency;

    console.log(name);
    console.log(destination);
    console.log(time);
    console.log(freaquency);

    var newRow = $("<tr>").append(
        $("<td>").text(name),
        $("<td>").text(destination),
        $("<td>").text(freaquency),
        $("<td>").text(""),
        $("<td>").text(""),
        $("<td>").text("")
    );

    $("#train-table > tbody").append(newRow);
});

