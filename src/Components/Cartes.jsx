import Paragraphes from "./Paragraphes";

const notes = [
	"Lorem ipsum dolor sit amet",
	"Consectetur adipiscing elit",
	"Sed do eiusmod tempor incididunt",
	"Ut labore et dolore magna aliqua",
	"Ut enim ad minim veniam",
	"Quis nostrud exercitation ullamco",
	"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
];

const listNotes = notes.map((note, id) => (
	<Paragraphes note={note} id={id} key={(id += 1)} />
));

function Cartes() {
	return (
		<>
			<div>{listNotes}</div>
		</>
	);
}

export default Cartes;
