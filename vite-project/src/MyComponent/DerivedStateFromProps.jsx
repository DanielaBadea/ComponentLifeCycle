import React, { Component } from "react";

class MyComp extends Component {
    constructor(props){
        super(props);
        this.state = {
            money: 10,
        };
        console.log("Hey from Constructor!");
    }
// get-derived-state-from-props , aceasta înseamnă că această metodă permite unei componente să-și schimbe starea internă ca răspuns la o modificare a props.
//  Este invocata chiar înainte de a apela metoda de randare, se întâmplă atât la montarea inițială, cât și la cea ulterioară. 
// Această metodă ar trebui să returneze un obiect pentru a actualiza starea sau null pentru a nu actualiza nimic.
// Scopul principal al acestei metode este de a se asigura că state și props sunt sincronizate.
    static getDerivedStateFromProps(props, state){
        // return {
        //     money: 20 // Update the money state based on the props
        // };
// Motivul pentru care acest cod dă 20 ca rezultat este că static getDerivedStateFromProps() este apelat înainte de metoda de randare și actualizează valoarea stării la 20 .
        return null;
    }

    render(){
        console.log('1-st render');
        return(
            <div className="App">
                <header className="App-header">
                    <p>You have = {this.state.money}.</p>
                </header>
            </div>
        );
    }
}

export default MyComp;
