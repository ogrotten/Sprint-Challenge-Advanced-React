import React from "react";
import styled from "styled-components";
import { useDark } from "../hooks/useExternal";

import Boxx from "./Boxx"

// import {useLocalStorage} from "./useExternal";

export default function Player(props) {
	clg(">>> Player component");

	const [dark, setDark] = useDark(false);

	const togDark = e => {
		e.preventDefault();
		setDark(!dark);
	};

	return (
		<Outer>
			{/* {props.players[7].name} */}
			<button onClick={togDark} >
				Lights
			</button>

			{props.players ? (
				props.players.map(itm => (
					<Boxx 
						togDark={togDark}
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
	width: 250px;
	margin: 20px auto;
	padding: 5px;
	background-color: #eef;
`;
