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

const Loader = () => (
  <div class="divLoader">
    <svg class="svgLoader" viewBox="0 0 100 100" width="10em" height="10em">
      <path stroke="none" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#51CACC" transform="rotate(179.719 50 51)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></path>
    </svg>
  </div>
);

export default class Programlist extends Component {  
  
  constructor(props) {  
      super(props);  
      this.state = {
        business: [],
        searchItem:'',
        loading:true
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
          this.setState({ business: response.data, loading:false }); 

          
  
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

    display_table=()=>{
      if(this.state.business.length==0 && this.state.searchItem!=""){
        return (<div class="notFound">No Records Found.</div>)
      }
      else{
        return (

    <table id="center" className="table table-striped" style={{ marginTop: "8%"}}>  
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

)
}
    }
    
 
    render() {  
      return (  
          

        <div className="list">  
         <div className="search">
         <input class="form-control mr-sm-2" type="search" name="searchItem" onChange={this.handleChange} defaultValue={this.state.searchItem} placeholder="Find by Name"/>
          <button type="submit" onClick={this.reload} className="btn btn-outline-dark" value="Search" name="search">Search</button>  
          </div>
          
          {/* <br/> */}

          {/* <div className="add-btn">
          <a class="btn btn-success" href="/AddProgram">Add Program</a> 
          </div> */}
          <div class="add">

    <a class="btn btn-success" href="/AddProgram"><i class="fa fa-plus" aria-hidden="true" ></i>&nbsp; Add Program</a>

</div>

          {this.state.loading ? <Loader /> :this.display_table()}

          

          {/* <a class="btn btn-success" href="/AddProgram">Add Program</a>  */}
        </div>  
        
      );  
    }  
  } 