import React from 'react';

export default class DepartmentBlock extends React.Component {
    render() {
        var { department, mentorIds } = this.props;
        var mentorIds = this.props.mentorIds;
        var id = department.mentorid;

        if (id !== "0") {
            return (
                <tr>
                    <td>{department.dept}</td>
                    <td>{mentorIds[id].lastName}</td>
                </tr>
            );
        } else {
            return (
                <tr>
                    <td>{department.dept}</td>
                    <td>&mdash;</td>
                </tr>
            );
        }
    }
}
