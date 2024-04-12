
// Metoda componentDidUpdate() este apelată după getSnapshotBeforeUpdate() . 
// Această metodă primește două argumente prevProps și prevState . Putem trece un al treilea argument cu numele snapshot care este returnat de la getSnapshotBeforeUpdate() .

// componentDidUpdate(prevProps, prevState, snapshot){}

// Un caz comun de utilizare al acestei metode este efectuarea de apeluri API ori de câte ori componenta se actualizează. 
// Putem verifica mai întâi dacă există vreo schimbare de stare și apoi să facem apelul API în această funcție.

// componentDidUpdate(prevProps, prevState, snapshot){
//     if(this.props.userId !== prevProps.userId){
//         //make the call to API here
//     }
// }

// Un lucru de remarcat aici este că componentDidUpdate() nu va fi apelat dacă shouldComponentUpdate() returnează false.