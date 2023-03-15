import './App.css';
import PersonCard from "./components/PersonCard"

function App() {
  return (
    <div className="App">
      <PersonCard
        firstName={"Matthew"}
        lastName={"Porter"}
        age={27}
        hairColor={"Brown"}
      />
      <PersonCard
        firstName={"Sol"}
        lastName={"BadGuy"}
        age={45}
        hairColor={"Brown"}
      />
      <PersonCard
        firstName={"Sin"}
        lastName={"Kiske"}
        age={38}
        hairColor={"Blonde"}
      />
      <PersonCard
        firstName={"Ramlethal"}
        lastName={"Valentine"}
        age={"???"}
        hairColor={"Blonde"}
      />
    </div>
  );
}

export default App;
