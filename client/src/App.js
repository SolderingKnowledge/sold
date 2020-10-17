import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Navigationbar} from "./components/Navigationbar";
import {Footer} from "./components/Footer"
import {Container} from "react-bootstrap";
import './App.css';
import List from "./components/List"
import Description from "./components/Description";

function App() {
  return (
    <Router>
        <Navigationbar />
        <main>
            <Container><h1>Latest hot sales!</h1></Container>
            <Route path="/" component={List} exact /> {/*    exact will match the exact coordinate localhost:3000/    */}
            <Route path="/details/:id" component={Description} /> {/*    click on Item it will take you to Descriptions localhost:3000/details/2    */}
        </main>
        <Footer />
    </Router>
  );
}

export default App;
