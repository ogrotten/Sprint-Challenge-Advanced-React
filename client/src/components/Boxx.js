import React from "react";


export default function Boxx(props) {
	// clg(">>> BOXX");
	// clg(props)


	return (
		<div key={props.id} id={`id${props.id}`}>
			<h3 className="name">{props.name}</h3>
		</div>
	);
};

function clg(...x) {
	for (let exes of x) console.log(exes);
}
