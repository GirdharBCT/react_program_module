import React, { Component, useState } from 'react'; 
import { Link } from 'react-router-dom';  
import axios from 'axios';  
import Table from './Table';  
import '../Provider/Addprovider.css'
import baseUrl from '../apiUrl.js'
import '@progress/kendo-theme-default/dist/all.css';
import 'font-awesome/css/font-awesome.min.css';
import { Grid, GridColumn } from '@progress/kendo-react-grid';

import Cookies from 'js-cookie';
console.log("cookie=>",Cookies.get());
// import { useCookies } from 'react-cookie';
// const [cookies, setCookie] = useCookies(['name']); // getting react hooks
// cookie2.set('access_token', 'content of cookie');
// cookie = cookies.get('access_token');
// console.log(cookie)

const Loader = () => (
  <div class="divLoader">
    <svg class="svgLoader" viewBox="0 0 100 100" width="10em" height="10em">
      <path stroke="none" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#51CACC" transform="rotate(179.719 50 51)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></path>
    </svg>
  </div>
);

export default class providerlist extends Component {  
  
  
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
      console.log("cdm cookie=>",Cookies.get());
      //debugger;  
      console.log("this.state.searchItem",this.state.searchItem);
      console.log("baseUrl=>",baseUrl.baseUrl);
      axios.get(baseUrl.baseUrl+'providers/func',{ params:{Search:this.state.searchItem}}/*,{credentials: "same-origin"}*/)  
        .then(response => {  
          this.setState({ business: response.data, loading:false });  
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

    display_table=()=>{

      if(this.state.business.length==0 && this.state.searchItem!=""){
        return (<div style={{align:"center"}}>*No Records Found.</div>)
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

    }
   
    
 
    render() {  
      return (  

        <div className="list">  
        
          <div className="search">
          <input class="form-control mr-sm-2" type="search" name="searchItem" onChange={this.handleChange} defaultValue={this.state.searchItem} placeholder="Find by Name"/>
          <button type="submit" onClick={this.reload} className="btn btn-outline-dark" value="Search" name="search">Search</button> 
          </div>
         

          <br/>
          
          <p className="add-btn">
          <a class="btn btn-success" href="/Addprovider"><i class="fa fa-plus" aria-hidden="true"></i> &nbsp;Add provider</a> 
          
          </p>

          {this.state.loading ? <Loader /> :this.display_table()}

          
        </div>  
        
      );  
    }  
  } 