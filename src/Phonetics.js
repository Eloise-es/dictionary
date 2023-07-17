import React from "react";

export default function Phonetics(props) {
	return (
		<div>
			<strong>Pronunciation: </strong>
			{props.phonetics.map(function (phonetics, index) {
				if (phonetics.audio) {
					return (
						<span key={index}>
							<a href={phonetics.audio} target="_blank" rel="noreferrer">
								{phonetics.text}
							</a>
							&nbsp;&nbsp;
						</span>
					);
				} else return <span>{phonetics.text} </span>;
			})}
		</div>
	);
}
