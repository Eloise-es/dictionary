import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { ListGroup, Row } from "react-bootstrap";

export default function Meaning(props) {
	return (
		<Row>
			{props.meaning.definitions.map(function (definition, index) {
				return (
					<Col xs={12} sm={6} md={4} lg={3} className="mb-3">
						<Card key={props.index} className="h-100">
							<Card.Body key={index}>
								<Card.Title>{definition.definition}</Card.Title>
							</Card.Body>
							{props.word} ({props.meaning.partOfSpeech})
							<ListGroup variant="flush">
								<Example example={definition.example} />
								<Synonyms synonyms={definition.synonyms} />
							</ListGroup>
						</Card>
					</Col>
				);
			})}
		</Row>
	);
}
