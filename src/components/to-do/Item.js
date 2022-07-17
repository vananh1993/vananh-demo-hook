export default function Item (props) {
    return (
        <div className="" >
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <button onClick={props.onDelete}>Delele</button>
            <button onClick={props.onEdit}>Edit</button>
            <button onClick={props.onDone}>Check done</button>
        </div>
    )
}
