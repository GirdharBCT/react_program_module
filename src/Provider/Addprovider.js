import React from 'react';  
import axios from 'axios';  
import '../Provider/Addprovider.css'  
import baseUrl from '../apiUrl.js'
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
class Addprovider extends React.Component{  
constructor(props){  
super(props)  
this.state = {  
firstName:'',  
middleName:'', 
lastName:'', 
hospitalId:'',
errors:{}
}  
}   
Addprovider=()=>{  
  axios.post(baseUrl.baseUrl+'providers', {firstName:this.state.firstName,middleName:this.state.middleName,lastName:this.state.lastName,hospitalId:parseInt(this.state.hospitalId)})  
.then(json => {  
  console.log("json.status",json.status);  
if(json.status===201){  
  
  // alert("Data Save Successfully");  
  console.log("history",this.props.history);
  console.log(this.props.history.push('/providerlist'));
this.props.history.push('/Providerlist')  
}  
else{  
alert('Data not Saved');  
debugger;  
this.props.history.push('/Providerlist')  
}  
}) 
.catch(function (error) {  
  console.log("bijj",error);  
  let errors = {};
  errors["Status"]="Provider Already Exists";
  this.setState({ errors: errors });
  console.log("inside catch",errors );
  this.setState({firstName:'',middleName:'',lastName:'',hospitalId:''});
  return this.render();
  
}.bind(this) ) 
}  

CancelButton=()=>{
  // alert('Canceled!');
    this.props.history.push('/Providerlist')
}

checkValidation=(e)=>{
  let errors = {};
  let formIsValid = true;
  if(this.state.firstName=="")
  {
    errors["firstName"]="The FirstName Field is Required";
    formIsValid=false;
  }
  if(this.state.lastName=="")
  {
    errors["lastName"]="The LastName Field is Required";
    formIsValid=false;
  }
  // if(this.state.middleName=="")
  // {
  //   errors["middleName"]="The MiddleName Field is Required";
  //   formIsValid=false;
  // }
  if(this.state.hospitalId=="")
  {
    errors["HospitalId"]="The Hospital-Id Field is Required";
    formIsValid=false;
  }
  this.setState({ errors: errors });
  console.log("formIsValid=",formIsValid);
  e.preventDefault()
  if(formIsValid){
    return this.Addprovider()}

}
   
handleChange= (e)=> {  
  console.log(e.target.name,e.target.value,e.target.error);
this.setState({[e.target.name]:e.target.value});  
}  
   
render() {  
return (  
   <Container className="App">  
    <h4 className="PageHeading">Add Provider</h4>  
    <span style={{ color: "red",fontSize:"15px" }}>{this.state.errors["Status"]}</span>

    <Form className="form"  >  
    <br/>
   
      <Col>  
        <FormGroup row >  
        <Label for="name" sm={2}>First Name</Label> 
          <Col sm={10}> 
          
            <Input id="inputField" type="text" name="firstName" onChange={this.handleChange} value={this.state.firstName} placeholder="Enter First Name" />  
            <span style={{ color: "red",float:"left" }}>{this.state.errors["firstName"]}</span>
          </Col>  
        </FormGroup>  
<br/>
        <FormGroup row>  
          <Label for="name" sm={2}>Middle Name</Label>  
          <Col sm={10}>  
            <Input id="inputField" type="text" name="middleName" onChange={this.handleChange} value={this.state.middleName} placeholder="Enter Middle Name" /> 
            {/* <span style={{ color: "red",float:"left",fontSize:"15px" }}>{this.state.errors["middleName"]}</span>  */}
          </Col>  
        </FormGroup> 
        <br/>
        <FormGroup row>  
          <Label for="name" sm={2}>Last Name</Label>  
          <Col sm={10}>  
            <Input id="inputField" type="text" name="lastName" onChange={this.handleChange} value={this.state.lastName} placeholder="Enter Last Name" />  
            <span style={{ color: "red",float:"left",fontSize:"15px" }}>{this.state.errors["lastName"]}</span>
          </Col>  
        </FormGroup> 
        <br/>
        <FormGroup row>  
          <Label for="address" sm={2}>hospitalId</Label>  
          <Col sm={10}>  
            <Input id="inputField" type="int" name="hospitalId" onChange={this.handleChange} value={this.state.hospitalId} placeholder="Enter hospitalId" />  
            <span style={{ color: "red",float:"left",fontSize:"15px" }}>{this.state.errors["HospitalId"]}</span>
          </Col>  
        </FormGroup>  

        {/* <FormGroup row>  
          <Label for="date" sm={2}>CreatedOn</Label>  
          <Col sm={10}>  
            <Input type="text" name="CreatedON" onChange={this.handleChange} value={this.state.CreatedOn} placeholder="Enter CreatdOn" />  
          </Col>  
        </FormGroup>  

        <FormGroup row>  
          <Label for="date" sm={2}>ModifiedOn</Label>  
          <Col sm={10}>  
            <Input type="text" name="ModifiedOn" onChange={this.handleChange} value={this.state.ModifiedOn} placeholder="Enter ModifiedOn" />  
          </Col>  
        </FormGroup>   */}

      </Col>  
      <br/>
      <Col>  
        <FormGroup row id="btns">  
          
          <Col sm={1} style={{marginRight:"3rem"}}>  
          <button id="btn_bg"  type="submit" onClick={this.checkValidation} className="btn btn-success">Create</button>  
          </Col>  
          <Col sm={1}>  
            <Button  color="danger" onClick={this.CancelButton}>Cancel</Button> 
          </Col>  
            
        </FormGroup>  
      </Col>  

    </Form>  
  </Container>  
);  
}  
   
}  
   
export default Addprovider; 