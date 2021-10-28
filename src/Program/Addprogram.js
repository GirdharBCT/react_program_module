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
Description:''   
}  
}   
Addprogram=()=>{  
  axios.post(baseUrl.baseUrl+'programs', {Name:this.state.Name,Description:this.state.Description})  
.then(json => {  
  console.log("Status of created :",json.status);
if(json.status===201){    
  alert("Data Save Successfully");  
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
  alert('Canceled!');  
    this.props.history.push('/Programlist')
}

handleChange= (e)=> {  
this.setState({[e.target.name]:e.target.value});  
}  
   
render() {  
return (  
   <Container className="App">  
    <h4 className="PageHeading">Enter Program Informations</h4>  
    <Form className="form">  
      <Col>  
        <FormGroup row>  
          <Label for="name" sm={2}>Name</Label>  
          <Col sm={10}>  
            <Input type="text" name="Name" onChange={this.handleChange} value={this.state.Name} placeholder="Enter Name" />  
          </Col>  
        </FormGroup>  

        <FormGroup row>  
          <Label for="address" sm={2}>Description</Label>  
          <Col sm={10}>  
            <Input type="text" name="Description" onChange={this.handleChange} value={this.state.Description} placeholder="Enter Description" />  
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
          <button type="button" onClick={this.Addprogram} className="btn btn-success">Submit</button>  
          </Col>  
          <Col sm={1}>  
            <Button color="danger" onClick={this.CancelButton} >Cancel</Button>
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
   
export default Addprogram; 