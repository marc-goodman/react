import React from 'react';

const mentorIds = {"1":{"id":"1","imageUrl":"http://www.pcc.edu/about/distance/wp-content/uploads/sites/2/2014/06/aecary-small-150x150.jpg","directory":"ann+cary","firstName":"Ann","lastName":"Cary","dept":"Math","campus":"SY"},"2":{"id":"2","imageUrl":"http://www.pcc.edu/about/distance/wp-content/uploads/sites/2/2013/10/marc-goodman-150x150.png","directory":"marc+goodman","firstName":"Marc","lastName":"Goodman","dept":"CIS","campus":"SY"},"3":{"id":"3","imageUrl":"http://www.pcc.edu/about/distance/wp-content/uploads/sites/2/2014/06/cdjones-150x150.jpg","directory":"doug+jones","firstName":"Doug","lastName":"Jones","dept":"CS","campus":"SY"},"4":{"id":"4","imageUrl":"http://www.pcc.edu/about/distance/wp-content/uploads/sites/2/2013/04/greg5-150x150.jpg","directory":"greg+kaminski","firstName":"Greg","lastName":"Kaminski","dept":"Distance Ed","campus":"SY"},"5":{"id":"5","imageUrl":"http://www.pcc.edu/about/distance/wp-content/uploads/sites/2/2013/04/IMG_1545-150x150.jpg","directory":"tani+mcbeth","firstName":"Tani","lastName":"McBeth","dept":"Psychology","campus":"SY"},"6":{"id":"6","imageUrl":"http://www.pcc.edu/about/distance/wp-content/uploads/sites/2/2013/03/jonimeisner.jpg","directory":"joni+meisner","firstName":"Joni","lastName":"Meisner","dept":"CAS","campus":"SY"},"7":{"id":"7","imageUrl":"http://www.pcc.edu/distance/wp-content/uploads/sites/2/2017/01/NoraStevens-150x150.jpg","directory":"nora+stevens","firstName":"Nora","lastName":"Stevens","dept":"Biology/HIM","campus":"SY"},"8":{"id":"8","imageUrl":"http://www.pcc.edu/about/distance/wp-content/uploads/sites/2/2013/04/Jason-Pinkal-150x150.jpg","directory":"jason+pinkal","firstName":"Jason","lastName":"Pinkal","dept":"Distance Ed","campus":"CG"},"9":{"id":"9","imageUrl":"http://www.pcc.edu/about/distance/wp-content/uploads/sites/2/2013/04/rebecca-150x150.jpg","directory":"rebecca+robinson","firstName":"Rebecca","lastName":"Robinson","dept":"MSD","campus":"SE"},"10":{"id":"10","imageUrl":"http://www.pcc.edu/about/distance/wp-content/uploads/sites/2/2013/03/LES_PCC-291x300.jpg","directory":"laura+sanders","firstName":"Laura","lastName":"Sanders","dept":"English","campus":"SE/SY"},"11":{"id":"11","imageUrl":"http://www.pcc.edu/about/distance/wp-content/uploads/sites/2/2013/10/Rondi_Schei-e1382058829837.jpg","directory":"rondi+schei","firstName":"Rondi","lastName":"Schei","dept":"Economics","campus":"SY"},"12":{"id":"12","imageUrl":"http://www.pcc.edu/about/distance/wp-content/uploads/sites/2/2013/03/peter-150x150.jpg","directory":"peter+seaman","firstName":"Peter","lastName":"Seaman","dept":"Distance Ed","campus":"SY"},"13":{"id":"13","imageUrl":"http://www.pcc.edu/about/distance/wp-content/uploads/sites/2/2015/03/LoriW-150x150.jpg","directory":"lori+wamsley","firstName":"Lori","lastName":"Wamsley","dept":"Education","campus":"CA"}};

export class DepartmentBlock extends React.Component {
    render() {
        var department = this.props.department;
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
