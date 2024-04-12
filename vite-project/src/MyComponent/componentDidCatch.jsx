// Metoda componentDidCatch() funcționează similar cu metoda statică getDerivedStateFromError() . Este apelat după ce apare o eroare în orice componentă copil. 
// Odată cu eroarea aruncată, i se mai trece un argument care reprezintă mai multe informații despre eroare.

// componentDidCatch(error, info){
//     // we can make a call to an external API in this method.
// }

// class ErrorBoundary extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             hasError: false
//         };
//     }

//     static getDerivedStateFromError(error) {
//         console.log('Error:', error);
//         return {
//             hasError: true
//         };
//     }

//     componentDidCatch(error, info) {
//         console.log("Error - componentDidCatch", error);
//         console.log("Error Desc: ", info);
//     }

//     render() {
//         if (this.state.hasError) {
//             return <h1>Something went wrong.</h1>;
//         }

//         return this.props.children;
//     }
// }
