import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import { Card, Row, Container } from "react-bootstrap";

export default function Result(props) {
	if (props.results) {
		props.results.meanings.map(function (meaning, index) {
			console.log(meaning);
		});
		const word = props.results.word;
		return (
			<Container className="Results">
				<Card className="mb-3 text-center">
					<Card.Body>
						<h1>{word}</h1>
						<Phonetics phonetics={props.results.phonetics} />
					</Card.Body>
				</Card>
				<Row className="justify-content-center">
					{props.results.meanings.map(function (meaning, index) {
						return <Meaning meaning={meaning} index={index} word={word} />;
					})}
				</Row>
			</Container>
		);
	} else {
		return null;
	}
}
