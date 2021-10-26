import React, { Component,useState } from 'react'; 
import { Link } from 'react-router-dom';  
import axios from 'axios';  
import Table from './Table';  
import '../Program/Addprogram.css'
  
import '@progress/kendo-theme-default/dist/all.css';
import { Grid, GridColumn } from '@progress/kendo-react-grid';




var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzUxNzA0MTcsImlzcyI6IlN5c3RlbS5TZWN1cml0eS5DbGFpbXMuQ2xhaW1bXSJ9.xzzytGjO2iG8IFc1j3HHjBU7YHdZN3O_Vm8TU7ICMBk";

export default class Programlist extends Component {  
  
  constructor(props) {  
      super(props);  
      this.state = {business: []};  
      // const [data,setData]=useState(null)
      // function getData(val) {
      //   setData(val.target.value)
      // }
    }  

    state = {
        users: []
      }
      
    componentDidMount(){  
      
      //debugger;  
      axios.get('https://localhost:44368/programs/func', {/*params:{Search:getData},*/ headers: {"Authorization" : `Bearer ${token}`} })  
        .then(response => { 
          console.log("status code",response.status); 
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

    // tabRow(){  
    //     return this.state.business.map(function(object, i){  
    //         console.log(<Table objjj={object} key={i} />);
    //         console.log("test1");
    //         <Table obj={object} key={i} />
    //         console.log("test2");
    //         // console.log(obj);
    //         return (obj => (
    //             <tr key={obj.Id}>
    //             <td>{obj.Id}</td>
    //             <td>{obj.Name}</td>
    //             <td>{obj.Description}</td>
    //             </tr>
    //             ))
            
    //         });  
    // }
            

    // tabRow(){  
    //     return this.state.business.map(function(object, i){  
    //         return <Table obj={object.map(item=>
    //                             <tr key={item.Id}>
    //                                <td >{item.Name}</td>
    //                                <td >{item.Description}</td>)
    //                             </tr> )} key={i} />;  
    //     });  
    //   }
    
 
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
          <h4>Program List</h4>  
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
             
            //  this.state.business.map(
            //     obj => 
            //     <tr key = {obj.id}>
            //         <td> {obj.id}</td>
            //          <td> {obj.name} </td>   
            //          <td> {obj.description}</td>
            //          <td>
            //             {/* <Link to={"/edit/"+key} className="btn btn-success">Edit</Link>  */}
            //              <button onClick={"/edit/"+this.props.obj.Id} className="btn btn-info">Update </button>
            //              <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
            //              <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
            //          </td>
            //     </tr>
            // )

            

             }   
             
            </tbody>  
          </table> 
          <a class="btn btn-success" href="/AddProgram">Add Program</a> 
        </div>  
        
      );  
    }  
  } 