function Paragraphes(props) {
	const { note, id } = props;
	console.log("", note, id);
	return (
		<>
			<div>
				<p className="test-div">{note}</p>
			</div>
		</>
	);
}

export default Paragraphes;
