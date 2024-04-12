// Această metodă este apelată chiar înainte ca componenta să fie demontată sau distrusă. 
// Demontarea înseamnă pur și simplu îndepărtarea componentei din DOM, astfel încât să nu-i putem modifica starea sau să o redăm din nou.

// Să presupunem că avem un buton clic pe mine pe pagina de pornire. Când utilizatorul trece la o pagină nouă, atunci această componentă nu este de niciun folos.
//  Deci, în acel moment, ar trebui să fie demontat.

// Deoarece este apelat chiar înainte de demontare, este un loc perfect pentru a efectua orice curățare necesară, cum ar fi solicitările de rețea sau temporizatoarele.

// class App extends React.Component {
//     componentDidMount() {
//       //the event listener is added
//       element.addEventListener()
//     }
  
//     componentWillUnmount() {
//       //the event listener is removed
//       element.removeEventListener()
//     }
//   }
  