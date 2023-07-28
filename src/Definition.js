import React from "react";
import { ListGroup } from "react-bootstrap";

export default function Definition(props) {
	if (props.definition) {
		return (
			<ListGroup.Item key={props.index}>
				<strong>Definition: </strong>
				{props.definition}
			</ListGroup.Item>
		);
	}
}
