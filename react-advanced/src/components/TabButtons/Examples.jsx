import TabButtons from "./TabButtons";
import { EXAMPLES } from "../../data";
import { useState } from "react";
import Tabs from "./Tabs";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleClick(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    return (
        <section id="examples">
            <Tabs
            buttonsContainer = "menu" 
            buttons={<>
                <TabButtons isSelected={selectedTopic === "Components"}
                    onClick={() => handleClick("Components")}>Components</TabButtons>
                <TabButtons isSelected={selectedTopic === "JSX"}
                    onClick={() => handleClick("JSX")}>JSX</TabButtons>
                <TabButtons isSelected={selectedTopic === "Props"}
                    onClick={() => handleClick("Props")}>Props</TabButtons>
                <TabButtons isSelected={selectedTopic === "State"}
                    onClick={() => handleClick("State")}>State</TabButtons>
            </>}>
                <h2>Examples</h2>
                {!selectedTopic ? <p>Select a Topic</p> :
                    (<div id="tab-content">
                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
                            <code>{EXAMPLES[selectedTopic].code}</code>
                        </pre>
                    </div>)}
            </Tabs>
        </section>
    );
}