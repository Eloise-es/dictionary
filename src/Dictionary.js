import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import { Form, Button, InputGroup, Container, Row, Col } from "react-bootstrap";

export default function Dictionary() {
	let [keyword, setKeyword] = useState(null);
	const [results, setResults] = useState(null);

	// What to do with the response
	function handleResponse(response) {
		console.log("Response = ", response);
		setResults(response.data[0]);
		console.log("Results = ", response.data[0]);
	}

	// Error handling
	function error() {
		alert("Nothing found.");
	}
	// when search button is pressed
	function search(event) {
		event.preventDefault();

		let apiurl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiurl).then(handleResponse).catch(error);
	}

	// set keyword to search with
	function handleKeywordChange(event) {
		setKeyword(event.target.value);
	}

	let altResults = {};

	// render the search bar
	return (
		<Container className="Dictionary mt-5">
			<Row className="justify-content-md-center">
				<Col lg="8">
					<Form onSubmit={search}>
						<InputGroup className="mb-3">
							<Form.Control
								type="search"
								placeholder="Type a word to look up"
								aria-label="Dictionary search bar"
								autoFocus={true}
								onChange={handleKeywordChange}
							/>
							<Button className="submit-button" type="submit">
								Search
							</Button>
						</InputGroup>
					</Form>
				</Col>
			</Row>
			<Results results={results} />
		</Container>
	);
}
