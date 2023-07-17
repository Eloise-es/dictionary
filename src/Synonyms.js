import React from "react";
import { ListGroup } from "react-bootstrap";

export default function Synonyms(props) {
	if (props.synonyms.length) {
		return (
			<ListGroup.Item>
				<strong>Synonyms:</strong>
				<ul>
					{props.synonyms.map(function (synonym, index) {
						return <li key={index}>{synonym}</li>;
					})}
				</ul>
			</ListGroup.Item>
		);
	} else {
		return null;
	}
}
