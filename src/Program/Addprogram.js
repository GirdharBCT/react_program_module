import React from 'react';  
import axios from 'axios';  
import '../Program/Addprogram.css'  
import baseUrl from '../apiUrl.js'
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
class Addprogram extends React.Component{  
constructor(props){  
super(props)  
this.state = {  
Name:'',  
Description:'' ,
errors:{}  
}  
}   
Addprogram=()=>{  
  axios.post(baseUrl.baseUrl+'programs', {Name:this.state.Name,Description:this.state.Description})  
.then(json => {  
  console.log("Status of created :",json.status);
if(json.status===201){    
  // alert("Data Save Successfully");  
this.props.history.push('/Programlist')  
}  
else{  
alert('Data not Saved');  
debugger;  
this.props.history.push('/Programlist')  
}  
})  
}  
   
CancelButton=()=>{
  // alert('Canceled!');  
    this.props.history.push('/Programlist')
}

handleChange= (e)=> {  
this.setState({[e.target.name]:e.target.value});  
}  

checkValidation=(e)=>{
  let errors = {};
  let formIsValid = true;
  if(this.state.Name=="")
  {
    errors["Name"]="The Name Field is Required";
    formIsValid = false;
  }
  if(this.state.Description=="")
  {
    errors["Description"]="The Description Field is Required";
    formIsValid = false;
  }
  this.setState({ errors: errors });
  e.preventDefault()
  if(formIsValid){
    return this.Addprogram()}

}
   
render() {  
return (  
   <Container className="App">  
    <h4 className="PageHeading">Add Program</h4>  
    <Form className="form"  >  
      {/* <div>{}</div> */}
      <br/>
      <Col>  
        <FormGroup row>  
          <Label for="name" sm={2}>Name</Label>  
          <Col sm={10}>  
            <Input id="inputField" type="text"  name="Name" onChange={this.handleChange} value={this.state.Name} placeholder="Enter Name" />  
            <span style={{ color: "red",float:"left",fontSize:"15px" }}>{this.state.errors["Name"]}</span>
          </Col>  
        </FormGroup>  
        <br/>
        <FormGroup row>  
          <Label for="address" sm={2}>Description</Label>  
          <Col sm={10}>  
            <Input id="inputField" type="text"  name="Description" onChange={this.handleChange} value={this.state.Description} placeholder="Enter Description" />
            <span style={{ color: "red",float:"left",fontSize:"15px" }}>{this.state.errors["Description"]}</span>  
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
          
          <Col sm={1} style={{marginRight:"1.5rem"}}>  
          <button id="btn_bg" type="submit" onClick={this.checkValidation} className="btn btn-primary">Create</button>  
          </Col>  
          <Col sm={1}>  
            <Button color="danger" onClick={this.CancelButton} >Cancel</Button>
          </Col>  
          
        </FormGroup>  
      </Col>  

    </Form>  
  </Container>  
);  
}  
   
}  
   
export default Addprogram; 