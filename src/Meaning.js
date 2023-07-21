import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { ListGroup, Row } from "react-bootstrap";

export default function Meaning(props) {
	return (
		<Col xs={12} sm={6} md={4} lg={3} className="mb-3">
			<Card key={props.index} className="h-100">
				<Card.Body>
					<Card.Title>
						{props.meaning.partOfSpeech.toUpperCase()}:{" "}
						{props.meaning.definition}
					</Card.Title>
				</Card.Body>
				<ListGroup variant="flush">
					<Example example={props.meaning.example} />
					<Synonyms synonyms={props.meaning.synonyms} />
				</ListGroup>
			</Card>
		</Col>
	);
}
