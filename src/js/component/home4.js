import React, { useState } from "react";

//create your first component
export function Home() {
	const [list, setList] = useState([]);
	const [content, setContent] = useState("");
	const [remove, setRemove] = useState();

	return (
		<>
			<div className="text-center mt-5 pt-5">
				<button
					className="anything text-light"
					onClick={() => {
						setList(list.concat(content));
						setContent("");
					}}>
					Add To Do
				</button>
				<input
					value={content}
					onChange={e => setContent(e.target.value)}
					onKeyPress={event => {
						if (event.key === "Enter") {
							setList(list.concat(content));
							setContent("");
						}
					}}
				/>
				{list.map((item, index) => {
					return (
						<div
							key={index}
							onClick={() =>
								setList(list.filter(e => e !== item))
							}>
							{item}
						</div>
					);
				})}
				<input
					onChange={e => setRemove(e.target.value)}
					onKeyPress={e => {
						if (e.key === "Enter") {
							setList(list.filter(e => e !== remove));
						}
					}}
				/>
			</div>
		</>
	);
}
