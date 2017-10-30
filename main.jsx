import { MentorList } from './MentorList.jsx';
import { DepartmentList } from './DepartmentList.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

$(
    function() {
        var departments;
        var mentorList;
        var mentorIds;
        var combo = new Combo($("#department_combo"), $("#mentor_search"), selectItem);

        function selectItem(item) {
            var targetMentorIds = [];

            departments.forEach(function (department) {
                if (department.dept.toLowerCase().indexOf(item.toLowerCase()) > -1) {
                    if (department.mentorid !== "0" && targetMentorIds.indexOf(department.mentorid) == -1) {
                        targetMentorIds.push(department.mentorid);
                    }
                }
            });
            if (mentorList.length === 0) {
                ReactDOM.render(
                    <div>
                        <h3>No Mentor Assigned!</h3>
                        <p>I'm sorry, there is currently no mentor assigned to that department. Please contact <a
                            href="mailto:gkaminsk@pcc.edu">Greg Kaminski</a> for more information about the Distance
                            Learning Faculty Mentor program at PCC.</p>
                        <br style={{ clear: "both" }} />
                    </div>, document.getElementById('your_mentor'));
            } else {
                ReactDOM.render(
                    <div>
                        <h3>Your Mentors</h3>
                        <MentorList mentors={mentorList.filter((mentor) => targetMentorIds.indexOf(mentor.id) > -1)}
                                    mentorIds={mentorIds}/>
                        <br style={{ clear: "both" }} />
                    </div>, document.getElementById('your_mentor')
                );
            }
        }

        function render() {
            if (departments && mentorList && mentorIds) {
                ReactDOM.render(
                    <MentorList mentors={mentorList}
                                mentorIds={mentorIds}/>, document.getElementById('meet_the_mentors'));
                ReactDOM.render(
                    <DepartmentList
                        departments={departments}/>, document.getElementById('department_table'));
            }
        }

        $.getJSON("http://localhost/CIS233W/mentors/departments.php", (data) => {
            departments = data;
            combo.setItems(data.map(function(department) {
                return department.dept;
            }));
            render();
        });
        $.getJSON("http://localhost/CIS233W/mentors/mentors.php", (data) => {
            mentorList = data;
            mentorIds = new Object();
            data.forEach(function (mentor) {
                mentorIds[mentor.id] = mentor;
            });
            render();
        });

    }
);