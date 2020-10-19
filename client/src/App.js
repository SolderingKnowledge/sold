import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Navigationbar} from "./components/Navigationbar";
import {Footer} from "./components/Footer"
import {Container} from "react-bootstrap";
import './App.css';
import Items from "./components/Items"
import Description from "./components/Description";
import Cart from "./components/Cart";
import LoginScreen from "./screens/LoginScreen";

function App() {
  return (
    <Router>
        <Navigationbar />
        <main>
            <Container><h1>Latest hot sales!</h1></Container>
            <Route path='/login' component={LoginScreen} />
            <Route path="/" component={Items} exact /> {/*    exact will match the exact coordinate localhost:3000/    */}
            <Route path="/item/:id" component={Description} /> {/*    click on Item it will take you to Descriptions localhost:3000/details/2    */}
            <Route path="/cart/:id?" component={Cart} /> {/* id is optional */}
        </main>
        <Footer />
    </Router>
  );
}

export default App;
