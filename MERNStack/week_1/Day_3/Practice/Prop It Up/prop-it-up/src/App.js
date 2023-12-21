import './App.css';
import PersonCard from './components/PersonCard';
function App() {
  const person1={firstName:"Jane", lastName:"Doe", age:45, hairColor:"Black"}
  const person2={firstName:"John", lastName:"Smith", age:88, hairColor:"Brown"}
  const person3={firstName:"Maria", lastName:"Smith", age:62, hairColor:"Brown"}
  return (
    <div className="App">
      <PersonCard person={person1} />
      <PersonCard person={person2} />
      <PersonCard person={person3} />
    </div>
  );
}

export default App;
