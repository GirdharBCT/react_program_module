import React from 'react';  
import axios from 'axios';  
import '../Provider/Addprovider.css'  
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
class Addprovider extends React.Component{  
constructor(props){  
super(props)  
this.state = {  
firstName:'',  
middleName:'', 
lastName:'', 
hospitalId:'' //,  
// CreatedOn:'',  
// ModifiedOn:''  
}  
}   
Addprovider=()=>{  
  axios.post('https://localhost:44368/providers', {firstName:this.state.firstName,middleName:this.state.middleName,lastName:this.state.lastName,hospitalId:parseInt(this.state.hospitalId)})  
.then(json => {  
  console.log(json.status);  
if(json.status===201){  
  
  alert("Data Save Successfully");  
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
}  

CancelButton=()=>{
  alert('Canceled!');  
  // this.props.history.push('/')  
  //   console.log("after /");
    this.props.history.push('/Providerlist')
}


   
handleChange= (e)=> {  
  console.log(e.target.name,e.target.value);
this.setState({[e.target.name]:e.target.value});  
}  
   
render() {  
return (  
   <Container className="App">  
    <h4 className="PageHeading">Enter provider Informations</h4>  
    <Form className="form">  
      <Col>  
        <FormGroup row>  
          <Label for="name" sm={2}>First Name</Label>  
          <Col sm={10}>  
            <Input type="text" name="firstName" onChange={this.handleChange} defaultValue={this.state.firstName} placeholder="Enter First Name" />  
          </Col>  
        </FormGroup>  

        <FormGroup row>  
          <Label for="name" sm={2}>Middle Name</Label>  
          <Col sm={10}>  
            <Input type="text" name="middleName" onChange={this.handleChange} defaultValue={this.state.middleName} placeholder="Enter Middle Name" />  
          </Col>  
        </FormGroup> 

        <FormGroup row>  
          <Label for="name" sm={2}>Last Name</Label>  
          <Col sm={10}>  
            <Input type="text" name="lastName" onChange={this.handleChange} defaultValue={this.state.lastName} placeholder="Enter Last Name" />  
          </Col>  
        </FormGroup> 

        <FormGroup row>  
          <Label for="address" sm={2}>hospitalId</Label>  
          <Col sm={10}>  
            <Input type="int" name="hospitalId" onChange={this.handleChange} defaultValue={this.state.hospitalId} placeholder="Enter hospitalId" />  
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

      <Col>  
        <FormGroup row>  
          <Col sm={5}>  
          </Col>  
          <Col sm={1}>  
          <button type="button" onClick={this.Addprovider} className="btn btn-success">Submit</button>  
          </Col>  
          <Col sm={1}>  
            <Button color="danger" onClick={this.CancelButton}>Cancel</Button> 
          </Col>  
          <Col sm={5}>  
          </Col>  
        </FormGroup>  
      </Col>  

    </Form>  
  </Container>  
);  
}  
   
}  
   
export default Addprovider; 