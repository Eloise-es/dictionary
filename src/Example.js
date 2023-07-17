import React from "react";
import { ListGroup } from "react-bootstrap";

export default function Example(props) {
	if (props.example) {
		return (
			<ListGroup.Item>
				<strong>Example: </strong>
				{props.example}
			</ListGroup.Item>
		);
	}
}
