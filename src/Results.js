import React from "react";
import DefinitionCard from "./DefinitionCard";
import Phonetics from "./Phonetics";
import { Card, Row, Container, Tabs, Tab } from "react-bootstrap";

export default function Result(props) {
	// Create refactored array
	if (props.results) {
		const data = props.results;
		// data.refactored = [];
		// data.map((el) => {
		// 	// 2. set data array
		// 	// 3. populate with required objects in correct structure
		// 	el.definitions.forEach((o) => {
		// 		data.refactored.push({
		// 			partOfSpeech: el.partOfSpeech,
		// 			definition: o.definition,
		// 			example: o.example,
		// 			synonyms: o.synonyms,
		// 		});
		// 	});
		// });

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
				{/* Create tabs for each part of speech */}
				<Tabs defaultActiveKey="0" id="POS-tabs" className="mb-3" justify>
					{data.meanings.map(function (meaning, index) {
						return (
							<Tab eventKey={index} title={meaning.partOfSpeech}>
								<Row className="justify-content-start">
									{meaning.definitions.map(function (def, index) {
										return (
											<DefinitionCard
												definition={def.definition}
												example={def.example}
												synonyms={def.synonyms}
												index={index}
												word={props.word}
											/>
										);
									})}
								</Row>
							</Tab>
						);
					})}
				</Tabs>
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
