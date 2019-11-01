import React from "react";


export default function Boxx(props) {
	// clg(">>> BOXX");
	// clg(props)


	return (
		<div key={props.id}>
			<h3 className="name">{props.name}</h3>
			<button onClick={props.doSave} value={props.id}>
				Save
			</button>
		</div>
	);
};

function clg(...x) {
	for (let exes of x) console.log(exes);
}
