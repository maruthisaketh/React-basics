import { useState } from "react";

import Header from "./components/Header/Header.jsx"
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import TabButtons from "./components/TabButtons/TabButtons.jsx";
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcepts key={conceptItem.title} {...conceptItem} />)}

            {/*<CoreConcepts title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />*/}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButtons isSelected={selectedTopic === "Components"}
              onClick={() => handleClick("Components")}>Components</TabButtons>
            <TabButtons isSelected={selectedTopic === "JSX"}
              onClick={() => handleClick("JSX")}>JSX</TabButtons>
            <TabButtons isSelected={selectedTopic === "Props"}
              onClick={() => handleClick("Props")}>Props</TabButtons>
            <TabButtons isSelected={selectedTopic === "State"}
              onClick={() => handleClick("State")}>State</TabButtons>
          </menu>
          {!selectedTopic ? <p>Select a Topic</p> :
            (<div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>)}
        </section>
      </main>
    </div>
  );
}

export default App;
