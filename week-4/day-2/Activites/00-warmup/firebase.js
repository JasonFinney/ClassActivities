var database = firebase.database();

console.log(database);

// database.ref("songs/favsong").on("value", function (snapshot) {
//     console.log(snapshot.val());
// });

database.ref("bio/").on("child_added", function (snapshot) {
    var data = snapshot.val();
    console.log(data);
    // console.log(`This is the key => ${key} 🔑`);
    // console.log(data[key].name);
    // console.log(data[key].age);

    // // create new div for each user data
    // // in the bio
    var div = $("<div>");
    div.append(`<h2>Name: ${data.name}</h2>`);
    div.append(`<h2>Age: ${data.age}</h2>`);
    $("#users").append(div);
});

// using JavaScript create a folder called bio
// SET the following data:
// name, age
$("#saveButton").on("click", function () {
    // get value of the inputs
    var name = $("#nameInput").val();
    var age = $("#ageInput").val();

    database.ref("bio/").push({
        name: name,
        age: age
    });
});


