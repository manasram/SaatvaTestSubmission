import React,{Component} from "react";
import {Container,Navbar} from 'react-bootstrap';

let ItemCount=0;
class NavBar extends Component{
    render() {
        return (
            <React.Fragment>
                <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"></link>
                <Navbar expand="lg" variant="light" style={{background:"lightgoldenrodyellow"}}>
                    <Container>
                        <Navbar.Brand href="#" >S A A T V A</Navbar.Brand>
                        <i className="fa fa-shopping-cart"></i>
                    </Container>
                </Navbar>
            </React.Fragment>
        );
    }

}

export default NavBar;