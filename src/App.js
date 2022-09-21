import logo from './logo.svg';
import './App.css';

const num= 44;
const singer ={name: 'Redoy Khan', job: 'singer'}
const singer2 = {name: 'Atif Aslam', job: 'osther singer'}
const singerStyle  = {color: 'purple',backgroundColor: 'yellow'}
function App() {
  const nayoks = ['Rakib','Salman', 'sakib','jahid', 'Bapparaj']
  return (
    <div className="App">
      {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      }
      {/* <Person name="Rakib" nayka="Juma"></Person>
      <Person name="Salman" nayka="Sabnur"></Person>
      <Person name="Raj rajjak" nayka="Sabana"></Person> */}
      <h5>New component</h5>
      <Friend name="Akash" Ing="Software"></Friend>
      <Friend name="Sami" Ing="Mecanical"></Friend>
      <Friend name="Sakib" Ing="Glass and Ceramic"></Friend>
    </div>
  );
}

function Person(props){
  return(
<div className="person">
<h1>{props.name}</h1>
<p>{props.nayka}</p>
</div>
  );
}

function Friend(props){
  return(
    <div className="container">
      <h1>{props.name}</h1>
      <p>profession: {props.Ing}</p>
    </div>
  )
}

export default App;
