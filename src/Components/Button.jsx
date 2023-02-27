import { useState } from "react";

export default function Button() {
	const [count, setCount] = useState(0);

	function handleClick() {
		setCount(count + 1);
		console.log(count + 1);
	}

	return (
		<button type="button" className="favorite_button" onClick={handleClick}>
			The Button
		</button>
	);
}
