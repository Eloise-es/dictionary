import React from "react";
import Meaning from "./Meaning";

export default function Result(props) {
	if (props.results) {
		const word = props.results.word;
		const definitions = props.results.meanings[0].definitions;
		let definitionsList = "";
		for (let definition of definitions) {
			definitionsList += `<li>${definition.definition}</li>`;
		}
		return (
			<div className="Results">
				<h1>{word}</h1>
				<ul>
					{props.results.meanings.map(function (meaning, index) {
						return (
							<li>
								<Meaning meaning={meaning} />
							</li>
						);
					})}
				</ul>
			</div>
		);
	} else {
		return null;
	}
}
