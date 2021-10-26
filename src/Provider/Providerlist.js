import React, { Component, useState } from 'react'; 
import { Link } from 'react-router-dom';  
import axios from 'axios';  
import Table from './Table';  
import '../Provider/Addprovider.css'
  
import '@progress/kendo-theme-default/dist/all.css';
import { Grid, GridColumn } from '@progress/kendo-react-grid';

// const [data,setData]=useState(null)
// function getData(val) {
//   setData(val.target.value)
// }
export default class providerlist extends Component {  
  
  
  constructor(props) {  
      super(props);  
      this.state = {business: []};  
    }  

    state = {
        users: []
      }
      
    componentDidMount(){  
      //debugger;  
      axios.get('https://localhost:44368/providers/func')  
        .then(response => {  
          this.setState({ business: response.data });  
        //   //debugger;  
    //     .then(response => response.data)
    // .then((data) => {
    //   this.setState({ users: data })
    //   console.log("user wala ",this.state.users.pop())
          
  
        })  
        .catch(function (error) {  
          console.log(error);  
        })  
    }  
      
    tabRow(){  
        console.log("Data ",this.state.business);
      return this.state.business.map(function(object, i){  
          console.log(<Table objjj={object} key={i} />);
          console.log("test");
          return <Table obj={object} key={i} />;  
      });  
    }  

    
 
    render() {  
      return (  
          
        // <Grid
        // data={this.tabRow()
        //              }>

        //     </Grid>
            
        
        <div className="list">  
          {/* <div className="search">
          <input type="text" name="search" onChange={getData} />
        <input type="submit"  value="Search" name="submit" />
          </div> */}
          <h4>Provider List</h4>  
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th>Id</th>  
                <th>Name</th>  
                <th>Description</th>  
                {/* <th>Address</th>   */}
                <th colSpan="4">Action</th>  
              </tr>  
            </thead>  
            <tbody>  
             { this.tabRow()
             
             }   
             
            </tbody>  
          </table> 
          <a class="btn btn-success" href="/Addprovider">Add provider</a> 
        </div>  
        
      );  
    }  
  } 