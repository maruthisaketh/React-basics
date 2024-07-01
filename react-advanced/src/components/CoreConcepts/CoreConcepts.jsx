import "./CoreConcepts.css"

function CoreConcepts(props) {
    /*Can also use object destructuring by placing {image, title, description} inplace of props*/
    return (
        <li>
            <img src={props.image} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    );
}

export default CoreConcepts;