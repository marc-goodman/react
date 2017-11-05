import React from 'react';

import DepartmentBlock from './DepartmentBlock.jsx';

class DepartmentListHeader extends React.Component {
    render() {
        return (
            <thead>
            <tr>
                <th scope="col">Department</th>
                <th scope="col">Mentor</th>
            </tr>
            </thead>
        );
    }
}

export default class DepartmentList extends React.Component {
    render() {
        var { departments, mentorIds } = this.props;
        
        const depts = departments.map((department) => <DepartmentBlock key={department.dept} department={department} mentorIds={mentorIds}/>);
        //const mentors = props.mentors.map((mentor) => <div key={mentor.directory} mentor={mentor}>{mentor.directory}</div>);
        return (
            <table>
                <DepartmentListHeader/>
                <tbody>
                {depts}
                </tbody>
            </table>
        );
    }
}


