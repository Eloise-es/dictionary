import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import Definition from "./Definition";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { ListGroup, ListGroupItem, Row } from "react-bootstrap";

export default function DefinitionCard(props) {
	return (
		<Col xs={12} sm={6} md={4} lg={4} xl={3} className="mb-3">
			<Card key={props.index} className="h-100">
				<ListGroup variant="flush">
					<Definition definition={props.definition} index={props.index} />
					<Example example={props.example} index={props.index} />
					<Synonyms synonyms={props.synonyms} />
				</ListGroup>
			</Card>
		</Col>
	);
}
