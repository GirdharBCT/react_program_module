import React, { Component, useState } from 'react'; 
import { Link } from 'react-router-dom';  
import axios from 'axios';  
import Table from './Table';  
import '../Provider/Addprovider.css'
import baseUrl from '../apiUrl.js'
import '@progress/kendo-theme-default/dist/all.css';
import { Grid, GridColumn } from '@progress/kendo-react-grid';

import Cookies from 'js-cookie';
console.log("cookie=>",Cookies.get());
// import { useCookies } from 'react-cookie';
// const [cookies, setCookie] = useCookies(['name']); // getting react hooks
// cookie2.set('access_token', 'content of cookie');
// cookie = cookies.get('access_token');
// console.log(cookie)

// const [data,setData]=useState(null)
// function getData(val) {
//   setData(val.target.value)
// }

// axios.defaults.baseURL="https://localhost:44335/";
export default class providerlist extends Component {  
  
  
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
      console.log("cdm cookie=>",Cookies.get());
      //debugger;  
      console.log("this.state.searchItem",this.state.searchItem);
      console.log("baseUrl=>",baseUrl.baseUrl);
      axios.get(baseUrl.baseUrl+'providers/func',{ params:{Search:this.state.searchItem}}/*,{credentials: "same-origin"}*/)  
        .then(response => {  
          this.setState({ business: response.data });  
        //   //debugger;  
        })  
        .catch(function (error) {  
          console.log(error);  
        })  
    }  

    // searchList=()=>{  
    //   console.log("cdm cookie=>",Cookies.get());
    //   //debugger;  
    //   axios.get('https://localhost:44368/providers/func',{ params:{Search:this.state.searchItem}}/*,{credentials: "same-origin"}*/)  
    //     .then(response => {  
    //       this.setState({ business: response.data });  
    //     //   //debugger;  
    //     })  
    //     .catch(function (error) {  
    //       console.log(error);  
    //     })  
    // } 
      
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
        console.log("length",this.state.business.length);
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
          <a class="btn btn-success" href="/Addprovider">Add provider</a> 
          </p>


          {(()=>{
            if(this.state.business.length==0){
              return (<h4>No Records Found</h4>)
            }
            else{
              return (
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th>Id</th>  
                <th>Name</th>  
                {/* <th>Hospital-Id</th> */}
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
      })()
      }
          {/* <a class="btn btn-success" href="/Addprovider">Add provider</a>  */}
        </div>  
        
      );  
    }  
  } 