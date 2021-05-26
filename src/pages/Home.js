import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,ListGroup} from 'react-bootstrap'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: {},
      isLoaded: false
    }
  }

  componentDidMount() {

    fetch('http://localhost:8090/mettl-api-intg/v1/getAccountInfo')
      .then(res => res.json())
      .then(json => {
        console.log(json)
        this.setState({
          isLoaded: true,
          items: json,
        })
      })
      .catch((error) => {
        console.error(error)
      });

  }
  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return (

        <div>Loading...</div>
      )
    }

    return (
      <div className="Home">
        <Card style={{ width: '18rem' }} className="border-1 data">
          <ListGroup variant="flush">
            <ListGroup.Item>First Name : {items.accountInfo.firstName}</ListGroup.Item>
            <ListGroup.Item>Last Name : {items.accountInfo.lastName}</ListGroup.Item>
            <ListGroup.Item>Email : {items.accountInfo.email}</ListGroup.Item>
            <ListGroup.Item>Account Type : {items.accountInfo.accountType}</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    )

  }

}

export default Home;
