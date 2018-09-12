$(document).ready(function () {
    var studentEnrollmentCount = 0;

    function updateStudentEnrollmentCount() {
        studentEnrollmentCount++;
        $("h2").text("Student Enrollment: " + studentEnrollmentCount);
    }
    // get access to the button and add a click listener
    $("button").on("click", function (event) {
        event.preventDefault();

        // capture the input
        var studentName = $("input").val();

        // append the input to the screen
        // create tr
        var tr = $("<tr>");
        // create td
        var td = $("<td>");
        // add a random image from this url:
        // https://api.adorable.io/avatars/285/cost@adorable.png

        // instead of using the email cost@adorable.png
        var apiUrl = "https://api.adorable.io/avatars/285/" + studentName + "@adorable.png";

        var img = $("<img>");

        img.attr("src", apiUrl);
        img.addClass("avatar");

        td.append(img);
        // set the contents of the td
        td.append(studentName);

        // append the td to the tr
        tr.append(td);
        // append the tr to the screen
        $("table").append(tr);
        // clear the input?
        $("input").val("");
        // update student enrollment count
        updateStudentEnrollmentCount();

    });

















});