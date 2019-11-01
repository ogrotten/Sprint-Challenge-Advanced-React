import React from "react";
import "./App.css";
import axios from "axios";
import Player from "./components/Player";

function clg(...x) {
	for (let exes of x) console.log(exes);
}

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			player: {}
			// stats: null
		};
		this.defaultPlayer = "";
	}

	componentDidMount() {
		const fetchURL = "http://localhost:5000/api/players"
		clg(">>> Mount");
		axios
			.get(fetchURL)
			.then(res => {
				this.setState({ players: res.data });
				// clg("Mount vvvvv",this.state.players,"Mount ^^^^^");
			})
			.catch(err => {
				clg(`Problem: ${err}`);
			});
	}

	// componentDidUpdate() {
	// 	clg(">>> UpD");
	// 	if (this.state.followers === null && this.state.user.followers > 0) {
	// 		axios
	// 			.get("https://api.github.com/users/ogrotten/followers")
	// 			.then(res => {
	// 				this.setState({ followers: res.data });
	// 				// clg(this.state.followers);
	// 			})
	// 			.catch(err => {
	// 				clg(`Problem: ${err}`);
	// 			});
	// 	}
	// }

	render() {
		return (
			<div className="App">
				<Player
					players={this.state.players} /* stats={this.state.stats} */
				></Player>
			</div>
		);
	}
}

export default App;
