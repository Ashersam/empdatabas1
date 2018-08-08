import React from 'react';
import AddForm from "./AddForm";
import  "../css/style.css";
import SearchForm from './SearchForm';

class EmpForm extends React.Component {
    searchRef = React.createRef();
    nameRef = React.createRef();
    DesignationRef = React.createRef();
    AddressRef = React.createRef();

    state = {
        form: {},
        search:{},
        counter: 0
      };
createFrom = event => {
    event.preventDefault();
    this.setState((prevState) => ({
        counter: prevState.counter + 1

  }));


    const EmployeeData = {
      name: this.nameRef.value.value,
      Designation: this.DesignationRef.value.value,
      Address: this.AddressRef.value.value,
      EmpId: "emp"+ this.state.counter
    } 

        // 1. Take a copy of the existing state
        const form = { ...this.state.form };
        // 2. Add our new fish to that fishes variable
        form[`EmployeeData${Date.now()}`] = EmployeeData;
        // 3. Set the new fishes object to state
        this.setState({ form });

      
            event.currentTarget.reset();
};

    searchForm = event => {
    event.preventDefault();
    const searchdata = {
    search: this.searchRef.value.value
    }

    const search ={ ...this.state.search };
    search[`searchdata${Date.now()}`] = searchdata;
    this.setState({ search });
    
    event.currentTarget.reset();
   
};


deleteform = key => {
     // 1. Take a copy of the existing state
     const form = { ...this.state.form };
     // 2. Add our new fish to that fishes variable
     form[key] = null;
     // 3. Set the new fishes object to state
     this.setState({ form });
}


//   constructor(props) {
//     super(props);
//     // this.state = {textData: ''};
//     this.state = {
//         search: '',
//         name: "",
//         Designation:"",
//         Address:"",
//         elemArray: []
//     };
//   }

//   handleChange = (event) => {
//     this.setState({
//         [event.target.name]: event.target.value
//     });
//   }

//   handleSubmit = (event) => {
//     //   alert('You submitted text data: ' + this.state.textData);
//     var search1 = this.state.search;
//     var name1 = this.state.name;
//     var Design1 = this.state.Designation;
//     var addr1 = this.state.Address;
//       event.preventDefault(); 
//   }




  render(){
    return( 
        <div>
       <form onSubmit={this.searchForm}  className="form0">
       <h4 align="left">Enter EmpID to Search</h4>
        <input 
        type="text" 
        name="search" 
        ref={this.searchRef}
        required  
        placeholder="Eg: Emp0" 
        // value={this.state.search} 
        // onChange={this.handleChange} 
        />
        <button type="submit" value="Search">Search
        </button>
        </form>



       <form onSubmit={this.createFrom} className="form2">
       <h3>Fill Up The following Details</h3>
       <label>
            <b>Emp_Name</b>
        </label>
        <input 
        type="text" 
        name="name" 
        ref={this.nameRef}
        // value={this.state.name}
        // onChange={this.handleChange}
        id="name" 
        placeholder="Employee Name" 
        maxLength="18" required/>
        <p id="name1"></p>
        <label>
            <b>Designation</b>
        </label>
        <input 
        type="text" 
        name="Designation" 
        ref={this.DesignationRef}
        // value={this.state.Designation}
        // onChange={this.handleChange}
        required maxLength="15" 
        placeholder="Employee Designation"/>
        <p id="Design"></p>
        <label>
            <b>Address</b>
        </label>
        <input 
        type="text" 
        name="Address" 
        ref={this.AddressRef}
        // value={this.state.Address}
        // onChange={this.handleChange}
        id="Address" 
        placeholder="Employee Address"/>
        <p id="Add"></p>
        <button type="submit" 
        value="Submit"> Save 
        </button>
        <ul className='forms'>
        {Object.keys(this.state.form).map(key => <AddForm key={key} 
        details = {this.state.form[key]} />)}
         {Object.keys(this.state.form).map(key => <SearchForm key={key} 
        details = {this.state.form[key]} />)}
        <ul className='forn'>
        {Object.keys(this.state.search).map(key => <SearchForm key={key} 
        details = {this.state.search[key]} />)}
        </ul>
        </ul>
        </form>
       </div>
       
    )
}

}
export default EmpForm;