import React, { Component } from 'react';  
import axios from 'axios';  
import { Link,Route, withRouter } from 'react-router-dom';  
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
// import Programlist from './Program/Programlist';  
import baseUrl from '../apiUrl.js'

import '@progress/kendo-theme-default/dist/all.css';
import { Grid, GridColumn } from '@progress/kendo-react-grid';

class Table extends Component {  
  constructor(props) {  
    super(props);  
    }  
      
    Deleteprogram= () =>{  
     axios.delete(baseUrl.baseUrl+'programs',{ params:{Id:this.props.obj.Id}})  
    .then(json => {  
      
      console.log("Status of delete :",json.status);
    if(json.status===200){ 

    // alert('Record deleted successfully!!'); 
    this.props.history.push('/')
    this.props.history.push('/programlist')  
    
    }  
    })  
    } 
     
  render() {  
    return (  
        <tr>  
          <td>  
            {this.props.obj.Id} 
          </td> 
          <td>  
            {this.props.obj.Name} 
          </td>  
          <td>  
            {this.props.obj.Description}  
          </td>  
          {/* <td>  
            {this.props.obj.Class}  
          </td>  
          <td>  
            {this.props.obj.Address}  
          </td>   */}
          {/* <td>  
          <Link to={"/edit/"+this.props.obj.id} className="btn btn-success">Edit</Link>  
          </td>   */}
          <td>  
            <button type="button" onClick={this.Deleteprogram} className="btn btn-danger">Delete</button>  
            
          </td>  
        </tr>  
        

        // <Grid
        // data={this.props.obj}
        // >

        //     </Grid>
    );  
  }  
  
}  
  
export default withRouter(Table);