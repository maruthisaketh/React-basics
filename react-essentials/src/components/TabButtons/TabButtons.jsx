export default function TabButtons(props) {
    return (
        <li><button onClick={props.onClick}>{props.children}</button></li>
    );
}