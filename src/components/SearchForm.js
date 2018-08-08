import React from 'react';
import  "../css/style.css";

class SearchForm extends React.Component{
    render() {
        const { search } = this.props.details;
        const { name, Designation, Address, EmpId } = this.props.details;
 let x = { search };
 let y = { EmpId };
let arry = [];
 arry.push(x);
 console.log(arry);


        return <table align="center" border="2">
<tbody>
        <tr>
            <th>SearchFound</th>
        </tr>       
        </tbody>
    </table>
    }
}

export default SearchForm;