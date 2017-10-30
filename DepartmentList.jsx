import React from 'react';

import { DepartmentBlock } from './DepartmentBlock.jsx';

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

export class DepartmentList extends React.Component {
    render() {
        const departments = this.props.departments.map((department) => <DepartmentBlock key={department.dept}
                                                                                        department={department}/>);
        //const mentors = props.mentors.map((mentor) => <div key={mentor.directory} mentor={mentor}>{mentor.directory}</div>);
        return (
            <table>
                <DepartmentListHeader/>
                <tbody>
                {departments}
                </tbody>
            </table>
        );
    }
}


