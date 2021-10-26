// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

//====================================================================================================================

import React from 'react';  
import Addprogram from './Program/Addprogram';  
import Programlist from './Program/Programlist';  
import Editprogram from './Program/Editprogram'; 
import Addprovider from './Provider/Addprovider';  
import Providerlist from './Provider/Providerlist';  
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import './App.css';  
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactBootstrap, {Navbar,Container,Nav,Jumbotron, Button, Col, Grid, Panel, FormGroup} from 'react-bootstrap'


import '@progress/kendo-theme-default/dist/all.css';
import { Calendar } from '@progress/kendo-react-dateinputs'

function App() {  
  return (  
    <Router>  
      <div className="container">  
        {/* <nav className="navbar navbar-expand-lg navheader">  
          <div className="collapse navbar-collapse" >  
            <ul className="navbar-nav mr-auto">  
              <li className="nav-item">  
                <Link to={'/AddProgram'} className="nav-link">AddProgram</Link>  
              </li>  
              <li className="nav-item">  
                <Link to={'/Programlist'} className="nav-link">Program List</Link>  
              </li>  
            </ul>  
          </div>  
        </nav>  */}
        
        {/* <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Phynd</Navbar.Brand>
    <Nav className="me-auto">
      <Link to={'/Providerlist'} className="nav-link">Provider Module</Link> 
      <Link to={'/Programlist'} className="nav-link">Program Module</Link> 
    </Nav>
    </Container>
  </Navbar> */}

        <br />  


        
        <Switch>  
          <Route exact path='/Addprogram' component={Addprogram} />  
          <Route path='/edit/:id' component={Editprogram} />  
          <Route path='/Programlist' component={Programlist} />  
          <Route path='/Providerlist' component={Providerlist} />
          <Route path='/Addprovider' component={Addprovider} />
        </Switch>  

        

      </div>  
      
    </Router>  
  );  
}  
  
export default App; 

