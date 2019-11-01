import React from "react";
import styled from "styled-components";

import Boxx from "./Boxx"

// import {useLocalStorage} from "./useExternal";

export default function Player(props) {
	clg(">>> Player component");

	return (
		<Outer>
			{props.players ? (
				props.players.map(itm => (
					<Boxx 
						id={itm.id}
						name={itm.name}
					/>
				))
			) : (
				<h2>Loading...</h2>
			)}
			{props.country}
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
