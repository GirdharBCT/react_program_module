import React, { Component } from 'react';  
import axios from 'axios';  
import { Link,Route, withRouter } from 'react-router-dom';  
import Providerlist from './Providerlist'; 
import '@progress/kendo-theme-default/dist/all.css';
import { Grid, GridColumn } from '@progress/kendo-react-grid';

var selectedTab;

class Table extends Component {  
  constructor(props) {  
    super(props);  
    }  
      
    Deleteprovider= () =>{  
      console.log("id=",this.props.obj.id);
     axios.delete('https://localhost:44396/providers/'+this.props.obj.id)  
    .then(json => {  
    if(json.status===200){  
    alert('Record deleted successfully!!'); 
    console.log("history",this.props.history);
    console.log("history.push wala ",this.props.history.push('/providerlist'));
    this.props.history.push('/')  
    console.log("after /");
    this.props.history.push('/providerlist')  
    // <Route path='/Providerlist' component={Providerlist} />
     
    }  
    })  
    } 
     
  render() {  
    return (  
        <tr>  
          <td>  
            {this.props.obj.id} 
          </td> 
          <td>  
            {/* {this.props.obj.firstName+" "+this.props.obj.middleName+" "+this.props.obj.lastName}  */}
            {this.props.obj.name}
          </td>  
          <td>  
            {this.props.obj.hospitalId}  
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
            <button type="button" onClick={this.Deleteprovider} className="btn btn-danger">Delete</button> 
            {/* <Route path='/Providerlist' component={Providerlist} curTab={selectedTab} />  */}
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