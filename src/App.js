import logo from "./logo.jpg";
import "./App.css";
import Dictionary from "./Dictionary";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function App() {
	return (
		<div className="app">
			<Navbar className="navbar" sticky="top" data-bs-theme="light">
				<Container>
					<Navbar.Brand href="/">
						<img
							src={logo}
							height="60"
							className="d-inline-block align-top"
							alt="React Bootstrap logo"
						/>
					</Navbar.Brand>
				</Container>
			</Navbar>
			<main>
				<Dictionary />
			</main>
		</div>
	);
}

export default App;
