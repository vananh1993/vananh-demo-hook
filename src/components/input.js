export default function Input (props) {
	return (
		<input 
			placeholder={props.placeholder}
			value={props.value}
			{...props}
		/>
	)
}