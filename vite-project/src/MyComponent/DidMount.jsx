import React, { Component } from "react";
class CompDidMount extends Component {
    constructor(props) {
      super(props)
      this.state = { heading: 'Old heading' };
      console.log("Hey from Constructor!");
    }
    
// Odată apelată metoda de randare, componenta este inserată în DOM și apoi este apelată metoda componentDidMount() .
// Această metodă este locul în care vă actualizați starea și apelați API-uri externe.
// Este locul perfect pentru a face actualizări de stare și, de asemenea, pentru a apela API-uri externe.
    componentDidMount() {
        setTimeout(() => {
          this.setState({ heading: 'New heading!!!!' })
        }, 2000)
        console.log("Hey from componentDidMount!");
      }
  
    render() {
    console.log('1-st render');
      return <h1>{this.state.heading}</h1>
    }
  }
  
  export default CompDidMount;