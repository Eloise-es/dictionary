import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import { Card, Row, Container } from "react-bootstrap";

export default function Result(props) {
	// Create refactored array
	if (props.results) {
		const data = props.results.meanings;
		data.refactored = [];
		data.map((el) => {
			// 2. set data array
			// 3. populate with required objects in correct structure
			el.definitions.forEach((o) => {
				data.refactored.push({
					partOfSpeech: el.partOfSpeech,
					definition: o.definition,
					example: o.example,
					synonyms: o.synonyms,
				});
			});
		});

		console.log("Result = ", data);

		const word = props.results.word;
		return (
			<Container className="Results">
				<Card className="mb-3 text-center">
					<Card.Body>
						<h1>{word}</h1>
						<Phonetics phonetics={props.results.phonetics} />
					</Card.Body>
				</Card>
				<Row className="justify-content-start">
					{data.refactored.map(function (meaning, index) {
						return <Meaning meaning={meaning} index={index} word={word} />;
					})}
				</Row>
			</Container>
		);
	} else {
		return null;
	}
}

// Object.assign(resultsData, { meanings: props.results.meanings })
// const result = props.results.meanings.map(({ meaning, ...o }) => {
// 	o,
// 		data.meanings.map(({ definitions, ...r }) => {
// 			partOfSpeech: data.partOfSpeech;
// 		});
// });
