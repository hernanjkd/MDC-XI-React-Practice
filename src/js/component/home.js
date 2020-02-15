import React, { useState, useEffect } from "react";

//create your first component
export function Home() {
	const [people, setPeople] = useState([
		2,
		3,
		4,
		5,
		6,
		7,
		"adding",
		"the",
		"items",
		"more items"
	]);

	return (
		<div className="text-center">
			{people.map((item, index) => {
				return <div key={index}>{item}</div>;
			})}
		</div>
	);
}

// function splitArray(arr, amount) {
//     let newArr = [];
//     let length = arr.length;
//     for (let i=0; i<length; i += amount)
//         newArr.push(arr.length < amount ? arr : arr.splice(0, amount));
//     return newArr;
// }