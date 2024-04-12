import React from "react";

class GetSnapshotBeforeUpdate extends React.Component {
    constructor() {
      super()
      this.state = {
        show: false,
      }
      console.log("Hey from constructor Component!");
    }
  
    render() {
      console.log("1-st render!");

      return (
        <div>
          <h1>User List</h1>
          <button onClick={() => this.setState({ show: true })}>Get Users</button>
          {this.state.show ? <User amount="1000" /> : null}
        </div>
      )
    }
  }
  class User extends React.Component {
    constructor() {
      super()
      this.state = {
        amount: 2000,
      }
      console.log("Hey from constructor User !");

    }
  
    componentDidMount() {
        console.log('Did Mount!')
      this.setState({ amount: this.props.amount })
    }
//   Uneori avem nevoie de datele care au fost stocate în stare înainte de randare. Metoda getSnapshotBeforeUpdate() este apelată imediat după metoda render().
// Metoda getSnapshotBeforeUpdate() stochează valorile anterioare ale stării după ce DOM-ul este actualizat.
// Putem compara starea/props-urile anterioare cu starea/props-urile actualizate folosind această metodă. 
// Metoda getSnapshotBeforeUpdate() nu funcționează singură, valoarea pe care o returnează este transmisă metodei componentDidUpdate() ca un al treilea parametru.
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Snapshot Before Update!')
      // previous state
      document.getElementById('previous').innerHTML =
        'Previous Amount: ' + prevState.amount
    }
  
    componentDidUpdate() {
        console.log('Component Did Update!')
      // current state
      document.getElementById('new').innerHTML =
        'Current Amount: ' + this.state.amount
    }
    //  Componenta utilizator” ia suma ca prop. În interiorul componentei User, valoarea stării este setată la 2000 și are metodele getSnapshotBeforeUpdate() și componentDidUpdate() . Aceste două metode setează valorile prevState și starea curentă la două div-uri diferite.
// Am numit componenta User în interiorul componentei App și i- am transmis o valoare de 1000 . Deci, atunci când codul rulează, obținem rezultatul ca 2000 si 1000
// Apoi, după aceea, ieșirea se schimbă în 1000 si 1000. Motivul din spatele acestui lucru este că inițial am setat valoarea stării la 2000 în interiorul componentei User,
//  deci valoarea prevState va fi 2000 .Dar după redarea valorii prevState se schimbă la 1000 , care este și valoarea stării curente
        
    render() {
        console.log("2-ed render!");
      return (
        <div>
          <div id="previous">Previous Amount: </div>
          <div id="new">New Amount: </div>
        </div>
      )
    }
  }
  
  export default GetSnapshotBeforeUpdate;

  // metoda trebuie sa transmita o valoare pentru a nu afisa ersore in consola
    
    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log('Snapshot Before Update!');
    //     // Return the previous amount to be used in componentDidUpdate
    //     return { previousAmount: prevState.amount };
    // }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log('Component Did Update!');
    //     // Access the previous amount from the snapshot
    //     console.log('Previous Amount:', snapshot.previousAmount);
    // }