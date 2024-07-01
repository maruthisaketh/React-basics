import componentImg from "./assets/components.png"
import propsImg from "./assets/config.png"
import jsxImg from "./assets/jsx-ui.png"
import stateImg from "./assets/state-mgmt.png"

export const CORE_CONCEPTS = [
    {
        image: componentImg,
        title: "Components",
        description: "The Core UI building Block - Compose the user interface by combining multiple components."
    },
    {
        image: jsxImg,
        title: "JSX",
        description: "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered."
    },
    {
        image: propsImg,
        title: "Props",
        description: "Make components configurable (and therefore reusable) by passing input data to them."
    },
    {
        image: stateImg,
        title: "State",
        description: "React-managed data which, when changed, causes the component to re-render & the UI to update."
    }
];

export const EXAMPLES = {
    Components : {
        title: 'Components',
        description: 'Components are building blocks of React Applications. A component is a self-contained module (HTML + Optional CSS + JS) that renders some output.',
        code: ` function Welcome() {
                    return <h1> Hello World! </h1>;
                }`
    },
    JSX : {
        title: "JSX",
        description: "JSX is a synntax extension of JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).",
        code: `<div>
                    <h1> welcome {userName} </h1>
                    <p> Time to learn React! </p>
                </div>`
    },
    Props : {
        title: "Props",
        description: "Components accept arbitrary inpputs called Props. They are like function arguments.",
        code: ` function Welcome(props) {
                    return <h1> Hello {props.name} </h1>;
                }`
    },
    State : {
        title: "State",
        description: "State allows React components to change their output over time in response to user actions, network responses, and anything else.",
        code: `function Counter() {
                    const [ isVisible, setIsVisible ] = useState('false');

                    function handleClick() {
                        setIsVisible(true)
                    }
                    return (
                        <div>
                            some code
                        </div>
                    );
                }`
    }
}