import React from 'react';
import  "../css/style.css";

class AddForm extends React.Component{
    render() {
        
        const { name, Designation, Address, EmpId } = this.props.details;
        return  <table align="center" border="2">
<tbody>
        <tr>
            <th>{name}</th>
            <th>{Designation}</th>
            <th>{Address}</th>
            <th>{EmpId}</th>
        </tr>       
        </tbody>
    </table>
    }

}

export default AddForm;