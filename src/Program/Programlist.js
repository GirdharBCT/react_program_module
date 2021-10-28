import React, { Component,useState } from 'react'; 
import { Link } from 'react-router-dom';  
import axios from 'axios';  
import Table from './Table';  
import '../Program/Addprogram.css'
import baseUrl from '../apiUrl.js'
import '@progress/kendo-theme-default/dist/all.css';
import { Grid, GridColumn } from '@progress/kendo-react-grid';


// const [data,setData]=useState(null)

var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOiIxMC8yNy8yMDIxIDU6NDI6MDYgQU0iLCJVc2VyIjoiYWJoaWppdCBzaGluZGUiLCJJZCI6IjEiLCJFbWFpbCI6ImFiaGlqaXRAZ21haWwuY29tIiwiSG9zcGl0YWxJZCI6IjEiLCJleHAiOjE2MzUzMTY5MjYsImlzcyI6IkF1dGhTZXJ2ZXIiLCJhdWQiOiJBcGlTd2FnZ2VyQ2xpZW50In0.9ISa4Sfu99pJzp8Iv3kTJhFtseYhGUC_cd2smezsjbQ";

export default class Programlist extends Component {  
  
  constructor(props) {  
      super(props);  
      this.state = {
        business: [],
        searchItem:''
    };  

    }  

    state = {
        users: []
      }
      
    componentDidMount(){  
      
      //debugger;  
      axios.get(baseUrl.baseUrl+'programs/func', { params:{Search:this.state.searchItem} /*, headers: {"Authorization" : `Bearer ${token}`}*/ })  
        .then(response => { 
          console.log("status code",response.status); 
          this.setState({ business: response.data }); 

          
  
        })  
        .catch(function (error) {  
          console.log(error);  
          
        })  
    }  
    
    
    reload = () => 
    {
        //RELOAD COMPONENT
        this.componentDidMount();
    };

    handleChange= (e)=> {  
      console.log("item ",e.target.name,e.target.value);
    this.setState({[e.target.name]:e.target.value}); 
    // this.reload() 
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
          

        <div className="list">  
         <div className="search">
          <input type="text" name="searchItem" onChange={this.handleChange} defaultValue={this.state.searchItem} />
          <button type="button" onClick={this.reload} className="btn btn-dark mb-1">Search</button> 
          </div>
          
          <br/>

          <p className="add-btn">
          <a class="btn btn-success" href="/AddProgram">Add Program</a> 
          </p>

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
          {/* <a class="btn btn-success" href="/AddProgram">Add Program</a>  */}
        </div>  
        
      );  
    }  
  } 