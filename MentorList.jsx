import React from 'react';

import MentorBlock from './MentorBlock.jsx';

export default class MentorList extends React.Component {
    render() {
        const mentors = this.props.mentors.map((mentor) => <MentorBlock key={mentor.directory} mentor={mentor}/>);
        //const mentors = props.mentors.map((mentor) => <div key={mentor.directory} mentor={mentor}>{mentor.directory}</div>);
        return <div>{mentors}</div>;
    }
}


