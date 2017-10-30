$(function () {
    var mentors;
    var mentorIds;
    var departments;
    var combo;



    function mentorBlock(mentor) {
        /*
        var m = new MentorBlock(mentor);
        ReactDOM.render(m, document.getElementById("root"));
        */
    }
    
    function generateMentorBlocks() {
        /*
        var meet = $("#meet_the_mentors");

        mentors.forEach(function (mentor) {
            meet.append(mentorBlock(mentor));
        });
        */
    }

    function generateDepartmentTable() {
        /*
        var table = $('<table><thead><tr><th scope="col">Department</th><th scope="col">Mentor</th></tr>');

        departments.forEach(function(department) {
            var id = department.mentorid;

            if(id !== "0") {
                var row = $('<tr><td>' + department.dept + '</td><td>' + mentorIds[id].lastName + '</td></tr>');
                table.append(row);
            } else {
                var row = $('<tr><td>' + department.dept + '</td><td>&mdash;</td></tr>');
                table.append(row);
            }
        });
        $("#department_table").append(table);
        */
    }
    



    function fetchDepartments() {
        /*
        $.getJSON("http://localhost/CIS233W/mentors/departments.php", function (data) {
            departments = data;
            generateDepartmentTable();
            combo.setItems(departments.map(function(department) {
                return department.dept;
            }));
        });
        */
    }

    function fetchMentors() {
        /*
        $.getJSON("http://localhost/CIS233W/mentors/mentors.php", function (data) {
            mentors = data;
            mentorIds = new Object();
            generateMentorBlocks();
            mentors.forEach(function (mentor) {
                mentorIds[mentor.id] = mentor;
            });
            fetchDepartments();
        });
        */
    }

    fetchMentors();

});