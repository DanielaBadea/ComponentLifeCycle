import React from "react";

class ShouldComponentUpdate extends React.Component {
    constructor() {
      super()
      this.state = { color: 'black' }
      console.log("Hey from Constructor!");
    }
    render() {
        console.log('1-st render');
      return (
        <div>
          <h1 style={{ color: this.state.color }}>I am heading</h1>
          <button onClick={() => this.setState({ color: 'red' })}>
            Change Color
          </button>
          <MyComp />
        </div>
      )
    }
  }
// este apelată după metoda statică getDerivedStateFromProps() .
// În mod normal, componenta este actualizată de fiecare dată când se modifică o stare sau un props, dar metoda shouldComponentUpdate() ne oferă controlul asupra acestui comportament.
// MyComp va fi reandat din nou numai dacă elementele de recuzită (props) transmise acestuia se schimbă.
// Această metodă returnează o valoare booleana, adevărată sau falsă, care decide dacă componenta va randa sau nu.
// După shouldComponentUpdate(), metoda render() este apelată pentru a actualiza DOM-ul cu cele mai recente modificări de stare.
  class MyComp extends React.Component {
    shouldComponentUpdate(nextProps) {
      // Rendering the component only if passed props value is changed
    //   Verifică dacă props value s-a schimbat în comparație cu elementele actuale și, dacă s-a schimbat, revine true, indicând că componenta ar trebui să se actualizeze.
    //  Dacă value prop nu s-a schimbat, revine false, indicând că componenta nu ar trebui să se actualizeze inutil.
      return nextProps.value !== this.props.value ? true : false
    // Dacă valueprop s-a schimbat, metoda revine true, declanșând o re-rendare. În caz contrar, se întoarce false, evitând redări inutile. return nextProps.value !== this.props.value
    }
    render() {
      console.log('MyComp component is called')
      return <h2>React Life Cycle methods</h2>
    }
  }
  export default ShouldComponentUpdate;