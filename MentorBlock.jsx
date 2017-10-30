import React from 'react';

// import MentorBlock from './MentorBlock';

export class MentorBlock extends React.Component {
    render() {
        var mentor = this.props.mentor;
        var mentorIds = this.props.mentorIds;

        return (<div style={{width: 120 + "px"}} className="wp-caption alignleft">
            <img className="" src={mentor.imageUrl} alt={mentor.firstName + ' ' + mentor.lastName} width="110"
                 height="110"/>
            <p className="wp-caption-text">
                <strong>
                    <a href={"http://www.pcc.edu/scripts/sdquery.pl?all=" + mentor.directory}>{mentor.firstName + ' ' + mentor.lastName}</a>
                </strong>
                <br/>
                {mentor.dept + ', ' + mentor.campus}
            </p>
        </div>);
    }
}