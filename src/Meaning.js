import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Results(props) {
	return (
		<div>
			<h3>{props.meaning.partOfSpeech}</h3>
			{props.meaning.definitions.map(function (definition, index) {
				return (
					<div key={index}>
						<p>
							<strong>Definition: </strong>
							{definition.definition}
							<Example example={definition.example} />

							<Synonyms synonyms={definition.synonyms} />
						</p>
					</div>
				);
			})}
		</div>
	);
}
