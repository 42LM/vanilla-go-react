import React, { Component } from 'react'
import './Timestamp.css';

export default class Timestamp extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    }
  }

  async componentDidMount() {
    await fetch("/api/timestamp")
      .then(response => response.text())
      .then((result) => {
        this.setState({
          data: result
        });
      },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            data: error
          });
        }
      )
  }

  render() {
    return <p className="timestamp">{this.state.data}</p>;
  }
}
