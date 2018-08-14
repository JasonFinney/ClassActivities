var database = firebase.database();
console.log(database);

database.ref().on("child_added", function (snapshot) {
    console.log(snapshot);
    var data = snapshot.val();
    console.log(data);
    var monthsdiff = moment().diff(moment(data.start), "months");
    $("table").append(
        `<tr>
            <td>${data.name}</td>
            <td>${data.role}</td>
            <td>${data.start}</td>
            <td>${monthsdiff}</td>
            <td>${data.monthlyrate}</td>
            <td>${monthsdiff * data.rate}</td>
        </tr>`);
});


$("button").on("click", function () {
    var name = $("#name-input").val();
    var role = $("#role-input").val();
    var start = $("#date-input").val();
    var monthlyrate = $("#rate-input").val();

    console.log(name, role, start, monthlyrate);

    database.ref().push({
        name: name,
        role: role,
        start: start,
        monthlyrate: monthlyrate
    });

    $("#name-input").val("");
    $("#role-input").val("");
    $("#date-input").val("");
    $("#rate-input").val("");
});

