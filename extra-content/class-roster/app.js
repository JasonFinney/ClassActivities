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
        // set the contents of the td
        td.text(studentName);

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