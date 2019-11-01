import React from "react";
import styled from "styled-components";
import { useSave } from "../hooks/useExternal";

import Boxx from "./Boxx"

// import {useLocalStorage} from "./useExternal";

export default function Player(props) {
	clg(">>> Player component");

	const [saved, setSaved] = useSave({});

	const doSave = e => {
		clg("doSave")
		e.preventDefault();
		// clg(e.target.value);
		const chosen = props.players.find(f => f.id == e.target.value);
		clg(chosen);
		setSaved(chosen);
	};

	return (
		<Outer>
			{/* {props.players[7].name} */}
			{props.players ? (
				props.players.map(itm => (
					<Boxx 
						doSave={doSave}
						id={itm.id}
						name={itm.name}
					/>
				))
			) : (
				<h2>Loading...</h2>
			)}
		</Outer>
	);
}

function clg(...x) {
	for (let exes of x) console.log(exes);
}

const Outer = styled.div`
	border: 1px solid silver;
	margin: 20px;
	padding: 5px;
	background-color: #eef;
`;
