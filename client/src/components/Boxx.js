import React from "react";
import { useSave } from "../hooks/useExternal";


export default function Boxx(props) {
	clg(">>> BOXX");

	const [saved, setSaved] = useSave([]);

	const doSave = e => {
		e.preventDefault();
		// clg(e.target.value);
		const chosen = props.players.find(f => f.id == e.target.value);
		// clg(chosen);
		setSaved(chosen);
	};

	return (
		<Boxx key={props.id}>
			<h3 className="name">{props.name}</h3>
			<button onClick={doSave} value={props.id}>
				Save
			</button>
		</Boxx>
	);
};

function clg(...x) {
	for (let exes of x) console.log(exes);
}
