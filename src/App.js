import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Person name="Shahadat Hossen" Profession="Full Stack Web Developer"></Person>
        <Person name="Ashik Rahman" Profession="Student"></Person>
      </header>
    </div>
  );
}


function Person(props){
  return (
  <div style={{border:'2px solid red',margin:'10px',padding:'20px'}}>
    <h1>Name : {props.name}</h1>
    <h3>Profession : {props.Profession}</h3>
  </div>
  )
}

export default App;


