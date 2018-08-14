var database = firebase.database();

console.log(database);

// ****for referencing "fun"*********
// database.ref("fun/").on("value", function(snapshot){
//     console.log(snapshot.val());
// });

database.ref("bio/").on("child_added", function (snapshot) {
    console.log(snapshot.val());
    var data = snapshot.val();
    console.log(data);
    // for (key in data) {
    //     console.log(`key:  ${key}`);
    //     console.log(data[key].name);
    //     console.log(data[key].age);
    // }
    // $("#name-display").text("Name: " + data.name);
    // $("#age-display").text("Age: " + data.age);

    var div = $("<div>");
    div.append(`<h2>Age: ${data[key].name}</h2>`);
    div.append(`<h2>Age: ${data[key].age}</h2>`);
    $("#users").append(div);
});
// ****for save button function ****
// $("#save-button").on("click", function () {
//     var name = $("#name-input").val();
//     var age = $("#age-input").val();

//     database.ref("bio/").set({
//         name: name,
//         age: age
//     });

$("#save-button").on("click", function () {
    var name = $("#name-input").val();
    var age = $("#age-input").val();

    database.ref("bio/").push({
        name: name,
        age: age
    });

});