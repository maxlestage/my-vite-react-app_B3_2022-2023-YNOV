import { useState } from "react";
import "./App.css";
import Notes from "./Components/Notes";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<Notes />
		</div>
	);
}

export default App;
