import Header from "./components/Header/Header.jsx"
import DisplayCoreConcepts from "./components/CoreConcepts/DisplayCoreConcepts.jsx";
import Examples from "./components/TabButtons/Examples.jsx";

function App() {

  return (
    <>
      <Header />
      <main>
        <DisplayCoreConcepts/>
        <Examples/>
      </main>
    </>
  );
}

export default App;
